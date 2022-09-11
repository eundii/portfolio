const { defineConfig } = require('@vue/cli-service')
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
  }
})