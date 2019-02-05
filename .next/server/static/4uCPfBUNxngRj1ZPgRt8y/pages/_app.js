module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("reactn");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(16)();

routes.add({
  name: 'Home',
  pattern: '/',
  page: 'Home'
}).add({
  name: '404',
  pattern: '/404',
  page: 'ErrorPage'
}).add({
  name: 'Article Page',
  pattern: '/:year([0-9]{4})/:month([0-9]{2})/:day([0-9]{2})/:slug',
  page: 'ArticlePage'
}).add({
  name: 'Category Page',
  pattern: '/category/:categorypath+',
  page: 'CategoryPage'
}).add({
  name: 'Author Page',
  pattern: '/author/:authorId',
  page: 'AuthorPage'
}).add({
  name: 'Search Results',
  pattern: '/search',
  page: 'SearchResults'
}).add({
  name: 'Custom Page',
  pattern: '/:pageId',
  page: 'CustomPage'
}); // .add({name: 'Preview', pattern: '/_preview/:postId/:wpnonce', page: 'ArticlePreview'})

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return responsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return parseDate; });
/* unused harmony export replaceLink */
/* unused harmony export scrolling */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return processArticleBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return injectArticleAds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chooseArticleDates; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Advertisement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable space-before-function-paren */

/* eslint-disable camelcase */
// jquery
 // axios

 // moment




var API_URL = 'https://4v5ahulc28.execute-api.us-east-1.amazonaws.com/dev';
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

var handleError = function handleError(message) {
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

var responsive = function responsive(breakpoint, operator) {
  operator = operator.trim();
  var response;

  if (operator === 'less') {
    response = jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).width() < breakpoint;
  } else if (operator === 'less_eq') {
    response = jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).width() <= breakpoint;
  } else if (operator === 'greater') {
    response = jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).width() > breakpoint;
  } else if (operator === 'greater_eq') {
    response = jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).width() >= breakpoint;
  } else {
    handleError("Invalid operator: ".concat(operator, "\nValid operators are less, less_eq, greater, and greater_eq"));
  }

  return response;
};
/**
 * Makes a request.
 *
 * @param {string} endpoint - url to request
 * @return {*} specified data
 */

var request =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(endpoint) {
    var req;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            endpoint = "".concat(API_URL).concat(endpoint);
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(endpoint);

          case 4:
            req = _context.sent;
            return _context.abrupt("return", req.data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            handleError("Error making request: ".concat(_context.t0));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  return function request(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * This function takes an article preview object and parses its date values to be used later.
 *
 * @param {object} object - article object to parse
 * @returns {object} article object with parsed dates
 */

var parseDate = function parseDate(object) {
  var duration = moment__WEBPACK_IMPORTED_MODULE_4___default.a.duration; // capture current date, article publish date, and article modified date

  var original_date = object.date;
  var dates = {
    now: moment__WEBPACK_IMPORTED_MODULE_4___default()(moment__WEBPACK_IMPORTED_MODULE_4___default()(), 'MM/DD/YYYY'),
    published: moment__WEBPACK_IMPORTED_MODULE_4___default()(moment__WEBPACK_IMPORTED_MODULE_4___default()(original_date), 'MM/DD/YYYY'),
    updated: moment__WEBPACK_IMPORTED_MODULE_4___default()(moment__WEBPACK_IMPORTED_MODULE_4___default()(object.modified), 'MM/DD/YYYY')
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

  var ago = function ago(d, d2, type) {
    return parseInt(type === 'hours' ? duration(d.diff(d2)).asHours() : duration(d.diff(d2)).asDays());
  };
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
    formatted: moment__WEBPACK_IMPORTED_MODULE_4___default()(original_date).format('MMMM DD, YYYY'),
    updated: moment__WEBPACK_IMPORTED_MODULE_4___default()(dates.updated).format('MMMM DD, YYYY')
  };
  return object;
};
var replaceLink = function replaceLink(object) {
  object.link = object.link.replace('http://52.207.216.69', '');
  object.author.link = object.author.link.replace('http://52.207.216.69', '');
  object.categories.forEach(function (cat) {
    cat.link = cat.link.replace('http://52.207.216.69', '');
  });
  return object;
};
/**
 * This is a simple wrapper function that detects if the user has scrolled the
 * page. It will return 0 (false) if at the top of the page, or the distance
 * from the top of the page, a positive number (true).
 *
 * @returns {number} distance from the top of the page
 */

var scrolling = function scrolling() {
  return jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).scrollTop();
};
var loadImage = function loadImage(id) {
  document.getElementById(id).classList.remove('preload');
  document.getElementById(id).classList.add('postload');
};
/*
  Do any processing for an article body (like loading social media widgets, etc).
*/

var processArticleBody = function processArticleBody(articleElement) {
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  }

  if (window.twttr) {
    window.twttr.widgets.load();
  }
};
var injectArticleAds = function injectArticleAds(content) {
  var parsed = html_react_parser__WEBPACK_IMPORTED_MODULE_5___default()(content);
  var ad1 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    key: parsed.length + 1
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Advertisement__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    path: "300x250_Mobile_InStory_Top",
    size: [300, 250],
    mode: "mobile"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Advertisement__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    path: "300x250_Desktop_InStory_Top",
    size: [300, 250],
    mode: "desktop"
  }));
  var ad2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    key: parsed.length + 2
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Advertisement__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    path: "300x250_Mobile_InStory_Bottom",
    size: [300, 250],
    mode: "mobile"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Advertisement__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    path: "300x250_Desktop_InStory_Bottom",
    size: [300, 250],
    mode: "desktop"
  }));
  var output = [];
  var paragraphs = 0;
  var ad1Pushed = false;
  var ad2Pushed = false;
  parsed.forEach(function (e) {
    output.push(e);

    if (_typeof(e) === 'object' && e.type === 'p') {
      paragraphs++;
    }

    if (paragraphs === 2 && !ad1Pushed) {
      output.push(ad1);
      ad1Pushed = true;
    }

    if (paragraphs === 6 && !ad2Pushed) {
      output.push(ad2);
      ad2Pushed = true;
    }
  });
  return output;
};
var chooseArticleDates = function chooseArticleDates(article) {
  var date = article.date;

  if (date.ago.updated.hours === date.ago.published.hours) {
    date.updated = "";
    date.published = "Published " + formatDate(date.formatted, date.ago.published);
  } else {
    date.updated = "Updated " + formatDate(date.updated, date.ago.updated);
    date.published = "Published " + formatDate(date.formatted, date.ago.published);
  }

  return article;
};

function formatDate(original, ago) {
  if (ago.days <= 10) {
    //if < 10 days ago, display "ago" format
    if (ago.hours < 24) {
      if (ago.hours === 0) {
        return "today";
      } else if (ago.hours === 1) {
        return ago.hours + " hour ago";
      } else {
        return ago.hours + " hours ago";
      }
    } else if (ago.days === 1) {
      return ago.days + " day ago";
    } else {
      return ago.days + " days ago";
    }
  } else {
    return original;
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Advertisement; });
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dfp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var react_dfp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dfp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable space-before-function-paren */
// NOTICE: importing reactn instead of react
 // google ad manager

 // components



var Advertisement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Advertisement, _React$Component);

  function Advertisement(props) {
    var _this;

    _classCallCheck(this, Advertisement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Advertisement).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_mounted", false);

    _this.state = {
      path: props.path,
      size: props.size,
      mode: null,
      loaded: false
    };
    return _this;
  }

  _createClass(Advertisement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mounted = true;
      var _this$props = this.props,
          path = _this$props.path,
          size = _this$props.size,
          mode = _this$props.mode;
      var displayMode = mode;

      if (typeof mode === 'undefined') {
        displayMode = "";
      }

      if (this._mounted) {
        // update component state with props
        this.setState({
          path: path,
          size: size,
          mode: displayMode,
          loaded: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
    /**
     * Based on this.state.path and this.state.size, this function renders an
     * advertisement component.
     *
     * @return renders an ad component
     */

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          path = _this$state.path,
          size = _this$state.size,
          mode = _this$state.mode,
          loaded = _this$state.loaded;
      return !loaded ? "" : reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "advertisement ad-".concat(mode),
        id: "ad-".concat(path)
      }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dfp__WEBPACK_IMPORTED_MODULE_1__["DFPSlotsProvider"], {
        dfpNetworkId: '123934970'
      }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dfp__WEBPACK_IMPORTED_MODULE_1__["AdSlot"], {
        adUnit: path,
        sizes: [size]
      })));
    }
  }]);

  return Advertisement;
}(reactn__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dfp");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable space-before-function-paren */

/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable camelcase */
// react




var Loading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Loading, _React$Component);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loading).apply(this, arguments));
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      var text = this.props.text;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "loading"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "container"
      }, text ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "fadeInOut"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
        className: "loading-text"
      }, "THE DIAMONDBACK")) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "spinner",
        style: {
          "width": "200px",
          "height": "200px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSpinner"],
        className: "far fa-spinner fa-spin animated",
        size: "lg"
      }))));
    }
  }]);

  return Loading;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),
/* 24 */
/***/ (function(module, exports) {



/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "reactn"
var external_reactn_ = __webpack_require__(0);
var external_reactn_default = /*#__PURE__*/__webpack_require__.n(external_reactn_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(8);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-no-ssr"
var external_react_no_ssr_ = __webpack_require__(19);
var external_react_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_react_no_ssr_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(22);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(4);

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(5);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// EXTERNAL MODULE: ./utilities/app.utilities.js
var app_utilities = __webpack_require__(6);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(10);

// CONCATENATED MODULE: ./components/Navigation.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable space-before-function-paren */

/* eslint-disable camelcase */
// NOTICE: importing reactn instead of react
 // react router







var Navigation_Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navigation).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      var menu = this.props.menu;

      if (menu === null) {
        return external_reactn_default.a.createElement("div", {
          className: "container"
        }, external_reactn_default.a.createElement("div", {
          className: "navigation-links"
        }));
      }

      var mobile = this.global.mobile;
      var scrolled = this.props.scrolled;
      return external_reactn_default.a.createElement("nav", {
        id: "nav-bar",
        className: "".concat(scrolled ? 'nav-sticky' : '', " ").concat(mobile ? 'nav-mobile' : '')
      }, external_reactn_default.a.createElement("div", {
        className: "container"
      }, external_reactn_default.a.createElement("div", {
        className: "navigation-links"
      }, external_reactn_default.a.createElement(Navigation_NavigationButton, {
        mobile: mobile,
        scrolled: scrolled
      }), "\xA0", external_reactn_default.a.createElement(external_react_no_ssr_default.a, null, mobile ? null : external_reactn_default.a.createElement(Navigation_NavigationLinks, {
        menu: menu.items
      })))));
    }
  }]);

  return Navigation;
}(external_reactn_default.a.Component);



var Navigation_NavigationButton =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(NavigationButton, _React$Component2);

  function NavigationButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavigationButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavigationButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onClick", function (e) {
      _this.global.toggleSidebar();
    });

    return _this;
  }

  _createClass(NavigationButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var mobile = this.props.mobile;
      return external_reactn_default.a.createElement("div", null, external_reactn_default.a.createElement("button", {
        id: "menu-btn",
        onClick: function onClick(e) {
          return _this2._onClick(e);
        }
      }, external_reactn_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faBars"]
      })),
      /* only show small dbk logo if scrolled or mobile */
      mobile ? external_reactn_default.a.createElement(routes["Link"], {
        href: "/"
      }, external_reactn_default.a.createElement("a", {
        className: "mobile-dbk-logo"
      }, "DBK")) : null);
    }
  }]);

  return NavigationButton;
}(external_reactn_default.a.Component);

var Navigation_NavigationLinks =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(NavigationLinks, _React$Component3);

  function NavigationLinks() {
    _classCallCheck(this, NavigationLinks);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavigationLinks).apply(this, arguments));
  }

  _createClass(NavigationLinks, [{
    key: "render",
    value: function render() {
      var menu = this.props.menu;
      return external_reactn_default.a.createElement(external_reactn_default.a.Fragment, null, menu.map(function (item, i) {
        if (item.type === 'custom') {
          return external_reactn_default.a.createElement("a", {
            className: "dissapear-on-mobile",
            href: item.url,
            key: "link-".concat(i),
            target: "_blank",
            rel: "noopener noreferrer"
          }, item.title);
        }

        return external_reactn_default.a.createElement(routes["Link"], {
          href: item.url,
          key: "link-".concat(i)
        }, external_reactn_default.a.createElement("a", {
          className: "disappear-on-mobile"
        }, item.title));
      }), external_reactn_default.a.createElement("a", {
        className: "special-nav disappear-on-mobile",
        href: "https://dbknews.us9.list-manage.com/subscribe/post?u=589bc6727b2e01217b65a369e&id=bfdcfcc0db",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Newsletter"), external_reactn_default.a.createElement("a", {
        className: "special-nav disappear-on-mobile",
        href: "https://issuu.com/thediamondback",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Print Edition"));
    }
  }]);

  return NavigationLinks;
}(external_reactn_default.a.Component);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(21);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/Searchbar.jsx
function Searchbar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Searchbar_typeof = function _typeof(obj) { return typeof obj; }; } else { Searchbar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Searchbar_typeof(obj); }

function Searchbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Searchbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Searchbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Searchbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Searchbar_defineProperties(Constructor, staticProps); return Constructor; }

function Searchbar_possibleConstructorReturn(self, call) { if (call && (Searchbar_typeof(call) === "object" || typeof call === "function")) { return call; } return Searchbar_assertThisInitialized(self); }

function Searchbar_getPrototypeOf(o) { Searchbar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Searchbar_getPrototypeOf(o); }

function Searchbar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Searchbar_setPrototypeOf(subClass, superClass); }

function Searchbar_setPrototypeOf(o, p) { Searchbar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Searchbar_setPrototypeOf(o, p); }

function Searchbar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// NOTICE: importing reactn instead of react





/* eslint-disable space-before-function-paren */

/* eslint-disable no-undef */

var Searchbar_Searchbar =
/*#__PURE__*/
function (_React$Component) {
  Searchbar_inherits(Searchbar, _React$Component);

  function Searchbar(props) {
    var _this;

    Searchbar_classCallCheck(this, Searchbar);

    _this = Searchbar_possibleConstructorReturn(this, Searchbar_getPrototypeOf(Searchbar).call(this, props));
    _this.searchClicked = _this.searchClicked.bind(Searchbar_assertThisInitialized(Searchbar_assertThisInitialized(_this)));
    _this.keyPressed = _this.keyPressed.bind(Searchbar_assertThisInitialized(Searchbar_assertThisInitialized(_this)));
    return _this;
  }

  Searchbar_createClass(Searchbar, [{
    key: "searchClicked",
    value: function searchClicked() {
      var searchTerm = external_jquery_default()("#global-search-bar").val().toLowerCase().trim().replace(/\s\s+/g, ' ');

      if (searchTerm.length < 1) {
        return;
      }

      if (searchTerm.length > 50) {
        //LIMIT SEARCHES TO 50 CHARACTERS
        searchTerm = searchTerm.substring(0, 50);
      }

      router_default.a.push("/search?q=".concat(searchTerm));
    }
  }, {
    key: "keyPressed",
    value: function keyPressed(e) {
      if (e.key === 'Enter') {
        this.searchClicked();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var mobile = this.global.mobile;
      return external_reactn_default.a.createElement("div", {
        className: "searchbar ".concat(mobile ? "searchbar-mobile" : "")
      }, external_reactn_default.a.createElement("input", {
        id: "global-search-bar",
        type: "text",
        placeholder: "Search",
        onKeyUp: this.keyPressed
      }), external_reactn_default.a.createElement("button", {
        onClick: this.searchClicked
      }, external_reactn_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faSearch"]
      })));
    }
  }]);

  return Searchbar;
}(external_reactn_default.a.Component);

/* harmony default export */ var components_Searchbar = (Searchbar_Searchbar);
// CONCATENATED MODULE: ./components/Sidebar.jsx


function Sidebar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Sidebar_typeof = function _typeof(obj) { return typeof obj; }; } else { Sidebar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Sidebar_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Sidebar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Sidebar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Sidebar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Sidebar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Sidebar_defineProperties(Constructor, staticProps); return Constructor; }

function Sidebar_possibleConstructorReturn(self, call) { if (call && (Sidebar_typeof(call) === "object" || typeof call === "function")) { return call; } return Sidebar_assertThisInitialized(self); }

function Sidebar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Sidebar_getPrototypeOf(o) { Sidebar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Sidebar_getPrototypeOf(o); }

function Sidebar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Sidebar_setPrototypeOf(subClass, superClass); }

function Sidebar_setPrototypeOf(o, p) { Sidebar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Sidebar_setPrototypeOf(o, p); }

// NOTICE: importing reactn instead of react






var Sidebar_Sidebar =
/*#__PURE__*/
function (_React$Component) {
  Sidebar_inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    Sidebar_classCallCheck(this, Sidebar);

    _this = Sidebar_possibleConstructorReturn(this, Sidebar_getPrototypeOf(Sidebar).call(this, props));
    _this.state = {
      scrolled: _this.props.scrolled,
      menu: null
    };
    return _this;
  }

  Sidebar_createClass(Sidebar, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var sidebar, nestedMenus;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(app_utilities["g" /* request */])('/menu/sidebar');

              case 2:
                sidebar = _context.sent;
                nestedMenus = sidebar.items.map(function (ele, i) {
                  return external_reactn_default.a.createElement(Sidebar_NestedMenu, {
                    data: ele,
                    key: i,
                    level: 0
                  });
                });
                this.setState({
                  scrolled: this.props.scrolled,
                  menu: nestedMenus
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        show: false,
        scrolled: newProps.scrolled
      });
    }
  }, {
    key: "render",
    value: function render() {
      var mobile = this.global.mobile;
      var _this$state = this.state,
          scrolled = _this$state.scrolled,
          menu = _this$state.menu;

      if (menu === null) {
        return "";
      }

      var searchBar = "";

      if (mobile) {
        searchBar = external_reactn_default.a.createElement("div", {
          className: "search-section"
        }, external_reactn_default.a.createElement(components_Searchbar, null));
      }

      return external_reactn_default.a.createElement("div", {
        id: "sidebar",
        className: "sidebar ".concat(scrolled ? 'sidebar-sticky' : '', " ").concat(mobile ? 'sidebar-mobile' : '')
      }, searchBar, menu);
    }
  }]);

  return Sidebar;
}(external_reactn_default.a.Component);



var Sidebar_NestedMenu = function NestedMenu(props) {
  var data = props.data,
      level = props.level;
  var id = "sidebar-item-" + data.id;
  var inner = "";

  if (typeof data.children !== 'undefined') {
    inner = data.children.map(function (ele, i) {
      return external_reactn_default.a.createElement(NestedMenu, {
        data: ele,
        key: i,
        level: level + 1
      });
    });
  } //Menu item doesn't have any children
  else {
      if (data.type === 'custom') {
        return external_reactn_default.a.createElement("div", {
          id: id,
          className: "sidebar-item"
        }, external_reactn_default.a.createElement("a", {
          href: data.url,
          className: "sidebar-link",
          target: "_blank"
        }, external_reactn_default.a.createElement("p", null, data.title)));
      }

      return external_reactn_default.a.createElement("div", {
        id: id,
        className: "sidebar-item"
      }, external_reactn_default.a.createElement(routes["Link"], {
        href: data.url
      }, external_reactn_default.a.createElement("a", {
        className: "sidebar-link"
      }, external_reactn_default.a.createElement("p", null, data.title))));
    }

  var toggle = function toggle(id) {
    external_jquery_default()("#" + id).toggleClass("active");
  };

  return external_reactn_default.a.createElement("div", {
    id: id,
    className: "sidebar-item has-children"
  }, external_reactn_default.a.createElement("div", {
    className: "sidebar-link",
    onClick: function onClick() {
      return toggle(id);
    }
  }, external_reactn_default.a.createElement(routes["Link"], {
    href: data.url
  }, external_reactn_default.a.createElement("a", null, external_reactn_default.a.createElement("p", null, data.title)))), inner);
};
// CONCATENATED MODULE: ./constants/constants.config.js
// global variables
// html elements
// const ROOT = {
//   app: document.getElementById('app'),
//   lightbox: document.getElementById('lightbox'),
//   loading: document.getElementById('loading'),
//   sidebar: document.getElementById('sidebar')
// };
// api url
var API_URL =  false ? undefined : 'https://dbknews.com/developer'; // google analytics

var GOOGLE_ANALYTICS_ID = 'UA-130746753-2'; // style

var BREAKPOINTS = {
  xsmall: 320,
  small: 480,
  schmedium: 768,
  medium: 980,
  large: 1200,
  xlarge: 1440
};

// CONCATENATED MODULE: ./components/Header.jsx


function Header_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header_typeof = function _typeof(obj) { return typeof obj; }; } else { Header_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header_typeof(obj); }

function Header_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Header_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Header_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Header_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); return Constructor; }

function Header_possibleConstructorReturn(self, call) { if (call && (Header_typeof(call) === "object" || typeof call === "function")) { return call; } return Header_assertThisInitialized(self); }

function Header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header_getPrototypeOf(o) { Header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Header_getPrototypeOf(o); }

function Header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Header_setPrototypeOf(subClass, superClass); }

function Header_setPrototypeOf(o, p) { Header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Header_setPrototypeOf(o, p); }

/* eslint-disable space-before-function-paren */
// NOTICE: importing reactn instead of react


 // jquery

 // components



 // constants

 // utility functions


/**
 * Header class. Renders the header.
 */

var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  Header_inherits(Header, _React$Component);

  /**
   * Renders the header.
   */
  function Header(props) {
    var _this;

    Header_classCallCheck(this, Header);

    _this = Header_possibleConstructorReturn(this, Header_getPrototypeOf(Header).call(this, props));
    _this.state = {
      scrolled: false
    };
    return _this;
  }

  Header_createClass(Header, [{
    key: "toggleSidebar",
    value: function toggleSidebar() {
      if (external_jquery_default()("#sidebar").css("left") !== '0px') {
        external_jquery_default()("#sidebar").css("left", '0px');
      } else {
        external_jquery_default()("#sidebar").css("left", "-100%");
      }
    }
  }, {
    key: "resetSidebar",
    value: function resetSidebar() {
      external_jquery_default()("#sidebar").css("left", "-100%");
      external_jquery_default()(".sidebar-item").removeClass("active");
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Header_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var _this2 = this;

        var mobile;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mobile = Object(app_utilities["h" /* responsive */])(BREAKPOINTS.schmedium, 'less_eq');
                Object(external_reactn_["setGlobal"])({
                  toggleSidebar: this.toggleSidebar,
                  resetSidebar: this.resetSidebar,
                  mobile: !!mobile
                }); //forces re-render

                this.setState({
                  scrolled: this.state.scrolled
                });
                external_jquery_default()(window).resize(function () {
                  var mobile = Object(app_utilities["h" /* responsive */])(BREAKPOINTS.schmedium, 'less_eq');
                  Object(external_reactn_["setGlobal"])({
                    toggleSidebar: _this2.toggleSidebar,
                    resetSidebar: _this2.resetSidebar,
                    mobile: !!mobile
                  }); //forces re-render

                  _this2.setState({
                    scrolled: _this2.state.scrolled
                  });
                });
                external_jquery_default()(window).scroll(function (event) {
                  var scrolled = _this2.state.scrolled;
                  var offset = 0;
                  var header = document.getElementById("masthead");

                  if (!header) {
                    return;
                  }

                  var check = header.getBoundingClientRect().bottom - 2;
                  var scrolledState = !(check + offset >= 0 && check - offset <= window.innerHeight);

                  if (scrolledState !== scrolled) {
                    _this2.setState({
                      scrolled: scrolledState
                    });
                  }
                }); // $("#header").fadeIn();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      external_jquery_default()(window).unbind('resize');
      external_jquery_default()(window).unbind('scroll');
    }
  }, {
    key: "render",
    value: function render() {
      var mobile = this.global.mobile;
      var scrolled = this.state.scrolled;
      var menu = this.props.menu; // var mobile = responsive(BREAKPOINTS.schmedium, 'less_eq');

      var searchBar = "";

      if (!mobile) {
        searchBar = external_reactn_default.a.createElement(components_Searchbar, null);
      }

      return external_reactn_default.a.createElement("header", {
        id: "header",
        className: "".concat(scrolled ? 'pad-bottom' : '')
      }, external_reactn_default.a.createElement("div", {
        id: "masthead",
        className: "container".concat(mobile ? ' disappear' : '')
      }, external_reactn_default.a.createElement(external_reactn_default.a.Fragment, null, external_reactn_default.a.createElement(external_react_no_ssr_default.a, null, external_reactn_default.a.createElement(routes["Link"], {
        to: "/"
      }, external_reactn_default.a.createElement("a", null, external_reactn_default.a.createElement("img", {
        src: "/static/images/the-diamondback-logo.svg",
        alt: "The Diamondback"
      }))), searchBar))), external_reactn_default.a.createElement(Navigation_Navigation, {
        menu: menu,
        scrolled: scrolled
      }), external_reactn_default.a.createElement(Sidebar_Sidebar, {
        scrolled: scrolled
      }));
    }
  }]);

  return Header;
}(external_reactn_default.a.Component);


// CONCATENATED MODULE: ./components/Footer.jsx
function Footer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer_typeof = function _typeof(obj) { return typeof obj; }; } else { Footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Footer_defineProperties(Constructor, staticProps); return Constructor; }

function Footer_possibleConstructorReturn(self, call) { if (call && (Footer_typeof(call) === "object" || typeof call === "function")) { return call; } return Footer_assertThisInitialized(self); }

function Footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer_getPrototypeOf(o) { Footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Footer_getPrototypeOf(o); }

function Footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Footer_setPrototypeOf(subClass, superClass); }

function Footer_setPrototypeOf(o, p) { Footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Footer_setPrototypeOf(o, p); }

// NOTICE: importing reactn instead of react
 // react router



/* eslint-disable space-before-function-paren */

/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable no-unused-vars */

/**
 * Footer class. Renders the footer The footer contains the mega menu (with
 * links to all categories), contact information, the stay connected menu, and
 * copyright.
 */

var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  Footer_inherits(Footer, _React$Component);

  function Footer() {
    Footer_classCallCheck(this, Footer);

    return Footer_possibleConstructorReturn(this, Footer_getPrototypeOf(Footer).apply(this, arguments));
  }

  Footer_createClass(Footer, [{
    key: "getColumnId",

    /**
     * This function takes a category title as an argument and returns it
     * lowercase with spaces replaced by dashes.
     *
     * ex: Other Links will becomes other-links.
     *
     * @param {string} title category title
     * @return {string} category title lowercase with spaces replaced by dashes
     */
    value: function getColumnId(title) {
      return "footer-column-".concat(title.toLowerCase().replace(' ', '-'));
    }
    /**
     * Renders the footer. The footer contains the mega menu (with links to all
     * categories), contact information, the stay connected menu, and copyright.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          footer = _this$props.footer,
          social = _this$props.social;

      if (footer === null || social === null) {
        return "";
      }

      return external_reactn_default.a.createElement("footer", null, external_reactn_default.a.createElement("div", {
        className: "container"
      }, external_reactn_default.a.createElement("p", {
        className: "footer-title"
      }, "Categories"), external_reactn_default.a.createElement("div", {
        className: "categories row"
      }, footer.items.map(function (category, index) {
        var id = "column-".concat(category.id);
        return external_reactn_default.a.createElement("ul", {
          className: "footer-column",
          id: id,
          key: id
        }, external_reactn_default.a.createElement(routes["Link"], {
          href: category.url
        }, external_reactn_default.a.createElement("a", {
          className: category.classes
        }, category.title)), external_reactn_default.a.createElement("div", {
          className: "sub-links"
        }, category.children.map(function (link, i) {
          return external_reactn_default.a.createElement("li", {
            key: "link-".concat(i)
          }, external_reactn_default.a.createElement(Footer_FooterLink, link));
        })));
      })), external_reactn_default.a.createElement("div", {
        className: "contact"
      }, external_reactn_default.a.createElement("p", {
        className: "title-link"
      }, "Contact Us"), external_reactn_default.a.createElement("a", {
        href: "https://goo.gl/maps/14QKBBK8x1v",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_reactn_default.a.createElement("address", null, "3150 South Campus Dining Hall", external_reactn_default.a.createElement("br", null), "University of Maryland", external_reactn_default.a.createElement("br", null), "College Park, MD 20742", external_reactn_default.a.createElement("br", null))), external_reactn_default.a.createElement("br", null), external_reactn_default.a.createElement("p", {
        className: "contact-phone"
      }, external_reactn_default.a.createElement("span", null, "Newsroom"), ":", ' ', external_reactn_default.a.createElement("a", {
        href: "tel:+3013148200"
      }, "301-314-8200"), external_reactn_default.a.createElement("br", null), external_reactn_default.a.createElement("span", {
        className: "hours"
      }, "(4:30 p.m. to midnight, Sundays through Thursdays)")), external_reactn_default.a.createElement("p", {
        className: "contact-phone"
      }, external_reactn_default.a.createElement("span", null, "Advertising"), ":", ' ', external_reactn_default.a.createElement("a", {
        href: "tel:+3013148000"
      }, "301-314-8000"), external_reactn_default.a.createElement("br", null), external_reactn_default.a.createElement("span", {
        className: "hours"
      }, "(normal business hours, Mondays through Fridays)"))), external_reactn_default.a.createElement("div", {
        className: "stay-connected-copyright row"
      }, external_reactn_default.a.createElement("div", {
        className: "stay-connected"
      }, external_reactn_default.a.createElement("p", null, "Stay Connected"), social.items.map(function (link, i) {
        return external_reactn_default.a.createElement(Footer_FooterLink, _extends({}, link, {
          key: i
        }));
      })), external_reactn_default.a.createElement(routes["Link"], {
        href: "/"
      }, external_reactn_default.a.createElement("a", {
        className: "copyright"
      }, "\xA9 ", new Date().getFullYear(), " The Diamondback")))));
    }
  }]);

  return Footer;
}(external_reactn_default.a.Component);
/**
 * Footer link class. Renders a footer link. Footer links, with the exception of
 * telephone links, are black. On hover, they are black and bold.
 *
 * @param {object} props link properties - url, classes, title and type
 * @return {Link} footer link
 */




var Footer_FooterLink = function FooterLink(props) {
  if (props.type === 'custom') {
    return external_reactn_default.a.createElement("a", {
      className: props.classes,
      href: props.url,
      target: "_blank"
    }, props.title);
  }

  return external_reactn_default.a.createElement(routes["Link"], {
    href: props.url
  }, external_reactn_default.a.createElement("a", {
    className: props.classes
  }, props.title));
};
// EXTERNAL MODULE: ./components/Advertisement.jsx
var Advertisement = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Loading.jsx
var Loading = __webpack_require__(12);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(13);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/Takeover.jsx


function Takeover_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Takeover_typeof = function _typeof(obj) { return typeof obj; }; } else { Takeover_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Takeover_typeof(obj); }

function Takeover_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Takeover_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Takeover_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Takeover_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Takeover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Takeover_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Takeover_createClass(Constructor, protoProps, staticProps) { if (protoProps) Takeover_defineProperties(Constructor.prototype, protoProps); if (staticProps) Takeover_defineProperties(Constructor, staticProps); return Constructor; }

function Takeover_possibleConstructorReturn(self, call) { if (call && (Takeover_typeof(call) === "object" || typeof call === "function")) { return call; } return Takeover_assertThisInitialized(self); }

function Takeover_getPrototypeOf(o) { Takeover_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Takeover_getPrototypeOf(o); }

function Takeover_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Takeover_setPrototypeOf(subClass, superClass); }

function Takeover_setPrototypeOf(o, p) { Takeover_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Takeover_setPrototypeOf(o, p); }

function Takeover_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* eslint-disable space-before-function-paren */
// NOTICE: importing reactn instead of react
 // components

 // axios







var Takeover_Takeover =
/*#__PURE__*/
function (_React$Component) {
  Takeover_inherits(Takeover, _React$Component);

  function Takeover(props) {
    var _this;

    Takeover_classCallCheck(this, Takeover);

    _this = Takeover_possibleConstructorReturn(this, Takeover_getPrototypeOf(Takeover).call(this, props));
    _this.state = {
      desktop: null,
      mobile: null,
      loaded: false
    };
    _this.closeTakeover = _this.closeTakeover.bind(Takeover_assertThisInitialized(Takeover_assertThisInitialized(_this)));
    _this.resizeHeaderOnScroll = _this.resizeHeaderOnScroll.bind(Takeover_assertThisInitialized(Takeover_assertThisInitialized(_this)));
    return _this;
  }

  Takeover_createClass(Takeover, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Takeover_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var resp, desktop, mobile;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return external_axios_default.a.get("https://s3.amazonaws.com/dbk-ads-s3/links.json");

              case 2:
                resp = _context.sent;
                desktop = {
                  link: resp.data.takeover_desktop,
                  img: "https://s3.amazonaws.com/dbk-ads-s3/takeover-desktop.jpg"
                };
                mobile = {
                  link: resp.data.takeover_mobile,
                  img: "https://s3.amazonaws.com/dbk-ads-s3/takeover-mobile.jpg"
                };
                this.setState({
                  desktop: desktop,
                  mobile: mobile,
                  loaded: true
                });
                window.addEventListener('scroll', this.resizeHeaderOnScroll);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "getTakeover",
    value: function getTakeover() {
      var _this$state = this.state,
          desktop = _this$state.desktop,
          mobile = _this$state.mobile;
      var link = desktop.link;
      var img = desktop.img;

      if (this.global.mobile) {
        link = mobile.link;
        img = mobile.img;
      }

      return {
        link: link,
        img: img
      };
    }
  }, {
    key: "visitedTakeover",
    value: function visitedTakeover() {
      var cookie = document.cookie;
      var seen = cookie.indexOf('visitedTakeover', 0) !== -1;
      return seen;
    }
  }, {
    key: "closeTakeover",
    value: function closeTakeover() {
      external_jquery_default()("#takeover").hide();
      var cookie = document.cookie;

      if (cookie.indexOf('visitedTakeover\x3d', 0) === -1) {
        document.cookie = 'visitedTakeover\x3d1;max-age\x3d360;path\x3d/';
      }
    }
  }, {
    key: "resetTakeover",
    value: function resetTakeover() {
      if (external_jquery_default()("#takeover").length) {
        external_jquery_default()("#takeover").fadeIn();
      }
    }
  }, {
    key: "resizeHeaderOnScroll",
    value: function resizeHeaderOnScroll() {
      if (!external_jquery_default()('#takeover').length) {
        return;
      }

      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 50;

      if (distanceY > shrinkOn) {
        external_jquery_default()("#takeover").css('opacity', '0');
      } else {
        external_jquery_default()("#takeover").css('opacity', '1');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var loaded = this.state.loaded;

      if (this.visitedTakeover()) {
        return "";
      } else {
        this.resetTakeover();
      }

      if (!loaded) {
        return external_reactn_default.a.createElement(Loading["a" /* default */], null);
      }

      var _this$getTakeover = this.getTakeover(),
          link = _this$getTakeover.link,
          img = _this$getTakeover.img;

      return external_reactn_default.a.createElement("div", {
        className: "takeover",
        id: "takeover"
      }, external_reactn_default.a.createElement("button", {
        id: "close-takeover",
        onClick: this.closeTakeover
      }, external_reactn_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faTimes"]
      }), external_reactn_default.a.createElement("span", null, "Close Ad")), external_reactn_default.a.createElement("a", {
        href: link,
        target: "_blank"
      }, external_reactn_default.a.createElement("img", {
        alt: "Takeover Ad",
        className: "preload",
        id: "takeover-image",
        src: img,
        onLoad: function onLoad() {
          return Object(app_utilities["d" /* loadImage */])('takeover-image');
        }
      })));
    }
  }]);

  return Takeover;
}(external_reactn_default.a.Component);


// CONCATENATED MODULE: ./components/Sidekick.jsx


function Sidekick_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Sidekick_typeof = function _typeof(obj) { return typeof obj; }; } else { Sidekick_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Sidekick_typeof(obj); }

function Sidekick_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Sidekick_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Sidekick_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Sidekick_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Sidekick_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Sidekick_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Sidekick_createClass(Constructor, protoProps, staticProps) { if (protoProps) Sidekick_defineProperties(Constructor.prototype, protoProps); if (staticProps) Sidekick_defineProperties(Constructor, staticProps); return Constructor; }

function Sidekick_possibleConstructorReturn(self, call) { if (call && (Sidekick_typeof(call) === "object" || typeof call === "function")) { return call; } return Sidekick_assertThisInitialized(self); }

function Sidekick_getPrototypeOf(o) { Sidekick_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Sidekick_getPrototypeOf(o); }

function Sidekick_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Sidekick_setPrototypeOf(subClass, superClass); }

function Sidekick_setPrototypeOf(o, p) { Sidekick_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Sidekick_setPrototypeOf(o, p); }

function Sidekick_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* eslint-disable space-before-function-paren */
// NOTICE: importing reactn instead of react
 // components

 // axios







var Sidekick_Sidekick =
/*#__PURE__*/
function (_React$Component) {
  Sidekick_inherits(Sidekick, _React$Component);

  function Sidekick(props) {
    var _this;

    Sidekick_classCallCheck(this, Sidekick);

    _this = Sidekick_possibleConstructorReturn(this, Sidekick_getPrototypeOf(Sidekick).call(this, props));
    _this.state = {
      img: null,
      link: null,
      loaded: false
    };
    _this.closeSidekick = _this.closeSidekick.bind(Sidekick_assertThisInitialized(Sidekick_assertThisInitialized(_this)));
    return _this;
  }

  Sidekick_createClass(Sidekick, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Sidekick_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var resp, data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return external_axios_default.a.get("https://s3.amazonaws.com/dbk-ads-s3/links.json");

              case 2:
                resp = _context.sent;
                data = {
                  link: resp.data.sidekick,
                  img: "https://s3.amazonaws.com/dbk-ads-s3/sidekick.gif"
                };
                this.setState({
                  link: data.link,
                  img: data.img,
                  loaded: true
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "visitedSidekick",
    value: function visitedSidekick() {
      var cookie = document.cookie;
      var seen = cookie.indexOf("visitedSidekick", 0) !== -1;
      return seen;
    }
  }, {
    key: "closeSidekick",
    value: function closeSidekick() {
      external_jquery_default()("#sidekick").hide();
      var cookie = document.cookie;

      if (cookie.indexOf("visitedSidekick\x3d", 0) === -1) {
        document.cookie = "visitedSidekick\x3d1;max-age\x3d360;path\x3d/";
      }
    }
  }, {
    key: "resetSidekick",
    value: function resetSidekick() {
      if (external_jquery_default()("#sidekick").length) {
        external_jquery_default()("#sidekick").fadeIn();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          img = _this$state.img,
          link = _this$state.link,
          loaded = _this$state.loaded;

      if (this.visitedSidekick()) {
        return "";
      } else {
        this.resetSidekick();
      }

      return !loaded ? external_reactn_default.a.createElement(Loading["a" /* default */], null) : external_reactn_default.a.createElement("div", {
        className: "sidekick animated fadeIn",
        id: "sidekick"
      }, external_reactn_default.a.createElement("button", {
        id: "close-sidekick",
        onClick: this.closeSidekick
      }, external_reactn_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faTimes"]
      }), external_reactn_default.a.createElement("span", null, "Close Ad")), external_reactn_default.a.createElement("a", {
        href: link,
        target: "_blank"
      }, external_reactn_default.a.createElement("img", {
        alt: "Sidekick Ad",
        className: "preload",
        id: "sidekick-image",
        src: img,
        onLoad: function onLoad() {
          return Object(app_utilities["d" /* loadImage */])('sidekick-image');
        }
      })));
    }
  }]);

  return Sidekick;
}(external_reactn_default.a.Component);


// EXTERNAL MODULE: ./static/sass/app.sass
var app = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(24);

// CONCATENATED MODULE: ./pages/_app.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _app_MyApp; });


function _app_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app_typeof = function _typeof(obj) { return typeof obj; }; } else { _app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app_typeof(obj); }

function _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _app_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app_createClass(Constructor, protoProps, staticProps) { if (protoProps) _app_defineProperties(Constructor.prototype, protoProps); if (staticProps) _app_defineProperties(Constructor, staticProps); return Constructor; }

function _app_possibleConstructorReturn(self, call) { if (call && (_app_typeof(call) === "object" || typeof call === "function")) { return call; } return _app_assertThisInitialized(self); }

function _app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app_getPrototypeOf(o) { _app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _app_getPrototypeOf(o); }

function _app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _app_setPrototypeOf(subClass, superClass); }

function _app_setPrototypeOf(o, p) { _app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _app_setPrototypeOf(o, p); }

// react









 //sass




var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app_inherits(MyApp, _App);

  function MyApp() {
    _app_classCallCheck(this, MyApp);

    return _app_possibleConstructorReturn(this, _app_getPrototypeOf(MyApp).apply(this, arguments));
  }

  _app_createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          menus = _this$props.menus;
      return external_reactn_["createElement"](app_["Container"], null, external_reactn_["createElement"](head_default.a, null, external_reactn_["createElement"]("script", {
        async: true,
        src: "https://platform.twitter.com/widgets.js",
        charSet: "utf-8"
      }), external_reactn_["createElement"]("meta", {
        name: "description",
        content: "The Diamondack"
      }), external_reactn_["createElement"]("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico"
      })), external_reactn_["createElement"](external_react_no_ssr_default.a, null, external_reactn_["createElement"](Takeover_Takeover, null)), external_reactn_["createElement"](Header_Header, {
        menu: menus.header
      }), external_reactn_["createElement"](Advertisement["a" /* default */], {
        path: "728x90_Banner_A",
        size: [728, 90],
        mode: "desktop"
      }), external_reactn_["createElement"](Advertisement["a" /* default */], {
        path: "300x50_Mobile_Header",
        size: [300, 50],
        mode: "mobile"
      }), external_reactn_["createElement"](Component, pageProps), external_reactn_["createElement"](Advertisement["a" /* default */], {
        path: "300x50_Mobile_Footer",
        size: [300, 50],
        mode: "mobile"
      }), external_reactn_["createElement"](Advertisement["a" /* default */], {
        path: "728x90_Banner_E",
        size: [728, 90],
        mode: "desktop"
      }), external_reactn_["createElement"](Footer_Footer, {
        footer: menus.footer,
        social: menus.social
      }), external_reactn_["createElement"](external_react_no_ssr_default.a, null, external_reactn_["createElement"](Sidekick_Sidekick, null)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _app_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps, footer, social, header;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                _context.next = 8;
                return Object(app_utilities["g" /* request */])('/menu/footer');

              case 8:
                footer = _context.sent;
                _context.next = 11;
                return Object(app_utilities["g" /* request */])('/menu/stay-connected');

              case 11:
                social = _context.sent;
                _context.next = 14;
                return Object(app_utilities["g" /* request */])('/menu/header');

              case 14:
                header = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  menus: {
                    footer: footer,
                    social: social,
                    header: header
                  }
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(app_default.a);



/***/ })
/******/ ]);