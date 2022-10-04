const { defineConfig } = require('@vue/cli-service');
const target = 'http://127.0.0.1:3000';

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '.'
    : '/portfolio',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/scss/_value.scss";'
      },
      postcss: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [require('autoprefixer')]
        }
      }
    }
  },
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      }
    }
  }
})