const path = require('path')

module.exports = {
  webpack: function (config, env) {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src')
    }
    config.stats.logging = 'info'
    return config
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost)
      // TODO 三种环境
      config.proxy = {
        '/api/neptune/*': {
          target: ``,
          // pathRewrite: { '^/api/neptune': '' },
          changeOrigin: true
        }
      }
      return config
    }
  }
}
