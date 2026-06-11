"use strict";
(self["webpackChunkweb_webpack"] = self["webpackChunkweb_webpack"] || []).push([["termsofuse-src_p"],{

/***/ "./src/page/terms-of-use/App.js":
/*!**************************************!*\
  !*** ./src/page/terms-of-use/App.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AppContext */ "./src/context/AppContext.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/index */ "./src/utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_clientSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/clientSlice */ "./src/store/clientSlice.js");
/* harmony import */ var _store_scrollSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/scrollSlice */ "./src/store/scrollSlice.js");
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Landing */ "./src/page/terms-of-use/components/Landing.js");
/* harmony import */ var _common_components_Preload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/common/components/Preload */ "./src/common/components/Preload.js");
/* harmony import */ var _common_components_RedirectLoading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/common/components/RedirectLoading */ "./src/common/components/RedirectLoading.js");
/* harmony import */ var _common_components_LoaderLogo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/common/components/LoaderLogo */ "./src/common/components/LoaderLogo.js");
/* harmony import */ var _common_components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/common/components/Navbar */ "./src/common/components/Navbar.js");
/* harmony import */ var _common_components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/common/components/Footer */ "./src/common/components/Footer.js");
/* harmony import */ var _common_components_tracking_GoogleConsent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/common/components/tracking/GoogleConsent */ "./src/common/components/tracking/GoogleConsent.js");
/* harmony import */ var _common_components_HoverCursorBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/common/components/HoverCursorBox */ "./src/common/components/HoverCursorBox.js");
/* harmony import */ var _scss_page_terms_of_use_index_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/scss/page/terms-of-use/index.scss */ "./src/scss/page/terms-of-use/index.scss");

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
        (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.checkIsInViewport)(ref, status => {
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
      clientWidth,
      clientHeight,
      setClientWidth,
      setClientHeight
    } = this.props;
    const dc_width = document.documentElement.clientWidth;
    clientWidth != dc_width && setClientWidth(dc_width);
    const dc_height = document.documentElement.clientHeight;
    clientHeight != dc_height && setClientHeight(dc_height);
  };
  componentDidMount() {
    this.scrollHandler();
    window.addEventListener('scroll', this.scrollHandler);
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
    (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.loadFont)();
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
    (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.lazyAct)(0.1).then(() => {
      if (status) document.body.classList.add('open');
      this.setState({
        openContent: status
      });
      setIsAppOpen(status);
    });
  }
  componentDidUpdate(prevProps) {
    const {
      isAppOpen,
      pageloading
    } = this.props;
    if (isAppOpen && !prevProps.isAppOpen) {
      window.scrollTo(0, 0);
    }
    if (pageloading != prevProps.pageloading) {
      console.log('pageloading', pageloading);
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_tracking_GoogleConsent__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_HoverCursorBox__WEBPACK_IMPORTED_MODULE_13__["default"], null, this.state.openContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      hide: !this.state.showHeader,
      activepage: "services"
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

/***/ "./src/page/terms-of-use/components/Landing.js":
/*!*****************************************************!*\
  !*** ./src/page/terms-of-use/components/Landing.js ***!
  \*****************************************************/
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Terms of Use"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtl-desc update-time"
    }, "Last Updated: 2024-07-08 (Mon)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "These Terms of Use (\"Terms\") govern your access to and use of the website located at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "eb-suite.com"), " (the \"Site\"), operated by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "eb-suite.com"), " (\"we,\" \"us,\" or \"our\"). By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access or use the Site.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "1. Use of the Site"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-subtitle"
    }, "You may use the Site only for lawful purposes and in accordance with these Terms. You are responsible for all activities that occur under your account. You agree not to:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Use the Site to violate any local, state, national, or international law."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Use the Site to transmit any material that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, hateful, racially, ethnically, or otherwise objectionable."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Use the Site to interfere with or disrupt the Site or servers connected to the Site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Use the Site to attempt to gain unauthorized access to the Site, other accounts, computer systems, or networks connected to the Site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Use the Site to collect or store personal data about other users without their consent."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Use the Site to transmit any unsolicited or unauthorized advertising, promotional materials, \"junk mail,\" \"spam,\" or any other form of solicitation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Use the Site to impersonate any person or entity, or falsely state or misrepresent your affiliation with any person or entity."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc-list-item"
    }, "Use the Site to violate the intellectual property rights of others.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "2. Intellectual Property"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "The content on the Site, including but not limited to text, graphics, logos, images, audio clips, video clips, software, and code (collectively, the \"Content\"), is the property of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "eb-suite.com"), " or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, modify, distribute, transmit, display, perform, publish, license, create derivative works from, or sell any Content without the prior written permission of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "eb-suite.com"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "3. User Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "You are solely responsible for any Content you submit to the Site. You represent and warrant that you own all rights to the Content you submit or that you have obtained all necessary permissions and consents to submit the Content. You further agree not to submit any Content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, hateful, racially, ethnically, or otherwise objectionable.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "4. Disclaimer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "The Site and its Content are provided \"as is\" and without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or any warranties arising from course of dealing or usage of trade. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "eb-suite.com"), " does not warrant that the Site will be uninterrupted or error-free, that defects will be corrected, or that the Site or the server that makes the Site available are free of viruses or other harmful components.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "5. Limitation of Liability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "eb-suite.com"), " will not be liable for any damages arising from your use of the Site, including but not limited to direct, indirect, incidental, consequential, and punitive damages.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "6. Indemnification"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "You agree to indemnify and hold harmless ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "eb-suite.com"), ", its officers, directors, employees, agents, licensors, and suppliers from and against any and all claims, demands, losses, liabilities, costs, and expenses (including attorney's fees) arising out of or relating to your use of the Site, your violation of these Terms, or your violation of any third-party rights.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "7. Termination"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "eb-suite.com"), " may terminate your access to the Site at any time, for any reason, without notice.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "8. Governing Law"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "These Terms will be governed and construed in accordance with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "the laws of Hong Kong"), ", without regard to its conflict of law provisions.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "9. Entire Agreement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "These Terms constitute the entire agreement between you and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "eb-suite.com"), " relating to your use of the Site and supersede all prior or contemporaneous communications and proposals, whether oral or written.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "10. Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "If you have any questions about these Terms, please contact us at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "mailto:enquiry@eb-suite.com"
    }, "enquiry@eb-suite.com"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "11. Severability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "If any provision of these Terms is held to be invalid or unenforceable, such provision will be struck from these Terms and the remaining provisions will remain in full force and effect.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "12. Waiver"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "No waiver of any provision of these Terms will be effective unless in writing and signed by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "eb-suite.com"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "13. Notices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "All notices and other communications hereunder will be in writing and will be deemed to have been duly given when delivered personally, sent by certified or registered mail, return receipt requested, postage prepaid, or sent by reputable overnight courier service, addressed as follows:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "If to eb-suite.com:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "2101, Win Plaza, 9 Sheung Hei Street. H.K"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-weight-bold"
    }, "If to you:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "2101, Win Plaza, 9 Sheung Hei Street. H.K")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "14. Amendments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "eb-suite.com reserves the right to amend these Terms at any time by posting the amended Terms on the Site. Your continued use of the Site after the posting of any amendments constitutes your acceptance of the amended Terms.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-content-paragraph"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-title"
    }, "15. Translations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwcp-desc"
    }, "These Terms may be translated into other languages. However, the English version of these Terms will control in the event of any conflict or inconsistency between the English version and any translation."))))));
  }
}

/***/ }),

/***/ "./src/page/terms-of-use/index.js":
/*!****************************************!*\
  !*** ./src/page/terms-of-use/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/page/terms-of-use/App.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/index */ "./src/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");





const app = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('app'));
app.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _store_index__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/scss/page/terms-of-use/index.scss":
/*!***********************************************!*\
  !*** ./src/scss/page/terms-of-use/index.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL3Rlcm1zb2Z1c2Utc3JjX3AuMWp4dTJxd20uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUMvQjtBQUM4QztBQUN1QjtBQUMvQjtBQUNnQztBQUNyQjtBQUNBO0FBQ047QUFDTztBQUNnQjtBQUNWO0FBQ0g7QUFDTDtBQUN1QjtBQUN2RTtBQUNnRTtBQUNuQjtBQUU3QyxNQUFNa0IsR0FBRyxTQUFTbEIsNENBQWUsQ0FBQztFQUM5Qm9CLFdBQVdBLENBQUNDLEtBQUssRUFBRTtJQUNmLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUc7TUFDVEMsV0FBVyxFQUFFLEtBQUs7TUFDbEJDLFVBQVUsRUFBRTtJQUNoQixDQUFDO0lBQ0QsSUFBSSxDQUFDQyxRQUFRLGdCQUFHekIsNENBQWUsQ0FBQyxDQUFDO0VBQ3JDO0VBRUEyQixvQkFBb0JBLENBQUEsRUFBRztJQUNuQixDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHRCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLElBQUk7TUFDbEksSUFBSUEsR0FBRyxFQUFFO1FBQ0w1QiwrREFBaUIsQ0FBQzRCLEdBQUcsRUFBR0MsTUFBTSxJQUFLO1VBQy9CLElBQUlBLE1BQU0sSUFBSSxDQUFDRCxHQUFHLENBQUNFLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdDSCxHQUFHLENBQUNFLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztVQUMvQixDQUFDLE1BQU0sSUFBSSxDQUFDSCxNQUFNLElBQUlELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDSCxHQUFHLENBQUNFLFNBQVMsQ0FBQ0MsUUFB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YWdlL3Rlcm1zLW9mLXVzZS9BcHAuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS90ZXJtcy1vZi11c2UvY29tcG9uZW50cy9MYW5kaW5nLmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3BhZ2UvdGVybXMtb2YtdXNlL2luZGV4LmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3Njc3MvcGFnZS90ZXJtcy1vZi11c2UvaW5kZXguc2Nzcz9hM2ViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IFdlYkZvbnQgZnJvbSAnd2ViZm9udGxvYWRlcic7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJ0AvY29udGV4dC9BcHBDb250ZXh0JztcclxuaW1wb3J0IHsgbGF6eUFjdCwgY2hlY2tJc0luVmlld3BvcnQsIGxvYWRGb250IH0gZnJvbSAnQC91dGlscy9pbmRleCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldENsaWVudFdpZHRoLCBzZXRDbGllbnRIZWlnaHQgfSBmcm9tICdAL3N0b3JlL2NsaWVudFNsaWNlJztcclxuaW1wb3J0IHsgc2V0U2Nyb2xsWSB9IGZyb20gJ0Avc3RvcmUvc2Nyb2xsU2xpY2UnO1xyXG5pbXBvcnQgeyBzZXRJc0FwcE9wZW4gfSBmcm9tICdAL3N0b3JlL2Jhc2VTbGljZSc7XHJcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vY29tcG9uZW50cy9MYW5kaW5nJztcclxuaW1wb3J0IFByZWxvYWQgZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9QcmVsb2FkJztcclxuaW1wb3J0IFJlZGlyZWN0TG9hZGluZyBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL1JlZGlyZWN0TG9hZGluZyc7XHJcbmltcG9ydCBMb2FkZXJMb2dvIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvTG9hZGVyTG9nbyc7XHJcbmltcG9ydCBIZWFkZXJNZW51cyBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgR29vZ2xlQ29uc2VudCBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL3RyYWNraW5nL0dvb2dsZUNvbnNlbnQnO1xyXG4vLyBpbXBvcnQgKiBhcyBjdXJzb3JlZmZlY3RzIGZyb20gJ2N1cnNvci1lZmZlY3RzJztcclxuaW1wb3J0IEhvdmVyQ3Vyc29yQm94IGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvSG92ZXJDdXJzb3JCb3gnO1xyXG5pbXBvcnQgJ0Avc2Nzcy9wYWdlL3Rlcm1zLW9mLXVzZS9pbmRleC5zY3NzJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBvcGVuQ29udGVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dIZWFkZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xvY2tSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTY3JvbGxCZWhhdmlvcigpIHtcclxuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGUtaW4tdmlldycpLCAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZGluZy13cmFwcGVyLWNvbnRlbnQtcGFyYWdyYXBoJyldLmZvckVhY2gocmVmID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlZikge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tJc0luVmlld3BvcnQocmVmLCAoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyAmJiAhcmVmLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0YXR1cyAmJiByZWYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZi5jbGFzc0xpc3QuY29udGFpbnMoJ2xhbmRpbmctd3JhcHBlci1jb250ZW50LXBhcmFncmFwaCcpKSByZWYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2V0U2Nyb2xsWSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICBpZiAoc2Nyb2xsVG9wIDwgdGhpcy5wcm9wcy5zY3JvbGxZIHx8IHNjcm9sbFRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5zaG93SGVhZGVyICYmIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dIZWFkZXIgJiYgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93SGVhZGVyOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2Nyb2xsWShzY3JvbGxUb3ApO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsQmVoYXZpb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNpemVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCwgc2V0Q2xpZW50V2lkdGgsIHNldENsaWVudEhlaWdodCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBkY193aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICBjbGllbnRXaWR0aCAhPSBkY193aWR0aCAmJiBzZXRDbGllbnRXaWR0aChkY193aWR0aCk7XHJcbiAgICAgICAgY29uc3QgZGNfaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICBjbGllbnRIZWlnaHQgIT0gZGNfaGVpZ2h0ICYmIHNldENsaWVudEhlaWdodChkY19oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5yZXNpemVIYW5kbGVyKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlcik7XHJcbiAgICAgICAgbG9hZEZvbnQoKTtcclxuICAgICAgICAvLyBXZWJGb250LmxvYWQoe1xyXG4gICAgICAgIC8vICAgICBnb29nbGU6IHtcclxuICAgICAgICAvLyAgICAgICAgIGZhbWlsaWVzOiBbJ01vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCw4MDAnLCAnTGV4ZW5kOjMwMCw0MDAsNTAwLDYwMCw3MDAsODAwJ11cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIGlmICghIXRoaXMuY2xvY2tSZWYpIHtcclxuICAgICAgICAvLyAgICAgbmV3IGN1cnNvcmVmZmVjdHMuY2xvY2tDdXJzb3IoeyBlbGVtZW50OiB0aGlzLmNsb2NrUmVmLmN1cnJlbnQgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBzZXRPcGVuQ29udGVudChzdGF0dXMpIHtcclxuICAgICAgICBjb25zdCB7IHNldElzQXBwT3BlbiB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsYXp5QWN0KDAuMSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG9wZW5Db250ZW50OiBzdGF0dXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRJc0FwcE9wZW4oc3RhdHVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7IGlzQXBwT3BlbiwgcGFnZWxvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKGlzQXBwT3BlbiAmJiAhcHJldlByb3BzLmlzQXBwT3Blbikge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWdlbG9hZGluZyAhPSBwcmV2UHJvcHMucGFnZWxvYWRpbmcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhZ2Vsb2FkaW5nJywgcGFnZWxvYWRpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcclxuICAgICAgICAvLyDkvaDlkIzmoLflj6/ku6XlsIbplJnor6/ml6Xlv5fkuIrmiqXnu5nmnI3liqHlmaggIFxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYXVnaHQgYW4gZXJyb3IgaW4gRXJyb3JCb3VuZGFyeVwiLCBlcnJvciwgZXJyb3JJbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlbG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICA8R29vZ2xlQ29uc2VudD48L0dvb2dsZUNvbnNlbnQ+XHJcbiAgICAgICAgICAgICAgICA8SG92ZXJDdXJzb3JCb3g+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuQ29udGVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlck1lbnVzIGhpZGU9eyF0aGlzLnN0YXRlLnNob3dIZWFkZXJ9IGFjdGl2ZXBhZ2U9XCJzZXJ2aWNlc1wiPjwvSGVhZGVyTWVudXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4tdmlldyBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZGluZz48L0xhbmRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLmNsb2NrUmVmfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2Vsb2FkaW5nID8gPFJlZGlyZWN0TG9hZGluZyAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJlbG9hZCBvbk9wZW49e3YgPT4gdGhpcy5zZXRPcGVuQ29udGVudCh2KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyTG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1ByZWxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgPC9Ib3ZlckN1cnNvckJveD5cclxuICAgICAgICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvPik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpc1BDOiBzdGF0ZS5jbGllbnRTbGljZS5pc1BDLFxyXG4gICAgICAgIGlzQXBwT3Blbjogc3RhdGUuYmFzZVNsaWNlLmlzQXBwT3BlbixcclxuICAgICAgICBzY3JvbGxZOiBzdGF0ZS5zY3JvbGxTbGljZS5zY3JvbGxZLFxyXG4gICAgICAgIGNsaWVudFdpZHRoOiBzdGF0ZS5jbGllbnRTbGljZS5jbGllbnRXaWR0aCxcclxuICAgICAgICBjbGllbnRIZWlnaHQ6IHN0YXRlLmNsaWVudFNsaWNlLmNsaWVudEhlaWdodCxcclxuICAgICAgICBwYWdlbG9hZGluZzogc3RhdGUuYmFzZVNsaWNlLnJlZGlyZWN0bG9hZGluZyxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBzZXRDbGllbnRXaWR0aCxcclxuICAgIHNldENsaWVudEhlaWdodCxcclxuICAgIHNldFNjcm9sbFksXHJcbiAgICBzZXRJc0FwcE9wZW5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgfVxyXG5cclxuICByZWRpcmVjdFRvVXJsKHVybCkge1xyXG4gICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZGluZy1pbm5lcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXdyYXBwZXItdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+VGVybXMgb2YgVXNlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnd0bC1kZXNjIHVwZGF0ZS10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICBMYXN0IFVwZGF0ZWQ6IDIwMjQtMDctMDggKE1vbilcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy13cmFwcGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy13cmFwcGVyLWNvbnRlbnQtcGFyYWdyYXBoIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx3Y3AtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICBUaGVzZSBUZXJtcyBvZiBVc2UgKFwiVGVybXNcIikgZ292ZXJuIHlvdXIgYWNjZXNzIHRvIGFuZCB1c2Ugb2YgdGhlIHdlYnNpdGUgbG9jYXRlZCBhdCA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQnPmViLXN1aXRlLmNvbTwvc3Bhbj4gKHRoZSBcIlNpdGVcIiksIG9wZXJhdGVkIGJ5IDxzcGFuIGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCc+ZWItc3VpdGUuY29tPC9zcGFuPiAoXCJ3ZSxcIiBcInVzLFwiIG9yIFwib3VyXCIpLiBCeSBhY2Nlc3Npbmcgb3IgdXNpbmcgdGhlIFNpdGUsIHlvdSBhZ3JlZSB0byBiZSBib3VuZCBieSB0aGVzZSBUZXJtcy4gSWYgeW91IGRpc2FncmVlIHdpdGggYW55IHBhcnQgb2YgdGhlIFRlcm1zLCB5b3UgbWF5IG5vdCBhY2Nlc3Mgb3IgdXNlIHRoZSBTaXRlLlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXdyYXBwZXItY29udGVudC1wYXJhZ3JhcGggYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgMS4gVXNlIG9mIHRoZSBTaXRlXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx3Y3AtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MtbGlzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjLWxpc3Qtc3VidGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgWW91IG1heSB1c2UgdGhlIFNpdGUgb25seSBmb3IgbGF3ZnVsIHB1cnBvc2VzIGFuZCBpbiBhY2NvcmRhbmNlIHdpdGggdGhlc2UgVGVybXMuIFlvdSBhcmUgcmVzcG9uc2libGUgZm9yIGFsbCBhY3Rpdml0aWVzIHRoYXQgb2NjdXIgdW5kZXIgeW91ciBhY2NvdW50LiBZb3UgYWdyZWUgbm90IHRvOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjLWxpc3QtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBVc2UgdGhlIFNpdGUgdG8gdmlvbGF0ZSBhbnkgbG9jYWwsIHN0YXRlLCBuYXRpb25hbCwgb3IgaW50ZXJuYXRpb25hbCBsYXcuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MtbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIFVzZSB0aGUgU2l0ZSB0byB0cmFuc21pdCBhbnkgbWF0ZXJpYWwgdGhhdCBpcyBpbGxlZ2FsLCBoYXJtZnVsLCB0aHJlYXRlbmluZywgYWJ1c2l2ZSwgaGFyYXNzaW5nLCBkZWZhbWF0b3J5LCB2dWxnYXIsIG9ic2NlbmUsIGhhdGVmdWwsIHJhY2lhbGx5LCBldGhuaWNhbGx5LCBvciBvdGhlcndpc2Ugb2JqZWN0aW9uYWJsZS5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYy1saXN0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVXNlIHRoZSBTaXRlIHRvIGludGVyZmVyZSB3aXRoIG9yIGRpc3J1cHQgdGhlIFNpdGUgb3Igc2VydmVycyBjb25uZWN0ZWQgdG8gdGhlIFNpdGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MtbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIFVzZSB0aGUgU2l0ZSB0byBhdHRlbXB0IHRvIGdhaW4gdW5hdXRob3JpemVkIGFjY2VzcyB0byB0aGUgU2l0ZSwgb3RoZXIgYWNjb3VudHMsIGNvbXB1dGVyIHN5c3RlbXMsIG9yIG5ldHdvcmtzIGNvbm5lY3RlZCB0byB0aGUgU2l0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYy1saXN0LWl0ZW0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVXNlIHRoZSBTaXRlIHRvIGNvbGxlY3Qgb3Igc3RvcmUgcGVyc29uYWwgZGF0YSBhYm91dCBvdGhlciB1c2VycyB3aXRob3V0IHRoZWlyIGNvbnNlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MtbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIFVzZSB0aGUgU2l0ZSB0byB0cmFuc21pdCBhbnkgdW5zb2xpY2l0ZWQgb3IgdW5hdXRob3JpemVkIGFkdmVydGlzaW5nLCBwcm9tb3Rpb25hbCBtYXRlcmlhbHMsIFwianVuayBtYWlsLFwiIFwic3BhbSxcIiBvciBhbnkgb3RoZXIgZm9ybSBvZiBzb2xpY2l0YXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLWRlc2MtbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgIFVzZSB0aGUgU2l0ZSB0byBpbXBlcnNvbmF0ZSBhbnkgcGVyc29uIG9yIGVudGl0eSwgb3IgZmFsc2VseSBzdGF0ZSBvciBtaXNyZXByZXNlbnQgeW91ciBhZmZpbGlhdGlvbiB3aXRoIGFueSBwZXJzb24gb3IgZW50aXR5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjLWxpc3QtaXRlbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBVc2UgdGhlIFNpdGUgdG8gdmlvbGF0ZSB0aGUgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0cyBvZiBvdGhlcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy13cmFwcGVyLWNvbnRlbnQtcGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgMi4gSW50ZWxsZWN0dWFsIFByb3BlcnR5XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx3Y3AtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBjb250ZW50IG9uIHRoZSBTaXRlLCBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIHRleHQsIGdyYXBoaWNzLCBsb2dvcywgaW1hZ2VzLCBhdWRpbyBjbGlwcywgdmlkZW8gY2xpcHMsIHNvZnR3YXJlLCBhbmQgY29kZSAoY29sbGVjdGl2ZWx5LCB0aGUgXCJDb250ZW50XCIpLCBpcyB0aGUgcHJvcGVydHkgb2YgPHNwYW4gY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkJz5lYi1zdWl0ZS5jb208L3NwYW4+IG9yIGl0cyBsaWNlbnNvcnMgYW5kIGlzIHByb3RlY3RlZCBieSBjb3B5cmlnaHQsIHRyYWRlbWFyaywgYW5kIG90aGVyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBsYXdzLiBZb3UgbWF5IG5vdCByZXByb2R1Y2UsIG1vZGlmeSwgZGlzdHJpYnV0ZSwgdHJhbnNtaXQsIGRpc3BsYXksIHBlcmZvcm0sIHB1Ymxpc2gsIGxpY2Vuc2UsIGNyZWF0ZSBkZXJpdmF0aXZlIHdvcmtzIGZyb20sIG9yIHNlbGwgYW55IENvbnRlbnQgd2l0aG91dCB0aGUgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uIG9mIDxzcGFuIGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCc+ZWItc3VpdGUuY29tPC9zcGFuPi5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy13cmFwcGVyLWNvbnRlbnQtcGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLXRpdGxlJz4zLiBVc2VyIENvbnRlbnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsd2NwLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICBZb3UgYXJlIHNvbGVseSByZXNwb25zaWJsZSBmb3IgYW55IENvbnRlbnQgeW91IHN1Ym1pdCB0byB0aGUgU2l0ZS4gWW91IHJlcHJlc2VudCBhbmQgd2FycmFudCB0aGF0IHlvdSBvd24gYWxsIHJpZ2h0cyB0byB0aGUgQ29udGVudCB5b3Ugc3VibWl0IG9yIHRoYXQgeW91IGhhdmUgb2J0YWluZWQgYWxsIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucyBhbmQgY29uc2VudHMgdG8gc3VibWl0IHRoZSBDb250ZW50LiBZb3UgZnVydGhlciBhZ3JlZSBub3QgdG8gc3VibWl0IGFueSBDb250ZW50IHRoYXQgaXMgaWxsZWdhbCwgaGFybWZ1bCwgdGhyZWF0ZW5pbmcsIGFidXNpdmUsIGhhcmFzc2luZywgZGVmYW1hdG9yeSwgdnVsZ2FyLCBvYnNjZW5lLCBoYXRlZnVsLCByYWNpYWxseSwgZXRobmljYWxseSwgb3Igb3RoZXJ3aXNlIG9iamVjdGlvbmFibGUuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctd3JhcHBlci1jb250ZW50LXBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC10aXRsZSc+NC4gRGlzY2xhaW1lcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx3Y3AtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZSBTaXRlIGFuZCBpdHMgQ29udGVudCBhcmUgcHJvdmlkZWQgXCJhcyBpc1wiIGFuZCB3aXRob3V0IHdhcnJhbnRpZXMgb2YgYW55IGtpbmQsIGV4cHJlc3Mgb3IgaW1wbGllZCwgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0byB3YXJyYW50aWVzIG9mIG1lcmNoYW50YWJpbGl0eSwgZml0bmVzcyBmb3IgYSBwYXJ0aWN1bGFyIHB1cnBvc2UsIG5vbi1pbmZyaW5nZW1lbnQsIG9yIGFueSB3YXJyYW50aWVzIGFyaXNpbmcgZnJvbSBjb3Vyc2Ugb2YgZGVhbGluZyBvciB1c2FnZSBvZiB0cmFkZS4gPHNwYW4gY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkJz5lYi1zdWl0ZS5jb208L3NwYW4+IGRvZXMgbm90IHdhcnJhbnQgdGhhdCB0aGUgU2l0ZSB3aWxsIGJlIHVuaW50ZXJydXB0ZWQgb3IgZXJyb3ItZnJlZSwgdGhhdCBkZWZlY3RzIHdpbGwgYmUgY29ycmVjdGVkLCBvciB0aGF0IHRoZSBTaXRlIG9yIHRoZSBzZXJ2ZXIgdGhhdCBtYWtlcyB0aGUgU2l0ZSBhdmFpbGFibGUgYXJlIGZyZWUgb2YgdmlydXNlcyBvciBvdGhlciBoYXJtZnVsIGNvbXBvbmVudHMuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctd3JhcHBlci1jb250ZW50LXBhcmFncmFwaFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC10aXRsZSc+NS4gTGltaXRhdGlvbiBvZiBMaWFiaWxpdHk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsd2NwLWRlc2NcIj48c3BhbiBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQnPmViLXN1aXRlLmNvbTwvc3Bhbj4gd2lsbCBub3QgYmUgbGlhYmxlIGZvciBhbnkgZGFtYWdlcyBhcmlzaW5nIGZyb20geW91ciB1c2Ugb2YgdGhlIFNpdGUsIGluY2x1ZGluZyBidXQgbm90IGxpbWl0ZWQgdG8gZGlyZWN0LCBpbmRpcmVjdCwgaW5jaWRlbnRhbCwgY29uc2VxdWVudGlhbCwgYW5kIHB1bml0aXZlIGRhbWFnZXMuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLXdyYXBwZXItY29udGVudC1wYXJhZ3JhcGgnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC10aXRsZSc+Ni4gSW5kZW1uaWZpY2F0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHdjcC1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgWW91IGFncmVlIHRvIGluZGVtbmlmeSBhbmQgaG9sZCBoYXJtbGVzcyA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQnPmViLXN1aXRlLmNvbTwvc3Bhbj4sIGl0cyBvZmZpY2VycywgZGlyZWN0b3JzLCBlbXBsb3llZXMsIGFnZW50cywgbGljZW5zb3JzLCBhbmQgc3VwcGxpZXJzIGZyb20gYW5kIGFnYWluc3QgYW55IGFuZCBhbGwgY2xhaW1zLCBkZW1hbmRzLCBsb3NzZXMsIGxpYWJpbGl0aWVzLCBjb3N0cywgYW5kIGV4cGVuc2VzIChpbmNsdWRpbmcgYXR0b3JuZXkncyBmZWVzKSBhcmlzaW5nIG91dCBvZiBvciByZWxhdGluZyB0byB5b3VyIHVzZSBvZiB0aGUgU2l0ZSwgeW91ciB2aW9sYXRpb24gb2YgdGhlc2UgVGVybXMsIG9yIHlvdXIgdmlvbGF0aW9uIG9mIGFueSB0aGlyZC1wYXJ0eSByaWdodHMuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZGluZy13cmFwcGVyLWNvbnRlbnQtcGFyYWdyYXBoJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtdGl0bGUnPjcuIFRlcm1pbmF0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHdjcC1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkJz5lYi1zdWl0ZS5jb208L3NwYW4+IG1heSB0ZXJtaW5hdGUgeW91ciBhY2Nlc3MgdG8gdGhlIFNpdGUgYXQgYW55IHRpbWUsIGZvciBhbnkgcmVhc29uLCB3aXRob3V0IG5vdGljZS5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLXdyYXBwZXItY29udGVudC1wYXJhZ3JhcGgnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC10aXRsZSc+OC4gR292ZXJuaW5nIExhdzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx3Y3AtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRoZXNlIFRlcm1zIHdpbGwgYmUgZ292ZXJuZWQgYW5kIGNvbnN0cnVlZCBpbiBhY2NvcmRhbmNlIHdpdGggPHNwYW4gY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkJz50aGUgbGF3cyBvZiBIb25nIEtvbmc8L3NwYW4+LCB3aXRob3V0IHJlZ2FyZCB0byBpdHMgY29uZmxpY3Qgb2YgbGF3IHByb3Zpc2lvbnMuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZGluZy13cmFwcGVyLWNvbnRlbnQtcGFyYWdyYXBoJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtdGl0bGUnPjkuIEVudGlyZSBBZ3JlZW1lbnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsd2NwLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGVzZSBUZXJtcyBjb25zdGl0dXRlIHRoZSBlbnRpcmUgYWdyZWVtZW50IGJldHdlZW4geW91IGFuZCA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQnPmViLXN1aXRlLmNvbTwvc3Bhbj4gcmVsYXRpbmcgdG8geW91ciB1c2Ugb2YgdGhlIFNpdGUgYW5kIHN1cGVyc2VkZSBhbGwgcHJpb3Igb3IgY29udGVtcG9yYW5lb3VzIGNvbW11bmljYXRpb25zIGFuZCBwcm9wb3NhbHMsIHdoZXRoZXIgb3JhbCBvciB3cml0dGVuLlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmRpbmctd3JhcHBlci1jb250ZW50LXBhcmFncmFwaCc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLXRpdGxlJz4xMC4gQ29udGFjdCBVczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx3Y3AtZGVzY1wiPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgYWJvdXQgdGhlc2UgVGVybXMsIHBsZWFzZSBjb250YWN0IHVzIGF0IDxhIGhyZWY9XCJtYWlsdG86ZW5xdWlyeUBlYi1zdWl0ZS5jb21cIj5lbnF1aXJ5QGViLXN1aXRlLmNvbTwvYT4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLXdyYXBwZXItY29udGVudC1wYXJhZ3JhcGgnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtdGl0bGUnPjExLiBTZXZlcmFiaWxpdHk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsd2NwLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZiBhbnkgcHJvdmlzaW9uIG9mIHRoZXNlIFRlcm1zIGlzIGhlbGQgdG8gYmUgaW52YWxpZCBvciB1bmVuZm9yY2VhYmxlLCBzdWNoIHByb3Zpc2lvbiB3aWxsIGJlIHN0cnVjayBmcm9tIHRoZXNlIFRlcm1zIGFuZCB0aGUgcmVtYWluaW5nIHByb3Zpc2lvbnMgd2lsbCByZW1haW4gaW4gZnVsbCBmb3JjZSBhbmQgZWZmZWN0LlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmRpbmctd3JhcHBlci1jb250ZW50LXBhcmFncmFwaCc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsd2NwLXRpdGxlJz4xMi4gV2FpdmVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHdjcC1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTm8gd2FpdmVyIG9mIGFueSBwcm92aXNpb24gb2YgdGhlc2UgVGVybXMgd2lsbCBiZSBlZmZlY3RpdmUgdW5sZXNzIGluIHdyaXRpbmcgYW5kIHNpZ25lZCBieSA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQnPmViLXN1aXRlLmNvbTwvc3Bhbj4uXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZGluZy13cmFwcGVyLWNvbnRlbnQtcGFyYWdyYXBoJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtdGl0bGUnPjEzLiBOb3RpY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHdjcC1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWxsIG5vdGljZXMgYW5kIG90aGVyIGNvbW11bmljYXRpb25zIGhlcmV1bmRlciB3aWxsIGJlIGluIHdyaXRpbmcgYW5kIHdpbGwgYmUgZGVlbWVkIHRvIGhhdmUgYmVlbiBkdWx5IGdpdmVuIHdoZW4gZGVsaXZlcmVkIHBlcnNvbmFsbHksIHNlbnQgYnkgY2VydGlmaWVkIG9yIHJlZ2lzdGVyZWQgbWFpbCwgcmV0dXJuIHJlY2VpcHQgcmVxdWVzdGVkLCBwb3N0YWdlIHByZXBhaWQsIG9yIHNlbnQgYnkgcmVwdXRhYmxlIG92ZXJuaWdodCBjb3VyaWVyIHNlcnZpY2UsIGFkZHJlc3NlZCBhcyBmb2xsb3dzOlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtZGVzYyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkJz5JZiB0byBlYi1zdWl0ZS5jb206PC9zcGFuPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDIxMDEsIFdpbiBQbGF6YSwgOSBTaGV1bmcgSGVpIFN0cmVldC4gSC5LXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC1kZXNjJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQnPklmIHRvIHlvdTo8L3NwYW4+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgMjEwMSwgV2luIFBsYXphLCA5IFNoZXVuZyBIZWkgU3RyZWV0LiBILktcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLXdyYXBwZXItY29udGVudC1wYXJhZ3JhcGgnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHdjcC10aXRsZSc+MTQuIEFtZW5kbWVudHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsd2NwLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICBlYi1zdWl0ZS5jb20gcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvIGFtZW5kIHRoZXNlIFRlcm1zIGF0IGFueSB0aW1lIGJ5IHBvc3RpbmcgdGhlIGFtZW5kZWQgVGVybXMgb24gdGhlIFNpdGUuIFlvdXIgY29udGludWVkIHVzZSBvZiB0aGUgU2l0ZSBhZnRlciB0aGUgcG9zdGluZyBvZiBhbnkgYW1lbmRtZW50cyBjb25zdGl0dXRlcyB5b3VyIGFjY2VwdGFuY2Ugb2YgdGhlIGFtZW5kZWQgVGVybXMuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZGluZy13cmFwcGVyLWNvbnRlbnQtcGFyYWdyYXBoJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x3Y3AtdGl0bGUnPjE1LiBUcmFuc2xhdGlvbnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsd2NwLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICBUaGVzZSBUZXJtcyBtYXkgYmUgdHJhbnNsYXRlZCBpbnRvIG90aGVyIGxhbmd1YWdlcy4gSG93ZXZlciwgdGhlIEVuZ2xpc2ggdmVyc2lvbiBvZiB0aGVzZSBUZXJtcyB3aWxsIGNvbnRyb2wgaW4gdGhlIGV2ZW50IG9mIGFueSBjb25mbGljdCBvciBpbmNvbnNpc3RlbmN5IGJldHdlZW4gdGhlIEVuZ2xpc2ggdmVyc2lvbiBhbmQgYW55IHRyYW5zbGF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20ncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZS9pbmRleCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG5hcHAucmVuZGVyKDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPEFwcCAvPlxyXG48L1Byb3ZpZGVyPik7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQ29udGV4dCIsImxhenlBY3QiLCJjaGVja0lzSW5WaWV3cG9ydCIsImxvYWRGb250IiwiY29ubmVjdCIsInNldENsaWVudFdpZHRoIiwic2V0Q2xpZW50SGVpZ2h0Iiwic2V0U2Nyb2xsWSIsInNldElzQXBwT3BlbiIsIkxhbmRpbmciLCJQcmVsb2FkIiwiUmVkaXJlY3RMb2FkaW5nIiwiTG9hZGVyTG9nbyIsIkhlYWRlck1lbnVzIiwiRm9vdGVyIiwiR29vZ2xlQ29uc2VudCIsIkhvdmVyQ3Vyc29yQm94IiwiQXBwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwib3BlbkNvbnRlbnQiLCJzaG93SGVhZGVyIiwiY2xvY2tSZWYiLCJjcmVhdGVSZWYiLCJoYW5kbGVTY3JvbGxCZWhhdmlvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyZWYiLCJzdGF0dXMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSIsInNjcm9sbEhhbmRsZXIiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJzZXRTdGF0ZSIsInJlc2l6ZUhhbmRsZXIiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImRjX3dpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiZGNfaGVpZ2h0IiwiY29tcG9uZW50RGlkTW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0T3BlbkNvbnRlbnQiLCJ0aGVuIiwiYm9keSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImlzQXBwT3BlbiIsInBhZ2Vsb2FkaW5nIiwic2Nyb2xsVG8iLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJlcnJvciIsImVycm9ySW5mbyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwidmFsdWUiLCJoaWRlIiwiYWN0aXZlcGFnZSIsImNsYXNzTmFtZSIsIm9uT3BlbiIsInYiLCJtYXBTdGF0ZVRvUHJvcHMiLCJpc1BDIiwiY2xpZW50U2xpY2UiLCJiYXNlU2xpY2UiLCJzY3JvbGxTbGljZSIsInJlZGlyZWN0bG9hZGluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInJlZGlyZWN0VG9VcmwiLCJ1cmwiLCJvcGVuIiwiaHJlZiIsImNyZWF0ZVJvb3QiLCJzdG9yZSIsImFwcCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==