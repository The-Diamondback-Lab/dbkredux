// next.config.js
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withSass(withCSS({
    webpack: function (config) {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]'
          }
        }
      })
      return config
    }
  }))
