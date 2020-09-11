module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'development' ? '' : '/vue-dz-ui',
  devServer: {
    open: true
  }
}
