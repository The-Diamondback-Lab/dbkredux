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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/app.utilities.js */ "./utilities/app.utilities.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
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

      return reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "footer-title"
      }, "Categories"), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "categories row"
      }, footer.items.map(function (category, index) {
        var id = "column-".concat(category.id);
        return reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "footer-column",
          id: id,
          key: id
        }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          href: category.url
        }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: category.classes
        }, category.title)), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "sub-links"
        }, category.children.map(function (link, i) {
          return reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: "link-".concat(i)
          }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterLink, link));
        })));
      })), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contact"
      }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "title-link"
      }, "Contact Us"), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://goo.gl/maps/14QKBBK8x1v",
        target: "_blank",
        rel: "noopener noreferrer"
      }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("address", null, "3150 South Campus Dining Hall", reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "University of Maryland", reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "College Park, MD 20742", reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "contact-phone"
      }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Newsroom"), ":", ' ', reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "tel:+3013148200"
      }, "301-314-8200"), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hours"
      }, "(4:30 p.m. to midnight, Sundays through Thursdays)")), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "contact-phone"
      }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Advertising"), ":", ' ', reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "tel:+3013148000"
      }, "301-314-8000"), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "hours"
      }, "(normal business hours, Mondays through Fridays)"))), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stay-connected-copyright row"
      }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stay-connected"
      }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Stay Connected"), social.items.map(function (link, i) {
        return reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterLink, _extends({}, link, {
          key: i
        }));
      })), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/"
      }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "copyright"
      }, "\xA9 2018 The Diamondback")))));
    }
  }]);

  return Footer;
}(reactn__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/**
 * Footer link class. Renders a footer link. Footer links, with the exception of
 * telephone links, are black. On hover, they are black and bold.
 *
 * @param {object} props link properties - url, classes, title and type
 * @return {Link} footer link
 */




var FooterLink = function FooterLink(props) {
  if (props.type === 'custom') {
    return reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: props.classes,
      href: props.url,
      target: "_blank"
    }, props.title);
  }

  return reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: props.url
  }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: props.classes
  }, props.title));
};

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navigation_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navigation.jsx */ "./components/Navigation.jsx");
/* harmony import */ var _components_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sidebar.jsx */ "./components/Sidebar.jsx");
/* harmony import */ var _components_Searchbar_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Searchbar.jsx */ "./components/Searchbar.jsx");
/* harmony import */ var _constants_constants_config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/constants.config.js */ "./constants/constants.config.js");
/* harmony import */ var _utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/app.utilities.js */ "./utilities/app.utilities.js");


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

/* eslint-disable space-before-function-paren */
// NOTICE: importing reactn instead of react

 // jquery

 // components



 // constants

 // utility functions


/**
 * Header class. Renders the header.
 */

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  /**
   * Renders the header.
   */
  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {
      scrolled: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "toggleSidebar",
    value: function toggleSidebar() {
      if (jquery__WEBPACK_IMPORTED_MODULE_3___default()("#sidebar").css("left") !== '0px') {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#sidebar").css("left", '0px');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()("#sidebar").css("left", "-100%");
      }
    }
  }, {
    key: "resetSidebar",
    value: function resetSidebar() {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()("#sidebar").css("left", "-100%");
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(".sidebar-item").removeClass("active");
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var mobile;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mobile = Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_8__["responsive"])(_constants_constants_config_js__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINTS"].schmedium, 'less_eq');
                Object(reactn__WEBPACK_IMPORTED_MODULE_1__["setGlobal"])({
                  toggleSidebar: this.toggleSidebar,
                  resetSidebar: this.resetSidebar,
                  mobile: !!mobile
                }); //forces re-render

                this.setState({
                  scrolled: this.state.scrolled
                });
                jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).resize(function () {
                  var mobile = Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_8__["responsive"])(_constants_constants_config_js__WEBPACK_IMPORTED_MODULE_7__["BREAKPOINTS"].schmedium, 'less_eq');
                  Object(reactn__WEBPACK_IMPORTED_MODULE_1__["setGlobal"])({
                    toggleSidebar: _this2.toggleSidebar,
                    resetSidebar: _this2.resetSidebar,
                    mobile: !!mobile
                  }); //forces re-render

                  _this2.setState({
                    scrolled: _this2.state.scrolled
                  });
                });
                jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).scroll(function (event) {
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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).unbind('resize');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).unbind('scroll');
    }
  }, {
    key: "render",
    value: function render() {
      var mobile = this.global.mobile;
      var scrolled = this.state.scrolled; // var mobile = responsive(BREAKPOINTS.schmedium, 'less_eq');

      var searchBar = "";

      if (!mobile) {
        searchBar = reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Searchbar_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null);
      }

      return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        id: "header",
        className: "".concat(scrolled ? 'pad-bottom' : '')
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "masthead",
        className: "container".concat(mobile ? ' disappear' : '')
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactn__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/images/the-diamondback-logo.svg",
        alt: "The Diamondback"
      }))), searchBar)), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navigation_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        scrolled: scrolled
      }), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        scrolled: scrolled
      }));
    }
  }]);

  return Header;
}(reactn__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



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

/***/ "./components/Navigation.jsx":
/*!***********************************!*\
  !*** ./components/Navigation.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/app.utilities.js */ "./utilities/app.utilities.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* eslint-disable space-before-function-paren */

/* eslint-disable camelcase */
// NOTICE: importing reactn instead of react
 // react router






var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation(props) {
    var _this;

    _classCallCheck(this, Navigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navigation).call(this, props));
    _this.state = {
      menu: null
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var menu;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_3__["request"])('/menu/header');

              case 2:
                menu = _context.sent;
                this.setState({
                  menu: menu.items
                });

              case 4:
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
    key: "render",
    value: function render() {
      var menu = this.state.menu;

      if (menu === null) {
        return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "container"
        }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "navigation-links"
        }));
      }

      var mobile = this.global.mobile;
      var scrolled = this.props.scrolled;
      return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        id: "nav-bar",
        className: "".concat(scrolled ? 'nav-sticky' : '', " ").concat(mobile ? 'nav-mobile' : '')
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "navigation-links"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavigationButton, {
        mobile: mobile,
        scrolled: scrolled
      }), "\xA0", mobile ? null : reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavigationLinks, {
        menu: menu
      }))));
    }
  }]);

  return Navigation;
}(reactn__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



var NavigationButton =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(NavigationButton, _React$Component2);

  function NavigationButton() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, NavigationButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavigationButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "_onClick", function (e) {
      _this2.global.toggleSidebar();
    });

    return _this2;
  }

  _createClass(NavigationButton, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var mobile = this.props.mobile;
      return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        id: "menu-btn",
        onClick: function onClick(e) {
          return _this3._onClick(e);
        }
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBars"]
      })),
      /* only show small dbk logo if scrolled or mobile */
      mobile ? reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        href: "/"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "mobile-dbk-logo"
      }, "DBK")) : null);
    }
  }]);

  return NavigationButton;
}(reactn__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var NavigationLinks =
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
      return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactn__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, menu.map(function (item, i) {
        if (item.type === 'custom') {
          return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            className: "dissapear-on-mobile",
            href: item.url,
            key: "link-".concat(i),
            target: "_blank",
            rel: "noopener noreferrer"
          }, item.title);
        }

        return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          href: item.url,
          key: "link-".concat(i)
        }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "disappear-on-mobile"
        }, item.title));
      }), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "special-nav disappear-on-mobile"
      }, "Newsletter"), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "special-nav disappear-on-mobile",
        href: "https://issuu.com/thediamondback",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Print Edition"));
    }
  }]);

  return NavigationLinks;
}(reactn__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ }),

/***/ "./components/Searchbar.jsx":
/*!**********************************!*\
  !*** ./components/Searchbar.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// NOTICE: importing reactn instead of react





/* eslint-disable space-before-function-paren */

/* eslint-disable no-undef */

var Searchbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Searchbar, _React$Component);

  function Searchbar(props) {
    var _this;

    _classCallCheck(this, Searchbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Searchbar).call(this, props));
    _this.searchClicked = _this.searchClicked.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.keyPressed = _this.keyPressed.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Searchbar, [{
    key: "searchClicked",
    value: function searchClicked() {
      var searchTerm = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#global-search-bar").val().toLowerCase().trim().replace(/\s\s+/g, ' ');

      if (searchTerm.length > 50) {
        //LIMIT SEARCHES TO 50 CHARACTERS
        searchTerm = searchTerm.substring(0, 50);
      }

      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/search?q=".concat(searchTerm));
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
      return reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "searchbar ".concat(mobile ? "searchbar-mobile" : "")
      }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "global-search-bar",
        type: "text",
        placeholder: "Search",
        onKeyUp: this.keyPressed
      }), reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.searchClicked
      }, reactn__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"]
      })));
    }
  }]);

  return Searchbar;
}(reactn__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Searchbar);

/***/ }),

/***/ "./components/Sidebar.jsx":
/*!********************************!*\
  !*** ./components/Sidebar.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Searchbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Searchbar.jsx */ "./components/Searchbar.jsx");
/* harmony import */ var _utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/app.utilities.js */ "./utilities/app.utilities.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);


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

// NOTICE: importing reactn instead of react






var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).call(this, props));
    _this.state = {
      scrolled: _this.props.scrolled,
      menu: null
    };
    return _this;
  }

  _createClass(Sidebar, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var sidebar, nestedMenus;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_4__["request"])('/menu/sidebar');

              case 2:
                sidebar = _context.sent;
                nestedMenus = sidebar.items.map(function (ele, i) {
                  return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NestedMenu, {
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
        searchBar = reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "search-section"
        }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Searchbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
      }

      return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "sidebar",
        className: "sidebar ".concat(scrolled ? 'sidebar-sticky' : '', " ").concat(mobile ? 'sidebar-mobile' : '')
      }, searchBar, menu);
    }
  }]);

  return Sidebar;
}(reactn__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



var NestedMenu = function NestedMenu(props) {
  var data = props.data,
      level = props.level;
  var id = "sidebar-item-" + data.id;
  var inner = "";

  if (typeof data.children !== 'undefined') {
    inner = data.children.map(function (ele, i) {
      return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NestedMenu, {
        data: ele,
        key: i,
        level: level + 1
      });
    });
  } //Menu item doesn't have any children
  else {
      if (data.type === 'custom') {
        return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: id,
          className: "sidebar-item"
        }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: data.url,
          className: "sidebar-link",
          target: "_blank"
        }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, data.title)));
      }

      return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id,
        className: "sidebar-item"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        href: data.url
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "sidebar-link"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, data.title))));
    }

  var toggle = function toggle(id) {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()("#" + id).toggleClass("active");
  };

  return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: id,
    className: "sidebar-item has-children"
  }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sidebar-link",
    onClick: function onClick() {
      return toggle(id);
    }
  }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: data.url
  }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, data.title)))), inner);
};

/***/ }),

/***/ "./components/Sidekick.jsx":
/*!*********************************!*\
  !*** ./components/Sidekick.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidekick; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Loading_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loading.jsx */ "./components/Loading.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/app.utilities.js */ "./utilities/app.utilities.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* eslint-disable space-before-function-paren */
// NOTICE: importing reactn instead of react
 // components

 // axios







var Sidekick =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidekick, _React$Component);

  function Sidekick(props) {
    var _this;

    _classCallCheck(this, Sidekick);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidekick).call(this, props));
    _this.state = {
      img: null,
      link: null,
      loaded: false
    };
    _this.closeSidekick = _this.closeSidekick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Sidekick, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var resp, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://s3.amazonaws.com/dbk-ads-s3/links.json");

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
      jquery__WEBPACK_IMPORTED_MODULE_5___default()("#sidekick").hide();
      var cookie = document.cookie;

      if (cookie.indexOf("visitedSidekick\x3d", 0) === -1) {
        document.cookie = "visitedSidekick\x3d1;max-age\x3d360;path\x3d/";
      }
    }
  }, {
    key: "resetSidekick",
    value: function resetSidekick() {
      if (jquery__WEBPACK_IMPORTED_MODULE_5___default()("#sidekick").length) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#sidekick").fadeIn();
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

      return !loaded ? reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Loading_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null) : reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sidekick animated fadeIn",
        id: "sidekick"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        id: "close-sidekick",
        onClick: this.closeSidekick
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"]
      }), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Close Ad")), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: link,
        target: "_blank"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        alt: "Sidekick Ad",
        className: "preload",
        id: "sidekick-image",
        src: img,
        onLoad: function onLoad() {
          return Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_4__["loadImage"])('sidekick-image');
        }
      })));
    }
  }]);

  return Sidekick;
}(reactn__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./components/Takeover.jsx":
/*!*********************************!*\
  !*** ./components/Takeover.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Takeover; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Loading_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loading.jsx */ "./components/Loading.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/app.utilities.js */ "./utilities/app.utilities.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* eslint-disable space-before-function-paren */
// NOTICE: importing reactn instead of react
 // components

 // axios







var Takeover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Takeover, _React$Component);

  function Takeover(props) {
    var _this;

    _classCallCheck(this, Takeover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Takeover).call(this, props));
    _this.state = {
      desktop: null,
      mobile: null,
      loaded: false
    };
    _this.closeTakeover = _this.closeTakeover.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.resizeHeaderOnScroll = _this.resizeHeaderOnScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Takeover, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var resp, desktop, mobile;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://s3.amazonaws.com/dbk-ads-s3/links.json");

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
    key: "componentDidMount",
    value: function () {
      var _componentDidMount2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var resp, desktop, mobile;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://s3.amazonaws.com/dbk-ads-s3/links.json");

              case 2:
                resp = _context2.sent;
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
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount2.apply(this, arguments);
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
      jquery__WEBPACK_IMPORTED_MODULE_4___default()("#takeover").hide();
      var cookie = document.cookie;

      if (cookie.indexOf('visitedTakeover\x3d', 0) === -1) {
        document.cookie = 'visitedTakeover\x3d1;max-age\x3d360;path\x3d/';
      }
    }
  }, {
    key: "resetTakeover",
    value: function resetTakeover() {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()("#takeover").length) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()("#takeover").fadeIn();
      }
    }
  }, {
    key: "resizeHeaderOnScroll",
    value: function resizeHeaderOnScroll() {
      if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('#takeover').length) {
        return;
      }

      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 50;

      if (distanceY > shrinkOn) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()("#takeover").css('opacity', '0');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()("#takeover").css('opacity', '1');
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
        return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Loading_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null);
      }

      var _this$getTakeover = this.getTakeover(),
          link = _this$getTakeover.link,
          img = _this$getTakeover.img;

      return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "takeover",
        id: "takeover"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        id: "close-takeover",
        onClick: this.closeTakeover
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"]
      }), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Close Ad")), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: link,
        target: "_blank"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        alt: "Takeover Ad",
        className: "preload",
        id: "takeover-image",
        src: img,
        onLoad: function onLoad() {
          return Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_5__["loadImage"])('takeover-image');
        }
      })));
    }
  }]);

  return Takeover;
}(reactn__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./constants/constants.config.js":
/*!***************************************!*\
  !*** ./constants/constants.config.js ***!
  \***************************************/
/*! exports provided: ROOT, API_URL, GOOGLE_ANALYTICS_ID, BREAKPOINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT", function() { return ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_ANALYTICS_ID", function() { return GOOGLE_ANALYTICS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return BREAKPOINTS; });
// global variables
// html elements
// const ROOT = {
//   app: document.getElementById('app'),
//   lightbox: document.getElementById('lightbox'),
//   loading: document.getElementById('loading'),
//   sidebar: document.getElementById('sidebar')
// };
// api url
var API_URL =  true ? 'http://localhost:8080' : undefined; // google analytics

var GOOGLE_ANALYTICS_ID = 'UA-130746753-2'; // style

var BREAKPOINTS = {
  xsmall: 320,
  small: 480,
  schmedium: 768,
  medium: 980,
  large: 1200,
  xlarge: 1440
};


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "reactn");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-no-ssr */ "react-no-ssr");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header.jsx */ "./components/Header.jsx");
/* harmony import */ var _components_Footer_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer.jsx */ "./components/Footer.jsx");
/* harmony import */ var _components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Advertisement.jsx */ "./components/Advertisement.jsx");
/* harmony import */ var _components_Takeover_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Takeover.jsx */ "./components/Takeover.jsx");
/* harmony import */ var _components_Sidekick_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Sidekick.jsx */ "./components/Sidekick.jsx");
/* harmony import */ var _utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/app.utilities.js */ "./utilities/app.utilities.js");
/* harmony import */ var _static_sass_app_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/sass/app.sass */ "./static/sass/app.sass");
/* harmony import */ var _static_sass_app_sass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_sass_app_sass__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_12__);


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









 //sass




var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          menus = _this$props.menus;
      return reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_app__WEBPACK_IMPORTED_MODULE_4__["Container"], null, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("script", {
        async: true,
        src: "https://platform.twitter.com/widgets.js",
        charset: "utf-8"
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("meta", {
        name: "description",
        content: "The Diamondack"
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"]("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico"
      })), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_no_ssr__WEBPACK_IMPORTED_MODULE_3___default.a, null, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Takeover_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null)), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Header_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        path: "728x90_Banner_A",
        size: [728, 90],
        mode: "desktop"
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        path: "300x50_Mobile_Header",
        size: [300, 50],
        mode: "mobile"
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, pageProps), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        path: "300x50_Mobile_Footer",
        size: [300, 50],
        mode: "mobile"
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        path: "728x90_Banner_E",
        size: [728, 90],
        mode: "desktop"
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Footer_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        footer: menus.footer,
        social: menus.social
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_no_ssr__WEBPACK_IMPORTED_MODULE_3___default.a, null, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Sidekick_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps, footer, social;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
                return Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_10__["request"])('/menu/footer');

              case 8:
                footer = _context.sent;
                _context.next = 11;
                return Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_10__["request"])('/menu/stay-connected');

              case 11:
                social = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  menus: {
                    footer: footer,
                    social: social
                  }
                });

              case 13:
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
}(next_app__WEBPACK_IMPORTED_MODULE_4___default.a);



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

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


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

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-no-ssr":
/*!*******************************!*\
  !*** external "react-no-ssr" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

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
//# sourceMappingURL=_app.js.map