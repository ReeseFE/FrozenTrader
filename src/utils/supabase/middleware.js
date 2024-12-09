import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

export async function updateSession(request) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // 刷新认证令牌
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 如果用户未登录，且当前路径是受保护的页面，则重定向到登录页面
  const protectedRoutes = ['/playground'];
  if (!user && protectedRoutes.includes(request.nextUrl.pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // 如果用户已登录，且当前路径是登录页面，则重定向到主页或其他受保护页面
  // if (user && request.nextUrl.pathname === '/login') {
  //   const url = request.nextUrl.clone();
  //   url.pathname = '/protected'; // 或其他受保护页面
  //   return NextResponse.redirect(url);
  // }

  return supabaseResponse;
}
