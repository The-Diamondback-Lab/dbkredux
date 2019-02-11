/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */

// jquery
import $ from 'jquery';

// axios
import axios from 'axios';

// moment
import moment from 'moment';

import Parser from 'html-react-parser';

import Advertisement from '../components/Advertisement';
import StoryGallery from '../components/StoryGallery';

const API_URL = 'https://jimcnlzkdg.execute-api.us-east-1.amazonaws.com/v0';

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
  throw new Error(message);
};

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
  operator = operator.trim();
  let response;

  if (operator === 'less') {
    response = $(window).width() < breakpoint;
  } else if (operator === 'less_eq') {
    response = $(window).width() <= breakpoint;
  } else if (operator === 'greater') {
    response = $(window).width() > breakpoint;
  } else if (operator === 'greater_eq') {
    response = $(window).width() >= breakpoint;
  } else {
    handleError(`Invalid operator: ${operator}\nValid operators are less, less_eq, greater, and greater_eq`);
  }

  return response;
};

/**
 * Makes a request.
 *
 * @param {string} endpoint - url to request
 * @return {*} specified data
 */
export const request = async (endpoint) => {
  try {
    endpoint = `${API_URL}${endpoint}`;
    let req = await axios.get(endpoint);

    return req.data;
  } catch (e) {
    handleError(`Error making request: ${e}`);
  }
};

export const requestBatch = async (endpoints) => {
  try{
    let promises = [];
    endpoints.forEach(endpoint => promises.push(axios.get(`${API_URL}${endpoint}`)));
    let req = await axios.all(promises);
    req = req.map(resp => resp.data);
    return req;
  }
  catch (e) {
    handleError(`Error making request: ${e}`);
  }
}

/**
 * This function takes an article preview object and parses its date values to be used later.
 *
 * @param {object} object - article object to parse
 * @returns {object} article object with parsed dates
 */
export const parseDate = object => {
  const { duration } = moment;

  // capture current date, article publish date, and article modified date
  let original_date = object.date;

  let dates = {
    now: moment(moment(), 'MM/DD/YYYY'),
    published: moment(moment(original_date), 'MM/DD/YYYY'),
    updated: moment(moment(object.modified), 'MM/DD/YYYY')
  };

  /*
   * NOTICE: disabling radix below because the ago function is valid
   * when callling d.diff(d2). re-enabled after function defintion.
   */

  /* eslint-disable radix */

  /**
   * Function that returns how many hours or days ago the article was
   * published or modified.
   *
   * @param {Date} d current date
   * @param {Date} d2 published or modified date
   * @param {string} type hours | days
   * @returns {number} how many hours or days ago the article was
   * published or modified
   */
  let ago = (d, d2, type) => parseInt(type === 'hours'
    ? duration(d.diff(d2)).asHours() : duration(d.diff(d2)).asDays()
  );

  /*
   * NOTICE: re-enabling radix below
   */

  /* eslint-enable radix */

  // updated article object with published info
  object.date = {
    ago: {
      published: {
        hours: ago(dates.now, dates.published, 'hours'),
        days: ago(dates.now, dates.published, 'days')
      },
      updated: {
        hours: ago(dates.now, dates.updated, 'hours'),
        days: ago(dates.now, dates.updated, 'days')
      }
    },
    formatted: moment(original_date).format('MMMM DD, YYYY'),
    updated: moment(dates.updated).format('MMMM DD, YYYY')
  };
  return object;
};

export const replaceLink = object => {
  object.link = object.link.replace('http://52.207.216.69', '');
  object.author.link = object.author.link.replace('http://52.207.216.69', '');
  object.categories.forEach(cat => {cat.link = cat.link.replace('http://52.207.216.69', '');});
  return object;
}

/**
 * This is a simple wrapper function that detects if the user has scrolled the
 * page. It will return 0 (false) if at the top of the page, or the distance
 * from the top of the page, a positive number (true).
 *
 * @returns {number} distance from the top of the page
 */
export const scrolling = () => $(window).scrollTop();

export const loadImage = (id) => {
  document.getElementById(id).classList.remove('preload');
  document.getElementById(id).classList.add('postload');
}

/*
  Do any processing for an article body (like loading social media widgets, etc).
*/
export const processArticleBody = (articleElement) => {
  if (window.instgrm){
    window.instgrm.Embeds.process();
  }
  if (window.twttr){
    window.twttr.widgets.load();
  }
}

/*
  Primary function is to inject ads, but also process any HTML for dynamic content
*/
export const loadDynamicArticleContent = (content) => {
  var parsed = Parser(content);
  var ad1 = <React.Fragment key={parsed.length+1}>
    <Advertisement path="300x250_Mobile_InStory_Top" size={[300, 250]} mode="mobile"></Advertisement>
    <Advertisement path="300x250_Desktop_InStory_Top" size={[300, 250]} mode="desktop"></Advertisement>
    </React.Fragment>;
  
  var ad2 = <React.Fragment key={parsed.length+2}>
  <Advertisement path="300x250_Mobile_InStory_Bottom" size={[300, 250]} mode="mobile"></Advertisement>
  <Advertisement path="300x250_Desktop_InStory_Bottom" size={[300, 250]} mode="desktop"></Advertisement>
  </React.Fragment>;

  var output = [];
  var paragraphs = 0;
  var ad1Pushed = false;
  var ad2Pushed = false;
  parsed.forEach(e => {
    output.push(e);
    if (typeof e === 'object' && e.type === 'p'){
      paragraphs++;
    }
    if (typeof e === 'object' && e.type === 'div' && e.props.className.includes('gallery')){
      let data = output.pop();
      output.push(<StoryGallery data={data} />);
    }
    if (paragraphs === 2 && !ad1Pushed){
      output.push(ad1);
      ad1Pushed = true;
    }
    if (paragraphs === 6 && !ad2Pushed){
      output.push(ad2);
      ad2Pushed = true;
    }
  });

  return output;
}

export const chooseArticleDates = (article) => {
  var date = article.date;
  if (date.ago.updated.hours === date.ago.published.hours){
    date.updated = "";
    date.published = "Published " + formatDate(date.formatted, date.ago.published);
  }
  else {
    date.updated = "Updated " + formatDate(date.updated, date.ago.updated);
    date.published = "Published " + formatDate(date.formatted, date.ago.published);
  }
  return article;
}

/*
  This function loads in the homepage configuration, makes all necessary API calls to /articles, and stores the resulting data
*/
export const loadHomepageArticles = async (config) => {
  var articleRequests = []
  config.forEach(params => {
    if (params.category === 'latest'){
      articleRequests.push(`/articles?preview=true&per_page=${params.max}`);
    }
    else{
      articleRequests.push(`/articles?category=${params.category}&preview=true&per_page=${params.max}`);
    }
  })
  let response = await requestBatch(articleRequests);
  return response;
}

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

export const ERRORS = {
  404: {
      header: "404: Page Not Found",
      message: "We couldn't find that page!"
  },
  500: {
      header: '500: Internal Server Error',
      message: "Something went wrong."
  }
}

function formatDate(original, ago) {
  if (ago.days <= 10) { //if < 10 days ago, display "ago" format
    if (ago.hours < 24) {
      if (ago.hours === 0) {
        return "today";
      } 
      else if (ago.hours === 1) {
        return ago.hours + " hour ago";
      } 
      else {
        return ago.hours + " hours ago";
      }
    } 
    else if (ago.days === 1) {
      return ago.days + " day ago";
    } 
    else {
     return ago.days + " days ago";
    }
  }
  else{
    return original;
  }
} 
