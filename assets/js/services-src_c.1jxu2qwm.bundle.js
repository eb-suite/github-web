"use strict";
(self["webpackChunkweb_webpack"] = self["webpackChunkweb_webpack"] || []).push([["services-src_c"],{

/***/ "./src/common/components/ColseBtn.js":
/*!*******************************************!*\
  !*** ./src/common/components/ColseBtn.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class CloseBtn extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "close-btn",
      style: !!this.props.zIndex && {
        zIndex: this.props.zIndex,
        cursor: "pointer"
      },
      onClick: this.props.onClose
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseBtn);

/***/ }),

/***/ "./src/common/components/effects/MagicCube.js":
/*!****************************************************!*\
  !*** ./src/common/components/effects/MagicCube.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_services_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/page/services/script.js */ "./src/page/services/script.js");
/* harmony import */ var _common_components_ColseBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components/ColseBtn */ "./src/common/components/ColseBtn.js");

// import * as THREE from 'three';


class MagicCube extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
      show: true
    };
    this.uiRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.boxRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }
  initializeCube() {
    const RangeHTML = ['<div class="range">', '<div class="range__label"></div>', '<div class="range__track">', '<div class="range__track-line"></div>', '<div class="range__handle"><div></div></div>', '</div>', '<div class="range__list"></div>', '</div>'].join('\n');
    document.querySelectorAll('range').forEach(el => {
      const temp = document.createElement('div');
      temp.innerHTML = RangeHTML;
      const range = temp.querySelector('.range');
      const rangeLabel = range.querySelector('.range__label');
      const rangeList = range.querySelector('.range__list');
      range.setAttribute('name', el.getAttribute('name'));
      rangeLabel.innerHTML = el.getAttribute('title');
      if (el.hasAttribute('color')) {
        range.classList.add('range--type-color');
        range.classList.add('range--color-' + el.getAttribute('name'));
      }
      if (el.hasAttribute('list')) {
        el.getAttribute('list').split(',').forEach(listItemText => {
          const listItem = document.createElement('div');
          listItem.innerHTML = listItemText;
          rangeList.appendChild(listItem);
        });
      }
      el.parentNode.replaceChild(range, el);
    });
    window.version = '0.99.2';
    window.game = new _page_services_script_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  handleDoubleClick(e) {
    this.setState({
      fullscreen: true
    });
    this.boxRef.current.style.opacity = 0;
    window.game.game(true);
    ;
    setTimeout(() => {
      window.game.world.resize();
      this.boxRef.current.style.opacity = 1;
      window.scrollTo(0, 0);
      // window.game.resume();
      // window.game.game(true);
    }, 300);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.fullscreen !== this.state.fullscreen) {
      if (this.state.fullscreen) document.querySelector('html').style.overflow = 'hidden';else document.querySelector('html').style.overflow = null;
    }
  }
  handleCloseEvent = e => {
    this.setState({
      fullscreen: false
    });
    setTimeout(() => {
      window.game.world.resize();
    }, 300);
  };
  componentDidMount() {
    this.initializeCube();
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      ref: this.boxRef,
      className: "magic-cube-box",
      style: {
        position: this.state.fullscreen ? 'fixed' : 'relative',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 10,
        backgroundColor: this.state.fullscreen ? '#f5f5f5' : null
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "magic-cube"
    }, this.state.fullscreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_ColseBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClose: e => this.handleCloseEvent(e),
      zIndex: 3
    }), this.state.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ui",
      ref: this.uiRef,
      onDoubleClickCapture: e => this.handleDoubleClick(e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ui__background"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ui__game"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ui__texts"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text text--title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "pc-show"
    }, "We love exploring our work with a sense of fun."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "pc-show"
    }, "Let's take on the challenge! Our best record is 124 seconds "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "mb-show"
    }, "We love exploring our work with a sense of fun. Let's take on the challenge! Our best record is 124 seconds ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text text--note",
      style: {
        textTransform: 'capitalize'
      }
    }, "Double Tap To Challenge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text text--timer"
    }, "0:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text text--complete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Complete!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text text--best-time"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("icon", {
      trophy: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Best Time!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ui__prefs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("range", {
      name: "size",
      title: "Cube Size",
      list: "2,3,4,5"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("range", {
      name: "flip",
      title: "Flip Type",
      list: "Swift\xA0,Smooth,Bounce"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("range", {
      name: "scramble",
      title: "Scramble Length",
      list: "20,25,30"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("range", {
      name: "fov",
      title: "Camera Angle",
      list: "Ortographic,Perspective"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("range", {
      name: "theme",
      title: "Color Scheme",
      list: "Cube,Erno,Dust,Camo,Rain"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ui__theme"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("range", {
      name: "hue",
      title: "Hue",
      color: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("range", {
      name: "saturation",
      title: "Saturation",
      color: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("range", {
      name: "lightness",
      title: "Lightness",
      color: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ui__stats"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "stats",
      name: "cube-size"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Cube:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "3x3x3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "stats",
      name: "total-solves"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Total solves:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "stats",
      name: "best-time"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Best time:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "stats",
      name: "worst-time"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Worst time:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "stats",
      name: "average-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Average of 5:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "stats",
      name: "average-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Average of 12:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "stats",
      name: "average-25"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Average of 25:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "-"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ui__buttons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn btn--bl btn--stats"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("icon", {
      trophy: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn btn--br btn--prefs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("icon", {
      settings: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn btn--bl btn--back"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("icon", {
      back: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn btn--br btn--theme"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("icon", {
      theme: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn btn--br btn--reset"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("icon", {
      reset: true
    }))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicCube);

/***/ }),

/***/ "./src/common/components/icons/Sub.js":
/*!********************************************!*\
  !*** ./src/common/components/icons/Sub.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sub)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class Sub extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      fillColor
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      className: "icon sub-icon",
      viewBox: "0 0 1024 1024",
      width: "200",
      height: "200"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M192 480m32 0l608 0q32 0 32 32l0 0q0 32-32 32l-608 0q-32 0-32-32l0 0q0-32 32-32Z",
      fill: fillColor ? fillColor : "#000",
      "p-id": "4232"
    })));
  }
}

/***/ }),

/***/ "./src/page/services/App.js":
/*!**********************************!*\
  !*** ./src/page/services/App.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AppContext */ "./src/context/AppContext.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/index */ "./src/utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_clientSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/clientSlice */ "./src/store/clientSlice.js");
/* harmony import */ var _store_scrollSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/scrollSlice */ "./src/store/scrollSlice.js");
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Landing */ "./src/page/services/components/Landing.js");
/* harmony import */ var _components_Branding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Branding */ "./src/page/services/components/Branding.js");
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Products */ "./src/page/services/components/Products.js");
/* harmony import */ var _components_Contents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Contents */ "./src/page/services/components/Contents.js");
/* harmony import */ var _components_Development__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Development */ "./src/page/services/components/Development.js");
/* harmony import */ var _components_Progress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Progress */ "./src/page/services/components/Progress.js");
/* harmony import */ var _common_components_Preload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/common/components/Preload */ "./src/common/components/Preload.js");
/* harmony import */ var _common_components_RedirectLoading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/common/components/RedirectLoading */ "./src/common/components/RedirectLoading.js");
/* harmony import */ var _common_components_LoaderLogo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/common/components/LoaderLogo */ "./src/common/components/LoaderLogo.js");
/* harmony import */ var _common_components_Navbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/common/components/Navbar */ "./src/common/components/Navbar.js");
/* harmony import */ var _common_components_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/common/components/Footer */ "./src/common/components/Footer.js");
/* harmony import */ var _common_components_tracking_GoogleConsent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/common/components/tracking/GoogleConsent */ "./src/common/components/tracking/GoogleConsent.js");
/* harmony import */ var _common_components_HoverCursorBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/common/components/HoverCursorBox */ "./src/common/components/HoverCursorBox.js");
/* harmony import */ var _scss_page_services_index_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/scss/page/services/index.scss */ "./src/scss/page/services/index.scss");

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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_tracking_GoogleConsent__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_HoverCursorBox__WEBPACK_IMPORTED_MODULE_18__["default"], null, this.state.openContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Navbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
      hide: !this.state.showHeader,
      activepage: "services"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content services-page"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Landing__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "section-subject pb-3 box-subject"
    }, "Services"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Branding__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Products__WEBPACK_IMPORTED_MODULE_8__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Contents__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Development__WEBPACK_IMPORTED_MODULE_10__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Progress__WEBPACK_IMPORTED_MODULE_11__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: this.clockRef
    }), pageloading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_RedirectLoading__WEBPACK_IMPORTED_MODULE_13__["default"], null) : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Preload__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onOpen: v => this.setOpenContent(v)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_LoaderLogo__WEBPACK_IMPORTED_MODULE_14__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "\xA0"))))));
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_20__.connect)(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/page/services/components/Branding.js":
/*!**************************************************!*\
  !*** ./src/page/services/components/Branding.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/components/icons/Sub */ "./src/common/components/icons/Sub.js");
/* harmony import */ var _common_components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components/Image */ "./src/common/components/Image.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");





class Branding extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxWidth: 0
    };
    this.boxRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.clientWidth !== this.props.clientWidth) {
      this.setState({
        boxWidth: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getRelWidth)(this.boxRef.current)
      });
    }
  }
  componentDidMount() {
    this.setState({
      boxWidth: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getRelWidth)(this.boxRef.current)
    });
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "branding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "branding-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "branding-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "branding-col description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "description-title"
    }, "Branding"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "description-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "list-unstyled"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Brand Strategy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Verbal Identity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Visual Identity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Brand Guidelines"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Brand Experiences")))))));
  }
}
const mapStateToProps = state => ({
  isPC: state.clientSlice.isPC,
  clientWidth: state.clientSlice.clientWidth
});
const mapDispatchToProps = dispatch => ({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)(Branding));

/***/ }),

/***/ "./src/page/services/components/Contents.js":
/*!**************************************************!*\
  !*** ./src/page/services/components/Contents.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/components/icons/Sub */ "./src/common/components/icons/Sub.js");


class Contents extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "contents"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "contents-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "contents-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "contents-col description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "description-title"
    }, "Contents"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "description-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "list-unstyled"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Art Direction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Copywriting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Illustration & Graphic Design"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Animation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Photo & Video")))))));
  }
}

/***/ }),

/***/ "./src/page/services/components/Development.js":
/*!*****************************************************!*\
  !*** ./src/page/services/components/Development.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Development)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/components/icons/Sub */ "./src/common/components/icons/Sub.js");


class Development extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "development"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "development-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "development-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "development-col description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "description-title"
    }, "Development"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "description-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "list-unstyled"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Technology Consulting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Architecture Planning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Mobile App Development"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Frontend Web Development"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Backend Development & API Integration")))))));
  }
}

/***/ }),

/***/ "./src/page/services/components/Landing.js":
/*!*************************************************!*\
  !*** ./src/page/services/components/Landing.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _common_components_effects_DiffLettersShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/components/effects/DiffLettersShow */ "./src/common/components/effects/DiffLettersShow.js");
/* harmony import */ var _common_components_effects_MagicCube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components/effects/MagicCube */ "./src/common/components/effects/MagicCube.js");



// import MultiSquare from '@/common/components/effects/MultiSquare';

class Landing extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-col description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_effects_DiffLettersShow__WEBPACK_IMPORTED_MODULE_1__["default"], {
      letters: ['Blending ', 'Technology ', 'with ', 'Creativity'],
      ratio: "0.5"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Our expertise are design thinking-based and technology driven services in digital product innovation and creation. We concentrates on designing authentic connections through the use of both aesthetics and behavioral science."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We customize our methodologies and strategic services specific to each unique project, from strategy, design and development.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-col image",
      style: {
        position: 'relative',
        aspectRatio: '1/1.2'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_effects_MagicCube__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
  }
}
const mapStateToProps = state => ({
  isPC: state.clientSlice.isPC,
  clientWidth: state.clientSlice.clientWidth
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps)(Landing));

/***/ }),

/***/ "./src/page/services/components/Products.js":
/*!**************************************************!*\
  !*** ./src/page/services/components/Products.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Products)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/components/icons/Sub */ "./src/common/components/icons/Sub.js");


class Products extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "products"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "products-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "products-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "product-col description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "description-title"
    }, "Apps & Websites"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "description-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "list-unstyled"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Consumer & Enterprise Software"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "CX, UX, UI & Interaction Design"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Content Strategy & Production"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "Frontend & Backend Development"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_icons_Sub__WEBPACK_IMPORTED_MODULE_1__["default"], null), "CMS Implementation & integration")))))));
  }
}

/***/ }),

/***/ "./src/page/services/components/Progress.js":
/*!**************************************************!*\
  !*** ./src/page/services/components/Progress.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class ContentBox extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      No,
      title,
      label,
      tags
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "content-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentBoxTag, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "content-box-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "content-box-no"
    }, No), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "content-box-title"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "content-box-desc"
    }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "content-box-tags"
    }, tags.map((tag, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "content-box-tag"
      }, tag);
    })))));
  }
}
class ContentBoxTag extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "tag-icon",
      style: {
        backgroundImage: 'url(/assets/img/icons/arrow-1.svg)'
      }
    }));
  }
}
class Progress extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        No: '01',
        title: 'Discovery',
        label: 'Understand what needs to be done',
        tags: ['Market and user research', 'Product / Scope definition', 'Prototypes', 'Proof of concept', 'Technical approach']
      }, {
        No: '02',
        title: 'Implementation',
        label: 'Turn the concept into a reality',
        tags: ['UX/UI Design', 'iOS app', 'Android app', 'Frontend', 'AI/ML', 'DevOps', 'Quality Assurance', 'Continuous Delivery']
      }, {
        No: '03',
        title: 'Support & Maintenance',
        label: 'Ongoing improvement and development',
        tags: ['Analystics', 'Monitoring', 'Maintenance', 'New feature development', 'Scalling']
      }]
    };
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-inner-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-inner-context"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-inner-context-title section-subject box-subject"
    }, "Process"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-inner-context-desc"
    }, "We work side-by-side with forward-thinking companies, brands, and founders to solve problems and create dazzling user-centric digital experiences.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-inner-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "piwb-list"
    }, this.state.list.map((item, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "piwb-item",
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentBox, item));
    }))))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Progress);

/***/ }),

/***/ "./src/page/services/index.js":
/*!************************************!*\
  !*** ./src/page/services/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/page/services/App.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/index */ "./src/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");





const app = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('app'));
app.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _store_index__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/page/services/script.js":
/*!*************************************!*\
  !*** ./src/page/services/script.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Three.js - https://github.com/mrdoob/three.js/
// RoundedBoxGeometry - https://github.com/pailhead/three-rounded-box

const animationEngine = (() => {
  let uniqueID = 0;
  class AnimationEngine {
    constructor() {
      this.ids = [];
      this.animations = {};
      this.update = this.update.bind(this);
      this.raf = 0;
      this.time = 0;
    }
    update() {
      const now = performance.now();
      const delta = now - this.time;
      this.time = now;
      let i = this.ids.length;
      this.raf = i ? requestAnimationFrame(this.update) : 0;
      while (i--) this.animations[this.ids[i]] && this.animations[this.ids[i]].update(delta);
    }
    add(animation) {
      animation.id = uniqueID++;
      this.ids.push(animation.id);
      this.animations[animation.id] = animation;
      if (this.raf !== 0) return;
      this.time = performance.now();
      this.raf = requestAnimationFrame(this.update);
    }
    remove(animation) {
      const index = this.ids.indexOf(animation.id);
      if (index < 0) return;
      this.ids.splice(index, 1);
      delete this.animations[animation.id];
      animation = null;
    }
  }
  return new AnimationEngine();
})();
class Animation {
  constructor(start) {
    if (start === true) this.start();
  }
  start() {
    animationEngine.add(this);
  }
  stop() {
    animationEngine.remove(this);
  }
  update(delta) {}
}
class World extends Animation {
  constructor(game) {
    super(true);
    this.game = game;
    this.container = this.game.dom.game;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(2, 1, 0.1, 10000);
    this.stage = {
      width: 2,
      height: 3
    };
    this.fov = 10;
    this.createLights();
    this.onResize = [];
    this.resize();
    window.addEventListener('resize', () => this.resize(), false);
  }
  update() {
    this.renderer.render(this.scene, this.camera);
  }
  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.fov = this.fov;
    this.camera.aspect = this.width / this.height;
    const aspect = this.stage.width / this.stage.height;
    const fovRad = this.fov * THREE.Math.DEG2RAD;
    let distance = aspect < this.camera.aspect ? this.stage.height / 2 / Math.tan(fovRad / 2) : this.stage.width / this.camera.aspect / (2 * Math.tan(fovRad / 2));
    distance *= 0.5;
    this.camera.position.set(distance, distance, distance);
    this.camera.lookAt(this.scene.position);
    this.camera.updateProjectionMatrix();
    const docFontSize = aspect < this.camera.aspect ? this.height / 100 * aspect : this.width / 100;
    document.documentElement.style.fontSize = docFontSize + 'px';
    if (this.onResize) this.onResize.forEach(cb => cb());
  }
  createLights() {
    this.lights = {
      holder: new THREE.Object3D(),
      ambient: new THREE.AmbientLight(0xffffff, 0.69),
      front: new THREE.DirectionalLight(0xffffff, 0.36),
      back: new THREE.DirectionalLight(0xffffff, 0.19)
    };
    this.lights.front.position.set(1.5, 5, 3);
    this.lights.back.position.set(-1.5, -5, -3);
    this.lights.holder.add(this.lights.ambient);
    this.lights.holder.add(this.lights.front);
    this.lights.holder.add(this.lights.back);
    this.scene.add(this.lights.holder);
  }
}
function RoundedBoxGeometry(size, radius, radiusSegments) {
  THREE.BufferGeometry.call(this);
  this.type = 'RoundedBoxGeometry';
  radiusSegments = !isNaN(radiusSegments) ? Math.max(1, Math.floor(radiusSegments)) : 1;
  var width, height, depth;
  width = height = depth = size;
  radius = size * radius;
  radius = Math.min(radius, Math.min(width, Math.min(height, Math.min(depth))) / 2);
  var edgeHalfWidth = width / 2 - radius;
  var edgeHalfHeight = height / 2 - radius;
  var edgeHalfDepth = depth / 2 - radius;
  this.parameters = {
    width: width,
    height: height,
    depth: depth,
    radius: radius,
    radiusSegments: radiusSegments
  };
  var rs1 = radiusSegments + 1;
  var totalVertexCount = rs1 * radiusSegments + 1 << 3;
  var positions = new THREE.BufferAttribute(new Float32Array(totalVertexCount * 3), 3);
  var normals = new THREE.BufferAttribute(new Float32Array(totalVertexCount * 3), 3);
  var cornerVerts = [],
    cornerNormals = [],
    normal = new THREE.Vector3(),
    vertex = new THREE.Vector3(),
    vertexPool = [],
    normalPool = [],
    indices = [];
  var lastVertex = rs1 * radiusSegments,
    cornerVertNumber = rs1 * radiusSegments + 1;
  doVertices();
  doFaces();
  doCorners();
  doHeightEdges();
  doWidthEdges();
  doDepthEdges();
  function doVertices() {
    var cornerLayout = [new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, -1), new THREE.Vector3(-1, 1, -1), new THREE.Vector3(-1, 1, 1), new THREE.Vector3(1, -1, 1), new THREE.Vector3(1, -1, -1), new THREE.Vector3(-1, -1, -1), new THREE.Vector3(-1, -1, 1)];
    for (var j = 0; j < 8; j++) {
      cornerVerts.push([]);
      cornerNormals.push([]);
    }
    var PIhalf = Math.PI / 2;
    var cornerOffset = new THREE.Vector3(edgeHalfWidth, edgeHalfHeight, edgeHalfDepth);
    for (var y = 0; y <= radiusSegments; y++) {
      var v = y / radiusSegments;
      var va = v * PIhalf;
      var cosVa = Math.cos(va);
      var sinVa = Math.sin(va);
      if (y == radiusSegments) {
        vertex.set(0, 1, 0);
        var vert = vertex.clone().multiplyScalar(radius).add(cornerOffset);
        cornerVerts[0].push(vert);
        vertexPool.push(vert);
        var norm = vertex.clone();
        cornerNormals[0].push(norm);
        normalPool.push(norm);
        continue;
      }
      for (var x = 0; x <= radiusSegments; x++) {
        var u = x / radiusSegments;
        var ha = u * PIhalf;
        vertex.x = cosVa * Math.cos(ha);
        vertex.y = sinVa;
        vertex.z = cosVa * Math.sin(ha);
        var vert = vertex.clone().multiplyScalar(radius).add(cornerOffset);
        cornerVerts[0].push(vert);
        vertexPool.push(vert);
        var norm = vertex.clone().normalize();
        cornerNormals[0].push(norm);
        normalPool.push(norm);
      }
    }
    for (var i = 1; i < 8; i++) {
      for (var j = 0; j < cornerVerts[0].length; j++) {
        var vert = cornerVerts[0][j].clone().multiply(cornerLayout[i]);
        cornerVerts[i].push(vert);
        vertexPool.push(vert);
        var norm = cornerNormals[0][j].clone().multiply(cornerLayout[i]);
        cornerNormals[i].push(norm);
        normalPool.push(norm);
      }
    }
  }
  function doCorners() {
    var flips = [true, false, true, false, false, true, false, true];
    var lastRowOffset = rs1 * (radiusSegments - 1);
    for (var i = 0; i < 8; i++) {
      var cornerOffset = cornerVertNumber * i;
      for (var v = 0; v < radiusSegments - 1; v++) {
        var r1 = v * rs1;
        var r2 = (v + 1) * rs1;
        for (var u = 0; u < radiusSegments; u++) {
          var u1 = u + 1;
          var a = cornerOffset + r1 + u;
          var b = cornerOffset + r1 + u1;
          var c = cornerOffset + r2 + u;
          var d = cornerOffset + r2 + u1;
          if (!flips[i]) {
            indices.push(a);
            indices.push(b);
            indices.push(c);
            indices.push(b);
            indices.push(d);
            indices.push(c);
          } else {
            indices.push(a);
            indices.push(c);
            indices.push(b);
            indices.push(b);
            indices.push(c);
            indices.push(d);
          }
        }
      }
      for (var u = 0; u < radiusSegments; u++) {
        var a = cornerOffset + lastRowOffset + u;
        var b = cornerOffset + lastRowOffset + u + 1;
        var c = cornerOffset + lastVertex;
        if (!flips[i]) {
          indices.push(a);
          indices.push(b);
          indices.push(c);
        } else {
          indices.push(a);
          indices.push(c);
          indices.push(b);
        }
      }
    }
  }
  function doFaces() {
    var a = lastVertex;
    var b = lastVertex + cornerVertNumber;
    var c = lastVertex + cornerVertNumber * 2;
    var d = lastVertex + cornerVertNumber * 3;
    indices.push(a);
    indices.push(b);
    indices.push(c);
    indices.push(a);
    indices.push(c);
    indices.push(d);
    a = lastVertex + cornerVertNumber * 4;
    b = lastVertex + cornerVertNumber * 5;
    c = lastVertex + cornerVertNumber * 6;
    d = lastVertex + cornerVertNumber * 7;
    indices.push(a);
    indices.push(c);
    indices.push(b);
    indices.push(a);
    indices.push(d);
    indices.push(c);
    a = 0;
    b = cornerVertNumber;
    c = cornerVertNumber * 4;
    d = cornerVertNumber * 5;
    indices.push(a);
    indices.push(c);
    indices.push(b);
    indices.push(b);
    indices.push(c);
    indices.push(d);
    a = cornerVertNumber * 2;
    b = cornerVertNumber * 3;
    c = cornerVertNumber * 6;
    d = cornerVertNumber * 7;
    indices.push(a);
    indices.push(c);
    indices.push(b);
    indices.push(b);
    indices.push(c);
    indices.push(d);
    a = radiusSegments;
    b = radiusSegments + cornerVertNumber * 3;
    c = radiusSegments + cornerVertNumber * 4;
    d = radiusSegments + cornerVertNumber * 7;
    indices.push(a);
    indices.push(b);
    indices.push(c);
    indices.push(b);
    indices.push(d);
    indices.push(c);
    a = radiusSegments + cornerVertNumber;
    b = radiusSegments + cornerVertNumber * 2;
    c = radiusSegments + cornerVertNumber * 5;
    d = radiusSegments + cornerVertNumber * 6;
    indices.push(a);
    indices.push(c);
    indices.push(b);
    indices.push(b);
    indices.push(c);
    indices.push(d);
  }
  function doHeightEdges() {
    for (var i = 0; i < 4; i++) {
      var cOffset = i * cornerVertNumber;
      var cRowOffset = 4 * cornerVertNumber + cOffset;
      var needsFlip = i & 1 === 1;
      for (var u = 0; u < radiusSegments; u++) {
        var u1 = u + 1;
        var a = cOffset + u;
        var b = cOffset + u1;
        var c = cRowOffset + u;
        var d = cRowOffset + u1;
        if (!needsFlip) {
          indices.push(a);
          indices.push(b);
          indices.push(c);
          indices.push(b);
          indices.push(d);
          indices.push(c);
        } else {
          indices.push(a);
          indices.push(c);
          indices.push(b);
          indices.push(b);
          indices.push(c);
          indices.push(d);
        }
      }
    }
  }
  function doDepthEdges() {
    var cStarts = [0, 2, 4, 6];
    var cEnds = [1, 3, 5, 7];
    for (var i = 0; i < 4; i++) {
      var cStart = cornerVertNumber * cStarts[i];
      var cEnd = cornerVertNumber * cEnds[i];
      var needsFlip = 1 >= i;
      for (var u = 0; u < radiusSegments; u++) {
        var urs1 = u * rs1;
        var u1rs1 = (u + 1) * rs1;
        var a = cStart + urs1;
        var b = cStart + u1rs1;
        var c = cEnd + urs1;
        var d = cEnd + u1rs1;
        if (needsFlip) {
          indices.push(a);
          indices.push(c);
          indices.push(b);
          indices.push(b);
          indices.push(c);
          indices.push(d);
        } else {
          indices.push(a);
          indices.push(b);
          indices.push(c);
          indices.push(b);
          indices.push(d);
          indices.push(c);
        }
      }
    }
  }
  function doWidthEdges() {
    var end = radiusSegments - 1;
    var cStarts = [0, 1, 4, 5];
    var cEnds = [3, 2, 7, 6];
    var needsFlip = [0, 1, 1, 0];
    for (var i = 0; i < 4; i++) {
      var cStart = cStarts[i] * cornerVertNumber;
      var cEnd = cEnds[i] * cornerVertNumber;
      for (var u = 0; u <= end; u++) {
        var a = cStart + radiusSegments + u * rs1;
        var b = cStart + (u != end ? radiusSegments + (u + 1) * rs1 : cornerVertNumber - 1);
        var c = cEnd + radiusSegments + u * rs1;
        var d = cEnd + (u != end ? radiusSegments + (u + 1) * rs1 : cornerVertNumber - 1);
        if (!needsFlip[i]) {
          indices.push(a);
          indices.push(b);
          indices.push(c);
          indices.push(b);
          indices.push(d);
          indices.push(c);
        } else {
          indices.push(a);
          indices.push(c);
          indices.push(b);
          indices.push(b);
          indices.push(c);
          indices.push(d);
        }
      }
    }
  }
  var index = 0;
  for (var i = 0; i < vertexPool.length; i++) {
    positions.setXYZ(index, vertexPool[i].x, vertexPool[i].y, vertexPool[i].z);
    normals.setXYZ(index, normalPool[i].x, normalPool[i].y, normalPool[i].z);
    index++;
  }
  this.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1));
  this.addAttribute('position', positions);
  this.addAttribute('normal', normals);
}
RoundedBoxGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
RoundedBoxGeometry.constructor = RoundedBoxGeometry;
function RoundedPlaneGeometry(size, radius, depth) {
  var x, y, width, height;
  x = y = -size / 2;
  width = height = size;
  radius = size * radius;
  const shape = new THREE.Shape();
  shape.moveTo(x, y + radius);
  shape.lineTo(x, y + height - radius);
  shape.quadraticCurveTo(x, y + height, x + radius, y + height);
  shape.lineTo(x + width - radius, y + height);
  shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  shape.lineTo(x + width, y + radius);
  shape.quadraticCurveTo(x + width, y, x + width - radius, y);
  shape.lineTo(x + radius, y);
  shape.quadraticCurveTo(x, y, x, y + radius);
  const geometry = new THREE.ExtrudeBufferGeometry(shape, {
    depth: depth,
    bevelEnabled: false,
    curveSegments: 3
  });
  return geometry;
}
class Cube {
  constructor(game) {
    this.game = game;
    this.size = 3;
    this.geometry = {
      pieceCornerRadius: 0.12,
      edgeCornerRoundness: 0.15,
      edgeScale: 0.82,
      edgeDepth: 0.01
    };
    this.holder = new THREE.Object3D();
    this.object = new THREE.Object3D();
    this.animator = new THREE.Object3D();
    this.holder.add(this.animator);
    this.animator.add(this.object);
    this.game.world.scene.add(this.holder);
  }
  init() {
    this.cubes = [];
    this.object.children = [];
    this.object.add(this.game.controls.group);
    if (this.size === 2) this.scale = 1.25;else if (this.size === 3) this.scale = 1;else if (this.size > 3) this.scale = 3 / this.size;
    this.object.scale.set(this.scale, this.scale, this.scale);
    const controlsScale = this.size === 2 ? 0.825 : 1;
    this.game.controls.edges.scale.set(controlsScale, controlsScale, controlsScale);
    this.generatePositions();
    this.generateModel();
    this.pieces.forEach(piece => {
      this.cubes.push(piece.userData.cube);
      this.object.add(piece);
    });
    this.holder.traverse(node => {
      if (node.frustumCulled) node.frustumCulled = false;
    });
    this.updateColors(this.game.themes.getColors());
    this.sizeGenerated = this.size;
  }
  resize(force = false) {
    if (this.size !== this.sizeGenerated || force) {
      this.size = this.game.preferences.ranges.size.value;
      this.reset();
      this.init();
      this.game.saved = false;
      this.game.timer.reset();
      this.game.storage.clearGame();
    }
  }
  reset() {
    this.game.controls.edges.rotation.set(0, 0, 0);
    this.holder.rotation.set(0, 0, 0);
    this.object.rotation.set(0, 0, 0);
    this.animator.rotation.set(0, 0, 0);
  }
  generatePositions() {
    const m = this.size - 1;
    const first = this.size % 2 !== 0 ? 0 - Math.floor(this.size / 2) : 0.5 - this.size / 2;
    let x, y, z;
    this.positions = [];
    for (x = 0; x < this.size; x++) {
      for (y = 0; y < this.size; y++) {
        for (z = 0; z < this.size; z++) {
          let position = new THREE.Vector3(first + x, first + y, first + z);
          let edges = [];
          if (x == 0) edges.push(0);
          if (x == m) edges.push(1);
          if (y == 0) edges.push(2);
          if (y == m) edges.push(3);
          if (z == 0) edges.push(4);
          if (z == m) edges.push(5);
          position.edges = edges;
          this.positions.push(position);
        }
      }
    }
  }
  generateModel() {
    this.pieces = [];
    this.edges = [];
    const pieceSize = 1 / 3;
    const mainMaterial = new THREE.MeshLambertMaterial();
    const pieceMesh = new THREE.Mesh(new RoundedBoxGeometry(pieceSize, this.geometry.pieceCornerRadius, 3), mainMaterial.clone());
    const edgeGeometry = RoundedPlaneGeometry(pieceSize, this.geometry.edgeCornerRoundness, this.geometry.edgeDepth);
    this.positions.forEach((position, index) => {
      const piece = new THREE.Object3D();
      const pieceCube = pieceMesh.clone();
      const pieceEdges = [];
      piece.position.copy(position.clone().divideScalar(3));
      piece.add(pieceCube);
      piece.name = index;
      piece.edgesName = '';
      position.edges.forEach(position => {
        const edge = new THREE.Mesh(edgeGeometry, mainMaterial.clone());
        const name = ['L', 'R', 'D', 'U', 'B', 'F'][position];
        const distance = pieceSize / 2;
        edge.position.set(distance * [-1, 1, 0, 0, 0, 0][position], distance * [0, 0, -1, 1, 0, 0][position], distance * [0, 0, 0, 0, -1, 1][position]);
        edge.rotation.set(Math.PI / 2 * [0, 0, 1, -1, 0, 0][position], Math.PI / 2 * [-1, 1, 0, 0, 2, 0][position], 0);
        edge.scale.set(this.geometry.edgeScale, this.geometry.edgeScale, this.geometry.edgeScale);
        edge.name = name;
        piece.add(edge);
        pieceEdges.push(name);
        this.edges.push(edge);
      });
      piece.userData.edges = pieceEdges;
      piece.userData.cube = pieceCube;
      piece.userData.start = {
        position: piece.position.clone(),
        rotation: piece.rotation.clone()
      };
      this.pieces.push(piece);
    });
  }
  updateColors(colors) {
    if (typeof this.pieces !== 'object' && typeof this.edges !== 'object') return;
    this.pieces.forEach(piece => piece.userData.cube.material.color.setHex(colors.P));
    this.edges.forEach(edge => edge.material.color.setHex(colors[edge.name]));
  }
  loadFromData(data) {
    this.size = data.size;
    this.reset();
    this.init();
    this.pieces.forEach(piece => {
      const index = data.names.indexOf(piece.name);
      const position = data.positions[index];
      const rotation = data.rotations[index];
      piece.position.set(position.x, position.y, position.z);
      piece.rotation.set(rotation.x, rotation.y, rotation.z);
    });
  }
}
const Easing = {
  Power: {
    In: power => {
      power = Math.round(power || 1);
      return t => Math.pow(t, power);
    },
    Out: power => {
      power = Math.round(power || 1);
      return t => 1 - Math.abs(Math.pow(t - 1, power));
    },
    InOut: power => {
      power = Math.round(power || 1);
      return t => t < 0.5 ? Math.pow(t * 2, power) / 2 : (1 - Math.abs(Math.pow(t * 2 - 1 - 1, power))) / 2 + 0.5;
    }
  },
  Sine: {
    In: () => t => 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2),
    Out: () => t => Math.sin(Math.PI / 2 * t),
    InOut: () => t => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2
  },
  Back: {
    Out: s => {
      s = s || 1.70158;
      return t => {
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
      };
    },
    In: s => {
      s = s || 1.70158;
      return t => {
        return t * t * ((s + 1) * t - s);
      };
    }
  },
  Elastic: {
    Out: (amplitude, period) => {
      let PI2 = Math.PI * 2;
      let p1 = amplitude >= 1 ? amplitude : 1;
      let p2 = (period || 0.3) / (amplitude < 1 ? amplitude : 1);
      let p3 = p2 / PI2 * (Math.asin(1 / p1) || 0);
      p2 = PI2 / p2;
      return t => {
        return p1 * Math.pow(2, -10 * t) * Math.sin((t - p3) * p2) + 1;
      };
    }
  }
};
class Tween extends Animation {
  constructor(options) {
    super(false);
    this.duration = options.duration || 500;
    this.easing = options.easing || (t => t);
    this.onUpdate = options.onUpdate || (() => {});
    this.onComplete = options.onComplete || (() => {});
    this.delay = options.delay || false;
    this.yoyo = options.yoyo ? false : null;
    this.progress = 0;
    this.value = 0;
    this.delta = 0;
    this.getFromTo(options);
    if (this.delay) setTimeout(() => super.start(), this.delay);else super.start();
    this.onUpdate(this);
  }
  update(delta) {
    const old = this.value * 1;
    const direction = this.yoyo === true ? -1 : 1;
    this.progress += delta / this.duration * direction;
    this.value = this.easing(this.progress);
    this.delta = this.value - old;
    if (this.values !== null) this.updateFromTo();
    if (this.yoyo !== null) this.updateYoyo();else if (this.progress <= 1) this.onUpdate(this);else {
      this.progress = 1;
      this.value = 1;
      this.onUpdate(this);
      this.onComplete(this);
      super.stop();
    }
  }
  updateYoyo() {
    if (this.progress > 1 || this.progress < 0) {
      this.value = this.progress = this.progress > 1 ? 1 : 0;
      this.yoyo = !this.yoyo;
    }
    this.onUpdate(this);
  }
  updateFromTo() {
    this.values.forEach(key => {
      this.target[key] = this.from[key] + (this.to[key] - this.from[key]) * this.value;
    });
  }
  getFromTo(options) {
    if (!options.target || !options.to) {
      this.values = null;
      return;
    }
    this.target = options.target || null;
    this.from = options.from || {};
    this.to = options.to || null;
    this.values = [];
    if (Object.keys(this.from).length < 1) Object.keys(this.to).forEach(key => {
      this.from[key] = this.target[key];
    });
    Object.keys(this.to).forEach(key => {
      this.values.push(key);
    });
  }
}

// window.addEventListener( 'touchmove', () => {} );
// document.addEventListener( 'touchmove',  event => { event.preventDefault(); }, { passive: false } );

class Draggable {
  constructor(element, options) {
    this.position = {
      current: new THREE.Vector2(),
      start: new THREE.Vector2(),
      delta: new THREE.Vector2(),
      old: new THREE.Vector2(),
      drag: new THREE.Vector2()
    };
    this.options = Object.assign({
      calcDelta: false
    }, options || {});
    this.element = element;
    this.touch = null;
    this.drag = {
      start: event => {
        if (event.type == 'mousedown' && event.which != 1) return;
        if (event.type == 'touchstart' && event.touches.length > 1) return;
        this.getPositionCurrent(event);
        if (this.options.calcDelta) {
          this.position.start = this.position.current.clone();
          this.position.delta.set(0, 0);
          this.position.drag.set(0, 0);
        }
        this.touch = event.type == 'touchstart';
        this.onDragStart(this.position);
        window.addEventListener(this.touch ? 'touchmove' : 'mousemove', this.drag.move, false);
        window.addEventListener(this.touch ? 'touchend' : 'mouseup', this.drag.end, false);
      },
      move: event => {
        if (this.options.calcDelta) {
          this.position.old = this.position.current.clone();
        }
        this.getPositionCurrent(event);
        if (this.options.calcDelta) {
          this.position.delta = this.position.current.clone().sub(this.position.old);
          this.position.drag = this.position.current.clone().sub(this.position.start);
        }
        this.onDragMove(this.position);
      },
      end: event => {
        this.getPositionCurrent(event);
        this.onDragEnd(this.position);
        window.removeEventListener(this.touch ? 'touchmove' : 'mousemove', this.drag.move, false);
        window.removeEventListener(this.touch ? 'touchend' : 'mouseup', this.drag.end, false);
      }
    };
    this.onDragStart = () => {};
    this.onDragMove = () => {};
    this.onDragEnd = () => {};
    this.enable();
    return this;
  }
  enable() {
    this.element.addEventListener('touchstart', this.drag.start, false);
    this.element.addEventListener('mousedown', this.drag.start, false);
    return this;
  }
  disable() {
    this.element.removeEventListener('touchstart', this.drag.start, false);
    this.element.removeEventListener('mousedown', this.drag.start, false);
    return this;
  }
  getPositionCurrent(event) {
    const dragEvent = event.touches ? event.touches[0] || event.changedTouches[0] : event;
    this.position.current.set(dragEvent.pageX, dragEvent.pageY);
  }
  convertPosition(position) {
    position.x = position.x / this.element.offsetWidth * 2 - 1;
    position.y = -(position.y / this.element.offsetHeight * 2 - 1);
    return position;
  }
}
const STILL = 0;
const PREPARING = 1;
const ROTATING = 2;
const ANIMATING = 3;
class Controls {
  constructor(game) {
    this.game = game;
    this.flipConfig = 0;
    this.flipEasings = [Easing.Power.Out(3), Easing.Sine.Out(), Easing.Back.Out(1.5)];
    this.flipSpeeds = [125, 200, 300];
    this.raycaster = new THREE.Raycaster();
    const helperMaterial = new THREE.MeshBasicMaterial({
      depthWrite: false,
      transparent: true,
      opacity: 0,
      color: 0x0033ff
    });
    this.group = new THREE.Object3D();
    this.group.name = 'controls';
    this.game.cube.object.add(this.group);
    this.helper = new THREE.Mesh(new THREE.PlaneBufferGeometry(200, 200), helperMaterial.clone());
    this.helper.rotation.set(0, Math.PI / 4, 0);
    this.game.world.scene.add(this.helper);
    this.edges = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), helperMaterial.clone());
    this.game.world.scene.add(this.edges);
    this.onSolved = () => {};
    this.onMove = () => {};
    this.momentum = [];
    this.scramble = null;
    this.state = STILL;
    this.enabled = false;
    this.initDraggable();
  }
  enable() {
    this.draggable.enable();
    this.enabled = true;
  }
  disable() {
    this.draggable.disable();
    this.enabled = false;
  }
  initDraggable() {
    this.draggable = new Draggable(this.game.dom.game);
    this.draggable.onDragStart = position => {
      if (this.scramble !== null) return;
      if (this.state === PREPARING || this.state === ROTATING) return;
      this.gettingDrag = this.state === ANIMATING;
      const edgeIntersect = this.getIntersect(position.current, this.edges, false);
      if (edgeIntersect !== false) {
        this.dragIntersect = this.getIntersect(position.current, this.game.cube.cubes, true);
      }
      if (edgeIntersect !== false && this.dragIntersect !== false) {
        this.dragNormal = edgeIntersect.face.normal.round();
        this.flipType = 'layer';
        this.attach(this.helper, this.edges);
        this.helper.rotation.set(0, 0, 0);
        this.helper.position.set(0, 0, 0);
        this.helper.lookAt(this.dragNormal);
        this.helper.translateZ(0.5);
        this.helper.updateMatrixWorld();
        this.detach(this.helper, this.edges);
      } else {
        this.dragNormal = new THREE.Vector3(0, 0, 1);
        this.flipType = 'cube';
        this.helper.position.set(0, 0, 0);
        this.helper.rotation.set(0, Math.PI / 4, 0);
        this.helper.updateMatrixWorld();
      }
      let planeIntersect = this.getIntersect(position.current, this.helper, false);
      if (planeIntersect === false) return;
      this.dragCurrent = this.helper.worldToLocal(planeIntersect.point);
      this.dragTotal = new THREE.Vector3();
      this.state = this.state === STILL ? PREPARING : this.state;
    };
    this.draggable.onDragMove = position => {
      if (this.scramble !== null) return;
      if (this.state === STILL || this.state === ANIMATING && this.gettingDrag === false) return;
      const planeIntersect = this.getIntersect(position.current, this.helper, false);
      if (planeIntersect === false) return;
      const point = this.helper.worldToLocal(planeIntersect.point.clone());
      this.dragDelta = point.clone().sub(this.dragCurrent).setZ(0);
      this.dragTotal.add(this.dragDelta);
      this.dragCurrent = point;
      this.addMomentumPoint(this.dragDelta);
      if (this.state === PREPARING && this.dragTotal.length() > 0.05) {
        this.dragDirection = this.getMainAxis(this.dragTotal);
        if (this.flipType === 'layer') {
          const direction = new THREE.Vector3();
          direction[this.dragDirection] = 1;
          const worldDirection = this.helper.localToWorld(direction).sub(this.helper.position);
          const objectDirection = this.edges.worldToLocal(worldDirection).round();
          this.flipAxis = objectDirection.cross(this.dragNormal).negate();
          this.selectLayer(this.getLayer(false));
        } else {
          const axis = this.dragDirection != 'x' ? this.dragDirection == 'y' && position.current.x > this.game.world.width / 2 ? 'z' : 'x' : 'y';
          this.flipAxis = new THREE.Vector3();
          this.flipAxis[axis] = 1 * (axis == 'x' ? -1 : 1);
        }
        this.flipAngle = 0;
        this.state = ROTATING;
      } else if (this.state === ROTATING) {
        const rotation = this.dragDelta[this.dragDirection];
        if (this.flipType === 'layer') {
          this.group.rotateOnAxis(this.flipAxis, rotation);
          this.flipAngle += rotation;
        } else {
          this.edges.rotateOnWorldAxis(this.flipAxis, rotation);
          this.game.cube.object.rotation.copy(this.edges.rotation);
          this.flipAngle += rotation;
        }
      }
    };
    this.draggable.onDragEnd = position => {
      if (this.scramble !== null) return;
      if (this.state !== ROTATING) {
        this.gettingDrag = false;
        this.state = STILL;
        return;
      }
      this.state = ANIMATING;
      const momentum = this.getMomentum()[this.dragDirection];
      const flip = Math.abs(momentum) > 0.05 && Math.abs(this.flipAngle) < Math.PI / 2;
      const angle = flip ? this.roundAngle(this.flipAngle + Math.sign(this.flipAngle) * (Math.PI / 4)) : this.roundAngle(this.flipAngle);
      const delta = angle - this.flipAngle;
      if (this.flipType === 'layer') {
        this.rotateLayer(delta, false, layer => {
          this.game.storage.saveGame();
          this.state = this.gettingDrag ? PREPARING : STILL;
          this.gettingDrag = false;
          this.checkIsSolved();
        });
      } else {
        this.rotateCube(delta, () => {
          this.state = this.gettingDrag ? PREPARING : STILL;
          this.gettingDrag = false;
        });
      }
    };
  }
  rotateLayer(rotation, scramble, callback) {
    const config = scramble ? 0 : this.flipConfig;
    const easing = this.flipEasings[config];
    const duration = this.flipSpeeds[config];
    const bounce = config == 2 ? this.bounceCube() : () => {};
    this.rotationTween = new Tween({
      easing: easing,
      duration: duration,
      onUpdate: tween => {
        let deltaAngle = tween.delta * rotation;
        this.group.rotateOnAxis(this.flipAxis, deltaAngle);
        bounce(tween.value, deltaAngle, rotation);
      },
      onComplete: () => {
        if (!scramble) this.onMove();
        const layer = this.flipLayer.slice(0);
        this.game.cube.object.rotation.setFromVector3(this.snapRotation(this.game.cube.object.rotation.toVector3()));
        this.group.rotation.setFromVector3(this.snapRotation(this.group.rotation.toVector3()));
        this.deselectLayer(this.flipLayer);
        callback(layer);
      }
    });
  }
  bounceCube() {
    let fixDelta = true;
    return (progress, delta, rotation) => {
      if (progress >= 1) {
        if (fixDelta) {
          delta = (progress - 1) * rotation;
          fixDelta = false;
        }
        this.game.cube.object.rotateOnAxis(this.flipAxis, delta);
      }
    };
  }
  rotateCube(rotation, callback) {
    const config = this.flipConfig;
    const easing = [Easing.Power.Out(4), Easing.Sine.Out(), Easing.Back.Out(2)][config];
    const duration = [100, 150, 350][config];
    this.rotationTween = new Tween({
      easing: easing,
      duration: duration,
      onUpdate: tween => {
        this.edges.rotateOnWorldAxis(this.flipAxis, tween.delta * rotation);
        this.game.cube.object.rotation.copy(this.edges.rotation);
      },
      onComplete: () => {
        this.edges.rotation.setFromVector3(this.snapRotation(this.edges.rotation.toVector3()));
        this.game.cube.object.rotation.copy(this.edges.rotation);
        callback();
      }
    });
  }
  selectLayer(layer) {
    this.group.rotation.set(0, 0, 0);
    this.movePieces(layer, this.game.cube.object, this.group);
    this.flipLayer = layer;
  }
  deselectLayer(layer) {
    this.movePieces(layer, this.group, this.game.cube.object);
    this.flipLayer = null;
  }
  movePieces(layer, from, to) {
    from.updateMatrixWorld();
    to.updateMatrixWorld();
    layer.forEach(index => {
      const piece = this.game.cube.pieces[index];
      piece.applyMatrix(from.matrixWorld);
      from.remove(piece);
      piece.applyMatrix(new THREE.Matrix4().getInverse(to.matrixWorld));
      to.add(piece);
    });
  }
  getLayer(position) {
    const scalar = {
      2: 6,
      3: 3,
      4: 4,
      5: 3
    }[this.game.cube.size];
    const layer = [];
    let axis;
    if (position === false) {
      const piece = this.dragIntersect.object.parent;
      axis = this.getMainAxis(this.flipAxis);
      position = piece.position.clone().multiplyScalar(scalar).round();
    } else {
      axis = this.getMainAxis(position);
    }
    this.game.cube.pieces.forEach(piece => {
      const piecePosition = piece.position.clone().multiplyScalar(scalar).round();
      if (piecePosition[axis] == position[axis]) layer.push(piece.name);
    });
    return layer;
  }
  keyboardMove(type, move, callback) {
    if (this.state !== STILL) return;
    if (this.enabled !== true) return;
    if (type === 'LAYER') {
      const layer = this.getLayer(move.position);
      this.flipAxis = new THREE.Vector3();
      this.flipAxis[move.axis] = 1;
      this.state = ROTATING;
      this.selectLayer(layer);
      this.rotateLayer(move.angle, false, layer => {
        this.game.storage.saveGame();
        this.state = STILL;
        this.checkIsSolved();
      });
    } else if (type === 'CUBE') {
      this.flipAxis = new THREE.Vector3();
      this.flipAxis[move.axis] = 1;
      this.state = ROTATING;
      this.rotateCube(move.angle, () => {
        this.state = STILL;
      });
    }
  }
  scrambleCube() {
    if (this.scramble == null) {
      this.scramble = this.game.scrambler;
      this.scramble.callback = typeof callback !== 'function' ? () => {} : callback;
    }
    const converted = this.scramble.converted;
    const move = converted[0];
    const layer = this.getLayer(move.position);
    this.flipAxis = new THREE.Vector3();
    this.flipAxis[move.axis] = 1;
    this.selectLayer(layer);
    this.rotateLayer(move.angle, true, () => {
      converted.shift();
      if (converted.length > 0) {
        this.scrambleCube();
      } else {
        this.scramble = null;
        this.game.storage.saveGame();
      }
    });
  }
  getIntersect(position, object, multiple) {
    this.raycaster.setFromCamera(this.draggable.convertPosition(position.clone()), this.game.world.camera);
    const intersect = multiple ? this.raycaster.intersectObjects(object) : this.raycaster.intersectObject(object);
    return intersect.length > 0 ? intersect[0] : false;
  }
  getMainAxis(vector) {
    return Object.keys(vector).reduce((a, b) => Math.abs(vector[a]) > Math.abs(vector[b]) ? a : b);
  }
  detach(child, parent) {
    child.applyMatrix(parent.matrixWorld);
    parent.remove(child);
    this.game.world.scene.add(child);
  }
  attach(child, parent) {
    child.applyMatrix(new THREE.Matrix4().getInverse(parent.matrixWorld));
    this.game.world.scene.remove(child);
    parent.add(child);
  }
  addMomentumPoint(delta) {
    const time = Date.now();
    this.momentum = this.momentum.filter(moment => time - moment.time < 500);
    if (delta !== false) this.momentum.push({
      delta,
      time
    });
  }
  getMomentum() {
    const points = this.momentum.length;
    const momentum = new THREE.Vector2();
    this.addMomentumPoint(false);
    this.momentum.forEach((point, index) => {
      momentum.add(point.delta.multiplyScalar(index / points));
    });
    return momentum;
  }
  roundAngle(angle) {
    const round = Math.PI / 2;
    return Math.sign(angle) * Math.round(Math.abs(angle) / round) * round;
  }
  snapRotation(angle) {
    return angle.set(this.roundAngle(angle.x), this.roundAngle(angle.y), this.roundAngle(angle.z));
  }
  checkIsSolved() {
    const start = performance.now();
    let solved = true;
    const sides = {
      'x-': [],
      'x+': [],
      'y-': [],
      'y+': [],
      'z-': [],
      'z+': []
    };
    this.game.cube.edges.forEach(edge => {
      const position = edge.parent.localToWorld(edge.position.clone()).sub(this.game.cube.object.position);
      const mainAxis = this.getMainAxis(position);
      const mainSign = position.multiplyScalar(2).round()[mainAxis] < 1 ? '-' : '+';
      sides[mainAxis + mainSign].push(edge.name);
    });
    Object.keys(sides).forEach(side => {
      if (!sides[side].every(value => value === sides[side][0])) solved = false;
    });
    if (solved) this.onSolved();
  }
}
class Scrambler {
  constructor(game) {
    this.game = game;
    this.dificulty = 0;
    this.scrambleLength = {
      2: [7, 9, 11],
      3: [20, 25, 30],
      4: [30, 40, 50],
      5: [40, 60, 80]
    };
    this.moves = [];
    this.conveted = [];
    this.pring = '';
  }
  scramble(scramble) {
    let count = 0;
    this.moves = typeof scramble !== 'undefined' ? scramble.split(' ') : [];
    if (this.moves.length < 1) {
      const scrambleLength = this.scrambleLength[this.game.cube.size][this.dificulty];
      const faces = this.game.cube.size < 4 ? 'UDLRFB' : 'UuDdLlRrFfBb';
      const modifiers = ["", "'", "2"];
      const total = typeof scramble === 'undefined' ? scrambleLength : scramble;
      while (count < total) {
        const move = faces[Math.floor(Math.random() * faces.length)] + modifiers[Math.floor(Math.random() * 3)];
        if (count > 0 && move.charAt(0) == this.moves[count - 1].charAt(0)) continue;
        if (count > 1 && move.charAt(0) == this.moves[count - 2].charAt(0)) continue;
        this.moves.push(move);
        count++;
      }
    }
    this.callback = () => {};
    this.convert();
    this.print = this.moves.join(' ');
    return this;
  }
  convert(moves) {
    this.converted = [];
    this.moves.forEach(move => {
      const convertedMove = this.convertMove(move);
      const modifier = move.charAt(1);
      this.converted.push(convertedMove);
      if (modifier == "2") this.converted.push(convertedMove);
    });
  }
  convertMove(move) {
    const face = move.charAt(0);
    const modifier = move.charAt(1);
    const axis = {
      D: 'y',
      U: 'y',
      L: 'x',
      R: 'x',
      F: 'z',
      B: 'z'
    }[face.toUpperCase()];
    let row = {
      D: -1,
      U: 1,
      L: -1,
      R: 1,
      F: 1,
      B: -1
    }[face.toUpperCase()];
    if (this.game.cube.size > 3 && face !== face.toLowerCase()) row = row * 2;
    const position = new THREE.Vector3();
    position[{
      D: 'y',
      U: 'y',
      L: 'x',
      R: 'x',
      F: 'z',
      B: 'z'
    }[face.toUpperCase()]] = row;
    const angle = Math.PI / 2 * -row * (modifier == "'" ? -1 : 1);
    return {
      position,
      axis,
      angle,
      name: move
    };
  }
}
class Transition {
  constructor(game) {
    this.game = game;
    this.tweens = {};
    this.durations = {};
    this.data = {
      cubeY: -0.2,
      cameraZoom: 0.85
    };
    this.activeTransitions = 0;
  }
  init() {
    this.game.controls.disable();
    this.game.cube.object.position.y = this.data.cubeY;
    this.game.cube.animator.position.y = 4;
    this.game.cube.animator.rotation.x = -Math.PI / 3;
    this.game.world.camera.zoom = this.data.cameraZoom;
    this.game.world.camera.updateProjectionMatrix();
    this.tweens.buttons = {};
    this.tweens.timer = [];
    this.tweens.title = [];
    this.tweens.best = [];
    this.tweens.complete = [];
    this.tweens.prefs = [];
    this.tweens.theme = [];
    this.tweens.stats = [];
  }
  buttons(show, hide) {
    const buttonTween = (button, show) => {
      return new Tween({
        target: button.style,
        duration: 300,
        easing: show ? Easing.Power.Out(2) : Easing.Power.In(3),
        from: {
          opacity: show ? 0 : 1
        },
        to: {
          opacity: show ? 1 : 0
        },
        onUpdate: tween => {
          const translate = show ? 1 - tween.value : tween.value;
          button.style.transform = `translate3d(0, ${translate * 1.5}em, 0)`;
        },
        onComplete: () => button.style.pointerEvents = show ? 'all' : 'none'
      });
    };
    hide.forEach(button => this.tweens.buttons[button] = buttonTween(this.game.dom.buttons[button], false));
    setTimeout(() => show.forEach(button => {
      this.tweens.buttons[button] = buttonTween(this.game.dom.buttons[button], true);
    }), hide ? 500 : 0);
  }
  cube(show, theming = false) {
    this.activeTransitions++;
    try {
      this.tweens.cube.stop();
    } catch (e) {}
    const currentY = this.game.cube.animator.position.y;
    const currentRotation = this.game.cube.animator.rotation.x;
    this.tweens.cube = new Tween({
      duration: show ? 3000 : 1250,
      easing: show ? Easing.Elastic.Out(0.8, 0.6) : Easing.Back.In(1),
      onUpdate: tween => {
        this.game.cube.animator.position.y = show ? theming ? 0.9 + (1 - tween.value) * 3.5 : (1 - tween.value) * 4 : currentY + tween.value * 4;
        this.game.cube.animator.rotation.x = show ? (1 - tween.value) * Math.PI / 3 : currentRotation + tween.value * -Math.PI / 3;
      }
    });
    if (theming) {
      if (show) {
        this.game.world.camera.zoom = 0.75;
        this.game.world.camera.updateProjectionMatrix();
      } else {
        setTimeout(() => {
          this.game.world.camera.zoom = this.data.cameraZoom;
          this.game.world.camera.updateProjectionMatrix();
        }, 1500);
      }
    }
    this.durations.cube = show ? 1500 : 1500;
    setTimeout(() => this.activeTransitions--, this.durations.cube);
  }
  float() {
    try {
      this.tweens.float.stop();
    } catch (e) {}
    this.tweens.float = new Tween({
      duration: 1500,
      easing: Easing.Sine.InOut(),
      yoyo: true,
      onUpdate: tween => {
        this.game.cube.holder.position.y = -0.02 + tween.value * 0.04;
        this.game.cube.holder.rotation.x = 0.005 - tween.value * 0.01;
        this.game.cube.holder.rotation.z = -this.game.cube.holder.rotation.x;
        this.game.cube.holder.rotation.y = this.game.cube.holder.rotation.x;
        this.game.controls.edges.position.y = this.game.cube.holder.position.y + this.game.cube.object.position.y;
      }
    });
  }
  zoom(play, time) {
    this.activeTransitions++;
    const zoom = play ? 1 : this.data.cameraZoom;
    const duration = time > 0 ? Math.max(time, 1500) : 1500;
    const rotations = time > 0 ? Math.round(duration / 1500) : 1;
    const easing = Easing.Power.InOut(time > 0 ? 2 : 3);
    this.tweens.zoom = new Tween({
      target: this.game.world.camera,
      duration: duration,
      easing: easing,
      to: {
        zoom: zoom
      },
      onUpdate: () => {
        this.game.world.camera.updateProjectionMatrix();
      }
    });
    this.tweens.rotate = new Tween({
      target: this.game.cube.animator.rotation,
      duration: duration,
      easing: easing,
      to: {
        y: -Math.PI * 2 * rotations
      },
      onComplete: () => {
        this.game.cube.animator.rotation.y = 0;
      }
    });
    this.durations.zoom = duration;
    setTimeout(() => this.activeTransitions--, this.durations.zoom);
  }
  elevate(complete) {
    this.activeTransitions++;
    const cubeY = this.tweens.elevate = new Tween({
      target: this.game.cube.object.position,
      duration: complete ? 1500 : 0,
      easing: Easing.Power.InOut(3),
      to: {
        y: complete ? -0.05 : this.data.cubeY
      }
    });
    this.durations.elevate = 1500;
    setTimeout(() => this.activeTransitions--, this.durations.elevate);
  }
  complete(show, best) {
    this.activeTransitions++;
    const text = best ? this.game.dom.texts.best : this.game.dom.texts.complete;
    if (text.querySelector('span i') === null) text.querySelectorAll('span').forEach(span => this.splitLetters(span));
    const letters = text.querySelectorAll('.icon, i');
    this.flipLetters(best ? 'best' : 'complete', letters, show);
    text.style.opacity = 1;
    const duration = this.durations[best ? 'best' : 'complete'];
    if (!show) setTimeout(() => this.game.dom.texts.timer.style.transform = '', duration);
    setTimeout(() => this.activeTransitions--, duration);
  }
  stats(show) {
    if (show) this.game.scores.calcStats();
    this.activeTransitions++;
    this.tweens.stats.forEach(tween => {
      tween.stop();
      tween = null;
    });
    let tweenId = -1;
    const stats = this.game.dom.stats.querySelectorAll('.stats');
    const easing = show ? Easing.Power.Out(2) : Easing.Power.In(3);
    stats.forEach((stat, index) => {
      const delay = index * (show ? 80 : 60);
      this.tweens.stats[tweenId++] = new Tween({
        delay: delay,
        duration: 400,
        easing: easing,
        onUpdate: tween => {
          const translate = show ? (1 - tween.value) * 2 : tween.value;
          const opacity = show ? tween.value : 1 - tween.value;
          stat.style.transform = `translate3d(0, ${translate}em, 0)`;
          stat.style.opacity = opacity;
        }
      });
    });
    this.durations.stats = 0;
    setTimeout(() => this.activeTransitions--, this.durations.stats);
  }
  preferences(show) {
    this.ranges(this.game.dom.prefs.querySelectorAll('.range'), 'prefs', show);
  }
  theming(show) {
    this.ranges(this.game.dom.theme.querySelectorAll('.range'), 'prefs', show);
  }
  ranges(ranges, type, show) {
    this.activeTransitions++;
    this.tweens[type].forEach(tween => {
      tween.stop();
      tween = null;
    });
    const easing = show ? Easing.Power.Out(2) : Easing.Power.In(3);
    let tweenId = -1;
    let listMax = 0;
    ranges.forEach((range, rangeIndex) => {
      const label = range.querySelector('.range__label');
      const track = range.querySelector('.range__track-line');
      const handle = range.querySelector('.range__handle');
      const list = range.querySelectorAll('.range__list div');
      const delay = rangeIndex * (show ? 120 : 100);
      label.style.opacity = show ? 0 : 1;
      track.style.opacity = show ? 0 : 1;
      handle.style.opacity = show ? 0 : 1;
      handle.style.pointerEvents = show ? 'all' : 'none';
      this.tweens[type][tweenId++] = new Tween({
        delay: show ? delay : delay,
        duration: 400,
        easing: easing,
        onUpdate: tween => {
          const translate = show ? 1 - tween.value : tween.value;
          const opacity = show ? tween.value : 1 - tween.value;
          label.style.transform = `translate3d(0, ${translate}em, 0)`;
          label.style.opacity = opacity;
        }
      });
      this.tweens[type][tweenId++] = new Tween({
        delay: show ? delay + 100 : delay,
        duration: 400,
        easing: easing,
        onUpdate: tween => {
          const translate = show ? 1 - tween.value : tween.value;
          const scale = show ? tween.value : 1 - tween.value;
          const opacity = scale;
          track.style.transform = `translate3d(0, ${translate}em, 0) scale3d(${scale}, 1, 1)`;
          track.style.opacity = opacity;
        }
      });
      this.tweens[type][tweenId++] = new Tween({
        delay: show ? delay + 100 : delay,
        duration: 400,
        easing: easing,
        onUpdate: tween => {
          const translate = show ? 1 - tween.value : tween.value;
          const opacity = 1 - translate;
          const scale = 0.5 + opacity * 0.5;
          handle.style.transform = `translate3d(0, ${translate}em, 0) scale3d(${scale}, ${scale}, ${scale})`;
          handle.style.opacity = opacity;
        }
      });
      list.forEach((listItem, labelIndex) => {
        listItem.style.opacity = show ? 0 : 1;
        this.tweens[type][tweenId++] = new Tween({
          delay: show ? delay + 200 + labelIndex * 50 : delay,
          duration: 400,
          easing: easing,
          onUpdate: tween => {
            const translate = show ? 1 - tween.value : tween.value;
            const opacity = show ? tween.value : 1 - tween.value;
            listItem.style.transform = `translate3d(0, ${translate}em, 0)`;
            listItem.style.opacity = opacity;
          }
        });
      });
      listMax = list.length > listMax ? list.length - 1 : listMax;
      range.style.opacity = 1;
    });
    this.durations[type] = show ? (ranges.length - 1) * 100 + 200 + listMax * 50 + 400 : (ranges.length - 1) * 100 + 400;
    setTimeout(() => this.activeTransitions--, this.durations[type]);
  }
  title(show) {
    this.activeTransitions++;
    const title = this.game.dom.texts.title;
    if (title.querySelector('span i') === null) title.querySelectorAll('span').forEach(span => this.splitLetters(span));
    const letters = title.querySelectorAll('i');
    this.flipLetters('title', letters, show);
    title.style.opacity = 1;
    const note = this.game.dom.texts.note;
    note.style.opacity = 1;
    this.tweens.title[letters.length] = new Tween({
      target: note.style,
      easing: Easing.Sine.InOut(),
      duration: show ? 800 : 400,
      yoyo: show ? true : null,
      from: {
        opacity: show ? 0 : parseFloat(getComputedStyle(note).opacity)
      },
      to: {
        opacity: show ? 1 : 0
      }
    });
    setTimeout(() => this.activeTransitions--, this.durations.title);
  }
  timer(show) {
    this.activeTransitions++;
    const timer = this.game.dom.texts.timer;
    timer.style.opacity = 0;
    this.game.timer.convert();
    this.game.timer.setText();
    this.splitLetters(timer);
    const letters = timer.querySelectorAll('i');
    this.flipLetters('timer', letters, show);
    timer.style.opacity = 1;
    setTimeout(() => this.activeTransitions--, this.durations.timer);
  }
  splitLetters(element) {
    const text = element.innerHTML;
    element.innerHTML = '';
    text.split('').forEach(letter => {
      const i = document.createElement('i');
      i.innerHTML = letter;
      element.appendChild(i);
    });
  }
  flipLetters(type, letters, show) {
    try {
      this.tweens[type].forEach(tween => tween.stop());
    } catch (e) {}
    letters.forEach((letter, index) => {
      letter.style.opacity = show ? 0 : 1;
      this.tweens[type][index] = new Tween({
        easing: Easing.Sine.Out(),
        duration: show ? 800 : 400,
        delay: index * 50,
        onUpdate: tween => {
          const rotation = show ? (1 - tween.value) * -80 : tween.value * 80;
          letter.style.transform = `rotate3d(0, 1, 0, ${rotation}deg)`;
          letter.style.opacity = show ? tween.value : 1 - tween.value;
        }
      });
    });
    this.durations[type] = (letters.length - 1) * 50 + (show ? 800 : 400);
  }
}
class Timer extends Animation {
  constructor(game) {
    super(false);
    this.game = game;
    this.reset();
  }
  start(continueGame) {
    this.startTime = continueGame ? Date.now() - this.deltaTime : Date.now();
    this.deltaTime = 0;
    this.converted = this.convert();
    super.start();
  }
  reset() {
    this.startTime = 0;
    this.currentTime = 0;
    this.deltaTime = 0;
    this.converted = '0:00';
  }
  stop() {
    this.currentTime = Date.now();
    this.deltaTime = this.currentTime - this.startTime;
    this.convert();
    super.stop();
    return {
      time: this.converted,
      millis: this.deltaTime
    };
  }
  update() {
    const old = this.converted;
    this.currentTime = Date.now();
    this.deltaTime = this.currentTime - this.startTime;
    this.convert();
    if (this.converted != old) {
      if (this.deltaTime <= 126) localStorage.setItem('theCube_time', this.deltaTime);
      this.setText();
    }
  }
  convert() {
    const seconds = parseInt(this.deltaTime / 1000 % 60);
    const minutes = parseInt(this.deltaTime / (1000 * 60));
    this.converted = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
  setText() {
    this.game.dom.texts.timer.innerHTML = this.converted;
  }
}
class Range {
  constructor(name, options) {
    options = Object.assign({
      range: [0, 1],
      value: 0,
      step: 0,
      onUpdate: () => {},
      onComplete: () => {}
    }, options || {});
    this.element = document.querySelector('.range[name="' + name + '"]');
    this.track = this.element.querySelector('.range__track');
    this.handle = this.element.querySelector('.range__handle');
    this.list = [].slice.call(this.element.querySelectorAll('.range__list div'));
    this.value = options.value;
    this.min = options.range[0];
    this.max = options.range[1];
    this.step = options.step;
    this.onUpdate = options.onUpdate;
    this.onComplete = options.onComplete;
    this.setValue(this.value);
    this.initDraggable();
  }
  setValue(value) {
    this.value = this.round(this.limitValue(value));
    this.setHandlePosition();
  }
  initDraggable() {
    let current;
    this.draggable = new Draggable(this.handle, {
      calcDelta: true
    });
    this.draggable.onDragStart = position => {
      current = this.positionFromValue(this.value);
      this.handle.style.left = current + 'px';
    };
    this.draggable.onDragMove = position => {
      current = this.limitPosition(current + position.delta.x);
      this.value = this.round(this.valueFromPosition(current));
      this.setHandlePosition();
      this.onUpdate(this.value);
    };
    this.draggable.onDragEnd = position => {
      this.onComplete(this.value);
    };
  }
  round(value) {
    if (this.step < 1) return value;
    return Math.round((value - this.min) / this.step) * this.step + this.min;
  }
  limitValue(value) {
    const max = Math.max(this.max, this.min);
    const min = Math.min(this.max, this.min);
    return Math.min(Math.max(value, min), max);
  }
  limitPosition(position) {
    return Math.min(Math.max(position, 0), this.track.offsetWidth);
  }
  percentsFromValue(value) {
    return (value - this.min) / (this.max - this.min);
  }
  valueFromPosition(position) {
    return this.min + (this.max - this.min) * (position / this.track.offsetWidth);
  }
  positionFromValue(value) {
    return this.percentsFromValue(value) * this.track.offsetWidth;
  }
  setHandlePosition() {
    this.handle.style.left = this.percentsFromValue(this.value) * 100 + '%';
  }
}
class Preferences {
  constructor(game) {
    this.game = game;
  }
  init() {
    this.ranges = {
      size: new Range('size', {
        value: this.game.cube.size,
        range: [2, 5],
        step: 1,
        onUpdate: value => {
          this.game.cube.size = value;
          this.game.preferences.ranges.scramble.list.forEach((item, i) => {
            item.innerHTML = this.game.scrambler.scrambleLength[this.game.cube.size][i];
          });
        },
        onComplete: () => this.game.storage.savePreferences()
      }),
      flip: new Range('flip', {
        value: this.game.controls.flipConfig,
        range: [0, 2],
        step: 1,
        onUpdate: value => {
          this.game.controls.flipConfig = value;
        },
        onComplete: () => this.game.storage.savePreferences()
      }),
      scramble: new Range('scramble', {
        value: this.game.scrambler.dificulty,
        range: [0, 2],
        step: 1,
        onUpdate: value => {
          this.game.scrambler.dificulty = value;
        },
        onComplete: () => this.game.storage.savePreferences()
      }),
      fov: new Range('fov', {
        value: this.game.world.fov,
        range: [2, 45],
        onUpdate: value => {
          this.game.world.fov = value;
          this.game.world.resize();
        },
        onComplete: () => this.game.storage.savePreferences()
      }),
      theme: new Range('theme', {
        value: {
          cube: 0,
          erno: 1,
          dust: 2,
          camo: 3,
          rain: 4
        }[this.game.themes.theme],
        range: [0, 4],
        step: 1,
        onUpdate: value => {
          const theme = ['cube', 'erno', 'dust', 'camo', 'rain'][value];
          this.game.themes.setTheme(theme);
        },
        onComplete: () => this.game.storage.savePreferences()
      }),
      hue: new Range('hue', {
        value: 0,
        range: [0, 360],
        onUpdate: value => this.game.themeEditor.updateHSL(),
        onComplete: () => this.game.storage.savePreferences()
      }),
      saturation: new Range('saturation', {
        value: 100,
        range: [0, 100],
        onUpdate: value => this.game.themeEditor.updateHSL(),
        onComplete: () => this.game.storage.savePreferences()
      }),
      lightness: new Range('lightness', {
        value: 50,
        range: [0, 100],
        onUpdate: value => this.game.themeEditor.updateHSL(),
        onComplete: () => this.game.storage.savePreferences()
      })
    };
    this.ranges.scramble.list.forEach((item, i) => {
      item.innerHTML = this.game.scrambler.scrambleLength[this.game.cube.size][i];
    });
  }
}
class Confetti {
  constructor(game) {
    this.game = game;
    this.started = 0;
    this.options = {
      speed: {
        min: 0.0011,
        max: 0.0022
      },
      revolution: {
        min: 0.01,
        max: 0.05
      },
      size: {
        min: 0.1,
        max: 0.15
      },
      colors: [0x41aac8, 0x82ca38, 0xffef48, 0xef3923, 0xff8c0a]
    };
    this.geometry = new THREE.PlaneGeometry(1, 1);
    this.material = new THREE.MeshLambertMaterial({
      side: THREE.DoubleSide
    });
    this.holders = [new ConfettiStage(this.game, this, 1, 20), new ConfettiStage(this.game, this, -1, 30)];
  }
  start() {
    if (this.started > 0) return;
    this.holders.forEach(holder => {
      this.game.world.scene.add(holder.holder);
      holder.start();
      this.started++;
    });
  }
  stop() {
    if (this.started == 0) return;
    this.holders.forEach(holder => {
      holder.stop(() => {
        this.game.world.scene.remove(holder.holder);
        this.started--;
      });
    });
  }
  updateColors(colors) {
    this.holders.forEach(holder => {
      holder.options.colors.forEach((color, index) => {
        holder.options.colors[index] = colors[['D', 'F', 'R', 'B', 'L'][index]];
      });
    });
  }
}
class ConfettiStage extends Animation {
  constructor(game, parent, distance, count) {
    super(false);
    this.game = game;
    this.parent = parent;
    this.distanceFromCube = distance;
    this.count = count;
    this.particles = [];
    this.holder = new THREE.Object3D();
    this.holder.rotation.copy(this.game.world.camera.rotation);
    this.object = new THREE.Object3D();
    this.holder.add(this.object);
    this.resizeViewport = this.resizeViewport.bind(this);
    this.game.world.onResize.push(this.resizeViewport);
    this.resizeViewport();
    this.geometry = this.parent.geometry;
    this.material = this.parent.material;
    this.options = this.parent.options;
    let i = this.count;
    while (i--) this.particles.push(new Particle(this));
  }
  start() {
    this.time = performance.now();
    this.playing = true;
    let i = this.count;
    while (i--) this.particles[i].reset();
    super.start();
  }
  stop(callback) {
    this.playing = false;
    this.completed = 0;
    this.callback = callback;
  }
  reset() {
    super.stop();
    this.callback();
  }
  update() {
    const now = performance.now();
    const delta = now - this.time;
    this.time = now;
    let i = this.count;
    while (i--) if (!this.particles[i].completed) this.particles[i].update(delta);
    if (!this.playing && this.completed == this.count) this.reset();
  }
  resizeViewport() {
    const fovRad = this.game.world.camera.fov * THREE.Math.DEG2RAD;
    this.height = 2 * Math.tan(fovRad / 2) * (this.game.world.camera.position.length() - this.distanceFromCube);
    this.width = this.height * this.game.world.camera.aspect;
    const scale = 1 / this.game.transition.data.cameraZoom;
    this.width *= scale;
    this.height *= scale;
    this.object.position.z = this.distanceFromCube;
    this.object.position.y = this.height / 2;
  }
}
class Particle {
  constructor(confetti) {
    this.confetti = confetti;
    this.options = this.confetti.options;
    this.velocity = new THREE.Vector3();
    this.force = new THREE.Vector3();
    this.mesh = new THREE.Mesh(this.confetti.geometry, this.confetti.material.clone());
    this.confetti.object.add(this.mesh);
    this.size = THREE.Math.randFloat(this.options.size.min, this.options.size.max);
    this.mesh.scale.set(this.size, this.size, this.size);
    return this;
  }
  reset(randomHeight = true) {
    this.completed = false;
    this.color = new THREE.Color(this.options.colors[Math.floor(Math.random() * this.options.colors.length)]);
    this.mesh.material.color.set(this.color);
    this.speed = THREE.Math.randFloat(this.options.speed.min, this.options.speed.max) * -1;
    this.mesh.position.x = THREE.Math.randFloat(-this.confetti.width / 2, this.confetti.width / 2);
    this.mesh.position.y = randomHeight ? THREE.Math.randFloat(this.size, this.confetti.height + this.size) : this.size;
    this.revolutionSpeed = THREE.Math.randFloat(this.options.revolution.min, this.options.revolution.max);
    this.revolutionAxis = ['x', 'y', 'z'][Math.floor(Math.random() * 3)];
    this.mesh.rotation.set(Math.random() * Math.PI / 3, Math.random() * Math.PI / 3, Math.random() * Math.PI / 3);
  }
  stop() {
    this.completed = true;
    this.confetti.completed++;
  }
  update(delta) {
    this.mesh.position.y += this.speed * delta;
    this.mesh.rotation[this.revolutionAxis] += this.revolutionSpeed;
    if (this.mesh.position.y < -this.confetti.height - this.size) this.confetti.playing ? this.reset(false) : this.stop();
  }
}
class Scores {
  constructor(game) {
    this.game = game;
    this.data = {
      2: {
        scores: [],
        solves: 0,
        best: 0,
        worst: 0
      },
      3: {
        scores: [],
        solves: 0,
        best: 0,
        worst: 0
      },
      4: {
        scores: [],
        solves: 0,
        best: 0,
        worst: 0
      },
      5: {
        scores: [],
        solves: 0,
        best: 0,
        worst: 0
      }
    };
  }
  addScore(time) {
    const data = this.data[this.game.cube.sizeGenerated];
    data.scores.push(time);
    data.solves++;
    if (data.scores.lenght > 100) data.scores.shift();
    let bestTime = false;
    if (time < data.best || data.best === 0) {
      data.best = time;
      bestTime = true;
    }
    if (time > data.worst) data.worst = time;
    this.game.storage.saveScores();
    return bestTime;
  }
  calcStats() {
    const s = this.game.cube.sizeGenerated;
    const data = this.data[s];
    this.setStat('cube-size', `${s}<i>x</i>${s}<i>x</i>${s}`);
    this.setStat('total-solves', data.solves);
    this.setStat('best-time', this.convertTime(data.best));
    this.setStat('worst-time', this.convertTime(data.worst));
    this.setStat('average-5', this.getAverage(5));
    this.setStat('average-12', this.getAverage(12));
    this.setStat('average-25', this.getAverage(25));
  }
  setStat(name, value) {
    if (value === 0) value = '-';
    this.game.dom.stats.querySelector(`.stats[name="${name}"] b`).innerHTML = value;
  }
  getAverage(count) {
    const data = this.data[this.game.cube.sizeGenerated];
    if (data.scores.length < count) return 0;
    return this.convertTime(data.scores.slice(-count).reduce((a, b) => a + b, 0) / count);
  }
  convertTime(time) {
    if (time <= 0) return 0;
    const seconds = parseInt(time / 1000 % 60);
    const minutes = parseInt(time / (1000 * 60));
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
}
class Storage {
  constructor(game) {
    this.game = game;
    const userVersion = localStorage.getItem('theCube_version');
    if (!userVersion || userVersion !== window.gameVersion) {
      this.clearGame();
      this.clearPreferences();
      this.migrateScores();
      localStorage.setItem('theCube_version', window.gameVersion);
    }
  }
  init() {
    this.loadPreferences();
    this.loadScores();
  }
  loadGame() {
    try {
      const gameInProgress = localStorage.getItem('theCube_playing') === 'true';
      if (!gameInProgress) throw new Error();
      const gameCubeData = JSON.parse(localStorage.getItem('theCube_savedState'));
      const gameTime = parseInt(localStorage.getItem('theCube_time'));
      if (!gameCubeData || gameTime === null) throw new Error();
      if (gameCubeData.size !== this.game.cube.sizeGenerated) throw new Error();
      this.game.cube.loadFromData(gameCubeData);
      this.game.timer.deltaTime = gameTime;
      this.game.saved = true;
    } catch (e) {
      this.game.saved = false;
    }
  }
  saveGame() {
    const gameInProgress = true;
    const gameCubeData = {
      names: [],
      positions: [],
      rotations: []
    };
    const gameTime = this.game.timer.deltaTime;
    gameCubeData.size = this.game.cube.sizeGenerated;
    this.game.cube.pieces.forEach(piece => {
      gameCubeData.names.push(piece.name);
      gameCubeData.positions.push(piece.position);
      gameCubeData.rotations.push(piece.rotation.toVector3());
    });
    localStorage.setItem('theCube_playing', gameInProgress);
    localStorage.setItem('theCube_savedState', JSON.stringify(gameCubeData));
    localStorage.setItem('theCube_time', gameTime);
  }
  clearGame() {
    localStorage.removeItem('theCube_playing');
    localStorage.removeItem('theCube_savedState');
    localStorage.removeItem('theCube_time');
  }
  loadScores() {
    try {
      const scoresData = JSON.parse(localStorage.getItem('theCube_scores'));
      if (!scoresData) throw new Error();
      this.game.scores.data = scoresData;
    } catch (e) {}
  }
  saveScores() {
    const scoresData = this.game.scores.data;
    localStorage.setItem('theCube_scores', JSON.stringify(scoresData));
  }
  clearScores() {
    localStorage.removeItem('theCube_scores');
  }
  migrateScores() {
    try {
      const scoresData = JSON.parse(localStorage.getItem('theCube_scoresData'));
      const scoresBest = parseInt(localStorage.getItem('theCube_scoresBest'));
      const scoresWorst = parseInt(localStorage.getItem('theCube_scoresWorst'));
      const scoresSolves = parseInt(localStorage.getItem('theCube_scoresSolves'));
      if (!scoresData || !scoresBest || !scoresSolves || !scoresWorst) return false;
      this.game.scores.data[3].scores = scoresData;
      this.game.scores.data[3].best = scoresBest;
      this.game.scores.data[3].solves = scoresSolves;
      this.game.scores.data[3].worst = scoresWorst;
      localStorage.removeItem('theCube_scoresData');
      localStorage.removeItem('theCube_scoresBest');
      localStorage.removeItem('theCube_scoresWorst');
      localStorage.removeItem('theCube_scoresSolves');
    } catch (e) {}
  }
  loadPreferences() {
    try {
      const preferences = JSON.parse(localStorage.getItem('theCube_preferences'));
      if (!preferences) throw new Error();
      this.game.cube.size = parseInt(preferences.cubeSize);
      this.game.controls.flipConfig = parseInt(preferences.flipConfig);
      this.game.scrambler.dificulty = parseInt(preferences.dificulty);
      this.game.world.fov = parseFloat(preferences.fov);
      this.game.world.resize();
      this.game.themes.colors = preferences.colors;
      this.game.themes.setTheme(preferences.theme);
      return true;
    } catch (e) {
      this.game.cube.size = 3;
      this.game.controls.flipConfig = 0;
      this.game.scrambler.dificulty = 1;
      this.game.world.fov = 10;
      this.game.world.resize();
      this.game.themes.setTheme('cube');
      this.savePreferences();
      return false;
    }
  }
  savePreferences() {
    const preferences = {
      cubeSize: this.game.cube.size,
      flipConfig: this.game.controls.flipConfig,
      dificulty: this.game.scrambler.dificulty,
      fov: this.game.world.fov,
      theme: this.game.themes.theme,
      colors: this.game.themes.colors
    };
    localStorage.setItem('theCube_preferences', JSON.stringify(preferences));
  }
  clearPreferences() {
    localStorage.removeItem('theCube_preferences');
  }
}
class Themes {
  constructor(game) {
    this.game = game;
    this.theme = null;
    this.defaults = {
      cube: {
        U: 0xfff7ff,
        // white
        D: 0xffef48,
        // yellow
        F: 0xef3923,
        // red
        R: 0x41aac8,
        // blue
        B: 0xff8c0a,
        // orange
        L: 0x82ca38,
        // green
        P: 0x08101a,
        // piece
        G: 0xd1d5db // background
      },
      erno: {
        U: 0xffffff,
        D: 0xffd500,
        F: 0xc41e3a,
        R: 0x0051ba,
        B: 0xff5800,
        L: 0x009e60,
        P: 0x08101a,
        G: 0x8abdff
      },
      dust: {
        U: 0xfff6eb,
        D: 0xe7c48d,
        F: 0x8f253e,
        R: 0x607e69,
        B: 0xbe6f62,
        L: 0x849f5d,
        P: 0x08101a,
        G: 0xE7C48D
      },
      camo: {
        U: 0xfff6eb,
        D: 0xbfb672,
        F: 0x37241c,
        R: 0x718456,
        B: 0x805831,
        L: 0x37431d,
        P: 0x08101a,
        G: 0xBFB672
      },
      rain: {
        U: 0xfafaff,
        D: 0xedb92d,
        F: 0xce2135,
        R: 0x449a89,
        B: 0xec582f,
        L: 0xa3a947,
        P: 0x08101a,
        G: 0x87b9ac
      }
    };
    this.colors = JSON.parse(JSON.stringify(this.defaults));
  }
  getColors() {
    return this.colors[this.theme];
  }
  setTheme(theme = false, force = false) {
    if (theme === this.theme && force === false) return;
    if (theme !== false) this.theme = theme;
    const colors = this.getColors();
    this.game.dom.prefs.querySelectorAll('.range__handle div').forEach(range => {
      range.style.background = '#' + colors.R.toString(16).padStart(6, '0');
    });
    this.game.cube.updateColors(colors);
    this.game.confetti.updateColors(colors);

    // this.game.dom.back.style.background = '#' + colors.G.toString(16).padStart(6, '0');
    this.game.dom.back.style.background = 'transparent';
  }
}
class ThemeEditor {
  constructor(game) {
    this.game = game;
    this.editColor = 'R';
    this.getPieceColor = this.getPieceColor.bind(this);
  }
  colorFromHSL(h, s, l) {
    h = Math.round(h);
    s = Math.round(s);
    l = Math.round(l);
    return new THREE.Color(`hsl(${h}, ${s}%, ${l}%)`);
  }
  setHSL(color = null, animate = false) {
    this.editColor = color === null ? 'R' : color;
    const hsl = new THREE.Color(this.game.themes.getColors()[this.editColor]);
    const {
      h,
      s,
      l
    } = hsl.getHSL(hsl);
    const {
      hue,
      saturation,
      lightness
    } = this.game.preferences.ranges;
    if (animate) {
      const ho = hue.value / 360;
      const so = saturation.value / 100;
      const lo = lightness.value / 100;
      const colorOld = this.colorFromHSL(hue.value, saturation.value, lightness.value);
      if (this.tweenHSL) this.tweenHSL.stop();
      this.tweenHSL = new Tween({
        duration: 200,
        easing: Easing.Sine.Out(),
        onUpdate: tween => {
          hue.setValue((ho + (h - ho) * tween.value) * 360);
          saturation.setValue((so + (s - so) * tween.value) * 100);
          lightness.setValue((lo + (l - lo) * tween.value) * 100);
          const colorTween = colorOld.clone().lerp(hsl, tween.value);
          const colorTweenStyle = colorTween.getStyle();
          const colorTweenHex = colorTween.getHSL(colorTween);
          hue.handle.style.color = colorTweenStyle;
          saturation.handle.style.color = colorTweenStyle;
          lightness.handle.style.color = colorTweenStyle;
          saturation.track.style.color = this.colorFromHSL(colorTweenHex.h * 360, 100, 50).getStyle();
          lightness.track.style.color = this.colorFromHSL(colorTweenHex.h * 360, colorTweenHex.s * 100, 50).getStyle();
          this.game.dom.theme.style.display = 'none';
          this.game.dom.theme.offsetHeight;
          this.game.dom.theme.style.display = '';
        },
        onComplete: () => {
          this.updateHSL();
          this.game.storage.savePreferences();
        }
      });
    } else {
      hue.setValue(h * 360);
      saturation.setValue(s * 100);
      lightness.setValue(l * 100);
      this.updateHSL();
      this.game.storage.savePreferences();
    }
  }
  updateHSL() {
    const {
      hue,
      saturation,
      lightness
    } = this.game.preferences.ranges;
    const h = hue.value;
    const s = saturation.value;
    const l = lightness.value;
    const color = this.colorFromHSL(h, s, l).getStyle();
    hue.handle.style.color = color;
    saturation.handle.style.color = color;
    lightness.handle.style.color = color;
    saturation.track.style.color = this.colorFromHSL(h, 100, 50).getStyle();
    lightness.track.style.color = this.colorFromHSL(h, s, 50).getStyle();
    this.game.dom.theme.style.display = 'none';
    this.game.dom.theme.offsetHeight;
    this.game.dom.theme.style.display = '';
    const theme = this.game.themes.theme;
    this.game.themes.colors[theme][this.editColor] = this.colorFromHSL(h, s, l).getHex();
    this.game.themes.setTheme();
  }
  colorPicker(enable) {
    if (enable) {
      this.game.dom.game.addEventListener('click', this.getPieceColor, false);
    } else {
      this.game.dom.game.removeEventListener('click', this.getPieceColor, false);
    }
  }
  getPieceColor(event) {
    const clickEvent = event.touches ? event.touches[0] || event.changedTouches[0] : event;
    const clickPosition = new THREE.Vector2(clickEvent.pageX, clickEvent.pageY);
    let edgeIntersect = this.game.controls.getIntersect(clickPosition, this.game.cube.edges, true);
    let pieceIntersect = this.game.controls.getIntersect(clickPosition, this.game.cube.cubes, true);
    if (edgeIntersect !== false) {
      const edge = edgeIntersect.object;
      const position = edge.parent.localToWorld(edge.position.clone()).sub(this.game.cube.object.position).sub(this.game.cube.animator.position);
      const mainAxis = this.game.controls.getMainAxis(position);
      if (position.multiplyScalar(2).round()[mainAxis] < 1) edgeIntersect = false;
    }
    const name = edgeIntersect ? edgeIntersect.object.name : pieceIntersect ? 'P' : 'G';
    this.setHSL(name, true);
  }
  resetTheme() {
    this.game.themes.colors[this.game.themes.theme] = JSON.parse(JSON.stringify(this.game.themes.defaults[this.game.themes.theme]));
    this.game.themes.setTheme();
    this.setHSL(this.editColor, true);
  }
}
const States = {
  3: {
    checkerboard: {
      names: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      positions: [{
        "x": 1 / 3,
        "y": -1 / 3,
        "z": 1 / 3
      }, {
        "x": -1 / 3,
        "y": 1 / 3,
        "z": 0
      }, {
        "x": 1 / 3,
        "y": -1 / 3,
        "z": -1 / 3
      }, {
        "x": -1 / 3,
        "y": 0,
        "z": -1 / 3
      }, {
        "x": 1 / 3,
        "y": 0,
        "z": 0
      }, {
        "x": -1 / 3,
        "y": 0,
        "z": 1 / 3
      }, {
        "x": 1 / 3,
        "y": 1 / 3,
        "z": 1 / 3
      }, {
        "x": -1 / 3,
        "y": -1 / 3,
        "z": 0
      }, {
        "x": 1 / 3,
        "y": 1 / 3,
        "z": -1 / 3
      }, {
        "x": 0,
        "y": 1 / 3,
        "z": -1 / 3
      }, {
        "x": 0,
        "y": -1 / 3,
        "z": 0
      }, {
        "x": 0,
        "y": 1 / 3,
        "z": 1 / 3
      }, {
        "x": 0,
        "y": 0,
        "z": 1 / 3
      }, {
        "x": 0,
        "y": 0,
        "z": 0
      }, {
        "x": 0,
        "y": 0,
        "z": -1 / 3
      }, {
        "x": 0,
        "y": -1 / 3,
        "z": -1 / 3
      }, {
        "x": 0,
        "y": 1 / 3,
        "z": 0
      }, {
        "x": 0,
        "y": -1 / 3,
        "z": 1 / 3
      }, {
        "x": -1 / 3,
        "y": -1 / 3,
        "z": 1 / 3
      }, {
        "x": 1 / 3,
        "y": 1 / 3,
        "z": 0
      }, {
        "x": -1 / 3,
        "y": -1 / 3,
        "z": -1 / 3
      }, {
        "x": 1 / 3,
        "y": 0,
        "z": -1 / 3
      }, {
        "x": -1 / 3,
        "y": 0,
        "z": 0
      }, {
        "x": 1 / 3,
        "y": 0,
        "z": 1 / 3
      }, {
        "x": -1 / 3,
        "y": 1 / 3,
        "z": 1 / 3
      }, {
        "x": 1 / 3,
        "y": -1 / 3,
        "z": 0
      }, {
        "x": -1 / 3,
        "y": 1 / 3,
        "z": -1 / 3
      }],
      rotations: [{
        "x": -Math.PI,
        "y": 0,
        "z": Math.PI
      }, {
        "x": Math.PI,
        "y": 0,
        "z": 0
      }, {
        "x": -Math.PI,
        "y": 0,
        "z": Math.PI
      }, {
        "x": 0,
        "y": 0,
        "z": 0
      }, {
        "x": 0,
        "y": 0,
        "z": Math.PI
      }, {
        "x": 0,
        "y": 0,
        "z": 0
      }, {
        "x": -Math.PI,
        "y": 0,
        "z": Math.PI
      }, {
        "x": Math.PI,
        "y": 0,
        "z": 0
      }, {
        "x": -Math.PI,
        "y": 0,
        "z": Math.PI
      }, {
        "x": 0,
        "y": 0,
        "z": Math.PI
      }, {
        "x": 0,
        "y": 0,
        "z": 0
      }, {
        "x": 0,
        "y": 0,
        "z": Math.PI
      }, {
        "x": -Math.PI,
        "y": 0,
        "z": 0
      }, {
        "x": Math.PI,
        "y": 0,
        "z": Math.PI
      }, {
        "x": Math.PI,
        "y": 0,
        "z": 0
      }, {
        "x": 0,
        "y": 0,
        "z": Math.PI
      }, {
        "x": 0,
        "y": 0,
        "z": 0
      }, {
        "x": 0,
        "y": 0,
        "z": Math.PI
      }, {
        "x": Math.PI,
        "y": 0,
        "z": Math.PI
      }, {
        "x": -Math.PI,
        "y": 0,
        "z": 0
      }, {
        "x": Math.PI,
        "y": 0,
        "z": Math.PI
      }, {
        "x": 0,
        "y": 0,
        "z": 0
      }, {
        "x": 0,
        "y": 0,
        "z": Math.PI
      }, {
        "x": 0,
        "y": 0,
        "z": 0
      }, {
        "x": Math.PI,
        "y": 0,
        "z": Math.PI
      }, {
        "x": -Math.PI,
        "y": 0,
        "z": 0
      }, {
        "x": Math.PI,
        "y": 0,
        "z": Math.PI
      }],
      size: 3
    }
  }
};
class IconsConverter {
  constructor(options) {
    options = Object.assign({
      tagName: 'icon',
      className: 'icon',
      styles: false,
      icons: {},
      observe: false,
      convert: false
    }, options || {});
    this.tagName = options.tagName;
    this.className = options.className;
    this.icons = options.icons;
    this.svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svgTag.setAttribute('class', this.className);
    if (options.styles) this.addStyles();
    if (options.convert) this.convertAllIcons();
    if (options.observe) {
      const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
      this.observer = new MutationObserver(mutations => {
        this.convertAllIcons();
      });
      this.observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
    return this;
  }
  convertAllIcons() {
    document.querySelectorAll(this.tagName).forEach(icon => {
      this.convertIcon(icon);
    });
  }
  convertIcon(icon) {
    const svgData = this.icons[icon.attributes[0].localName];
    if (typeof svgData === 'undefined') return;
    const svg = this.svgTag.cloneNode(true);
    const viewBox = svgData.viewbox.split(' ');
    svg.setAttributeNS(null, 'viewBox', svgData.viewbox);
    svg.style.width = viewBox[2] / viewBox[3] + 'em';
    svg.style.height = '1em';
    svg.innerHTML = svgData.content;
    icon.parentNode.replaceChild(svg, icon);
  }
  addStyles() {
    const style = document.createElement('style');
    style.innerHTML = `.${this.className} { display: inline-block; font-size: inherit; overflow: visible; vertical-align: -0.125em; preserveAspectRatio: none; }`;
    document.head.appendChild(style);
  }
}
const Icons = new IconsConverter({
  icons: {
    settings: {
      viewbox: '0 0 512 512',
      content: '<path fill="currentColor" d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z" />'
    },
    back: {
      viewbox: '0 0 512 512',
      content: '<path transform="translate(512, 0) scale(-1,1)" fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" />'
    },
    trophy: {
      viewbox: '0 0 576 512',
      content: '<path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 66.5 77.9 131.7 171.9 142.4C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6C498.4 275.6 576 210.3 576 144V88c0-13.3-10.7-24-24-24zM64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-47.5-16.4-77-49.9-77-70.2zm448 0c0 20.2-29.4 53.8-77 70.2 7-25 11.8-53.6 12.8-86.2H512v16zm-127.3 4.7l-39.6 38.6 9.4 54.6c1.7 9.8-8.7 17.2-17.4 12.6l-49-25.8-49 25.8c-8.8 4.6-19.1-2.9-17.4-12.6l9.4-54.6-39.6-38.6c-7.1-6.9-3.2-19 6.7-20.5l54.8-8 24.5-49.6c4.4-8.9 17.1-8.9 21.5 0l24.5 49.6 54.8 8c9.6 1.5 13.5 13.6 6.4 20.5z" />'
    },
    cancel: {
      viewbox: '0 0 352 512',
      content: '<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />'
    },
    theme: {
      viewbox: '0 0 512 512',
      content: '<path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>'
    },
    reset: {
      viewbox: '0 0 512 512',
      content: '<path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z" />'
    },
    trash: {
      viewbox: '0 0 448 512',
      content: '<path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" />'
    }
  },
  convert: true
});
const STATE = {
  Menu: 0,
  Playing: 1,
  Complete: 2,
  Stats: 3,
  Prefs: 4,
  Theme: 5
};
const BUTTONS = {
  Menu: ['stats', 'prefs'],
  Playing: ['back'],
  Complete: [],
  Stats: [],
  Prefs: ['back', 'theme'],
  Theme: ['back', 'reset'],
  None: []
};
const SHOW = true;
const HIDE = false;
class Game {
  constructor() {
    this.dom = {
      ui: document.querySelector('.ui'),
      game: document.querySelector('.ui__game'),
      back: document.querySelector('.ui__background'),
      prefs: document.querySelector('.ui__prefs'),
      theme: document.querySelector('.ui__theme'),
      stats: document.querySelector('.ui__stats'),
      texts: {
        title: document.querySelector('.text--title'),
        note: document.querySelector('.text--note'),
        timer: document.querySelector('.text--timer'),
        complete: document.querySelector('.text--complete'),
        best: document.querySelector('.text--best-time'),
        theme: document.querySelector('.text--theme')
      },
      buttons: {
        prefs: document.querySelector('.btn--prefs'),
        back: document.querySelector('.btn--back'),
        stats: document.querySelector('.btn--stats'),
        reset: document.querySelector('.btn--reset'),
        theme: document.querySelector('.btn--theme')
      }
    };
    this.world = new World(this);
    this.cube = new Cube(this);
    this.controls = new Controls(this);
    this.scrambler = new Scrambler(this);
    this.transition = new Transition(this);
    this.timer = new Timer(this);
    this.preferences = new Preferences(this);
    this.scores = new Scores(this);
    this.storage = new Storage(this);
    this.confetti = new Confetti(this);
    this.themes = new Themes(this);
    this.themeEditor = new ThemeEditor(this);
    this.initActions();
    this.state = STATE.Menu;
    this.newGame = false;
    this.saved = false;
    this.storage.init();
    this.preferences.init();
    this.cube.init();
    this.transition.init();
    this.storage.loadGame();
    this.scores.calcStats();
    setTimeout(() => {
      this.transition.float();
      this.transition.cube(SHOW);
      setTimeout(() => this.transition.title(SHOW), 700);
      setTimeout(() => this.transition.buttons(BUTTONS.Menu, BUTTONS.None), 1000);
    }, 500);
  }
  initActions() {
    let tappedTwice = false;
    this.dom.game.addEventListener('click', event => {
      if (this.transition.activeTransitions > 0) return;
      if (this.state === STATE.Playing) return;
      if (this.state === STATE.Menu) {
        if (!tappedTwice) {
          tappedTwice = true;
          setTimeout(() => tappedTwice = false, 300);
          return false;
        }
        this.game(SHOW);
      } else if (this.state === STATE.Complete) {
        this.complete(HIDE);
      } else if (this.state === STATE.Stats) {
        this.stats(HIDE);
      }
    }, false);
    this.controls.onMove = () => {
      if (this.newGame) {
        this.timer.start(true);
        this.newGame = false;
      }
    };
    this.dom.buttons.back.onclick = event => {
      if (this.transition.activeTransitions > 0) return;
      if (this.state === STATE.Playing) {
        this.game(HIDE);
      } else if (this.state === STATE.Prefs) {
        this.prefs(HIDE);
      } else if (this.state === STATE.Theme) {
        this.theme(HIDE);
      }
    };
    this.dom.buttons.reset.onclick = event => {
      if (this.state === STATE.Theme) {
        this.themeEditor.resetTheme();
      }
    };
    this.dom.buttons.prefs.onclick = event => this.prefs(SHOW);
    this.dom.buttons.theme.onclick = event => this.theme(SHOW);
    this.dom.buttons.stats.onclick = event => this.stats(SHOW);
    this.controls.onSolved = () => this.complete(SHOW);
  }
  game(show) {
    if (show) {
      if (!this.saved) {
        this.scrambler.scramble();
        this.controls.scrambleCube();
        this.newGame = true;
      }
      const duration = this.saved ? 0 : this.scrambler.converted.length * (this.controls.flipSpeeds[0] + 10);
      this.state = STATE.Playing;
      this.saved = true;
      this.transition.buttons(BUTTONS.None, BUTTONS.Menu);
      this.transition.zoom(STATE.Playing, duration);
      this.transition.title(HIDE);
      setTimeout(() => {
        this.transition.timer(SHOW);
        this.transition.buttons(BUTTONS.Playing, BUTTONS.None);
      }, this.transition.durations.zoom - 1000);
      setTimeout(() => {
        this.controls.enable();
        if (!this.newGame) this.timer.start(true);
      }, this.transition.durations.zoom);
    } else {
      this.state = STATE.Menu;
      this.transition.buttons(BUTTONS.Menu, BUTTONS.Playing);
      this.transition.zoom(STATE.Menu, 0);
      this.controls.disable();
      if (!this.newGame) this.timer.stop();
      this.transition.timer(HIDE);
      setTimeout(() => this.transition.title(SHOW), this.transition.durations.zoom - 1000);
      this.playing = false;
      this.controls.disable();
    }
  }
  prefs(show) {
    if (show) {
      if (this.transition.activeTransitions > 0) return;
      this.state = STATE.Prefs;
      this.transition.buttons(BUTTONS.Prefs, BUTTONS.Menu);
      this.transition.title(HIDE);
      this.transition.cube(HIDE);
      setTimeout(() => this.transition.preferences(SHOW), 1000);
    } else {
      this.cube.resize();
      this.state = STATE.Menu;
      this.transition.buttons(BUTTONS.Menu, BUTTONS.Prefs);
      this.transition.preferences(HIDE);
      setTimeout(() => this.transition.cube(SHOW), 500);
      setTimeout(() => this.transition.title(SHOW), 1200);
    }
  }
  theme(show) {
    this.themeEditor.colorPicker(show);
    if (show) {
      if (this.transition.activeTransitions > 0) return;
      this.cube.loadFromData(States['3']['checkerboard']);
      this.themeEditor.setHSL(null, false);
      this.state = STATE.Theme;
      this.transition.buttons(BUTTONS.Theme, BUTTONS.Prefs);
      this.transition.preferences(HIDE);
      setTimeout(() => this.transition.cube(SHOW, true), 500);
      setTimeout(() => this.transition.theming(SHOW), 1000);
    } else {
      this.state = STATE.Prefs;
      this.transition.buttons(BUTTONS.Prefs, BUTTONS.Theme);
      this.transition.cube(HIDE, true);
      this.transition.theming(HIDE);
      setTimeout(() => this.transition.preferences(SHOW), 1000);
      setTimeout(() => {
        const gameCubeData = JSON.parse(localStorage.getItem('theCube_savedState'));
        if (!gameCubeData) {
          this.cube.resize(true);
          return;
        }
        this.cube.loadFromData(gameCubeData);
      }, 1500);
    }
  }
  stats(show) {
    if (show) {
      if (this.transition.activeTransitions > 0) return;
      this.state = STATE.Stats;
      this.transition.buttons(BUTTONS.Stats, BUTTONS.Menu);
      this.transition.title(HIDE);
      this.transition.cube(HIDE);
      setTimeout(() => this.transition.stats(SHOW), 1000);
    } else {
      this.state = STATE.Menu;
      this.transition.buttons(BUTTONS.Menu, BUTTONS.None);
      this.transition.stats(HIDE);
      setTimeout(() => this.transition.cube(SHOW), 500);
      setTimeout(() => this.transition.title(SHOW), 1200);
    }
  }
  complete(show) {
    if (show) {
      this.transition.buttons(BUTTONS.Complete, BUTTONS.Playing);
      this.state = STATE.Complete;
      this.saved = false;
      this.controls.disable();
      this.timer.stop();
      this.storage.clearGame();
      this.bestTime = this.scores.addScore(this.timer.deltaTime);
      this.transition.zoom(STATE.Menu, 0);
      this.transition.elevate(SHOW);
      setTimeout(() => {
        this.transition.complete(SHOW, this.bestTime);
        this.confetti.start();
      }, 1000);
    } else {
      this.state = STATE.Stats;
      this.saved = false;
      this.transition.timer(HIDE);
      this.transition.complete(HIDE, this.bestTime);
      this.transition.cube(HIDE);
      this.timer.reset();
      setTimeout(() => {
        this.cube.reset();
        this.confetti.stop();
        this.transition.stats(SHOW);
        this.transition.elevate(0);
      }, 1000);
      return false;
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/scss/page/services/index.scss":
/*!*******************************************!*\
  !*** ./src/scss/page/services/index.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL3NlcnZpY2VzLXNyY19jLjFqeHUycXdtLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsUUFBUSxTQUFTRCw0Q0FBZSxDQUFDO0VBQ25DRyxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7SUFDZixLQUFLLENBQUNBLEtBQUssQ0FBQztFQUNoQjtFQUNBQyxNQUFNQSxDQUFBLEVBQUc7SUFDTCxvQkFBUUwsZ0RBQUE7TUFBS08sU0FBUyxFQUFDLFdBQVc7TUFBQ0MsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssTUFBTSxJQUFJO1FBQUVBLE1BQU0sRUFBRSxJQUFJLENBQUNMLEtBQUssQ0FBQ0ssTUFBTTtRQUFFQyxNQUFNLEVBQUU7TUFBVSxDQUFFO01BQUNDLE9BQU8sRUFBRSxJQUFJLENBQUNQLEtBQUssQ0FBQ1E7SUFBUSxDQUFNLENBQUM7RUFDMUo7QUFDSjtBQUVBLGlFQUFlWCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYa0I7QUFDekM7QUFDNkM7QUFDTztBQUVwRCxNQUFNYSxTQUFTLFNBQVNaLDRDQUFTLENBQUM7RUFDaENDLFdBQVdBLENBQUNDLEtBQUssRUFBRTtJQUNqQixLQUFLLENBQUNBLEtBQUssQ0FBQztJQUNaLElBQUksQ0FBQ1csS0FBSyxHQUFHO01BQ1RDLFVBQVUsRUFBRSxLQUFLO01BQ2pCQyxJQUFJLEVBQUU7SUFDVixDQUFDO0lBQ0QsSUFBSSxDQUFDQyxLQUFLLGdCQUFHbEIsc0RBQWUsQ0FBQyxDQUFDO0lBQzlCLElBQUksQ0FBQ29CLE1BQU0sZ0JBQUdwQixzREFBZSxDQUFDLENBQUM7RUFDakM7RUFFQXFCLGNBQWNBLENBQUEsRUFBRztJQUViLE1BQU1DLFNBQVMsR0FBRyxDQUVkLHFCQUFxQixFQUNyQixrQ0FBa0MsRUFDbEMsNEJBQTRCLEVBQzVCLHVDQUF1QyxFQUN2Qyw4Q0FBOEMsRUFDOUMsUUFBUSxFQUNSLGlDQUFpQyxFQUNq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QyxZQUFZLEVBQUU7TUFDWmhYLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFO01BQzFHcEksU0FBUyxFQUFFLENBQ1Q7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUM7TUFBRSxDQUFDLEVBQ2pDO1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUU7TUFBRSxDQUFDLEVBQy9CO1FBQUUsR0FBRyxFQUFFLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUM7TUFBRSxDQUFDLEVBQ2xDO1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBQztNQUFFLENBQUMsRUFDaEM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRTtNQUFFLENBQUMsRUFDNUI7UUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsR0FBQztNQUFFLENBQUMsRUFDL0I7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDO01BQUUsQ0FBQyxFQUNoQztRQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUU7TUFBRSxDQUFDLEVBQ2hDO1FBQUUsR0FBRyxFQUFFLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDO01BQUUsQ0FBQyxFQUNqQztRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDO01BQUUsQ0FBQyxFQUMvQjtRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUU7TUFBRSxDQUFDLEVBQzdCO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDO01BQUUsQ0FBQyxFQUM5QjtRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDO01BQUUsQ0FBQyxFQUM1QjtRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUU7TUFBRSxDQUFDLEVBQzFCO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBQztNQUFFLENBQUMsRUFDN0I7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDO01BQUUsQ0FBQyxFQUNoQztRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFO01BQUUsQ0FBQyxFQUM1QjtRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDO01BQUUsQ0FBQyxFQUMvQjtRQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDO01BQUUsQ0FBQyxFQUNsQztRQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUMsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUMsQ0FBQztRQUFFLEdBQUcsRUFBRTtNQUFFLENBQUMsRUFDOUI7UUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDO01BQUUsQ0FBQyxFQUNuQztRQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUMsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFDO01BQUUsQ0FBQyxFQUMvQjtRQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUU7TUFBRSxDQUFDLEVBQzdCO1FBQUUsR0FBRyxFQUFFLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDO01BQUUsQ0FBQyxFQUM5QjtRQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsR0FBQyxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUMsR0FBQztNQUFFLENBQUMsRUFDakM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFDLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQztRQUFFLEdBQUcsRUFBRTtNQUFFLENBQUMsRUFDL0I7UUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUMsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBQztNQUFFLENBQUMsQ0FDbkM7TUFDRHFJLFNBQVMsRUFBRSxDQUNUO1FBQUUsR0FBRyxFQUFFLENBQUN4SyxJQUFJLENBQUMwRCxFQUFFO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUxRCxJQUFJLENBQUMwRDtNQUFJLENBQUMsRUFDeEM7UUFBRSxHQUFHLEVBQUUxRCxJQUFJLENBQUMwRCxFQUFFO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUU7TUFBRSxDQUFDLEVBQ2hDO1FBQUUsR0FBRyxFQUFFLENBQUMxRCxJQUFJLENBQUMwRCxFQUFFO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUxRCxJQUFJLENBQUMwRDtNQUFHLENBQUMsRUFDdkM7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFO01BQUUsQ0FBQyxFQUMxQjtRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUxRCxJQUFJLENBQUMwRDtNQUFHLENBQUMsRUFDaEM7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFO01BQUUsQ0FBQyxFQUMxQjtRQUFFLEdBQUcsRUFBRSxDQUFDMUQsSUFBSSxDQUFDMEQsRUFBRTtRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFMUQsSUFBSSxDQUFDMEQ7TUFBRyxDQUFDLEVBQ3ZDO1FBQUUsR0FBRyxFQUFFMUQsSUFBSSxDQUFDMEQsRUFBRTtRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFO01BQUUsQ0FBQyxFQUNoQztRQUFFLEdBQUcsRUFBRSxDQUFDMUQsSUFBSSxDQUFDMEQsRUFBRTtRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFMUQsSUFBSSxDQUFDMEQ7TUFBRyxDQUFDLEVBQ3ZDO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRTFELElBQUksQ0FBQzBEO01BQUcsQ0FBQyxFQUNoQztRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUU7TUFBRSxDQUFDLEVBQzFCO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRTFELElBQUksQ0FBQzBEO01BQUcsQ0FBQyxFQUNoQztRQUFFLEdBQUcsRUFBRSxDQUFDMUQsSUFBSSxDQUFDMEQsRUFBRTtRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFO01BQUUsQ0FBQyxFQUNqQztRQUFFLEdBQUcsRUFBRTFELElBQUksQ0FBQzBELEVBQUU7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRTFELElBQUksQ0FBQzBEO01BQUcsQ0FBQyxFQUN0QztRQUFFLEdBQUcsRUFBRTFELElBQUksQ0FBQzBELEVBQUU7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRTtNQUFFLENBQUMsRUFDaEM7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFMUQsSUFBSSxDQUFDMEQ7TUFBRyxDQUFDLEVBQ2hDO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRTtNQUFFLENBQUMsRUFDMUI7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFMUQsSUFBSSxDQUFDMEQ7TUFBRyxDQUFDLEVBQ2hDO1FBQUUsR0FBRyxFQUFFMUQsSUFBSSxDQUFDMEQsRUFBRTtRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFMUQsSUFBSSxDQUFDMEQ7TUFBRyxDQUFDLEVBQ3RDO1FBQUUsR0FBRyxFQUFFLENBQUMxRCxJQUFJLENBQUMwRCxFQUFFO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUU7TUFBRSxDQUFDLEVBQ2pDO1FBQUUsR0FBRyxFQUFFMUQsSUFBSSxDQUFDMEQsRUFBRTtRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFMUQsSUFBSSxDQUFDMEQ7TUFBRyxDQUFDLEVBQ3RDO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRTtNQUFFLENBQUMsRUFDMUI7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQUUsR0FBRyxFQUFFMUQsSUFBSSxDQUFDMEQ7TUFBRyxDQUFDLEVBQ2hDO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRTtNQUFFLENBQUMsRUFDMUI7UUFBRSxHQUFHLEVBQUUxRCxJQUFJLENBQUMwRCxFQUFFO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUxRCxJQUFJLENBQUMwRDtNQUFHLENBQUMsRUFDdEM7UUFBRSxHQUFHLEVBQUUsQ0FBQzFELElBQUksQ0FBQzBELEVBQUU7UUFBRSxHQUFHLEVBQUUsQ0FBQztRQUFFLEdBQUcsRUFBRTtNQUFFLENBQUMsRUFDakM7UUFBRSxHQUFHLEVBQUUxRCxJQUFJLENBQUMwRCxFQUFFO1FBQUUsR0FBRyxFQUFFLENBQUM7UUFBRSxHQUFHLEVBQUUxRCxJQUFJLENBQUMwRDtNQUFHLENBQUMsQ0FDdkM7TUFDRHhDLElBQUksRUFBRTtJQUNSO0VBQ0Y7QUFDRixDQUFDO0FBRUQsTUFBTXNnQixjQUFjLENBQUM7RUFFbkJwdkIsV0FBV0EsQ0FBRTJaLE9BQU8sRUFBRztJQUVyQkEsT0FBTyxHQUFHNUYsTUFBTSxDQUFDa0gsTUFBTSxDQUFFO01BQ3ZCb1UsT0FBTyxFQUFFLE1BQU07TUFDZmp2QixTQUFTLEVBQUUsTUFBTTtNQUNqQmt2QixNQUFNLEVBQUUsS0FBSztNQUNiQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ1RDLE9BQU8sRUFBRSxLQUFLO01BQ2R4TCxPQUFPLEVBQUU7SUFDWCxDQUFDLEVBQUVySyxPQUFPLElBQUksQ0FBQyxDQUFFLENBQUM7SUFFbEIsSUFBSSxDQUFDMFYsT0FBTyxHQUFHMVYsT0FBTyxDQUFDMFYsT0FBTztJQUM5QixJQUFJLENBQUNqdkIsU0FBUyxHQUFHdVosT0FBTyxDQUFDdlosU0FBUztJQUNsQyxJQUFJLENBQUNtdkIsS0FBSyxHQUFHNVYsT0FBTyxDQUFDNFYsS0FBSztJQUUxQixJQUFJLENBQUNFLE1BQU0sR0FBR3B1QixRQUFRLENBQUNxdUIsZUFBZSxDQUFFLDRCQUE0QixFQUFFLEtBQU0sQ0FBQztJQUM3RSxJQUFJLENBQUNELE1BQU0sQ0FBQzF0QixZQUFZLENBQUUsT0FBTyxFQUFFLElBQUksQ0FBQzNCLFNBQVUsQ0FBQztJQUVuRCxJQUFLdVosT0FBTyxDQUFDMlYsTUFBTSxFQUFHLElBQUksQ0FBQ0ssU0FBUyxDQUFDLENBQUM7SUFDdEMsSUFBS2hXLE9BQU8sQ0FBQ3FLLE9BQU8sRUFBRyxJQUFJLENBQUM0TCxlQUFlLENBQUMsQ0FBQztJQUU3QyxJQUFLalcsT0FBTyxDQUFDNlYsT0FBTyxFQUFHO01BRXJCLE1BQU1LLGdCQUFnQixHQUFHbnRCLE1BQU0sQ0FBQ210QixnQkFBZ0IsSUFBSW50QixNQUFNLENBQUNvdEIsc0JBQXNCO01BQ2pGLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUlGLGdCQUFnQixDQUFFRyxTQUFTLElBQUk7UUFBRSxJQUFJLENBQUNKLGVBQWUsQ0FBQyxDQUFDO01BQUUsQ0FBRSxDQUFDO01BQ2hGLElBQUksQ0FBQ0csUUFBUSxDQUFDUCxPQUFPLENBQUVudUIsUUFBUSxDQUFDcUcsZUFBZSxFQUFFO1FBQUV1b0IsU0FBUyxFQUFFLElBQUk7UUFBRUMsT0FBTyxFQUFFO01BQUssQ0FBRSxDQUFDO0lBRXZGO0lBRUEsT0FBTyxJQUFJO0VBRWI7RUFFQU4sZUFBZUEsQ0FBQSxFQUFHO0lBRWhCdnVCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUUsSUFBSSxDQUFDK3RCLE9BQVEsQ0FBQyxDQUFDOXRCLE9BQU8sQ0FBRTR1QixJQUFJLElBQUk7TUFBRSxJQUFJLENBQUNDLFdBQVcsQ0FBRUQsSUFBSyxDQUFDO0lBQUUsQ0FBRSxDQUFDO0VBRTVGO0VBRUFDLFdBQVdBLENBQUVELElBQUksRUFBRztJQUVsQixNQUFNRSxPQUFPLEdBQUcsSUFBSSxDQUFDZCxLQUFLLENBQUVZLElBQUksQ0FBQ0csVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLENBQUU7SUFFMUQsSUFBSyxPQUFPRixPQUFPLEtBQUssV0FBVyxFQUFHO0lBRXRDLE1BQU1HLEdBQUcsR0FBRyxJQUFJLENBQUNmLE1BQU0sQ0FBQ2dCLFNBQVMsQ0FBRSxJQUFLLENBQUM7SUFDekMsTUFBTXhyQixPQUFPLEdBQUdvckIsT0FBTyxDQUFDSyxPQUFPLENBQUN0dUIsS0FBSyxDQUFFLEdBQUksQ0FBQztJQUU1Q291QixHQUFHLENBQUNHLGNBQWMsQ0FBRSxJQUFJLEVBQUUsU0FBUyxFQUFFTixPQUFPLENBQUNLLE9BQVEsQ0FBQztJQUN0REYsR0FBRyxDQUFDbndCLEtBQUssQ0FBQ3lELEtBQUssR0FBR21CLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBR0EsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7SUFDaER1ckIsR0FBRyxDQUFDbndCLEtBQUssQ0FBQzBELE1BQU0sR0FBRyxLQUFLO0lBQ3hCeXNCLEdBQUcsQ0FBQzl1QixTQUFTLEdBQUcydUIsT0FBTyxDQUFDTyxPQUFPO0lBRS9CVCxJQUFJLENBQUMzdEIsVUFBVSxDQUFDQyxZQUFZLENBQUUrdEIsR0FBRyxFQUFFTCxJQUFLLENBQUM7RUFFM0M7RUFFQVIsU0FBU0EsQ0FBQSxFQUFHO0lBRVYsTUFBTXR2QixLQUFLLEdBQUdnQixRQUFRLENBQUNsQixhQUFhLENBQUUsT0FBUSxDQUFDO0lBQy9DRSxLQUFLLENBQUNxQixTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUN0QixTQUFTLHlIQUF5SDtJQUM3SmlCLFFBQVEsQ0FBQ3d2QixJQUFJLENBQUN0dUIsV0FBVyxDQUFFbEMsS0FBTSxDQUFDO0VBRXBDO0FBRUY7QUFFQSxNQUFNeXdCLEtBQUssR0FBRyxJQUFJMUIsY0FBYyxDQUFFO0VBRWhDRyxLQUFLLEVBQUU7SUFDTDdxQixRQUFRLEVBQUU7TUFDUmdzQixPQUFPLEVBQUUsYUFBYTtNQUN0QkUsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUNEanNCLElBQUksRUFBRTtNQUNKK3JCLE9BQU8sRUFBRSxhQUFhO01BQ3RCRSxPQUFPLEVBQUU7SUFDWCxDQUFDO0lBQ0R2c0IsTUFBTSxFQUFFO01BQ05xc0IsT0FBTyxFQUFFLGFBQWE7TUFDdEJFLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDREcsTUFBTSxFQUFFO01BQ05MLE9BQU8sRUFBRSxhQUFhO01BQ3RCRSxPQUFPLEVBQUU7SUFDWCxDQUFDO0lBQ0Roc0IsS0FBSyxFQUFFO01BQ0w4ckIsT0FBTyxFQUFFLGFBQWE7TUFDdEJFLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDRC9yQixLQUFLLEVBQUU7TUFDTDZyQixPQUFPLEVBQUUsYUFBYTtNQUN0QkUsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUNESSxLQUFLLEVBQUU7TUFDTE4sT0FBTyxFQUFFLGFBQWE7TUFDdEJFLE9BQU8sRUFBRTtJQUNYO0VBQ0YsQ0FBQztFQUVENU0sT0FBTyxFQUFFO0FBRVgsQ0FBRSxDQUFDO0FBRUgsTUFBTWlOLEtBQUssR0FBRztFQUNaQyxJQUFJLEVBQUUsQ0FBQztFQUNQQyxPQUFPLEVBQUUsQ0FBQztFQUNWQyxRQUFRLEVBQUUsQ0FBQztFQUNYQyxLQUFLLEVBQUUsQ0FBQztFQUNSQyxLQUFLLEVBQUUsQ0FBQztFQUNSQyxLQUFLLEVBQUU7QUFDVCxDQUFDO0FBRUQsTUFBTUMsT0FBTyxHQUFHO0VBQ2ROLElBQUksRUFBRSxDQUFFLE9BQU8sRUFBRSxPQUFPLENBQUU7RUFDMUJDLE9BQU8sRUFBRSxDQUFFLE1BQU0sQ0FBRTtFQUNuQkMsUUFBUSxFQUFFLEVBQUU7RUFDWkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsS0FBSyxFQUFFLENBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBRTtFQUMxQkMsS0FBSyxFQUFFLENBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBRTtFQUMxQkUsSUFBSSxFQUFFO0FBQ1IsQ0FBQztBQUVELE1BQU1DLElBQUksR0FBRyxJQUFJO0FBQ2pCLE1BQU1DLElBQUksR0FBRyxLQUFLO0FBRWxCLE1BQU1qeEIsSUFBSSxDQUFDO0VBRVRWLFdBQVdBLENBQUEsRUFBRztJQUVaLElBQUksQ0FBQ3NNLEdBQUcsR0FBRztNQUNUc2xCLEVBQUUsRUFBRXZ3QixRQUFRLENBQUNPLGFBQWEsQ0FBRSxLQUFNLENBQUM7TUFDbkNnQixJQUFJLEVBQUV2QixRQUFRLENBQUNPLGFBQWEsQ0FBRSxXQUFZLENBQUM7TUFDM0MrQyxJQUFJLEVBQUV0RCxRQUFRLENBQUNPLGFBQWEsQ0FBRSxpQkFBa0IsQ0FBQztNQUNqRDRqQixLQUFLLEVBQUVua0IsUUFBUSxDQUFDTyxhQUFhLENBQUUsWUFBYSxDQUFDO01BQzdDZ0QsS0FBSyxFQUFFdkQsUUFBUSxDQUFDTyxhQUFhLENBQUUsWUFBYSxDQUFDO01BQzdDNmpCLEtBQUssRUFBRXBrQixRQUFRLENBQUNPLGFBQWEsQ0FBRSxZQUFhLENBQUM7TUFDN0Mya0IsS0FBSyxFQUFFO1FBQ0xoaUIsS0FBSyxFQUFFbEQsUUFBUSxDQUFDTyxhQUFhLENBQUUsY0FBZSxDQUFDO1FBQy9Dd2xCLElBQUksRUFBRS9sQixRQUFRLENBQUNPLGFBQWEsQ0FBRSxhQUFjLENBQUM7UUFDN0MrVSxLQUFLLEVBQUV0VixRQUFRLENBQUNPLGFBQWEsQ0FBRSxjQUFlLENBQUM7UUFDL0MyakIsUUFBUSxFQUFFbGtCLFFBQVEsQ0FBQ08sYUFBYSxDQUFFLGlCQUFrQixDQUFDO1FBQ3JEMGpCLElBQUksRUFBRWprQixRQUFRLENBQUNPLGFBQWEsQ0FBRSxrQkFBbUIsQ0FBQztRQUNsRGdELEtBQUssRUFBRXZELFFBQVEsQ0FBQ08sYUFBYSxDQUFFLGNBQWU7TUFDaEQsQ0FBQztNQUNEeWpCLE9BQU8sRUFBRTtRQUNQRyxLQUFLLEVBQUVua0IsUUFBUSxDQUFDTyxhQUFhLENBQUUsYUFBYyxDQUFDO1FBQzlDK0MsSUFBSSxFQUFFdEQsUUFBUSxDQUFDTyxhQUFhLENBQUUsWUFBYSxDQUFDO1FBQzVDNmpCLEtBQUssRUFBRXBrQixRQUFRLENBQUNPLGFBQWEsQ0FBRSxhQUFjLENBQUM7UUFDOUNpRCxLQUFLLEVBQUV4RCxRQUFRLENBQUNPLGFBQWEsQ0FBRSxhQUFjLENBQUM7UUFDOUNnRCxLQUFLLEVBQUV2RCxRQUFRLENBQUNPLGFBQWEsQ0FBRSxhQUFjO01BQy9DO0lBQ0YsQ0FBQztJQUVELElBQUksQ0FBQ3VCLEtBQUssR0FBRyxJQUFJaUosS0FBSyxDQUFFLElBQUssQ0FBQztJQUM5QixJQUFJLENBQUMySixJQUFJLEdBQUcsSUFBSXBCLElBQUksQ0FBRSxJQUFLLENBQUM7SUFDNUIsSUFBSSxDQUFDVSxRQUFRLEdBQUcsSUFBSW1ILFFBQVEsQ0FBRSxJQUFLLENBQUM7SUFDcEMsSUFBSSxDQUFDdUYsU0FBUyxHQUFHLElBQUlxQixTQUFTLENBQUUsSUFBSyxDQUFDO0lBQ3RDLElBQUksQ0FBQ21ILFVBQVUsR0FBRyxJQUFJekYsVUFBVSxDQUFFLElBQUssQ0FBQztJQUN4QyxJQUFJLENBQUNuTyxLQUFLLEdBQUcsSUFBSThRLEtBQUssQ0FBRSxJQUFLLENBQUM7SUFDOUIsSUFBSSxDQUFDalIsV0FBVyxHQUFHLElBQUlxUyxXQUFXLENBQUUsSUFBSyxDQUFDO0lBQzFDLElBQUksQ0FBQ2xDLE1BQU0sR0FBRyxJQUFJcUUsTUFBTSxDQUFFLElBQUssQ0FBQztJQUNoQyxJQUFJLENBQUNwVSxPQUFPLEdBQUcsSUFBSThVLE9BQU8sQ0FBRSxJQUFLLENBQUM7SUFDbEMsSUFBSSxDQUFDbEIsUUFBUSxHQUFHLElBQUlmLFFBQVEsQ0FBRSxJQUFLLENBQUM7SUFDcEMsSUFBSSxDQUFDclQsTUFBTSxHQUFHLElBQUk2VyxNQUFNLENBQUUsSUFBSyxDQUFDO0lBQ2hDLElBQUksQ0FBQzVELFdBQVcsR0FBRyxJQUFJa0UsV0FBVyxDQUFFLElBQUssQ0FBQztJQUUxQyxJQUFJLENBQUNzRSxXQUFXLENBQUMsQ0FBQztJQUVsQixJQUFJLENBQUNqeEIsS0FBSyxHQUFHcXdCLEtBQUssQ0FBQ0MsSUFBSTtJQUN2QixJQUFJLENBQUNZLE9BQU8sR0FBRyxLQUFLO0lBQ3BCLElBQUksQ0FBQ3BiLEtBQUssR0FBRyxLQUFLO0lBRWxCLElBQUksQ0FBQ0UsT0FBTyxDQUFDMUIsSUFBSSxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDc0IsV0FBVyxDQUFDdEIsSUFBSSxDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDYSxJQUFJLENBQUNiLElBQUksQ0FBQyxDQUFDO0lBQ2hCLElBQUksQ0FBQ3FWLFVBQVUsQ0FBQ3JWLElBQUksQ0FBQyxDQUFDO0lBRXRCLElBQUksQ0FBQzBCLE9BQU8sQ0FBQ3NWLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ3ZGLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLENBQUM7SUFFdkIxakIsVUFBVSxDQUFFLE1BQU07TUFFaEIsSUFBSSxDQUFDcW5CLFVBQVUsQ0FBQ3JFLEtBQUssQ0FBQyxDQUFDO01BQ3ZCLElBQUksQ0FBQ3FFLFVBQVUsQ0FBQ3hVLElBQUksQ0FBRTJiLElBQUssQ0FBQztNQUU1Qnh1QixVQUFVLENBQUUsTUFBTSxJQUFJLENBQUNxbkIsVUFBVSxDQUFDaG1CLEtBQUssQ0FBRW10QixJQUFLLENBQUMsRUFBRSxHQUFJLENBQUM7TUFDdER4dUIsVUFBVSxDQUFFLE1BQU0sSUFBSSxDQUFDcW5CLFVBQVUsQ0FBQ2xGLE9BQU8sQ0FBRW1NLE9BQU8sQ0FBQ04sSUFBSSxFQUFFTSxPQUFPLENBQUNDLElBQUssQ0FBQyxFQUFFLElBQUssQ0FBQztJQUVqRixDQUFDLEVBQUUsR0FBSSxDQUFDO0VBRVY7RUFFQUksV0FBV0EsQ0FBQSxFQUFHO0lBRVosSUFBSUUsV0FBVyxHQUFHLEtBQUs7SUFFdkIsSUFBSSxDQUFDemxCLEdBQUcsQ0FBQzFKLElBQUksQ0FBQ2dGLGdCQUFnQixDQUFFLE9BQU8sRUFBRXdULEtBQUssSUFBSTtNQUVoRCxJQUFLLElBQUksQ0FBQ21QLFVBQVUsQ0FBQ3BGLGlCQUFpQixHQUFHLENBQUMsRUFBRztNQUM3QyxJQUFLLElBQUksQ0FBQ3ZrQixLQUFLLEtBQUtxd0IsS0FBSyxDQUFDRSxPQUFPLEVBQUc7TUFFcEMsSUFBSyxJQUFJLENBQUN2d0IsS0FBSyxLQUFLcXdCLEtBQUssQ0FBQ0MsSUFBSSxFQUFHO1FBRS9CLElBQUssQ0FBRWEsV0FBVyxFQUFHO1VBRW5CQSxXQUFXLEdBQUcsSUFBSTtVQUNsQjd1QixVQUFVLENBQUUsTUFBTTZ1QixXQUFXLEdBQUcsS0FBSyxFQUFFLEdBQUksQ0FBQztVQUM1QyxPQUFPLEtBQUs7UUFFZDtRQUVBLElBQUksQ0FBQ252QixJQUFJLENBQUU4dUIsSUFBSyxDQUFDO01BRW5CLENBQUMsTUFBTSxJQUFLLElBQUksQ0FBQzl3QixLQUFLLEtBQUtxd0IsS0FBSyxDQUFDRyxRQUFRLEVBQUc7UUFFMUMsSUFBSSxDQUFDN0wsUUFBUSxDQUFFb00sSUFBSyxDQUFDO01BRXZCLENBQUMsTUFBTSxJQUFLLElBQUksQ0FBQy93QixLQUFLLEtBQUtxd0IsS0FBSyxDQUFDSSxLQUFLLEVBQUc7UUFFdkMsSUFBSSxDQUFDNUwsS0FBSyxDQUFFa00sSUFBSyxDQUFDO01BRXBCO0lBRUYsQ0FBQyxFQUFFLEtBQU0sQ0FBQztJQUVWLElBQUksQ0FBQ3RjLFFBQVEsQ0FBQ2lJLE1BQU0sR0FBRyxNQUFNO01BRTNCLElBQUssSUFBSSxDQUFDd1UsT0FBTyxFQUFHO1FBRWxCLElBQUksQ0FBQ25iLEtBQUssQ0FBQ3pLLEtBQUssQ0FBRSxJQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDNGxCLE9BQU8sR0FBRyxLQUFLO01BRXRCO0lBRUYsQ0FBQztJQUVELElBQUksQ0FBQ3hsQixHQUFHLENBQUMrWSxPQUFPLENBQUMxZ0IsSUFBSSxDQUFDcXRCLE9BQU8sR0FBRzVXLEtBQUssSUFBSTtNQUV2QyxJQUFLLElBQUksQ0FBQ21QLFVBQVUsQ0FBQ3BGLGlCQUFpQixHQUFHLENBQUMsRUFBRztNQUU3QyxJQUFLLElBQUksQ0FBQ3ZrQixLQUFLLEtBQUtxd0IsS0FBSyxDQUFDRSxPQUFPLEVBQUc7UUFFbEMsSUFBSSxDQUFDdnVCLElBQUksQ0FBRSt1QixJQUFLLENBQUM7TUFFbkIsQ0FBQyxNQUFNLElBQUssSUFBSSxDQUFDL3dCLEtBQUssS0FBS3F3QixLQUFLLENBQUNLLEtBQUssRUFBRztRQUV2QyxJQUFJLENBQUM5TCxLQUFLLENBQUVtTSxJQUFLLENBQUM7TUFFcEIsQ0FBQyxNQUFNLElBQUssSUFBSSxDQUFDL3dCLEtBQUssS0FBS3F3QixLQUFLLENBQUNNLEtBQUssRUFBRztRQUV2QyxJQUFJLENBQUMzc0IsS0FBSyxDQUFFK3NCLElBQUssQ0FBQztNQUVwQjtJQUVGLENBQUM7SUFFRCxJQUFJLENBQUNybEIsR0FBRyxDQUFDK1ksT0FBTyxDQUFDeGdCLEtBQUssQ0FBQ210QixPQUFPLEdBQUc1VyxLQUFLLElBQUk7TUFFeEMsSUFBSyxJQUFJLENBQUN4YSxLQUFLLEtBQUtxd0IsS0FBSyxDQUFDTSxLQUFLLEVBQUc7UUFFaEMsSUFBSSxDQUFDbEksV0FBVyxDQUFDNEYsVUFBVSxDQUFDLENBQUM7TUFFL0I7SUFFRixDQUFDO0lBRUQsSUFBSSxDQUFDM2lCLEdBQUcsQ0FBQytZLE9BQU8sQ0FBQ0csS0FBSyxDQUFDd00sT0FBTyxHQUFHNVcsS0FBSyxJQUFJLElBQUksQ0FBQ29LLEtBQUssQ0FBRWtNLElBQUssQ0FBQztJQUU1RCxJQUFJLENBQUNwbEIsR0FBRyxDQUFDK1ksT0FBTyxDQUFDemdCLEtBQUssQ0FBQ290QixPQUFPLEdBQUc1VyxLQUFLLElBQUksSUFBSSxDQUFDeFcsS0FBSyxDQUFFOHNCLElBQUssQ0FBQztJQUU1RCxJQUFJLENBQUNwbEIsR0FBRyxDQUFDK1ksT0FBTyxDQUFDSSxLQUFLLENBQUN1TSxPQUFPLEdBQUc1VyxLQUFLLElBQUksSUFBSSxDQUFDcUssS0FBSyxDQUFFaU0sSUFBSyxDQUFDO0lBRTVELElBQUksQ0FBQ3JjLFFBQVEsQ0FBQ2dJLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ2tJLFFBQVEsQ0FBRW1NLElBQUssQ0FBQztFQUV0RDtFQUVBOXVCLElBQUlBLENBQUU5QixJQUFJLEVBQUc7SUFFWCxJQUFLQSxJQUFJLEVBQUc7TUFFVixJQUFLLENBQUUsSUFBSSxDQUFDNFYsS0FBSyxFQUFHO1FBRWxCLElBQUksQ0FBQ3FMLFNBQVMsQ0FBQ3ZFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQ25JLFFBQVEsQ0FBQ3lNLFlBQVksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQ2dRLE9BQU8sR0FBRyxJQUFJO01BRXJCO01BRUEsTUFBTWxZLFFBQVEsR0FBRyxJQUFJLENBQUNsRCxLQUFLLEdBQUcsQ0FBQyxHQUM3QixJQUFJLENBQUNxTCxTQUFTLENBQUNDLFNBQVMsQ0FBQ3RXLE1BQU0sSUFBSyxJQUFJLENBQUMySixRQUFRLENBQUNzSCxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFFO01BRXhFLElBQUksQ0FBQy9iLEtBQUssR0FBR3F3QixLQUFLLENBQUNFLE9BQU87TUFDMUIsSUFBSSxDQUFDemEsS0FBSyxHQUFHLElBQUk7TUFFakIsSUFBSSxDQUFDNlQsVUFBVSxDQUFDbEYsT0FBTyxDQUFFbU0sT0FBTyxDQUFDQyxJQUFJLEVBQUVELE9BQU8sQ0FBQ04sSUFBSyxDQUFDO01BRXJELElBQUksQ0FBQzNHLFVBQVUsQ0FBQ25GLElBQUksQ0FBRTZMLEtBQUssQ0FBQ0UsT0FBTyxFQUFFdlgsUUFBUyxDQUFDO01BQy9DLElBQUksQ0FBQzJRLFVBQVUsQ0FBQ2htQixLQUFLLENBQUVvdEIsSUFBSyxDQUFDO01BRTdCenVCLFVBQVUsQ0FBRSxNQUFNO1FBRWhCLElBQUksQ0FBQ3FuQixVQUFVLENBQUM1VCxLQUFLLENBQUUrYSxJQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDbkgsVUFBVSxDQUFDbEYsT0FBTyxDQUFFbU0sT0FBTyxDQUFDTCxPQUFPLEVBQUVLLE9BQU8sQ0FBQ0MsSUFBSyxDQUFDO01BRTFELENBQUMsRUFBRSxJQUFJLENBQUNsSCxVQUFVLENBQUN2RixTQUFTLENBQUNJLElBQUksR0FBRyxJQUFLLENBQUM7TUFFMUNsaUIsVUFBVSxDQUFFLE1BQU07UUFFaEIsSUFBSSxDQUFDbVMsUUFBUSxDQUFDd0csTUFBTSxDQUFDLENBQUM7UUFDdEIsSUFBSyxDQUFFLElBQUksQ0FBQ2lXLE9BQU8sRUFBRyxJQUFJLENBQUNuYixLQUFLLENBQUN6SyxLQUFLLENBQUUsSUFBSyxDQUFDO01BRWhELENBQUMsRUFBRSxJQUFJLENBQUNxZSxVQUFVLENBQUN2RixTQUFTLENBQUNJLElBQUssQ0FBQztJQUVyQyxDQUFDLE1BQU07TUFFTCxJQUFJLENBQUN4a0IsS0FBSyxHQUFHcXdCLEtBQUssQ0FBQ0MsSUFBSTtNQUV2QixJQUFJLENBQUMzRyxVQUFVLENBQUNsRixPQUFPLENBQUVtTSxPQUFPLENBQUNOLElBQUksRUFBRU0sT0FBTyxDQUFDTCxPQUFRLENBQUM7TUFFeEQsSUFBSSxDQUFDNUcsVUFBVSxDQUFDbkYsSUFBSSxDQUFFNkwsS0FBSyxDQUFDQyxJQUFJLEVBQUUsQ0FBRSxDQUFDO01BRXJDLElBQUksQ0FBQzdiLFFBQVEsQ0FBQ3lHLE9BQU8sQ0FBQyxDQUFDO01BQ3ZCLElBQUssQ0FBRSxJQUFJLENBQUNnVyxPQUFPLEVBQUcsSUFBSSxDQUFDbmIsS0FBSyxDQUFDeEssSUFBSSxDQUFDLENBQUM7TUFDdkMsSUFBSSxDQUFDb2UsVUFBVSxDQUFDNVQsS0FBSyxDQUFFZ2IsSUFBSyxDQUFDO01BRTdCenVCLFVBQVUsQ0FBRSxNQUFNLElBQUksQ0FBQ3FuQixVQUFVLENBQUNobUIsS0FBSyxDQUFFbXRCLElBQUssQ0FBQyxFQUFFLElBQUksQ0FBQ25ILFVBQVUsQ0FBQ3ZGLFNBQVMsQ0FBQ0ksSUFBSSxHQUFHLElBQUssQ0FBQztNQUV4RixJQUFJLENBQUNpRixPQUFPLEdBQUcsS0FBSztNQUNwQixJQUFJLENBQUNoVixRQUFRLENBQUN5RyxPQUFPLENBQUMsQ0FBQztJQUV6QjtFQUVGO0VBRUEwSixLQUFLQSxDQUFFMWtCLElBQUksRUFBRztJQUVaLElBQUtBLElBQUksRUFBRztNQUVWLElBQUssSUFBSSxDQUFDeXBCLFVBQVUsQ0FBQ3BGLGlCQUFpQixHQUFHLENBQUMsRUFBRztNQUU3QyxJQUFJLENBQUN2a0IsS0FBSyxHQUFHcXdCLEtBQUssQ0FBQ0ssS0FBSztNQUV4QixJQUFJLENBQUMvRyxVQUFVLENBQUNsRixPQUFPLENBQUVtTSxPQUFPLENBQUNGLEtBQUssRUFBRUUsT0FBTyxDQUFDTixJQUFLLENBQUM7TUFFdEQsSUFBSSxDQUFDM0csVUFBVSxDQUFDaG1CLEtBQUssQ0FBRW90QixJQUFLLENBQUM7TUFDN0IsSUFBSSxDQUFDcEgsVUFBVSxDQUFDeFUsSUFBSSxDQUFFNGIsSUFBSyxDQUFDO01BRTVCenVCLFVBQVUsQ0FBRSxNQUFNLElBQUksQ0FBQ3FuQixVQUFVLENBQUMvVCxXQUFXLENBQUVrYixJQUFLLENBQUMsRUFBRSxJQUFLLENBQUM7SUFFL0QsQ0FBQyxNQUFNO01BRUwsSUFBSSxDQUFDM2IsSUFBSSxDQUFDM1MsTUFBTSxDQUFDLENBQUM7TUFFbEIsSUFBSSxDQUFDeEMsS0FBSyxHQUFHcXdCLEtBQUssQ0FBQ0MsSUFBSTtNQUV2QixJQUFJLENBQUMzRyxVQUFVLENBQUNsRixPQUFPLENBQUVtTSxPQUFPLENBQUNOLElBQUksRUFBRU0sT0FBTyxDQUFDRixLQUFNLENBQUM7TUFFdEQsSUFBSSxDQUFDL0csVUFBVSxDQUFDL1QsV0FBVyxDQUFFbWIsSUFBSyxDQUFDO01BRW5DenVCLFVBQVUsQ0FBRSxNQUFNLElBQUksQ0FBQ3FuQixVQUFVLENBQUN4VSxJQUFJLENBQUUyYixJQUFLLENBQUMsRUFBRSxHQUFJLENBQUM7TUFDckR4dUIsVUFBVSxDQUFFLE1BQU0sSUFBSSxDQUFDcW5CLFVBQVUsQ0FBQ2htQixLQUFLLENBQUVtdEIsSUFBSyxDQUFDLEVBQUUsSUFBSyxDQUFDO0lBRXpEO0VBRUY7RUFFQTlzQixLQUFLQSxDQUFFOUQsSUFBSSxFQUFHO0lBRVosSUFBSSxDQUFDdW9CLFdBQVcsQ0FBQ3dGLFdBQVcsQ0FBRS90QixJQUFLLENBQUM7SUFFcEMsSUFBS0EsSUFBSSxFQUFHO01BRVYsSUFBSyxJQUFJLENBQUN5cEIsVUFBVSxDQUFDcEYsaUJBQWlCLEdBQUcsQ0FBQyxFQUFHO01BRTdDLElBQUksQ0FBQ3BQLElBQUksQ0FBQ2tDLFlBQVksQ0FBRWlYLE1BQU0sQ0FBRSxHQUFHLENBQUUsQ0FBRSxjQUFjLENBQUcsQ0FBQztNQUV6RCxJQUFJLENBQUM3RixXQUFXLENBQUN3RSxNQUFNLENBQUUsSUFBSSxFQUFFLEtBQU0sQ0FBQztNQUV0QyxJQUFJLENBQUNqdEIsS0FBSyxHQUFHcXdCLEtBQUssQ0FBQ00sS0FBSztNQUV4QixJQUFJLENBQUNoSCxVQUFVLENBQUNsRixPQUFPLENBQUVtTSxPQUFPLENBQUNELEtBQUssRUFBRUMsT0FBTyxDQUFDRixLQUFNLENBQUM7TUFFdkQsSUFBSSxDQUFDL0csVUFBVSxDQUFDL1QsV0FBVyxDQUFFbWIsSUFBSyxDQUFDO01BRW5DenVCLFVBQVUsQ0FBRSxNQUFNLElBQUksQ0FBQ3FuQixVQUFVLENBQUN4VSxJQUFJLENBQUUyYixJQUFJLEVBQUUsSUFBSyxDQUFDLEVBQUUsR0FBSSxDQUFDO01BQzNEeHVCLFVBQVUsQ0FBRSxNQUFNLElBQUksQ0FBQ3FuQixVQUFVLENBQUN4RSxPQUFPLENBQUUyTCxJQUFLLENBQUMsRUFBRSxJQUFLLENBQUM7SUFFM0QsQ0FBQyxNQUFNO01BRUwsSUFBSSxDQUFDOXdCLEtBQUssR0FBR3F3QixLQUFLLENBQUNLLEtBQUs7TUFFeEIsSUFBSSxDQUFDL0csVUFBVSxDQUFDbEYsT0FBTyxDQUFFbU0sT0FBTyxDQUFDRixLQUFLLEVBQUVFLE9BQU8sQ0FBQ0QsS0FBTSxDQUFDO01BRXZELElBQUksQ0FBQ2hILFVBQVUsQ0FBQ3hVLElBQUksQ0FBRTRiLElBQUksRUFBRSxJQUFLLENBQUM7TUFDbEMsSUFBSSxDQUFDcEgsVUFBVSxDQUFDeEUsT0FBTyxDQUFFNEwsSUFBSyxDQUFDO01BRS9CenVCLFVBQVUsQ0FBRSxNQUFNLElBQUksQ0FBQ3FuQixVQUFVLENBQUMvVCxXQUFXLENBQUVrYixJQUFLLENBQUMsRUFBRSxJQUFLLENBQUM7TUFDN0R4dUIsVUFBVSxDQUFFLE1BQU07UUFFaEIsTUFBTW1wQixZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFFeEUsWUFBWSxDQUFDNkQsT0FBTyxDQUFFLG9CQUFxQixDQUFFLENBQUM7UUFFL0UsSUFBSyxDQUFDUyxZQUFZLEVBQUc7VUFFbkIsSUFBSSxDQUFDdFcsSUFBSSxDQUFDM1MsTUFBTSxDQUFFLElBQUssQ0FBQztVQUN4QjtRQUVGO1FBRUEsSUFBSSxDQUFDMlMsSUFBSSxDQUFDa0MsWUFBWSxDQUFFb1UsWUFBYSxDQUFDO01BRXhDLENBQUMsRUFBRSxJQUFLLENBQUM7SUFFWDtFQUVGO0VBRUE1RyxLQUFLQSxDQUFFM2tCLElBQUksRUFBRztJQUVaLElBQUtBLElBQUksRUFBRztNQUVWLElBQUssSUFBSSxDQUFDeXBCLFVBQVUsQ0FBQ3BGLGlCQUFpQixHQUFHLENBQUMsRUFBRztNQUU3QyxJQUFJLENBQUN2a0IsS0FBSyxHQUFHcXdCLEtBQUssQ0FBQ0ksS0FBSztNQUV4QixJQUFJLENBQUM5RyxVQUFVLENBQUNsRixPQUFPLENBQUVtTSxPQUFPLENBQUNILEtBQUssRUFBRUcsT0FBTyxDQUFDTixJQUFLLENBQUM7TUFFdEQsSUFBSSxDQUFDM0csVUFBVSxDQUFDaG1CLEtBQUssQ0FBRW90QixJQUFLLENBQUM7TUFDN0IsSUFBSSxDQUFDcEgsVUFBVSxDQUFDeFUsSUFBSSxDQUFFNGIsSUFBSyxDQUFDO01BRTVCenVCLFVBQVUsQ0FBRSxNQUFNLElBQUksQ0FBQ3FuQixVQUFVLENBQUM5RSxLQUFLLENBQUVpTSxJQUFLLENBQUMsRUFBRSxJQUFLLENBQUM7SUFFekQsQ0FBQyxNQUFNO01BRUwsSUFBSSxDQUFDOXdCLEtBQUssR0FBR3F3QixLQUFLLENBQUNDLElBQUk7TUFFdkIsSUFBSSxDQUFDM0csVUFBVSxDQUFDbEYsT0FBTyxDQUFFbU0sT0FBTyxDQUFDTixJQUFJLEVBQUVNLE9BQU8sQ0FBQ0MsSUFBSyxDQUFDO01BRXJELElBQUksQ0FBQ2xILFVBQVUsQ0FBQzlFLEtBQUssQ0FBRWtNLElBQUssQ0FBQztNQUU3Qnp1QixVQUFVLENBQUUsTUFBTSxJQUFJLENBQUNxbkIsVUFBVSxDQUFDeFUsSUFBSSxDQUFFMmIsSUFBSyxDQUFDLEVBQUUsR0FBSSxDQUFDO01BQ3JEeHVCLFVBQVUsQ0FBRSxNQUFNLElBQUksQ0FBQ3FuQixVQUFVLENBQUNobUIsS0FBSyxDQUFFbXRCLElBQUssQ0FBQyxFQUFFLElBQUssQ0FBQztJQUV6RDtFQUVGO0VBRUFuTSxRQUFRQSxDQUFFemtCLElBQUksRUFBRztJQUVmLElBQUtBLElBQUksRUFBRztNQUVWLElBQUksQ0FBQ3lwQixVQUFVLENBQUNsRixPQUFPLENBQUVtTSxPQUFPLENBQUNKLFFBQVEsRUFBRUksT0FBTyxDQUFDTCxPQUFRLENBQUM7TUFFNUQsSUFBSSxDQUFDdndCLEtBQUssR0FBR3F3QixLQUFLLENBQUNHLFFBQVE7TUFDM0IsSUFBSSxDQUFDMWEsS0FBSyxHQUFHLEtBQUs7TUFFbEIsSUFBSSxDQUFDckIsUUFBUSxDQUFDeUcsT0FBTyxDQUFDLENBQUM7TUFDdkIsSUFBSSxDQUFDbkYsS0FBSyxDQUFDeEssSUFBSSxDQUFDLENBQUM7TUFDakIsSUFBSSxDQUFDeUssT0FBTyxDQUFDQyxTQUFTLENBQUMsQ0FBQztNQUV4QixJQUFJLENBQUN3VSxRQUFRLEdBQUcsSUFBSSxDQUFDMUUsTUFBTSxDQUFDd0UsUUFBUSxDQUFFLElBQUksQ0FBQ3hVLEtBQUssQ0FBQ2lSLFNBQVUsQ0FBQztNQUU1RCxJQUFJLENBQUMyQyxVQUFVLENBQUNuRixJQUFJLENBQUU2TCxLQUFLLENBQUNDLElBQUksRUFBRSxDQUFFLENBQUM7TUFDckMsSUFBSSxDQUFDM0csVUFBVSxDQUFDbEUsT0FBTyxDQUFFcUwsSUFBSyxDQUFDO01BRS9CeHVCLFVBQVUsQ0FBRSxNQUFNO1FBRWhCLElBQUksQ0FBQ3FuQixVQUFVLENBQUNoRixRQUFRLENBQUVtTSxJQUFJLEVBQUUsSUFBSSxDQUFDckcsUUFBUyxDQUFDO1FBQy9DLElBQUksQ0FBQ2IsUUFBUSxDQUFDdGUsS0FBSyxDQUFDLENBQUM7TUFFdkIsQ0FBQyxFQUFFLElBQUssQ0FBQztJQUVYLENBQUMsTUFBTTtNQUVMLElBQUksQ0FBQ3RMLEtBQUssR0FBR3F3QixLQUFLLENBQUNJLEtBQUs7TUFDeEIsSUFBSSxDQUFDM2EsS0FBSyxHQUFHLEtBQUs7TUFFbEIsSUFBSSxDQUFDNlQsVUFBVSxDQUFDNVQsS0FBSyxDQUFFZ2IsSUFBSyxDQUFDO01BQzdCLElBQUksQ0FBQ3BILFVBQVUsQ0FBQ2hGLFFBQVEsQ0FBRW9NLElBQUksRUFBRSxJQUFJLENBQUN0RyxRQUFTLENBQUM7TUFDL0MsSUFBSSxDQUFDZCxVQUFVLENBQUN4VSxJQUFJLENBQUU0YixJQUFLLENBQUM7TUFDNUIsSUFBSSxDQUFDaGIsS0FBSyxDQUFDOVIsS0FBSyxDQUFDLENBQUM7TUFFbEIzQixVQUFVLENBQUUsTUFBTTtRQUVoQixJQUFJLENBQUM2UyxJQUFJLENBQUNsUixLQUFLLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMybEIsUUFBUSxDQUFDcmUsSUFBSSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDb2UsVUFBVSxDQUFDOUUsS0FBSyxDQUFFaU0sSUFBSyxDQUFDO1FBQzdCLElBQUksQ0FBQ25ILFVBQVUsQ0FBQ2xFLE9BQU8sQ0FBRSxDQUFFLENBQUM7TUFFOUIsQ0FBQyxFQUFFLElBQUssQ0FBQztNQUVULE9BQU8sS0FBSztJQUVkO0VBRUY7QUFFRjtBQUVBLGlFQUFlM2xCLElBQUk7Ozs7Ozs7Ozs7O0FDbjhIbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9jb21tb24vY29tcG9uZW50cy9Db2xzZUJ0bi5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9jb21tb24vY29tcG9uZW50cy9lZmZlY3RzL01hZ2ljQ3ViZS5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9jb21tb24vY29tcG9uZW50cy9pY29ucy9TdWIuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS9zZXJ2aWNlcy9BcHAuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS9zZXJ2aWNlcy9jb21wb25lbnRzL0JyYW5kaW5nLmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3BhZ2Uvc2VydmljZXMvY29tcG9uZW50cy9Db250ZW50cy5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9wYWdlL3NlcnZpY2VzL2NvbXBvbmVudHMvRGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS9zZXJ2aWNlcy9jb21wb25lbnRzL0xhbmRpbmcuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS9zZXJ2aWNlcy9jb21wb25lbnRzL1Byb2R1Y3RzLmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3BhZ2Uvc2VydmljZXMvY29tcG9uZW50cy9Qcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9wYWdlL3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3BhZ2Uvc2VydmljZXMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3Njc3MvcGFnZS9zZXJ2aWNlcy9pbmRleC5zY3NzP2ZkNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBDbG9zZUJ0biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtYnRuXCIgc3R5bGU9eyEhdGhpcy5wcm9wcy56SW5kZXggJiYgeyB6SW5kZXg6IHRoaXMucHJvcHMuekluZGV4LCBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0+PC9kaXY+KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvc2VCdG47IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgR2FtZSBmcm9tICdAL3BhZ2Uvc2VydmljZXMvc2NyaXB0LmpzJztcclxuaW1wb3J0IENsb3NlQnRuIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvQ29sc2VCdG4nO1xyXG5cclxuY2xhc3MgTWFnaWNDdWJlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgfTtcclxuICAgIHRoaXMudWlSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuYm94UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplQ3ViZSgpIHtcclxuXHJcbiAgICAgIGNvbnN0IFJhbmdlSFRNTCA9IFtcclxuXHJcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cInJhbmdlXCI+JyxcclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmFuZ2VfX2xhYmVsXCI+PC9kaXY+JyxcclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmFuZ2VfX3RyYWNrXCI+JyxcclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmFuZ2VfX3RyYWNrLWxpbmVcIj48L2Rpdj4nLFxyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJyYW5nZV9faGFuZGxlXCI+PGRpdj48L2Rpdj48L2Rpdj4nLFxyXG4gICAgICAgICAgJzwvZGl2PicsXHJcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cInJhbmdlX19saXN0XCI+PC9kaXY+JyxcclxuICAgICAgICAgICc8L2Rpdj4nLFxyXG5cclxuICAgICAgXS5qb2luKCdcXG4nKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3JhbmdlJykuZm9yRWFjaChlbCA9PiB7XHJcblxyXG4gICAgICAgICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgdGVtcC5pbm5lckhUTUwgPSBSYW5nZUhUTUw7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmFuZ2UgPSB0ZW1wLnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZScpO1xyXG4gICAgICAgICAgY29uc3QgcmFuZ2VMYWJlbCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGFiZWwnKTtcclxuICAgICAgICAgIGNvbnN0IHJhbmdlTGlzdCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpO1xyXG5cclxuICAgICAgICAgIHJhbmdlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGVsLmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcclxuICAgICAgICAgIHJhbmdlTGFiZWwuaW5uZXJIVE1MID0gZWwuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xyXG5cclxuICAgICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykpIHtcclxuXHJcbiAgICAgICAgICAgICAgcmFuZ2UuY2xhc3NMaXN0LmFkZCgncmFuZ2UtLXR5cGUtY29sb3InKTtcclxuICAgICAgICAgICAgICByYW5nZS5jbGFzc0xpc3QuYWRkKCdyYW5nZS0tY29sb3ItJyArIGVsLmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnbGlzdCcpKSB7XHJcblxyXG4gICAgICAgICAgICAgIGVsLmdldEF0dHJpYnV0ZSgnbGlzdCcpLnNwbGl0KCcsJykuZm9yRWFjaChsaXN0SXRlbVRleHQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gbGlzdEl0ZW1UZXh0O1xyXG4gICAgICAgICAgICAgICAgICByYW5nZUxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmFuZ2UsIGVsKTtcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgd2luZG93LnZlcnNpb24gPSAnMC45OS4yJztcclxuICAgICAgd2luZG93LmdhbWUgPSBuZXcgR2FtZSgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRG91YmxlQ2xpY2sgKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZnVsbHNjcmVlbjogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLmJveFJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHdpbmRvdy5nYW1lLmdhbWUodHJ1ZSk7O1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZS53b3JsZC5yZXNpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5ib3hSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICAvLyB3aW5kb3cuZ2FtZS5yZXN1bWUoKTtcclxuICAgICAgICAgICAgLy8gd2luZG93LmdhbWUuZ2FtZSh0cnVlKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBpZiAocHJldlN0YXRlLmZ1bGxzY3JlZW4gIT09IHRoaXMuc3RhdGUuZnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5mdWxsc2NyZWVuKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgZWxzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc3R5bGUub3ZlcmZsb3cgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbG9zZUV2ZW50ID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZnVsbHNjcmVlbjogZmFsc2UgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lLndvcmxkLnJlc2l6ZSgpO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZUN1YmUoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3RoaXMuYm94UmVmfSBjbGFzc05hbWU9XCJtYWdpYy1jdWJlLWJveFwiIHN0eWxlPXt7IHBvc2l0aW9uOiB0aGlzLnN0YXRlLmZ1bGxzY3JlZW4gPyAnZml4ZWQnIDogJ3JlbGF0aXZlJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIHRvcDogMCwgbGVmdDogMCwgekluZGV4OiAxMCwgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmZ1bGxzY3JlZW4gPyAnI2Y1ZjVmNScgOiBudWxsIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFnaWMtY3ViZSc+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mdWxsc2NyZWVuICYmIDxDbG9zZUJ0biBvbkNsb3NlPXsoZSkgPT4gdGhpcy5oYW5kbGVDbG9zZUV2ZW50KGUpfSB6SW5kZXg9ezN9IC8+fVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvdyAmJiA8ZGl2IGNsYXNzTmFtZT1cInVpXCIgcmVmPXt0aGlzLnVpUmVmfSBvbkRvdWJsZUNsaWNrQ2FwdHVyZT17ZSA9PiB0aGlzLmhhbmRsZURvdWJsZUNsaWNrKGUpfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aV9fYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpX19nYW1lXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWlfX3RleHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dCB0ZXh0LS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwYy1zaG93Jz5XZSBsb3ZlIGV4cGxvcmluZyBvdXIgd29yayB3aXRoIGEgc2Vuc2Ugb2YgZnVuLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncGMtc2hvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGV0J3MgdGFrZSBvbiB0aGUgY2hhbGxlbmdlISBPdXIgYmVzdCByZWNvcmQgaXMgMTI0IHNlY29uZHMgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtYi1zaG93Jz5XZSBsb3ZlIGV4cGxvcmluZyBvdXIgd29yayB3aXRoIGEgc2Vuc2Ugb2YgZnVuLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExldCdzIHRha2Ugb24gdGhlIGNoYWxsZW5nZSEgT3VyIGJlc3QgcmVjb3JkIGlzIDEyNCBzZWNvbmRzIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dCB0ZXh0LS1ub3RlXCIgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRG91YmxlIFRhcCBUbyBDaGFsbGVuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dCB0ZXh0LS10aW1lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMDowMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0IHRleHQtLWNvbXBsZXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db21wbGV0ZSE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQgdGV4dC0tYmVzdC10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWNvbiB0cm9waHk+PC9pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmVzdCBUaW1lITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWlfX3ByZWZzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyYW5nZSBuYW1lPVwic2l6ZVwiIHRpdGxlPVwiQ3ViZSBTaXplXCIgbGlzdD1cIjIsMyw0LDVcIj48L3JhbmdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmFuZ2UgbmFtZT1cImZsaXBcIiB0aXRsZT1cIkZsaXAgVHlwZVwiIGxpc3Q9XCJTd2lmdCZuYnNwOyxTbW9vdGgsQm91bmNlXCI+PC9yYW5nZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJhbmdlIG5hbWU9XCJzY3JhbWJsZVwiIHRpdGxlPVwiU2NyYW1ibGUgTGVuZ3RoXCIgbGlzdD1cIjIwLDI1LDMwXCI+PC9yYW5nZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJhbmdlIG5hbWU9XCJmb3ZcIiB0aXRsZT1cIkNhbWVyYSBBbmdsZVwiIGxpc3Q9XCJPcnRvZ3JhcGhpYyxQZXJzcGVjdGl2ZVwiPjwvcmFuZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyYW5nZSBuYW1lPVwidGhlbWVcIiB0aXRsZT1cIkNvbG9yIFNjaGVtZVwiIGxpc3Q9XCJDdWJlLEVybm8sRHVzdCxDYW1vLFJhaW5cIj48L3JhbmdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpX190aGVtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmFuZ2UgbmFtZT1cImh1ZVwiIHRpdGxlPVwiSHVlXCIgY29sb3I+PC9yYW5nZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJhbmdlIG5hbWU9XCJzYXR1cmF0aW9uXCIgdGl0bGU9XCJTYXR1cmF0aW9uXCIgY29sb3I+PC9yYW5nZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJhbmdlIG5hbWU9XCJsaWdodG5lc3NcIiB0aXRsZT1cIkxpZ2h0bmVzc1wiIGNvbG9yPjwvcmFuZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWlfX3N0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIiBuYW1lPVwiY3ViZS1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT5DdWJlOjwvaT48Yj4zeDN4MzwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIiBuYW1lPVwidG90YWwtc29sdmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT5Ub3RhbCBzb2x2ZXM6PC9pPjxiPi08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCIgbmFtZT1cImJlc3QtdGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+QmVzdCB0aW1lOjwvaT48Yj4tPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiIG5hbWU9XCJ3b3JzdC10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT5Xb3JzdCB0aW1lOjwvaT48Yj4tPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiIG5hbWU9XCJhdmVyYWdlLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPkF2ZXJhZ2Ugb2YgNTo8L2k+PGI+LTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIiBuYW1lPVwiYXZlcmFnZS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+QXZlcmFnZSBvZiAxMjo8L2k+PGI+LTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIiBuYW1lPVwiYXZlcmFnZS0yNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+QXZlcmFnZSBvZiAyNTo8L2k+PGI+LTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWlfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLS1ibCBidG4tLXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWNvbiB0cm9waHk+PC9pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLS1iciBidG4tLXByZWZzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWNvbiBzZXR0aW5ncz48L2ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tLWJsIGJ0bi0tYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGljb24gYmFjaz48L2ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tLWJyIGJ0bi0tdGhlbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpY29uIHRoZW1lPjwvaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi0tYnIgYnRuLS1yZXNldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGljb24gcmVzZXQ+PC9pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWdpY0N1YmU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBmaWxsQ29sb3IgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PjxzdmcgY2xhc3NOYW1lPVwiaWNvbiBzdWItaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIj48cGF0aCBkPVwiTTE5MiA0ODBtMzIgMGw2MDggMHEzMiAwIDMyIDMybDAgMHEwIDMyLTMyIDMybC02MDggMHEtMzIgMC0zMi0zMmwwIDBxMC0zMiAzMi0zMlpcIiBmaWxsPXtmaWxsQ29sb3IgPyBmaWxsQ29sb3IgOiBcIiMwMDBcIn0gcC1pZD1cIjQyMzJcIj48L3BhdGg+PC9zdmc+PC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXBwQ29udGV4dCc7XHJcbmltcG9ydCB7IGxhenlBY3QsIGNoZWNrSXNJblZpZXdwb3J0LCBsb2FkRm9udCB9IGZyb20gJ0AvdXRpbHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZXRDbGllbnRXaWR0aCwgc2V0Q2xpZW50SGVpZ2h0IH0gZnJvbSAnQC9zdG9yZS9jbGllbnRTbGljZSc7XHJcbmltcG9ydCB7IHNldFNjcm9sbFkgfSBmcm9tICdAL3N0b3JlL3Njcm9sbFNsaWNlJztcclxuaW1wb3J0IHsgc2V0SXNBcHBPcGVuIH0gZnJvbSAnQC9zdG9yZS9iYXNlU2xpY2UnO1xyXG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL2NvbXBvbmVudHMvTGFuZGluZyc7XHJcbmltcG9ydCBCcmFuZGluZyBmcm9tICcuL2NvbXBvbmVudHMvQnJhbmRpbmcnO1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9jb21wb25lbnRzL1Byb2R1Y3RzJztcclxuaW1wb3J0IENvbnRlbnRzIGZyb20gJy4vY29tcG9uZW50cy9Db250ZW50cyc7XHJcbmltcG9ydCBEZXZlbG9wbWVudCBmcm9tICcuL2NvbXBvbmVudHMvRGV2ZWxvcG1lbnQnO1xyXG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi9jb21wb25lbnRzL1Byb2dyZXNzJztcclxuaW1wb3J0IFByZWxvYWQgZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9QcmVsb2FkJztcclxuaW1wb3J0IFJlZGlyZWN0TG9hZGluZyBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL1JlZGlyZWN0TG9hZGluZyc7XHJcbmltcG9ydCBMb2FkZXJMb2dvIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvTG9hZGVyTG9nbyc7XHJcbmltcG9ydCBIZWFkZXJNZW51cyBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgR29vZ2xlQ29uc2VudCBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL3RyYWNraW5nL0dvb2dsZUNvbnNlbnQnO1xyXG4vLyBpbXBvcnQgKiBhcyBjdXJzb3JlZmZlY3RzIGZyb20gJ2N1cnNvci1lZmZlY3RzJztcclxuaW1wb3J0IEhvdmVyQ3Vyc29yQm94IGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvSG92ZXJDdXJzb3JCb3gnO1xyXG5pbXBvcnQgJ0Avc2Nzcy9wYWdlL3NlcnZpY2VzL2luZGV4LnNjc3MnO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5Db250ZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0hlYWRlcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbG9ja1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNjcm9sbEJlaGF2aW9yICgpIHtcclxuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGUtaW4tdmlldycpXS5mb3JFYWNoKHJlZiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZWYpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrSXNJblZpZXdwb3J0KHJlZiwgKHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgJiYgIXJlZi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzdGF0dXMgJiYgcmVmLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNldFNjcm9sbFkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA8IHRoaXMucHJvcHMuc2Nyb2xsWSB8fCBzY3JvbGxUb3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgIXRoaXMuc3RhdGUuc2hvd0hlYWRlciAmJiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNob3dIZWFkZXI6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93SGVhZGVyICYmIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlcjogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNjcm9sbFkoc2Nyb2xsVG9wKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbEJlaGF2aW9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQsIHNldENsaWVudFdpZHRoLCBzZXRDbGllbnRIZWlnaHQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZGNfd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY2xpZW50V2lkdGggIT0gZGNfd2lkdGggJiYgc2V0Q2xpZW50V2lkdGgoZGNfd2lkdGgpO1xyXG4gICAgICAgIGNvbnN0IGRjX2hlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgY2xpZW50SGVpZ2h0ICE9IGRjX2hlaWdodCAmJiBzZXRDbGllbnRIZWlnaHQoZGNfaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbEJlaGF2aW9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5yZXNpemVIYW5kbGVyKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbG9hZEZvbnQoKTtcclxuICAgICAgICAvLyBXZWJGb250LmxvYWQoe1xyXG4gICAgICAgIC8vICAgICBnb29nbGU6IHtcclxuICAgICAgICAvLyAgICAgICAgIGZhbWlsaWVzOiBbJ01vbnRzZXJyYXQ6MzAwLDQwMCw1MDAsNjAwLDcwMCw4MDAnLCAnTGV4ZW5kOjMwMCw0MDAsNTAwLDYwMCw3MDAsODAwJ11cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIGlmICghIXRoaXMuY2xvY2tSZWYpIHtcclxuICAgICAgICAvLyAgICAgbmV3IGN1cnNvcmVmZmVjdHMuY2xvY2tDdXJzb3IoeyBlbGVtZW50OiB0aGlzLmNsb2NrUmVmLmN1cnJlbnQgfSlcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBzZXRPcGVuQ29udGVudChzdGF0dXMpIHtcclxuICAgICAgICBjb25zdCB7IHNldElzQXBwT3BlbiB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsYXp5QWN0KDAuMSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG9wZW5Db250ZW50OiBzdGF0dXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRJc0FwcE9wZW4oc3RhdHVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcclxuICAgICAgICAvLyDkvaDlkIzmoLflj6/ku6XlsIbplJnor6/ml6Xlv5fkuIrmiqXnu5nmnI3liqHlmaggIFxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYXVnaHQgYW4gZXJyb3IgaW4gRXJyb3JCb3VuZGFyeVwiLCBlcnJvciwgZXJyb3JJbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlbG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICA8R29vZ2xlQ29uc2VudD48L0dvb2dsZUNvbnNlbnQ+XHJcbiAgICAgICAgICAgICAgICA8SG92ZXJDdXJzb3JCb3g+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuQ29udGVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlck1lbnVzIGhpZGU9eyF0aGlzLnN0YXRlLnNob3dIZWFkZXJ9IGFjdGl2ZXBhZ2U9XCJzZXJ2aWNlc1wiPjwvSGVhZGVyTWVudXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBzZXJ2aWNlcy1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4tdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYW5kaW5nPjwvTGFuZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWluLXZpZXcgYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FuaW1hdGUtaW4tdmlldy13cmFwcGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1YmplY3QgcGItMyBib3gtc3ViamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbi12aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWluLXZpZXctd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJhbmRpbmc+PC9CcmFuZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RzPjwvUHJvZHVjdHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbi12aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FuaW1hdGUtaW4tdmlldy13cmFwcGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzPjwvQ29udGVudHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXZlbG9wbWVudD48L0RldmVsb3BtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4tdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbmltYXRlLWluLXZpZXctd3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLmNsb2NrUmVmfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2Vsb2FkaW5nID8gPFJlZGlyZWN0TG9hZGluZyAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8PjxQcmVsb2FkIG9uT3Blbj17diA9PiB0aGlzLnNldE9wZW5Db250ZW50KHYpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlckxvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1ByZWxvYWQ+PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PGgxPiZuYnNwOzwvaDE+PC9kaXY+PC8+fVxyXG4gICAgICAgICAgICAgICAgPC9Ib3ZlckN1cnNvckJveD5cclxuICAgICAgICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvPik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpc1BDOiBzdGF0ZS5jbGllbnRTbGljZS5pc1BDLFxyXG4gICAgICAgIGlzQXBwT3Blbjogc3RhdGUuYmFzZVNsaWNlLmlzQXBwT3BlbixcclxuICAgICAgICBzY3JvbGxZOiBzdGF0ZS5zY3JvbGxTbGljZS5zY3JvbGxZLFxyXG4gICAgICAgIGNsaWVudFdpZHRoOiBzdGF0ZS5jbGllbnRTbGljZS5jbGllbnRXaWR0aCxcclxuICAgICAgICBjbGllbnRIZWlnaHQ6IHN0YXRlLmNsaWVudFNsaWNlLmNsaWVudEhlaWdodCxcclxuICAgICAgICBwYWdlbG9hZGluZzogc3RhdGUuYmFzZVNsaWNlLnJlZGlyZWN0bG9hZGluZyxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBzZXRDbGllbnRXaWR0aCxcclxuICAgIHNldENsaWVudEhlaWdodCxcclxuICAgIHNldFNjcm9sbFksXHJcbiAgICBzZXRJc0FwcE9wZW5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFN1Ykljb24gZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9pY29ucy9TdWInO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9JbWFnZSc7XHJcbmltcG9ydCB7IGdldFJlbFdpZHRoIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xyXG5cclxuY2xhc3MgQnJhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBib3hXaWR0aDogMCxcclxuICAgIH07XHJcbiAgICB0aGlzLmJveFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICBpZiAocHJldlByb3BzLmNsaWVudFdpZHRoICE9PSB0aGlzLnByb3BzLmNsaWVudFdpZHRoKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGJveFdpZHRoOiBnZXRSZWxXaWR0aCh0aGlzLmJveFJlZi5jdXJyZW50KSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGJveFdpZHRoOiBnZXRSZWxXaWR0aCh0aGlzLmJveFJlZi5jdXJyZW50KSxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZGluZy1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRpbmctY29sIGRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uLXRpdGxlJz5CcmFuZGluZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbi1kZXNjJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtdW5zdHlsZWQnPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PFN1Ykljb24vPkJyYW5kIFN0cmF0ZWd5PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxTdWJJY29uIC8+VmVyYmFsIElkZW50aXR5PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxTdWJJY29uIC8+VmlzdWFsIElkZW50aXR5PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxTdWJJY29uIC8+QnJhbmQgR3VpZGVsaW5lczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48U3ViSWNvbiAvPkJyYW5kIEV4cGVyaWVuY2VzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kaW5nLWNvbCBicmFkaW5nLWltYWdlIG1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcGFnZS9zZXJ2aWNlcy9icmFuZGluZy53ZWJwXCIgYWx0PVwiQnJhbmRpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGlzUEM6IHN0YXRlLmNsaWVudFNsaWNlLmlzUEMsXHJcbiAgICBjbGllbnRXaWR0aDogc3RhdGUuY2xpZW50U2xpY2UuY2xpZW50V2lkdGgsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHt9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKEJyYW5kaW5nKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN1Ykljb24gZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9pY29ucy9TdWInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50cy1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudHMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudHMtY29sIGRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXRpdGxlXCI+Q29udGVudHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48U3ViSWNvbiAvPkFydCBEaXJlY3Rpb248L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PFN1Ykljb24gLz5Db3B5d3JpdGluZzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48U3ViSWNvbiAvPklsbHVzdHJhdGlvbiAmIEdyYXBoaWMgRGVzaWduPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxTdWJJY29uIC8+QW5pbWF0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxTdWJJY29uIC8+UGhvdG8gJiBWaWRlbzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdWJJY29uIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvaWNvbnMvU3ViJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldmVsb3BtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldmVsb3BtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV2ZWxvcG1lbnQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldmVsb3BtZW50LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldmVsb3BtZW50LWNvbCBkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi10aXRsZVwiPkRldmVsb3BtZW50PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PFN1Ykljb24gLz5UZWNobm9sb2d5IENvbnN1bHRpbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PFN1Ykljb24gLz5BcmNoaXRlY3R1cmUgUGxhbm5pbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PFN1Ykljb24gLz5Nb2JpbGUgQXBwIERldmVsb3BtZW50PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxTdWJJY29uIC8+RnJvbnRlbmQgV2ViIERldmVsb3BtZW50PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxTdWJJY29uIC8+QmFja2VuZCBEZXZlbG9wbWVudCAmIEFQSSBJbnRlZ3JhdGlvbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBEaWZmTGV0dGVyc1Nob3cgZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9lZmZlY3RzL0RpZmZMZXR0ZXJzU2hvdyc7XHJcbi8vIGltcG9ydCBNdWx0aVNxdWFyZSBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL2VmZmVjdHMvTXVsdGlTcXVhcmUnO1xyXG5pbXBvcnQgTWFnaWNDdWJlIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvZWZmZWN0cy9NYWdpY0N1YmUnO1xyXG5cclxuY2xhc3MgTGFuZGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZGluZyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctY29sIGRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpZmZMZXR0ZXJzU2hvdyBsZXR0ZXJzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdCbGVuZGluZyAnLCAnVGVjaG5vbG9neSAnLCAnd2l0aCAnLCAnQ3JlYXRpdml0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSByYXRpbz1cIjAuNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+T3VyIGV4cGVydGlzZSBhcmUgZGVzaWduIHRoaW5raW5nLWJhc2VkIGFuZCB0ZWNobm9sb2d5IGRyaXZlbiBzZXJ2aWNlcyBpbiBkaWdpdGFsIHByb2R1Y3QgaW5ub3ZhdGlvbiBhbmQgY3JlYXRpb24uIFdlIGNvbmNlbnRyYXRlcyBvbiBkZXNpZ25pbmcgYXV0aGVudGljIGNvbm5lY3Rpb25zIHRocm91Z2ggdGhlIHVzZSBvZiBib3RoIGFlc3RoZXRpY3MgYW5kIGJlaGF2aW9yYWwgc2NpZW5jZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBjdXN0b21pemUgb3VyIG1ldGhvZG9sb2dpZXMgYW5kIHN0cmF0ZWdpYyBzZXJ2aWNlcyBzcGVjaWZpYyB0byBlYWNoIHVuaXF1ZSBwcm9qZWN0LCBmcm9tIHN0cmF0ZWd5LCBkZXNpZ24gYW5kIGRldmVsb3BtZW50LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLWNvbCBpbWFnZScgc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnLCBhc3BlY3RSYXRpbzogJzEvMS4yJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hZ2ljQ3ViZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxNdWx0aVNxdWFyZSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBpc1BDOiBzdGF0ZS5jbGllbnRTbGljZS5pc1BDLFxyXG4gICAgY2xpZW50V2lkdGg6IHN0YXRlLmNsaWVudFNsaWNlLmNsaWVudFdpZHRoLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGFuZGluZyk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN1Ykljb24gZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9pY29ucy9TdWInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdHMtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb2wgZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi10aXRsZVwiPkFwcHMgJiBXZWJzaXRlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxTdWJJY29uIC8+Q29uc3VtZXIgJiBFbnRlcnByaXNlIFNvZnR3YXJlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48U3ViSWNvbiAvPkNYLCBVWCwgVUkgJiBJbnRlcmFjdGlvbiBEZXNpZ248L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxTdWJJY29uIC8+Q29udGVudCBTdHJhdGVneSAmIFByb2R1Y3Rpb248L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxTdWJJY29uIC8+RnJvbnRlbmQgJiBCYWNrZW5kIERldmVsb3BtZW50PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48U3ViSWNvbiAvPkNNUyBJbXBsZW1lbnRhdGlvbiAmIGludGVncmF0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ29udGVudEJveCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgY29uc3QgeyBObywgdGl0bGUsIGxhYmVsLCB0YWdzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRCb3hUYWcgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3gtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYm94LW5vXCI+e05vfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3gtdGl0bGVcIj57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveC1kZXNjXCI+e2xhYmVsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3gtdGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFncy5tYXAoKHRhZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbnRlbnQtYm94LXRhZ1wiPnt0YWd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENvbnRlbnRCb3hUYWcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWljb25cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogJ3VybCgvYXNzZXRzL2ltZy9pY29ucy9hcnJvdy0xLnN2ZyknfX0+PC9kaXY+XHJcbiAgICAgICAgPC8+KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIE5vOiAnMDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGlzY292ZXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1VuZGVyc3RhbmQgd2hhdCBuZWVkcyB0byBiZSBkb25lJyxcclxuICAgICAgICAgICAgICAgICAgICB0YWdzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdNYXJrZXQgYW5kIHVzZXIgcmVzZWFyY2gnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnUHJvZHVjdCAvIFNjb3BlIGRlZmluaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnUHJvdG90eXBlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdQcm9vZiBvZiBjb25jZXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1RlY2huaWNhbCBhcHByb2FjaCdcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIE5vOiAnMDInLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSW1wbGVtZW50YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVHVybiB0aGUgY29uY2VwdCBpbnRvIGEgcmVhbGl0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFnczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnVVgvVUkgRGVzaWduJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lPUyBhcHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQW5kcm9pZCBhcHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnRnJvbnRlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQUkvTUwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnRGV2T3BzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1F1YWxpdHkgQXNzdXJhbmNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRpbnVvdXMgRGVsaXZlcnknLFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgTm86ICcwMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdXBwb3J0ICYgTWFpbnRlbmFuY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnT25nb2luZyBpbXByb3ZlbWVudCBhbmQgZGV2ZWxvcG1lbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0FuYWx5c3RpY3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnTW9uaXRvcmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdNYWludGVuYW5jZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdOZXcgZmVhdHVyZSBkZXZlbG9wbWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdTY2FsbGluZydcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1pbm5lci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1pbm5lci1jb250ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWlubmVyLWNvbnRleHQtdGl0bGUgc2VjdGlvbi1zdWJqZWN0IGJveC1zdWJqZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9jZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWlubmVyLWNvbnRleHQtZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Ugd29yayBzaWRlLWJ5LXNpZGUgd2l0aCBmb3J3YXJkLXRoaW5raW5nIGNvbXBhbmllcywgYnJhbmRzLCBhbmQgZm91bmRlcnMgdG8gc29sdmUgcHJvYmxlbXMgYW5kIGNyZWF0ZSBkYXp6bGluZyB1c2VyLWNlbnRyaWMgZGlnaXRhbCBleHBlcmllbmNlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1pbm5lci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaXdiLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBpd2ItaXRlbVwiIGtleT17aW5kZXh9PjxDb250ZW50Qm94IHsuLi5pdGVtfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3M7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlL2luZGV4JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBhcHAgPSBjcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbmFwcC5yZW5kZXIoPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8QXBwIC8+XHJcbjwvUHJvdmlkZXI+KTsiLCIvLyBUaHJlZS5qcyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvXG4vLyBSb3VuZGVkQm94R2VvbWV0cnkgLSBodHRwczovL2dpdGh1Yi5jb20vcGFpbGhlYWQvdGhyZWUtcm91bmRlZC1ib3hcblxuY29uc3QgYW5pbWF0aW9uRW5naW5lID0gKCAoKSA9PiB7XG5cbiAgbGV0IHVuaXF1ZUlEID0gMDtcblxuICBjbGFzcyBBbmltYXRpb25FbmdpbmUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgIHRoaXMuaWRzID0gW107XG4gICAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTtcbiAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCggdGhpcyApO1xuICAgICAgdGhpcy5yYWYgPSAwO1xuICAgICAgdGhpcy50aW1lID0gMDtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICBjb25zdCBkZWx0YSA9IG5vdyAtIHRoaXMudGltZTtcbiAgICAgIHRoaXMudGltZSA9IG5vdztcblxuICAgICAgbGV0IGkgPSB0aGlzLmlkcy5sZW5ndGg7XG5cbiAgICAgIHRoaXMucmFmID0gaSA/IHJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy51cGRhdGUgKSA6IDA7XG5cbiAgICAgIHdoaWxlICggaS0tIClcbiAgICAgICAgdGhpcy5hbmltYXRpb25zWyB0aGlzLmlkc1sgaSBdIF0gJiYgdGhpcy5hbmltYXRpb25zWyB0aGlzLmlkc1sgaSBdIF0udXBkYXRlKCBkZWx0YSApO1xuXG4gICAgfVxuXG4gICAgYWRkKCBhbmltYXRpb24gKSB7XG5cbiAgICAgIGFuaW1hdGlvbi5pZCA9IHVuaXF1ZUlEICsrO1xuXG4gICAgICB0aGlzLmlkcy5wdXNoKCBhbmltYXRpb24uaWQgKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uc1sgYW5pbWF0aW9uLmlkIF0gPSBhbmltYXRpb247XG5cbiAgICAgIGlmICggdGhpcy5yYWYgIT09IDAgKSByZXR1cm47XG5cbiAgICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMudXBkYXRlICk7XG5cbiAgICB9XG5cbiAgICByZW1vdmUoIGFuaW1hdGlvbiApIHtcblxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmlkcy5pbmRleE9mKCBhbmltYXRpb24uaWQgKTtcblxuICAgICAgaWYgKCBpbmRleCA8IDAgKSByZXR1cm47XG5cbiAgICAgIHRoaXMuaWRzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmFuaW1hdGlvbnNbIGFuaW1hdGlvbi5pZCBdO1xuICAgICAgYW5pbWF0aW9uID0gbnVsbDtcblxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIG5ldyBBbmltYXRpb25FbmdpbmUoKTtcblxufSApKCk7XG5cbmNsYXNzIEFuaW1hdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoIHN0YXJ0ICkge1xuXG4gICAgaWYgKCBzdGFydCA9PT0gdHJ1ZSApIHRoaXMuc3RhcnQoKTtcblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICBhbmltYXRpb25FbmdpbmUuYWRkKCB0aGlzICk7XG5cbiAgfVxuXG4gIHN0b3AoKSB7XG5cbiAgICBhbmltYXRpb25FbmdpbmUucmVtb3ZlKCB0aGlzICk7XG5cbiAgfVxuXG4gIHVwZGF0ZSggZGVsdGEgKSB7fVxuXG59XG5cbmNsYXNzIFdvcmxkIGV4dGVuZHMgQW5pbWF0aW9uIHtcblxuICBjb25zdHJ1Y3RvciggZ2FtZSApIHtcblxuICAgIHN1cGVyKCB0cnVlICk7XG5cbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmdhbWUuZG9tLmdhbWU7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCB7IGFudGlhbGlhczogdHJ1ZSwgYWxwaGE6IHRydWUgfSApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyggd2luZG93LmRldmljZVBpeGVsUmF0aW8gKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggdGhpcy5yZW5kZXJlci5kb21FbGVtZW50ICk7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggMiwgMSwgMC4xLCAxMDAwMCApO1xuXG4gICAgdGhpcy5zdGFnZSA9IHsgd2lkdGg6IDIsIGhlaWdodDogMyB9O1xuICAgIHRoaXMuZm92ID0gMTA7XG5cbiAgICB0aGlzLmNyZWF0ZUxpZ2h0cygpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IFtdO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsICgpID0+IHRoaXMucmVzaXplKCksIGZhbHNlICk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xuXG4gIH1cblxuICByZXNpemUoKSB7XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICk7XG5cbiAgICB0aGlzLmNhbWVyYS5mb3YgPSB0aGlzLmZvdjtcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQ7XG5cbiAgICBjb25zdCBhc3BlY3QgPSB0aGlzLnN0YWdlLndpZHRoIC8gdGhpcy5zdGFnZS5oZWlnaHQ7XG4gICAgY29uc3QgZm92UmFkID0gdGhpcy5mb3YgKiBUSFJFRS5NYXRoLkRFRzJSQUQ7XG5cbiAgICBsZXQgZGlzdGFuY2UgPSAoIGFzcGVjdCA8IHRoaXMuY2FtZXJhLmFzcGVjdCApXG4gICAgICA/ICggdGhpcy5zdGFnZS5oZWlnaHQgLyAyICkgLyBNYXRoLnRhbiggZm92UmFkIC8gMiApXG4gICAgICA6ICggdGhpcy5zdGFnZS53aWR0aCAvIHRoaXMuY2FtZXJhLmFzcGVjdCApIC8gKCAyICogTWF0aC50YW4oIGZvdlJhZCAvIDIgKSApO1xuXG4gICAgZGlzdGFuY2UgKj0gMC41O1xuXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KCBkaXN0YW5jZSwgZGlzdGFuY2UsIGRpc3RhbmNlKTtcbiAgICB0aGlzLmNhbWVyYS5sb29rQXQoIHRoaXMuc2NlbmUucG9zaXRpb24gKTtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICBjb25zdCBkb2NGb250U2l6ZSA9ICggYXNwZWN0IDwgdGhpcy5jYW1lcmEuYXNwZWN0IClcbiAgICAgID8gKCB0aGlzLmhlaWdodCAvIDEwMCApICogYXNwZWN0XG4gICAgICA6IHRoaXMud2lkdGggLyAxMDA7XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBkb2NGb250U2l6ZSArICdweCc7XG5cbiAgICBpZiAoIHRoaXMub25SZXNpemUgKSB0aGlzLm9uUmVzaXplLmZvckVhY2goIGNiID0+IGNiKCkgKTtcblxuICB9XG5cbiAgY3JlYXRlTGlnaHRzKCkge1xuXG4gICAgdGhpcy5saWdodHMgPSB7XG4gICAgICBob2xkZXI6ICBuZXcgVEhSRUUuT2JqZWN0M0QsXG4gICAgICBhbWJpZW50OiBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KCAweGZmZmZmZiwgMC42OSApLFxuICAgICAgZnJvbnQ6ICAgbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4ZmZmZmZmLCAwLjM2ICksXG4gICAgICBiYWNrOiAgICBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDAuMTkgKSxcbiAgICB9O1xuXG4gICAgdGhpcy5saWdodHMuZnJvbnQucG9zaXRpb24uc2V0KCAxLjUsIDUsIDMgKTtcbiAgICB0aGlzLmxpZ2h0cy5iYWNrLnBvc2l0aW9uLnNldCggLTEuNSwgLTUsIC0zICk7XG5cbiAgICB0aGlzLmxpZ2h0cy5ob2xkZXIuYWRkKCB0aGlzLmxpZ2h0cy5hbWJpZW50ICk7XG4gICAgdGhpcy5saWdodHMuaG9sZGVyLmFkZCggdGhpcy5saWdodHMuZnJvbnQgKTtcbiAgICB0aGlzLmxpZ2h0cy5ob2xkZXIuYWRkKCB0aGlzLmxpZ2h0cy5iYWNrICk7XG5cbiAgICB0aGlzLnNjZW5lLmFkZCggdGhpcy5saWdodHMuaG9sZGVyICk7XG5cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIFJvdW5kZWRCb3hHZW9tZXRyeSggc2l6ZSwgcmFkaXVzLCByYWRpdXNTZWdtZW50cyApIHtcblxuICBUSFJFRS5CdWZmZXJHZW9tZXRyeS5jYWxsKCB0aGlzICk7XG5cbiAgdGhpcy50eXBlID0gJ1JvdW5kZWRCb3hHZW9tZXRyeSc7XG5cbiAgcmFkaXVzU2VnbWVudHMgPSAhIGlzTmFOKCByYWRpdXNTZWdtZW50cyApID8gTWF0aC5tYXgoIDEsIE1hdGguZmxvb3IoIHJhZGl1c1NlZ21lbnRzICkgKSA6IDE7XG5cbiAgdmFyIHdpZHRoLCBoZWlnaHQsIGRlcHRoO1xuXG4gIHdpZHRoID0gaGVpZ2h0ID0gZGVwdGggPSBzaXplO1xuICByYWRpdXMgPSBzaXplICogcmFkaXVzO1xuXG4gIHJhZGl1cyA9IE1hdGgubWluKCByYWRpdXMsIE1hdGgubWluKCB3aWR0aCwgTWF0aC5taW4oIGhlaWdodCwgTWF0aC5taW4oIGRlcHRoICkgKSApIC8gMiApO1xuXG4gIHZhciBlZGdlSGFsZldpZHRoID0gd2lkdGggLyAyIC0gcmFkaXVzO1xuICB2YXIgZWRnZUhhbGZIZWlnaHQgPSBoZWlnaHQgLyAyIC0gcmFkaXVzO1xuICB2YXIgZWRnZUhhbGZEZXB0aCA9IGRlcHRoIC8gMiAtIHJhZGl1cztcblxuICB0aGlzLnBhcmFtZXRlcnMgPSB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGRlcHRoOiBkZXB0aCxcbiAgICByYWRpdXM6IHJhZGl1cyxcbiAgICByYWRpdXNTZWdtZW50czogcmFkaXVzU2VnbWVudHNcbiAgfTtcblxuICB2YXIgcnMxID0gcmFkaXVzU2VnbWVudHMgKyAxO1xuICB2YXIgdG90YWxWZXJ0ZXhDb3VudCA9ICggcnMxICogcmFkaXVzU2VnbWVudHMgKyAxICkgPDwgMztcblxuICB2YXIgcG9zaXRpb25zID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSggbmV3IEZsb2F0MzJBcnJheSggdG90YWxWZXJ0ZXhDb3VudCAqIDMgKSwgMyApO1xuICB2YXIgbm9ybWFscyA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoIG5ldyBGbG9hdDMyQXJyYXkoIHRvdGFsVmVydGV4Q291bnQgKiAzICksIDMgKTtcblxuICB2YXJcbiAgICBjb3JuZXJWZXJ0cyA9IFtdLFxuICAgIGNvcm5lck5vcm1hbHMgPSBbXSxcbiAgICBub3JtYWwgPSBuZXcgVEhSRUUuVmVjdG9yMygpLFxuICAgIHZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKCksXG4gICAgdmVydGV4UG9vbCA9IFtdLFxuICAgIG5vcm1hbFBvb2wgPSBbXSxcbiAgICBpbmRpY2VzID0gW11cbiAgO1xuXG4gIHZhclxuICAgIGxhc3RWZXJ0ZXggPSByczEgKiByYWRpdXNTZWdtZW50cyxcbiAgICBjb3JuZXJWZXJ0TnVtYmVyID0gcnMxICogcmFkaXVzU2VnbWVudHMgKyAxXG4gIDtcblxuICBkb1ZlcnRpY2VzKCk7XG4gIGRvRmFjZXMoKTtcbiAgZG9Db3JuZXJzKCk7XG4gIGRvSGVpZ2h0RWRnZXMoKTtcbiAgZG9XaWR0aEVkZ2VzKCk7XG4gIGRvRGVwdGhFZGdlcygpO1xuXG4gIGZ1bmN0aW9uIGRvVmVydGljZXMoKSB7XG5cbiAgICB2YXIgY29ybmVyTGF5b3V0ID0gW1xuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoIDEsIDEsIDEgKSxcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKCAxLCAxLCAtIDEgKSxcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKCAtIDEsIDEsIC0gMSApLFxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoIC0gMSwgMSwgMSApLFxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoIDEsIC0gMSwgMSApLFxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoIDEsIC0gMSwgLSAxICksXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMyggLSAxLCAtIDEsIC0gMSApLFxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoIC0gMSwgLSAxLCAxIClcbiAgICBdO1xuXG4gICAgZm9yICggdmFyIGogPSAwOyBqIDwgODsgaiArKyApIHtcblxuICAgICAgY29ybmVyVmVydHMucHVzaCggW10gKTtcbiAgICAgIGNvcm5lck5vcm1hbHMucHVzaCggW10gKTtcblxuICAgIH1cblxuICAgIHZhciBQSWhhbGYgPSBNYXRoLlBJIC8gMjtcbiAgICB2YXIgY29ybmVyT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoIGVkZ2VIYWxmV2lkdGgsIGVkZ2VIYWxmSGVpZ2h0LCBlZGdlSGFsZkRlcHRoICk7XG5cbiAgICBmb3IgKCB2YXIgeSA9IDA7IHkgPD0gcmFkaXVzU2VnbWVudHM7IHkgKysgKSB7XG5cbiAgICAgIHZhciB2ID0geSAvIHJhZGl1c1NlZ21lbnRzO1xuICAgICAgdmFyIHZhID0gdiAqIFBJaGFsZjtcbiAgICAgIHZhciBjb3NWYSA9IE1hdGguY29zKCB2YSApO1xuICAgICAgdmFyIHNpblZhID0gTWF0aC5zaW4oIHZhICk7XG5cbiAgICAgIGlmICggeSA9PSByYWRpdXNTZWdtZW50cyApIHtcblxuICAgICAgICB2ZXJ0ZXguc2V0KCAwLCAxLCAwICk7XG4gICAgICAgIHZhciB2ZXJ0ID0gdmVydGV4LmNsb25lKCkubXVsdGlwbHlTY2FsYXIoIHJhZGl1cyApLmFkZCggY29ybmVyT2Zmc2V0ICk7XG4gICAgICAgIGNvcm5lclZlcnRzWyAwIF0ucHVzaCggdmVydCApO1xuICAgICAgICB2ZXJ0ZXhQb29sLnB1c2goIHZlcnQgKTtcbiAgICAgICAgdmFyIG5vcm0gPSB2ZXJ0ZXguY2xvbmUoKTtcbiAgICAgICAgY29ybmVyTm9ybWFsc1sgMCBdLnB1c2goIG5vcm0gKTtcbiAgICAgICAgbm9ybWFsUG9vbC5wdXNoKCBub3JtICk7XG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICB9XG5cbiAgICAgIGZvciAoIHZhciB4ID0gMDsgeCA8PSByYWRpdXNTZWdtZW50czsgeCArKyApIHtcblxuICAgICAgICB2YXIgdSA9IHggLyByYWRpdXNTZWdtZW50cztcbiAgICAgICAgdmFyIGhhID0gdSAqIFBJaGFsZjtcbiAgICAgICAgdmVydGV4LnggPSBjb3NWYSAqIE1hdGguY29zKCBoYSApO1xuICAgICAgICB2ZXJ0ZXgueSA9IHNpblZhO1xuICAgICAgICB2ZXJ0ZXgueiA9IGNvc1ZhICogTWF0aC5zaW4oIGhhICk7XG5cbiAgICAgICAgdmFyIHZlcnQgPSB2ZXJ0ZXguY2xvbmUoKS5tdWx0aXBseVNjYWxhciggcmFkaXVzICkuYWRkKCBjb3JuZXJPZmZzZXQgKTtcbiAgICAgICAgY29ybmVyVmVydHNbIDAgXS5wdXNoKCB2ZXJ0ICk7XG4gICAgICAgIHZlcnRleFBvb2wucHVzaCggdmVydCApO1xuXG4gICAgICAgIHZhciBub3JtID0gdmVydGV4LmNsb25lKCkubm9ybWFsaXplKCk7XG4gICAgICAgIGNvcm5lck5vcm1hbHNbIDAgXS5wdXNoKCBub3JtICk7XG4gICAgICAgIG5vcm1hbFBvb2wucHVzaCggbm9ybSApO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBmb3IgKCB2YXIgaSA9IDE7IGkgPCA4OyBpICsrICkge1xuXG4gICAgICBmb3IgKCB2YXIgaiA9IDA7IGogPCBjb3JuZXJWZXJ0c1sgMCBdLmxlbmd0aDsgaiArKyApIHtcblxuICAgICAgICB2YXIgdmVydCA9IGNvcm5lclZlcnRzWyAwIF1bIGogXS5jbG9uZSgpLm11bHRpcGx5KCBjb3JuZXJMYXlvdXRbIGkgXSApO1xuICAgICAgICBjb3JuZXJWZXJ0c1sgaSBdLnB1c2goIHZlcnQgKTtcbiAgICAgICAgdmVydGV4UG9vbC5wdXNoKCB2ZXJ0ICk7XG5cbiAgICAgICAgdmFyIG5vcm0gPSBjb3JuZXJOb3JtYWxzWyAwIF1bIGogXS5jbG9uZSgpLm11bHRpcGx5KCBjb3JuZXJMYXlvdXRbIGkgXSApO1xuICAgICAgICBjb3JuZXJOb3JtYWxzWyBpIF0ucHVzaCggbm9ybSApO1xuICAgICAgICBub3JtYWxQb29sLnB1c2goIG5vcm0gKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBkb0Nvcm5lcnMoKSB7XG5cbiAgICB2YXIgZmxpcHMgPSBbXG4gICAgICB0cnVlLFxuICAgICAgZmFsc2UsXG4gICAgICB0cnVlLFxuICAgICAgZmFsc2UsXG4gICAgICBmYWxzZSxcbiAgICAgIHRydWUsXG4gICAgICBmYWxzZSxcbiAgICAgIHRydWVcbiAgICBdO1xuXG4gICAgdmFyIGxhc3RSb3dPZmZzZXQgPSByczEgKiAoIHJhZGl1c1NlZ21lbnRzIC0gMSApO1xuXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgODsgaSArKyApIHtcblxuICAgICAgdmFyIGNvcm5lck9mZnNldCA9IGNvcm5lclZlcnROdW1iZXIgKiBpO1xuXG4gICAgICBmb3IgKCB2YXIgdiA9IDA7IHYgPCByYWRpdXNTZWdtZW50cyAtIDE7IHYgKysgKSB7XG5cbiAgICAgICAgdmFyIHIxID0gdiAqIHJzMTtcbiAgICAgICAgdmFyIHIyID0gKCB2ICsgMSApICogcnMxO1xuXG4gICAgICAgIGZvciAoIHZhciB1ID0gMDsgdSA8IHJhZGl1c1NlZ21lbnRzOyB1ICsrICkge1xuXG4gICAgICAgICAgdmFyIHUxID0gdSArIDE7XG4gICAgICAgICAgdmFyIGEgPSBjb3JuZXJPZmZzZXQgKyByMSArIHU7XG4gICAgICAgICAgdmFyIGIgPSBjb3JuZXJPZmZzZXQgKyByMSArIHUxO1xuICAgICAgICAgIHZhciBjID0gY29ybmVyT2Zmc2V0ICsgcjIgKyB1O1xuICAgICAgICAgIHZhciBkID0gY29ybmVyT2Zmc2V0ICsgcjIgKyB1MTtcblxuICAgICAgICAgIGlmICggISBmbGlwc1sgaSBdICkge1xuXG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goIGEgKTtcbiAgICAgICAgICAgIGluZGljZXMucHVzaCggYiApO1xuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKCBjICk7XG5cbiAgICAgICAgICAgIGluZGljZXMucHVzaCggYiApO1xuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKCBkICk7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goIGMgKTtcblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGluZGljZXMucHVzaCggYSApO1xuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKCBjICk7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goIGIgKTtcblxuICAgICAgICAgICAgaW5kaWNlcy5wdXNoKCBiICk7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goIGMgKTtcbiAgICAgICAgICAgIGluZGljZXMucHVzaCggZCApO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICBmb3IgKCB2YXIgdSA9IDA7IHUgPCByYWRpdXNTZWdtZW50czsgdSArKyApIHtcblxuICAgICAgICB2YXIgYSA9IGNvcm5lck9mZnNldCArIGxhc3RSb3dPZmZzZXQgKyB1O1xuICAgICAgICB2YXIgYiA9IGNvcm5lck9mZnNldCArIGxhc3RSb3dPZmZzZXQgKyB1ICsgMTtcbiAgICAgICAgdmFyIGMgPSBjb3JuZXJPZmZzZXQgKyBsYXN0VmVydGV4O1xuXG4gICAgICAgIGlmICggISBmbGlwc1sgaSBdICkge1xuXG4gICAgICAgICAgaW5kaWNlcy5wdXNoKCBhICk7XG4gICAgICAgICAgaW5kaWNlcy5wdXNoKCBiICk7XG4gICAgICAgICAgaW5kaWNlcy5wdXNoKCBjICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGluZGljZXMucHVzaCggYSApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYyApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYiApO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBkb0ZhY2VzKCkge1xuXG4gICAgdmFyIGEgPSBsYXN0VmVydGV4O1xuICAgIHZhciBiID0gbGFzdFZlcnRleCArIGNvcm5lclZlcnROdW1iZXI7XG4gICAgdmFyIGMgPSBsYXN0VmVydGV4ICsgY29ybmVyVmVydE51bWJlciAqIDI7XG4gICAgdmFyIGQgPSBsYXN0VmVydGV4ICsgY29ybmVyVmVydE51bWJlciAqIDM7XG5cbiAgICBpbmRpY2VzLnB1c2goIGEgKTtcbiAgICBpbmRpY2VzLnB1c2goIGIgKTtcbiAgICBpbmRpY2VzLnB1c2goIGMgKTtcbiAgICBpbmRpY2VzLnB1c2goIGEgKTtcbiAgICBpbmRpY2VzLnB1c2goIGMgKTtcbiAgICBpbmRpY2VzLnB1c2goIGQgKTtcblxuICAgIGEgPSBsYXN0VmVydGV4ICsgY29ybmVyVmVydE51bWJlciAqIDQ7XG4gICAgYiA9IGxhc3RWZXJ0ZXggKyBjb3JuZXJWZXJ0TnVtYmVyICogNTtcbiAgICBjID0gbGFzdFZlcnRleCArIGNvcm5lclZlcnROdW1iZXIgKiA2O1xuICAgIGQgPSBsYXN0VmVydGV4ICsgY29ybmVyVmVydE51bWJlciAqIDc7XG5cbiAgICBpbmRpY2VzLnB1c2goIGEgKTtcbiAgICBpbmRpY2VzLnB1c2goIGMgKTtcbiAgICBpbmRpY2VzLnB1c2goIGIgKTtcbiAgICBpbmRpY2VzLnB1c2goIGEgKTtcbiAgICBpbmRpY2VzLnB1c2goIGQgKTtcbiAgICBpbmRpY2VzLnB1c2goIGMgKTtcblxuICAgIGEgPSAwO1xuICAgIGIgPSBjb3JuZXJWZXJ0TnVtYmVyO1xuICAgIGMgPSBjb3JuZXJWZXJ0TnVtYmVyICogNDtcbiAgICBkID0gY29ybmVyVmVydE51bWJlciAqIDU7XG5cbiAgICBpbmRpY2VzLnB1c2goIGEgKTtcbiAgICBpbmRpY2VzLnB1c2goIGMgKTtcbiAgICBpbmRpY2VzLnB1c2goIGIgKTtcbiAgICBpbmRpY2VzLnB1c2goIGIgKTtcbiAgICBpbmRpY2VzLnB1c2goIGMgKTtcbiAgICBpbmRpY2VzLnB1c2goIGQgKTtcblxuICAgIGEgPSBjb3JuZXJWZXJ0TnVtYmVyICogMjtcbiAgICBiID0gY29ybmVyVmVydE51bWJlciAqIDM7XG4gICAgYyA9IGNvcm5lclZlcnROdW1iZXIgKiA2O1xuICAgIGQgPSBjb3JuZXJWZXJ0TnVtYmVyICogNztcblxuICAgIGluZGljZXMucHVzaCggYSApO1xuICAgIGluZGljZXMucHVzaCggYyApO1xuICAgIGluZGljZXMucHVzaCggYiApO1xuICAgIGluZGljZXMucHVzaCggYiApO1xuICAgIGluZGljZXMucHVzaCggYyApO1xuICAgIGluZGljZXMucHVzaCggZCApO1xuXG4gICAgYSA9IHJhZGl1c1NlZ21lbnRzO1xuICAgIGIgPSByYWRpdXNTZWdtZW50cyArIGNvcm5lclZlcnROdW1iZXIgKiAzO1xuICAgIGMgPSByYWRpdXNTZWdtZW50cyArIGNvcm5lclZlcnROdW1iZXIgKiA0O1xuICAgIGQgPSByYWRpdXNTZWdtZW50cyArIGNvcm5lclZlcnROdW1iZXIgKiA3O1xuXG4gICAgaW5kaWNlcy5wdXNoKCBhICk7XG4gICAgaW5kaWNlcy5wdXNoKCBiICk7XG4gICAgaW5kaWNlcy5wdXNoKCBjICk7XG4gICAgaW5kaWNlcy5wdXNoKCBiICk7XG4gICAgaW5kaWNlcy5wdXNoKCBkICk7XG4gICAgaW5kaWNlcy5wdXNoKCBjICk7XG5cbiAgICBhID0gcmFkaXVzU2VnbWVudHMgKyBjb3JuZXJWZXJ0TnVtYmVyO1xuICAgIGIgPSByYWRpdXNTZWdtZW50cyArIGNvcm5lclZlcnROdW1iZXIgKiAyO1xuICAgIGMgPSByYWRpdXNTZWdtZW50cyArIGNvcm5lclZlcnROdW1iZXIgKiA1O1xuICAgIGQgPSByYWRpdXNTZWdtZW50cyArIGNvcm5lclZlcnROdW1iZXIgKiA2O1xuXG4gICAgaW5kaWNlcy5wdXNoKCBhICk7XG4gICAgaW5kaWNlcy5wdXNoKCBjICk7XG4gICAgaW5kaWNlcy5wdXNoKCBiICk7XG4gICAgaW5kaWNlcy5wdXNoKCBiICk7XG4gICAgaW5kaWNlcy5wdXNoKCBjICk7XG4gICAgaW5kaWNlcy5wdXNoKCBkICk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGRvSGVpZ2h0RWRnZXMoKSB7XG5cbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCA0OyBpICsrICkge1xuXG4gICAgICB2YXIgY09mZnNldCA9IGkgKiBjb3JuZXJWZXJ0TnVtYmVyO1xuICAgICAgdmFyIGNSb3dPZmZzZXQgPSA0ICogY29ybmVyVmVydE51bWJlciArIGNPZmZzZXQ7XG4gICAgICB2YXIgbmVlZHNGbGlwID0gaSAmIDEgPT09IDE7XG5cbiAgICAgIGZvciAoIHZhciB1ID0gMDsgdSA8IHJhZGl1c1NlZ21lbnRzOyB1ICsrICkge1xuXG4gICAgICAgIHZhciB1MSA9IHUgKyAxO1xuICAgICAgICB2YXIgYSA9IGNPZmZzZXQgKyB1O1xuICAgICAgICB2YXIgYiA9IGNPZmZzZXQgKyB1MTtcbiAgICAgICAgdmFyIGMgPSBjUm93T2Zmc2V0ICsgdTtcbiAgICAgICAgdmFyIGQgPSBjUm93T2Zmc2V0ICsgdTE7XG5cbiAgICAgICAgaWYgKCAhIG5lZWRzRmxpcCApIHtcblxuICAgICAgICAgIGluZGljZXMucHVzaCggYSApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYiApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYyApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYiApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggZCApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYyApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGEgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGMgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGIgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGIgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGMgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGQgKTtcblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gZG9EZXB0aEVkZ2VzKCkge1xuXG4gICAgdmFyIGNTdGFydHMgPSBbIDAsIDIsIDQsIDYgXTtcbiAgICB2YXIgY0VuZHMgPSBbIDEsIDMsIDUsIDcgXTtcblxuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IDQ7IGkgKysgKSB7XG5cbiAgICAgIHZhciBjU3RhcnQgPSBjb3JuZXJWZXJ0TnVtYmVyICogY1N0YXJ0c1sgaSBdO1xuICAgICAgdmFyIGNFbmQgPSBjb3JuZXJWZXJ0TnVtYmVyICogY0VuZHNbIGkgXTtcblxuICAgICAgdmFyIG5lZWRzRmxpcCA9IDEgPj0gaTtcblxuICAgICAgZm9yICggdmFyIHUgPSAwOyB1IDwgcmFkaXVzU2VnbWVudHM7IHUgKysgKSB7XG5cbiAgICAgICAgdmFyIHVyczEgPSB1ICogcnMxO1xuICAgICAgICB2YXIgdTFyczEgPSAoIHUgKyAxICkgKiByczE7XG5cbiAgICAgICAgdmFyIGEgPSBjU3RhcnQgKyB1cnMxO1xuICAgICAgICB2YXIgYiA9IGNTdGFydCArIHUxcnMxO1xuICAgICAgICB2YXIgYyA9IGNFbmQgKyB1cnMxO1xuICAgICAgICB2YXIgZCA9IGNFbmQgKyB1MXJzMTtcblxuICAgICAgICBpZiAoIG5lZWRzRmxpcCApIHtcblxuICAgICAgICAgIGluZGljZXMucHVzaCggYSApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYyApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYiApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYiApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYyApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggZCApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGEgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGIgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGMgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGIgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGQgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGMgKTtcblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gZG9XaWR0aEVkZ2VzKCkge1xuXG4gICAgdmFyIGVuZCA9IHJhZGl1c1NlZ21lbnRzIC0gMTtcblxuICAgIHZhciBjU3RhcnRzID0gWyAwLCAxLCA0LCA1IF07XG4gICAgdmFyIGNFbmRzID0gWyAzLCAyLCA3LCA2IF07XG4gICAgdmFyIG5lZWRzRmxpcCA9IFsgMCwgMSwgMSwgMCBdO1xuXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgNDsgaSArKyApIHtcblxuICAgICAgdmFyIGNTdGFydCA9IGNTdGFydHNbIGkgXSAqIGNvcm5lclZlcnROdW1iZXI7XG4gICAgICB2YXIgY0VuZCA9IGNFbmRzWyBpIF0gKiBjb3JuZXJWZXJ0TnVtYmVyO1xuXG4gICAgICBmb3IgKCB2YXIgdSA9IDA7IHUgPD0gZW5kOyB1ICsrICkge1xuXG4gICAgICAgIHZhciBhID0gY1N0YXJ0ICsgcmFkaXVzU2VnbWVudHMgKyB1ICogcnMxO1xuICAgICAgICB2YXIgYiA9IGNTdGFydCArICggdSAhPSBlbmQgPyByYWRpdXNTZWdtZW50cyArICggdSArIDEgKSAqIHJzMSA6IGNvcm5lclZlcnROdW1iZXIgLSAxICk7XG5cbiAgICAgICAgdmFyIGMgPSBjRW5kICsgcmFkaXVzU2VnbWVudHMgKyB1ICogcnMxO1xuICAgICAgICB2YXIgZCA9IGNFbmQgKyAoIHUgIT0gZW5kID8gcmFkaXVzU2VnbWVudHMgKyAoIHUgKyAxICkgKiByczEgOiBjb3JuZXJWZXJ0TnVtYmVyIC0gMSApO1xuXG4gICAgICAgIGlmICggISBuZWVkc0ZsaXBbIGkgXSApIHtcblxuICAgICAgICAgIGluZGljZXMucHVzaCggYSApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYiApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYyApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYiApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggZCApO1xuICAgICAgICAgIGluZGljZXMucHVzaCggYyApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGEgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGMgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGIgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGIgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGMgKTtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goIGQgKTtcblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgdmFyIGluZGV4ID0gMDtcblxuICBmb3IgKCB2YXIgaSA9IDA7IGkgPCB2ZXJ0ZXhQb29sLmxlbmd0aDsgaSArKyApIHtcblxuICAgIHBvc2l0aW9ucy5zZXRYWVooXG4gICAgICBpbmRleCxcbiAgICAgIHZlcnRleFBvb2xbIGkgXS54LFxuICAgICAgdmVydGV4UG9vbFsgaSBdLnksXG4gICAgICB2ZXJ0ZXhQb29sWyBpIF0uelxuICAgICk7XG5cbiAgICBub3JtYWxzLnNldFhZWihcbiAgICAgIGluZGV4LFxuICAgICAgbm9ybWFsUG9vbFsgaSBdLngsXG4gICAgICBub3JtYWxQb29sWyBpIF0ueSxcbiAgICAgIG5vcm1hbFBvb2xbIGkgXS56XG4gICAgKTtcblxuICAgIGluZGV4ICsrO1xuXG4gIH1cblxuICB0aGlzLnNldEluZGV4KCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKCBuZXcgVWludDE2QXJyYXkoIGluZGljZXMgKSwgMSApICk7XG4gIHRoaXMuYWRkQXR0cmlidXRlKCAncG9zaXRpb24nLCBwb3NpdGlvbnMgKTtcbiAgdGhpcy5hZGRBdHRyaWJ1dGUoICdub3JtYWwnLCBub3JtYWxzICk7XG5cbn1cblxuUm91bmRlZEJveEdlb21ldHJ5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRIUkVFLkJ1ZmZlckdlb21ldHJ5LnByb3RvdHlwZSApO1xuUm91bmRlZEJveEdlb21ldHJ5LmNvbnN0cnVjdG9yID0gUm91bmRlZEJveEdlb21ldHJ5O1xuXG5mdW5jdGlvbiBSb3VuZGVkUGxhbmVHZW9tZXRyeSggc2l6ZSwgcmFkaXVzLCBkZXB0aCApIHtcblxuICB2YXIgeCwgeSwgd2lkdGgsIGhlaWdodDtcblxuICB4ID0geSA9IC0gc2l6ZSAvIDI7XG4gIHdpZHRoID0gaGVpZ2h0ID0gc2l6ZTtcbiAgcmFkaXVzID0gc2l6ZSAqIHJhZGl1cztcblxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuXG4gIHNoYXBlLm1vdmVUbyggeCwgeSArIHJhZGl1cyApO1xuICBzaGFwZS5saW5lVG8oIHgsIHkgKyBoZWlnaHQgLSByYWRpdXMgKTtcbiAgc2hhcGUucXVhZHJhdGljQ3VydmVUbyggeCwgeSArIGhlaWdodCwgeCArIHJhZGl1cywgeSArIGhlaWdodCApO1xuICBzaGFwZS5saW5lVG8oIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCApO1xuICBzaGFwZS5xdWFkcmF0aWNDdXJ2ZVRvKCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyApO1xuICBzaGFwZS5saW5lVG8oIHggKyB3aWR0aCwgeSArIHJhZGl1cyApO1xuICBzaGFwZS5xdWFkcmF0aWNDdXJ2ZVRvKCB4ICsgd2lkdGgsIHksIHggKyB3aWR0aCAtIHJhZGl1cywgeSApO1xuICBzaGFwZS5saW5lVG8oIHggKyByYWRpdXMsIHkgKTtcbiAgc2hhcGUucXVhZHJhdGljQ3VydmVUbyggeCwgeSwgeCwgeSArIHJhZGl1cyApO1xuXG4gIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkV4dHJ1ZGVCdWZmZXJHZW9tZXRyeShcbiAgICBzaGFwZSxcbiAgICB7IGRlcHRoOiBkZXB0aCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogMyB9XG4gICk7XG5cbiAgcmV0dXJuIGdlb21ldHJ5O1xuXG59XG5cbmNsYXNzIEN1YmUge1xuXG4gIGNvbnN0cnVjdG9yKCBnYW1lICkge1xuXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLnNpemUgPSAzO1xuXG4gICAgdGhpcy5nZW9tZXRyeSA9IHtcbiAgICAgIHBpZWNlQ29ybmVyUmFkaXVzOiAwLjEyLFxuICAgICAgZWRnZUNvcm5lclJvdW5kbmVzczogMC4xNSxcbiAgICAgIGVkZ2VTY2FsZTogMC44MixcbiAgICAgIGVkZ2VEZXB0aDogMC4wMSxcbiAgICB9O1xuXG4gICAgdGhpcy5ob2xkZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLm9iamVjdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuYW5pbWF0b3IgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuICAgIHRoaXMuaG9sZGVyLmFkZCggdGhpcy5hbmltYXRvciApO1xuICAgIHRoaXMuYW5pbWF0b3IuYWRkKCB0aGlzLm9iamVjdCApO1xuXG4gICAgdGhpcy5nYW1lLndvcmxkLnNjZW5lLmFkZCggdGhpcy5ob2xkZXIgKTtcblxuICB9XG5cbiAgaW5pdCgpIHtcblxuICAgIHRoaXMuY3ViZXMgPSBbXTtcbiAgICB0aGlzLm9iamVjdC5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMub2JqZWN0LmFkZCggdGhpcy5nYW1lLmNvbnRyb2xzLmdyb3VwICk7XG5cbiAgICBpZiAoIHRoaXMuc2l6ZSA9PT0gMiApIHRoaXMuc2NhbGUgPSAxLjI1O1xuICAgIGVsc2UgaWYgKCB0aGlzLnNpemUgPT09IDMgKSB0aGlzLnNjYWxlID0gMTtcbiAgICBlbHNlIGlmICggdGhpcy5zaXplID4gMyApIHRoaXMuc2NhbGUgPSAzIC8gdGhpcy5zaXplO1xuXG4gICAgdGhpcy5vYmplY3Quc2NhbGUuc2V0KCB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlICk7XG5cbiAgICBjb25zdCBjb250cm9sc1NjYWxlID0gdGhpcy5zaXplID09PSAyID8gMC44MjUgOiAxO1xuICAgIHRoaXMuZ2FtZS5jb250cm9scy5lZGdlcy5zY2FsZS5zZXQoIGNvbnRyb2xzU2NhbGUsIGNvbnRyb2xzU2NhbGUsIGNvbnRyb2xzU2NhbGUgKTtcbiAgICBcbiAgICB0aGlzLmdlbmVyYXRlUG9zaXRpb25zKCk7XG4gICAgdGhpcy5nZW5lcmF0ZU1vZGVsKCk7XG5cbiAgICB0aGlzLnBpZWNlcy5mb3JFYWNoKCBwaWVjZSA9PiB7XG5cbiAgICAgIHRoaXMuY3ViZXMucHVzaCggcGllY2UudXNlckRhdGEuY3ViZSApO1xuICAgICAgdGhpcy5vYmplY3QuYWRkKCBwaWVjZSApO1xuXG4gICAgfSApO1xuXG4gICAgdGhpcy5ob2xkZXIudHJhdmVyc2UoIG5vZGUgPT4ge1xuXG4gICAgICBpZiAoIG5vZGUuZnJ1c3R1bUN1bGxlZCApIG5vZGUuZnJ1c3R1bUN1bGxlZCA9IGZhbHNlO1xuXG4gICAgfSApO1xuXG4gICAgdGhpcy51cGRhdGVDb2xvcnMoIHRoaXMuZ2FtZS50aGVtZXMuZ2V0Q29sb3JzKCkgKTtcblxuICAgIHRoaXMuc2l6ZUdlbmVyYXRlZCA9IHRoaXMuc2l6ZTtcblxuICB9XG5cbiAgcmVzaXplKCBmb3JjZSA9IGZhbHNlICkge1xuXG4gICAgaWYgKCB0aGlzLnNpemUgIT09IHRoaXMuc2l6ZUdlbmVyYXRlZCB8fCBmb3JjZSApIHtcblxuICAgICAgdGhpcy5zaXplID0gdGhpcy5nYW1lLnByZWZlcmVuY2VzLnJhbmdlcy5zaXplLnZhbHVlO1xuXG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgdGhpcy5nYW1lLnNhdmVkID0gZmFsc2U7XG4gICAgICB0aGlzLmdhbWUudGltZXIucmVzZXQoKTtcbiAgICAgIHRoaXMuZ2FtZS5zdG9yYWdlLmNsZWFyR2FtZSgpO1xuXG4gICAgfVxuXG4gIH1cblxuICByZXNldCgpIHtcblxuICAgIHRoaXMuZ2FtZS5jb250cm9scy5lZGdlcy5yb3RhdGlvbi5zZXQoIDAsIDAsIDAgKTtcblxuICAgIHRoaXMuaG9sZGVyLnJvdGF0aW9uLnNldCggMCwgMCwgMCApO1xuICAgIHRoaXMub2JqZWN0LnJvdGF0aW9uLnNldCggMCwgMCwgMCApO1xuICAgIHRoaXMuYW5pbWF0b3Iucm90YXRpb24uc2V0KCAwLCAwLCAwICk7XG5cbiAgfVxuXG4gIGdlbmVyYXRlUG9zaXRpb25zKCkge1xuXG4gICAgY29uc3QgbSA9IHRoaXMuc2l6ZSAtIDE7XG4gICAgY29uc3QgZmlyc3QgPSB0aGlzLnNpemUgJSAyICE9PSAwXG4gICAgICA/IDAgLSBNYXRoLmZsb29yKHRoaXMuc2l6ZSAvIDIpXG4gICAgICA6IDAuNSAtIHRoaXMuc2l6ZSAvIDI7XG5cbiAgICBsZXQgeCwgeSwgejtcblxuICAgIHRoaXMucG9zaXRpb25zID0gW107XG5cbiAgICBmb3IgKCB4ID0gMDsgeCA8IHRoaXMuc2l6ZTsgeCArKyApIHtcbiAgICAgIGZvciAoIHkgPSAwOyB5IDwgdGhpcy5zaXplOyB5ICsrICkge1xuICAgICAgICBmb3IgKCB6ID0gMDsgeiA8IHRoaXMuc2l6ZTsgeiArKyApIHtcblxuICAgICAgICAgIGxldCBwb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKGZpcnN0ICsgeCwgZmlyc3QgKyB5LCBmaXJzdCArIHopO1xuICAgICAgICAgIGxldCBlZGdlcyA9IFtdO1xuXG4gICAgICAgICAgaWYgKCB4ID09IDAgKSBlZGdlcy5wdXNoKDApO1xuICAgICAgICAgIGlmICggeCA9PSBtICkgZWRnZXMucHVzaCgxKTtcbiAgICAgICAgICBpZiAoIHkgPT0gMCApIGVkZ2VzLnB1c2goMik7XG4gICAgICAgICAgaWYgKCB5ID09IG0gKSBlZGdlcy5wdXNoKDMpO1xuICAgICAgICAgIGlmICggeiA9PSAwICkgZWRnZXMucHVzaCg0KTtcbiAgICAgICAgICBpZiAoIHogPT0gbSApIGVkZ2VzLnB1c2goNSk7XG5cbiAgICAgICAgICBwb3NpdGlvbi5lZGdlcyA9IGVkZ2VzO1xuICAgICAgICAgIHRoaXMucG9zaXRpb25zLnB1c2goIHBvc2l0aW9uICk7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgZ2VuZXJhdGVNb2RlbCgpIHtcblxuICAgIHRoaXMucGllY2VzID0gW107XG4gICAgdGhpcy5lZGdlcyA9IFtdO1xuXG4gICAgY29uc3QgcGllY2VTaXplID0gMSAvIDM7XG5cbiAgICBjb25zdCBtYWluTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgpO1xuXG4gICAgY29uc3QgcGllY2VNZXNoID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICBuZXcgUm91bmRlZEJveEdlb21ldHJ5KCBwaWVjZVNpemUsIHRoaXMuZ2VvbWV0cnkucGllY2VDb3JuZXJSYWRpdXMsIDMgKSxcbiAgICAgIG1haW5NYXRlcmlhbC5jbG9uZSgpXG4gICAgKTtcblxuICAgIGNvbnN0IGVkZ2VHZW9tZXRyeSA9IFJvdW5kZWRQbGFuZUdlb21ldHJ5KFxuICAgICAgcGllY2VTaXplLFxuICAgICAgdGhpcy5nZW9tZXRyeS5lZGdlQ29ybmVyUm91bmRuZXNzLFxuICAgICAgdGhpcy5nZW9tZXRyeS5lZGdlRGVwdGhcbiAgICApO1xuXG4gICAgdGhpcy5wb3NpdGlvbnMuZm9yRWFjaCggKCBwb3NpdGlvbiwgaW5kZXggKSA9PiB7XG5cbiAgICAgIGNvbnN0IHBpZWNlID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICBjb25zdCBwaWVjZUN1YmUgPSBwaWVjZU1lc2guY2xvbmUoKTtcbiAgICAgIGNvbnN0IHBpZWNlRWRnZXMgPSBbXTtcblxuICAgICAgcGllY2UucG9zaXRpb24uY29weSggcG9zaXRpb24uY2xvbmUoKS5kaXZpZGVTY2FsYXIoIDMgKSApO1xuICAgICAgcGllY2UuYWRkKCBwaWVjZUN1YmUgKTtcbiAgICAgIHBpZWNlLm5hbWUgPSBpbmRleDtcbiAgICAgIHBpZWNlLmVkZ2VzTmFtZSA9ICcnO1xuXG4gICAgICBwb3NpdGlvbi5lZGdlcy5mb3JFYWNoKCBwb3NpdGlvbiA9PiB7XG5cbiAgICAgICAgY29uc3QgZWRnZSA9IG5ldyBUSFJFRS5NZXNoKCBlZGdlR2VvbWV0cnksIG1haW5NYXRlcmlhbC5jbG9uZSgpICk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBbICdMJywgJ1InLCAnRCcsICdVJywgJ0InLCAnRicgXVsgcG9zaXRpb24gXTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBwaWVjZVNpemUgLyAyO1xuXG4gICAgICAgIGVkZ2UucG9zaXRpb24uc2V0KFxuICAgICAgICAgIGRpc3RhbmNlICogWyAtIDEsIDEsIDAsIDAsIDAsIDAgXVsgcG9zaXRpb24gXSxcbiAgICAgICAgICBkaXN0YW5jZSAqIFsgMCwgMCwgLSAxLCAxLCAwLCAwIF1bIHBvc2l0aW9uIF0sXG4gICAgICAgICAgZGlzdGFuY2UgKiBbIDAsIDAsIDAsIDAsIC0gMSwgMSBdWyBwb3NpdGlvbiBdXG4gICAgICAgICk7XG5cbiAgICAgICAgZWRnZS5yb3RhdGlvbi5zZXQoXG4gICAgICAgICAgTWF0aC5QSSAvIDIgKiBbIDAsIDAsIDEsIC0gMSwgMCwgMCBdWyBwb3NpdGlvbiBdLFxuICAgICAgICAgIE1hdGguUEkgLyAyICogWyAtIDEsIDEsIDAsIDAsIDIsIDAgXVsgcG9zaXRpb24gXSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG5cbiAgICAgICAgZWRnZS5zY2FsZS5zZXQoXG4gICAgICAgICAgdGhpcy5nZW9tZXRyeS5lZGdlU2NhbGUsXG4gICAgICAgICAgdGhpcy5nZW9tZXRyeS5lZGdlU2NhbGUsXG4gICAgICAgICAgdGhpcy5nZW9tZXRyeS5lZGdlU2NhbGVcbiAgICAgICAgKTtcblxuICAgICAgICBlZGdlLm5hbWUgPSBuYW1lO1xuXG4gICAgICAgIHBpZWNlLmFkZCggZWRnZSApO1xuICAgICAgICBwaWVjZUVkZ2VzLnB1c2goIG5hbWUgKTtcbiAgICAgICAgdGhpcy5lZGdlcy5wdXNoKCBlZGdlICk7XG5cbiAgICAgIH0gKTtcblxuICAgICAgcGllY2UudXNlckRhdGEuZWRnZXMgPSBwaWVjZUVkZ2VzO1xuICAgICAgcGllY2UudXNlckRhdGEuY3ViZSA9IHBpZWNlQ3ViZTtcblxuICAgICAgcGllY2UudXNlckRhdGEuc3RhcnQgPSB7XG4gICAgICAgIHBvc2l0aW9uOiBwaWVjZS5wb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgICByb3RhdGlvbjogcGllY2Uucm90YXRpb24uY2xvbmUoKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucGllY2VzLnB1c2goIHBpZWNlICk7XG5cbiAgICB9ICk7XG5cbiAgfVxuXG4gIHVwZGF0ZUNvbG9ycyggY29sb3JzICkge1xuXG4gICAgaWYgKCB0eXBlb2YgdGhpcy5waWVjZXMgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0aGlzLmVkZ2VzICE9PSAnb2JqZWN0JyApIHJldHVybjtcblxuICAgIHRoaXMucGllY2VzLmZvckVhY2goIHBpZWNlID0+IHBpZWNlLnVzZXJEYXRhLmN1YmUubWF0ZXJpYWwuY29sb3Iuc2V0SGV4KCBjb2xvcnMuUCApICk7XG4gICAgdGhpcy5lZGdlcy5mb3JFYWNoKCBlZGdlID0+IGVkZ2UubWF0ZXJpYWwuY29sb3Iuc2V0SGV4KCBjb2xvcnNbIGVkZ2UubmFtZSBdICkgKTtcblxuICB9XG5cbiAgbG9hZEZyb21EYXRhKCBkYXRhICkge1xuXG4gICAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgdGhpcy5waWVjZXMuZm9yRWFjaCggcGllY2UgPT4ge1xuXG4gICAgICBjb25zdCBpbmRleCA9IGRhdGEubmFtZXMuaW5kZXhPZiggcGllY2UubmFtZSApO1xuXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGRhdGEucG9zaXRpb25zW2luZGV4XTtcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gZGF0YS5yb3RhdGlvbnNbaW5kZXhdO1xuXG4gICAgICBwaWVjZS5wb3NpdGlvbi5zZXQoIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnogKTtcbiAgICAgIHBpZWNlLnJvdGF0aW9uLnNldCggcm90YXRpb24ueCwgcm90YXRpb24ueSwgcm90YXRpb24ueiApO1xuXG4gICAgfSApO1xuXG4gIH1cblxufVxuXG5jb25zdCBFYXNpbmcgPSB7XG5cbiAgUG93ZXI6IHtcblxuICAgIEluOiBwb3dlciA9PiB7XG5cbiAgICAgIHBvd2VyID0gTWF0aC5yb3VuZCggcG93ZXIgfHwgMSApO1xuXG4gICAgICByZXR1cm4gdCA9PiBNYXRoLnBvdyggdCwgcG93ZXIgKTtcblxuICAgIH0sXG5cbiAgICBPdXQ6IHBvd2VyID0+IHtcblxuICAgICAgcG93ZXIgPSBNYXRoLnJvdW5kKCBwb3dlciB8fCAxICk7XG5cbiAgICAgIHJldHVybiB0ID0+IDEgLSBNYXRoLmFicyggTWF0aC5wb3coIHQgLSAxLCBwb3dlciApICk7XG5cbiAgICB9LFxuXG4gICAgSW5PdXQ6IHBvd2VyID0+IHtcblxuICAgICAgcG93ZXIgPSBNYXRoLnJvdW5kKCBwb3dlciB8fCAxICk7XG5cbiAgICAgIHJldHVybiB0ID0+ICggdCA8IDAuNSApXG4gICAgICAgID8gTWF0aC5wb3coIHQgKiAyLCBwb3dlciApIC8gMlxuICAgICAgICA6ICggMSAtIE1hdGguYWJzKCBNYXRoLnBvdyggKCB0ICogMiAtIDEgKSAtIDEsIHBvd2VyICkgKSApIC8gMiArIDAuNTtcblxuICAgIH0sXG5cbiAgfSxcblxuICBTaW5lOiB7XG5cbiAgICBJbjogKCkgPT4gdCA9PiAxICsgTWF0aC5zaW4oIE1hdGguUEkgLyAyICogdCAtIE1hdGguUEkgLyAyICksXG5cbiAgICBPdXQ6ICgpID0+IHQgPT4gTWF0aC5zaW4oIE1hdGguUEkgLyAyICogdCApLFxuXG4gICAgSW5PdXQ6ICgpID0+IHQgPT4gKCAxICsgTWF0aC5zaW4oIE1hdGguUEkgKiB0IC0gTWF0aC5QSSAvIDIgKSApIC8gMixcblxuICB9LFxuXG4gIEJhY2s6IHtcblxuICAgIE91dDogcyA9PiB7XG5cbiAgICAgIHMgPSBzIHx8IDEuNzAxNTg7XG5cbiAgICAgIHJldHVybiB0ID0+IHsgcmV0dXJuICggdCAtPSAxICkgKiB0ICogKCAoIHMgKyAxICkgKiB0ICsgcyApICsgMTsgfTtcblxuICAgIH0sXG5cbiAgICBJbjogcyA9PiB7XG5cbiAgICAgIHMgPSBzIHx8IDEuNzAxNTg7XG5cbiAgICAgIHJldHVybiB0ID0+IHsgcmV0dXJuIHQgKiB0ICogKCAoIHMgKyAxICkgKiB0IC0gcyApOyB9O1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgRWxhc3RpYzoge1xuXG4gICAgT3V0OiAoIGFtcGxpdHVkZSwgcGVyaW9kICkgPT4ge1xuXG4gICAgICBsZXQgUEkyID0gTWF0aC5QSSAqIDI7XG5cbiAgICAgIGxldCBwMSA9ICggYW1wbGl0dWRlID49IDEgKSA/IGFtcGxpdHVkZSA6IDE7XG4gICAgICBsZXQgcDIgPSAoIHBlcmlvZCB8fCAwLjMgKSAvICggYW1wbGl0dWRlIDwgMSA/IGFtcGxpdHVkZSA6IDEgKTtcbiAgICAgIGxldCBwMyA9IHAyIC8gUEkyICogKCBNYXRoLmFzaW4oIDEgLyBwMSApIHx8IDAgKTtcblxuICAgICAgcDIgPSBQSTIgLyBwMjtcblxuICAgICAgcmV0dXJuIHQgPT4geyByZXR1cm4gcDEgKiBNYXRoLnBvdyggMiwgLTEwICogdCApICogTWF0aC5zaW4oICggdCAtIHAzICkgKiBwMiApICsgMSB9XG5cbiAgICB9LFxuXG4gIH0sXG5cbn07XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQW5pbWF0aW9uIHtcblxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcblxuICAgIHN1cGVyKCBmYWxzZSApO1xuXG4gICAgdGhpcy5kdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gfHwgNTAwO1xuICAgIHRoaXMuZWFzaW5nID0gb3B0aW9ucy5lYXNpbmcgfHwgKCB0ID0+IHQgKTtcbiAgICB0aGlzLm9uVXBkYXRlID0gb3B0aW9ucy5vblVwZGF0ZSB8fCAoICgpID0+IHt9ICk7XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gb3B0aW9ucy5vbkNvbXBsZXRlIHx8ICggKCkgPT4ge30gKTtcblxuICAgIHRoaXMuZGVsYXkgPSBvcHRpb25zLmRlbGF5IHx8IGZhbHNlO1xuICAgIHRoaXMueW95byA9IG9wdGlvbnMueW95byA/IGZhbHNlIDogbnVsbDtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMuZGVsdGEgPSAwO1xuXG4gICAgdGhpcy5nZXRGcm9tVG8oIG9wdGlvbnMgKTtcblxuICAgIGlmICggdGhpcy5kZWxheSApIHNldFRpbWVvdXQoICgpID0+IHN1cGVyLnN0YXJ0KCksIHRoaXMuZGVsYXkgKTtcbiAgICBlbHNlIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICB0aGlzLm9uVXBkYXRlKCB0aGlzICk7XG5cbiAgfVxuXG4gIHVwZGF0ZSggZGVsdGEgKSB7XG5cbiAgICBjb25zdCBvbGQgPSB0aGlzLnZhbHVlICogMTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSAoIHRoaXMueW95byA9PT0gdHJ1ZSApID8gLSAxIDogMTtcblxuICAgIHRoaXMucHJvZ3Jlc3MgKz0gKCBkZWx0YSAvIHRoaXMuZHVyYXRpb24gKSAqIGRpcmVjdGlvbjtcblxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmVhc2luZyggdGhpcy5wcm9ncmVzcyApO1xuICAgIHRoaXMuZGVsdGEgPSB0aGlzLnZhbHVlIC0gb2xkO1xuXG4gICAgaWYgKCB0aGlzLnZhbHVlcyAhPT0gbnVsbCApIHRoaXMudXBkYXRlRnJvbVRvKCk7XG5cbiAgICBpZiAoIHRoaXMueW95byAhPT0gbnVsbCApIHRoaXMudXBkYXRlWW95bygpO1xuICAgIGVsc2UgaWYgKCB0aGlzLnByb2dyZXNzIDw9IDEgKSB0aGlzLm9uVXBkYXRlKCB0aGlzICk7XG4gICAgZWxzZSB7XG5cbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAxO1xuICAgICAgdGhpcy52YWx1ZSA9IDE7XG4gICAgICB0aGlzLm9uVXBkYXRlKCB0aGlzICk7XG4gICAgICB0aGlzLm9uQ29tcGxldGUoIHRoaXMgKTtcbiAgICAgIHN1cGVyLnN0b3AoKTsgICAgICBcblxuICAgIH1cblxuICB9XG5cbiAgdXBkYXRlWW95bygpIHtcblxuICAgIGlmICggdGhpcy5wcm9ncmVzcyA+IDEgfHwgdGhpcy5wcm9ncmVzcyA8IDAgKSB7XG5cbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnByb2dyZXNzID0gKCB0aGlzLnByb2dyZXNzID4gMSApID8gMSA6IDA7XG4gICAgICB0aGlzLnlveW8gPSAhIHRoaXMueW95bztcblxuICAgIH1cblxuICAgIHRoaXMub25VcGRhdGUoIHRoaXMgKTtcblxuICB9XG5cbiAgdXBkYXRlRnJvbVRvKCkge1xuXG4gICAgdGhpcy52YWx1ZXMuZm9yRWFjaCgga2V5ID0+IHtcblxuICAgICAgdGhpcy50YXJnZXRbIGtleSBdID0gdGhpcy5mcm9tWyBrZXkgXSArICggdGhpcy50b1sga2V5IF0gLSB0aGlzLmZyb21bIGtleSBdICkgKiB0aGlzLnZhbHVlO1xuXG4gICAgfSApO1xuXG4gIH1cblxuICBnZXRGcm9tVG8oIG9wdGlvbnMgKSB7XG5cbiAgICBpZiAoICEgb3B0aW9ucy50YXJnZXQgfHwgISBvcHRpb25zLnRvICkge1xuXG4gICAgICB0aGlzLnZhbHVlcyA9IG51bGw7XG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICB0aGlzLnRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IG51bGw7XG4gICAgdGhpcy5mcm9tID0gb3B0aW9ucy5mcm9tIHx8IHt9O1xuICAgIHRoaXMudG8gPSBvcHRpb25zLnRvIHx8IG51bGw7XG4gICAgdGhpcy52YWx1ZXMgPSBbXTtcblxuICAgIGlmICggT2JqZWN0LmtleXMoIHRoaXMuZnJvbSApLmxlbmd0aCA8IDEgKVxuICAgICAgT2JqZWN0LmtleXMoIHRoaXMudG8gKS5mb3JFYWNoKCBrZXkgPT4geyB0aGlzLmZyb21bIGtleSBdID0gdGhpcy50YXJnZXRbIGtleSBdOyB9ICk7XG5cbiAgICBPYmplY3Qua2V5cyggdGhpcy50byApLmZvckVhY2goIGtleSA9PiB7IHRoaXMudmFsdWVzLnB1c2goIGtleSApOyB9ICk7XG5cbiAgfVxuXG59XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgKCkgPT4ge30gKTtcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCAgZXZlbnQgPT4geyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9LCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcblxuY2xhc3MgRHJhZ2dhYmxlIHtcblxuICBjb25zdHJ1Y3RvciggZWxlbWVudCwgb3B0aW9ucyApIHtcblxuICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICBjdXJyZW50OiBuZXcgVEhSRUUuVmVjdG9yMigpLFxuICAgICAgc3RhcnQ6IG5ldyBUSFJFRS5WZWN0b3IyKCksXG4gICAgICBkZWx0YTogbmV3IFRIUkVFLlZlY3RvcjIoKSxcbiAgICAgIG9sZDogbmV3IFRIUkVFLlZlY3RvcjIoKSxcbiAgICAgIGRyYWc6IG5ldyBUSFJFRS5WZWN0b3IyKCksXG4gICAgfTtcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oIHtcbiAgICAgIGNhbGNEZWx0YTogZmFsc2UsXG4gICAgfSwgb3B0aW9ucyB8fCB7fSApO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnRvdWNoID0gbnVsbDtcblxuICAgIHRoaXMuZHJhZyA9IHtcblxuICAgICAgc3RhcnQ6ICggZXZlbnQgKSA9PiB7XG5cbiAgICAgICAgaWYgKCBldmVudC50eXBlID09ICdtb3VzZWRvd24nICYmIGV2ZW50LndoaWNoICE9IDEgKSByZXR1cm47XG4gICAgICAgIGlmICggZXZlbnQudHlwZSA9PSAndG91Y2hzdGFydCcgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxICkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nZXRQb3NpdGlvbkN1cnJlbnQoIGV2ZW50ICk7XG5cbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuY2FsY0RlbHRhICkge1xuXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi5zdGFydCA9IHRoaXMucG9zaXRpb24uY3VycmVudC5jbG9uZSgpO1xuICAgICAgICAgIHRoaXMucG9zaXRpb24uZGVsdGEuc2V0KCAwLCAwICk7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi5kcmFnLnNldCggMCwgMCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvdWNoID0gKCBldmVudC50eXBlID09ICd0b3VjaHN0YXJ0JyApO1xuXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQoIHRoaXMucG9zaXRpb24gKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggKCB0aGlzLnRvdWNoICkgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnLCB0aGlzLmRyYWcubW92ZSwgZmFsc2UgKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICggdGhpcy50b3VjaCApID8gJ3RvdWNoZW5kJyA6ICdtb3VzZXVwJywgdGhpcy5kcmFnLmVuZCwgZmFsc2UgKTtcblxuICAgICAgfSxcblxuICAgICAgbW92ZTogKCBldmVudCApID0+IHtcblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5jYWxjRGVsdGEgKSB7XG5cbiAgICAgICAgICB0aGlzLnBvc2l0aW9uLm9sZCA9IHRoaXMucG9zaXRpb24uY3VycmVudC5jbG9uZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldFBvc2l0aW9uQ3VycmVudCggZXZlbnQgKTtcblxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5jYWxjRGVsdGEgKSB7XG5cbiAgICAgICAgICB0aGlzLnBvc2l0aW9uLmRlbHRhID0gdGhpcy5wb3NpdGlvbi5jdXJyZW50LmNsb25lKCkuc3ViKCB0aGlzLnBvc2l0aW9uLm9sZCApO1xuICAgICAgICAgIHRoaXMucG9zaXRpb24uZHJhZyA9IHRoaXMucG9zaXRpb24uY3VycmVudC5jbG9uZSgpLnN1YiggdGhpcy5wb3NpdGlvbi5zdGFydCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uRHJhZ01vdmUoIHRoaXMucG9zaXRpb24gKTtcblxuICAgICAgfSxcblxuICAgICAgZW5kOiAoIGV2ZW50ICkgPT4ge1xuXG4gICAgICAgIHRoaXMuZ2V0UG9zaXRpb25DdXJyZW50KCBldmVudCApO1xuXG4gICAgICAgIHRoaXMub25EcmFnRW5kKCB0aGlzLnBvc2l0aW9uICk7XG5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICggdGhpcy50b3VjaCApID8gJ3RvdWNobW92ZScgOiAnbW91c2Vtb3ZlJywgdGhpcy5kcmFnLm1vdmUsIGZhbHNlICk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAoIHRoaXMudG91Y2ggKSA/ICd0b3VjaGVuZCcgOiAnbW91c2V1cCcsIHRoaXMuZHJhZy5lbmQsIGZhbHNlICk7XG5cbiAgICAgIH0sXG5cbiAgICB9O1xuXG4gICAgdGhpcy5vbkRyYWdTdGFydCA9ICgpID0+IHt9O1xuICAgIHRoaXMub25EcmFnTW92ZSA9ICgpID0+IHt9O1xuICAgIHRoaXMub25EcmFnRW5kID0gKCkgPT4ge307XG5cbiAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIGVuYWJsZSgpIHtcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRoaXMuZHJhZy5zdGFydCwgZmFsc2UgKTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIHRoaXMuZHJhZy5zdGFydCwgZmFsc2UgKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICBkaXNhYmxlKCkge1xuXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdGhpcy5kcmFnLnN0YXJ0LCBmYWxzZSApO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgdGhpcy5kcmFnLnN0YXJ0LCBmYWxzZSApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIGdldFBvc2l0aW9uQ3VycmVudCggZXZlbnQgKSB7XG5cbiAgICBjb25zdCBkcmFnRXZlbnQgPSBldmVudC50b3VjaGVzXG4gICAgICA/ICggZXZlbnQudG91Y2hlc1sgMCBdIHx8IGV2ZW50LmNoYW5nZWRUb3VjaGVzWyAwIF0gKVxuICAgICAgOiBldmVudDtcblxuICAgIHRoaXMucG9zaXRpb24uY3VycmVudC5zZXQoIGRyYWdFdmVudC5wYWdlWCwgZHJhZ0V2ZW50LnBhZ2VZICk7XG4gIH1cblxuICBjb252ZXJ0UG9zaXRpb24oIHBvc2l0aW9uICkge1xuXG4gICAgcG9zaXRpb24ueCA9ICggcG9zaXRpb24ueCAvIHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCApICogMiAtIDE7XG4gICAgcG9zaXRpb24ueSA9IC0gKCAoIHBvc2l0aW9uLnkgLyB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0ICkgKiAyIC0gMSApO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuXG4gIH1cblxufVxuXG5jb25zdCBTVElMTCA9IDA7XG5jb25zdCBQUkVQQVJJTkcgPSAxO1xuY29uc3QgUk9UQVRJTkcgPSAyO1xuY29uc3QgQU5JTUFUSU5HID0gMztcblxuY2xhc3MgQ29udHJvbHMge1xuXG4gIGNvbnN0cnVjdG9yKCBnYW1lICkge1xuXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgIHRoaXMuZmxpcENvbmZpZyA9IDA7XG5cbiAgICB0aGlzLmZsaXBFYXNpbmdzID0gWyBFYXNpbmcuUG93ZXIuT3V0KCAzICksIEVhc2luZy5TaW5lLk91dCgpLCBFYXNpbmcuQmFjay5PdXQoIDEuNSApIF07XG4gICAgdGhpcy5mbGlwU3BlZWRzID0gWyAxMjUsIDIwMCwgMzAwIF07XG5cbiAgICB0aGlzLnJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcblxuICAgIGNvbnN0IGhlbHBlck1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGRlcHRoV3JpdGU6IGZhbHNlLCB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTogMCwgY29sb3I6IDB4MDAzM2ZmIH0gKTtcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmdyb3VwLm5hbWUgPSAnY29udHJvbHMnO1xuICAgIHRoaXMuZ2FtZS5jdWJlLm9iamVjdC5hZGQoIHRoaXMuZ3JvdXAgKTtcblxuICAgIHRoaXMuaGVscGVyID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSggMjAwLCAyMDAgKSxcbiAgICAgIGhlbHBlck1hdGVyaWFsLmNsb25lKClcbiAgICApO1xuXG4gICAgdGhpcy5oZWxwZXIucm90YXRpb24uc2V0KCAwLCBNYXRoLlBJIC8gNCwgMCApO1xuICAgIHRoaXMuZ2FtZS53b3JsZC5zY2VuZS5hZGQoIHRoaXMuaGVscGVyICk7XG5cbiAgICB0aGlzLmVkZ2VzID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoIDEsIDEsIDEgKSxcbiAgICAgIGhlbHBlck1hdGVyaWFsLmNsb25lKCksXG4gICAgKTtcblxuICAgIHRoaXMuZ2FtZS53b3JsZC5zY2VuZS5hZGQoIHRoaXMuZWRnZXMgKTtcblxuICAgIHRoaXMub25Tb2x2ZWQgPSAoKSA9PiB7fTtcbiAgICB0aGlzLm9uTW92ZSA9ICgpID0+IHt9O1xuXG4gICAgdGhpcy5tb21lbnR1bSA9IFtdO1xuXG4gICAgdGhpcy5zY3JhbWJsZSA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IFNUSUxMO1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5pbml0RHJhZ2dhYmxlKCk7XG5cbiAgfVxuXG4gIGVuYWJsZSgpIHtcblxuICAgIHRoaXMuZHJhZ2dhYmxlLmVuYWJsZSgpO1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgfVxuXG4gIGRpc2FibGUoKSB7XG5cbiAgICB0aGlzLmRyYWdnYWJsZS5kaXNhYmxlKCk7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG5cbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoKSB7XG5cbiAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoIHRoaXMuZ2FtZS5kb20uZ2FtZSApO1xuXG4gICAgdGhpcy5kcmFnZ2FibGUub25EcmFnU3RhcnQgPSBwb3NpdGlvbiA9PiB7XG5cbiAgICAgIGlmICggdGhpcy5zY3JhbWJsZSAhPT0gbnVsbCApIHJldHVybjtcbiAgICAgIGlmICggdGhpcy5zdGF0ZSA9PT0gUFJFUEFSSU5HIHx8IHRoaXMuc3RhdGUgPT09IFJPVEFUSU5HICkgcmV0dXJuO1xuXG4gICAgICB0aGlzLmdldHRpbmdEcmFnID0gdGhpcy5zdGF0ZSA9PT0gQU5JTUFUSU5HO1xuXG4gICAgICBjb25zdCBlZGdlSW50ZXJzZWN0ID0gdGhpcy5nZXRJbnRlcnNlY3QoIHBvc2l0aW9uLmN1cnJlbnQsIHRoaXMuZWRnZXMsIGZhbHNlICk7XG5cbiAgICAgIGlmICggZWRnZUludGVyc2VjdCAhPT0gZmFsc2UgKSB7XG5cbiAgICAgICAgdGhpcy5kcmFnSW50ZXJzZWN0ID0gdGhpcy5nZXRJbnRlcnNlY3QoIHBvc2l0aW9uLmN1cnJlbnQsIHRoaXMuZ2FtZS5jdWJlLmN1YmVzLCB0cnVlICk7XG5cbiAgICAgIH1cblxuICAgICAgaWYgKCBlZGdlSW50ZXJzZWN0ICE9PSBmYWxzZSAmJiB0aGlzLmRyYWdJbnRlcnNlY3QgIT09IGZhbHNlICkge1xuXG4gICAgICAgIHRoaXMuZHJhZ05vcm1hbCA9IGVkZ2VJbnRlcnNlY3QuZmFjZS5ub3JtYWwucm91bmQoKTtcbiAgICAgICAgdGhpcy5mbGlwVHlwZSA9ICdsYXllcic7XG5cbiAgICAgICAgdGhpcy5hdHRhY2goIHRoaXMuaGVscGVyLCB0aGlzLmVkZ2VzICk7XG5cbiAgICAgICAgdGhpcy5oZWxwZXIucm90YXRpb24uc2V0KCAwLCAwLCAwICk7XG4gICAgICAgIHRoaXMuaGVscGVyLnBvc2l0aW9uLnNldCggMCwgMCwgMCApO1xuICAgICAgICB0aGlzLmhlbHBlci5sb29rQXQoIHRoaXMuZHJhZ05vcm1hbCApO1xuICAgICAgICB0aGlzLmhlbHBlci50cmFuc2xhdGVaKCAwLjUgKTtcbiAgICAgICAgdGhpcy5oZWxwZXIudXBkYXRlTWF0cml4V29ybGQoKTtcblxuICAgICAgICB0aGlzLmRldGFjaCggdGhpcy5oZWxwZXIsIHRoaXMuZWRnZXMgKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0aGlzLmRyYWdOb3JtYWwgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMCwgMSApO1xuICAgICAgICB0aGlzLmZsaXBUeXBlID0gJ2N1YmUnO1xuXG4gICAgICAgIHRoaXMuaGVscGVyLnBvc2l0aW9uLnNldCggMCwgMCwgMCApO1xuICAgICAgICB0aGlzLmhlbHBlci5yb3RhdGlvbi5zZXQoIDAsIE1hdGguUEkgLyA0LCAwICk7XG4gICAgICAgIHRoaXMuaGVscGVyLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XG5cbiAgICAgIH1cblxuICAgICAgbGV0IHBsYW5lSW50ZXJzZWN0ID0gdGhpcy5nZXRJbnRlcnNlY3QoIHBvc2l0aW9uLmN1cnJlbnQsIHRoaXMuaGVscGVyLCBmYWxzZSApO1xuICAgICAgaWYgKCBwbGFuZUludGVyc2VjdCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgIHRoaXMuZHJhZ0N1cnJlbnQgPSB0aGlzLmhlbHBlci53b3JsZFRvTG9jYWwoIHBsYW5lSW50ZXJzZWN0LnBvaW50ICk7XG4gICAgICB0aGlzLmRyYWdUb3RhbCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICB0aGlzLnN0YXRlID0gKCB0aGlzLnN0YXRlID09PSBTVElMTCApID8gUFJFUEFSSU5HIDogdGhpcy5zdGF0ZTtcblxuICAgIH07XG5cbiAgICB0aGlzLmRyYWdnYWJsZS5vbkRyYWdNb3ZlID0gcG9zaXRpb24gPT4ge1xuXG4gICAgICBpZiAoIHRoaXMuc2NyYW1ibGUgIT09IG51bGwgKSByZXR1cm47XG4gICAgICBpZiAoIHRoaXMuc3RhdGUgPT09IFNUSUxMIHx8ICggdGhpcy5zdGF0ZSA9PT0gQU5JTUFUSU5HICYmIHRoaXMuZ2V0dGluZ0RyYWcgPT09IGZhbHNlICkgKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHBsYW5lSW50ZXJzZWN0ID0gdGhpcy5nZXRJbnRlcnNlY3QoIHBvc2l0aW9uLmN1cnJlbnQsIHRoaXMuaGVscGVyLCBmYWxzZSApO1xuICAgICAgaWYgKCBwbGFuZUludGVyc2VjdCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5oZWxwZXIud29ybGRUb0xvY2FsKCBwbGFuZUludGVyc2VjdC5wb2ludC5jbG9uZSgpICk7XG5cbiAgICAgIHRoaXMuZHJhZ0RlbHRhID0gcG9pbnQuY2xvbmUoKS5zdWIoIHRoaXMuZHJhZ0N1cnJlbnQgKS5zZXRaKCAwICk7XG4gICAgICB0aGlzLmRyYWdUb3RhbC5hZGQoIHRoaXMuZHJhZ0RlbHRhICk7XG4gICAgICB0aGlzLmRyYWdDdXJyZW50ID0gcG9pbnQ7XG4gICAgICB0aGlzLmFkZE1vbWVudHVtUG9pbnQoIHRoaXMuZHJhZ0RlbHRhICk7XG5cbiAgICAgIGlmICggdGhpcy5zdGF0ZSA9PT0gUFJFUEFSSU5HICYmIHRoaXMuZHJhZ1RvdGFsLmxlbmd0aCgpID4gMC4wNSApIHtcblxuICAgICAgICB0aGlzLmRyYWdEaXJlY3Rpb24gPSB0aGlzLmdldE1haW5BeGlzKCB0aGlzLmRyYWdUb3RhbCApO1xuXG4gICAgICAgIGlmICggdGhpcy5mbGlwVHlwZSA9PT0gJ2xheWVyJyApIHtcblxuICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgICAgZGlyZWN0aW9uWyB0aGlzLmRyYWdEaXJlY3Rpb24gXSA9IDE7XG5cbiAgICAgICAgICBjb25zdCB3b3JsZERpcmVjdGlvbiA9IHRoaXMuaGVscGVyLmxvY2FsVG9Xb3JsZCggZGlyZWN0aW9uICkuc3ViKCB0aGlzLmhlbHBlci5wb3NpdGlvbiApO1xuICAgICAgICAgIGNvbnN0IG9iamVjdERpcmVjdGlvbiA9IHRoaXMuZWRnZXMud29ybGRUb0xvY2FsKCB3b3JsZERpcmVjdGlvbiApLnJvdW5kKCk7XG5cbiAgICAgICAgICB0aGlzLmZsaXBBeGlzID0gb2JqZWN0RGlyZWN0aW9uLmNyb3NzKCB0aGlzLmRyYWdOb3JtYWwgKS5uZWdhdGUoKTtcblxuICAgICAgICAgIHRoaXMuc2VsZWN0TGF5ZXIoIHRoaXMuZ2V0TGF5ZXIoIGZhbHNlICkgKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgY29uc3QgYXhpcyA9ICggdGhpcy5kcmFnRGlyZWN0aW9uICE9ICd4JyApXG4gICAgICAgICAgICA/ICggKCB0aGlzLmRyYWdEaXJlY3Rpb24gPT0gJ3knICYmIHBvc2l0aW9uLmN1cnJlbnQueCA+IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAvIDIgKSA/ICd6JyA6ICd4JyApXG4gICAgICAgICAgICA6ICd5JztcblxuICAgICAgICAgIHRoaXMuZmxpcEF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgICAgIHRoaXMuZmxpcEF4aXNbIGF4aXMgXSA9IDEgKiAoICggYXhpcyA9PSAneCcgKSA/IC0gMSA6IDEgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mbGlwQW5nbGUgPSAwO1xuICAgICAgICB0aGlzLnN0YXRlID0gUk9UQVRJTkc7XG5cbiAgICAgIH0gZWxzZSBpZiAoIHRoaXMuc3RhdGUgPT09IFJPVEFUSU5HICkge1xuXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uID0gdGhpcy5kcmFnRGVsdGFbIHRoaXMuZHJhZ0RpcmVjdGlvbiBdO1xuXG4gICAgICAgIGlmICggdGhpcy5mbGlwVHlwZSA9PT0gJ2xheWVyJyApIHsgXG5cbiAgICAgICAgICB0aGlzLmdyb3VwLnJvdGF0ZU9uQXhpcyggdGhpcy5mbGlwQXhpcywgcm90YXRpb24gKTtcbiAgICAgICAgICB0aGlzLmZsaXBBbmdsZSArPSByb3RhdGlvbjtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgdGhpcy5lZGdlcy5yb3RhdGVPbldvcmxkQXhpcyggdGhpcy5mbGlwQXhpcywgcm90YXRpb24gKTtcbiAgICAgICAgICB0aGlzLmdhbWUuY3ViZS5vYmplY3Qucm90YXRpb24uY29weSggdGhpcy5lZGdlcy5yb3RhdGlvbiApO1xuICAgICAgICAgIHRoaXMuZmxpcEFuZ2xlICs9IHJvdGF0aW9uO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfTtcblxuICAgIHRoaXMuZHJhZ2dhYmxlLm9uRHJhZ0VuZCA9IHBvc2l0aW9uID0+IHtcblxuICAgICAgaWYgKCB0aGlzLnNjcmFtYmxlICE9PSBudWxsICkgcmV0dXJuO1xuICAgICAgaWYgKCB0aGlzLnN0YXRlICE9PSBST1RBVElORyApIHtcblxuICAgICAgICB0aGlzLmdldHRpbmdEcmFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVElMTDtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBBTklNQVRJTkc7XG5cbiAgICAgIGNvbnN0IG1vbWVudHVtID0gdGhpcy5nZXRNb21lbnR1bSgpWyB0aGlzLmRyYWdEaXJlY3Rpb24gXTtcbiAgICAgIGNvbnN0IGZsaXAgPSAoIE1hdGguYWJzKCBtb21lbnR1bSApID4gMC4wNSAmJiBNYXRoLmFicyggdGhpcy5mbGlwQW5nbGUgKSA8IE1hdGguUEkgLyAyICk7XG5cbiAgICAgIGNvbnN0IGFuZ2xlID0gZmxpcFxuICAgICAgICA/IHRoaXMucm91bmRBbmdsZSggdGhpcy5mbGlwQW5nbGUgKyBNYXRoLnNpZ24oIHRoaXMuZmxpcEFuZ2xlICkgKiAoIE1hdGguUEkgLyA0ICkgKVxuICAgICAgICA6IHRoaXMucm91bmRBbmdsZSggdGhpcy5mbGlwQW5nbGUgKTtcblxuICAgICAgY29uc3QgZGVsdGEgPSBhbmdsZSAtIHRoaXMuZmxpcEFuZ2xlO1xuXG4gICAgICBpZiAoIHRoaXMuZmxpcFR5cGUgPT09ICdsYXllcicgKSB7XG5cbiAgICAgICAgdGhpcy5yb3RhdGVMYXllciggZGVsdGEsIGZhbHNlLCBsYXllciA9PiB7XG5cbiAgICAgICAgICB0aGlzLmdhbWUuc3RvcmFnZS5zYXZlR2FtZSgpO1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldHRpbmdEcmFnID8gUFJFUEFSSU5HIDogU1RJTEw7XG4gICAgICAgICAgdGhpcy5nZXR0aW5nRHJhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgdGhpcy5jaGVja0lzU29sdmVkKCk7XG5cbiAgICAgICAgfSApO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHRoaXMucm90YXRlQ3ViZSggZGVsdGEsICgpID0+IHtcblxuICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldHRpbmdEcmFnID8gUFJFUEFSSU5HIDogU1RJTEw7XG4gICAgICAgICAgdGhpcy5nZXR0aW5nRHJhZyA9IGZhbHNlO1xuXG4gICAgICAgIH0gKTtcblxuICAgICAgfVxuXG4gICAgfTtcblxuICB9XG5cbiAgcm90YXRlTGF5ZXIoIHJvdGF0aW9uLCBzY3JhbWJsZSwgY2FsbGJhY2sgKSB7XG5cbiAgICBjb25zdCBjb25maWcgPSBzY3JhbWJsZSA/IDAgOiB0aGlzLmZsaXBDb25maWc7XG5cbiAgICBjb25zdCBlYXNpbmcgPSB0aGlzLmZsaXBFYXNpbmdzWyBjb25maWcgXTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZmxpcFNwZWVkc1sgY29uZmlnIF07XG4gICAgY29uc3QgYm91bmNlID0gKCBjb25maWcgPT0gMiApID8gdGhpcy5ib3VuY2VDdWJlKCkgOiAoICgpID0+IHt9ICk7XG5cbiAgICB0aGlzLnJvdGF0aW9uVHdlZW4gPSBuZXcgVHdlZW4oIHtcbiAgICAgIGVhc2luZzogZWFzaW5nLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgb25VcGRhdGU6IHR3ZWVuID0+IHtcblxuICAgICAgICBsZXQgZGVsdGFBbmdsZSA9IHR3ZWVuLmRlbHRhICogcm90YXRpb247XG4gICAgICAgIHRoaXMuZ3JvdXAucm90YXRlT25BeGlzKCB0aGlzLmZsaXBBeGlzLCBkZWx0YUFuZ2xlICk7XG4gICAgICAgIGJvdW5jZSggdHdlZW4udmFsdWUsIGRlbHRhQW5nbGUsIHJvdGF0aW9uICk7XG5cbiAgICAgIH0sXG4gICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG5cbiAgICAgICAgaWYgKCAhIHNjcmFtYmxlICkgdGhpcy5vbk1vdmUoKTtcblxuICAgICAgICBjb25zdCBsYXllciA9IHRoaXMuZmxpcExheWVyLnNsaWNlKCAwICk7XG5cbiAgICAgICAgdGhpcy5nYW1lLmN1YmUub2JqZWN0LnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKCB0aGlzLnNuYXBSb3RhdGlvbiggdGhpcy5nYW1lLmN1YmUub2JqZWN0LnJvdGF0aW9uLnRvVmVjdG9yMygpICkgKTtcbiAgICAgICAgdGhpcy5ncm91cC5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyggdGhpcy5zbmFwUm90YXRpb24oIHRoaXMuZ3JvdXAucm90YXRpb24udG9WZWN0b3IzKCkgKSApO1xuICAgICAgICB0aGlzLmRlc2VsZWN0TGF5ZXIoIHRoaXMuZmxpcExheWVyICk7XG5cbiAgICAgICAgY2FsbGJhY2soIGxheWVyICk7XG5cbiAgICAgIH0sXG4gICAgfSApO1xuXG4gIH1cblxuICBib3VuY2VDdWJlKCkge1xuXG4gICAgbGV0IGZpeERlbHRhID0gdHJ1ZTtcblxuICAgIHJldHVybiAoIHByb2dyZXNzLCBkZWx0YSwgcm90YXRpb24gKSA9PiB7XG5cbiAgICAgICAgaWYgKCBwcm9ncmVzcyA+PSAxICkge1xuXG4gICAgICAgICAgaWYgKCBmaXhEZWx0YSApIHtcblxuICAgICAgICAgICAgZGVsdGEgPSAoIHByb2dyZXNzIC0gMSApICogcm90YXRpb247XG4gICAgICAgICAgICBmaXhEZWx0YSA9IGZhbHNlO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5nYW1lLmN1YmUub2JqZWN0LnJvdGF0ZU9uQXhpcyggdGhpcy5mbGlwQXhpcywgZGVsdGEgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIHJvdGF0ZUN1YmUoIHJvdGF0aW9uLCBjYWxsYmFjayApIHtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZmxpcENvbmZpZztcbiAgICBjb25zdCBlYXNpbmcgPSBbIEVhc2luZy5Qb3dlci5PdXQoIDQgKSwgRWFzaW5nLlNpbmUuT3V0KCksIEVhc2luZy5CYWNrLk91dCggMiApIF1bIGNvbmZpZyBdO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gWyAxMDAsIDE1MCwgMzUwIF1bIGNvbmZpZyBdO1xuXG4gICAgdGhpcy5yb3RhdGlvblR3ZWVuID0gbmV3IFR3ZWVuKCB7XG4gICAgICBlYXNpbmc6IGVhc2luZyxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIG9uVXBkYXRlOiB0d2VlbiA9PiB7XG5cbiAgICAgICAgdGhpcy5lZGdlcy5yb3RhdGVPbldvcmxkQXhpcyggdGhpcy5mbGlwQXhpcywgdHdlZW4uZGVsdGEgKiByb3RhdGlvbiApO1xuICAgICAgICB0aGlzLmdhbWUuY3ViZS5vYmplY3Qucm90YXRpb24uY29weSggdGhpcy5lZGdlcy5yb3RhdGlvbiApO1xuXG4gICAgICB9LFxuICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuXG4gICAgICAgIHRoaXMuZWRnZXMucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoIHRoaXMuc25hcFJvdGF0aW9uKCB0aGlzLmVkZ2VzLnJvdGF0aW9uLnRvVmVjdG9yMygpICkgKTtcbiAgICAgICAgdGhpcy5nYW1lLmN1YmUub2JqZWN0LnJvdGF0aW9uLmNvcHkoIHRoaXMuZWRnZXMucm90YXRpb24gKTtcbiAgICAgICAgY2FsbGJhY2soKTtcblxuICAgICAgfSxcbiAgICB9ICk7XG5cbiAgfVxuXG4gIHNlbGVjdExheWVyKCBsYXllciApIHtcblxuICAgIHRoaXMuZ3JvdXAucm90YXRpb24uc2V0KCAwLCAwLCAwICk7XG4gICAgdGhpcy5tb3ZlUGllY2VzKCBsYXllciwgdGhpcy5nYW1lLmN1YmUub2JqZWN0LCB0aGlzLmdyb3VwICk7XG4gICAgdGhpcy5mbGlwTGF5ZXIgPSBsYXllcjtcblxuICB9XG5cbiAgZGVzZWxlY3RMYXllciggbGF5ZXIgKSB7XG5cbiAgICB0aGlzLm1vdmVQaWVjZXMoIGxheWVyLCB0aGlzLmdyb3VwLCB0aGlzLmdhbWUuY3ViZS5vYmplY3QgKTtcbiAgICB0aGlzLmZsaXBMYXllciA9IG51bGw7XG5cbiAgfVxuXG4gIG1vdmVQaWVjZXMoIGxheWVyLCBmcm9tLCB0byApIHtcblxuICAgIGZyb20udXBkYXRlTWF0cml4V29ybGQoKTtcbiAgICB0by51cGRhdGVNYXRyaXhXb3JsZCgpO1xuXG4gICAgbGF5ZXIuZm9yRWFjaCggaW5kZXggPT4ge1xuXG4gICAgICBjb25zdCBwaWVjZSA9IHRoaXMuZ2FtZS5jdWJlLnBpZWNlc1sgaW5kZXggXTtcblxuICAgICAgcGllY2UuYXBwbHlNYXRyaXgoIGZyb20ubWF0cml4V29ybGQgKTtcbiAgICAgIGZyb20ucmVtb3ZlKCBwaWVjZSApO1xuICAgICAgcGllY2UuYXBwbHlNYXRyaXgoIG5ldyBUSFJFRS5NYXRyaXg0KCkuZ2V0SW52ZXJzZSggdG8ubWF0cml4V29ybGQgKSApO1xuICAgICAgdG8uYWRkKCBwaWVjZSApO1xuXG4gICAgfSApO1xuXG4gIH1cblxuICBnZXRMYXllciggcG9zaXRpb24gKSB7XG5cbiAgICBjb25zdCBzY2FsYXIgPSB7IDI6IDYsIDM6IDMsIDQ6IDQsIDU6IDMgfVsgdGhpcy5nYW1lLmN1YmUuc2l6ZSBdO1xuICAgIGNvbnN0IGxheWVyID0gW107XG5cbiAgICBsZXQgYXhpcztcblxuICAgIGlmICggcG9zaXRpb24gPT09IGZhbHNlICkge1xuXG4gICAgICBjb25zdCBwaWVjZSA9IHRoaXMuZHJhZ0ludGVyc2VjdC5vYmplY3QucGFyZW50O1xuXG4gICAgICBheGlzID0gdGhpcy5nZXRNYWluQXhpcyggdGhpcy5mbGlwQXhpcyApO1xuICAgICAgcG9zaXRpb24gPSBwaWVjZS5wb3NpdGlvbi5jbG9uZSgpIC5tdWx0aXBseVNjYWxhciggc2NhbGFyICkgLnJvdW5kKCk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBheGlzID0gdGhpcy5nZXRNYWluQXhpcyggcG9zaXRpb24gKTtcblxuICAgIH1cblxuICAgIHRoaXMuZ2FtZS5jdWJlLnBpZWNlcy5mb3JFYWNoKCBwaWVjZSA9PiB7XG5cbiAgICAgIGNvbnN0IHBpZWNlUG9zaXRpb24gPSBwaWVjZS5wb3NpdGlvbi5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKCBzY2FsYXIgKS5yb3VuZCgpO1xuXG4gICAgICBpZiAoIHBpZWNlUG9zaXRpb25bIGF4aXMgXSA9PSBwb3NpdGlvblsgYXhpcyBdICkgbGF5ZXIucHVzaCggcGllY2UubmFtZSApO1xuXG4gICAgfSApO1xuXG4gICAgcmV0dXJuIGxheWVyO1xuXG4gIH1cblxuICBrZXlib2FyZE1vdmUoIHR5cGUsIG1vdmUsIGNhbGxiYWNrICkge1xuXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSBTVElMTCApIHJldHVybjtcbiAgICBpZiAoIHRoaXMuZW5hYmxlZCAhPT0gdHJ1ZSApIHJldHVybjtcblxuICAgIGlmICggdHlwZSA9PT0gJ0xBWUVSJyApIHtcblxuICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLmdldExheWVyKCBtb3ZlLnBvc2l0aW9uICk7XG5cbiAgICAgIHRoaXMuZmxpcEF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgdGhpcy5mbGlwQXhpc1sgbW92ZS5heGlzIF0gPSAxO1xuICAgICAgdGhpcy5zdGF0ZSA9IFJPVEFUSU5HO1xuXG4gICAgICB0aGlzLnNlbGVjdExheWVyKCBsYXllciApO1xuICAgICAgdGhpcy5yb3RhdGVMYXllciggbW92ZS5hbmdsZSwgZmFsc2UsIGxheWVyID0+IHtcblxuICAgICAgICB0aGlzLmdhbWUuc3RvcmFnZS5zYXZlR2FtZSgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gU1RJTEw7XG4gICAgICAgIHRoaXMuY2hlY2tJc1NvbHZlZCgpO1xuXG4gICAgICB9ICk7XG5cbiAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAnQ1VCRScgKSB7XG5cbiAgICAgIHRoaXMuZmxpcEF4aXMgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgdGhpcy5mbGlwQXhpc1sgbW92ZS5heGlzIF0gPSAxO1xuICAgICAgdGhpcy5zdGF0ZSA9IFJPVEFUSU5HO1xuXG4gICAgICB0aGlzLnJvdGF0ZUN1YmUoIG1vdmUuYW5nbGUsICgpID0+IHtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU1RJTEw7XG5cbiAgICAgIH0gKTtcblxuICAgIH1cblxuICB9XG5cbiAgc2NyYW1ibGVDdWJlKCkge1xuXG4gICAgaWYgKCB0aGlzLnNjcmFtYmxlID09IG51bGwgKSB7XG5cbiAgICAgIHRoaXMuc2NyYW1ibGUgPSB0aGlzLmdhbWUuc2NyYW1ibGVyO1xuICAgICAgdGhpcy5zY3JhbWJsZS5jYWxsYmFjayA9ICggdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nICkgPyAoKSA9PiB7fSA6IGNhbGxiYWNrO1xuXG4gICAgfVxuXG4gICAgY29uc3QgY29udmVydGVkID0gdGhpcy5zY3JhbWJsZS5jb252ZXJ0ZWQ7XG4gICAgY29uc3QgbW92ZSA9IGNvbnZlcnRlZFsgMCBdO1xuICAgIGNvbnN0IGxheWVyID0gdGhpcy5nZXRMYXllciggbW92ZS5wb3NpdGlvbiApO1xuXG4gICAgdGhpcy5mbGlwQXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgdGhpcy5mbGlwQXhpc1sgbW92ZS5heGlzIF0gPSAxO1xuXG4gICAgdGhpcy5zZWxlY3RMYXllciggbGF5ZXIgKTtcbiAgICB0aGlzLnJvdGF0ZUxheWVyKCBtb3ZlLmFuZ2xlLCB0cnVlLCAoKSA9PiB7XG5cbiAgICAgIGNvbnZlcnRlZC5zaGlmdCgpO1xuXG4gICAgICBpZiAoIGNvbnZlcnRlZC5sZW5ndGggPiAwICkge1xuXG4gICAgICAgIHRoaXMuc2NyYW1ibGVDdWJlKCk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdGhpcy5zY3JhbWJsZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2FtZS5zdG9yYWdlLnNhdmVHYW1lKCk7XG5cbiAgICAgIH1cblxuICAgIH0gKTtcblxuICB9XG5cbiAgZ2V0SW50ZXJzZWN0KCBwb3NpdGlvbiwgb2JqZWN0LCBtdWx0aXBsZSApIHtcblxuICAgIHRoaXMucmF5Y2FzdGVyLnNldEZyb21DYW1lcmEoXG4gICAgICB0aGlzLmRyYWdnYWJsZS5jb252ZXJ0UG9zaXRpb24oIHBvc2l0aW9uLmNsb25lKCkgKSxcbiAgICAgIHRoaXMuZ2FtZS53b3JsZC5jYW1lcmFcbiAgICApO1xuXG4gICAgY29uc3QgaW50ZXJzZWN0ID0gKCBtdWx0aXBsZSApXG4gICAgICA/IHRoaXMucmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoIG9iamVjdCApXG4gICAgICA6IHRoaXMucmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdCggb2JqZWN0ICk7XG5cbiAgICByZXR1cm4gKCBpbnRlcnNlY3QubGVuZ3RoID4gMCApID8gaW50ZXJzZWN0WyAwIF0gOiBmYWxzZTtcblxuICB9XG5cbiAgZ2V0TWFpbkF4aXMoIHZlY3RvciApIHtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyggdmVjdG9yICkucmVkdWNlKFxuICAgICAgKCBhLCBiICkgPT4gTWF0aC5hYnMoIHZlY3RvclsgYSBdICkgPiBNYXRoLmFicyggdmVjdG9yWyBiIF0gKSA/IGEgOiBiXG4gICAgKTtcblxuICB9XG5cbiAgZGV0YWNoKCBjaGlsZCwgcGFyZW50ICkge1xuXG4gICAgY2hpbGQuYXBwbHlNYXRyaXgoIHBhcmVudC5tYXRyaXhXb3JsZCApO1xuICAgIHBhcmVudC5yZW1vdmUoIGNoaWxkICk7XG4gICAgdGhpcy5nYW1lLndvcmxkLnNjZW5lLmFkZCggY2hpbGQgKTtcblxuICB9XG5cbiAgYXR0YWNoKCBjaGlsZCwgcGFyZW50ICkge1xuXG4gICAgY2hpbGQuYXBwbHlNYXRyaXgoIG5ldyBUSFJFRS5NYXRyaXg0KCkuZ2V0SW52ZXJzZSggcGFyZW50Lm1hdHJpeFdvcmxkICkgKTtcbiAgICB0aGlzLmdhbWUud29ybGQuc2NlbmUucmVtb3ZlKCBjaGlsZCApO1xuICAgIHBhcmVudC5hZGQoIGNoaWxkICk7XG5cbiAgfVxuXG4gIGFkZE1vbWVudHVtUG9pbnQoIGRlbHRhICkge1xuXG4gICAgY29uc3QgdGltZSA9IERhdGUubm93KCk7XG5cbiAgICB0aGlzLm1vbWVudHVtID0gdGhpcy5tb21lbnR1bS5maWx0ZXIoIG1vbWVudCA9PiB0aW1lIC0gbW9tZW50LnRpbWUgPCA1MDAgKTtcblxuICAgIGlmICggZGVsdGEgIT09IGZhbHNlICkgdGhpcy5tb21lbnR1bS5wdXNoKCB7IGRlbHRhLCB0aW1lIH0gKTtcblxuICB9XG5cbiAgZ2V0TW9tZW50dW0oKSB7XG5cbiAgICBjb25zdCBwb2ludHMgPSB0aGlzLm1vbWVudHVtLmxlbmd0aDtcbiAgICBjb25zdCBtb21lbnR1bSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICB0aGlzLmFkZE1vbWVudHVtUG9pbnQoIGZhbHNlICk7XG5cbiAgICB0aGlzLm1vbWVudHVtLmZvckVhY2goICggcG9pbnQsIGluZGV4ICkgPT4ge1xuXG4gICAgICBtb21lbnR1bS5hZGQoIHBvaW50LmRlbHRhLm11bHRpcGx5U2NhbGFyKCBpbmRleCAvIHBvaW50cyApICk7XG5cbiAgICB9ICk7XG5cbiAgICByZXR1cm4gbW9tZW50dW07XG5cbiAgfVxuXG4gIHJvdW5kQW5nbGUoIGFuZ2xlICkge1xuXG4gICAgY29uc3Qgcm91bmQgPSBNYXRoLlBJIC8gMjtcbiAgICByZXR1cm4gTWF0aC5zaWduKCBhbmdsZSApICogTWF0aC5yb3VuZCggTWF0aC5hYnMoIGFuZ2xlKSAvIHJvdW5kICkgKiByb3VuZDtcblxuICB9XG5cbiAgc25hcFJvdGF0aW9uKCBhbmdsZSApIHtcblxuICAgIHJldHVybiBhbmdsZS5zZXQoXG4gICAgICB0aGlzLnJvdW5kQW5nbGUoIGFuZ2xlLnggKSxcbiAgICAgIHRoaXMucm91bmRBbmdsZSggYW5nbGUueSApLFxuICAgICAgdGhpcy5yb3VuZEFuZ2xlKCBhbmdsZS56IClcbiAgICApO1xuXG4gIH1cblxuICBjaGVja0lzU29sdmVkKCkge1xuXG4gICAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIGxldCBzb2x2ZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNpZGVzID0geyAneC0nOiBbXSwgJ3grJzogW10sICd5LSc6IFtdLCAneSsnOiBbXSwgJ3otJzogW10sICd6Kyc6IFtdIH07XG5cbiAgICB0aGlzLmdhbWUuY3ViZS5lZGdlcy5mb3JFYWNoKCBlZGdlID0+IHtcblxuICAgICAgY29uc3QgcG9zaXRpb24gPSBlZGdlLnBhcmVudFxuICAgICAgICAubG9jYWxUb1dvcmxkKCBlZGdlLnBvc2l0aW9uLmNsb25lKCkgKVxuICAgICAgICAuc3ViKCB0aGlzLmdhbWUuY3ViZS5vYmplY3QucG9zaXRpb24gKTtcblxuICAgICAgY29uc3QgbWFpbkF4aXMgPSB0aGlzLmdldE1haW5BeGlzKCBwb3NpdGlvbiApO1xuICAgICAgY29uc3QgbWFpblNpZ24gPSBwb3NpdGlvbi5tdWx0aXBseVNjYWxhciggMiApLnJvdW5kKClbIG1haW5BeGlzIF0gPCAxID8gJy0nIDogJysnO1xuXG4gICAgICBzaWRlc1sgbWFpbkF4aXMgKyBtYWluU2lnbiBdLnB1c2goIGVkZ2UubmFtZSApO1xuXG4gICAgfSApO1xuXG4gICAgT2JqZWN0LmtleXMoIHNpZGVzICkuZm9yRWFjaCggc2lkZSA9PiB7XG5cbiAgICAgIGlmICggISBzaWRlc1sgc2lkZSBdLmV2ZXJ5KCB2YWx1ZSA9PiB2YWx1ZSA9PT0gc2lkZXNbIHNpZGUgXVsgMCBdICkgKSBzb2x2ZWQgPSBmYWxzZTtcblxuICAgIH0gKTtcblxuICAgIGlmICggc29sdmVkICkgdGhpcy5vblNvbHZlZCgpO1xuXG4gIH1cblxufVxuXG5jbGFzcyBTY3JhbWJsZXIge1xuXG4gIGNvbnN0cnVjdG9yKCBnYW1lICkge1xuXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgIHRoaXMuZGlmaWN1bHR5ID0gMDtcblxuICAgIHRoaXMuc2NyYW1ibGVMZW5ndGggPSB7XG4gICAgICAyOiBbIDcsIDksIDExIF0sXG4gICAgICAzOiBbIDIwLCAyNSwgMzAgXSxcbiAgICAgIDQ6IFsgMzAsIDQwLCA1MCBdLFxuICAgICAgNTogWyA0MCwgNjAsIDgwIF0sXG4gICAgfTtcblxuICAgIHRoaXMubW92ZXMgPSBbXTtcbiAgICB0aGlzLmNvbnZldGVkID0gW107XG4gICAgdGhpcy5wcmluZyA9ICcnO1xuXG4gIH1cblxuICBzY3JhbWJsZSggc2NyYW1ibGUgKSB7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHRoaXMubW92ZXMgPSAoIHR5cGVvZiBzY3JhbWJsZSAhPT0gJ3VuZGVmaW5lZCcgKSA/IHNjcmFtYmxlLnNwbGl0KCAnICcgKSA6IFtdO1xuXG4gICAgaWYgKCB0aGlzLm1vdmVzLmxlbmd0aCA8IDEgKSB7XG5cbiAgICAgIGNvbnN0IHNjcmFtYmxlTGVuZ3RoID0gdGhpcy5zY3JhbWJsZUxlbmd0aFsgdGhpcy5nYW1lLmN1YmUuc2l6ZSBdWyB0aGlzLmRpZmljdWx0eSBdO1xuXG4gICAgICBjb25zdCBmYWNlcyA9IHRoaXMuZ2FtZS5jdWJlLnNpemUgPCA0ID8gJ1VETFJGQicgOiAnVXVEZExsUnJGZkJiJztcbiAgICAgIGNvbnN0IG1vZGlmaWVycyA9IFsgXCJcIiwgXCInXCIsIFwiMlwiIF07XG4gICAgICBjb25zdCB0b3RhbCA9ICggdHlwZW9mIHNjcmFtYmxlID09PSAndW5kZWZpbmVkJyApID8gc2NyYW1ibGVMZW5ndGggOiBzY3JhbWJsZTtcblxuICAgICAgd2hpbGUgKCBjb3VudCA8IHRvdGFsICkge1xuXG4gICAgICAgIGNvbnN0IG1vdmUgPVxuICAgICAgICAgIGZhY2VzWyBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogZmFjZXMubGVuZ3RoICkgXSArXG4gICAgICAgICAgbW9kaWZpZXJzWyBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogMyApIF07XG5cbiAgICAgICAgaWYgKCBjb3VudCA+IDAgJiYgbW92ZS5jaGFyQXQoIDAgKSA9PSB0aGlzLm1vdmVzWyBjb3VudCAtIDEgXS5jaGFyQXQoIDAgKSApIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIGNvdW50ID4gMSAmJiBtb3ZlLmNoYXJBdCggMCApID09IHRoaXMubW92ZXNbIGNvdW50IC0gMiBdLmNoYXJBdCggMCApICkgY29udGludWU7XG5cbiAgICAgICAgdGhpcy5tb3Zlcy5wdXNoKCBtb3ZlICk7XG4gICAgICAgIGNvdW50ICsrO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLmNhbGxiYWNrID0gKCkgPT4ge307XG4gICAgdGhpcy5jb252ZXJ0KCk7XG4gICAgdGhpcy5wcmludCA9IHRoaXMubW92ZXMuam9pbiggJyAnICk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgY29udmVydCggbW92ZXMgKSB7XG5cbiAgICB0aGlzLmNvbnZlcnRlZCA9IFtdO1xuXG4gICAgdGhpcy5tb3Zlcy5mb3JFYWNoKCBtb3ZlID0+IHtcblxuICAgICAgY29uc3QgY29udmVydGVkTW92ZSA9IHRoaXMuY29udmVydE1vdmUoIG1vdmUgKTtcbiAgICAgIGNvbnN0IG1vZGlmaWVyID0gbW92ZS5jaGFyQXQoIDEgKTtcblxuICAgICAgdGhpcy5jb252ZXJ0ZWQucHVzaCggY29udmVydGVkTW92ZSApO1xuICAgICAgaWYgKCBtb2RpZmllciA9PSBcIjJcIiApIHRoaXMuY29udmVydGVkLnB1c2goIGNvbnZlcnRlZE1vdmUgKTtcblxuICAgIH0gKTtcblxuICB9XG5cbiAgY29udmVydE1vdmUoIG1vdmUgKSB7XG5cbiAgICBjb25zdCBmYWNlID0gbW92ZS5jaGFyQXQoIDAgKTtcbiAgICBjb25zdCBtb2RpZmllciA9IG1vdmUuY2hhckF0KCAxICk7XG5cbiAgICBjb25zdCBheGlzID0geyBEOiAneScsIFU6ICd5JywgTDogJ3gnLCBSOiAneCcsIEY6ICd6JywgQjogJ3onIH1bIGZhY2UudG9VcHBlckNhc2UoKSBdO1xuICAgIGxldCByb3cgPSB7IEQ6IC0xLCBVOiAxLCBMOiAtMSwgUjogMSwgRjogMSwgQjogLTEgfVsgZmFjZS50b1VwcGVyQ2FzZSgpIF07XG5cbiAgICBpZiAoIHRoaXMuZ2FtZS5jdWJlLnNpemUgPiAzICYmIGZhY2UgIT09IGZhY2UudG9Mb3dlckNhc2UoKSApIHJvdyA9IHJvdyAqIDI7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgcG9zaXRpb25bIHsgRDogJ3knLCBVOiAneScsIEw6ICd4JywgUjogJ3gnLCBGOiAneicsIEI6ICd6JyB9WyBmYWNlLnRvVXBwZXJDYXNlKCkgXSBdID0gcm93O1xuXG4gICAgY29uc3QgYW5nbGUgPSAoIE1hdGguUEkgLyAyICkgKiAtIHJvdyAqICggKCBtb2RpZmllciA9PSBcIidcIiApID8gLSAxIDogMSApO1xuXG4gICAgcmV0dXJuIHsgcG9zaXRpb24sIGF4aXMsIGFuZ2xlLCBuYW1lOiBtb3ZlIH07XG5cbiAgfVxuXG59XG5cbmNsYXNzIFRyYW5zaXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKCBnYW1lICkge1xuXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgIHRoaXMudHdlZW5zID0ge307XG4gICAgdGhpcy5kdXJhdGlvbnMgPSB7fTtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBjdWJlWTogLTAuMixcbiAgICAgIGNhbWVyYVpvb206IDAuODUsXG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZlVHJhbnNpdGlvbnMgPSAwO1xuXG4gIH1cblxuICBpbml0KCkge1xuXG4gICAgdGhpcy5nYW1lLmNvbnRyb2xzLmRpc2FibGUoKTtcblxuICAgIHRoaXMuZ2FtZS5jdWJlLm9iamVjdC5wb3NpdGlvbi55ID0gdGhpcy5kYXRhLmN1YmVZO1xuICAgIHRoaXMuZ2FtZS5jdWJlLmFuaW1hdG9yLnBvc2l0aW9uLnkgPSA0O1xuICAgIHRoaXMuZ2FtZS5jdWJlLmFuaW1hdG9yLnJvdGF0aW9uLnggPSAtIE1hdGguUEkgLyAzO1xuICAgIHRoaXMuZ2FtZS53b3JsZC5jYW1lcmEuem9vbSA9IHRoaXMuZGF0YS5jYW1lcmFab29tO1xuICAgIHRoaXMuZ2FtZS53b3JsZC5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgdGhpcy50d2VlbnMuYnV0dG9ucyA9IHt9O1xuICAgIHRoaXMudHdlZW5zLnRpbWVyID0gW107XG4gICAgdGhpcy50d2VlbnMudGl0bGUgPSBbXTtcbiAgICB0aGlzLnR3ZWVucy5iZXN0ID0gW107XG4gICAgdGhpcy50d2VlbnMuY29tcGxldGUgPSBbXTtcbiAgICB0aGlzLnR3ZWVucy5wcmVmcyA9IFtdO1xuICAgIHRoaXMudHdlZW5zLnRoZW1lID0gW107XG4gICAgdGhpcy50d2VlbnMuc3RhdHMgPSBbXTtcblxuICB9XG5cbiAgYnV0dG9ucyggc2hvdywgaGlkZSApIHtcblxuICAgIGNvbnN0IGJ1dHRvblR3ZWVuID0gKCBidXR0b24sIHNob3cgKSA9PiB7XG5cbiAgICAgIHJldHVybiBuZXcgVHdlZW4oIHtcbiAgICAgICAgdGFyZ2V0OiBidXR0b24uc3R5bGUsXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgIGVhc2luZzogc2hvdyA/IEVhc2luZy5Qb3dlci5PdXQoIDIgKSA6IEVhc2luZy5Qb3dlci5JbiggMyApLFxuICAgICAgICBmcm9tOiB7IG9wYWNpdHk6IHNob3cgPyAwIDogMSB9LFxuICAgICAgICB0bzogeyBvcGFjaXR5OiBzaG93ID8gMSA6IDAgfSxcbiAgICAgICAgb25VcGRhdGU6IHR3ZWVuID0+IHtcblxuICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHNob3cgPyAxIC0gdHdlZW4udmFsdWUgOiB0d2Vlbi52YWx1ZTtcbiAgICAgICAgICBidXR0b24uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsICR7dHJhbnNsYXRlICogMS41fWVtLCAwKWA7XG5cbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4gYnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBzaG93ID8gJ2FsbCcgOiAnbm9uZSdcbiAgICAgIH0gKTtcblxuICAgIH07XG5cbiAgICBoaWRlLmZvckVhY2goIGJ1dHRvbiA9PlxuICAgICAgdGhpcy50d2VlbnMuYnV0dG9uc1sgYnV0dG9uIF0gPSBidXR0b25Ud2VlbiggdGhpcy5nYW1lLmRvbS5idXR0b25zWyBidXR0b24gXSwgZmFsc2UgKVxuICAgICk7XG5cbiAgICBzZXRUaW1lb3V0KCAoKSA9PiBzaG93LmZvckVhY2goIGJ1dHRvbiA9PiB7XG5cbiAgICAgIHRoaXMudHdlZW5zLmJ1dHRvbnNbIGJ1dHRvbiBdID0gYnV0dG9uVHdlZW4oIHRoaXMuZ2FtZS5kb20uYnV0dG9uc1sgYnV0dG9uIF0sIHRydWUgKTtcblxuICAgIH0gKSwgaGlkZSA/IDUwMCA6IDAgKTtcblxuICB9XG5cbiAgY3ViZSggc2hvdywgdGhlbWluZyA9IGZhbHNlICkge1xuXG4gICAgdGhpcy5hY3RpdmVUcmFuc2l0aW9ucysrO1xuXG4gICAgdHJ5IHsgdGhpcy50d2VlbnMuY3ViZS5zdG9wKCk7IH0gY2F0Y2goZSkge31cbiAgICBjb25zdCBjdXJyZW50WSA9IHRoaXMuZ2FtZS5jdWJlLmFuaW1hdG9yLnBvc2l0aW9uLnk7XG4gICAgY29uc3QgY3VycmVudFJvdGF0aW9uID0gdGhpcy5nYW1lLmN1YmUuYW5pbWF0b3Iucm90YXRpb24ueDtcblxuICAgIHRoaXMudHdlZW5zLmN1YmUgPSBuZXcgVHdlZW4oIHtcbiAgICAgIGR1cmF0aW9uOiBzaG93ID8gMzAwMCA6IDEyNTAsXG4gICAgICBlYXNpbmc6IHNob3cgPyBFYXNpbmcuRWxhc3RpYy5PdXQoIDAuOCwgMC42ICkgOiBFYXNpbmcuQmFjay5JbiggMSApLFxuICAgICAgb25VcGRhdGU6IHR3ZWVuID0+IHtcblxuICAgICAgICB0aGlzLmdhbWUuY3ViZS5hbmltYXRvci5wb3NpdGlvbi55ID0gc2hvd1xuICAgICAgICAgID8gKCB0aGVtaW5nID8gMC45ICsgKCAxIC0gdHdlZW4udmFsdWUgKSAqIDMuNSA6ICggMSAtIHR3ZWVuLnZhbHVlICkgKiA0IClcbiAgICAgICAgICA6IGN1cnJlbnRZICsgdHdlZW4udmFsdWUgKiA0O1xuXG4gICAgICAgIHRoaXMuZ2FtZS5jdWJlLmFuaW1hdG9yLnJvdGF0aW9uLnggPSBzaG93XG4gICAgICAgICAgPyAoIDEgLSB0d2Vlbi52YWx1ZSApICogTWF0aC5QSSAvIDNcbiAgICAgICAgICA6IGN1cnJlbnRSb3RhdGlvbiArIHR3ZWVuLnZhbHVlICogLSBNYXRoLlBJIC8gMztcblxuICAgICAgfSxcbiAgICB9ICk7XG5cbiAgICBpZiAoIHRoZW1pbmcgKSB7XG5cbiAgICAgIGlmICggc2hvdyApIHtcblxuICAgICAgICB0aGlzLmdhbWUud29ybGQuY2FtZXJhLnpvb20gPSAwLjc1O1xuICAgICAgICB0aGlzLmdhbWUud29ybGQuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG5cbiAgICAgICAgICB0aGlzLmdhbWUud29ybGQuY2FtZXJhLnpvb20gPSB0aGlzLmRhdGEuY2FtZXJhWm9vbTtcbiAgICAgICAgICB0aGlzLmdhbWUud29ybGQuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICB9LCAxNTAwICk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuZHVyYXRpb25zLmN1YmUgPSBzaG93ID8gMTUwMCA6IDE1MDA7XG5cbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmFjdGl2ZVRyYW5zaXRpb25zLS0sIHRoaXMuZHVyYXRpb25zLmN1YmUgKTtcblxuICB9XG5cbiAgZmxvYXQoKSB7XG5cbiAgICB0cnkgeyB0aGlzLnR3ZWVucy5mbG9hdC5zdG9wKCk7IH0gY2F0Y2goZSkge31cbiAgICB0aGlzLnR3ZWVucy5mbG9hdCA9IG5ldyBUd2Vlbigge1xuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICBlYXNpbmc6IEVhc2luZy5TaW5lLkluT3V0KCksXG4gICAgICB5b3lvOiB0cnVlLFxuICAgICAgb25VcGRhdGU6IHR3ZWVuID0+IHtcblxuICAgICAgICB0aGlzLmdhbWUuY3ViZS5ob2xkZXIucG9zaXRpb24ueSA9ICgtIDAuMDIgKyB0d2Vlbi52YWx1ZSAqIDAuMDQpOyBcbiAgICAgICAgdGhpcy5nYW1lLmN1YmUuaG9sZGVyLnJvdGF0aW9uLnggPSAwLjAwNSAtIHR3ZWVuLnZhbHVlICogMC4wMTtcbiAgICAgICAgdGhpcy5nYW1lLmN1YmUuaG9sZGVyLnJvdGF0aW9uLnogPSAtIHRoaXMuZ2FtZS5jdWJlLmhvbGRlci5yb3RhdGlvbi54O1xuICAgICAgICB0aGlzLmdhbWUuY3ViZS5ob2xkZXIucm90YXRpb24ueSA9IHRoaXMuZ2FtZS5jdWJlLmhvbGRlci5yb3RhdGlvbi54O1xuXG4gICAgICAgIHRoaXMuZ2FtZS5jb250cm9scy5lZGdlcy5wb3NpdGlvbi55ID1cbiAgICAgICAgICB0aGlzLmdhbWUuY3ViZS5ob2xkZXIucG9zaXRpb24ueSArIHRoaXMuZ2FtZS5jdWJlLm9iamVjdC5wb3NpdGlvbi55O1xuXG4gICAgICB9LFxuICAgIH0gKTtcblxuICB9XG5cbiAgem9vbSggcGxheSwgdGltZSApIHtcblxuICAgIHRoaXMuYWN0aXZlVHJhbnNpdGlvbnMrKztcblxuICAgIGNvbnN0IHpvb20gPSAoIHBsYXkgKSA/IDEgOiB0aGlzLmRhdGEuY2FtZXJhWm9vbTtcbiAgICBjb25zdCBkdXJhdGlvbiA9ICggdGltZSA+IDAgKSA/IE1hdGgubWF4KCB0aW1lLCAxNTAwICkgOiAxNTAwO1xuICAgIGNvbnN0IHJvdGF0aW9ucyA9ICggdGltZSA+IDAgKSA/IE1hdGgucm91bmQoIGR1cmF0aW9uIC8gMTUwMCApIDogMTtcbiAgICBjb25zdCBlYXNpbmcgPSBFYXNpbmcuUG93ZXIuSW5PdXQoICggdGltZSA+IDAgKSA/IDIgOiAzICk7XG5cbiAgICB0aGlzLnR3ZWVucy56b29tID0gbmV3IFR3ZWVuKCB7XG4gICAgICB0YXJnZXQ6IHRoaXMuZ2FtZS53b3JsZC5jYW1lcmEsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNpbmc6IGVhc2luZyxcbiAgICAgIHRvOiB7IHpvb206IHpvb20gfSxcbiAgICAgIG9uVXBkYXRlOiAoKSA9PiB7IHRoaXMuZ2FtZS53b3JsZC5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpOyB9LFxuICAgIH0gKTtcblxuICAgIHRoaXMudHdlZW5zLnJvdGF0ZSA9IG5ldyBUd2Vlbigge1xuICAgICAgdGFyZ2V0OiB0aGlzLmdhbWUuY3ViZS5hbmltYXRvci5yb3RhdGlvbixcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2luZzogZWFzaW5nLFxuICAgICAgdG86IHsgeTogLSBNYXRoLlBJICogMiAqIHJvdGF0aW9ucyB9LFxuICAgICAgb25Db21wbGV0ZTogKCkgPT4geyB0aGlzLmdhbWUuY3ViZS5hbmltYXRvci5yb3RhdGlvbi55ID0gMDsgfSxcbiAgICB9ICk7XG5cbiAgICB0aGlzLmR1cmF0aW9ucy56b29tID0gZHVyYXRpb247XG5cbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmFjdGl2ZVRyYW5zaXRpb25zLS0sIHRoaXMuZHVyYXRpb25zLnpvb20gKTtcblxuICB9XG5cbiAgZWxldmF0ZSggY29tcGxldGUgKSB7XG5cbiAgICB0aGlzLmFjdGl2ZVRyYW5zaXRpb25zKys7XG5cbiAgICBjb25zdCBjdWJlWSA9IFxuXG4gICAgdGhpcy50d2VlbnMuZWxldmF0ZSA9IG5ldyBUd2Vlbigge1xuICAgICAgdGFyZ2V0OiB0aGlzLmdhbWUuY3ViZS5vYmplY3QucG9zaXRpb24sXG4gICAgICBkdXJhdGlvbjogY29tcGxldGUgPyAxNTAwIDogMCxcbiAgICAgIGVhc2luZzogRWFzaW5nLlBvd2VyLkluT3V0KCAzICksXG4gICAgICB0bzogeyB5OiBjb21wbGV0ZSA/IC0wLjA1IDogdGhpcy5kYXRhLmN1YmVZIH1cbiAgICB9ICk7XG5cbiAgICB0aGlzLmR1cmF0aW9ucy5lbGV2YXRlID0gMTUwMDtcblxuICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuYWN0aXZlVHJhbnNpdGlvbnMtLSwgdGhpcy5kdXJhdGlvbnMuZWxldmF0ZSApO1xuXG4gIH1cblxuICBjb21wbGV0ZSggc2hvdywgYmVzdCApIHtcblxuICAgIHRoaXMuYWN0aXZlVHJhbnNpdGlvbnMrKztcblxuICAgIGNvbnN0IHRleHQgPSBiZXN0ID8gdGhpcy5nYW1lLmRvbS50ZXh0cy5iZXN0IDogdGhpcy5nYW1lLmRvbS50ZXh0cy5jb21wbGV0ZTtcblxuICAgIGlmICggdGV4dC5xdWVyeVNlbGVjdG9yKCAnc3BhbiBpJyApID09PSBudWxsIClcbiAgICAgIHRleHQucXVlcnlTZWxlY3RvckFsbCggJ3NwYW4nICkuZm9yRWFjaCggc3BhbiA9PiB0aGlzLnNwbGl0TGV0dGVycyggc3BhbiApICk7XG5cbiAgICBjb25zdCBsZXR0ZXJzID0gdGV4dC5xdWVyeVNlbGVjdG9yQWxsKCAnLmljb24sIGknICk7XG5cbiAgICB0aGlzLmZsaXBMZXR0ZXJzKCBiZXN0ID8gJ2Jlc3QnIDogJ2NvbXBsZXRlJywgbGV0dGVycywgc2hvdyApO1xuXG4gICAgdGV4dC5zdHlsZS5vcGFjaXR5ID0gMTtcblxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbnNbIGJlc3QgPyAnYmVzdCcgOiAnY29tcGxldGUnIF07XG5cbiAgICBpZiAoICEgc2hvdyApIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZ2FtZS5kb20udGV4dHMudGltZXIuc3R5bGUudHJhbnNmb3JtID0gJycsIGR1cmF0aW9uICk7XG5cbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmFjdGl2ZVRyYW5zaXRpb25zLS0sIGR1cmF0aW9uICk7XG5cbiAgfSBcblxuICBzdGF0cyggc2hvdyApIHtcblxuICAgIGlmICggc2hvdyApIHRoaXMuZ2FtZS5zY29yZXMuY2FsY1N0YXRzKCk7XG5cbiAgICB0aGlzLmFjdGl2ZVRyYW5zaXRpb25zKys7XG5cbiAgICB0aGlzLnR3ZWVucy5zdGF0cy5mb3JFYWNoKCB0d2VlbiA9PiB7IHR3ZWVuLnN0b3AoKTsgdHdlZW4gPSBudWxsOyB9ICk7XG5cbiAgICBsZXQgdHdlZW5JZCA9IC0xO1xuXG4gICAgY29uc3Qgc3RhdHMgPSB0aGlzLmdhbWUuZG9tLnN0YXRzLnF1ZXJ5U2VsZWN0b3JBbGwoICcuc3RhdHMnICk7XG4gICAgY29uc3QgZWFzaW5nID0gc2hvdyA/IEVhc2luZy5Qb3dlci5PdXQoIDIgKSA6IEVhc2luZy5Qb3dlci5JbiggMyApO1xuXG4gICAgc3RhdHMuZm9yRWFjaCggKCBzdGF0LCBpbmRleCApID0+IHtcblxuICAgICAgY29uc3QgZGVsYXkgPSBpbmRleCAqICggc2hvdyA/IDgwIDogNjAgKTtcblxuICAgICAgdGhpcy50d2VlbnMuc3RhdHNbIHR3ZWVuSWQrKyBdID0gbmV3IFR3ZWVuKCB7XG4gICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgZWFzaW5nOiBlYXNpbmcsXG4gICAgICAgIG9uVXBkYXRlOiB0d2VlbiA9PiB7XG5cbiAgICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBzaG93ID8gKCAxIC0gdHdlZW4udmFsdWUgKSAqIDIgOiB0d2Vlbi52YWx1ZTtcbiAgICAgICAgICBjb25zdCBvcGFjaXR5ID0gc2hvdyA/IHR3ZWVuLnZhbHVlIDogKCAxIC0gdHdlZW4udmFsdWUgKTtcblxuICAgICAgICAgIHN0YXQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsICR7dHJhbnNsYXRlfWVtLCAwKWA7XG4gICAgICAgICAgc3RhdC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcblxuICAgICAgICB9XG4gICAgICB9ICk7XG5cbiAgICB9ICk7XG5cbiAgICB0aGlzLmR1cmF0aW9ucy5zdGF0cyA9IDA7XG5cbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmFjdGl2ZVRyYW5zaXRpb25zLS0sIHRoaXMuZHVyYXRpb25zLnN0YXRzICk7XG5cbiAgfVxuXG4gIHByZWZlcmVuY2VzKCBzaG93ICkge1xuXG4gICAgdGhpcy5yYW5nZXMoIHRoaXMuZ2FtZS5kb20ucHJlZnMucXVlcnlTZWxlY3RvckFsbCggJy5yYW5nZScgKSwgJ3ByZWZzJywgc2hvdyApO1xuXG4gIH1cblxuICB0aGVtaW5nKCBzaG93ICkge1xuXG4gICAgdGhpcy5yYW5nZXMoIHRoaXMuZ2FtZS5kb20udGhlbWUucXVlcnlTZWxlY3RvckFsbCggJy5yYW5nZScgKSwgJ3ByZWZzJywgc2hvdyApO1xuXG4gIH1cblxuICByYW5nZXMoIHJhbmdlcywgdHlwZSwgc2hvdyApIHtcblxuICAgIHRoaXMuYWN0aXZlVHJhbnNpdGlvbnMrKztcblxuICAgIHRoaXMudHdlZW5zWyB0eXBlIF0uZm9yRWFjaCggdHdlZW4gPT4geyB0d2Vlbi5zdG9wKCk7IHR3ZWVuID0gbnVsbDsgfSApO1xuXG4gICAgY29uc3QgZWFzaW5nID0gc2hvdyA/IEVhc2luZy5Qb3dlci5PdXQoMikgOiBFYXNpbmcuUG93ZXIuSW4oMyk7XG5cbiAgICBsZXQgdHdlZW5JZCA9IC0xO1xuICAgIGxldCBsaXN0TWF4ID0gMDtcblxuICAgIHJhbmdlcy5mb3JFYWNoKCAoIHJhbmdlLCByYW5nZUluZGV4ICkgPT4ge1xuICAgIFxuICAgICAgY29uc3QgbGFiZWwgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCAnLnJhbmdlX19sYWJlbCcgKTtcbiAgICAgIGNvbnN0IHRyYWNrID0gcmFuZ2UucXVlcnlTZWxlY3RvciggJy5yYW5nZV9fdHJhY2stbGluZScgKTtcbiAgICAgIGNvbnN0IGhhbmRsZSA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoICcucmFuZ2VfX2hhbmRsZScgKTtcbiAgICAgIGNvbnN0IGxpc3QgPSByYW5nZS5xdWVyeVNlbGVjdG9yQWxsKCAnLnJhbmdlX19saXN0IGRpdicgKTtcblxuICAgICAgY29uc3QgZGVsYXkgPSByYW5nZUluZGV4ICogKCBzaG93ID8gMTIwIDogMTAwICk7XG5cbiAgICAgIGxhYmVsLnN0eWxlLm9wYWNpdHkgPSBzaG93ID8gMCA6IDE7XG4gICAgICB0cmFjay5zdHlsZS5vcGFjaXR5ID0gc2hvdyA/IDAgOiAxO1xuICAgICAgaGFuZGxlLnN0eWxlLm9wYWNpdHkgPSBzaG93ID8gMCA6IDE7XG4gICAgICBoYW5kbGUuc3R5bGUucG9pbnRlckV2ZW50cyA9IHNob3cgPyAnYWxsJyA6ICdub25lJztcblxuICAgICAgdGhpcy50d2VlbnNbIHR5cGUgXVsgdHdlZW5JZCsrIF0gPSBuZXcgVHdlZW4oIHtcbiAgICAgICAgZGVsYXk6IHNob3cgPyBkZWxheSA6IGRlbGF5LFxuICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICBlYXNpbmc6IGVhc2luZyxcbiAgICAgICAgb25VcGRhdGU6IHR3ZWVuID0+IHtcblxuICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHNob3cgPyAoIDEgLSB0d2Vlbi52YWx1ZSApIDogdHdlZW4udmFsdWU7XG4gICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IHNob3cgPyB0d2Vlbi52YWx1ZSA6ICggMSAtIHR3ZWVuLnZhbHVlICk7XG5cbiAgICAgICAgICBsYWJlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgJHt0cmFuc2xhdGV9ZW0sIDApYDtcbiAgICAgICAgICBsYWJlbC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcblxuICAgICAgICB9XG4gICAgICB9ICk7XG5cbiAgICAgIHRoaXMudHdlZW5zWyB0eXBlIF1bIHR3ZWVuSWQrKyBdID0gbmV3IFR3ZWVuKCB7XG4gICAgICAgIGRlbGF5OiBzaG93ID8gZGVsYXkgKyAxMDAgOiBkZWxheSxcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgZWFzaW5nOiBlYXNpbmcsXG4gICAgICAgIG9uVXBkYXRlOiB0d2VlbiA9PiB7XG5cbiAgICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBzaG93ID8gKCAxIC0gdHdlZW4udmFsdWUgKSA6IHR3ZWVuLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2hvdyA/IHR3ZWVuLnZhbHVlIDogKCAxIC0gdHdlZW4udmFsdWUgKTtcbiAgICAgICAgICBjb25zdCBvcGFjaXR5ID0gc2NhbGU7XG5cbiAgICAgICAgICB0cmFjay5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgJHt0cmFuc2xhdGV9ZW0sIDApIHNjYWxlM2QoJHtzY2FsZX0sIDEsIDEpYDtcbiAgICAgICAgICB0cmFjay5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcblxuICAgICAgICB9XG4gICAgICB9ICk7XG5cbiAgICAgIHRoaXMudHdlZW5zWyB0eXBlIF1bIHR3ZWVuSWQrKyBdID0gbmV3IFR3ZWVuKCB7XG4gICAgICAgIGRlbGF5OiBzaG93ID8gZGVsYXkgKyAxMDAgOiBkZWxheSxcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgZWFzaW5nOiBlYXNpbmcsXG4gICAgICAgIG9uVXBkYXRlOiB0d2VlbiA9PiB7XG5cbiAgICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSBzaG93ID8gKCAxIC0gdHdlZW4udmFsdWUgKSA6IHR3ZWVuLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSAxIC0gdHJhbnNsYXRlO1xuICAgICAgICAgIGNvbnN0IHNjYWxlID0gMC41ICsgb3BhY2l0eSAqIDAuNTtcblxuICAgICAgICAgIGhhbmRsZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgJHt0cmFuc2xhdGV9ZW0sIDApIHNjYWxlM2QoJHtzY2FsZX0sICR7c2NhbGV9LCAke3NjYWxlfSlgO1xuICAgICAgICAgIGhhbmRsZS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcblxuICAgICAgICB9XG4gICAgICB9ICk7XG5cbiAgICAgIGxpc3QuZm9yRWFjaCggKCBsaXN0SXRlbSwgbGFiZWxJbmRleCApID0+IHtcblxuICAgICAgICBsaXN0SXRlbS5zdHlsZS5vcGFjaXR5ID0gc2hvdyA/IDAgOiAxO1xuXG4gICAgICAgIHRoaXMudHdlZW5zWyB0eXBlIF1bIHR3ZWVuSWQrKyBdID0gbmV3IFR3ZWVuKCB7XG4gICAgICAgICAgZGVsYXk6IHNob3cgPyBkZWxheSArIDIwMCArIGxhYmVsSW5kZXggKiA1MCA6IGRlbGF5LFxuICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgZWFzaW5nOiBlYXNpbmcsXG4gICAgICAgICAgb25VcGRhdGU6IHR3ZWVuID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gc2hvdyA/ICggMSAtIHR3ZWVuLnZhbHVlICkgOiB0d2Vlbi52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSBzaG93ID8gdHdlZW4udmFsdWUgOiAoIDEgLSB0d2Vlbi52YWx1ZSApO1xuXG4gICAgICAgICAgICBsaXN0SXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgJHt0cmFuc2xhdGV9ZW0sIDApYDtcbiAgICAgICAgICAgIGxpc3RJdGVtLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuXG4gICAgICAgICAgfVxuICAgICAgICB9ICk7XG5cbiAgICAgIH0gKTtcblxuICAgICAgbGlzdE1heCA9IGxpc3QubGVuZ3RoID4gbGlzdE1heCA/IGxpc3QubGVuZ3RoIC0gMSA6IGxpc3RNYXg7XG5cbiAgICAgIHJhbmdlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXG4gICAgfSApO1xuXG4gICAgdGhpcy5kdXJhdGlvbnNbIHR5cGUgXSA9IHNob3dcbiAgICAgID8gKCAoIHJhbmdlcy5sZW5ndGggLSAxICkgKiAxMDAgKSArIDIwMCArIGxpc3RNYXggKiA1MCArIDQwMFxuICAgICAgOiAoICggcmFuZ2VzLmxlbmd0aCAtIDEgKSAqIDEwMCApICsgNDAwO1xuXG4gICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5hY3RpdmVUcmFuc2l0aW9ucy0tLCB0aGlzLmR1cmF0aW9uc1sgdHlwZSBdICk7IFxuXG4gIH1cblxuICB0aXRsZSggc2hvdyApIHtcblxuICAgIHRoaXMuYWN0aXZlVHJhbnNpdGlvbnMrKztcblxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5nYW1lLmRvbS50ZXh0cy50aXRsZTtcblxuICAgIGlmICggdGl0bGUucXVlcnlTZWxlY3RvciggJ3NwYW4gaScgKSA9PT0gbnVsbCApXG4gICAgICB0aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCAnc3BhbicgKS5mb3JFYWNoKCBzcGFuID0+IHRoaXMuc3BsaXRMZXR0ZXJzKCBzcGFuICkgKTtcblxuICAgIGNvbnN0IGxldHRlcnMgPSB0aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCAnaScgKTtcblxuICAgIHRoaXMuZmxpcExldHRlcnMoICd0aXRsZScsIGxldHRlcnMsIHNob3cgKTtcblxuICAgIHRpdGxlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXG4gICAgY29uc3Qgbm90ZSA9IHRoaXMuZ2FtZS5kb20udGV4dHMubm90ZTtcbiAgICBcbiAgICBub3RlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXG4gICAgdGhpcy50d2VlbnMudGl0bGVbIGxldHRlcnMubGVuZ3RoIF0gPSBuZXcgVHdlZW4oIHtcbiAgICAgIHRhcmdldDogbm90ZS5zdHlsZSxcbiAgICAgIGVhc2luZzogRWFzaW5nLlNpbmUuSW5PdXQoKSxcbiAgICAgIGR1cmF0aW9uOiBzaG93ID8gODAwIDogNDAwLFxuICAgICAgeW95bzogc2hvdyA/IHRydWUgOiBudWxsLFxuICAgICAgZnJvbTogeyBvcGFjaXR5OiBzaG93ID8gMCA6ICggcGFyc2VGbG9hdCggZ2V0Q29tcHV0ZWRTdHlsZSggbm90ZSApLm9wYWNpdHkgKSApIH0sXG4gICAgICB0bzogeyBvcGFjaXR5OiBzaG93ID8gMSA6IDAgfSxcbiAgICB9ICk7XG5cbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmFjdGl2ZVRyYW5zaXRpb25zLS0sIHRoaXMuZHVyYXRpb25zLnRpdGxlICk7XG5cbiAgfVxuXG4gIHRpbWVyKCBzaG93ICkge1xuXG4gICAgdGhpcy5hY3RpdmVUcmFuc2l0aW9ucysrO1xuXG4gICAgY29uc3QgdGltZXIgPSB0aGlzLmdhbWUuZG9tLnRleHRzLnRpbWVyO1xuXG4gICAgdGltZXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgdGhpcy5nYW1lLnRpbWVyLmNvbnZlcnQoKTtcbiAgICB0aGlzLmdhbWUudGltZXIuc2V0VGV4dCgpO1xuXG4gICAgdGhpcy5zcGxpdExldHRlcnMoIHRpbWVyICk7XG4gICAgY29uc3QgbGV0dGVycyA9IHRpbWVyLnF1ZXJ5U2VsZWN0b3JBbGwoICdpJyApO1xuICAgIHRoaXMuZmxpcExldHRlcnMoICd0aW1lcicsIGxldHRlcnMsIHNob3cgKTtcblxuICAgIHRpbWVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuXG4gICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5hY3RpdmVUcmFuc2l0aW9ucy0tLCB0aGlzLmR1cmF0aW9ucy50aW1lciApO1xuXG4gIH1cblxuICBzcGxpdExldHRlcnMoIGVsZW1lbnQgKSB7XG5cbiAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgdGV4dC5zcGxpdCggJycgKS5mb3JFYWNoKCBsZXR0ZXIgPT4ge1xuXG4gICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2knICk7XG5cbiAgICAgIGkuaW5uZXJIVE1MID0gbGV0dGVyO1xuXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKCBpICk7XG5cbiAgICB9ICk7XG5cbiAgfVxuXG4gIGZsaXBMZXR0ZXJzKCB0eXBlLCBsZXR0ZXJzLCBzaG93ICkge1xuXG4gICAgdHJ5IHsgdGhpcy50d2VlbnNbIHR5cGUgXS5mb3JFYWNoKCB0d2VlbiA9PiB0d2Vlbi5zdG9wKCkgKTsgfSBjYXRjaChlKSB7fVxuICAgIGxldHRlcnMuZm9yRWFjaCggKCBsZXR0ZXIsIGluZGV4ICkgPT4ge1xuXG4gICAgICBsZXR0ZXIuc3R5bGUub3BhY2l0eSA9IHNob3cgPyAwIDogMTtcblxuICAgICAgdGhpcy50d2VlbnNbIHR5cGUgXVsgaW5kZXggXSA9IG5ldyBUd2Vlbigge1xuICAgICAgICBlYXNpbmc6IEVhc2luZy5TaW5lLk91dCgpLFxuICAgICAgICBkdXJhdGlvbjogc2hvdyA/IDgwMCA6IDQwMCxcbiAgICAgICAgZGVsYXk6IGluZGV4ICogNTAsXG4gICAgICAgIG9uVXBkYXRlOiB0d2VlbiA9PiB7XG5cbiAgICAgICAgICBjb25zdCByb3RhdGlvbiA9IHNob3cgPyAoIDEgLSB0d2Vlbi52YWx1ZSApICogLTgwIDogdHdlZW4udmFsdWUgKiA4MDtcblxuICAgICAgICAgIGxldHRlci5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlM2QoMCwgMSwgMCwgJHtyb3RhdGlvbn1kZWcpYDtcbiAgICAgICAgICBsZXR0ZXIuc3R5bGUub3BhY2l0eSA9IHNob3cgPyB0d2Vlbi52YWx1ZSA6ICggMSAtIHR3ZWVuLnZhbHVlICk7XG5cbiAgICAgICAgfSxcbiAgICAgIH0gKTtcblxuICAgIH0gKTtcblxuICAgIHRoaXMuZHVyYXRpb25zWyB0eXBlIF0gPSAoIGxldHRlcnMubGVuZ3RoIC0gMSApICogNTAgKyAoIHNob3cgPyA4MDAgOiA0MDAgKTtcblxuICB9XG5cbn1cblxuY2xhc3MgVGltZXIgZXh0ZW5kcyBBbmltYXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yKCBnYW1lICkge1xuXG4gICAgc3VwZXIoIGZhbHNlICk7XG5cbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICBcbiAgfVxuXG4gIHN0YXJ0KCBjb250aW51ZUdhbWUgKSB7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IGNvbnRpbnVlR2FtZSA/ICggRGF0ZS5ub3coKSAtIHRoaXMuZGVsdGFUaW1lICkgOiBEYXRlLm5vdygpO1xuICAgIHRoaXMuZGVsdGFUaW1lID0gMDtcbiAgICB0aGlzLmNvbnZlcnRlZCA9IHRoaXMuY29udmVydCgpO1xuXG4gICAgc3VwZXIuc3RhcnQoKTtcblxuICB9XG5cbiAgcmVzZXQoKSB7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XG4gICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gICAgdGhpcy5kZWx0YVRpbWUgPSAwO1xuICAgIHRoaXMuY29udmVydGVkID0gJzA6MDAnO1xuXG4gIH1cblxuICBzdG9wKCkge1xuXG4gICAgdGhpcy5jdXJyZW50VGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5kZWx0YVRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XG4gICAgdGhpcy5jb252ZXJ0KCk7XG5cbiAgICBzdXBlci5zdG9wKCk7XG5cbiAgICByZXR1cm4geyB0aW1lOiB0aGlzLmNvbnZlcnRlZCwgbWlsbGlzOiB0aGlzLmRlbHRhVGltZSB9O1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICBjb25zdCBvbGQgPSB0aGlzLmNvbnZlcnRlZDtcblxuICAgIHRoaXMuY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuZGVsdGFUaW1lID0gdGhpcy5jdXJyZW50VGltZSAtIHRoaXMuc3RhcnRUaW1lO1xuICAgIHRoaXMuY29udmVydCgpO1xuXG4gICAgaWYgKCB0aGlzLmNvbnZlcnRlZCAhPSBvbGQgKSB7XG5cbiAgICAgIGlmICh0aGlzLmRlbHRhVGltZSA8PSAxMjYpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAndGhlQ3ViZV90aW1lJywgdGhpcy5kZWx0YVRpbWUgKTtcbiAgICAgIHRoaXMuc2V0VGV4dCgpO1xuXG4gICAgfVxuXG4gIH1cblxuICBjb252ZXJ0KCkge1xuXG4gICAgY29uc3Qgc2Vjb25kcyA9IHBhcnNlSW50KCAoIHRoaXMuZGVsdGFUaW1lIC8gMTAwMCApICUgNjAgKTtcbiAgICBjb25zdCBtaW51dGVzID0gcGFyc2VJbnQoICggdGhpcy5kZWx0YVRpbWUgLyAoIDEwMDAgKiA2MCApICkgKTtcblxuICAgIHRoaXMuY29udmVydGVkID0gbWludXRlcyArICc6JyArICggc2Vjb25kcyA8IDEwID8gJzAnIDogJycgKSArIHNlY29uZHM7XG5cbiAgfVxuXG4gIHNldFRleHQoKSB7XG5cbiAgICB0aGlzLmdhbWUuZG9tLnRleHRzLnRpbWVyLmlubmVySFRNTCA9IHRoaXMuY29udmVydGVkO1xuXG4gIH1cblxufVxuXG5jbGFzcyBSYW5nZSB7XG5cbiAgY29uc3RydWN0b3IoIG5hbWUsIG9wdGlvbnMgKSB7XG5cbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbigge1xuICAgICAgcmFuZ2U6IFsgMCwgMSBdLFxuICAgICAgdmFsdWU6IDAsXG4gICAgICBzdGVwOiAwLFxuICAgICAgb25VcGRhdGU6ICgpID0+IHt9LFxuICAgICAgb25Db21wbGV0ZTogKCkgPT4ge30sXG4gICAgfSwgb3B0aW9ucyB8fCB7fSApO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5yYW5nZVtuYW1lPVwiJyArIG5hbWUgKyAnXCJdJyApO1xuICAgIHRoaXMudHJhY2sgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvciggJy5yYW5nZV9fdHJhY2snICk7XG4gICAgdGhpcy5oYW5kbGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvciggJy5yYW5nZV9faGFuZGxlJyApO1xuICAgIHRoaXMubGlzdCA9IFtdLnNsaWNlLmNhbGwoIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLnJhbmdlX19saXN0IGRpdicgKSApO1xuXG4gICAgdGhpcy52YWx1ZSA9IG9wdGlvbnMudmFsdWU7XG4gICAgdGhpcy5taW4gPSBvcHRpb25zLnJhbmdlWzBdO1xuICAgIHRoaXMubWF4ID0gb3B0aW9ucy5yYW5nZVsxXTtcbiAgICB0aGlzLnN0ZXAgPSBvcHRpb25zLnN0ZXA7XG5cbiAgICB0aGlzLm9uVXBkYXRlID0gb3B0aW9ucy5vblVwZGF0ZTtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBvcHRpb25zLm9uQ29tcGxldGU7XG5cbiAgICB0aGlzLnNldFZhbHVlKCB0aGlzLnZhbHVlICk7XG5cbiAgICB0aGlzLmluaXREcmFnZ2FibGUoKTtcblxuICB9XG5cbiAgc2V0VmFsdWUoIHZhbHVlICkge1xuXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMucm91bmQoIHRoaXMubGltaXRWYWx1ZSggdmFsdWUgKSApO1xuICAgIHRoaXMuc2V0SGFuZGxlUG9zaXRpb24oKTtcblxuICB9XG5cbiAgaW5pdERyYWdnYWJsZSgpIHtcblxuICAgIGxldCBjdXJyZW50O1xuXG4gICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKCB0aGlzLmhhbmRsZSwgeyBjYWxjRGVsdGE6IHRydWUgfSApO1xuXG4gICAgdGhpcy5kcmFnZ2FibGUub25EcmFnU3RhcnQgPSBwb3NpdGlvbiA9PiB7XG5cbiAgICAgIGN1cnJlbnQgPSB0aGlzLnBvc2l0aW9uRnJvbVZhbHVlKCB0aGlzLnZhbHVlICk7XG4gICAgICB0aGlzLmhhbmRsZS5zdHlsZS5sZWZ0ID0gY3VycmVudCArICdweCc7XG5cbiAgICB9O1xuXG4gICAgdGhpcy5kcmFnZ2FibGUub25EcmFnTW92ZSA9IHBvc2l0aW9uID0+IHtcblxuICAgICAgY3VycmVudCA9IHRoaXMubGltaXRQb3NpdGlvbiggY3VycmVudCArIHBvc2l0aW9uLmRlbHRhLnggKTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnJvdW5kKCB0aGlzLnZhbHVlRnJvbVBvc2l0aW9uKCBjdXJyZW50ICkgKTtcbiAgICAgIHRoaXMuc2V0SGFuZGxlUG9zaXRpb24oKTtcbiAgICAgIFxuICAgICAgdGhpcy5vblVwZGF0ZSggdGhpcy52YWx1ZSApO1xuXG4gICAgfTtcblxuICAgIHRoaXMuZHJhZ2dhYmxlLm9uRHJhZ0VuZCA9IHBvc2l0aW9uID0+IHtcblxuICAgICAgdGhpcy5vbkNvbXBsZXRlKCB0aGlzLnZhbHVlICk7XG5cbiAgICB9O1xuXG4gIH1cblxuICByb3VuZCggdmFsdWUgKSB7XG5cbiAgICBpZiAoIHRoaXMuc3RlcCA8IDEgKSByZXR1cm4gdmFsdWU7XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCggKCB2YWx1ZSAtIHRoaXMubWluICkgLyB0aGlzLnN0ZXAgKSAqIHRoaXMuc3RlcCArIHRoaXMubWluO1xuXG4gIH1cblxuICBsaW1pdFZhbHVlKCB2YWx1ZSApIHtcblxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KCB0aGlzLm1heCwgdGhpcy5taW4gKTtcbiAgICBjb25zdCBtaW4gPSBNYXRoLm1pbiggdGhpcy5tYXgsIHRoaXMubWluICk7XG5cbiAgICByZXR1cm4gTWF0aC5taW4oIE1hdGgubWF4KCB2YWx1ZSwgbWluICksIG1heCApO1xuXG4gIH1cblxuICBsaW1pdFBvc2l0aW9uKCBwb3NpdGlvbiApIHtcblxuICAgIHJldHVybiBNYXRoLm1pbiggTWF0aC5tYXgoIHBvc2l0aW9uLCAwICksIHRoaXMudHJhY2sub2Zmc2V0V2lkdGggKTtcblxuICB9XG5cbiAgcGVyY2VudHNGcm9tVmFsdWUoIHZhbHVlICkge1xuXG4gICAgcmV0dXJuICggdmFsdWUgLSB0aGlzLm1pbiApIC8gKCB0aGlzLm1heCAtIHRoaXMubWluICk7XG5cbiAgfVxuXG4gIHZhbHVlRnJvbVBvc2l0aW9uKCBwb3NpdGlvbiApIHtcblxuICAgIHJldHVybiB0aGlzLm1pbiArICggdGhpcy5tYXggLSB0aGlzLm1pbiApICogKCBwb3NpdGlvbiAvIHRoaXMudHJhY2sub2Zmc2V0V2lkdGggKTtcblxuICB9XG5cbiAgcG9zaXRpb25Gcm9tVmFsdWUoIHZhbHVlICkge1xuXG4gICAgcmV0dXJuIHRoaXMucGVyY2VudHNGcm9tVmFsdWUoIHZhbHVlICkgKiB0aGlzLnRyYWNrLm9mZnNldFdpZHRoO1xuXG4gIH1cblxuICBzZXRIYW5kbGVQb3NpdGlvbigpIHtcblxuICAgIHRoaXMuaGFuZGxlLnN0eWxlLmxlZnQgPSB0aGlzLnBlcmNlbnRzRnJvbVZhbHVlKCB0aGlzLnZhbHVlICkgKiAxMDAgKyAnJSc7XG5cbiAgfVxuXG59XG5cbmNsYXNzIFByZWZlcmVuY2VzIHtcblxuICBjb25zdHJ1Y3RvciggZ2FtZSApIHtcblxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgICB0aGlzLnJhbmdlcyA9IHtcblxuICAgICAgc2l6ZTogbmV3IFJhbmdlKCAnc2l6ZScsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2FtZS5jdWJlLnNpemUsXG4gICAgICAgIHJhbmdlOiBbIDIsIDUgXSxcbiAgICAgICAgc3RlcDogMSxcbiAgICAgICAgb25VcGRhdGU6IHZhbHVlID0+IHtcblxuICAgICAgICAgIHRoaXMuZ2FtZS5jdWJlLnNpemUgPSB2YWx1ZTtcblxuICAgICAgICAgIHRoaXMuZ2FtZS5wcmVmZXJlbmNlcy5yYW5nZXMuc2NyYW1ibGUubGlzdC5mb3JFYWNoKCAoIGl0ZW0sIGkgKSA9PiB7XG5cbiAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gdGhpcy5nYW1lLnNjcmFtYmxlci5zY3JhbWJsZUxlbmd0aFsgdGhpcy5nYW1lLmN1YmUuc2l6ZSBdWyBpIF07XG5cbiAgICAgICAgICB9ICk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4gdGhpcy5nYW1lLnN0b3JhZ2Uuc2F2ZVByZWZlcmVuY2VzKCksXG4gICAgICB9ICksXG5cbiAgICAgIGZsaXA6IG5ldyBSYW5nZSggJ2ZsaXAnLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLmdhbWUuY29udHJvbHMuZmxpcENvbmZpZyxcbiAgICAgICAgcmFuZ2U6IFsgMCwgMiBdLFxuICAgICAgICBzdGVwOiAxLFxuICAgICAgICBvblVwZGF0ZTogdmFsdWUgPT4ge1xuXG4gICAgICAgICAgdGhpcy5nYW1lLmNvbnRyb2xzLmZsaXBDb25maWcgPSB2YWx1ZTtcblxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB0aGlzLmdhbWUuc3RvcmFnZS5zYXZlUHJlZmVyZW5jZXMoKSxcbiAgICAgIH0gKSxcblxuICAgICAgc2NyYW1ibGU6IG5ldyBSYW5nZSggJ3NjcmFtYmxlJywge1xuICAgICAgICB2YWx1ZTogdGhpcy5nYW1lLnNjcmFtYmxlci5kaWZpY3VsdHksXG4gICAgICAgIHJhbmdlOiBbIDAsIDIgXSxcbiAgICAgICAgc3RlcDogMSxcbiAgICAgICAgb25VcGRhdGU6IHZhbHVlID0+IHtcblxuICAgICAgICAgIHRoaXMuZ2FtZS5zY3JhbWJsZXIuZGlmaWN1bHR5ID0gdmFsdWU7XG5cbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4gdGhpcy5nYW1lLnN0b3JhZ2Uuc2F2ZVByZWZlcmVuY2VzKClcbiAgICAgIH0gKSxcblxuICAgICAgZm92OiBuZXcgUmFuZ2UoICdmb3YnLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLmdhbWUud29ybGQuZm92LFxuICAgICAgICByYW5nZTogWyAyLCA0NSBdLFxuICAgICAgICBvblVwZGF0ZTogdmFsdWUgPT4ge1xuXG4gICAgICAgICAgdGhpcy5nYW1lLndvcmxkLmZvdiA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMuZ2FtZS53b3JsZC5yZXNpemUoKTtcblxuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB0aGlzLmdhbWUuc3RvcmFnZS5zYXZlUHJlZmVyZW5jZXMoKVxuICAgICAgfSApLFxuXG4gICAgICB0aGVtZTogbmV3IFJhbmdlKCAndGhlbWUnLCB7XG4gICAgICAgIHZhbHVlOiB7IGN1YmU6IDAsIGVybm86IDEsIGR1c3Q6IDIsIGNhbW86IDMsIHJhaW46IDQgfVsgdGhpcy5nYW1lLnRoZW1lcy50aGVtZSBdLFxuICAgICAgICByYW5nZTogWyAwLCA0IF0sXG4gICAgICAgIHN0ZXA6IDEsXG4gICAgICAgIG9uVXBkYXRlOiB2YWx1ZSA9PiB7XG5cbiAgICAgICAgICBjb25zdCB0aGVtZSA9IFsgJ2N1YmUnLCAnZXJubycsICdkdXN0JywgJ2NhbW8nLCAncmFpbicgXVsgdmFsdWUgXTtcbiAgICAgICAgICB0aGlzLmdhbWUudGhlbWVzLnNldFRoZW1lKCB0aGVtZSApO1xuXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHRoaXMuZ2FtZS5zdG9yYWdlLnNhdmVQcmVmZXJlbmNlcygpXG4gICAgICB9ICksXG5cbiAgICAgIGh1ZTogbmV3IFJhbmdlKCAnaHVlJywge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgcmFuZ2U6IFsgMCwgMzYwIF0sXG4gICAgICAgIG9uVXBkYXRlOiB2YWx1ZSA9PiB0aGlzLmdhbWUudGhlbWVFZGl0b3IudXBkYXRlSFNMKCksXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHRoaXMuZ2FtZS5zdG9yYWdlLnNhdmVQcmVmZXJlbmNlcygpLFxuICAgICAgfSApLFxuXG4gICAgICBzYXR1cmF0aW9uOiBuZXcgUmFuZ2UoICdzYXR1cmF0aW9uJywge1xuICAgICAgICB2YWx1ZTogMTAwLFxuICAgICAgICByYW5nZTogWyAwLCAxMDAgXSxcbiAgICAgICAgb25VcGRhdGU6IHZhbHVlID0+IHRoaXMuZ2FtZS50aGVtZUVkaXRvci51cGRhdGVIU0woKSxcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4gdGhpcy5nYW1lLnN0b3JhZ2Uuc2F2ZVByZWZlcmVuY2VzKCksXG4gICAgICB9ICksXG5cbiAgICAgIGxpZ2h0bmVzczogbmV3IFJhbmdlKCAnbGlnaHRuZXNzJywge1xuICAgICAgICB2YWx1ZTogNTAsXG4gICAgICAgIHJhbmdlOiBbIDAsIDEwMCBdLFxuICAgICAgICBvblVwZGF0ZTogdmFsdWUgPT4gdGhpcy5nYW1lLnRoZW1lRWRpdG9yLnVwZGF0ZUhTTCgpLFxuICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB0aGlzLmdhbWUuc3RvcmFnZS5zYXZlUHJlZmVyZW5jZXMoKSxcbiAgICAgIH0gKSxcblxuICAgIH07XG5cbiAgICB0aGlzLnJhbmdlcy5zY3JhbWJsZS5saXN0LmZvckVhY2goICggaXRlbSwgaSApID0+IHtcblxuICAgICAgaXRlbS5pbm5lckhUTUwgPSB0aGlzLmdhbWUuc2NyYW1ibGVyLnNjcmFtYmxlTGVuZ3RoWyB0aGlzLmdhbWUuY3ViZS5zaXplIF1bIGkgXTtcblxuICAgIH0gKTtcbiAgICBcbiAgfVxuXG59XG5cbmNsYXNzIENvbmZldHRpIHtcblxuICBjb25zdHJ1Y3RvciggZ2FtZSApIHtcblxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5zdGFydGVkID0gMDtcblxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHNwZWVkOiB7IG1pbjogMC4wMDExLCBtYXg6IDAuMDAyMiB9LFxuICAgICAgcmV2b2x1dGlvbjogeyBtaW46IDAuMDEsIG1heDogMC4wNSB9LFxuICAgICAgc2l6ZTogeyBtaW46IDAuMSwgbWF4OiAwLjE1IH0sXG4gICAgICBjb2xvcnM6IFsgMHg0MWFhYzgsIDB4ODJjYTM4LCAweGZmZWY0OCwgMHhlZjM5MjMsIDB4ZmY4YzBhIF0sXG4gICAgfTtcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSggMSwgMSApO1xuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCggeyBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlIH0gKTtcblxuICAgIHRoaXMuaG9sZGVycyA9IFtcbiAgICAgIG5ldyBDb25mZXR0aVN0YWdlKCB0aGlzLmdhbWUsIHRoaXMsIDEsIDIwICksXG4gICAgICBuZXcgQ29uZmV0dGlTdGFnZSggdGhpcy5nYW1lLCB0aGlzLCAtMSwgMzAgKSxcbiAgICBdO1xuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIGlmICggdGhpcy5zdGFydGVkID4gMCApIHJldHVybjtcblxuICAgIHRoaXMuaG9sZGVycy5mb3JFYWNoKCBob2xkZXIgPT4ge1xuXG4gICAgICB0aGlzLmdhbWUud29ybGQuc2NlbmUuYWRkKCBob2xkZXIuaG9sZGVyICk7XG4gICAgICBob2xkZXIuc3RhcnQoKTtcbiAgICAgIHRoaXMuc3RhcnRlZCArKztcblxuICAgIH0gKTtcblxuICB9XG5cbiAgc3RvcCgpIHtcblxuICAgIGlmICggdGhpcy5zdGFydGVkID09IDAgKSByZXR1cm47XG5cbiAgICB0aGlzLmhvbGRlcnMuZm9yRWFjaCggaG9sZGVyID0+IHtcblxuICAgICAgaG9sZGVyLnN0b3AoICgpID0+IHtcblxuICAgICAgICB0aGlzLmdhbWUud29ybGQuc2NlbmUucmVtb3ZlKCBob2xkZXIuaG9sZGVyICk7XG4gICAgICAgIHRoaXMuc3RhcnRlZCAtLTtcblxuICAgICAgfSApO1xuXG4gICAgfSApO1xuXG4gIH1cblxuICB1cGRhdGVDb2xvcnMoIGNvbG9ycyApIHtcblxuICAgIHRoaXMuaG9sZGVycy5mb3JFYWNoKCBob2xkZXIgPT4ge1xuXG4gICAgICBob2xkZXIub3B0aW9ucy5jb2xvcnMuZm9yRWFjaCggKCBjb2xvciwgaW5kZXggKSA9PiB7XG5cbiAgICAgICAgaG9sZGVyLm9wdGlvbnMuY29sb3JzWyBpbmRleCBdID0gY29sb3JzWyBbICdEJywgJ0YnLCAnUicsICdCJywgJ0wnIF1bIGluZGV4IF0gXTtcblxuICAgICAgfSApO1xuXG4gICAgfSApO1xuXG4gIH1cblxufVxuXG5jbGFzcyBDb25mZXR0aVN0YWdlIGV4dGVuZHMgQW5pbWF0aW9uIHtcblxuICBjb25zdHJ1Y3RvciggZ2FtZSwgcGFyZW50LCBkaXN0YW5jZSwgY291bnQgKSB7XG5cbiAgICBzdXBlciggZmFsc2UgKTtcblxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICB0aGlzLmRpc3RhbmNlRnJvbUN1YmUgPSBkaXN0YW5jZTtcblxuICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuXG4gICAgdGhpcy5ob2xkZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICB0aGlzLmhvbGRlci5yb3RhdGlvbi5jb3B5KCB0aGlzLmdhbWUud29ybGQuY2FtZXJhLnJvdGF0aW9uICk7XG5cbiAgICB0aGlzLm9iamVjdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHRoaXMuaG9sZGVyLmFkZCggdGhpcy5vYmplY3QgKTtcblxuICAgIHRoaXMucmVzaXplVmlld3BvcnQgPSB0aGlzLnJlc2l6ZVZpZXdwb3J0LmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLmdhbWUud29ybGQub25SZXNpemUucHVzaCggdGhpcy5yZXNpemVWaWV3cG9ydCApO1xuICAgIHRoaXMucmVzaXplVmlld3BvcnQoKTsgICAgXG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gdGhpcy5wYXJlbnQuZ2VvbWV0cnk7XG4gICAgdGhpcy5tYXRlcmlhbCA9IHRoaXMucGFyZW50Lm1hdGVyaWFsO1xuXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5wYXJlbnQub3B0aW9ucztcblxuICAgIGxldCBpID0gdGhpcy5jb3VudDtcbiAgICB3aGlsZSAoIGktLSApIHRoaXMucGFydGljbGVzLnB1c2goIG5ldyBQYXJ0aWNsZSggdGhpcyApICk7XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy50aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcblxuICAgIGxldCBpID0gdGhpcy5jb3VudDtcbiAgICB3aGlsZSAoIGktLSApIHRoaXMucGFydGljbGVzWyBpIF0ucmVzZXQoKTtcblxuICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgfVxuXG4gIHN0b3AoIGNhbGxiYWNrICkge1xuXG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSAwO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuICB9XG5cbiAgcmVzZXQoKSB7XG5cbiAgICBzdXBlci5zdG9wKCk7XG5cbiAgICB0aGlzLmNhbGxiYWNrKCk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnN0IGRlbHRhID0gbm93IC0gdGhpcy50aW1lO1xuICAgIHRoaXMudGltZSA9IG5vdztcblxuICAgIGxldCBpID0gdGhpcy5jb3VudDtcblxuICAgIHdoaWxlICggaS0tIClcbiAgICAgIGlmICggISB0aGlzLnBhcnRpY2xlc1sgaSBdLmNvbXBsZXRlZCApIHRoaXMucGFydGljbGVzWyBpIF0udXBkYXRlKCBkZWx0YSApO1xuXG4gICAgaWYgKCAhIHRoaXMucGxheWluZyAmJiB0aGlzLmNvbXBsZXRlZCA9PSB0aGlzLmNvdW50ICkgdGhpcy5yZXNldCgpO1xuXG4gIH1cblxuICByZXNpemVWaWV3cG9ydCgpIHtcblxuICAgIGNvbnN0IGZvdlJhZCA9IHRoaXMuZ2FtZS53b3JsZC5jYW1lcmEuZm92ICogVEhSRUUuTWF0aC5ERUcyUkFEO1xuXG4gICAgdGhpcy5oZWlnaHQgPSAyICogTWF0aC50YW4oIGZvdlJhZCAvIDIgKSAqICggdGhpcy5nYW1lLndvcmxkLmNhbWVyYS5wb3NpdGlvbi5sZW5ndGgoKSAtIHRoaXMuZGlzdGFuY2VGcm9tQ3ViZSApO1xuICAgIHRoaXMud2lkdGggPSB0aGlzLmhlaWdodCAqIHRoaXMuZ2FtZS53b3JsZC5jYW1lcmEuYXNwZWN0O1xuXG4gICAgY29uc3Qgc2NhbGUgPSAxIC8gdGhpcy5nYW1lLnRyYW5zaXRpb24uZGF0YS5jYW1lcmFab29tO1xuXG4gICAgdGhpcy53aWR0aCAqPSBzY2FsZTtcbiAgICB0aGlzLmhlaWdodCAqPSBzY2FsZTtcblxuICAgIHRoaXMub2JqZWN0LnBvc2l0aW9uLnogPSB0aGlzLmRpc3RhbmNlRnJvbUN1YmU7XG4gICAgdGhpcy5vYmplY3QucG9zaXRpb24ueSA9IHRoaXMuaGVpZ2h0IC8gMjtcblxuICB9XG4gIFxufVxuXG5jbGFzcyBQYXJ0aWNsZSB7XG5cbiAgY29uc3RydWN0b3IoIGNvbmZldHRpICkge1xuXG4gICAgdGhpcy5jb25mZXR0aSA9IGNvbmZldHRpO1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY29uZmV0dGkub3B0aW9ucztcblxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgIHRoaXMuZm9yY2UgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goIHRoaXMuY29uZmV0dGkuZ2VvbWV0cnksIHRoaXMuY29uZmV0dGkubWF0ZXJpYWwuY2xvbmUoKSApO1xuICAgIHRoaXMuY29uZmV0dGkub2JqZWN0LmFkZCggdGhpcy5tZXNoICk7XG5cbiAgICB0aGlzLnNpemUgPSBUSFJFRS5NYXRoLnJhbmRGbG9hdCggdGhpcy5vcHRpb25zLnNpemUubWluLCB0aGlzLm9wdGlvbnMuc2l6ZS5tYXggKTtcbiAgICB0aGlzLm1lc2guc2NhbGUuc2V0KCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgdGhpcy5zaXplICk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgcmVzZXQoIHJhbmRvbUhlaWdodCA9IHRydWUgKSB7XG5cbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5jb2xvciA9IG5ldyBUSFJFRS5Db2xvciggdGhpcy5vcHRpb25zLmNvbG9yc1sgTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIHRoaXMub3B0aW9ucy5jb2xvcnMubGVuZ3RoICkgXSApO1xuICAgIHRoaXMubWVzaC5tYXRlcmlhbC5jb2xvci5zZXQoIHRoaXMuY29sb3IgKTtcblxuICAgIHRoaXMuc3BlZWQgPSBUSFJFRS5NYXRoLnJhbmRGbG9hdCggdGhpcy5vcHRpb25zLnNwZWVkLm1pbiwgdGhpcy5vcHRpb25zLnNwZWVkLm1heCApICogLSAxO1xuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gVEhSRUUuTWF0aC5yYW5kRmxvYXQoIC0gdGhpcy5jb25mZXR0aS53aWR0aCAvIDIsIHRoaXMuY29uZmV0dGkud2lkdGggLyAyICk7XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAoIHJhbmRvbUhlaWdodCApXG4gICAgICA/IFRIUkVFLk1hdGgucmFuZEZsb2F0KCB0aGlzLnNpemUsIHRoaXMuY29uZmV0dGkuaGVpZ2h0ICsgdGhpcy5zaXplIClcbiAgICAgIDogdGhpcy5zaXplO1xuXG4gICAgdGhpcy5yZXZvbHV0aW9uU3BlZWQgPSBUSFJFRS5NYXRoLnJhbmRGbG9hdCggdGhpcy5vcHRpb25zLnJldm9sdXRpb24ubWluLCB0aGlzLm9wdGlvbnMucmV2b2x1dGlvbi5tYXggKTtcbiAgICB0aGlzLnJldm9sdXRpb25BeGlzID0gWyAneCcsICd5JywgJ3onIF1bIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAzICkgXTtcbiAgICB0aGlzLm1lc2gucm90YXRpb24uc2V0KCBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAvIDMsIE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJIC8gMywgTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgLyAzICk7XG5cbiAgfVxuXG4gIHN0b3AoKSB7XG5cbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgdGhpcy5jb25mZXR0aS5jb21wbGV0ZWQgKys7XG5cbiAgfVxuXG4gIHVwZGF0ZSggZGVsdGEgKSB7XG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkICogZGVsdGE7XG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uWyB0aGlzLnJldm9sdXRpb25BeGlzIF0gKz0gdGhpcy5yZXZvbHV0aW9uU3BlZWQ7XG5cbiAgICBpZiAoIHRoaXMubWVzaC5wb3NpdGlvbi55IDwgLSB0aGlzLmNvbmZldHRpLmhlaWdodCAtIHRoaXMuc2l6ZSApXG4gICAgICAoIHRoaXMuY29uZmV0dGkucGxheWluZyApID8gdGhpcy5yZXNldCggZmFsc2UgKSA6IHRoaXMuc3RvcCgpO1xuXG4gIH1cblxufVxuXG5jbGFzcyBTY29yZXMge1xuXG4gIGNvbnN0cnVjdG9yKCBnYW1lICkge1xuXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIDI6IHtcbiAgICAgICAgc2NvcmVzOiBbXSxcbiAgICAgICAgc29sdmVzOiAwLFxuICAgICAgICBiZXN0OiAwLFxuICAgICAgICB3b3JzdDogMCxcbiAgICAgIH0sXG4gICAgICAzOiB7XG4gICAgICAgIHNjb3JlczogW10sXG4gICAgICAgIHNvbHZlczogMCxcbiAgICAgICAgYmVzdDogMCxcbiAgICAgICAgd29yc3Q6IDAsXG4gICAgICB9LFxuICAgICAgNDoge1xuICAgICAgICBzY29yZXM6IFtdLFxuICAgICAgICBzb2x2ZXM6IDAsXG4gICAgICAgIGJlc3Q6IDAsXG4gICAgICAgIHdvcnN0OiAwLFxuICAgICAgfSxcbiAgICAgIDU6IHtcbiAgICAgICAgc2NvcmVzOiBbXSxcbiAgICAgICAgc29sdmVzOiAwLFxuICAgICAgICBiZXN0OiAwLFxuICAgICAgICB3b3JzdDogMCxcbiAgICAgIH1cbiAgICB9O1xuXG4gIH1cblxuICBhZGRTY29yZSggdGltZSApIHtcblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFbIHRoaXMuZ2FtZS5jdWJlLnNpemVHZW5lcmF0ZWQgXTtcblxuICAgIGRhdGEuc2NvcmVzLnB1c2goIHRpbWUgKTtcbiAgICBkYXRhLnNvbHZlcysrO1xuXG4gICAgaWYgKCBkYXRhLnNjb3Jlcy5sZW5naHQgPiAxMDAgKSBkYXRhLnNjb3Jlcy5zaGlmdCgpO1xuXG4gICAgbGV0IGJlc3RUaW1lID0gZmFsc2U7ICAgIFxuXG4gICAgaWYgKCB0aW1lIDwgZGF0YS5iZXN0IHx8IGRhdGEuYmVzdCA9PT0gMCApIHtcblxuICAgICAgZGF0YS5iZXN0ID0gdGltZTtcbiAgICAgIGJlc3RUaW1lID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIGlmICggdGltZSA+IGRhdGEud29yc3QgKSBkYXRhLndvcnN0ID0gdGltZTtcblxuICAgIHRoaXMuZ2FtZS5zdG9yYWdlLnNhdmVTY29yZXMoKTtcblxuICAgIHJldHVybiBiZXN0VGltZTtcblxuICB9XG5cbiAgY2FsY1N0YXRzKCkge1xuXG4gICAgY29uc3QgcyA9IHRoaXMuZ2FtZS5jdWJlLnNpemVHZW5lcmF0ZWQ7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVsgcyBdO1xuXG4gICAgdGhpcy5zZXRTdGF0KCAnY3ViZS1zaXplJywgYCR7c308aT54PC9pPiR7c308aT54PC9pPiR7c31gICk7XG4gICAgdGhpcy5zZXRTdGF0KCAndG90YWwtc29sdmVzJywgZGF0YS5zb2x2ZXMgKTtcbiAgICB0aGlzLnNldFN0YXQoICdiZXN0LXRpbWUnLCB0aGlzLmNvbnZlcnRUaW1lKCBkYXRhLmJlc3QgKSApO1xuICAgIHRoaXMuc2V0U3RhdCggJ3dvcnN0LXRpbWUnLCB0aGlzLmNvbnZlcnRUaW1lKCBkYXRhLndvcnN0ICkgKTtcbiAgICB0aGlzLnNldFN0YXQoICdhdmVyYWdlLTUnLCB0aGlzLmdldEF2ZXJhZ2UoIDUgKSApO1xuICAgIHRoaXMuc2V0U3RhdCggJ2F2ZXJhZ2UtMTInLCB0aGlzLmdldEF2ZXJhZ2UoIDEyICkgKTtcbiAgICB0aGlzLnNldFN0YXQoICdhdmVyYWdlLTI1JywgdGhpcy5nZXRBdmVyYWdlKCAyNSApICk7XG5cbiAgfVxuXG4gIHNldFN0YXQoIG5hbWUsIHZhbHVlICkge1xuXG4gICAgaWYgKCB2YWx1ZSA9PT0gMCApIHZhbHVlID0gJy0nO1xuXG4gICAgdGhpcy5nYW1lLmRvbS5zdGF0cy5xdWVyeVNlbGVjdG9yKCBgLnN0YXRzW25hbWU9XCIke25hbWV9XCJdIGJgICkuaW5uZXJIVE1MID0gdmFsdWU7XG5cbiAgfVxuXG4gIGdldEF2ZXJhZ2UoIGNvdW50ICkge1xuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVsgdGhpcy5nYW1lLmN1YmUuc2l6ZUdlbmVyYXRlZCBdO1xuXG4gICAgaWYgKCBkYXRhLnNjb3Jlcy5sZW5ndGggPCBjb3VudCApIHJldHVybiAwO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udmVydFRpbWUoIGRhdGEuc2NvcmVzLnNsaWNlKCAtY291bnQgKS5yZWR1Y2UoICggYSwgYiApID0+IGEgKyBiLCAwICkgLyBjb3VudCApO1xuXG4gIH1cblxuICBjb252ZXJ0VGltZSggdGltZSApIHtcblxuICAgIGlmICggdGltZSA8PSAwICkgcmV0dXJuIDA7XG5cbiAgICBjb25zdCBzZWNvbmRzID0gcGFyc2VJbnQoICggdGltZSAvIDEwMDAgKSAlIDYwICk7XG4gICAgY29uc3QgbWludXRlcyA9IHBhcnNlSW50KCAoIHRpbWUgLyAoIDEwMDAgKiA2MCApICkgKTtcblxuICAgIHJldHVybiBtaW51dGVzICsgJzonICsgKCBzZWNvbmRzIDwgMTAgPyAnMCcgOiAnJyApICsgc2Vjb25kcztcblxuICB9XG5cbn1cblxuY2xhc3MgU3RvcmFnZSB7XG5cbiAgY29uc3RydWN0b3IoIGdhbWUgKSB7XG5cbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuXG4gICAgY29uc3QgdXNlclZlcnNpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggJ3RoZUN1YmVfdmVyc2lvbicgKTtcblxuICAgIGlmICggISB1c2VyVmVyc2lvbiB8fCB1c2VyVmVyc2lvbiAhPT0gd2luZG93LmdhbWVWZXJzaW9uICkge1xuXG4gICAgICB0aGlzLmNsZWFyR2FtZSgpO1xuICAgICAgdGhpcy5jbGVhclByZWZlcmVuY2VzKCk7XG4gICAgICB0aGlzLm1pZ3JhdGVTY29yZXMoKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAndGhlQ3ViZV92ZXJzaW9uJywgd2luZG93LmdhbWVWZXJzaW9uICk7XG5cbiAgICB9XG5cbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgICB0aGlzLmxvYWRQcmVmZXJlbmNlcygpO1xuICAgIHRoaXMubG9hZFNjb3JlcygpO1xuXG4gIH1cblxuICBsb2FkR2FtZSgpIHtcblxuICAgIHRyeSB7XG5cbiAgICAgIGNvbnN0IGdhbWVJblByb2dyZXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oICd0aGVDdWJlX3BsYXlpbmcnICkgPT09ICd0cnVlJztcblxuICAgICAgaWYgKCAhIGdhbWVJblByb2dyZXNzICkgdGhyb3cgbmV3IEVycm9yKCk7XG5cbiAgICAgIGNvbnN0IGdhbWVDdWJlRGF0YSA9IEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCAndGhlQ3ViZV9zYXZlZFN0YXRlJyApICk7XG4gICAgICBjb25zdCBnYW1lVGltZSA9IHBhcnNlSW50KCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggJ3RoZUN1YmVfdGltZScgKSApO1xuXG4gICAgICBpZiAoICEgZ2FtZUN1YmVEYXRhIHx8IGdhbWVUaW1lID09PSBudWxsICkgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICBpZiAoIGdhbWVDdWJlRGF0YS5zaXplICE9PSB0aGlzLmdhbWUuY3ViZS5zaXplR2VuZXJhdGVkICkgdGhyb3cgbmV3IEVycm9yKCk7XG5cbiAgICAgIHRoaXMuZ2FtZS5jdWJlLmxvYWRGcm9tRGF0YSggZ2FtZUN1YmVEYXRhICk7XG5cbiAgICAgIHRoaXMuZ2FtZS50aW1lci5kZWx0YVRpbWUgPSBnYW1lVGltZTtcblxuICAgICAgdGhpcy5nYW1lLnNhdmVkID0gdHJ1ZTtcblxuICAgIH0gY2F0Y2goIGUgKSB7XG5cbiAgICAgIHRoaXMuZ2FtZS5zYXZlZCA9IGZhbHNlO1xuXG4gICAgfVxuXG4gIH1cblxuICBzYXZlR2FtZSgpIHtcblxuICAgIGNvbnN0IGdhbWVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICBjb25zdCBnYW1lQ3ViZURhdGEgPSB7IG5hbWVzOiBbXSwgcG9zaXRpb25zOiBbXSwgcm90YXRpb25zOiBbXSB9O1xuICAgIGNvbnN0IGdhbWVUaW1lID0gdGhpcy5nYW1lLnRpbWVyLmRlbHRhVGltZTtcblxuICAgIGdhbWVDdWJlRGF0YS5zaXplID0gdGhpcy5nYW1lLmN1YmUuc2l6ZUdlbmVyYXRlZDtcblxuICAgIHRoaXMuZ2FtZS5jdWJlLnBpZWNlcy5mb3JFYWNoKCBwaWVjZSA9PiB7XG5cbiAgICAgIGdhbWVDdWJlRGF0YS5uYW1lcy5wdXNoKCBwaWVjZS5uYW1lICk7XG4gICAgICBnYW1lQ3ViZURhdGEucG9zaXRpb25zLnB1c2goIHBpZWNlLnBvc2l0aW9uICk7XG4gICAgICBnYW1lQ3ViZURhdGEucm90YXRpb25zLnB1c2goIHBpZWNlLnJvdGF0aW9uLnRvVmVjdG9yMygpICk7XG5cbiAgICB9ICk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggJ3RoZUN1YmVfcGxheWluZycsIGdhbWVJblByb2dyZXNzICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oICd0aGVDdWJlX3NhdmVkU3RhdGUnLCBKU09OLnN0cmluZ2lmeSggZ2FtZUN1YmVEYXRhICkgKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggJ3RoZUN1YmVfdGltZScsIGdhbWVUaW1lICk7XG5cbiAgfVxuXG4gIGNsZWFyR2FtZSgpIHtcblxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCAndGhlQ3ViZV9wbGF5aW5nJyApO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCAndGhlQ3ViZV9zYXZlZFN0YXRlJyApO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCAndGhlQ3ViZV90aW1lJyApO1xuXG4gIH1cblxuICBsb2FkU2NvcmVzKCkge1xuXG4gICAgdHJ5IHtcblxuICAgICAgY29uc3Qgc2NvcmVzRGF0YSA9IEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCAndGhlQ3ViZV9zY29yZXMnICkgKTtcblxuICAgICAgaWYgKCAhIHNjb3Jlc0RhdGEgKSB0aHJvdyBuZXcgRXJyb3IoKTtcblxuICAgICAgdGhpcy5nYW1lLnNjb3Jlcy5kYXRhID0gc2NvcmVzRGF0YTtcblxuICAgIH0gY2F0Y2goIGUgKSB7fVxuXG4gIH1cblxuICBzYXZlU2NvcmVzKCkge1xuXG4gICAgY29uc3Qgc2NvcmVzRGF0YSA9IHRoaXMuZ2FtZS5zY29yZXMuZGF0YTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAndGhlQ3ViZV9zY29yZXMnLCBKU09OLnN0cmluZ2lmeSggc2NvcmVzRGF0YSApICk7XG5cbiAgfVxuXG4gIGNsZWFyU2NvcmVzKCkge1xuXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oICd0aGVDdWJlX3Njb3JlcycgKTtcblxuICB9XG5cbiAgbWlncmF0ZVNjb3JlcygpIHtcblxuICAgIHRyeSB7XG5cbiAgICAgIGNvbnN0IHNjb3Jlc0RhdGEgPSBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggJ3RoZUN1YmVfc2NvcmVzRGF0YScgKSApO1xuICAgICAgY29uc3Qgc2NvcmVzQmVzdCA9IHBhcnNlSW50KCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggJ3RoZUN1YmVfc2NvcmVzQmVzdCcgKSApO1xuICAgICAgY29uc3Qgc2NvcmVzV29yc3QgPSBwYXJzZUludCggbG9jYWxTdG9yYWdlLmdldEl0ZW0oICd0aGVDdWJlX3Njb3Jlc1dvcnN0JyApICk7XG4gICAgICBjb25zdCBzY29yZXNTb2x2ZXMgPSBwYXJzZUludCggbG9jYWxTdG9yYWdlLmdldEl0ZW0oICd0aGVDdWJlX3Njb3Jlc1NvbHZlcycgKSApO1xuXG4gICAgICBpZiAoICEgc2NvcmVzRGF0YSB8fCAhIHNjb3Jlc0Jlc3QgfHwgISBzY29yZXNTb2x2ZXMgfHwgISBzY29yZXNXb3JzdCApIHJldHVybiBmYWxzZTtcblxuICAgICAgdGhpcy5nYW1lLnNjb3Jlcy5kYXRhWyAzIF0uc2NvcmVzID0gc2NvcmVzRGF0YTtcbiAgICAgIHRoaXMuZ2FtZS5zY29yZXMuZGF0YVsgMyBdLmJlc3QgPSBzY29yZXNCZXN0O1xuICAgICAgdGhpcy5nYW1lLnNjb3Jlcy5kYXRhWyAzIF0uc29sdmVzID0gc2NvcmVzU29sdmVzO1xuICAgICAgdGhpcy5nYW1lLnNjb3Jlcy5kYXRhWyAzIF0ud29yc3QgPSBzY29yZXNXb3JzdDtcblxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oICd0aGVDdWJlX3Njb3Jlc0RhdGEnICk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggJ3RoZUN1YmVfc2NvcmVzQmVzdCcgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCAndGhlQ3ViZV9zY29yZXNXb3JzdCcgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCAndGhlQ3ViZV9zY29yZXNTb2x2ZXMnICk7XG5cbiAgICB9IGNhdGNoKCBlICkge31cblxuICB9XG5cbiAgbG9hZFByZWZlcmVuY2VzKCkge1xuXG4gICAgdHJ5IHtcblxuICAgICAgY29uc3QgcHJlZmVyZW5jZXMgPSBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggJ3RoZUN1YmVfcHJlZmVyZW5jZXMnICkgKTtcblxuICAgICAgaWYgKCAhIHByZWZlcmVuY2VzICkgdGhyb3cgbmV3IEVycm9yKCk7XG5cbiAgICAgIHRoaXMuZ2FtZS5jdWJlLnNpemUgPSBwYXJzZUludCggcHJlZmVyZW5jZXMuY3ViZVNpemUgKTtcbiAgICAgIHRoaXMuZ2FtZS5jb250cm9scy5mbGlwQ29uZmlnID0gcGFyc2VJbnQoIHByZWZlcmVuY2VzLmZsaXBDb25maWcgKTtcbiAgICAgIHRoaXMuZ2FtZS5zY3JhbWJsZXIuZGlmaWN1bHR5ID0gcGFyc2VJbnQoIHByZWZlcmVuY2VzLmRpZmljdWx0eSApO1xuXG4gICAgICB0aGlzLmdhbWUud29ybGQuZm92ID0gcGFyc2VGbG9hdCggcHJlZmVyZW5jZXMuZm92ICk7XG4gICAgICB0aGlzLmdhbWUud29ybGQucmVzaXplKCk7XG5cbiAgICAgIHRoaXMuZ2FtZS50aGVtZXMuY29sb3JzID0gcHJlZmVyZW5jZXMuY29sb3JzO1xuICAgICAgdGhpcy5nYW1lLnRoZW1lcy5zZXRUaGVtZSggcHJlZmVyZW5jZXMudGhlbWUgKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgIHRoaXMuZ2FtZS5jdWJlLnNpemUgPSAzO1xuICAgICAgdGhpcy5nYW1lLmNvbnRyb2xzLmZsaXBDb25maWcgPSAwO1xuICAgICAgdGhpcy5nYW1lLnNjcmFtYmxlci5kaWZpY3VsdHkgPSAxO1xuXG4gICAgICB0aGlzLmdhbWUud29ybGQuZm92ID0gMTA7XG4gICAgICB0aGlzLmdhbWUud29ybGQucmVzaXplKCk7XG5cbiAgICAgIHRoaXMuZ2FtZS50aGVtZXMuc2V0VGhlbWUoICdjdWJlJyApO1xuXG4gICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlcygpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHNhdmVQcmVmZXJlbmNlcygpIHtcblxuICAgIGNvbnN0IHByZWZlcmVuY2VzID0ge1xuICAgICAgY3ViZVNpemU6IHRoaXMuZ2FtZS5jdWJlLnNpemUsXG4gICAgICBmbGlwQ29uZmlnOiB0aGlzLmdhbWUuY29udHJvbHMuZmxpcENvbmZpZyxcbiAgICAgIGRpZmljdWx0eTogdGhpcy5nYW1lLnNjcmFtYmxlci5kaWZpY3VsdHksXG4gICAgICBmb3Y6IHRoaXMuZ2FtZS53b3JsZC5mb3YsXG4gICAgICB0aGVtZTogdGhpcy5nYW1lLnRoZW1lcy50aGVtZSxcbiAgICAgIGNvbG9yczogdGhpcy5nYW1lLnRoZW1lcy5jb2xvcnMsXG4gICAgfTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAndGhlQ3ViZV9wcmVmZXJlbmNlcycsIEpTT04uc3RyaW5naWZ5KCBwcmVmZXJlbmNlcyApICk7XG5cbiAgfVxuXG4gIGNsZWFyUHJlZmVyZW5jZXMoKSB7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggJ3RoZUN1YmVfcHJlZmVyZW5jZXMnICk7XG5cbiAgfVxuXG59XG5cbmNsYXNzIFRoZW1lcyB7XG5cbiAgY29uc3RydWN0b3IoIGdhbWUgKSB7XG5cbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMudGhlbWUgPSBudWxsO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIGN1YmU6IHtcbiAgICAgICAgVTogMHhmZmY3ZmYsIC8vIHdoaXRlXG4gICAgICAgIEQ6IDB4ZmZlZjQ4LCAvLyB5ZWxsb3dcbiAgICAgICAgRjogMHhlZjM5MjMsIC8vIHJlZFxuICAgICAgICBSOiAweDQxYWFjOCwgLy8gYmx1ZVxuICAgICAgICBCOiAweGZmOGMwYSwgLy8gb3JhbmdlXG4gICAgICAgIEw6IDB4ODJjYTM4LCAvLyBncmVlblxuICAgICAgICBQOiAweDA4MTAxYSwgLy8gcGllY2VcbiAgICAgICAgRzogMHhkMWQ1ZGIsIC8vIGJhY2tncm91bmRcbiAgICAgIH0sXG4gICAgICBlcm5vOiB7XG4gICAgICAgIFU6IDB4ZmZmZmZmLFxuICAgICAgICBEOiAweGZmZDUwMCxcbiAgICAgICAgRjogMHhjNDFlM2EsXG4gICAgICAgIFI6IDB4MDA1MWJhLFxuICAgICAgICBCOiAweGZmNTgwMCxcbiAgICAgICAgTDogMHgwMDllNjAsXG4gICAgICAgIFA6IDB4MDgxMDFhLFxuICAgICAgICBHOiAweDhhYmRmZixcbiAgICAgIH0sXG4gICAgICBkdXN0OiB7XG4gICAgICAgIFU6IDB4ZmZmNmViLFxuICAgICAgICBEOiAweGU3YzQ4ZCxcbiAgICAgICAgRjogMHg4ZjI1M2UsXG4gICAgICAgIFI6IDB4NjA3ZTY5LFxuICAgICAgICBCOiAweGJlNmY2MixcbiAgICAgICAgTDogMHg4NDlmNWQsXG4gICAgICAgIFA6IDB4MDgxMDFhLFxuICAgICAgICBHOiAweEU3QzQ4RCxcbiAgICAgIH0sXG4gICAgICBjYW1vOiB7XG4gICAgICAgIFU6IDB4ZmZmNmViLFxuICAgICAgICBEOiAweGJmYjY3MixcbiAgICAgICAgRjogMHgzNzI0MWMsXG4gICAgICAgIFI6IDB4NzE4NDU2LFxuICAgICAgICBCOiAweDgwNTgzMSxcbiAgICAgICAgTDogMHgzNzQzMWQsXG4gICAgICAgIFA6IDB4MDgxMDFhLFxuICAgICAgICBHOiAweEJGQjY3MixcbiAgICAgIH0sXG4gICAgICByYWluOiB7XG4gICAgICAgIFU6IDB4ZmFmYWZmLFxuICAgICAgICBEOiAweGVkYjkyZCxcbiAgICAgICAgRjogMHhjZTIxMzUsXG4gICAgICAgIFI6IDB4NDQ5YTg5LFxuICAgICAgICBCOiAweGVjNTgyZixcbiAgICAgICAgTDogMHhhM2E5NDcsXG4gICAgICAgIFA6IDB4MDgxMDFhLFxuICAgICAgICBHOiAweDg3YjlhYyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuY29sb3JzID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuZGVmYXVsdHMgKSApO1xuXG4gIH1cblxuICBnZXRDb2xvcnMoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5jb2xvcnNbIHRoaXMudGhlbWUgXTtcblxuICB9XG5cbiAgc2V0VGhlbWUoIHRoZW1lID0gZmFsc2UsIGZvcmNlID0gZmFsc2UgKSB7XG5cbiAgICBpZiAoIHRoZW1lID09PSB0aGlzLnRoZW1lICYmIGZvcmNlID09PSBmYWxzZSApIHJldHVybjtcbiAgICBpZiAoIHRoZW1lICE9PSBmYWxzZSApIHRoaXMudGhlbWUgPSB0aGVtZTtcblxuICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuZ2V0Q29sb3JzKCk7XG5cbiAgICB0aGlzLmdhbWUuZG9tLnByZWZzLnF1ZXJ5U2VsZWN0b3JBbGwoICcucmFuZ2VfX2hhbmRsZSBkaXYnICkuZm9yRWFjaCggcmFuZ2UgPT4ge1xuXG4gICAgICByYW5nZS5zdHlsZS5iYWNrZ3JvdW5kID0gJyMnICsgY29sb3JzLlIudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDYsICcwJyk7XG5cbiAgICB9ICk7XG5cbiAgICB0aGlzLmdhbWUuY3ViZS51cGRhdGVDb2xvcnMoIGNvbG9ycyApO1xuXG4gICAgdGhpcy5nYW1lLmNvbmZldHRpLnVwZGF0ZUNvbG9ycyggY29sb3JzICk7XG5cbiAgICAvLyB0aGlzLmdhbWUuZG9tLmJhY2suc3R5bGUuYmFja2dyb3VuZCA9ICcjJyArIGNvbG9ycy5HLnRvU3RyaW5nKDE2KS5wYWRTdGFydCg2LCAnMCcpO1xuICAgIHRoaXMuZ2FtZS5kb20uYmFjay5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcblxuICB9XG5cbn1cblxuY2xhc3MgVGhlbWVFZGl0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKCBnYW1lICkge1xuXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgIHRoaXMuZWRpdENvbG9yID0gJ1InO1xuXG4gICAgdGhpcy5nZXRQaWVjZUNvbG9yID0gdGhpcy5nZXRQaWVjZUNvbG9yLmJpbmQoIHRoaXMgKTtcblxuICB9XG5cbiAgY29sb3JGcm9tSFNMKCBoLCBzLCBsICkge1xuXG4gICAgaCA9IE1hdGgucm91bmQoIGggKTtcbiAgICBzID0gTWF0aC5yb3VuZCggcyApO1xuICAgIGwgPSBNYXRoLnJvdW5kKCBsICk7XG5cbiAgICByZXR1cm4gbmV3IFRIUkVFLkNvbG9yKCBgaHNsKCR7aH0sICR7c30lLCAke2x9JSlgICk7XG5cbiAgfVxuXG4gIHNldEhTTCggY29sb3IgPSBudWxsLCBhbmltYXRlID0gZmFsc2UgKSB7XG5cbiAgICB0aGlzLmVkaXRDb2xvciA9ICggY29sb3IgPT09IG51bGwpID8gJ1InIDogY29sb3I7XG5cbiAgICBjb25zdCBoc2wgPSBuZXcgVEhSRUUuQ29sb3IoIHRoaXMuZ2FtZS50aGVtZXMuZ2V0Q29sb3JzKClbIHRoaXMuZWRpdENvbG9yIF0gKTtcblxuICAgIGNvbnN0IHsgaCwgcywgbCB9ID0gaHNsLmdldEhTTCggaHNsICk7XG4gICAgY29uc3QgeyBodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcyB9ID0gdGhpcy5nYW1lLnByZWZlcmVuY2VzLnJhbmdlcztcblxuICAgIGlmICggYW5pbWF0ZSApIHtcblxuICAgICAgY29uc3QgaG8gPSBodWUudmFsdWUgLyAzNjA7XG4gICAgICBjb25zdCBzbyA9IHNhdHVyYXRpb24udmFsdWUgLyAxMDA7XG4gICAgICBjb25zdCBsbyA9IGxpZ2h0bmVzcy52YWx1ZSAvIDEwMDtcblxuICAgICAgY29uc3QgY29sb3JPbGQgPSB0aGlzLmNvbG9yRnJvbUhTTCggaHVlLnZhbHVlLCBzYXR1cmF0aW9uLnZhbHVlLCBsaWdodG5lc3MudmFsdWUgKTtcblxuICAgICAgaWYgKCB0aGlzLnR3ZWVuSFNMICkgdGhpcy50d2VlbkhTTC5zdG9wKCk7XG5cbiAgICAgIHRoaXMudHdlZW5IU0wgPSBuZXcgVHdlZW4oIHtcbiAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgZWFzaW5nOiBFYXNpbmcuU2luZS5PdXQoKSxcbiAgICAgICAgb25VcGRhdGU6IHR3ZWVuID0+IHtcblxuICAgICAgICAgIGh1ZS5zZXRWYWx1ZSggKCBobyArICggaCAtIGhvICkgKiB0d2Vlbi52YWx1ZSApICogMzYwICk7XG4gICAgICAgICAgc2F0dXJhdGlvbi5zZXRWYWx1ZSggKCBzbyArICggcyAtIHNvICkgKiB0d2Vlbi52YWx1ZSApICogMTAwICk7XG4gICAgICAgICAgbGlnaHRuZXNzLnNldFZhbHVlKCAoIGxvICsgKCBsIC0gbG8gKSAqIHR3ZWVuLnZhbHVlICkgKiAxMDAgKTtcblxuICAgICAgICAgIGNvbnN0IGNvbG9yVHdlZW4gPSBjb2xvck9sZC5jbG9uZSgpLmxlcnAoIGhzbCwgdHdlZW4udmFsdWUgKTtcblxuICAgICAgICAgIGNvbnN0IGNvbG9yVHdlZW5TdHlsZSA9IGNvbG9yVHdlZW4uZ2V0U3R5bGUoKTtcbiAgICAgICAgICBjb25zdCBjb2xvclR3ZWVuSGV4ID0gY29sb3JUd2Vlbi5nZXRIU0woIGNvbG9yVHdlZW4gKTtcblxuICAgICAgICAgIGh1ZS5oYW5kbGUuc3R5bGUuY29sb3IgPSBjb2xvclR3ZWVuU3R5bGU7XG4gICAgICAgICAgc2F0dXJhdGlvbi5oYW5kbGUuc3R5bGUuY29sb3IgPSBjb2xvclR3ZWVuU3R5bGU7XG4gICAgICAgICAgbGlnaHRuZXNzLmhhbmRsZS5zdHlsZS5jb2xvciA9IGNvbG9yVHdlZW5TdHlsZTtcblxuICAgICAgICAgIHNhdHVyYXRpb24udHJhY2suc3R5bGUuY29sb3IgPVxuICAgICAgICAgICAgdGhpcy5jb2xvckZyb21IU0woIGNvbG9yVHdlZW5IZXguaCAqIDM2MCwgMTAwLCA1MCApLmdldFN0eWxlKCk7XG4gICAgICAgICAgbGlnaHRuZXNzLnRyYWNrLnN0eWxlLmNvbG9yID1cbiAgICAgICAgICAgIHRoaXMuY29sb3JGcm9tSFNMKCBjb2xvclR3ZWVuSGV4LmggKiAzNjAsIGNvbG9yVHdlZW5IZXgucyAqIDEwMCwgNTAgKS5nZXRTdHlsZSgpO1xuXG4gICAgICAgICAgdGhpcy5nYW1lLmRvbS50aGVtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIHRoaXMuZ2FtZS5kb20udGhlbWUub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgIHRoaXMuZ2FtZS5kb20udGhlbWUuc3R5bGUuZGlzcGxheSA9ICcnO1xuXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcblxuICAgICAgICAgIHRoaXMudXBkYXRlSFNMKCk7XG4gICAgICAgICAgdGhpcy5nYW1lLnN0b3JhZ2Uuc2F2ZVByZWZlcmVuY2VzKCk7XG5cbiAgICAgICAgfSxcbiAgICAgIH0gKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGh1ZS5zZXRWYWx1ZSggaCAqIDM2MCApO1xuICAgICAgc2F0dXJhdGlvbi5zZXRWYWx1ZSggcyAqIDEwMCApO1xuICAgICAgbGlnaHRuZXNzLnNldFZhbHVlKCBsICogMTAwICk7XG5cbiAgICAgIHRoaXMudXBkYXRlSFNMKCk7XG4gICAgICB0aGlzLmdhbWUuc3RvcmFnZS5zYXZlUHJlZmVyZW5jZXMoKTtcblxuICAgIH1cblxuICB9XG5cbiAgdXBkYXRlSFNMKCkge1xuXG4gICAgY29uc3QgeyBodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcyB9ID0gdGhpcy5nYW1lLnByZWZlcmVuY2VzLnJhbmdlcztcblxuICAgIGNvbnN0IGggPSBodWUudmFsdWU7XG4gICAgY29uc3QgcyA9IHNhdHVyYXRpb24udmFsdWU7XG4gICAgY29uc3QgbCA9IGxpZ2h0bmVzcy52YWx1ZTtcblxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvckZyb21IU0woIGgsIHMsIGwgKS5nZXRTdHlsZSgpO1xuXG4gICAgaHVlLmhhbmRsZS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgIHNhdHVyYXRpb24uaGFuZGxlLnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgbGlnaHRuZXNzLmhhbmRsZS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuXG4gICAgc2F0dXJhdGlvbi50cmFjay5zdHlsZS5jb2xvciA9IHRoaXMuY29sb3JGcm9tSFNMKCBoLCAxMDAsIDUwICkuZ2V0U3R5bGUoKTtcbiAgICBsaWdodG5lc3MudHJhY2suc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yRnJvbUhTTCggaCwgcywgNTAgKS5nZXRTdHlsZSgpO1xuXG4gICAgdGhpcy5nYW1lLmRvbS50aGVtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuZ2FtZS5kb20udGhlbWUub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuZ2FtZS5kb20udGhlbWUuc3R5bGUuZGlzcGxheSA9ICcnO1xuXG4gICAgY29uc3QgdGhlbWUgPSB0aGlzLmdhbWUudGhlbWVzLnRoZW1lO1xuXG4gICAgdGhpcy5nYW1lLnRoZW1lcy5jb2xvcnNbIHRoZW1lIF1bIHRoaXMuZWRpdENvbG9yIF0gPSB0aGlzLmNvbG9yRnJvbUhTTCggaCwgcywgbCApLmdldEhleCgpO1xuICAgIHRoaXMuZ2FtZS50aGVtZXMuc2V0VGhlbWUoKTtcblxuICB9XG5cbiAgY29sb3JQaWNrZXIoIGVuYWJsZSApIHtcblxuICAgIGlmICggZW5hYmxlICkge1xuXG4gICAgICB0aGlzLmdhbWUuZG9tLmdhbWUuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5nZXRQaWVjZUNvbG9yLCBmYWxzZSApO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5nYW1lLmRvbS5nYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMuZ2V0UGllY2VDb2xvciwgZmFsc2UgKTtcblxuICAgIH1cblxuICB9XG5cbiAgZ2V0UGllY2VDb2xvciggZXZlbnQgKSB7XG5cbiAgICBjb25zdCBjbGlja0V2ZW50ID0gZXZlbnQudG91Y2hlc1xuICAgICAgPyAoIGV2ZW50LnRvdWNoZXNbIDAgXSB8fCBldmVudC5jaGFuZ2VkVG91Y2hlc1sgMCBdIClcbiAgICAgIDogZXZlbnQ7XG5cbiAgICBjb25zdCBjbGlja1Bvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjIoIGNsaWNrRXZlbnQucGFnZVgsIGNsaWNrRXZlbnQucGFnZVkgKTtcblxuICAgIGxldCBlZGdlSW50ZXJzZWN0ID0gdGhpcy5nYW1lLmNvbnRyb2xzLmdldEludGVyc2VjdCggY2xpY2tQb3NpdGlvbiwgdGhpcy5nYW1lLmN1YmUuZWRnZXMsIHRydWUgKTtcbiAgICBsZXQgcGllY2VJbnRlcnNlY3QgPSB0aGlzLmdhbWUuY29udHJvbHMuZ2V0SW50ZXJzZWN0KCBjbGlja1Bvc2l0aW9uLCB0aGlzLmdhbWUuY3ViZS5jdWJlcywgdHJ1ZSApO1xuXG4gICAgaWYgKCBlZGdlSW50ZXJzZWN0ICE9PSBmYWxzZSApIHtcblxuICAgICAgY29uc3QgZWRnZSA9IGVkZ2VJbnRlcnNlY3Qub2JqZWN0O1xuXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGVkZ2UucGFyZW50XG4gICAgICAgIC5sb2NhbFRvV29ybGQoIGVkZ2UucG9zaXRpb24uY2xvbmUoKSApXG4gICAgICAgIC5zdWIoIHRoaXMuZ2FtZS5jdWJlLm9iamVjdC5wb3NpdGlvbiApXG4gICAgICAgIC5zdWIoIHRoaXMuZ2FtZS5jdWJlLmFuaW1hdG9yLnBvc2l0aW9uICk7XG5cbiAgICAgIGNvbnN0IG1haW5BeGlzID0gdGhpcy5nYW1lLmNvbnRyb2xzLmdldE1haW5BeGlzKCBwb3NpdGlvbiApO1xuICAgICAgaWYgKCBwb3NpdGlvbi5tdWx0aXBseVNjYWxhciggMiApLnJvdW5kKClbIG1haW5BeGlzIF0gPCAxICkgZWRnZUludGVyc2VjdCA9IGZhbHNlO1xuXG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGVkZ2VJbnRlcnNlY3QgPyBlZGdlSW50ZXJzZWN0Lm9iamVjdC5uYW1lIDogcGllY2VJbnRlcnNlY3QgPyAnUCcgOiAnRyc7XG5cbiAgICB0aGlzLnNldEhTTCggbmFtZSwgdHJ1ZSApO1xuXG4gIH1cblxuICByZXNldFRoZW1lKCkge1xuXG4gICAgdGhpcy5nYW1lLnRoZW1lcy5jb2xvcnNbIHRoaXMuZ2FtZS50aGVtZXMudGhlbWUgXSA9XG4gICAgICBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5nYW1lLnRoZW1lcy5kZWZhdWx0c1sgdGhpcy5nYW1lLnRoZW1lcy50aGVtZSBdICkgKTtcblxuICAgIHRoaXMuZ2FtZS50aGVtZXMuc2V0VGhlbWUoKTtcblxuICAgIHRoaXMuc2V0SFNMKCB0aGlzLmVkaXRDb2xvciwgdHJ1ZSApO1xuXG4gIH1cblxufVxuXG5jb25zdCBTdGF0ZXMgPSB7XG4gIDM6IHtcbiAgICBjaGVja2VyYm9hcmQ6IHtcbiAgICAgIG5hbWVzOiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2IF0sXG4gICAgICBwb3NpdGlvbnM6IFtcbiAgICAgICAgeyBcInhcIjogMS8zLCBcInlcIjogLTEvMywgXCJ6XCI6IDEvMyB9LFxuICAgICAgICB7IFwieFwiOiAtMS8zLCBcInlcIjogMS8zLCBcInpcIjogMCB9LFxuICAgICAgICB7IFwieFwiOiAxLzMsIFwieVwiOiAtMS8zLCBcInpcIjogLTEvMyB9LFxuICAgICAgICB7IFwieFwiOiAtMS8zLCBcInlcIjogMCwgXCJ6XCI6IC0xLzMgfSxcbiAgICAgICAgeyBcInhcIjogMS8zLCBcInlcIjogMCwgXCJ6XCI6IDAgfSxcbiAgICAgICAgeyBcInhcIjogLTEvMywgXCJ5XCI6IDAsIFwielwiOiAxLzMgfSxcbiAgICAgICAgeyBcInhcIjogMS8zLCBcInlcIjogMS8zLCBcInpcIjogMS8zIH0sXG4gICAgICAgIHsgXCJ4XCI6IC0xLzMsIFwieVwiOiAtMS8zLCBcInpcIjogMCB9LFxuICAgICAgICB7IFwieFwiOiAxLzMsIFwieVwiOiAxLzMsIFwielwiOiAtMS8zIH0sXG4gICAgICAgIHsgXCJ4XCI6IDAsIFwieVwiOiAxLzMsIFwielwiOiAtMS8zIH0sXG4gICAgICAgIHsgXCJ4XCI6IDAsIFwieVwiOiAtMS8zLCBcInpcIjogMCB9LFxuICAgICAgICB7IFwieFwiOiAwLCBcInlcIjogMS8zLCBcInpcIjogMS8zIH0sXG4gICAgICAgIHsgXCJ4XCI6IDAsIFwieVwiOiAwLCBcInpcIjogMS8zIH0sXG4gICAgICAgIHsgXCJ4XCI6IDAsIFwieVwiOiAwLCBcInpcIjogMCB9LFxuICAgICAgICB7IFwieFwiOiAwLCBcInlcIjogMCwgXCJ6XCI6IC0xLzMgfSxcbiAgICAgICAgeyBcInhcIjogMCwgXCJ5XCI6IC0xLzMsIFwielwiOiAtMS8zIH0sXG4gICAgICAgIHsgXCJ4XCI6IDAsIFwieVwiOiAxLzMsIFwielwiOiAwIH0sXG4gICAgICAgIHsgXCJ4XCI6IDAsIFwieVwiOiAtMS8zLCBcInpcIjogMS8zIH0sXG4gICAgICAgIHsgXCJ4XCI6IC0xLzMsIFwieVwiOiAtMS8zLCBcInpcIjogMS8zIH0sXG4gICAgICAgIHsgXCJ4XCI6IDEvMywgXCJ5XCI6IDEvMywgXCJ6XCI6IDAgfSxcbiAgICAgICAgeyBcInhcIjogLTEvMywgXCJ5XCI6IC0xLzMsIFwielwiOiAtMS8zIH0sXG4gICAgICAgIHsgXCJ4XCI6IDEvMywgXCJ5XCI6IDAsIFwielwiOiAtMS8zIH0sXG4gICAgICAgIHsgXCJ4XCI6IC0xLzMsIFwieVwiOiAwLCBcInpcIjogMCB9LFxuICAgICAgICB7IFwieFwiOiAxLzMsIFwieVwiOiAwLCBcInpcIjogMS8zIH0sXG4gICAgICAgIHsgXCJ4XCI6IC0xLzMsIFwieVwiOiAxLzMsIFwielwiOiAxLzMgfSxcbiAgICAgICAgeyBcInhcIjogMS8zLCBcInlcIjogLTEvMywgXCJ6XCI6IDAgfSxcbiAgICAgICAgeyBcInhcIjogLTEvMywgXCJ5XCI6IDEvMywgXCJ6XCI6IC0xLzMgfVxuICAgICAgXSxcbiAgICAgIHJvdGF0aW9uczogW1xuICAgICAgICB7IFwieFwiOiAtTWF0aC5QSSwgXCJ5XCI6IDAsIFwielwiOiBNYXRoLlBJLCB9LFxuICAgICAgICB7IFwieFwiOiBNYXRoLlBJLCBcInlcIjogMCwgXCJ6XCI6IDAgfSxcbiAgICAgICAgeyBcInhcIjogLU1hdGguUEksIFwieVwiOiAwLCBcInpcIjogTWF0aC5QSSB9LFxuICAgICAgICB7IFwieFwiOiAwLCBcInlcIjogMCwgXCJ6XCI6IDAgfSxcbiAgICAgICAgeyBcInhcIjogMCwgXCJ5XCI6IDAsIFwielwiOiBNYXRoLlBJIH0sXG4gICAgICAgIHsgXCJ4XCI6IDAsIFwieVwiOiAwLCBcInpcIjogMCB9LFxuICAgICAgICB7IFwieFwiOiAtTWF0aC5QSSwgXCJ5XCI6IDAsIFwielwiOiBNYXRoLlBJIH0sXG4gICAgICAgIHsgXCJ4XCI6IE1hdGguUEksIFwieVwiOiAwLCBcInpcIjogMCB9LFxuICAgICAgICB7IFwieFwiOiAtTWF0aC5QSSwgXCJ5XCI6IDAsIFwielwiOiBNYXRoLlBJIH0sXG4gICAgICAgIHsgXCJ4XCI6IDAsIFwieVwiOiAwLCBcInpcIjogTWF0aC5QSSB9LFxuICAgICAgICB7IFwieFwiOiAwLCBcInlcIjogMCwgXCJ6XCI6IDAgfSxcbiAgICAgICAgeyBcInhcIjogMCwgXCJ5XCI6IDAsIFwielwiOiBNYXRoLlBJIH0sXG4gICAgICAgIHsgXCJ4XCI6IC1NYXRoLlBJLCBcInlcIjogMCwgXCJ6XCI6IDAgfSxcbiAgICAgICAgeyBcInhcIjogTWF0aC5QSSwgXCJ5XCI6IDAsIFwielwiOiBNYXRoLlBJIH0sXG4gICAgICAgIHsgXCJ4XCI6IE1hdGguUEksIFwieVwiOiAwLCBcInpcIjogMCB9LFxuICAgICAgICB7IFwieFwiOiAwLCBcInlcIjogMCwgXCJ6XCI6IE1hdGguUEkgfSxcbiAgICAgICAgeyBcInhcIjogMCwgXCJ5XCI6IDAsIFwielwiOiAwIH0sXG4gICAgICAgIHsgXCJ4XCI6IDAsIFwieVwiOiAwLCBcInpcIjogTWF0aC5QSSB9LFxuICAgICAgICB7IFwieFwiOiBNYXRoLlBJLCBcInlcIjogMCwgXCJ6XCI6IE1hdGguUEkgfSxcbiAgICAgICAgeyBcInhcIjogLU1hdGguUEksIFwieVwiOiAwLCBcInpcIjogMCB9LFxuICAgICAgICB7IFwieFwiOiBNYXRoLlBJLCBcInlcIjogMCwgXCJ6XCI6IE1hdGguUEkgfSxcbiAgICAgICAgeyBcInhcIjogMCwgXCJ5XCI6IDAsIFwielwiOiAwIH0sXG4gICAgICAgIHsgXCJ4XCI6IDAsIFwieVwiOiAwLCBcInpcIjogTWF0aC5QSSB9LFxuICAgICAgICB7IFwieFwiOiAwLCBcInlcIjogMCwgXCJ6XCI6IDAgfSxcbiAgICAgICAgeyBcInhcIjogTWF0aC5QSSwgXCJ5XCI6IDAsIFwielwiOiBNYXRoLlBJIH0sXG4gICAgICAgIHsgXCJ4XCI6IC1NYXRoLlBJLCBcInlcIjogMCwgXCJ6XCI6IDAgfSxcbiAgICAgICAgeyBcInhcIjogTWF0aC5QSSwgXCJ5XCI6IDAsIFwielwiOiBNYXRoLlBJIH1cbiAgICAgIF0sXG4gICAgICBzaXplOiAzLFxuICAgIH0sXG4gIH1cbn07XG5cbmNsYXNzIEljb25zQ29udmVydGVyIHtcblxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcblxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKCB7XG4gICAgICB0YWdOYW1lOiAnaWNvbicsXG4gICAgICBjbGFzc05hbWU6ICdpY29uJyxcbiAgICAgIHN0eWxlczogZmFsc2UsXG4gICAgICBpY29uczoge30sXG4gICAgICBvYnNlcnZlOiBmYWxzZSxcbiAgICAgIGNvbnZlcnQ6IGZhbHNlLFxuICAgIH0sIG9wdGlvbnMgfHwge30gKTtcblxuICAgIHRoaXMudGFnTmFtZSA9IG9wdGlvbnMudGFnTmFtZTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgIHRoaXMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuXG4gICAgdGhpcy5zdmdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnICk7XG4gICAgdGhpcy5zdmdUYWcuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCB0aGlzLmNsYXNzTmFtZSApO1xuXG4gICAgaWYgKCBvcHRpb25zLnN0eWxlcyApIHRoaXMuYWRkU3R5bGVzKCk7XG4gICAgaWYgKCBvcHRpb25zLmNvbnZlcnQgKSB0aGlzLmNvbnZlcnRBbGxJY29ucygpO1xuXG4gICAgaWYgKCBvcHRpb25zLm9ic2VydmUgKSB7XG5cbiAgICAgIGNvbnN0IE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlciggbXV0YXRpb25zID0+IHsgdGhpcy5jb252ZXJ0QWxsSWNvbnMoKTsgfSApO1xuICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0gKTtcblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICBjb252ZXJ0QWxsSWNvbnMoKSB7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCB0aGlzLnRhZ05hbWUgKS5mb3JFYWNoKCBpY29uID0+IHsgdGhpcy5jb252ZXJ0SWNvbiggaWNvbiApOyB9ICk7XG5cbiAgfVxuXG4gIGNvbnZlcnRJY29uKCBpY29uICkge1xuXG4gICAgY29uc3Qgc3ZnRGF0YSA9IHRoaXMuaWNvbnNbIGljb24uYXR0cmlidXRlc1swXS5sb2NhbE5hbWUgXTtcblxuICAgIGlmICggdHlwZW9mIHN2Z0RhdGEgPT09ICd1bmRlZmluZWQnICkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3ZnID0gdGhpcy5zdmdUYWcuY2xvbmVOb2RlKCB0cnVlICk7XG4gICAgY29uc3Qgdmlld0JveCA9IHN2Z0RhdGEudmlld2JveC5zcGxpdCggJyAnICk7XG5cbiAgICBzdmcuc2V0QXR0cmlidXRlTlMoIG51bGwsICd2aWV3Qm94Jywgc3ZnRGF0YS52aWV3Ym94ICk7XG4gICAgc3ZnLnN0eWxlLndpZHRoID0gdmlld0JveFsyXSAvIHZpZXdCb3hbM10gKyAnZW0nO1xuICAgIHN2Zy5zdHlsZS5oZWlnaHQgPSAnMWVtJztcbiAgICBzdmcuaW5uZXJIVE1MID0gc3ZnRGF0YS5jb250ZW50O1xuXG4gICAgaWNvbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCggc3ZnLCBpY29uICk7XG5cbiAgfVxuXG4gIGFkZFN0eWxlcygpIHtcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3N0eWxlJyApO1xuICAgIHN0eWxlLmlubmVySFRNTCA9IGAuJHt0aGlzLmNsYXNzTmFtZX0geyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogaW5oZXJpdDsgb3ZlcmZsb3c6IHZpc2libGU7IHZlcnRpY2FsLWFsaWduOiAtMC4xMjVlbTsgcHJlc2VydmVBc3BlY3RSYXRpbzogbm9uZTsgfWA7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc3R5bGUgKTtcblxuICB9XG5cbn1cblxuY29uc3QgSWNvbnMgPSBuZXcgSWNvbnNDb252ZXJ0ZXIoIHtcblxuICBpY29uczoge1xuICAgIHNldHRpbmdzOiB7XG4gICAgICB2aWV3Ym94OiAnMCAwIDUxMiA1MTInLFxuICAgICAgY29udGVudDogJzxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQ0NC43ODggMjkxLjFsNDIuNjE2IDI0LjU5OWM0Ljg2NyAyLjgwOSA3LjEyNiA4LjYxOCA1LjQ1OSAxMy45ODUtMTEuMDcgMzUuNjQyLTI5Ljk3IDY3Ljg0Mi01NC42ODkgOTQuNTg2YTEyLjAxNiAxMi4wMTYgMCAwIDEtMTQuODMyIDIuMjU0bC00Mi41ODQtMjQuNTk1YTE5MS41NzcgMTkxLjU3NyAwIDAgMS02MC43NTkgMzUuMTN2NDkuMTgyYTEyLjAxIDEyLjAxIDAgMCAxLTkuMzc3IDExLjcxOGMtMzQuOTU2IDcuODUtNzIuNDk5IDguMjU2LTEwOS4yMTkuMDA3LTUuNDktMS4yMzMtOS40MDMtNi4wOTYtOS40MDMtMTEuNzIzdi00OS4xODRhMTkxLjU1NSAxOTEuNTU1IDAgMCAxLTYwLjc1OS0zNS4xM2wtNDIuNTg0IDI0LjU5NWExMi4wMTYgMTIuMDE2IDAgMCAxLTE0LjgzMi0yLjI1NGMtMjQuNzE4LTI2Ljc0NC00My42MTktNTguOTQ0LTU0LjY4OS05NC41ODYtMS42NjctNS4zNjYuNTkyLTExLjE3NSA1LjQ1OS0xMy45ODVMNjcuMjEyIDI5MS4xYTE5My40OCAxOTMuNDggMCAwIDEgMC03MC4xOTlsLTQyLjYxNi0yNC41OTljLTQuODY3LTIuODA5LTcuMTI2LTguNjE4LTUuNDU5LTEzLjk4NSAxMS4wNy0zNS42NDIgMjkuOTctNjcuODQyIDU0LjY4OS05NC41ODZhMTIuMDE2IDEyLjAxNiAwIDAgMSAxNC44MzItMi4yNTRsNDIuNTg0IDI0LjU5NWExOTEuNTc3IDE5MS41NzcgMCAwIDEgNjAuNzU5LTM1LjEzVjI1Ljc1OWExMi4wMSAxMi4wMSAwIDAgMSA5LjM3Ny0xMS43MThjMzQuOTU2LTcuODUgNzIuNDk5LTguMjU2IDEwOS4yMTktLjAwNyA1LjQ5IDEuMjMzIDkuNDAzIDYuMDk2IDkuNDAzIDExLjcyM3Y0OS4xODRhMTkxLjU1NSAxOTEuNTU1IDAgMCAxIDYwLjc1OSAzNS4xM2w0Mi41ODQtMjQuNTk1YTEyLjAxNiAxMi4wMTYgMCAwIDEgMTQuODMyIDIuMjU0YzI0LjcxOCAyNi43NDQgNDMuNjE5IDU4Ljk0NCA1NC42ODkgOTQuNTg2IDEuNjY3IDUuMzY2LS41OTIgMTEuMTc1LTUuNDU5IDEzLjk4NUw0NDQuNzg4IDIyMC45YTE5My40ODUgMTkzLjQ4NSAwIDAgMSAwIDcwLjJ6TTMzNiAyNTZjMC00NC4xMTItMzUuODg4LTgwLTgwLTgwcy04MCAzNS44ODgtODAgODAgMzUuODg4IDgwIDgwIDgwIDgwLTM1Ljg4OCA4MC04MHpcIiAvPicsXG4gICAgfSxcbiAgICBiYWNrOiB7XG4gICAgICB2aWV3Ym94OiAnMCAwIDUxMiA1MTInLFxuICAgICAgY29udGVudDogJzxwYXRoIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1MTIsIDApIHNjYWxlKC0xLDEpXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTAzLjY5MSAxODkuODM2TDMyNy42ODcgMzcuODUxQzMxMi4yODEgMjQuNTQ2IDI4OCAzNS4zNDcgMjg4IDU2LjAxNXY4MC4wNTNDMTI3LjM3MSAxMzcuOTA3IDAgMTcwLjEgMCAzMjIuMzI2YzAgNjEuNDQxIDM5LjU4MSAxMjIuMzA5IDgzLjMzMyAxNTQuMTMyIDEzLjY1MyA5LjkzMSAzMy4xMTEtMi41MzMgMjguMDc3LTE4LjYzMUM2Ni4wNjYgMzEyLjgxNCAxMzIuOTE3IDI3NC4zMTYgMjg4IDI3Mi4wODVWMzYwYzAgMjAuNyAyNC4zIDMxLjQ1MyAzOS42ODcgMTguMTY0bDE3Ni4wMDQtMTUyYzExLjA3MS05LjU2MiAxMS4wODYtMjYuNzUzIDAtMzYuMzI4elwiIC8+JyxcbiAgICB9LFxuICAgIHRyb3BoeToge1xuICAgICAgdmlld2JveDogJzAgMCA1NzYgNTEyJyxcbiAgICAgIGNvbnRlbnQ6ICc8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01NTIgNjRINDQ4VjI0YzAtMTMuMy0xMC43LTI0LTI0LTI0SDE1MmMtMTMuMyAwLTI0IDEwLjctMjQgMjR2NDBIMjRDMTAuNyA2NCAwIDc0LjcgMCA4OHY1NmMwIDY2LjUgNzcuOSAxMzEuNyAxNzEuOSAxNDIuNEMyMDMuMyAzMzguNSAyNDAgMzYwIDI0MCAzNjB2NzJoLTQ4Yy0zNS4zIDAtNjQgMjAuNy02NCA1NnYxMmMwIDYuNiA1LjQgMTIgMTIgMTJoMjk2YzYuNiAwIDEyLTUuNCAxMi0xMnYtMTJjMC0zNS4zLTI4LjctNTYtNjQtNTZoLTQ4di03MnMzNi43LTIxLjUgNjguMS03My42QzQ5OC40IDI3NS42IDU3NiAyMTAuMyA1NzYgMTQ0Vjg4YzAtMTMuMy0xMC43LTI0LTI0LTI0ek02NCAxNDR2LTE2aDY0LjJjMSAzMi42IDUuOCA2MS4yIDEyLjggODYuMi00Ny41LTE2LjQtNzctNDkuOS03Ny03MC4yem00NDggMGMwIDIwLjItMjkuNCA1My44LTc3IDcwLjIgNy0yNSAxMS44LTUzLjYgMTIuOC04Ni4ySDUxMnYxNnptLTEyNy4zIDQuN2wtMzkuNiAzOC42IDkuNCA1NC42YzEuNyA5LjgtOC43IDE3LjItMTcuNCAxMi42bC00OS0yNS44LTQ5IDI1LjhjLTguOCA0LjYtMTkuMS0yLjktMTcuNC0xMi42bDkuNC01NC42LTM5LjYtMzguNmMtNy4xLTYuOS0zLjItMTkgNi43LTIwLjVsNTQuOC04IDI0LjUtNDkuNmM0LjQtOC45IDE3LjEtOC45IDIxLjUgMGwyNC41IDQ5LjYgNTQuOCA4YzkuNiAxLjUgMTMuNSAxMy42IDYuNCAyMC41elwiIC8+JyxcbiAgICB9LFxuICAgIGNhbmNlbDoge1xuICAgICAgdmlld2JveDogJzAgMCAzNTIgNTEyJyxcbiAgICAgIGNvbnRlbnQ6ICc8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIiAvPicsXG4gICAgfSxcbiAgICB0aGVtZToge1xuICAgICAgdmlld2JveDogJzAgMCA1MTIgNTEyJyxcbiAgICAgIGNvbnRlbnQ6ICc8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMDQuMyA1QzEwNC45IDI0LjQgMjQuOCAxMDQuMyA1LjIgMjAzLjRjLTM3IDE4NyAxMzEuNyAzMjYuNCAyNTguOCAzMDYuNyA0MS4yLTYuNCA2MS40LTU0LjYgNDIuNS05MS43LTIzLjEtNDUuNCA5LjktOTguNCA2MC45LTk4LjRoNzkuN2MzNS44IDAgNjQuOC0yOS42IDY0LjktNjUuM0M1MTEuNSA5Ny4xIDM2OC4xLTI2LjkgMjA0LjMgNXpNOTYgMzIwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMyIDMyIDE0LjMgMzIgMzItMTQuMyAzMi0zMiAzMnptMzItMTI4Yy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMyIDMyIDE0LjMgMzIgMzItMTQuMyAzMi0zMiAzMnptMTI4LTY0Yy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMyIDMyIDE0LjMgMzIgMzItMTQuMyAzMi0zMiAzMnptMTI4IDY0Yy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMyIDMyIDE0LjMgMzIgMzItMTQuMyAzMi0zMiAzMnpcIi8+JyxcbiAgICB9LFxuICAgIHJlc2V0OiB7XG4gICAgICB2aWV3Ym94OiAnMCAwIDUxMiA1MTInLFxuICAgICAgY29udGVudDogJzxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM3MC43MiAxMzMuMjhDMzM5LjQ1OCAxMDQuMDA4IDI5OC44ODggODcuOTYyIDI1NS44NDggODhjLTc3LjQ1OC4wNjgtMTQ0LjMyOCA1My4xNzgtMTYyLjc5MSAxMjYuODUtMS4zNDQgNS4zNjMtNi4xMjIgOS4xNS0xMS42NTEgOS4xNUgyNC4xMDNjLTcuNDk4IDAtMTMuMTk0LTYuODA3LTExLjgwNy0xNC4xNzZDMzMuOTMzIDk0LjkyNCAxMzQuODEzIDggMjU2IDhjNjYuNDQ4IDAgMTI2Ljc5MSAyNi4xMzYgMTcxLjMxNSA2OC42ODVMNDYzLjAzIDQwLjk3QzQ3OC4xNDkgMjUuODUxIDUwNCAzNi41NTkgNTA0IDU3Ljk0MVYxOTJjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0SDM0NS45NDFjLTIxLjM4MiAwLTMyLjA5LTI1Ljg1MS0xNi45NzEtNDAuOTcxbDQxLjc1LTQxLjc0OXpNMzIgMjk2aDEzNC4wNTljMjEuMzgyIDAgMzIuMDkgMjUuODUxIDE2Ljk3MSA0MC45NzFsLTQxLjc1IDQxLjc1YzMxLjI2MiAyOS4yNzMgNzEuODM1IDQ1LjMxOSAxMTQuODc2IDQ1LjI4IDc3LjQxOC0uMDcgMTQ0LjMxNS01My4xNDQgMTYyLjc4Ny0xMjYuODQ5IDEuMzQ0LTUuMzYzIDYuMTIyLTkuMTUgMTEuNjUxLTkuMTVoNTcuMzA0YzcuNDk4IDAgMTMuMTk0IDYuODA3IDExLjgwNyAxNC4xNzZDNDc4LjA2NyA0MTcuMDc2IDM3Ny4xODcgNTA0IDI1NiA1MDRjLTY2LjQ0OCAwLTEyNi43OTEtMjYuMTM2LTE3MS4zMTUtNjguNjg1TDQ4Ljk3IDQ3MS4wM0MzMy44NTEgNDg2LjE0OSA4IDQ3NS40NDEgOCA0NTQuMDU5VjMyMGMwLTEzLjI1NSAxMC43NDUtMjQgMjQtMjR6XCIgLz4nLFxuICAgIH0sXG4gICAgdHJhc2g6IHtcbiAgICAgIHZpZXdib3g6ICcwIDAgNDQ4IDUxMicsXG4gICAgICBjb250ZW50OiAnPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDMyIDMySDMxMmwtOS40LTE4LjdBMjQgMjQgMCAwIDAgMjgxLjEgMEgxNjYuOGEyMy43MiAyMy43MiAwIDAgMC0yMS40IDEzLjNMMTM2IDMySDE2QTE2IDE2IDAgMCAwIDAgNDh2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNDE2YTE2IDE2IDAgMCAwIDE2LTE2VjQ4YTE2IDE2IDAgMCAwLTE2LTE2ek01My4yIDQ2N2E0OCA0OCAwIDAgMCA0Ny45IDQ1aDI0NS44YTQ4IDQ4IDAgMCAwIDQ3LjktNDVMNDE2IDEyOEgzMnpcIiAvPicsXG4gICAgfSxcbiAgfSxcblxuICBjb252ZXJ0OiB0cnVlLFxuXG59ICk7XG5cbmNvbnN0IFNUQVRFID0ge1xuICBNZW51OiAwLFxuICBQbGF5aW5nOiAxLFxuICBDb21wbGV0ZTogMixcbiAgU3RhdHM6IDMsXG4gIFByZWZzOiA0LFxuICBUaGVtZTogNSxcbn07XG5cbmNvbnN0IEJVVFRPTlMgPSB7XG4gIE1lbnU6IFsgJ3N0YXRzJywgJ3ByZWZzJyBdLFxuICBQbGF5aW5nOiBbICdiYWNrJyBdLFxuICBDb21wbGV0ZTogW10sXG4gIFN0YXRzOiBbXSxcbiAgUHJlZnM6IFsgJ2JhY2snLCAndGhlbWUnIF0sXG4gIFRoZW1lOiBbICdiYWNrJywgJ3Jlc2V0JyBdLFxuICBOb25lOiBbXSxcbn07XG5cbmNvbnN0IFNIT1cgPSB0cnVlO1xuY29uc3QgSElERSA9IGZhbHNlO1xuXG5jbGFzcyBHYW1lIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuZG9tID0ge1xuICAgICAgdWk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcudWknICksXG4gICAgICBnYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnVpX19nYW1lJyApLFxuICAgICAgYmFjazogZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy51aV9fYmFja2dyb3VuZCcgKSxcbiAgICAgIHByZWZzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnVpX19wcmVmcycgKSxcbiAgICAgIHRoZW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnVpX190aGVtZScgKSxcbiAgICAgIHN0YXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnVpX19zdGF0cycgKSxcbiAgICAgIHRleHRzOiB7XG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnRleHQtLXRpdGxlJyApLFxuICAgICAgICBub3RlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnRleHQtLW5vdGUnICksXG4gICAgICAgIHRpbWVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnRleHQtLXRpbWVyJyApLFxuICAgICAgICBjb21wbGV0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy50ZXh0LS1jb21wbGV0ZScgKSxcbiAgICAgICAgYmVzdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy50ZXh0LS1iZXN0LXRpbWUnICksXG4gICAgICAgIHRoZW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnRleHQtLXRoZW1lJyApLFxuICAgICAgfSxcbiAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgcHJlZnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuYnRuLS1wcmVmcycgKSxcbiAgICAgICAgYmFjazogZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5idG4tLWJhY2snICksXG4gICAgICAgIHN0YXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmJ0bi0tc3RhdHMnICksXG4gICAgICAgIHJlc2V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmJ0bi0tcmVzZXQnICksXG4gICAgICAgIHRoZW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmJ0bi0tdGhlbWUnICksXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKCB0aGlzICk7XG4gICAgdGhpcy5jdWJlID0gbmV3IEN1YmUoIHRoaXMgKTtcbiAgICB0aGlzLmNvbnRyb2xzID0gbmV3IENvbnRyb2xzKCB0aGlzICk7XG4gICAgdGhpcy5zY3JhbWJsZXIgPSBuZXcgU2NyYW1ibGVyKCB0aGlzICk7XG4gICAgdGhpcy50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24oIHRoaXMgKTtcbiAgICB0aGlzLnRpbWVyID0gbmV3IFRpbWVyKCB0aGlzICk7XG4gICAgdGhpcy5wcmVmZXJlbmNlcyA9IG5ldyBQcmVmZXJlbmNlcyggdGhpcyApO1xuICAgIHRoaXMuc2NvcmVzID0gbmV3IFNjb3JlcyggdGhpcyApO1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCB0aGlzICk7XG4gICAgdGhpcy5jb25mZXR0aSA9IG5ldyBDb25mZXR0aSggdGhpcyApO1xuICAgIHRoaXMudGhlbWVzID0gbmV3IFRoZW1lcyggdGhpcyApO1xuICAgIHRoaXMudGhlbWVFZGl0b3IgPSBuZXcgVGhlbWVFZGl0b3IoIHRoaXMgKTtcblxuICAgIHRoaXMuaW5pdEFjdGlvbnMoKTtcblxuICAgIHRoaXMuc3RhdGUgPSBTVEFURS5NZW51O1xuICAgIHRoaXMubmV3R2FtZSA9IGZhbHNlO1xuICAgIHRoaXMuc2F2ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc3RvcmFnZS5pbml0KCk7XG4gICAgdGhpcy5wcmVmZXJlbmNlcy5pbml0KCk7XG4gICAgdGhpcy5jdWJlLmluaXQoKTtcbiAgICB0aGlzLnRyYW5zaXRpb24uaW5pdCgpO1xuXG4gICAgdGhpcy5zdG9yYWdlLmxvYWRHYW1lKCk7XG4gICAgdGhpcy5zY29yZXMuY2FsY1N0YXRzKCk7XG5cbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG5cbiAgICAgIHRoaXMudHJhbnNpdGlvbi5mbG9hdCgpO1xuICAgICAgdGhpcy50cmFuc2l0aW9uLmN1YmUoIFNIT1cgKTtcblxuICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy50cmFuc2l0aW9uLnRpdGxlKCBTSE9XICksIDcwMCApO1xuICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy50cmFuc2l0aW9uLmJ1dHRvbnMoIEJVVFRPTlMuTWVudSwgQlVUVE9OUy5Ob25lICksIDEwMDAgKTtcblxuICAgIH0sIDUwMCApO1xuXG4gIH1cblxuICBpbml0QWN0aW9ucygpIHtcblxuICAgIGxldCB0YXBwZWRUd2ljZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5kb20uZ2FtZS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiB7XG5cbiAgICAgIGlmICggdGhpcy50cmFuc2l0aW9uLmFjdGl2ZVRyYW5zaXRpb25zID4gMCApIHJldHVybjtcbiAgICAgIGlmICggdGhpcy5zdGF0ZSA9PT0gU1RBVEUuUGxheWluZyApIHJldHVybjtcblxuICAgICAgaWYgKCB0aGlzLnN0YXRlID09PSBTVEFURS5NZW51ICkge1xuXG4gICAgICAgIGlmICggISB0YXBwZWRUd2ljZSApIHtcblxuICAgICAgICAgIHRhcHBlZFR3aWNlID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0YXBwZWRUd2ljZSA9IGZhbHNlLCAzMDAgKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZSggU0hPVyApO1xuXG4gICAgICB9IGVsc2UgaWYgKCB0aGlzLnN0YXRlID09PSBTVEFURS5Db21wbGV0ZSApIHtcblxuICAgICAgICB0aGlzLmNvbXBsZXRlKCBISURFICk7XG5cbiAgICAgIH0gZWxzZSBpZiAoIHRoaXMuc3RhdGUgPT09IFNUQVRFLlN0YXRzICkge1xuXG4gICAgICAgIHRoaXMuc3RhdHMoIEhJREUgKTtcblxuICAgICAgfSBcblxuICAgIH0sIGZhbHNlICk7XG5cbiAgICB0aGlzLmNvbnRyb2xzLm9uTW92ZSA9ICgpID0+IHtcblxuICAgICAgaWYgKCB0aGlzLm5ld0dhbWUgKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0KCB0cnVlICk7XG4gICAgICAgIHRoaXMubmV3R2FtZSA9IGZhbHNlO1xuXG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy5kb20uYnV0dG9ucy5iYWNrLm9uY2xpY2sgPSBldmVudCA9PiB7XG5cbiAgICAgIGlmICggdGhpcy50cmFuc2l0aW9uLmFjdGl2ZVRyYW5zaXRpb25zID4gMCApIHJldHVybjtcblxuICAgICAgaWYgKCB0aGlzLnN0YXRlID09PSBTVEFURS5QbGF5aW5nICkge1xuXG4gICAgICAgIHRoaXMuZ2FtZSggSElERSApO1xuXG4gICAgICB9IGVsc2UgaWYgKCB0aGlzLnN0YXRlID09PSBTVEFURS5QcmVmcyApIHtcblxuICAgICAgICB0aGlzLnByZWZzKCBISURFICk7XG5cbiAgICAgIH0gZWxzZSBpZiAoIHRoaXMuc3RhdGUgPT09IFNUQVRFLlRoZW1lICkge1xuXG4gICAgICAgIHRoaXMudGhlbWUoIEhJREUgKTtcblxuICAgICAgfVxuXG4gICAgfTtcblxuICAgIHRoaXMuZG9tLmJ1dHRvbnMucmVzZXQub25jbGljayA9IGV2ZW50ID0+IHtcblxuICAgICAgaWYgKCB0aGlzLnN0YXRlID09PSBTVEFURS5UaGVtZSApIHtcblxuICAgICAgICB0aGlzLnRoZW1lRWRpdG9yLnJlc2V0VGhlbWUoKTtcblxuICAgICAgfVxuICAgICAgXG4gICAgfTtcblxuICAgIHRoaXMuZG9tLmJ1dHRvbnMucHJlZnMub25jbGljayA9IGV2ZW50ID0+IHRoaXMucHJlZnMoIFNIT1cgKTtcblxuICAgIHRoaXMuZG9tLmJ1dHRvbnMudGhlbWUub25jbGljayA9IGV2ZW50ID0+IHRoaXMudGhlbWUoIFNIT1cgKTtcblxuICAgIHRoaXMuZG9tLmJ1dHRvbnMuc3RhdHMub25jbGljayA9IGV2ZW50ID0+IHRoaXMuc3RhdHMoIFNIT1cgKTtcblxuICAgIHRoaXMuY29udHJvbHMub25Tb2x2ZWQgPSAoKSA9PiB0aGlzLmNvbXBsZXRlKCBTSE9XICk7XG5cbiAgfVxuXG4gIGdhbWUoIHNob3cgKSB7XG5cbiAgICBpZiAoIHNob3cgKSB7XG5cbiAgICAgIGlmICggISB0aGlzLnNhdmVkICkge1xuXG4gICAgICAgIHRoaXMuc2NyYW1ibGVyLnNjcmFtYmxlKCk7XG4gICAgICAgIHRoaXMuY29udHJvbHMuc2NyYW1ibGVDdWJlKCk7XG4gICAgICAgIHRoaXMubmV3R2FtZSA9IHRydWU7XG5cbiAgICAgIH1cblxuICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnNhdmVkID8gMCA6XG4gICAgICAgIHRoaXMuc2NyYW1ibGVyLmNvbnZlcnRlZC5sZW5ndGggKiAoIHRoaXMuY29udHJvbHMuZmxpcFNwZWVkc1swXSArIDEwICk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5QbGF5aW5nO1xuICAgICAgdGhpcy5zYXZlZCA9IHRydWU7XG5cbiAgICAgIHRoaXMudHJhbnNpdGlvbi5idXR0b25zKCBCVVRUT05TLk5vbmUsIEJVVFRPTlMuTWVudSApO1xuXG4gICAgICB0aGlzLnRyYW5zaXRpb24uem9vbSggU1RBVEUuUGxheWluZywgZHVyYXRpb24gKTtcbiAgICAgIHRoaXMudHJhbnNpdGlvbi50aXRsZSggSElERSApO1xuXG4gICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uLnRpbWVyKCBTSE9XICk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbi5idXR0b25zKCBCVVRUT05TLlBsYXlpbmcsIEJVVFRPTlMuTm9uZSApO1xuXG4gICAgICB9LCB0aGlzLnRyYW5zaXRpb24uZHVyYXRpb25zLnpvb20gLSAxMDAwICk7XG5cbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcblxuICAgICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZSgpO1xuICAgICAgICBpZiAoICEgdGhpcy5uZXdHYW1lICkgdGhpcy50aW1lci5zdGFydCggdHJ1ZSApO1xuXG4gICAgICB9LCB0aGlzLnRyYW5zaXRpb24uZHVyYXRpb25zLnpvb20gKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5NZW51O1xuXG4gICAgICB0aGlzLnRyYW5zaXRpb24uYnV0dG9ucyggQlVUVE9OUy5NZW51LCBCVVRUT05TLlBsYXlpbmcgKTtcblxuICAgICAgdGhpcy50cmFuc2l0aW9uLnpvb20oIFNUQVRFLk1lbnUsIDAgKTtcblxuICAgICAgdGhpcy5jb250cm9scy5kaXNhYmxlKCk7XG4gICAgICBpZiAoICEgdGhpcy5uZXdHYW1lICkgdGhpcy50aW1lci5zdG9wKCk7XG4gICAgICB0aGlzLnRyYW5zaXRpb24udGltZXIoIEhJREUgKTtcblxuICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy50cmFuc2l0aW9uLnRpdGxlKCBTSE9XICksIHRoaXMudHJhbnNpdGlvbi5kdXJhdGlvbnMuem9vbSAtIDEwMDAgKTtcblxuICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbnRyb2xzLmRpc2FibGUoKTtcblxuICAgIH1cblxuICB9XG5cbiAgcHJlZnMoIHNob3cgKSB7XG5cbiAgICBpZiAoIHNob3cgKSB7XG5cbiAgICAgIGlmICggdGhpcy50cmFuc2l0aW9uLmFjdGl2ZVRyYW5zaXRpb25zID4gMCApIHJldHVybjtcblxuICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLlByZWZzO1xuXG4gICAgICB0aGlzLnRyYW5zaXRpb24uYnV0dG9ucyggQlVUVE9OUy5QcmVmcywgQlVUVE9OUy5NZW51ICk7XG5cbiAgICAgIHRoaXMudHJhbnNpdGlvbi50aXRsZSggSElERSApO1xuICAgICAgdGhpcy50cmFuc2l0aW9uLmN1YmUoIEhJREUgKTtcblxuICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy50cmFuc2l0aW9uLnByZWZlcmVuY2VzKCBTSE9XICksIDEwMDAgKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuY3ViZS5yZXNpemUoKTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLk1lbnU7XG5cbiAgICAgIHRoaXMudHJhbnNpdGlvbi5idXR0b25zKCBCVVRUT05TLk1lbnUsIEJVVFRPTlMuUHJlZnMgKTtcblxuICAgICAgdGhpcy50cmFuc2l0aW9uLnByZWZlcmVuY2VzKCBISURFICk7XG5cbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMudHJhbnNpdGlvbi5jdWJlKCBTSE9XICksIDUwMCApO1xuICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy50cmFuc2l0aW9uLnRpdGxlKCBTSE9XICksIDEyMDAgKTtcblxuICAgIH1cblxuICB9XG5cbiAgdGhlbWUoIHNob3cgKSB7XG5cbiAgICB0aGlzLnRoZW1lRWRpdG9yLmNvbG9yUGlja2VyKCBzaG93ICk7XG4gICAgXG4gICAgaWYgKCBzaG93ICkge1xuXG4gICAgICBpZiAoIHRoaXMudHJhbnNpdGlvbi5hY3RpdmVUcmFuc2l0aW9ucyA+IDAgKSByZXR1cm47XG5cbiAgICAgIHRoaXMuY3ViZS5sb2FkRnJvbURhdGEoIFN0YXRlc1sgJzMnIF1bICdjaGVja2VyYm9hcmQnIF0gKTtcblxuICAgICAgdGhpcy50aGVtZUVkaXRvci5zZXRIU0woIG51bGwsIGZhbHNlICk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5UaGVtZTtcblxuICAgICAgdGhpcy50cmFuc2l0aW9uLmJ1dHRvbnMoIEJVVFRPTlMuVGhlbWUsIEJVVFRPTlMuUHJlZnMgKTtcblxuICAgICAgdGhpcy50cmFuc2l0aW9uLnByZWZlcmVuY2VzKCBISURFICk7XG5cbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMudHJhbnNpdGlvbi5jdWJlKCBTSE9XLCB0cnVlICksIDUwMCApO1xuICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy50cmFuc2l0aW9uLnRoZW1pbmcoIFNIT1cgKSwgMTAwMCApO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFLlByZWZzO1xuXG4gICAgICB0aGlzLnRyYW5zaXRpb24uYnV0dG9ucyggQlVUVE9OUy5QcmVmcywgQlVUVE9OUy5UaGVtZSApO1xuXG4gICAgICB0aGlzLnRyYW5zaXRpb24uY3ViZSggSElERSwgdHJ1ZSApO1xuICAgICAgdGhpcy50cmFuc2l0aW9uLnRoZW1pbmcoIEhJREUgKTtcblxuICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy50cmFuc2l0aW9uLnByZWZlcmVuY2VzKCBTSE9XICksIDEwMDAgKTtcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcblxuICAgICAgICBjb25zdCBnYW1lQ3ViZURhdGEgPSBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggJ3RoZUN1YmVfc2F2ZWRTdGF0ZScgKSApO1xuXG4gICAgICAgIGlmICggIWdhbWVDdWJlRGF0YSApIHtcblxuICAgICAgICAgIHRoaXMuY3ViZS5yZXNpemUoIHRydWUgKTtcbiAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3ViZS5sb2FkRnJvbURhdGEoIGdhbWVDdWJlRGF0YSApO1xuXG4gICAgICB9LCAxNTAwICk7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHN0YXRzKCBzaG93ICkge1xuXG4gICAgaWYgKCBzaG93ICkge1xuXG4gICAgICBpZiAoIHRoaXMudHJhbnNpdGlvbi5hY3RpdmVUcmFuc2l0aW9ucyA+IDAgKSByZXR1cm47XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5TdGF0cztcblxuICAgICAgdGhpcy50cmFuc2l0aW9uLmJ1dHRvbnMoIEJVVFRPTlMuU3RhdHMsIEJVVFRPTlMuTWVudSApO1xuXG4gICAgICB0aGlzLnRyYW5zaXRpb24udGl0bGUoIEhJREUgKTtcbiAgICAgIHRoaXMudHJhbnNpdGlvbi5jdWJlKCBISURFICk7XG5cbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMudHJhbnNpdGlvbi5zdGF0cyggU0hPVyApLCAxMDAwICk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLnN0YXRlID0gU1RBVEUuTWVudTtcblxuICAgICAgdGhpcy50cmFuc2l0aW9uLmJ1dHRvbnMoIEJVVFRPTlMuTWVudSwgQlVUVE9OUy5Ob25lICk7XG5cbiAgICAgIHRoaXMudHJhbnNpdGlvbi5zdGF0cyggSElERSApO1xuXG4gICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLnRyYW5zaXRpb24uY3ViZSggU0hPVyApLCA1MDAgKTtcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMudHJhbnNpdGlvbi50aXRsZSggU0hPVyApLCAxMjAwICk7XG5cbiAgICB9XG5cbiAgfVxuXG4gIGNvbXBsZXRlKCBzaG93ICkge1xuXG4gICAgaWYgKCBzaG93ICkge1xuXG4gICAgICB0aGlzLnRyYW5zaXRpb24uYnV0dG9ucyggQlVUVE9OUy5Db21wbGV0ZSwgQlVUVE9OUy5QbGF5aW5nICk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5Db21wbGV0ZTtcbiAgICAgIHRoaXMuc2F2ZWQgPSBmYWxzZTtcblxuICAgICAgdGhpcy5jb250cm9scy5kaXNhYmxlKCk7XG4gICAgICB0aGlzLnRpbWVyLnN0b3AoKTtcbiAgICAgIHRoaXMuc3RvcmFnZS5jbGVhckdhbWUoKTtcblxuICAgICAgdGhpcy5iZXN0VGltZSA9IHRoaXMuc2NvcmVzLmFkZFNjb3JlKCB0aGlzLnRpbWVyLmRlbHRhVGltZSApO1xuXG4gICAgICB0aGlzLnRyYW5zaXRpb24uem9vbSggU1RBVEUuTWVudSwgMCApO1xuICAgICAgdGhpcy50cmFuc2l0aW9uLmVsZXZhdGUoIFNIT1cgKTtcblxuICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbi5jb21wbGV0ZSggU0hPVywgdGhpcy5iZXN0VGltZSApO1xuICAgICAgICB0aGlzLmNvbmZldHRpLnN0YXJ0KCk7XG5cbiAgICAgIH0sIDEwMDAgKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBTVEFURS5TdGF0cztcbiAgICAgIHRoaXMuc2F2ZWQgPSBmYWxzZTtcblxuICAgICAgdGhpcy50cmFuc2l0aW9uLnRpbWVyKCBISURFICk7XG4gICAgICB0aGlzLnRyYW5zaXRpb24uY29tcGxldGUoIEhJREUsIHRoaXMuYmVzdFRpbWUgKTtcbiAgICAgIHRoaXMudHJhbnNpdGlvbi5jdWJlKCBISURFICk7XG4gICAgICB0aGlzLnRpbWVyLnJlc2V0KCk7XG5cbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcblxuICAgICAgICB0aGlzLmN1YmUucmVzZXQoKTtcbiAgICAgICAgdGhpcy5jb25mZXR0aS5zdG9wKCk7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uLnN0YXRzKCBTSE9XICk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbi5lbGV2YXRlKCAwICk7XG5cbiAgICAgIH0sIDEwMDAgKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNsb3NlQnRuIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInpJbmRleCIsImN1cnNvciIsIm9uQ2xpY2siLCJvbkNsb3NlIiwiR2FtZSIsIk1hZ2ljQ3ViZSIsInN0YXRlIiwiZnVsbHNjcmVlbiIsInNob3ciLCJ1aVJlZiIsImNyZWF0ZVJlZiIsImJveFJlZiIsImluaXRpYWxpemVDdWJlIiwiUmFuZ2VIVE1MIiwiam9pbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInRlbXAiLCJpbm5lckhUTUwiLCJyYW5nZSIsInF1ZXJ5U2VsZWN0b3IiLCJyYW5nZUxhYmVsIiwicmFuZ2VMaXN0Iiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiaGFzQXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwic3BsaXQiLCJsaXN0SXRlbVRleHQiLCJsaXN0SXRlbSIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsIndpbmRvdyIsInZlcnNpb24iLCJnYW1lIiwiaGFuZGxlRG91YmxlQ2xpY2siLCJlIiwic2V0U3RhdGUiLCJjdXJyZW50Iiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJ3b3JsZCIsInJlc2l6ZSIsInNjcm9sbFRvIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib3ZlcmZsb3ciLCJoYW5kbGVDbG9zZUV2ZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJyZWYiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsIm9uRG91YmxlQ2xpY2tDYXB0dXJlIiwidGV4dFRyYW5zZm9ybSIsInRyb3BoeSIsIm5hbWUiLCJ0aXRsZSIsImxpc3QiLCJjb2xvciIsInNldHRpbmdzIiwiYmFjayIsInRoZW1lIiwicmVzZXQiLCJTdWIiLCJmaWxsQ29sb3IiLCJGcmFnbWVudCIsInZpZXdCb3giLCJkIiwiZmlsbCIsIkFwcENvbnRleHQiLCJsYXp5QWN0IiwiY2hlY2tJc0luVmlld3BvcnQiLCJsb2FkRm9udCIsImNvbm5lY3QiLCJzZXRDbGllbnRXaWR0aCIsInNldENsaWVudEhlaWdodCIsInNldFNjcm9sbFkiLCJzZXRJc0FwcE9wZW4iLCJMYW5kaW5nIiwiQnJhbmRpbmciLCJQcm9kdWN0cyIsIkNvbnRlbnRzIiwiRGV2ZWxvcG1lbnQiLCJQcm9ncmVzcyIsIlByZWxvYWQiLCJSZWRpcmVjdExvYWRpbmciLCJMb2FkZXJMb2dvIiwiSGVhZGVyTWVudXMiLCJGb290ZXIiLCJHb29nbGVDb25zZW50IiwiSG92ZXJDdXJzb3JCb3giLCJBcHAiLCJvcGVuQ29udGVudCIsInNob3dIZWFkZXIiLCJjbG9ja1JlZiIsImhhbmRsZVNjcm9sbEJlaGF2aW9yIiwic3RhdHVzIiwiY29udGFpbnMiLCJyZW1vdmUiLCJzY3JvbGxIYW5kbGVyIiwic2Nyb2xsVG9wIiwic2Nyb2xsWSIsImlubmVySGVpZ2h0IiwicmVzaXplSGFuZGxlciIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZGNfd2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJkY19oZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0T3BlbkNvbnRlbnQiLCJ0aGVuIiwiYm9keSIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJlcnJvckluZm8iLCJjb25zb2xlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFnZWxvYWRpbmciLCJQcm92aWRlciIsInZhbHVlIiwiaGlkZSIsImFjdGl2ZXBhZ2UiLCJvbk9wZW4iLCJ2IiwibWFwU3RhdGVUb1Byb3BzIiwiaXNQQyIsImNsaWVudFNsaWNlIiwiaXNBcHBPcGVuIiwiYmFzZVNsaWNlIiwic2Nyb2xsU2xpY2UiLCJyZWRpcmVjdGxvYWRpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJTdWJJY29uIiwiSW1hZ2UiLCJnZXRSZWxXaWR0aCIsImJveFdpZHRoIiwiZGlzcGF0Y2giLCJEaWZmTGV0dGVyc1Nob3ciLCJsZXR0ZXJzIiwicmF0aW8iLCJhc3BlY3RSYXRpbyIsIkNvbnRlbnRCb3giLCJObyIsImxhYmVsIiwidGFncyIsIkNvbnRlbnRCb3hUYWciLCJtYXAiLCJ0YWciLCJpbmRleCIsImtleSIsImJhY2tncm91bmRJbWFnZSIsIml0ZW0iLCJjcmVhdGVSb290Iiwic3RvcmUiLCJhcHAiLCJnZXRFbGVtZW50QnlJZCIsImFuaW1hdGlvbkVuZ2luZSIsInVuaXF1ZUlEIiwiQW5pbWF0aW9uRW5naW5lIiwiaWRzIiwiYW5pbWF0aW9ucyIsInVwZGF0ZSIsImJpbmQiLCJyYWYiLCJ0aW1lIiwibm93IiwicGVyZm9ybWFuY2UiLCJkZWx0YSIsImkiLCJsZW5ndGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRpb24iLCJpZCIsInB1c2giLCJpbmRleE9mIiwic3BsaWNlIiwiQW5pbWF0aW9uIiwic3RhcnQiLCJzdG9wIiwiV29ybGQiLCJjb250YWluZXIiLCJkb20iLCJzY2VuZSIsIlRIUkVFIiwiU2NlbmUiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwiZG9tRWxlbWVudCIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwic3RhZ2UiLCJmb3YiLCJjcmVhdGVMaWdodHMiLCJvblJlc2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwic2V0U2l6ZSIsImFzcGVjdCIsImZvdlJhZCIsIk1hdGgiLCJERUcyUkFEIiwiZGlzdGFuY2UiLCJ0YW4iLCJzZXQiLCJsb29rQXQiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiZG9jRm9udFNpemUiLCJmb250U2l6ZSIsImNiIiwibGlnaHRzIiwiaG9sZGVyIiwiT2JqZWN0M0QiLCJhbWJpZW50IiwiQW1iaWVudExpZ2h0IiwiZnJvbnQiLCJEaXJlY3Rpb25hbExpZ2h0IiwiUm91bmRlZEJveEdlb21ldHJ5Iiwic2l6ZSIsInJhZGl1cyIsInJhZGl1c1NlZ21lbnRzIiwiQnVmZmVyR2VvbWV0cnkiLCJjYWxsIiwidHlwZSIsImlzTmFOIiwibWF4IiwiZmxvb3IiLCJkZXB0aCIsIm1pbiIsImVkZ2VIYWxmV2lkdGgiLCJlZGdlSGFsZkhlaWdodCIsImVkZ2VIYWxmRGVwdGgiLCJwYXJhbWV0ZXJzIiwicnMxIiwidG90YWxWZXJ0ZXhDb3VudCIsInBvc2l0aW9ucyIsIkJ1ZmZlckF0dHJpYnV0ZSIsIkZsb2F0MzJBcnJheSIsIm5vcm1hbHMiLCJjb3JuZXJWZXJ0cyIsImNvcm5lck5vcm1hbHMiLCJub3JtYWwiLCJWZWN0b3IzIiwidmVydGV4IiwidmVydGV4UG9vbCIsIm5vcm1hbFBvb2wiLCJpbmRpY2VzIiwibGFzdFZlcnRleCIsImNvcm5lclZlcnROdW1iZXIiLCJkb1ZlcnRpY2VzIiwiZG9GYWNlcyIsImRvQ29ybmVycyIsImRvSGVpZ2h0RWRnZXMiLCJkb1dpZHRoRWRnZXMiLCJkb0RlcHRoRWRnZXMiLCJjb3JuZXJMYXlvdXQiLCJqIiwiUEloYWxmIiwiUEkiLCJjb3JuZXJPZmZzZXQiLCJ5IiwidmEiLCJjb3NWYSIsImNvcyIsInNpblZhIiwic2luIiwidmVydCIsImNsb25lIiwibXVsdGlwbHlTY2FsYXIiLCJub3JtIiwieCIsInUiLCJoYSIsInoiLCJub3JtYWxpemUiLCJtdWx0aXBseSIsImZsaXBzIiwibGFzdFJvd09mZnNldCIsInIxIiwicjIiLCJ1MSIsImEiLCJiIiwiYyIsImNPZmZzZXQiLCJjUm93T2Zmc2V0IiwibmVlZHNGbGlwIiwiY1N0YXJ0cyIsImNFbmRzIiwiY1N0YXJ0IiwiY0VuZCIsInVyczEiLCJ1MXJzMSIsImVuZCIsInNldFhZWiIsInNldEluZGV4IiwiVWludDE2QXJyYXkiLCJhZGRBdHRyaWJ1dGUiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJSb3VuZGVkUGxhbmVHZW9tZXRyeSIsInNoYXBlIiwiU2hhcGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiZ2VvbWV0cnkiLCJFeHRydWRlQnVmZmVyR2VvbWV0cnkiLCJiZXZlbEVuYWJsZWQiLCJjdXJ2ZVNlZ21lbnRzIiwiQ3ViZSIsInBpZWNlQ29ybmVyUmFkaXVzIiwiZWRnZUNvcm5lclJvdW5kbmVzcyIsImVkZ2VTY2FsZSIsImVkZ2VEZXB0aCIsIm9iamVjdCIsImFuaW1hdG9yIiwiaW5pdCIsImN1YmVzIiwiY2hpbGRyZW4iLCJjb250cm9scyIsImdyb3VwIiwic2NhbGUiLCJjb250cm9sc1NjYWxlIiwiZWRnZXMiLCJnZW5lcmF0ZVBvc2l0aW9ucyIsImdlbmVyYXRlTW9kZWwiLCJwaWVjZXMiLCJwaWVjZSIsInVzZXJEYXRhIiwiY3ViZSIsInRyYXZlcnNlIiwibm9kZSIsImZydXN0dW1DdWxsZWQiLCJ1cGRhdGVDb2xvcnMiLCJ0aGVtZXMiLCJnZXRDb2xvcnMiLCJzaXplR2VuZXJhdGVkIiwiZm9yY2UiLCJwcmVmZXJlbmNlcyIsInJhbmdlcyIsInNhdmVkIiwidGltZXIiLCJzdG9yYWdlIiwiY2xlYXJHYW1lIiwicm90YXRpb24iLCJtIiwiZmlyc3QiLCJwaWVjZVNpemUiLCJtYWluTWF0ZXJpYWwiLCJNZXNoTGFtYmVydE1hdGVyaWFsIiwicGllY2VNZXNoIiwiTWVzaCIsImVkZ2VHZW9tZXRyeSIsInBpZWNlQ3ViZSIsInBpZWNlRWRnZXMiLCJjb3B5IiwiZGl2aWRlU2NhbGFyIiwiZWRnZXNOYW1lIiwiZWRnZSIsImNvbG9ycyIsIm1hdGVyaWFsIiwic2V0SGV4IiwiUCIsImxvYWRGcm9tRGF0YSIsImRhdGEiLCJuYW1lcyIsInJvdGF0aW9ucyIsIkVhc2luZyIsIlBvd2VyIiwiSW4iLCJwb3dlciIsInJvdW5kIiwidCIsInBvdyIsIk91dCIsImFicyIsIkluT3V0IiwiU2luZSIsIkJhY2siLCJzIiwiRWxhc3RpYyIsImFtcGxpdHVkZSIsInBlcmlvZCIsIlBJMiIsInAxIiwicDIiLCJwMyIsImFzaW4iLCJUd2VlbiIsIm9wdGlvbnMiLCJkdXJhdGlvbiIsImVhc2luZyIsIm9uVXBkYXRlIiwib25Db21wbGV0ZSIsImRlbGF5IiwieW95byIsInByb2dyZXNzIiwiZ2V0RnJvbVRvIiwib2xkIiwiZGlyZWN0aW9uIiwidmFsdWVzIiwidXBkYXRlRnJvbVRvIiwidXBkYXRlWW95byIsInRhcmdldCIsImZyb20iLCJ0byIsImtleXMiLCJEcmFnZ2FibGUiLCJlbGVtZW50IiwiVmVjdG9yMiIsImRyYWciLCJhc3NpZ24iLCJjYWxjRGVsdGEiLCJ0b3VjaCIsImV2ZW50Iiwid2hpY2giLCJ0b3VjaGVzIiwiZ2V0UG9zaXRpb25DdXJyZW50Iiwib25EcmFnU3RhcnQiLCJtb3ZlIiwic3ViIiwib25EcmFnTW92ZSIsIm9uRHJhZ0VuZCIsImVuYWJsZSIsImRpc2FibGUiLCJkcmFnRXZlbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJjb252ZXJ0UG9zaXRpb24iLCJTVElMTCIsIlBSRVBBUklORyIsIlJPVEFUSU5HIiwiQU5JTUFUSU5HIiwiQ29udHJvbHMiLCJmbGlwQ29uZmlnIiwiZmxpcEVhc2luZ3MiLCJmbGlwU3BlZWRzIiwicmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwiaGVscGVyTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImRlcHRoV3JpdGUiLCJ0cmFuc3BhcmVudCIsImhlbHBlciIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJCb3hCdWZmZXJHZW9tZXRyeSIsIm9uU29sdmVkIiwib25Nb3ZlIiwibW9tZW50dW0iLCJzY3JhbWJsZSIsImVuYWJsZWQiLCJpbml0RHJhZ2dhYmxlIiwiZHJhZ2dhYmxlIiwiZ2V0dGluZ0RyYWciLCJlZGdlSW50ZXJzZWN0IiwiZ2V0SW50ZXJzZWN0IiwiZHJhZ0ludGVyc2VjdCIsImRyYWdOb3JtYWwiLCJmYWNlIiwiZmxpcFR5cGUiLCJhdHRhY2giLCJ0cmFuc2xhdGVaIiwidXBkYXRlTWF0cml4V29ybGQiLCJkZXRhY2giLCJwbGFuZUludGVyc2VjdCIsImRyYWdDdXJyZW50Iiwid29ybGRUb0xvY2FsIiwicG9pbnQiLCJkcmFnVG90YWwiLCJkcmFnRGVsdGEiLCJzZXRaIiwiYWRkTW9tZW50dW1Qb2ludCIsImRyYWdEaXJlY3Rpb24iLCJnZXRNYWluQXhpcyIsIndvcmxkRGlyZWN0aW9uIiwibG9jYWxUb1dvcmxkIiwib2JqZWN0RGlyZWN0aW9uIiwiZmxpcEF4aXMiLCJjcm9zcyIsIm5lZ2F0ZSIsInNlbGVjdExheWVyIiwiZ2V0TGF5ZXIiLCJheGlzIiwiZmxpcEFuZ2xlIiwicm90YXRlT25BeGlzIiwicm90YXRlT25Xb3JsZEF4aXMiLCJnZXRNb21lbnR1bSIsImZsaXAiLCJhbmdsZSIsInJvdW5kQW5nbGUiLCJzaWduIiwicm90YXRlTGF5ZXIiLCJsYXllciIsInNhdmVHYW1lIiwiY2hlY2tJc1NvbHZlZCIsInJvdGF0ZUN1YmUiLCJjYWxsYmFjayIsImNvbmZpZyIsImJvdW5jZSIsImJvdW5jZUN1YmUiLCJyb3RhdGlvblR3ZWVuIiwidHdlZW4iLCJkZWx0YUFuZ2xlIiwiZmxpcExheWVyIiwic2xpY2UiLCJzZXRGcm9tVmVjdG9yMyIsInNuYXBSb3RhdGlvbiIsInRvVmVjdG9yMyIsImRlc2VsZWN0TGF5ZXIiLCJmaXhEZWx0YSIsIm1vdmVQaWVjZXMiLCJhcHBseU1hdHJpeCIsIm1hdHJpeFdvcmxkIiwiTWF0cml4NCIsImdldEludmVyc2UiLCJzY2FsYXIiLCJwYXJlbnQiLCJwaWVjZVBvc2l0aW9uIiwia2V5Ym9hcmRNb3ZlIiwic2NyYW1ibGVDdWJlIiwic2NyYW1ibGVyIiwiY29udmVydGVkIiwic2hpZnQiLCJtdWx0aXBsZSIsInNldEZyb21DYW1lcmEiLCJpbnRlcnNlY3QiLCJpbnRlcnNlY3RPYmplY3RzIiwiaW50ZXJzZWN0T2JqZWN0IiwidmVjdG9yIiwicmVkdWNlIiwiY2hpbGQiLCJEYXRlIiwiZmlsdGVyIiwibW9tZW50IiwicG9pbnRzIiwic29sdmVkIiwic2lkZXMiLCJtYWluQXhpcyIsIm1haW5TaWduIiwic2lkZSIsImV2ZXJ5IiwiU2NyYW1ibGVyIiwiZGlmaWN1bHR5Iiwic2NyYW1ibGVMZW5ndGgiLCJtb3ZlcyIsImNvbnZldGVkIiwicHJpbmciLCJjb3VudCIsImZhY2VzIiwibW9kaWZpZXJzIiwidG90YWwiLCJyYW5kb20iLCJjaGFyQXQiLCJjb252ZXJ0IiwicHJpbnQiLCJjb252ZXJ0ZWRNb3ZlIiwiY29udmVydE1vdmUiLCJtb2RpZmllciIsIkQiLCJVIiwiTCIsIlIiLCJGIiwiQiIsInRvVXBwZXJDYXNlIiwicm93IiwidG9Mb3dlckNhc2UiLCJUcmFuc2l0aW9uIiwidHdlZW5zIiwiZHVyYXRpb25zIiwiY3ViZVkiLCJjYW1lcmFab29tIiwiYWN0aXZlVHJhbnNpdGlvbnMiLCJ6b29tIiwiYnV0dG9ucyIsImJlc3QiLCJjb21wbGV0ZSIsInByZWZzIiwic3RhdHMiLCJidXR0b25Ud2VlbiIsImJ1dHRvbiIsInRyYW5zbGF0ZSIsInRyYW5zZm9ybSIsInBvaW50ZXJFdmVudHMiLCJ0aGVtaW5nIiwiY3VycmVudFkiLCJjdXJyZW50Um90YXRpb24iLCJmbG9hdCIsInBsYXkiLCJyb3RhdGUiLCJlbGV2YXRlIiwidGV4dCIsInRleHRzIiwic3BhbiIsInNwbGl0TGV0dGVycyIsImZsaXBMZXR0ZXJzIiwic2NvcmVzIiwiY2FsY1N0YXRzIiwidHdlZW5JZCIsInN0YXQiLCJsaXN0TWF4IiwicmFuZ2VJbmRleCIsInRyYWNrIiwiaGFuZGxlIiwibGFiZWxJbmRleCIsIm5vdGUiLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNldFRleHQiLCJsZXR0ZXIiLCJUaW1lciIsImNvbnRpbnVlR2FtZSIsInN0YXJ0VGltZSIsImRlbHRhVGltZSIsImN1cnJlbnRUaW1lIiwibWlsbGlzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNlY29uZHMiLCJwYXJzZUludCIsIm1pbnV0ZXMiLCJSYW5nZSIsInN0ZXAiLCJzZXRWYWx1ZSIsImxpbWl0VmFsdWUiLCJzZXRIYW5kbGVQb3NpdGlvbiIsInBvc2l0aW9uRnJvbVZhbHVlIiwibGltaXRQb3NpdGlvbiIsInZhbHVlRnJvbVBvc2l0aW9uIiwicGVyY2VudHNGcm9tVmFsdWUiLCJQcmVmZXJlbmNlcyIsInNhdmVQcmVmZXJlbmNlcyIsImVybm8iLCJkdXN0IiwiY2FtbyIsInJhaW4iLCJzZXRUaGVtZSIsImh1ZSIsInRoZW1lRWRpdG9yIiwidXBkYXRlSFNMIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsIkNvbmZldHRpIiwic3RhcnRlZCIsInNwZWVkIiwicmV2b2x1dGlvbiIsIlBsYW5lR2VvbWV0cnkiLCJEb3VibGVTaWRlIiwiaG9sZGVycyIsIkNvbmZldHRpU3RhZ2UiLCJkaXN0YW5jZUZyb21DdWJlIiwicGFydGljbGVzIiwicmVzaXplVmlld3BvcnQiLCJQYXJ0aWNsZSIsInBsYXlpbmciLCJjb21wbGV0ZWQiLCJ0cmFuc2l0aW9uIiwiY29uZmV0dGkiLCJ2ZWxvY2l0eSIsIm1lc2giLCJyYW5kRmxvYXQiLCJyYW5kb21IZWlnaHQiLCJDb2xvciIsInJldm9sdXRpb25TcGVlZCIsInJldm9sdXRpb25BeGlzIiwiU2NvcmVzIiwic29sdmVzIiwid29yc3QiLCJhZGRTY29yZSIsImxlbmdodCIsImJlc3RUaW1lIiwic2F2ZVNjb3JlcyIsInNldFN0YXQiLCJjb252ZXJ0VGltZSIsImdldEF2ZXJhZ2UiLCJTdG9yYWdlIiwidXNlclZlcnNpb24iLCJnZXRJdGVtIiwiZ2FtZVZlcnNpb24iLCJjbGVhclByZWZlcmVuY2VzIiwibWlncmF0ZVNjb3JlcyIsImxvYWRQcmVmZXJlbmNlcyIsImxvYWRTY29yZXMiLCJsb2FkR2FtZSIsImdhbWVJblByb2dyZXNzIiwiRXJyb3IiLCJnYW1lQ3ViZURhdGEiLCJKU09OIiwicGFyc2UiLCJnYW1lVGltZSIsInN0cmluZ2lmeSIsInJlbW92ZUl0ZW0iLCJzY29yZXNEYXRhIiwiY2xlYXJTY29yZXMiLCJzY29yZXNCZXN0Iiwic2NvcmVzV29yc3QiLCJzY29yZXNTb2x2ZXMiLCJjdWJlU2l6ZSIsIlRoZW1lcyIsImRlZmF1bHRzIiwiRyIsImJhY2tncm91bmQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiVGhlbWVFZGl0b3IiLCJlZGl0Q29sb3IiLCJnZXRQaWVjZUNvbG9yIiwiY29sb3JGcm9tSFNMIiwiaCIsImwiLCJzZXRIU0wiLCJhbmltYXRlIiwiaHNsIiwiZ2V0SFNMIiwiaG8iLCJzbyIsImxvIiwiY29sb3JPbGQiLCJ0d2VlbkhTTCIsImNvbG9yVHdlZW4iLCJsZXJwIiwiY29sb3JUd2VlblN0eWxlIiwiZ2V0U3R5bGUiLCJjb2xvclR3ZWVuSGV4IiwiZGlzcGxheSIsImdldEhleCIsImNvbG9yUGlja2VyIiwiY2xpY2tFdmVudCIsImNsaWNrUG9zaXRpb24iLCJwaWVjZUludGVyc2VjdCIsInJlc2V0VGhlbWUiLCJTdGF0ZXMiLCJjaGVja2VyYm9hcmQiLCJJY29uc0NvbnZlcnRlciIsInRhZ05hbWUiLCJzdHlsZXMiLCJpY29ucyIsIm9ic2VydmUiLCJzdmdUYWciLCJjcmVhdGVFbGVtZW50TlMiLCJhZGRTdHlsZXMiLCJjb252ZXJ0QWxsSWNvbnMiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmVyIiwibXV0YXRpb25zIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImljb24iLCJjb252ZXJ0SWNvbiIsInN2Z0RhdGEiLCJhdHRyaWJ1dGVzIiwibG9jYWxOYW1lIiwic3ZnIiwiY2xvbmVOb2RlIiwidmlld2JveCIsInNldEF0dHJpYnV0ZU5TIiwiY29udGVudCIsImhlYWQiLCJJY29ucyIsImNhbmNlbCIsInRyYXNoIiwiU1RBVEUiLCJNZW51IiwiUGxheWluZyIsIkNvbXBsZXRlIiwiU3RhdHMiLCJQcmVmcyIsIlRoZW1lIiwiQlVUVE9OUyIsIk5vbmUiLCJTSE9XIiwiSElERSIsInVpIiwiaW5pdEFjdGlvbnMiLCJuZXdHYW1lIiwidGFwcGVkVHdpY2UiLCJvbmNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==