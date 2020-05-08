const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')
const useProductionBackend = (process.env.PRODUCTION_BACKEND || '').toLowerCase() === 'true'

module.exports = (phase, { defaultConfig }) => {
  let env = null

  // Only use local backend servers if PRODUCTION_BACKEND is not specified and we're in development
  // mode
  if (phase === PHASE_DEVELOPMENT_SERVER && !useProductionBackend) {
    env = {
      API_URL: 'http://localhost:8080',
      WP_URL: 'http://localhost/wordpress'
    }
  } else {
    // Warn if we're not building, not in development mode, and production backend is not defined
    if (phase !== PHASE_PRODUCTION_BUILD && phase !== PHASE_DEVELOPMENT_SERVER && !useProductionBackend) {
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
