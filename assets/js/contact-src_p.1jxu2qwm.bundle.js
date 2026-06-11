"use strict";
(self["webpackChunkweb_webpack"] = self["webpackChunkweb_webpack"] || []).push([["contact-src_p"],{

/***/ "./src/page/contact/App.js":
/*!*********************************!*\
  !*** ./src/page/contact/App.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AppContext */ "./src/context/AppContext.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/index */ "./src/utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_clientSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/clientSlice */ "./src/store/clientSlice.js");
/* harmony import */ var _store_scrollSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/scrollSlice */ "./src/store/scrollSlice.js");
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Landing */ "./src/page/contact/components/Landing.js");
/* harmony import */ var _common_components_Preload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/common/components/Preload */ "./src/common/components/Preload.js");
/* harmony import */ var _common_components_RedirectLoading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/common/components/RedirectLoading */ "./src/common/components/RedirectLoading.js");
/* harmony import */ var _common_components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/common/components/Navbar */ "./src/common/components/Navbar.js");
/* harmony import */ var _common_components_tracking_GoogleConsent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/common/components/tracking/GoogleConsent */ "./src/common/components/tracking/GoogleConsent.js");
/* harmony import */ var _scss_page_contact_index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/scss/page/contact/index.scss */ "./src/scss/page/contact/index.scss");
/* harmony import */ var _common_components_HoverCursorBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/components/HoverCursorBox */ "./src/common/components/HoverCursorBox.js");

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
    [...document.querySelectorAll('.animate-in-view')].forEach(ref => {
      if (ref) {
        (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.checkIsInViewport)(ref, status => {
          if (status && !ref.classList.contains('active')) {
            ref.classList.add('active');
          } else if (!status && ref.classList.contains('active')) {
            ref.classList.remove('active');
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
    this.handleScrollBehavior();
  };
  componentDidMount() {
    this.scrollHandler();
    this.resizeHandler();
    window.addEventListener('scroll', this.scrollHandler);
    window.addEventListener('resize', this.resizeHandler);
    (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.loadFont)();
    if (window.gtag) {
      gtag('event', 'conversion', {
        'send_to': 'AW-1010348604/T-N1CL2F6sEZELzk4uED'
      });
    }
    // WebFont.load({
    //     google: {
    //         // families: ['Open Sans:300,400,600,700']
    //         families: ['Montserrat:300,400,500,600,700,800', 'Lexend:300,400,500,600,700,800']
    //     }
    // });
    // if (!!this.clockRef) {
    //     new cursoreffects.clockCursor({ element: this.clockRef.current })
    // }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('resize', this.resizeHandler);
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
      // console.log('pageloading', pageloading);
    }
  }
  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器  
    console.error("Caught an error in ErrorBoundary", error, errorInfo);
  }
  render() {
    const {
      pageloading
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
      value: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_tracking_GoogleConsent__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_HoverCursorBox__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      itemscope: true,
      itemtype: "http://schema.org/Organization"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      itemprop: "name"
    }, "EB Suite Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      itemprop: "address",
      itemscope: true,
      itemtype: "http://schema.org/PostalAddress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      itemprop: "streetAddress"
    }, "2101, Win Plaza, 9 Sheung Hei Street"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      itemprop: "addressRegion"
    }, "KLN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      itemprop: "postalCode"
    }, "852000"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      itemprop: "addressCountry"
    }, "HK")))), this.state.openContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      hide: !this.state.showHeader,
      activepage: "contact"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "contact-page"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Landing__WEBPACK_IMPORTED_MODULE_6__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: this.clockRef
    }), pageloading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_RedirectLoading__WEBPACK_IMPORTED_MODULE_8__["default"], null) : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Preload__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onOpen: v => this.setOpenContent(v)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    })))));
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_13__.connect)(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/page/contact/components/Landing.js":
/*!************************************************!*\
  !*** ./src/page/contact/components/Landing.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _common_components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/components/Image */ "./src/common/components/Image.js");



class Landing extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  redirectToUrl(url) {
    window.open(url, '_blank');
  }
  render() {
    const {
      isPC
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-top-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Let's Talk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtl-desc"
    }, "We'd love to learn more about you and what we can design and build together."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtl-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtl-info-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtl-info-item-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fwtl-info-item-title"
    }, "Become a Client"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fiit-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "effect-underline-move-hover",
      href: "mailto:info@eb-suite.com",
      onClick: e => {
        e.preventDefault();
        this.redirectToUrl("mailto:info@eb-suite.com");
      }
    }, "Info@eb-suite.com")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtl-info-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtl-info-item-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "fwtl-info-item-title"
    }, "Become a Partner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fiit-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "effect-underline-move-hover",
      href: "mailto:partner@eb-suite.com",
      onClick: e => {
        e.preventDefault();
        this.redirectToUrl("mailto:partner@eb-suite.com");
      }
    }, "Partner@eb-suite.com"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtl-info",
      style: {
        paddingTop: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtl-info-item-box",
      style: {
        flexBasis: '100%',
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
      src: "https://storage.googleapis.com/maps-solutions-pr0eol8mr1/locator-plus/js3r/locator-plus.html",
      width: "100%",
      height: "100%",
      style: {
        border: 0,
        minHeight: '300px',
        aspectRatio: isPC ? '16/9' : '3/5'
      },
      loading: "lazy"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-top-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtr-links"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
      src: "/assets/img/page/contact/cover.jpg"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-wrapper-bottom-contact"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwbc-phone"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "effect-underline-move-hover",
      href: "tel:852-3611-0949",
      target: "_blank"
    }, "3611-0949")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwbc-address"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "effect-underline-move-hover",
      href: "https://www.google.com.hk/maps/place/%E6%96%B0%E8%92%B2%E5%B4%97%E9%9B%99%E5%96%9C%E8%A1%979%E8%99%9F%E5%8C%AF%E9%81%94%E5%95%86%E6%A5%AD%E4%B8%AD%E5%BF%83/@22.3378804,114.1952828,17z/data=!3m1!4b1!4m6!3m5!1s0x340406d0a990ed91:0x943c05253c5637f8!8m2!3d22.3378755!4d114.1978577!16s%2Fg%2F12hq4w_d8?hl=zh-TW&entry=ttu",
      target: "_blank"
    }, "2101, Win Plaza, 9 Sheung Hei Street. H.K."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lwbc-address-additional"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "list-unstyled"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "effect-underline-move-hover",
      onClick: () => this.redirectToUrl("/privacy-policy")
    }, "Privacy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "effect-underline-move-hover",
      onClick: () => this.redirectToUrl("/terms-of-use")
    }, "Terms")))))))));
  }
}
const mapStateToProps = state => {
  return {
    isPC: state.clientSlice.isPC
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(Landing));

/***/ }),

/***/ "./src/page/contact/index.js":
/*!***********************************!*\
  !*** ./src/page/contact/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/page/contact/App.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/index */ "./src/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");





const app = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('app'));
app.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _store_index__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/scss/page/contact/index.scss":
/*!******************************************!*\
  !*** ./src/scss/page/contact/index.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2NvbnRhY3Qtc3JjX3AuMWp4dTJxd20uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDL0I7QUFDOEM7QUFDdUI7QUFDL0I7QUFDZ0M7QUFDckI7QUFDQTtBQUNOO0FBQ087QUFDZ0I7QUFDYjtBQUNrQjtBQUN2RTtBQUN3QztBQUM0QjtBQUVwRSxNQUFNZ0IsR0FBRyxTQUFTaEIsNENBQWUsQ0FBQztFQUM5QmtCLFdBQVdBLENBQUNDLEtBQUssRUFBRTtJQUNmLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUc7TUFDVEMsV0FBVyxFQUFFLEtBQUs7TUFDbEJDLFVBQVUsRUFBRTtJQUNoQixDQUFDO0lBQ0QsSUFBSSxDQUFDQyxRQUFRLGdCQUFHdkIsNENBQWUsQ0FBQyxDQUFDO0VBQ3JDO0VBRUF5QixvQkFBb0JBLENBQUEsRUFBSTtJQUNwQixDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsSUFBSTtNQUM5RCxJQUFJQSxHQUFHLEVBQUU7UUFDTDFCLCtEQUFpQixDQUFDMEIsR0FBRyxFQUFHQyxNQUFNLElBQUs7VUFDL0IsSUFBSUEsTUFBTSxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0NILEdBQUcsQ0FBQ0UsU0FBUyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDO1VBQy9CLENBQUMsTUFBTSxJQUFJLENBQUNILE1BQU0sSUFBSUQsR0FBRyxDQUFDRSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwREgsR0FBRyxDQUFDRSxTQUFTLENBQUNHLE1BQU0sQ0FBQyxRQUFRLENBQUM7VUFDbEM7UUFDSixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOO0VBRUFDLGFB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QUFBLEtBQU0sSUFBSSxDQUFDSixhQUFhLENBQUMsaUJBQWlCO0lBQUUsR0FBQyxTQUU5RixDQUFDLGVBQ0x2RiwwREFBQTtNQUFJNEUsU0FBUyxFQUFDLDZCQUE2QjtNQUFDZSxPQUFPLEVBQUVBLENBQUEsS0FBTSxJQUFJLENBQUNKLGFBQWEsQ0FBQyxlQUFlO0lBQUUsR0FBQyxPQUU1RixDQUNGLENBQ0QsQ0FDRixDQUNGLENBQ0YsQ0FDRixDQUNKLENBQ0YsQ0FBQztFQUVWO0FBQ0Y7QUFFQSxNQUFNUixlQUFlLEdBQUkzRCxLQUFLLElBQUs7RUFDakMsT0FBTztJQUNMNEQsSUFBSSxFQUFFNUQsS0FBSyxDQUFDNkQsV0FBVyxDQUFDRDtFQUMxQixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlM0Usb0RBQU8sQ0FBQzBFLGVBQWUsQ0FBQyxDQUFDckUsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdHbEI7QUFDZ0I7QUFDdEI7QUFDVTtBQUNLO0FBRXZDLE1BQU1nRyxHQUFHLEdBQUdGLDREQUFVLENBQUM5RSxRQUFRLENBQUNpRixjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdERELEdBQUcsQ0FBQzFDLE1BQU0sY0FBQ2hFLGdEQUFBLENBQUNtRSxpREFBUTtFQUFDc0MsS0FBSyxFQUFFQSxvREFBS0E7QUFBQyxnQkFDOUJ6RyxnREFBQSxDQUFDZ0IsNENBQUcsTUFBRSxDQUNBLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNUWiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3BhZ2UvY29udGFjdC9BcHAuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS9jb250YWN0L2NvbXBvbmVudHMvTGFuZGluZy5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9wYWdlL2NvbnRhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvc2Nzcy9wYWdlL2NvbnRhY3QvaW5kZXguc2Nzcz9kYTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IFdlYkZvbnQgZnJvbSAnd2ViZm9udGxvYWRlcic7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJ0AvY29udGV4dC9BcHBDb250ZXh0JztcclxuaW1wb3J0IHsgbGF6eUFjdCwgY2hlY2tJc0luVmlld3BvcnQsIGxvYWRGb250IH0gZnJvbSAnQC91dGlscy9pbmRleCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldENsaWVudFdpZHRoLCBzZXRDbGllbnRIZWlnaHQgfSBmcm9tICdAL3N0b3JlL2NsaWVudFNsaWNlJztcclxuaW1wb3J0IHsgc2V0U2Nyb2xsWSB9IGZyb20gJ0Avc3RvcmUvc2Nyb2xsU2xpY2UnO1xyXG5pbXBvcnQgeyBzZXRJc0FwcE9wZW4gfSBmcm9tICdAL3N0b3JlL2Jhc2VTbGljZSc7XHJcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vY29tcG9uZW50cy9MYW5kaW5nJztcclxuaW1wb3J0IFByZWxvYWQgZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9QcmVsb2FkJztcclxuaW1wb3J0IFJlZGlyZWN0TG9hZGluZyBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL1JlZGlyZWN0TG9hZGluZyc7XHJcbmltcG9ydCBIZWFkZXJNZW51cyBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBHb29nbGVDb25zZW50IGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvdHJhY2tpbmcvR29vZ2xlQ29uc2VudCc7XHJcbi8vIGltcG9ydCAqIGFzIGN1cnNvcmVmZmVjdHMgZnJvbSAnY3Vyc29yLWVmZmVjdHMnO1xyXG5pbXBvcnQgJ0Avc2Nzcy9wYWdlL2NvbnRhY3QvaW5kZXguc2Nzcyc7XHJcbmltcG9ydCBIb3ZlckN1cnNvckJveCBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50cy9Ib3ZlckN1cnNvckJveCc7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3BlbkNvbnRlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93SGVhZGVyOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsb2NrUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2Nyb2xsQmVoYXZpb3IgKCkge1xyXG4gICAgICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0ZS1pbi12aWV3JyldLmZvckVhY2gocmVmID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlZikge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tJc0luVmlld3BvcnQocmVmLCAoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyAmJiAhcmVmLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0YXR1cyAmJiByZWYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2V0U2Nyb2xsWSB9ID0gdGhpcy5wcm9wczsgXHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA8IHRoaXMucHJvcHMuc2Nyb2xsWSB8fCBzY3JvbGxUb3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgIXRoaXMuc3RhdGUuc2hvd0hlYWRlciAmJiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNob3dIZWFkZXI6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93SGVhZGVyICYmIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlcjogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNjcm9sbFkoc2Nyb2xsVG9wKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbEJlaGF2aW9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQsIHNldENsaWVudFdpZHRoLCBzZXRDbGllbnRIZWlnaHQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZGNfd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY2xpZW50V2lkdGggIT0gZGNfd2lkdGggJiYgc2V0Q2xpZW50V2lkdGgoZGNfd2lkdGgpO1xyXG4gICAgICAgIGNvbnN0IGRjX2hlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgY2xpZW50SGVpZ2h0ICE9IGRjX2hlaWdodCAmJiBzZXRDbGllbnRIZWlnaHQoZGNfaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbEJlaGF2aW9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZXNpemVIYW5kbGVyKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlcik7XHJcbiAgICAgICAgbG9hZEZvbnQoKTtcclxuICAgICAgICBpZiAod2luZG93Lmd0YWcpIHtcclxuICAgICAgICAgICAgZ3RhZygnZXZlbnQnLCAnY29udmVyc2lvbicsIHsnc2VuZF90byc6ICdBVy0xMDEwMzQ4NjA0L1QtTjFDTDJGNnNFWkVMems0dUVEJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gV2ViRm9udC5sb2FkKHtcclxuICAgICAgICAvLyAgICAgZ29vZ2xlOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBmYW1pbGllczogWydPcGVuIFNhbnM6MzAwLDQwMCw2MDAsNzAwJ11cclxuICAgICAgICAvLyAgICAgICAgIGZhbWlsaWVzOiBbJ01vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCw4MDAnLCAnTGV4ZW5kOjMwMCw0MDAsNTAwLDYwMCw3MDAsODAwJ11cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIGlmICghIXRoaXMuY2xvY2tSZWYpIHtcclxuICAgICAgICAvLyAgICAgbmV3IGN1cnNvcmVmZmVjdHMuY2xvY2tDdXJzb3IoeyBlbGVtZW50OiB0aGlzLmNsb2NrUmVmLmN1cnJlbnQgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3BlbkNvbnRlbnQoc3RhdHVzKSB7XHJcbiAgICAgICAgY29uc3QgeyBzZXRJc0FwcE9wZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGF6eUFjdCgwLjEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGVuQ29udGVudDogc3RhdHVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0SXNBcHBPcGVuKHN0YXR1cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgaXNBcHBPcGVuLCBwYWdlbG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoaXNBcHBPcGVuICYmICFwcmV2UHJvcHMuaXNBcHBPcGVuKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhZ2Vsb2FkaW5nICE9IHByZXZQcm9wcy5wYWdlbG9hZGluZykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncGFnZWxvYWRpbmcnLCBwYWdlbG9hZGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcclxuICAgICAgICAvLyDkvaDlkIzmoLflj6/ku6XlsIbplJnor6/ml6Xlv5fkuIrmiqXnu5nmnI3liqHlmaggIFxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYXVnaHQgYW4gZXJyb3IgaW4gRXJyb3JCb3VuZGFyeVwiLCBlcnJvciwgZXJyb3JJbmZvKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZWxvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e319PlxyXG4gICAgICAgICAgICAgICAgPEdvb2dsZUNvbnNlbnQ+PC9Hb29nbGVDb25zZW50PlxyXG4gICAgICAgICAgICAgICAgPEhvdmVyQ3Vyc29yQm94PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpdGVtc2NvcGUgaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9Pcmdhbml6YXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaXRlbXByb3A9XCJuYW1lXCI+RUIgU3VpdGUgTG9jYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaXRlbXByb3A9XCJhZGRyZXNzXCIgaXRlbXNjb3BlIGl0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvUG9zdGFsQWRkcmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaXRlbXByb3A9XCJzdHJlZXRBZGRyZXNzXCI+MjEwMSwgV2luIFBsYXphLCA5IFNoZXVuZyBIZWkgU3RyZWV0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaXRlbXByb3A9XCJhZGRyZXNzUmVnaW9uXCI+S0xOPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaXRlbXByb3A9XCJwb3N0YWxDb2RlXCI+ODUyMDAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaXRlbXByb3A9XCJhZGRyZXNzQ291bnRyeVwiPkhLPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3BlbkNvbnRlbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJNZW51cyBoaWRlPXshdGhpcy5zdGF0ZS5zaG93SGVhZGVyfSBhY3RpdmVwYWdlPVwiY29udGFjdFwiPjwvSGVhZGVyTWVudXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4tdmlldyBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZGluZz48L0xhbmRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLmNsb2NrUmVmfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2Vsb2FkaW5nID8gPFJlZGlyZWN0TG9hZGluZyAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8PjxQcmVsb2FkIG9uT3Blbj17diA9PiB0aGlzLnNldE9wZW5Db250ZW50KHYpfT5cclxuICAgICAgICAgICAgICAgICAgICA8L1ByZWxvYWQ+PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+PC8+fVxyXG4gICAgICAgICAgICAgICAgPC9Ib3ZlckN1cnNvckJveD5cclxuICAgICAgICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvPik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpc1BDOiBzdGF0ZS5jbGllbnRTbGljZS5pc1BDLFxyXG4gICAgICAgIGlzQXBwT3Blbjogc3RhdGUuYmFzZVNsaWNlLmlzQXBwT3BlbixcclxuICAgICAgICBzY3JvbGxZOiBzdGF0ZS5zY3JvbGxTbGljZS5zY3JvbGxZLFxyXG4gICAgICAgIGNsaWVudFdpZHRoOiBzdGF0ZS5jbGllbnRTbGljZS5jbGllbnRXaWR0aCxcclxuICAgICAgICBjbGllbnRIZWlnaHQ6IHN0YXRlLmNsaWVudFNsaWNlLmNsaWVudEhlaWdodCxcclxuICAgICAgICBwYWdlbG9hZGluZzogc3RhdGUuYmFzZVNsaWNlLnJlZGlyZWN0bG9hZGluZyxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBzZXRDbGllbnRXaWR0aCxcclxuICAgIHNldENsaWVudEhlaWdodCxcclxuICAgIHNldFNjcm9sbFksXHJcbiAgICBzZXRJc0FwcE9wZW5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvSW1hZ2UnO1xyXG5cclxuY2xhc3MgTGFuZGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICB9XHJcblxyXG4gIHJlZGlyZWN0VG9VcmwodXJsKSB7XHJcbiAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXNQQyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLWlubmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctd3JhcHBlci10b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy13cmFwcGVyLXRvcC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT5MZXQncyBUYWxrPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmd3RsLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICBXZSdkIGxvdmUgdG8gbGVhcm4gbW9yZSBhYm91dCB5b3UgYW5kIHdoYXQgd2UgY2FuIGRlc2lnbiBhbmQgYnVpbGQgdG9nZXRoZXIuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ3dGwtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnd0bC1pbmZvLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnd0bC1pbmZvLWl0ZW0tYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3dGwtaW5mby1pdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQmVjb21lIGEgQ2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWl0LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZWZmZWN0LXVuZGVybGluZS1tb3ZlLWhvdmVyXCIgaHJlZj1cIm1haWx0bzppbmZvQGViLXN1aXRlLmNvbVwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9VcmwoXCJtYWlsdG86aW5mb0BlYi1zdWl0ZS5jb21cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+SW5mb0BlYi1zdWl0ZS5jb208L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmd3RsLWluZm8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmd3RsLWluZm8taXRlbS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnd0bC1pbmZvLWl0ZW0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBCZWNvbWUgYSBQYXJ0bmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWl0LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZWZmZWN0LXVuZGVybGluZS1tb3ZlLWhvdmVyXCIgaHJlZj1cIm1haWx0bzpwYXJ0bmVyQGViLXN1aXRlLmNvbVwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9VcmwoXCJtYWlsdG86cGFydG5lckBlYi1zdWl0ZS5jb21cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5QYXJ0bmVyQGViLXN1aXRlLmNvbTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmd3RsLWluZm8nIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ3dGwtaW5mby1pdGVtLWJveFwiIHN0eWxlPXt7IGZsZXhCYXNpczogJzEwMCUnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL21hcHMtc29sdXRpb25zLXByMGVvbDhtcjEvbG9jYXRvci1wbHVzLzF5b3UvbG9jYXRvci1wbHVzLmh0bWxcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZnJhbWVib3JkZXI9XCIwXCIgc3R5bGU9e3sgYm9yZGVyOiAwLCBtaW5IZWlnaHQ6ICczMDBweCcsIGFzcGVjdFJhdGlvOiBpc1BDID8gJzE2LzknIDogJzMvNScgfX0gYXJpYS1oaWRkZW49XCJmYWxzZVwiIHRhYmluZGV4PVwiMFwiPjwvaWZyYW1lPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGlmcmFtZSBzcmM9XCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbWFwcy1zb2x1dGlvbnMtcHIwZW9sOG1yMS9sb2NhdG9yLXBsdXMvc25tZS9sb2NhdG9yLXBsdXMuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiIHN0eWxlPXt7IGJvcmRlcjogMCwgbWluSGVpZ2h0OiAnMzAwcHgnLCBhc3BlY3RSYXRpbzogaXNQQyA/ICcxNi85JyA6ICczLzUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL21hcHMtc29sdXRpb25zLXByMGVvbDhtcjEvbG9jYXRvci1wbHVzL2pzM3IvbG9jYXRvci1wbHVzLmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAwLCBtaW5IZWlnaHQ6ICczMDBweCcsIGFzcGVjdFJhdGlvOiBpc1BDID8gJzE2LzknIDogJzMvNScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXdyYXBwZXItdG9wLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnd0ci1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL2ltZy9wYWdlL2NvbnRhY3QvY292ZXIuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy13cmFwcGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXdyYXBwZXItYm90dG9tLWNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsd2JjLXBob25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZWZmZWN0LXVuZGVybGluZS1tb3ZlLWhvdmVyXCIgaHJlZj1cInRlbDo4NTItMzYxMS0wOTQ5XCIgdGFyZ2V0PSdfYmxhbmsnPjM2MTEtMDk0OTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHdiYy1hZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZWZmZWN0LXVuZGVybGluZS1tb3ZlLWhvdmVyXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20uaGsvbWFwcy9wbGFjZS8lRTYlOTYlQjAlRTglOTIlQjIlRTUlQjQlOTclRTklOUIlOTklRTUlOTYlOUMlRTglQTElOTc5JUU4JTk5JTlGJUU1JThDJUFGJUU5JTgxJTk0JUU1JTk1JTg2JUU2JUE1JUFEJUU0JUI4JUFEJUU1JUJGJTgzL0AyMi4zMzc4ODA0LDExNC4xOTUyODI4LDE3ei9kYXRhPSEzbTEhNGIxITRtNiEzbTUhMXMweDM0MDQwNmQwYTk5MGVkOTE6MHg5NDNjMDUyNTNjNTYzN2Y4IThtMiEzZDIyLjMzNzg3NTUhNGQxMTQuMTk3ODU3NyExNnMlMkZnJTJGMTJocTR3X2Q4P2hsPXpoLVRXJmVudHJ5PXR0dVwiIHRhcmdldD0nX2JsYW5rJz4yMTAxLCBXaW4gUGxhemEsIDkgU2hldW5nIEhlaSBTdHJlZXQuIEguSy5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsd2JjLWFkZHJlc3MtYWRkaXRpb25hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImVmZmVjdC11bmRlcmxpbmUtbW92ZS1ob3ZlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVkaXJlY3RUb1VybChcIi9wcml2YWN5LXBvbGljeVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpdmFjeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZWZmZWN0LXVuZGVybGluZS1tb3ZlLWhvdmVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5yZWRpcmVjdFRvVXJsKFwiL3Rlcm1zLW9mLXVzZVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaXNQQzogc3RhdGUuY2xpZW50U2xpY2UuaXNQQyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExhbmRpbmcpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20ncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZS9pbmRleCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgYXBwID0gY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG5hcHAucmVuZGVyKDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPEFwcCAvPlxyXG48L1Byb3ZpZGVyPik7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQ29udGV4dCIsImxhenlBY3QiLCJjaGVja0lzSW5WaWV3cG9ydCIsImxvYWRGb250IiwiY29ubmVjdCIsInNldENsaWVudFdpZHRoIiwic2V0Q2xpZW50SGVpZ2h0Iiwic2V0U2Nyb2xsWSIsInNldElzQXBwT3BlbiIsIkxhbmRpbmciLCJQcmVsb2FkIiwiUmVkaXJlY3RMb2FkaW5nIiwiSGVhZGVyTWVudXMiLCJHb29nbGVDb25zZW50IiwiSG92ZXJDdXJzb3JCb3giLCJBcHAiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJvcGVuQ29udGVudCIsInNob3dIZWFkZXIiLCJjbG9ja1JlZiIsImNyZWF0ZVJlZiIsImhhbmRsZVNjcm9sbEJlaGF2aW9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJlZiIsInN0YXR1cyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwic2Nyb2xsSGFuZGxlciIsInNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJpbm5lckhlaWdodCIsInNldFN0YXRlIiwicmVzaXplSGFuZGxlciIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZGNfd2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJkY19oZWlnaHQiLCJjb21wb25lbnREaWRNb3VudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJndGFnIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0T3BlbkNvbnRlbnQiLCJ0aGVuIiwiYm9keSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImlzQXBwT3BlbiIsInBhZ2Vsb2FkaW5nIiwic2Nyb2xsVG8iLCJjb21wb25lbnREaWRDYXRjaCIsImVycm9yIiwiZXJyb3JJbmZvIiwiY29uc29sZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJpdGVtc2NvcGUiLCJpdGVtdHlwZSIsIml0ZW1wcm9wIiwiaGlkZSIsImFjdGl2ZXBhZ2UiLCJjbGFzc05hbWUiLCJvbk9wZW4iLCJ2IiwibWFwU3RhdGVUb1Byb3BzIiwiaXNQQyIsImNsaWVudFNsaWNlIiwiYmFzZVNsaWNlIiwic2Nyb2xsU2xpY2UiLCJyZWRpcmVjdGxvYWRpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJJbWFnZSIsInJlZGlyZWN0VG9VcmwiLCJ1cmwiLCJvcGVuIiwiaHJlZiIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwYWRkaW5nVG9wIiwiZmxleEJhc2lzIiwid2lkdGgiLCJzcmMiLCJoZWlnaHQiLCJib3JkZXIiLCJtaW5IZWlnaHQiLCJhc3BlY3RSYXRpbyIsImxvYWRpbmciLCJ0YXJnZXQiLCJjcmVhdGVSb290Iiwic3RvcmUiLCJhcHAiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=