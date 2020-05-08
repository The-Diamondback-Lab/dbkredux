const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')
const useBackendServers = (process.env.PRODUCTION_BACKEND || '').toLowerCase() === 'true'

module.exports = (phase, { defaultConfig }) => {
  let env = null

  if (phase === PHASE_DEVELOPMENT_SERVER || useBackendServers) {
    env = {
      API_URL: 'http://localhost:8080',
      WP_URL: 'http://localhost/wordpress'
    }
  } else {
    if (phase !== PHASE_PRODUCTION_BUILD) {
      console.warn(`Unexpected NextJS phase: ${phase}`)
    }

    env = {
      API_URL: 'https://api.dbknews.com',
      WP_URL: 'https://wp.dbknews.com'
    }
  }

  return withCss(withSass({
    env,
    webpack: (config) => {
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
}
