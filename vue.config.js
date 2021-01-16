module.exports = {

  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: '@import "./src/styles/main.scss";'
      }
    },
    requireModuleExtension: false
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  devServer: {
    open: false
  }
}