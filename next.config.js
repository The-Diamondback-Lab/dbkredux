const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || process.env.PRODUCTION_BACKEND.toLowerCase() === 'true') {
    return {
      env: {
        API_URL: 'http://localhost:8080',
        WP_URL: 'http://localhost/wordpress'
      }
    }
  } else {
    if (phase !== PHASE_PRODUCTION_BUILD) {
      console.warn(`Unexpected NextJS phase: ${phase}`)
    }

    return {
      env: {
        API_URL: 'https://api.dbknews.com',
        WP_URL: 'https://wp.dbknews.com'
      }
    }
  }
}
