const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {} // We're never in "production server" phase when in development mode
    : !process.env.NOW_REGION
      ? require('next/constants') // Get values from `next` package when building locally
      : require('next-server/constants'); // Get values from `next-server` package when building on now v2

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }
  const withCSS = require('@zeit/next-css')
  const withSass = require('@zeit/next-sass')

  return withSass(withCSS({
    // target: 'serverless',
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
  }));
};
