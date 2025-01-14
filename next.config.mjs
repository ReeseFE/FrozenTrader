import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

const nextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com'], // Add the external hostname here
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new MonacoWebpackPlugin({
          languages: ['python'], // 只加载 Python 语言支持
          filename: 'static/[name].worker.js', // 添加worker文件名配置
        })
      );
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      'monaco-editor': 'monaco-editor/esm/vs/editor/editor.api',
    };

    return config;
  },
  publicRuntimeConfig: {
    basePath: '',
  },
};

export default nextConfig;
