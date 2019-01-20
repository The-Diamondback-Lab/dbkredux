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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Advertisement.jsx":
/*!**************************************!*\
  !*** ./components/Advertisement.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Advertisement; });
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dfp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dfp */ "react-dfp");
/* harmony import */ var react_dfp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dfp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.jsx */ "./components/Loading.jsx");
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

      if (this._mounted) {
        // update component state with props
        this.setState({
          path: path,
          size: size,
          mode: mode,
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

/***/ "./components/Article.jsx":
/*!********************************!*\
  !*** ./components/Article.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Article; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_app_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/app.utilities */ "./utilities/app.utilities.js");
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

/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable camelcase */
// react
 // react router

 // jquery


/*
 * TODO: check if this.props.data.featured_media === 0
 * if so -> .article-block.text, otherwise .article-block.image
 */

var Article =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Article, _React$Component);

  function Article() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Article);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Article)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_published", function (object) {
      var published;

      if (object.hours < 24) {
        published = object.hours === 1 ? '1 hour ago' : "".concat(object.hours, " hours ago");
      } else {
        // NOTICE: disabling radix below because object.days is valid

        /* eslint-disable radix */
        var possible_weeks = parseInt(object.days / 7); // NOTICE: re-enabling radix below

        /* eslint-enable radix */

        published = object.days === 1 ? '1 day ago' : object.days < 7 ? "".concat(object.days, " days ago") : possible_weeks === 1 ? '1 week ago' : "".concat(possible_weeks, " weeks ago");
      }

      return published;
    });

    return _this;
  }

  _createClass(Article, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          author = _this$props.author,
          date = _this$props.date,
          id = _this$props.id,
          link = _this$props.link,
          title = _this$props.title,
          featured_image = _this$props.featured_image;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("figure", {
        className: "article-block fadeIn animated"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: link
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        alt: "Article",
        className: "article-block-image preload",
        id: "image-".concat(id),
        src: featured_image.url,
        onLoad: function onLoad() {
          return Object(_utilities_app_utilities__WEBPACK_IMPORTED_MODULE_2__["loadImage"])("image-".concat(id));
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("figcaption", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: link
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        dangerouslySetInnerHTML: {
          __html: title
        },
        className: "article-block-title"
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "article-info"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: author.link
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        dangerouslySetInnerHTML: {
          __html: author.name
        },
        className: "article-block-author"
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        dangerouslySetInnerHTML: {
          __html: this._published(date.ago.published)
        },
        className: "article-block-published"
      })))));
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Loading.jsx":
/*!********************************!*\
  !*** ./components/Loading.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
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
        className: "spinner"
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

/***/ "./components/RelatedContent.jsx":
/*!***************************************!*\
  !*** ./components/RelatedContent.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RelatedContent; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Article_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Article.jsx */ "./components/Article.jsx");
/* harmony import */ var _utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/app.utilities.js */ "./utilities/app.utilities.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // moment

 // components

 // utility functions



var RelatedContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RelatedContent, _React$Component);

  function RelatedContent(props) {
    var _this;

    _classCallCheck(this, RelatedContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RelatedContent).call(this, props));
    _this.state = {
      articles: [],
      loaded: false
    };
    return _this;
  }

  _createClass(RelatedContent, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$props, categories, story_id, category, articles_data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, categories = _this$props.categories, story_id = _this$props.story_id;
                category = categories[0]; //JUST GET RECOMMENDED ARTICLES BY FIRST CATEGORY FOR NOW

                _context.prev = 2;
                _context.next = 5;
                return Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_4__["request"])("/articles?category=".concat(category.id, "&preview=true&per_page=4"));

              case 5:
                articles_data = _context.sent;

                /*
                 * NOTICE: articles_data is an array contaning article block components,
                 * NOT the article page components. below we sort the articles by date,
                 * and create Article (block) components
                 */
                articles_data = articles_data.sort(function (a, a2) {
                  return moment__WEBPACK_IMPORTED_MODULE_2___default()(a2.date).diff(a.date);
                }).filter(function (a) {
                  return a.id !== story_id;
                }).map(function (a) {
                  return Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_4__["parseDate"])(a);
                }).map(function (s, i) {
                  return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Article_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, s, {
                    key: i
                  }));
                });
                this.setState({
                  articles: articles_data,
                  loaded: true
                });
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_4__["handleError"])(_context.t0.message);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          articles = _this$state.articles,
          loaded = _this$state.loaded;

      if (!loaded) {
        return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "related-content"
        }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Recommended Articles"));
      } else {
        return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "related-content"
        }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Recommended Articles"), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "related-articles-list"
        }, articles));
      }
    }
  }]);

  return RelatedContent;
}(reactn__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./pages/ArticlePage.jsx":
/*!*******************************!*\
  !*** ./pages/ArticlePage.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticlePage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorPage_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorPage.jsx */ "./pages/ErrorPage.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_RelatedContent_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/RelatedContent.jsx */ "./components/RelatedContent.jsx");
/* harmony import */ var _components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Advertisement.jsx */ "./components/Advertisement.jsx");
/* harmony import */ var _utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/app.utilities.js */ "./utilities/app.utilities.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// react





 // components




/* eslint-disable space-before-function-paren */

/* eslint-disable camelcase */

var ArticlePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArticlePage, _React$Component);

  function ArticlePage(props) {
    var _this;

    _classCallCheck(this, ArticlePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArticlePage).call(this, props));
    _this.state = {
      scriptjsLoaderEnabled: false
    };
    return _this;
  }

  _createClass(ArticlePage, [{
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (document.getElementById('article-text') !== null) {
                  Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_9__["processArticleBody"])(document.getElementById('article-text'));
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate() {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        scriptjsLoaderEnabled: true
      });
    }
  }, {
    key: "injectArticleAds",
    value: function injectArticleAds(content) {
      var parsed = html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(content);
      var ad1 = reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](reactn__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: parsed.length + 1
      }, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        path: "300x250_Mobile_InStory_Top",
        size: [300, 250],
        mode: "mobile"
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        path: "300x250_Desktop_InStory_Top",
        size: [300, 250],
        mode: "desktop"
      }));
      var ad2 = reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](reactn__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: parsed.length + 2
      }, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        path: "300x250_Mobile_InStory_Bottom",
        size: [300, 250],
        mode: "mobile"
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    }
  }, {
    key: "generateCategories",
    value: function generateCategories(categoryList) {
      return categoryList.map(function (cat) {
        return reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          href: cat.link,
          key: cat.id
        }, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", null, html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(cat.name)));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var article = this.props.article;

      if (!article) {
        return reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ErrorPage_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null);
      } //injects article ads after window loads


      var article_body = reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        id: "article-text-before",
        className: "article-text before-js",
        dangerouslySetInnerHTML: {
          __html: article.content.rendered
        }
      });
      var article_body_ads = "";

      if (this.state.scriptjsLoaderEnabled) {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("#article-text-before").hide();
        article_body_ads = reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          id: "article-text",
          className: "article-text after-js"
        }, Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_9__["injectArticleAds"])(article.content.rendered));
      }

      return reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](reactn__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title", null, article.title + " - The Diamondback  "), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("script", {
        async: true,
        src: "https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c418704770faa57"
      })), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("main", {
        className: "page article-page"
      }, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "container-narrow flex"
      }, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "left-rail"
      }, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", {
        className: "category"
      }, this.generateCategories(article.categories)), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, article.title), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "details"
      }, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "accent author"
      }, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        href: article.author.link
      }, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", null, article.author.name))), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "dot"
      }, "\xB7"), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, "Published ", article.date.formatted), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "dot"
      }, "\xB7"), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, "Updated ", article.date.updated)), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "addthis_inline_share_toolbox"
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "image-area"
      }, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
        alt: "Article Image",
        className: "article-image",
        id: "image-" + article.id,
        src: article.featured_image.url,
        onLoad: function onLoad() {
          return Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_9__["loadImage"])("image-" + article.id);
        }
      })), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "article-caption",
        dangerouslySetInnerHTML: {
          __html: article.featured_image.caption
        }
      }), article_body, article_body_ads), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "right-rail"
      }, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        path: "300x250_Banner_B",
        size: [300, 250],
        mode: "desktop"
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        path: "300x600_Banner_C",
        size: [300, 600],
        mode: "desktop"
      }))), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "container-narrow"
      }, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_RelatedContent_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        categories: article.categories,
        story_id: article.id
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
        var query, article_data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = _ref.query;
                article_data = null;
                _context2.prev = 2;
                _context2.next = 5;
                return Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_9__["request"])("/articles/".concat(query.slug));

              case 5:
                article_data = _context2.sent;
                article_data = Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_9__["parseDate"])(article_data); //choose how to display dates for the article

                if (article_data.date.ago.updated.days <= 10) {
                  if (article_data.date.ago.updated.hours < 24) {
                    if (article_data.date.ago.updated.hours === 0) {
                      article_data.date.updated = "today";
                    } else if (article_data.date.ago.updated.hours === 1) {
                      article_data.date.updated = article_data.date.ago.updated.hours + " hour ago";
                    } else {
                      article_data.date.updated = article_data.date.ago.updated.hours + " hours ago";
                    }
                  } else if (article_data.date.ago.updated.days === 1) {
                    article_data.date.updated = article_data.date.ago.updated.days + " day ago";
                  } else {
                    article_data.date.updated = article_data.date.ago.updated.days + " days ago";
                  }
                }

                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                return _context2.abrupt("return", {
                  article: null
                });

              case 13:
                return _context2.abrupt("return", {
                  article: article_data
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 10]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ArticlePage;
}(reactn__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./pages/ErrorPage.jsx":
/*!*****************************!*\
  !*** ./pages/ErrorPage.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_sass_app_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/sass/app.sass */ "./static/sass/app.sass");
/* harmony import */ var _static_sass_app_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_sass_app_sass__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// react


 //sass



var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorPage).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "404 - The Diamondback  "), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("main", {
        className: "page error-page"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "container-narrow"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "404: Page Not Found"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "We couldn't find that page! You can ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: '/'
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", null, "return home")), " if you'd like."))));
    }
  }]);

  return ErrorPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(/*! next-routes */ "next-routes")();

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
});

/***/ }),

/***/ "./static/sass/app.sass":
/*!******************************!*\
  !*** ./static/sass/app.sass ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utilities/app.utilities.js":
/*!************************************!*\
  !*** ./utilities/app.utilities.js ***!
  \************************************/
/*! exports provided: handleError, responsive, request, parseDate, replaceLink, scrolling, loadImage, processArticleBody, injectArticleAds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsive", function() { return responsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceLink", function() { return replaceLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrolling", function() { return scrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processArticleBody", function() { return processArticleBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectArticleAds", function() { return injectArticleAds; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Advertisement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Advertisement */ "./components/Advertisement.jsx");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable space-before-function-paren */

/* eslint-disable camelcase */
// jquery
 // axios

 // moment




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
  console.log(message);
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
            endpoint = "".concat(process.env.API_URL || 'http://localhost:8080').concat(endpoint);
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
    updated: moment__WEBPACK_IMPORTED_MODULE_4___default()(dates.updated).format('MM/DD/YYYY')
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Advertisement__WEBPACK_IMPORTED_MODULE_6__["default"], {
    path: "300x250_Mobile_InStory_Top",
    size: [300, 250],
    mode: "mobile"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Advertisement__WEBPACK_IMPORTED_MODULE_6__["default"], {
    path: "300x250_Desktop_InStory_Top",
    size: [300, 250],
    mode: "desktop"
  }));
  var ad2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    key: parsed.length + 2
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Advertisement__WEBPACK_IMPORTED_MODULE_6__["default"], {
    path: "300x250_Mobile_InStory_Bottom",
    size: [300, 250],
    mode: "mobile"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Advertisement__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/ArticlePage.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/ArticlePage.jsx */"./pages/ArticlePage.jsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dfp":
/*!****************************!*\
  !*** external "react-dfp" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dfp");

/***/ }),

/***/ "reactn":
/*!*************************!*\
  !*** external "reactn" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactn");

/***/ })

/******/ });
//# sourceMappingURL=ArticlePage.js.map