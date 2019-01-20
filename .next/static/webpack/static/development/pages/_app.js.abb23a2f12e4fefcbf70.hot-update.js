webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactn */ "./node_modules/reactn/index.js");
/* harmony import */ var reactn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/app.utilities.js */ "./utilities/app.utilities.js");


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

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Footer).call(this, props));
    console.log(_this.props);
    _this.state = {
      footer: null,
      social: null
    };
    return _this;
  }

  _createClass(Footer, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var footer, social;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_3__["request"])('/menu/footer');

              case 2:
                footer = _context.sent;
                _context.next = 5;
                return Object(_utilities_app_utilities_js__WEBPACK_IMPORTED_MODULE_3__["request"])('/menu/stay-connected');

              case 5:
                social = _context.sent;
                this.setState({
                  footer: footer.items,
                  social: social.items
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
    /**
     * This function takes a category title as an argument and returns it
     * lowercase with spaces replaced by dashes.
     *
     * ex: Other Links will becomes other-links.
     *
     * @param {string} title category title
     * @return {string} category title lowercase with spaces replaced by dashes
     */

  }, {
    key: "getColumnId",
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
      var _this$state = this.state,
          footer = _this$state.footer,
          social = _this$state.social;

      if (footer === null || social === null) {
        return "";
      }

      return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", null, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "footer-title"
      }, "Categories"), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "categories row"
      }, footer.map(function (category, index) {
        var id = "column-".concat(category.id);
        return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
          className: "footer-column",
          id: id,
          key: id
        }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          href: category.url
        }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: category.classes
        }, category.title)), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "sub-links"
        }, category.children.map(function (link, i) {
          return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            key: "link-".concat(i)
          }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterLink, link));
        })));
      })), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "contact"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "title-link"
      }, "Contact Us"), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://goo.gl/maps/14QKBBK8x1v",
        target: "_blank",
        rel: "noopener noreferrer"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("address", null, "3150 South Campus Dining Hall", reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "University of Maryland", reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "College Park, MD 20742", reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null))), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "contact-phone"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Newsroom"), ":", ' ', reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "tel:+3013148200"
      }, "301-314-8200"), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hours"
      }, "(4:30 p.m. to midnight, Sundays through Thursdays)")), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "contact-phone"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Advertising"), ":", ' ', reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "tel:+3013148000"
      }, "301-314-8000"), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hours"
      }, "(normal business hours, Mondays through Fridays)"))), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "stay-connected-copyright row"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "stay-connected"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Stay Connected"), social.map(function (link, i) {
        return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterLink, _extends({}, link, {
          key: i
        }));
      })), reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        href: "/"
      }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "copyright"
      }, "\xA9 2018 The Diamondback")))));
    }
  }]);

  return Footer;
}(reactn__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/**
 * Footer link class. Renders a footer link. Footer links, with the exception of
 * telephone links, are black. On hover, they are black and bold.
 *
 * @param {object} props link properties - url, classes, title and type
 * @return {Link} footer link
 */




var FooterLink = function FooterLink(props) {
  if (props.type === 'custom') {
    return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: props.classes,
      href: props.url,
      target: "_blank"
    }, props.title);
  }

  return reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: props.url
  }, reactn__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: props.classes
  }, props.title));
};

/***/ })

})
//# sourceMappingURL=_app.js.abb23a2f12e4fefcbf70.hot-update.js.map