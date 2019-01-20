webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header.jsx */ "./components/Header.jsx");
/* harmony import */ var _components_Footer_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer.jsx */ "./components/Footer.jsx");
/* harmony import */ var _components_Advertisement_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Advertisement.jsx */ "./components/Advertisement.jsx");
/* harmony import */ var _components_Takeover_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Takeover.jsx */ "./components/Takeover.jsx");
/* harmony import */ var _components_Sidekick_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Sidekick.jsx */ "./components/Sidekick.jsx");
/* harmony import */ var _static_sass_app_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/sass/app.sass */ "./static/sass/app.sass");
/* harmony import */ var _static_sass_app_sass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_sass_app_sass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_11__);


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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react








 //sass




var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      menus: undefined
    });

    return _this;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('hi');

              case 1:
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
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
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
      }), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Footer_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null), reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_no_ssr__WEBPACK_IMPORTED_MODULE_3___default.a, null, reactn__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_Sidekick_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context2.sent;

              case 6:
                console.log('hi');
                return _context2.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }() // store contacts in the state

  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_4___default.a);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.78c1879650efd719346e.hot-update.js.map