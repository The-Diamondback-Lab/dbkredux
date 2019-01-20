webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
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



/***/ })

})
//# sourceMappingURL=_app.js.aac1d7accaad77774ab9.hot-update.js.map