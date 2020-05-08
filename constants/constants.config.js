// TODO Should this file be deprecated? This isn't imported anywhere...
// global variables

// html elements
// If you're using this, make sure to export it properly
// const ROOT = {
//   app: document.getElementById('app'),
//   lightbox: document.getElementById('lightbox'),
//   loading: document.getElementById('loading'),
//   sidebar: document.getElementById('sidebar')
// };

// api url
const API_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8080' : 'https://dbknews.com/developer'

// google analytics
const GOOGLE_ANALYTICS_ID = 'UA-130746753-2'

// style
const BREAKPOINTS = {
  xsmall: 320,
  small: 480,
  schmedium: 768,
  medium: 980,
  large: 1200,
  xlarge: 1440
}

export { API_URL, GOOGLE_ANALYTICS_ID, BREAKPOINTS }
