import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new MonacoWebpackPlugin({
          languages: ['python'], // 只加载 Python 语言支持
        })
      );
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      'monaco-editor': 'monaco-editor/esm/vs/editor/editor.api',
    };

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '116.205.117.24:5000/api/:path*',
        // destination: 'https://frozenalpha.site/api/:path*', // 代理到目标服务器
      },
    ];
  },
};

export default nextConfig;
