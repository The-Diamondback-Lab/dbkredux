/* eslint-disable camelcase */

// jquery
import $ from 'jquery'
// axios
import axios from 'axios'
// moment
import moment from 'moment-timezone'
import Parser from 'html-react-parser'

import * as React from 'react'
import Advertisement from '../components/Advertisement'
import StoryGallery from '../components/StoryGallery'

const API_URL = process.env.API_URL
const BASE_WP_URL = process.env.WP_URL
const WP_URL = `${BASE_WP_URL}/wp-json/wp/v2`
const WP_REPLACE = BASE_WP_URL

/*
 * Application utility functions.
 */

/**
* This is a helper function that takes an error message as an argument. It logs
* the error and then throws a new error with the provided message.
*
* @param {string} message - error message
* @throws {Error} new error with provided message
*/
export const handleError = message => {
  throw new Error(message)
}

/**
 * This function takes a breakpoint and an operator argument and returns true if
 * the device width meets the specified arguments.
 *
 * @param {number} breakpoint - breakpoint detect changes
 * @param {string} operator - less | less_eq | greater | greater_eq
 * @returns {boolean} true if window width <= (768px || BREAKPOINTS.schmedium)
 * @throws {Error} if operator argument is invalid
 */
export const responsive = (breakpoint, operator) => {
  operator = operator.trim()
  let response

  if (operator === 'less') {
    response = $(window).width() < breakpoint
  } else if (operator === 'less_eq') {
    response = $(window).width() <= breakpoint
  } else if (operator === 'greater') {
    response = $(window).width() > breakpoint
  } else if (operator === 'greater_eq') {
    response = $(window).width() >= breakpoint
  } else {
    handleError(`Invalid operator: ${operator}\nValid operators are less, less_eq, greater, and greater_eq`)
  }

  return response
}

/**
 * Makes a request.
 *
 * @param {string} endpoint - url to request
 * @return {Promise<any>} specified data
 */
export const request = async (endpoint) => {
  try {
    endpoint = `${API_URL}${endpoint}`
    let req = await axios.get(endpoint)

    return req.data
  } catch (e) {
    console.log(endpoint)
    handleError(e)
  }
}

export const requestBatch = async (endpoints) => {
  try {
    let promises = []
    endpoints.forEach(endpoint => promises.push(axios.get(`${API_URL}${endpoint}`)))
    let req = await axios.all(promises)
    req = req.map(resp => resp.data)
    return req
  } catch (e) {
    handleError(e)
  }
}

/**
 * This function takes an article preview object and parses its date values to
 * be used later.
 *
 * @param {object} object - article object to parse
 * @returns {object} article object with parsed dates
 */
export const parseDate = object => {
  const { duration } = moment
  const { abs, floor } = Math

  const ONE_HOUR = 60
  const ONE_DAY = 1440
  const ONE_WEEK = 10080

  // capture current date, article publish date, and article modified date
  let original_date = object.date
  let formatted = moment(original_date).format('MMMM DD, YYYY')

  let current_date = moment.tz('America/New_York')
  let publish_date = moment.tz(original_date, 'America/New_York')

  let ago = floor(abs(duration(current_date.diff(publish_date)).asMinutes()))

  let longAgo = false
  if (ago >= ONE_WEEK) {
    ago = formatted
    longAgo = true
  } else if (ago === ONE_DAY || parseInt(ago / ONE_DAY) === 1) {
    ago = '1 day ago'
  } else if (ago > ONE_DAY && ago < ONE_WEEK) {
    ago = `${parseInt(ago / ONE_DAY)} days ago`
  } else if (ago === ONE_HOUR || parseInt(ago / ONE_HOUR) === 1) {
    ago = '1 hour ago'
  } else if (ago > ONE_HOUR && ago < ONE_DAY) {
    ago = `${parseInt(ago / ONE_HOUR)} hours ago`
  } else if (ago > 5) {
    ago = `${ago} minutes ago`
  } else {
    ago = 'Just Now'
  }

  // updated article object with published info
  object.date = {
    longAgo: longAgo,
    ago: ago,
    formatted: formatted
  }

  return object
}

/**
 * This is a simple wrapper function that detects if the user has scrolled the
 * page. It will return 0 (false) if at the top of the page, or the distance
 * from the top of the page, a positive number (true).
 *
 * @returns {number} distance from the top of the page
 */
export const scrolling = () => $(window).scrollTop()

export const loadImage = (id) => {
  document.getElementById(id).classList.remove('preload')
  document.getElementById(id).classList.add('postload')
}

/*
  Do any processing for an article body (like loading social media widgets, etc).
*/
export const processArticleBody = (articleElement) => {
  if (window.instgrm) {
    window.instgrm.Embeds.process()
  }
  if (window.twttr) {
    window.twttr.widgets.load()
  }
}

/*
  Primary function is to inject ads, but also process any HTML for dynamic content
*/
export const loadDynamicArticleContent = (content) => {
  // console.log(content);
  let parsed = Parser(content)
  let ad1 = <React.Fragment key={parsed.length + 1}>
    <Advertisement path='300x250_Mobile_InStory_Top' size={[300, 250]} mode='mobile' />
    <Advertisement path='300x250_Desktop_InStory_Top' size={[300, 250]} mode='desktop' />
  </React.Fragment>

  let ad2 = <React.Fragment key={parsed.length + 2}>
    <Advertisement path='300x250_Mobile_InStory_Bottom' size={[300, 250]} mode='mobile' />
    <Advertisement path='300x250_Desktop_InStory_Bottom' size={[300, 250]} mode='desktop' />
  </React.Fragment>

  let output = []
  let paragraphs = 0
  let ad1Pushed = false
  let ad2Pushed = false
  parsed.forEach(e => {
    output.push(e)
    if (typeof e === 'object' && e.type === 'p') {
      paragraphs++
    }
    if (typeof e === 'object' && e.type === 'div' && e.props.className && e.props.className.includes('gallery')) {
      let data = output.pop()
      output.push(<StoryGallery data={data} />)
    }
    if (paragraphs === 2 && !ad1Pushed) {
      output.push(ad1)
      ad1Pushed = true
    }
    if (paragraphs === 6 && !ad2Pushed) {
      output.push(ad2)
      ad2Pushed = true
    }
  })

  return output
}

export const chooseArticleDates = (article) => {
  let date = article.date
  if (date.ago.updated.hours === date.ago.published.hours) {
    date.updated = ''
    date.published = 'Published ' + formatDate(date.formatted, date.ago.published)
  } else {
    date.updated = 'Updated ' + formatDate(date.updated, date.ago.updated)
    date.published = 'Published ' + formatDate(date.formatted, date.ago.published)
  }
  return article
}

/*
  This function loads in the homepage configuration, makes all necessary API calls to /articles, and stores the resulting data
*/
export const loadHomepageArticles = async (config) => {
  let articleRequests = config.map(params => {
    if (params.category === 'latest') {
      return `/articles?preview=true&per_page=${params.max}`
    } else {
      return `/articles?category=${params.category}&preview=true&per_page=${params.max}`
    }
  })
  let response = await requestBatch(articleRequests)
  return response
}

/*
  Configuration for requests made on the homepage - these get created server side.
*/
export const HOMEPAGE_REQUESTS = [
  {
    category: 'latest',
    max: 4
  },
  {
    category: 'campus',
    max: 4
  },
  {
    category: 'sports',
    max: 4
  }
]

/*
  Error codes with corresponding messages
*/
export const ERRORS = {
  404: {
    header: '404: Page Not Found',
    message: "We couldn't find that page!"
  },
  500: {
    header: '500: Internal Server Error',
    message: 'Something went wrong.'
  }
}

function formatDate(original, ago) {
  if (ago.days <= 10) { // if < 10 days ago, display "ago" format
    if (ago.hours < 24) {
      if (ago.hours === 0) {
        return 'today'
      } else if (ago.hours === 1) {
        return ago.hours + ' hour ago'
      } else {
        return ago.hours + ' hours ago'
      }
    } else if (ago.days === 1) {
      return ago.days + ' day ago'
    } else {
      return ago.days + ' days ago'
    }
  } else {
    return original
  }
}

export const getArticlePreviewData = async (wp_id, wp_nonce) => {
  let article = await axios.get(
    `${WP_URL}/posts/${wp_id}?_wpnonce=${wp_nonce}&_embed`,
    { withCredentials: true }
  )
  let articleData = article.data

  let preview = await axios.get(
    `${WP_URL}/posts/${wp_id}/revisions?_wpnonce=${wp_nonce}`,
    { withCredentials: true }
  )
  let previewData = preview.data[0]
  articleData.title = previewData.title
  articleData.content = previewData.content
  articleData.excerpt = previewData.excerpt
  articleData.modified = previewData.modified

  let categories = articleData['_embedded']['wp:term'][0]
  categories = categories.map(cat => {
    cat.link = cat.link.replace(`${WP_REPLACE}`, '')
    return cat
  })
  articleData.categories = categories

  let author = articleData['_embedded']['author'][0]
  author.link = author.link.replace(`${WP_REPLACE}`, '')
  if (author.user_twitter) {
    let handle = author.user_twitter
    handle = handle.trim()
    handle = handle.replace('@', '')
    author.user_twitter = handle
  }
  articleData.author = author

  if (articleData['_embedded']['wp:featuredmedia']) {
    articleData.featured_image = {
      link: articleData['_embedded']['wp:featuredmedia'][0]['source_url'],
      caption: articleData['_embedded']['wp:featuredmedia'][0]['caption']
    }
  }

  return articleData
}

const monthLookup = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

/**
 * Humanizes a date object into the following format: `Month Day, Year`.
 *
 * i.e. can return "March 20, 2020"
 *
 * @param {Date} dateObj
 * @returns {string}
 */
export function humanizeDate(dateObj) {
  let month = monthLookup[dateObj.getMonth()]
  let date = dateObj.getDate()
  let year = dateObj.getFullYear()

  return `${month} ${date}, ${year}`
}

/**
 * Gets the date string to display for a given article. An article should have the
 * advanced custom field "date-to-show"
 *
 * @param {Object} article
 * @returns {string}
 */
export function getArticleDateDisplay(article) {
  let dateToShow = article.acf['date-to-show']

  if (dateToShow === 'last_updated') {
    let parsed = new Date(Date.parse(article.modified))
    return `Last updated ${humanizeDate(parsed)}`
  } else if (dateToShow === 'no_date') {
    return ''
  } else { // Default to original published date
    return article.date.ago
  }
}
