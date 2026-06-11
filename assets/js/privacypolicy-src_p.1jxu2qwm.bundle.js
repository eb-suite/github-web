"use strict";
(self["webpackChunkweb_webpack"] = self["webpackChunkweb_webpack"] || []).push([["privacypolicy-src_p"],{

/***/ "./src/page/privacy-policy/App.js":
/*!****************************************!*\
  !*** ./src/page/privacy-policy/App.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AppContext */ "./src/context/AppContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ "./src/utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_clientSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/clientSlice */ "./src/store/clientSlice.js");
/* harmony import */ var _store_scrollSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/scrollSlice */ "./src/store/scrollSlice.js");
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Landing */ "./src/page/privacy-policy/components/Landing.js");
/* harmony import */ var _common_components_Preload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/common/components/Preload */ "./src/common/components/Preload.js");
/* harmony import */ var _common_components_RedirectLoading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/common/components/RedirectLoading */ "./src/common/components/RedirectLoading.js");
/* harmony import */ var _common_components_LoaderLogo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/common/components/LoaderLogo */ "./src/common/components/LoaderLogo.js");
/* harmony import */ var _common_components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/common/components/Navbar */ "./src/common/components/Navbar.js");
/* harmony import */ var _common_components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/common/components/Footer */ "./src/common/components/Footer.js");
/* harmony import */ var _common_components_tracking_GoogleConsent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/common/components/tracking/GoogleConsent */ "./src/common/components/tracking/GoogleConsent.js");
/* harmony import */ var _scss_page_privacy_policy_index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/scss/page/privacy-policy/index.scss */ "./src/scss/page/privacy-policy/index.scss");
/* harmony import */ var _common_components_HoverCursorBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/common/components/HoverCursorBox */ "./src/common/components/HoverCursorBox.js");

// import WebFont from 'webfontloader';













// import * as cursoreffects from 'cursor-effects';


class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      openContent: false,
      showHeader: true
    };
    this.clockRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
  }
  handleScrollBehavior() {
    [...document.querySelectorAll('.animate-in-view'), ...document.querySelectorAll('.landing-wrapper-content-paragraph')].forEach(ref => {
      if (ref) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.checkIsInViewport)(ref, status => {
          if (status && !ref.classList.contains('active')) {
            ref.classList.add('active');
          } else if (!status && ref.classList.contains('active')) {
            if (!ref.classList.contains('landing-wrapper-content-paragraph')) ref.classList.remove('active');
          }
        });
      }
    });
  }
  scrollHandler = () => {
    const {
      setScrollY
    } = this.props;
    const scrollTop = window.scrollY;
    if (scrollTop < this.props.scrollY || scrollTop < window.innerHeight) {
      !this.state.showHeader && this.setState({
        showHeader: true
      });
    } else {
      this.state.showHeader && this.setState({
        showHeader: false
      });
    }
    setScrollY(scrollTop);
    this.handleScrollBehavior();
  };
  resizeHandler = () => {
    const {
      setClientWidth,
      setClientHeight,
      clientWidth,
      clientHeight
    } = this.props;
    const dc_width = document.documentElement.clientWidth;
    clientWidth != dc_width && setClientWidth(dc_width);
    const dc_height = document.documentElement.clientHeight;
    clientHeight != dc_height && setClientHeight(dc_height);
    this.handleScrollBehavior();
  };
  componentDidMount() {
    this.scrollHandler();
    window.addEventListener('scroll', this.scrollHandler);
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.loadFont)();
    // WebFont.load({
    //     google: {
    //         families: ['Montserrat:300,400,500,600,700,800', 'Lexend:300,400,500,600,700,800']
    //     }
    // });
    // if (!!this.clockRef) {
    //     new cursoreffects.clockCursor({ element: this.clockRef.current })
    // }
  }
  setOpenContent(status) {
    const {
      setIsAppOpen
    } = this.props;
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.lazyAct)(0.1).then(() => {
      if (status) document.body.classList.add('open');
      this.setState({
        openContent: status
      });
      setIsAppOpen(status);
    });
  }
  componentDidUpdate(prevProps) {
    const {
      isAppOpen
    } = this.props;
    if (isAppOpen && !prevProps.isAppOpen) {
      window.scrollTo(0, 0);
    }
  }
  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器  
    console.error("Caught an error in ErrorBoundary", error, errorInfo);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('resize', this.resizeHandler);
  }
  render() {
    const {
      pageloading
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
      value: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_tracking_GoogleConsent__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_HoverCursorBox__WEBPACK_IMPORTED_MODULE_14__["default"], null, this.state.openContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      hide: !this.state.showHeader,
      activepage: "privacy-policy"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "contact-page"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Landing__WEBPACK_IMPORTED_MODULE_6__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: this.clockRef
    }), pageloading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_RedirectLoading__WEBPACK_IMPORTED_MODULE_8__["default"], null) : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Preload__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onOpen: v => this.setOpenContent(v)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_LoaderLogo__WEBPACK_IMPORTED_MODULE_9__["default"], null))))));
  }
}
const mapStateToProps = state => {
  return {
    isPC: state.clientSlice.isPC,
    isAppOpen: state.baseSlice.isAppOpen,
    scrollY: state.scrollSlice.scrollY,
    clientWidth: state.clientSlice.clientWidth,
    clientHeight: state.clientSlice.clientHeight,
    pageloading: state.baseSlice.redirectloading
  };
};
const mapDispatchToProps = {
  setClientWidth: _store_clientSlice__WEBPACK_IMPORTED_MODULE_3__.setClientWidth,
  setClientHeight: _store_clientSlice__WEBPACK_IMPORTED_MODULE_3__.setClientHeight,
  setScrollY: _store_scrollSlice__WEBPACK_IMPORTED_MODULE_4__.setScrollY,
  setIsAppOpen: _store_baseSlice__WEBPACK_IMPORTED_MODULE_5__.setIsAppOpen
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_15__.connect)(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/page/privacy-policy/components/Landing.js":
/*!*******************************************************!*\
  !*** ./src/page/privacy-policy/components/Landing.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Landing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class Landing extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  redirectToUrl(url) {
    window.open(url, '_blank');
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Privacy Policy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtl-desc update-time"
    }, "Last Updated: 2024-07-08 (Mon)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "Introduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "eb-suite.com (\"we,\" \"us,\" or \"our\") is committed to protecting the privacy of our users (\"you\" or \"your\"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website (the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "\"Site\""), ").")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "Information We Collect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "We collect information that you provide to us directly, as well as information that is automatically collected when you use the Site.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "Information You Provide:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Contact Information"), ": When you contact us, subscribe to our newsletter, or submit a form, you may provide us with your name, email address, phone number, and other contact information.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Account Information"), ": If you create an account on the Site, you will provide us with certain personal information, such as your username, password, and other account details.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Content You Submit"), ": You may choose to submit content to the Site, such as comments, reviews, or other materials.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "Information We Collect Automatically:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Usage Data"), ": We collect information about your use of the Site, such as your IP address, browser type, operating system, referring pages, pages visited, and the date and time of your visit."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Device Information"), ": We may collect information about your device, such as your device type, unique device identifiers, and operating system."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Location Information"), ": With your consent, we may collect your location information, such as your GPS coordinates.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "How We Use Your Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-subtitle"
    }, "We use the information we collect to:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Provide and operate the Site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Respond to your inquiries and requests."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Personalize your experience on the Site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Send you marketing communications, newsletters, and other promotional materials."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Analyze and improve the Site and our services."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Protect the security of the Site and our users."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Comply with applicable laws and regulations.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "Disclosure of Your Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-subtitle"
    }, "We may disclose your information to:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Service providers who assist us in providing the Site and our services."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Third-party advertisers who may use your information to deliver targeted advertising."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Other companies or individuals if we believe disclosure is necessary to comply with applicable laws, regulations, or legal process."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Other companies or individuals if we believe disclosure is necessary to protect the rights, property, or safety of ourselves, our users, or others.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "Your Choices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-subtitle"
    }, "You have certain choices regarding your information:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Opt-Out of Marketing Communications"), ": You can opt out of receiving marketing communications from us by following the unsubscribe instructions provided in such communications."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Manage Cookies"), ": You can manage your cookie preferences through your browser settings."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Access and Update Your Information"), ": You can access and update your personal information by contacting us at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "mailto:enquiry@eb-suite.com"
    }, "enquiry@eb-suite.com"), ".")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "Security"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "We take reasonable measures to protect your information from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "unauthorized access"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "use"), ", or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "disclosure"), ". However, no website or online service can guarantee complete security."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Children's Privacy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "The Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "Changes to This Privacy Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "We may update this Privacy Policy from time to time. We will post any changes on the Site. Your continued use of the Site after the posting of changes constitutes your acceptance of the revised Privacy Policy.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "If you have any questions about this Privacy Policy, please contact us at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "mailto:enquiry@eb-suite.com"
    }, "enquiry@eb-suite.com"), "."))))));
  }
}

/***/ }),

/***/ "./src/page/privacy-policy/index.js":
/*!******************************************!*\
  !*** ./src/page/privacy-policy/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/page/privacy-policy/App.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/index */ "./src/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");





const app = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('app'));
app.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _store_index__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/scss/page/privacy-policy/index.scss":
/*!*************************************************!*\
  !*** ./src/scss/page/privacy-policy/index.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL3ByaXZhY3lwb2xpY3ktc3JjX3AuMWp4dTJxd20uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUMvQjtBQUM4QztBQUNpQjtBQUN6QjtBQUNnQztBQUNyQjtBQUNBO0FBQ047QUFDTztBQUNnQjtBQUNWO0FBQ0g7QUFDTDtBQUN1QjtBQUN2RTtBQUMrQztBQUNpQjtBQUVoRSxNQUFNa0IsR0FBRyxTQUFTbEIsNENBQWUsQ0FBQztFQUM5Qm9CLFdBQVdBLENBQUNDLEtBQUssRUFBRTtJQUNmLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUc7TUFDVEMsV0FBVyxFQUFFLEtBQUs7TUFDbEJDLFVBQVUsRUFBRTtJQUNoQixDQUFDO0lBQ0QsSUFBSSxDQUFDQyxRQUFRLGdCQUFHekIsNENBQWUsQ0FBQyxDQUFDO0VBQ3JDO0VBRUEyQixvQkFBb0JBLENBQUEsRUFBSTtJQUNwQixDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHRCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLElBQUk7TUFDbEksSUFBSUEsR0FBRyxFQUFFO1FBQ0w1Qix5REFBaUIsQ0FBQzRCLEdBQUcsRUFBR0MsTUFBTSxJQUFLO1VBQy9CLElBQUlBLE1BQU0sSUFBSSxDQUFDRCxHQUFHLENBQUNFLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdDSCxHQUFHLENBQUNFLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztVQUMvQixDQUFDLE1BQU0sSUFBSSxDQUFDSCxNQUFNLElBQUlELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDSCxHQUFHLENBQUNFLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLG1DQUFtQyxDQUFDLEVBQUNILEdBQUcsQ0FBQ0UsU0FBUyxDQUFDRyxNQUFNLENBQUMsUUFBUSxDQUFDO1VBQ25HO1FBQ0osQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBQyxhQUFhLEdBQUdBLENBQUEsS0FBTTtJQUNsQixNQUFNO01BQUU3QjtJQUFXLENBQUMsR0FBRyxJQUFJLENBQUNhLEtBQUs7SUFDakMsTUFBTWlCLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxPQUFPO0lBQ2hDLElBQUlGLFNBQVMsR0FBRyxJQUFJLENBQUNqQixLQUFLLENBQUNtQixPQUFPLElBQUlGLFNBQVMsR0FBR0MsTUFBTSxDQUFDRSxXQUFXLEVBQUU7TUFDbEUsQ0FBQyxJQUFJLENBQUNuQixLQUFLLENBQUNFLFVBQVUsSUFBSSxJQUFJLENBQUNrQixRQUFRLENBQUM7UUFDcENsQixVQUFVLEVBQUU7TUFDaEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDRixLQUFLLENBQUNFLFVBQVUsSUFBSSxJQUFJLENBQUNrQixRQUFRLENBQUM7UUFDbkNsQixVQUFVLEVBQUU7TUFDaEIsQ0FBQyxDQUFDO0lBQ047SUFDQWhCLFVBQVUsQ0FBQzhCLFNBQVMsQ0FBQztJQUNyQixJQUFJLENBQUNYLG9CQUFvQixDQUFDLENBQUM7RUFDL0IsQ0FBQztFQUVEZ0IsYUFBYSxHQUFHQSxDQUFBLEtBQU07SUFDbEIsTUFBTTtNQUFFckMsY0FBYztNQUFFQyxlQUFlO01BQUVxQyxXQUFXO01BQUVDO0lBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQ3hCLEtBQUs7SUFDakYsTUFBTXlCLFFBQVEsR0FBR2xCLFFBQVEsQ0FBQ21CLGVBQWUsQ0FBQ0gsV0FBVztJQUNyREEsV0FBVyxJQUFJRSxRQUFRLElBQUl4QyxjQUFjLENBQUN3QyxRQUFRLENBQUM7SUFDbkQsTUFBTUUsU0FBUyxHQUFHcEIsUUFBUSxDQUFDbUIsZUFBZSxDQUFDRixZQUFZO0lBQ3ZEQSxZQUFZLElBQUlHLFNBQVMsSUFBSXpDLGVBQWUsQ0FBQ3lDLFNBQVMsQ0FBQztJQUN2RCxJQUFJLENBQUNyQixvQkFBb0IsQ0FBQyxDQUFDO0VBQy9CLENBQUM7RUFFRHNCLGlCQUFpQkEsQ0FBQSxFQUFHO0lBRWhCLElBQUksQ0FBQ1osYUFBYSxDQUFDLENBQUM7SUFDcEJFLE1BQU0sQ0FBQ1csZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ2IsYUFBYSxDQUFDO0lBQ3JELElBQUksQ0FBQ00sYUFBYSxDQUFDLENBQUM7SUFDcEJKLE1BQU0sQ0FBQ1csZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ1AsYUFBYSxDQUFDO0lBQ3JEdkMsZ0RBQVEsQ0FBQyxDQUFDO0lBQ1Y7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNKO0VBQ0ErQyxjQUFjQSxDQUFDbkIsTUFBTSxFQUFFO0lBQ25CLE1BQU07TUFBRXZCO0lBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQ1ksS0FBSztJQUNuQ25CLCtDQUFPLENBQUMsR0FBRyxDQUFDLENBQUNrRCxJQUFJLENBQUMsTUFBTTtNQUNwQixJQUFJcEIsTUFBTSxFQUFFSixRQUFRLENBQUN5QixJQUFJLENBQUNwQixTQUFTLENBQUNFLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDL0MsSUFBSSxDQUFDTyxRQUFRLENBQUM7UUFDVm5CLFdBQVcsRUFBRVM7TUFDakIsQ0FBQyxDQUFDO01BQ0Z2QixZQUFZLENBQUN1QixNQUFNLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0VBQ047RUFDQXNCLGtCQUFrQkEsQ0FBQ0MsU0FBUyxFQUFFO0lBQzFCLE1BQU07TUFBRUM7SUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDbkMsS0FBSztJQUNoQyxJQUFJbUMsU0FBUyxJQUFJLENBQUNELFNBQVMsQ0FBQ0MsU0FBUyxFQUFFO01BQ25DakIsTUFBTSxDQUFDa0IsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekI7RUFDSjtFQUNBQyxpQkFBaUJBLENBQUNDLEtBQUssRUFBRUMsU0FBUyxFQUFFO0lBQ2hDO0lBQ0FDLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDLGtDQUFrQyxFQUFFQSxLQUFLLEVBQUVDLFNBQVMsQ0FBQztFQUN2RTtFQUVBRSxvQkFBb0JBLENBQUEsRUFBRztJQUNuQnZCLE1BQU0sQ0FBQ3dCLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMxQixhQUFhLENBQUM7SUFDeERFLE1BQU0sQ0FBQ3dCLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNwQixhQUFhLENBQUM7RUFDNUQ7RUFFQXFCLE1BQU1BLENBQUEsRUFBRztJQUNMLE1BQU07TUFBRUM7SUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDNUMsS0FBSztJQUNsQyxvQkFBUXJCLGdEQUFBLENBQUFBLDJDQUFBLHFCQUNKQSxnREFBQSxDQUFDQywyREFBVSxDQUFDbUUsUUFBUTtNQUFDQyxLQUFLLEVBQUUsQ0FBQztJQUFFLGdCQUMzQnJFLGdEQUFBLENBQUNnQixrRkFBYSxNQUFnQixDQUFDLGVBQy9CaEIsZ0RBQUEsQ0FBQ2lCLDBFQUFjLFFBQ2QsSUFBSSxDQUFDSyxLQUFLLENBQUNDLFdBQVcsZ0JBQ25CdkIsZ0RBQUEsQ0FBQUEsMkNBQUEscUJBQ0lBLGdEQUFBLENBQUNjLGtFQUFXO01BQUN3RCxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUNoRCxLQUFLLENBQUNFLFVBQVc7TUFBQytDLFVBQVUsRUFBQztJQUFnQixDQUFjLENBQUMsZUFDckZ2RSxnREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQWMsZ0JBQ3pCeEUsZ0RBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUF3QixnQkFDbkN4RSxnREFBQSxDQUFDVSwyREFBTyxNQUFVLENBQ2pCLENBQ0osQ0FBQyxlQUNOVixnREFBQSxDQUFDZSxrRUFBTSxNQUFTLENBQUMsZUFDakJmLGdEQUFBO01BQUsrQixHQUFHLEVBQUUsSUFBSSxDQUFDTjtJQUFTLENBQU0sQ0FBQyxFQUM5QndDLFdBQVcsZ0JBQUdqRSxnREFBQSxDQUFDWSwwRUFBZSxNQUFFLENBQUMsR0FBRyxJQUN2QyxDQUFDLGdCQUNIWixnREFBQSxDQUFBQSwyQ0FBQSxxQkFDSUEsZ0RBQUEsQ0FBQ1csa0VBQU87TUFBQzhELE1BQU0sRUFBRUMsQ0FBQyxJQUFJLElBQUksQ0FBQ3ZCLGNBQWMsQ0FBQ3VCLENBQUM7SUFBRSxnQkFDekMxRSxnREFBQSxDQUFDYSxxRUFBVSxNQUFFLENBQ1IsQ0FDWCxDQUNVLENBQ0MsQ0FDdkIsQ0FBQztFQUNQO0FBQ0o7QUFFQSxNQUFNOEQsZUFBZSxHQUFJckQsS0FBSyxJQUFLO0VBQy9CLE9BQU87SUFDSHNELElBQUksRUFBRXRELEtBQUssQ0FBQ3VELFdBQVcsQ0FBQ0QsSUFBSTtJQUM1QnBCLFNBQVMsRUFBRWxDLEtBQUssQ0FBQ3dELFNBQVMsQ0FBQ3RCLFNBQVM7SUFDcENoQixPQUFPLEVBQUVsQixLQUFLLENBQUN5RCxXQUFXLENBQUN2QyxPQUFPO0lBQ2xDSSxXQUFXLEVBQUV0QixLQUFLLENBQUN1RCxXQUFXLENBQUNqQyxXQUFXO0lBQzFDQyxZQUFZLEVBQUV2QixLQUFLLENBQUN1RCxXQUFXLENBQUNoQyxZQUFZO0lBQzVDb0IsV0FBVyxFQUFFM0MsS0FBSyxDQUFDd0QsU0FBUyxDQUFDRTtFQUNqQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU1DLGtCQUFrQixHQUFHO0VBQ3ZCM0UsY0FBYztFQUNkQyxlQUFlO0VBQ2ZDLFVBQVU7RUFDVkMsWUFBWUEsNERBQUFBO0FBQ2hCLENBQUM7QUFFRCxpRUFBZUoscURBQU8sQ0FBQ3NFLGVBQWUsRUFBRU0sa0JBQWtCLENBQUMsQ0FBQy9ELEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdKdkI7QUFFMUIsTUFBTVIsT0FBTyxTQUFTUyw0Q0FBUyxDQUFDO0VBQzdDQyxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7SUFDakIsS0FBSyxDQUFDQSxLQUFLLENBQUM7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDLENBQUM7RUFDakI7RUFFQTRELGFBQWFBLENBQUNDLEdBQUcsRUFBRTtJQUNqQjVDLE1BQU0sQ0FBQzZDLElBQUksQ0FBQ0QsR0FBRyxFQUFFLFFBQVEsQ0FBQztFQUM1QjtFQUVBbkIsTUFBTUEsQ0FBQSxFQUFHO0lBQ1Asb0JBQ0VoRSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVMsZ0JBQ3RCeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFlLGdCQUM1QnhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBaUIsZ0JBQzlCeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFxQixnQkFDbEN4RSwwREFBQSxhQUFJLGdCQUFrQixDQUFDLGVBQ3ZCQSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQXVCLEdBQUMsZ0NBRWxDLENBQ0YsQ0FBQyxlQUNOeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUF5QixnQkFDdEN4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQTBDLGdCQUN2RHhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBWSxHQUFDLGNBRXZCLENBQUMsZUFDTnhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBVyxHQUFDLGdQQUMyTSxlQUFBeEUsMERBQUE7TUFBTXdFLFNBQVMsRUFBQztJQUFrQixHQUFDLFVBQVksQ0FBQyxNQUNqUixDQUNGLENBQUMsZUFDTnhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBMEMsZ0JBQ3ZEeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFZLEdBQUMsd0JBQTJCLENBQUMsZUFDeER4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVcsR0FBQyx1SUFFdEIsQ0FDRixDQUFDLGVBQ054RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQW1DLGdCQUNoRHhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBWSxHQUFDLDBCQUV2QixDQUFDLGVBQ054RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVcsZ0JBQ3hCeEUsMERBQUE7TUFBTXdFLFNBQVMsRUFBQztJQUFrQixHQUFDLHFCQUF5QixDQUFDLHdLQUFvSyxlQUFBeEUsMERBQUEsV0FBSSxDQUFDLGVBQUFBLDBEQUFBLFdBQUssQ0FBQyxlQUM1T0EsMERBQUE7TUFBTXdFLFNBQVMsRUFBQztJQUFrQixHQUFDLHFCQUF5QixDQUFDLDhKQUEwSixlQUFBeEUsMERBQUEsV0FBSyxDQUFDLGVBQUFBLDBEQUFBLFdBQUssQ0FBQyxlQUNuT0EsMERBQUE7TUFBTXdFLFNBQVMsRUFBQztJQUFrQixHQUFDLG9CQUF3QixDQUFDLGtHQUN6RCxDQUNGLENBQUMsZUFDTnhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBbUMsZ0JBQ2hEeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFZLEdBQUMsdUNBQTBDLENBQUMsZUFDdkV4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVcsZ0JBQ3hCeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFnQixnQkFDN0J4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQXFCLGdCQUFDeEUsMERBQUE7TUFBTXdFLFNBQVMsRUFBQztJQUFrQixHQUFDLFlBQWdCLENBQUMsc0xBQXVMLENBQUMsZUFDalJ4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQXFCLGdCQUFDeEUsMERBQUE7TUFBTXdFLFNBQVMsRUFBQztJQUFrQixHQUFDLG9CQUF3QixDQUFDLDhIQUErSCxDQUFDLGVBQ2pPeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFxQixnQkFBQ3hFLDBEQUFBO01BQU13RSxTQUFTLEVBQUM7SUFBa0IsR0FBQyxzQkFBMEIsQ0FBQyxnR0FBaUcsQ0FDak0sQ0FDRixDQUNGLENBQUMsZUFDTnhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBbUMsZ0JBQ2hEeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFZLEdBQUMsNkJBQWdDLENBQUMsZUFDN0R4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVcsZ0JBQ3hCeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFnQixnQkFDN0J4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQXlCLEdBQUMsdUNBRXBDLENBQUMsZUFDTnhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBcUIsR0FBQywrQkFFaEMsQ0FBQyxlQUNOeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFxQixHQUFDLHlDQUVoQyxDQUFDLGVBQ054RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQXFCLEdBQUMsMENBRWhDLENBQUMsZUFDTnhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBcUIsR0FBQyxrRkFFaEMsQ0FBQyxlQUNOeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFxQixHQUFDLGdEQUVoQyxDQUFDLGVBQ054RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQXFCLEdBQUMsaURBRWhDLENBQUMsZUFDTnhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBcUIsR0FBQyw4Q0FFaEMsQ0FDRixDQUNGLENBQ0YsQ0FBQyxlQUVOeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFtQyxnQkFDaER4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVksR0FBQyxnQ0FBbUMsQ0FBQyxlQUNoRXhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBVyxnQkFDeEJ4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQWdCLGdCQUM3QnhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBeUIsR0FBQyxzQ0FFcEMsQ0FBQyxlQUNOeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFxQixHQUFDLHlFQUVoQyxDQUFDLGVBQ054RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQXFCLEdBQUMsdUZBRWhDLENBQUMsZUFDTnhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBcUIsR0FBQyxxSUFFaEMsQ0FBQyxlQUNOeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFxQixHQUFDLHFKQUVoQyxDQUNGLENBQ0YsQ0FDRixDQUFDLGVBRU54RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQW1DLGdCQUNoRHhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBWSxHQUFDLGNBQWlCLENBQUMsZUFDOUN4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVcsZ0JBQ3hCeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFnQixnQkFDN0J4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQXlCLEdBQUMsc0RBRXBDLENBQUMsZUFDTnhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBcUIsZ0JBQ2xDeEUsMERBQUE7TUFBTXdFLFNBQVMsRUFBQztJQUFrQixHQUFDLHFDQUF5QyxDQUFDLDhJQUMxRSxDQUFDLGVBQ054RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQXFCLGdCQUNsQ3hFLDBEQUFBO01BQU13RSxTQUFTLEVBQUM7SUFBa0IsR0FBQyxnQkFBb0IsQ0FBQywyRUFDckQsQ0FBQyxlQUNOeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFxQixnQkFDbEN4RSwwREFBQTtNQUFNd0UsU0FBUyxFQUFDO0lBQWtCLEdBQUMsb0NBQXdDLENBQUMsOEVBQTBFLGVBQUF4RSwwREFBQTtNQUFHcUYsSUFBSSxFQUFDO0lBQTZCLEdBQUMsc0JBQXVCLENBQUMsS0FDak4sQ0FDRixDQUNGLENBQ0YsQ0FBQyxlQUVOckYsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFtQyxnQkFDaER4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVksR0FBQyxVQUFhLENBQUMsZUFDMUN4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVcsR0FBQywrREFDb0MsZUFBQXhFLDBEQUFBO01BQU13RSxTQUFTLEVBQUM7SUFBa0IsR0FBQyxxQkFBeUIsQ0FBQyxNQUFFLGVBQUF4RSwwREFBQTtNQUFNd0UsU0FBUyxFQUFDO0lBQWtCLEdBQUMsS0FBUyxDQUFDLFNBQUssZUFBQXhFLDBEQUFBO01BQU13RSxTQUFTLEVBQUM7SUFBa0IsR0FBQyxZQUFnQixDQUFDLDRFQUMvTixDQUFDLGVBQ054RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVcsZ0JBQUN4RSwwREFBQTtNQUFNd0UsU0FBUyxFQUFDO0lBQWtCLEdBQUMsb0JBQXdCLENBQU0sQ0FBQyxlQUM3RnhFLDBEQUFBO01BQUt3RSxTQUFTLEVBQUM7SUFBVyxHQUFDLHFJQUF3SSxDQUFDLGVBQ3BLeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFXLGdCQUFDeEUsMERBQUE7TUFBTXdFLFNBQVMsRUFBQztJQUFrQixHQUFDLGdDQUFvQyxDQUFNLENBQUMsZUFDekd4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVcsR0FBQyxtTkFBc04sQ0FDOU8sQ0FBQyxlQUVOeEUsMERBQUE7TUFBS3dFLFNBQVMsRUFBQztJQUFtQyxnQkFFaER4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVksR0FBQyxZQUFlLENBQUMsZUFDNUN4RSwwREFBQTtNQUFLd0UsU0FBUyxFQUFDO0lBQVcsR0FBQyw0RUFDaUQsZUFBQXhFLDBEQUFBO01BQUdxRixJQUFJLEVBQUM7SUFBNkIsR0FBQyxzQkFBdUIsQ0FBQyxLQUNySSxDQUNGLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FBQztFQUVWO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0o4QjtBQUNnQjtBQUN0QjtBQUNVO0FBQ0s7QUFFdkMsTUFBTUcsR0FBRyxHQUFHRiw0REFBVSxDQUFDMUQsUUFBUSxDQUFDNkQsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RERCxHQUFHLENBQUN4QixNQUFNLGNBQUNoRSxnREFBQSxDQUFDb0UsaURBQVE7RUFBQ21CLEtBQUssRUFBRUEsb0RBQUtBO0FBQUMsZ0JBQzlCdkYsZ0RBQUEsQ0FBQ2tCLDRDQUFHLE1BQUUsQ0FDQSxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDVFoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9wYWdlL3ByaXZhY3ktcG9saWN5L0FwcC5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9wYWdlL3ByaXZhY3ktcG9saWN5L2NvbXBvbmVudHMvTGFuZGluZy5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9wYWdlL3ByaXZhY3ktcG9saWN5L2luZGV4LmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3Njc3MvcGFnZS9wcml2YWN5LXBvbGljeS9pbmRleC5zY3NzPzBkY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgV2ViRm9udCBmcm9tICd3ZWJmb250bG9hZGVyJztcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnQC9jb250ZXh0L0FwcENvbnRleHQnO1xyXG5pbXBvcnQgeyBsYXp5QWN0LCBjaGVja0lzSW5WaWV3cG9ydCwgbG9hZEZvbnQgfSBmcm9tICdAL3V0aWxzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0Q2xpZW50V2lkdGgsIHNldENsaWVudEhlaWdodCB9IGZyb20gJ0Avc3RvcmUvY2xpZW50U2xpY2UnO1xyXG5pbXBvcnQgeyBzZXRTY3JvbGxZIH0gZnJvbSAnQC9zdG9yZS9zY3JvbGxTbGljZSc7XHJcbmltcG9ydCB7IHNldElzQXBwT3BlbiB9IGZyb20gJ0Avc3RvcmUvYmFzZVNsaWNlJztcclxuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi9jb21wb25lbnRzL0xhbmRpbmcnO1xyXG5pbXBvcnQgUHJlbG9hZCBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL1ByZWxvYWQnO1xyXG5pbXBvcnQgUmVkaXJlY3RMb2FkaW5nIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvUmVkaXJlY3RMb2FkaW5nJztcclxuaW1wb3J0IExvYWRlckxvZ28gZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9Mb2FkZXJMb2dvJztcclxuaW1wb3J0IEhlYWRlck1lbnVzIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvTmF2YmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBHb29nbGVDb25zZW50IGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvdHJhY2tpbmcvR29vZ2xlQ29uc2VudCc7XHJcbi8vIGltcG9ydCAqIGFzIGN1cnNvcmVmZmVjdHMgZnJvbSAnY3Vyc29yLWVmZmVjdHMnO1xyXG5pbXBvcnQgJ0Avc2Nzcy9wYWdlL3ByaXZhY3ktcG9saWN5L2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgSG92ZXJDdXJzb3JCb3ggZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9Ib3ZlckN1cnNvckJveCc7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbkNvbnRlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93SGVhZGVyOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsb2NrUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2Nyb2xsQmVoYXZpb3IgKCkge1xyXG4gICAgICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0ZS1pbi12aWV3JyksIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5kaW5nLXdyYXBwZXItY29udGVudC1wYXJhZ3JhcGgnKV0uZm9yRWFjaChyZWYgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVmKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja0lzSW5WaWV3cG9ydChyZWYsIChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzICYmICFyZWYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc3RhdHVzICYmIHJlZi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVmLmNsYXNzTGlzdC5jb250YWlucygnbGFuZGluZy13cmFwcGVyLWNvbnRlbnQtcGFyYWdyYXBoJykpcmVmLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNldFNjcm9sbFkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA8IHRoaXMucHJvcHMuc2Nyb2xsWSB8fCBzY3JvbGxUb3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgIXRoaXMuc3RhdGUuc2hvd0hlYWRlciAmJiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNob3dIZWFkZXI6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93SGVhZGVyICYmIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlcjogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNjcm9sbFkoc2Nyb2xsVG9wKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbEJlaGF2aW9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNldENsaWVudFdpZHRoLCBzZXRDbGllbnRIZWlnaHQsIGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZGNfd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY2xpZW50V2lkdGggIT0gZGNfd2lkdGggJiYgc2V0Q2xpZW50V2lkdGgoZGNfd2lkdGgpO1xyXG4gICAgICAgIGNvbnN0IGRjX2hlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgY2xpZW50SGVpZ2h0ICE9IGRjX2hlaWdodCAmJiBzZXRDbGllbnRIZWlnaHQoZGNfaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbEJlaGF2aW9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMucmVzaXplSGFuZGxlcigpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIpO1xyXG4gICAgICAgIGxvYWRGb250KCk7XHJcbiAgICAgICAgLy8gV2ViRm9udC5sb2FkKHtcclxuICAgICAgICAvLyAgICAgZ29vZ2xlOiB7XHJcbiAgICAgICAgLy8gICAgICAgICBmYW1pbGllczogWydNb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAsODAwJywgJ0xleGVuZDozMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCddXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBpZiAoISF0aGlzLmNsb2NrUmVmKSB7XHJcbiAgICAgICAgLy8gICAgIG5ldyBjdXJzb3JlZmZlY3RzLmNsb2NrQ3Vyc29yKHsgZWxlbWVudDogdGhpcy5jbG9ja1JlZi5jdXJyZW50IH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgc2V0T3BlbkNvbnRlbnQoc3RhdHVzKSB7XHJcbiAgICAgICAgY29uc3QgeyBzZXRJc0FwcE9wZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGF6eUFjdCgwLjEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGVuQ29udGVudDogc3RhdHVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0SXNBcHBPcGVuKHN0YXR1cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc0FwcE9wZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKGlzQXBwT3BlbiAmJiAhcHJldlByb3BzLmlzQXBwT3Blbikge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xyXG4gICAgICAgIC8vIOS9oOWQjOagt+WPr+S7peWwhumUmeivr+aXpeW/l+S4iuaKpee7meacjeWKoeWZqCAgXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNhdWdodCBhbiBlcnJvciBpbiBFcnJvckJvdW5kYXJ5XCIsIGVycm9yLCBlcnJvckluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHBhZ2Vsb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoPD5cclxuICAgICAgICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t9fT5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVDb25zZW50PjwvR29vZ2xlQ29uc2VudD5cclxuICAgICAgICAgICAgICAgIDxIb3ZlckN1cnNvckJveD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm9wZW5Db250ZW50ID9cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyTWVudXMgaGlkZT17IXRoaXMuc3RhdGUuc2hvd0hlYWRlcn0gYWN0aXZlcGFnZT1cInByaXZhY3ktcG9saWN5XCI+PC9IZWFkZXJNZW51cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbi12aWV3IGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYW5kaW5nPjwvTGFuZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e3RoaXMuY2xvY2tSZWZ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZWxvYWRpbmcgPyA8UmVkaXJlY3RMb2FkaW5nIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8Lz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVsb2FkIG9uT3Blbj17diA9PiB0aGlzLnNldE9wZW5Db250ZW50KHYpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXJMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJlbG9hZD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgICAgICA8L0hvdmVyQ3Vyc29yQm94PlxyXG4gICAgICAgICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+KTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzUEM6IHN0YXRlLmNsaWVudFNsaWNlLmlzUEMsXHJcbiAgICAgICAgaXNBcHBPcGVuOiBzdGF0ZS5iYXNlU2xpY2UuaXNBcHBPcGVuLFxyXG4gICAgICAgIHNjcm9sbFk6IHN0YXRlLnNjcm9sbFNsaWNlLnNjcm9sbFksXHJcbiAgICAgICAgY2xpZW50V2lkdGg6IHN0YXRlLmNsaWVudFNsaWNlLmNsaWVudFdpZHRoLFxyXG4gICAgICAgIGNsaWVudEhlaWdodDogc3RhdGUuY2xpZW50U2xpY2UuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIHBhZ2Vsb2FkaW5nOiBzdGF0ZS5iYXNlU2xpY2UucmVkaXJlY3Rsb2FkaW5nLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIHNldENsaWVudFdpZHRoLFxyXG4gICAgc2V0Q2xpZW50SGVpZ2h0LFxyXG4gICAgc2V0U2Nyb2xsWSxcclxuICAgIHNldElzQXBwT3BlblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICB9XHJcblxyXG4gIHJlZGlyZWN0VG9VcmwodXJsKSB7XHJcbiAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLWlubmVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy13cmFwcGVyLXRvcFwiPlxyXG4gICAgICAgICAgICAgIDxoMT5Qcml2YWN5IFBvbGljeTwvaDE+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmd3RsLWRlc2MgdXBkYXRlLXRpbWVcIj5cclxuICAgICAgICAgICAgICAgIExhc3QgVXBkYXRlZDogMjAyNC0wNy0wOCAoTW9uKVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXdyYXBwZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy13cmFwcGVyLWNvbnRlbnQtcGFyYWdyYXBoIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsd2NwLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIEludHJvZHVjdGlvblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjJz5cclxuICAgICAgICAgICAgICAgICAgZWItc3VpdGUuY29tIChcIndlLFwiIFwidXMsXCIgb3IgXCJvdXJcIikgaXMgY29tbWl0dGVkIHRvIHByb3RlY3RpbmcgdGhlIHByaXZhY3kgb2Ygb3VyIHVzZXJzIChcInlvdVwiIG9yIFwieW91clwiKS4gVGhpcyBQcml2YWN5IFBvbGljeSBleHBsYWlucyBob3cgd2UgY29sbGVjdCwgdXNlLCBkaXNjbG9zZSwgYW5kIHByb3RlY3QgeW91ciBpbmZvcm1hdGlvbiB3aGVuIHlvdSB2aXNpdCBvdXIgd2Vic2l0ZSAodGhlIDxzcGFuIGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCc+XCJTaXRlXCI8L3NwYW4+KS5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLXdyYXBwZXItY29udGVudC1wYXJhZ3JhcGggYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLXRpdGxlJz5JbmZvcm1hdGlvbiBXZSBDb2xsZWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjJz5cclxuICAgICAgICAgICAgICAgICAgV2UgY29sbGVjdCBpbmZvcm1hdGlvbiB0aGF0IHlvdSBwcm92aWRlIHRvIHVzIGRpcmVjdGx5LCBhcyB3ZWxsIGFzIGluZm9ybWF0aW9uIHRoYXQgaXMgYXV0b21hdGljYWxseSBjb2xsZWN0ZWQgd2hlbiB5b3UgdXNlIHRoZSBTaXRlLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXdyYXBwZXItY29udGVudC1wYXJhZ3JhcGhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgSW5mb3JtYXRpb24gWW91IFByb3ZpZGU6XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MnPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQnPkNvbnRhY3QgSW5mb3JtYXRpb248L3NwYW4+OiBXaGVuIHlvdSBjb250YWN0IHVzLCBzdWJzY3JpYmUgdG8gb3VyIG5ld3NsZXR0ZXIsIG9yIHN1Ym1pdCBhIGZvcm0sIHlvdSBtYXkgcHJvdmlkZSB1cyB3aXRoIHlvdXIgbmFtZSwgZW1haWwgYWRkcmVzcywgcGhvbmUgbnVtYmVyLCBhbmQgb3RoZXIgY29udGFjdCBpbmZvcm1hdGlvbi48YnIvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQnPkFjY291bnQgSW5mb3JtYXRpb248L3NwYW4+OiBJZiB5b3UgY3JlYXRlIGFuIGFjY291bnQgb24gdGhlIFNpdGUsIHlvdSB3aWxsIHByb3ZpZGUgdXMgd2l0aCBjZXJ0YWluIHBlcnNvbmFsIGluZm9ybWF0aW9uLCBzdWNoIGFzIHlvdXIgdXNlcm5hbWUsIHBhc3N3b3JkLCBhbmQgb3RoZXIgYWNjb3VudCBkZXRhaWxzLjxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQnPkNvbnRlbnQgWW91IFN1Ym1pdDwvc3Bhbj46IFlvdSBtYXkgY2hvb3NlIHRvIHN1Ym1pdCBjb250ZW50IHRvIHRoZSBTaXRlLCBzdWNoIGFzIGNvbW1lbnRzLCByZXZpZXdzLCBvciBvdGhlciBtYXRlcmlhbHMuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZGluZy13cmFwcGVyLWNvbnRlbnQtcGFyYWdyYXBoJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLXRpdGxlJz5JbmZvcm1hdGlvbiBXZSBDb2xsZWN0IEF1dG9tYXRpY2FsbHk6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYy1saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjLWxpc3QtaXRlbSc+PHNwYW4gY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkJz5Vc2FnZSBEYXRhPC9zcGFuPjogV2UgY29sbGVjdCBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIHVzZSBvZiB0aGUgU2l0ZSwgc3VjaCBhcyB5b3VyIElQIGFkZHJlc3MsIGJyb3dzZXIgdHlwZSwgb3BlcmF0aW5nIHN5c3RlbSwgcmVmZXJyaW5nIHBhZ2VzLCBwYWdlcyB2aXNpdGVkLCBhbmQgdGhlIGRhdGUgYW5kIHRpbWUgb2YgeW91ciB2aXNpdC48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjLWxpc3QtaXRlbSc+PHNwYW4gY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkJz5EZXZpY2UgSW5mb3JtYXRpb248L3NwYW4+OiBXZSBtYXkgY29sbGVjdCBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIGRldmljZSwgc3VjaCBhcyB5b3VyIGRldmljZSB0eXBlLCB1bmlxdWUgZGV2aWNlIGlkZW50aWZpZXJzLCBhbmQgb3BlcmF0aW5nIHN5c3RlbS48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjLWxpc3QtaXRlbSc+PHNwYW4gY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkJz5Mb2NhdGlvbiBJbmZvcm1hdGlvbjwvc3Bhbj46IFdpdGggeW91ciBjb25zZW50LCB3ZSBtYXkgY29sbGVjdCB5b3VyIGxvY2F0aW9uIGluZm9ybWF0aW9uLCBzdWNoIGFzIHlvdXIgR1BTIGNvb3JkaW5hdGVzLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLXdyYXBwZXItY29udGVudC1wYXJhZ3JhcGgnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtdGl0bGUnPkhvdyBXZSBVc2UgWW91ciBJbmZvcm1hdGlvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYyc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MtbGlzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsd2NwLWRlc2MtbGlzdC1zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgV2UgdXNlIHRoZSBpbmZvcm1hdGlvbiB3ZSBjb2xsZWN0IHRvOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MtbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIFByb3ZpZGUgYW5kIG9wZXJhdGUgdGhlIFNpdGUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYy1saXN0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUmVzcG9uZCB0byB5b3VyIGlucXVpcmllcyBhbmQgcmVxdWVzdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYy1saXN0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGVyc29uYWxpemUgeW91ciBleHBlcmllbmNlIG9uIHRoZSBTaXRlLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MtbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlbmQgeW91IG1hcmtldGluZyBjb21tdW5pY2F0aW9ucywgbmV3c2xldHRlcnMsIGFuZCBvdGhlciBwcm9tb3Rpb25hbCBtYXRlcmlhbHMuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYy1saXN0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQW5hbHl6ZSBhbmQgaW1wcm92ZSB0aGUgU2l0ZSBhbmQgb3VyIHNlcnZpY2VzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MtbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIFByb3RlY3QgdGhlIHNlY3VyaXR5IG9mIHRoZSBTaXRlIGFuZCBvdXIgdXNlcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYy1saXN0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29tcGx5IHdpdGggYXBwbGljYWJsZSBsYXdzIGFuZCByZWd1bGF0aW9ucy5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmRpbmctd3JhcHBlci1jb250ZW50LXBhcmFncmFwaCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC10aXRsZSc+RGlzY2xvc3VyZSBvZiBZb3VyIEluZm9ybWF0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYy1saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjLWxpc3Qtc3VidGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgV2UgbWF5IGRpc2Nsb3NlIHlvdXIgaW5mb3JtYXRpb24gdG86XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYy1saXN0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VydmljZSBwcm92aWRlcnMgd2hvIGFzc2lzdCB1cyBpbiBwcm92aWRpbmcgdGhlIFNpdGUgYW5kIG91ciBzZXJ2aWNlcy5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjLWxpc3QtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUaGlyZC1wYXJ0eSBhZHZlcnRpc2VycyB3aG8gbWF5IHVzZSB5b3VyIGluZm9ybWF0aW9uIHRvIGRlbGl2ZXIgdGFyZ2V0ZWQgYWR2ZXJ0aXNpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYy1saXN0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgT3RoZXIgY29tcGFuaWVzIG9yIGluZGl2aWR1YWxzIGlmIHdlIGJlbGlldmUgZGlzY2xvc3VyZSBpcyBuZWNlc3NhcnkgdG8gY29tcGx5IHdpdGggYXBwbGljYWJsZSBsYXdzLCByZWd1bGF0aW9ucywgb3IgbGVnYWwgcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjLWxpc3QtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPdGhlciBjb21wYW5pZXMgb3IgaW5kaXZpZHVhbHMgaWYgd2UgYmVsaWV2ZSBkaXNjbG9zdXJlIGlzIG5lY2Vzc2FyeSB0byBwcm90ZWN0IHRoZSByaWdodHMsIHByb3BlcnR5LCBvciBzYWZldHkgb2Ygb3Vyc2VsdmVzLCBvdXIgdXNlcnMsIG9yIG90aGVycy5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmRpbmctd3JhcHBlci1jb250ZW50LXBhcmFncmFwaCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC10aXRsZSc+WW91ciBDaG9pY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYy1saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjLWxpc3Qtc3VidGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgWW91IGhhdmUgY2VydGFpbiBjaG9pY2VzIHJlZ2FyZGluZyB5b3VyIGluZm9ybWF0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MtbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCc+T3B0LU91dCBvZiBNYXJrZXRpbmcgQ29tbXVuaWNhdGlvbnM8L3NwYW4+OiBZb3UgY2FuIG9wdCBvdXQgb2YgcmVjZWl2aW5nIG1hcmtldGluZyBjb21tdW5pY2F0aW9ucyBmcm9tIHVzIGJ5IGZvbGxvd2luZyB0aGUgdW5zdWJzY3JpYmUgaW5zdHJ1Y3Rpb25zIHByb3ZpZGVkIGluIHN1Y2ggY29tbXVuaWNhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYy1saXN0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkJz5NYW5hZ2UgQ29va2llczwvc3Bhbj46IFlvdSBjYW4gbWFuYWdlIHlvdXIgY29va2llIHByZWZlcmVuY2VzIHRocm91Z2ggeW91ciBicm93c2VyIHNldHRpbmdzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MtbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCc+QWNjZXNzIGFuZCBVcGRhdGUgWW91ciBJbmZvcm1hdGlvbjwvc3Bhbj46IFlvdSBjYW4gYWNjZXNzIGFuZCB1cGRhdGUgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBieSBjb250YWN0aW5nIHVzIGF0IDxhIGhyZWY9XCJtYWlsdG86ZW5xdWlyeUBlYi1zdWl0ZS5jb21cIj5lbnF1aXJ5QGViLXN1aXRlLmNvbTwvYT4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLXdyYXBwZXItY29udGVudC1wYXJhZ3JhcGgnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtdGl0bGUnPlNlY3VyaXR5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjJz5cclxuICAgICAgICAgICAgICAgICAgV2UgdGFrZSByZWFzb25hYmxlIG1lYXN1cmVzIHRvIHByb3RlY3QgeW91ciBpbmZvcm1hdGlvbiBmcm9tIDxzcGFuIGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCc+dW5hdXRob3JpemVkIGFjY2Vzczwvc3Bhbj4sIDxzcGFuIGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCc+dXNlPC9zcGFuPiwgb3IgPHNwYW4gY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkJz5kaXNjbG9zdXJlPC9zcGFuPi4gSG93ZXZlciwgbm8gd2Vic2l0ZSBvciBvbmxpbmUgc2VydmljZSBjYW4gZ3VhcmFudGVlIGNvbXBsZXRlIHNlY3VyaXR5LlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjJz48c3BhbiBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQnPkNoaWxkcmVuJ3MgUHJpdmFjeTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MnPlRoZSBTaXRlIGlzIG5vdCBpbnRlbmRlZCBmb3IgY2hpbGRyZW4gdW5kZXIgdGhlIGFnZSBvZiAxMy4gV2UgZG8gbm90IGtub3dpbmdseSBjb2xsZWN0IHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW4gdW5kZXIgMTMuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjJz48c3BhbiBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQnPkNoYW5nZXMgdG8gVGhpcyBQcml2YWN5IFBvbGljeTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MnPldlIG1heSB1cGRhdGUgdGhpcyBQcml2YWN5IFBvbGljeSBmcm9tIHRpbWUgdG8gdGltZS4gV2Ugd2lsbCBwb3N0IGFueSBjaGFuZ2VzIG9uIHRoZSBTaXRlLiBZb3VyIGNvbnRpbnVlZCB1c2Ugb2YgdGhlIFNpdGUgYWZ0ZXIgdGhlIHBvc3Rpbmcgb2YgY2hhbmdlcyBjb25zdGl0dXRlcyB5b3VyIGFjY2VwdGFuY2Ugb2YgdGhlIHJldmlzZWQgUHJpdmFjeSBQb2xpY3kuPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLXdyYXBwZXItY29udGVudC1wYXJhZ3JhcGgnPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLXRpdGxlJz5Db250YWN0IFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjJz5cclxuICAgICAgICAgICAgICAgICAgSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBhYm91dCB0aGlzIFByaXZhY3kgUG9saWN5LCBwbGVhc2UgY29udGFjdCB1cyBhdCA8YSBocmVmPVwibWFpbHRvOmVucXVpcnlAZWItc3VpdGUuY29tXCI+ZW5xdWlyeUBlYi1zdWl0ZS5jb208L2E+LlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IGFwcCA9IGNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuYXBwLnJlbmRlcig8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxBcHAgLz5cclxuPC9Qcm92aWRlcj4pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcENvbnRleHQiLCJsYXp5QWN0IiwiY2hlY2tJc0luVmlld3BvcnQiLCJsb2FkRm9udCIsImNvbm5lY3QiLCJzZXRDbGllbnRXaWR0aCIsInNldENsaWVudEhlaWdodCIsInNldFNjcm9sbFkiLCJzZXRJc0FwcE9wZW4iLCJMYW5kaW5nIiwiUHJlbG9hZCIsIlJlZGlyZWN0TG9hZGluZyIsIkxvYWRlckxvZ28iLCJIZWFkZXJNZW51cyIsIkZvb3RlciIsIkdvb2dsZUNvbnNlbnQiLCJIb3ZlckN1cnNvckJveCIsIkFwcCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsIm9wZW5Db250ZW50Iiwic2hvd0hlYWRlciIsImNsb2NrUmVmIiwiY3JlYXRlUmVmIiwiaGFuZGxlU2Nyb2xsQmVoYXZpb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicmVmIiwic3RhdHVzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGxIYW5kbGVyIiwic2Nyb2xsVG9wIiwid2luZG93Iiwic2Nyb2xsWSIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJyZXNpemVIYW5kbGVyIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJkY193aWR0aCIsImRvY3VtZW50RWxlbWVudCIsImRjX2hlaWdodCIsImNvbXBvbmVudERpZE1vdW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldE9wZW5Db250ZW50IiwidGhlbiIsImJvZHkiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJpc0FwcE9wZW4iLCJzY3JvbGxUbyIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJlcnJvckluZm8iLCJjb25zb2xlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwicGFnZWxvYWRpbmciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiaGlkZSIsImFjdGl2ZXBhZ2UiLCJjbGFzc05hbWUiLCJvbk9wZW4iLCJ2IiwibWFwU3RhdGVUb1Byb3BzIiwiaXNQQyIsImNsaWVudFNsaWNlIiwiYmFzZVNsaWNlIiwic2Nyb2xsU2xpY2UiLCJyZWRpcmVjdGxvYWRpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJyZWRpcmVjdFRvVXJsIiwidXJsIiwib3BlbiIsImhyZWYiLCJjcmVhdGVSb290Iiwic3RvcmUiLCJhcHAiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=