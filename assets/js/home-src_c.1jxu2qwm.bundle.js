"use strict";
(self["webpackChunkweb_webpack"] = self["webpackChunkweb_webpack"] || []).push([["home-src_c"],{

/***/ "./src/common/components/PlusSwitchSub.js":
/*!************************************************!*\
  !*** ./src/common/components/PlusSwitchSub.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlusSwitchSub)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class PlusSwitchSub extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstCLick: false,
      active: false
    };
  }
  handleClick = () => {
    this.state.isFirstCLick && this.setState({
      isFirstCLick: false
    });
  };
  getClassName = () => {
    const {
      className,
      active,
      firstClick
    } = this.props;
    return ["plus-switch-sub", className, active ? 'active' : null, !firstClick && !active ? 'unactive' : null].join(' ');
  };
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      className: this.getClassName(),
      viewBox: "0 0 100 100"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      className: "line1",
      x1: "10",
      y1: "50",
      x2: "90",
      y2: "50",
      stroke: "black",
      strokeWidth: "5"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      className: "line2",
      x1: "10",
      y1: "50",
      x2: "90",
      y2: "50",
      stroke: "black",
      strokeWidth: "5"
    }));
  }
}

/***/ }),

/***/ "./src/common/components/RippleBtn.js":
/*!********************************************!*\
  !*** ./src/common/components/RippleBtn.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");


class RippleBtn extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      ripple: false
    };
    this.buttonRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }
  handleMouseDown = e => {
    this.setState({
      ripple: true
    });
    this.buildRipple(e);
  };
  handleMouseUp = e => {
    this.setState({
      ripple: false
    });
  };
  handleMouseLeave = e => {
    this.setState({
      ripple: false
    });
  };
  buildRipple = event => {
    const ripple = document.createElement('span');
    const button = this.buttonRef.current;
    const buttonRect = button.getBoundingClientRect();
    const diameter = Math.max(buttonRect.width, buttonRect.height);
    const radius = diameter / 5;
    ripple.style.width = ripple.style.height = `${radius}px`;
    ripple.style.left = `${event.clientX - buttonRect.x - radius / 2}px`;
    ripple.style.top = `${event.clientY - buttonRect.y - radius / 2}px`;
    ripple.classList.add("ripple");
    event.target.appendChild(ripple);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.lazyAct)(0.4).then(() => {
      ripple.style.opacity = 0;
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.lazyAct)(0.08).then(() => {
        ripple.remove();
      });
    });
  };
  render() {
    const {
      children,
      className,
      onClick
    } = this.props;
    const {
      ripple
    } = this.state;

    // const rippleStyle = {
    //   width: '100%',
    //   height: '100%',
    //   borderRadius: '50%',
    //   background: 'currentColor',
    //   opacity: ripple? 0.41 : 0,
    //   transform: `scale(${ripple? 8.5 : 1})`,
    //   transition: 'opacity 0.41s 0.1s, transform 0.36s'
    // };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      ref: this.buttonRef,
      className: ['ripple-btn', className].join(' '),
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      onClick: onClick
    }, children);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RippleBtn);

/***/ }),

/***/ "./src/page/home/App.js":
/*!******************************!*\
  !*** ./src/page/home/App.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AppContext */ "./src/context/AppContext.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/index */ "./src/utils/index.js");
/* harmony import */ var _common_components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/components/Navbar */ "./src/common/components/Navbar.js");
/* harmony import */ var _components_LandingSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LandingSection */ "./src/page/home/components/LandingSection.js");
/* harmony import */ var _components_SolutionsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SolutionsSection */ "./src/page/home/components/SolutionsSection.js");
/* harmony import */ var _components_ServiceSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ServiceSection */ "./src/page/home/components/ServiceSection.js");
/* harmony import */ var _components_ProjectSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ProjectSection */ "./src/page/home/components/ProjectSection.js");
/* harmony import */ var _common_components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/common/components/Footer */ "./src/common/components/Footer.js");
/* harmony import */ var _common_components_Preload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/common/components/Preload */ "./src/common/components/Preload.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_clientSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store/clientSlice */ "./src/store/clientSlice.js");
/* harmony import */ var _store_scrollSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/store/scrollSlice */ "./src/store/scrollSlice.js");
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");
/* harmony import */ var _common_components_RedirectLoading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/common/components/RedirectLoading */ "./src/common/components/RedirectLoading.js");
/* harmony import */ var _common_components_tracking_GoogleConsent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/common/components/tracking/GoogleConsent */ "./src/common/components/tracking/GoogleConsent.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _scss_page_home_index_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/scss/page/home/index.scss */ "./src/scss/page/home/index.scss");
/* harmony import */ var _common_components_HoverCursorBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/common/components/HoverCursorBox */ "./src/common/components/HoverCursorBox.js");
/* harmony import */ var _page_about_components_Clients__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/page/about/components/Clients */ "./src/page/about/components/Clients.js");

// import WebFont from 'webfontloader';



















class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      openContent: false,
      showText: false,
      showHeader: true,
      showScrollView: false,
      scrollContentHeight: '100vh',
      isPC: true
    };
    this.contentRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef(null);
    this.solutionsRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef(null);
    this.ServicesRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef(null);
    this.workRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef(null);
    this.aboutRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef(null);
    this.contactRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef(null);
    this.clockRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef(null);
  }
  handleScrollBehavior() {
    [this.solutionsRef.current, this.ServicesRef.current, this.workRef.current, this.aboutRef.current, this.contactRef.current].forEach(ref => {
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
  componentDidMount() {
    this.handleResize();
    this.handleScroll();
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', (0,lodash__WEBPACK_IMPORTED_MODULE_15__.throttle)(this.handleScroll, 100), {
      passive: true
    });
    (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.loadFont)();
  }
  handleScroll = () => {
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
  handleResize = () => {
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
  buildContext(str) {
    return str.split('');
  }
  openContentTimer = null;
  setOpenContent(status) {
    const {
      setIsAppOpen
    } = this.props;
    // this.openContentTimer = debounce(() => {
    if (status) document.body.classList.add('open');
    this.setState({
      openContent: status
    });
    setIsAppOpen(status);
    // }, 300)();
  }
  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器  
    console.error("Caught an error in ErrorBoundary", error, errorInfo);
  }
  changeShowScrollView(status) {
    this.setState({
      showScrollView: status
    });
  }
  componentWillUnmount() {
    this.openContentTimer && this.openContentTimer.cancel();
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }
  render() {
    const {
      pageloading
    } = this.props;
    // const { isPC, scrollY, isAppOpen } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
      value: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_tracking_GoogleConsent__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_HoverCursorBox__WEBPACK_IMPORTED_MODULE_17__["default"], null, this.state.openContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hide: !this.state.showHeader,
      activepage: "home"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "home-page"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LandingSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      openContent: this.state.openContent
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "solutions",
      ref: this.solutionsRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SolutionsSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
      openContent: this.state.openContent
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "services",
      ref: this.ServicesRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ServiceSection__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "clients"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "clients-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "clients-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "clients-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page_about_components_Clients__WEBPACK_IMPORTED_MODULE_18__["default"], {
      noshowtext: true
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project",
      ref: this.workRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ProjectSection__WEBPACK_IMPORTED_MODULE_7__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: this.clockRef
    }), pageloading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_RedirectLoading__WEBPACK_IMPORTED_MODULE_13__["default"], null) : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Preload__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onOpen: v => this.setOpenContent(v)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "\xA0"))))));
  }
}
const mapStateToProps = state => {
  return {
    isPC: state.clientSlice.isPC,
    isTablet: state.clientSlice.isTablet,
    isAppOpen: state.baseSlice.isAppOpen,
    pageloading: state.baseSlice.redirectloading,
    scrollY: state.scrollSlice.scrollY,
    clientWidth: state.clientSlice.clientWidth,
    clientHeight: state.clientSlice.clientHeight
  };
};
const mapDispatchToProps = {
  setClientWidth: _store_clientSlice__WEBPACK_IMPORTED_MODULE_10__.setClientWidth,
  setClientHeight: _store_clientSlice__WEBPACK_IMPORTED_MODULE_10__.setClientHeight,
  setScrollY: _store_scrollSlice__WEBPACK_IMPORTED_MODULE_11__.setScrollY,
  setIsAppOpen: _store_baseSlice__WEBPACK_IMPORTED_MODULE_12__.setIsAppOpen
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_19__.connect)(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/page/home/components/LandingSection.js":
/*!****************************************************!*\
  !*** ./src/page/home/components/LandingSection.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _effect_VideoScrollView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effect/VideoScrollView */ "./src/page/home/components/effect/VideoScrollView.js");
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");

// import { lazyAct } from '@/utils/index';



// import { debounce } from 'lodash';
// import RippleBtn from '@/common/components/RippleBtn';

class LandingSection extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      intros: [{
        tagTitle: '14',
        description: 'years on the market'
      }, {
        tagTitle: '500K',
        description: 'Apps download'
      }, {
        tagTitle: '5000+',
        description: 'DAU'
      }],
      selectedIndex: 0,
      fadeIn: false,
      fadeOut: false,
      showText: false
    };
    this.contentRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.interTimer = null;
  }
  animateText() {
    this.setState({
      showText: true
    });
    if (document.querySelector('.effect-text .letters')) {
      animejs__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
        loop: false
      }).add({
        targets: '.effect-text .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 280
      }).add({
        targets: '.effect-text .line',
        translateX: [0, document.querySelector('.effect-text .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 280,
        delay: 80
      }).add({
        targets: '.effect-text .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 200,
        offset: '-=775',
        delay: (el, i) => 20 * (i + 1)
      }).finished.then(() => {
        this.animateTextRef.current.classList.add('bg-text-animation');
      });
    }
  }
  componentDidMount() {
    this.animateText();
  }
  componentWillUnmount() {
    this.interTimer.cancel();
  }
  buildContext(str) {
    return str.split('');
  }
  renderInlineLetter(str) {
    return this.buildContext(str).map((v, i) => {
      if (v === ' ') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "letter",
          key: i
        }, "\xA0");
      } else if (v === '_') return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "letter-line",
        key: i,
        style: {
          height: '0px'
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "letter",
        key: i
      }, v);
    });
  }
  redirectTo = url => {
    const {
      setDirectUrl,
      enableRedirectLoading
    } = this.props;
    enableRedirectLoading(true);
    setDirectUrl(url);
  };
  animateTextRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "landing",
      className: "content common-center-box",
      ref: this.contentRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: ["effect-text my-0 pb-0", this.state.showText ? 'show' : ''].join(' ')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "letters"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'inline-block',
        wordWrap: 'nowrap'
      }
    }, this.renderInlineLetter('Crafting ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'inline-block',
        wordWrap: 'nowrap'
      }
    }, this.renderInlineLetter('Digital ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      ref: this.animateTextRef,
      style: {
        display: 'inline-block',
        wordWrap: 'nowrap'
      }
    }, this.renderInlineLetter('Experiences')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "letter-line",
      style: {
        height: '0px'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'inline-block',
        wordWrap: 'nowrap'
      }
    }, this.renderInlineLetter('That ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'inline-block',
        wordWrap: 'nowrap'
      }
    }, this.renderInlineLetter('Intuit, ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'inline-block',
        wordWrap: 'nowrap'
      }
    }, this.renderInlineLetter('Inspire ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'inline-block',
        wordWrap: 'nowrap'
      }
    }, this.renderInlineLetter('and ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'inline-block',
        wordWrap: 'nowrap'
      }
    }, this.renderInlineLetter('Engage'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "top-banner pt-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "top-banner-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      width: "100%",
      cellSpacing: "0",
      border: "0",
      cellPadding: "0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "tbr-description text-lexend",
      style: {
        paddingLeft: 0,
        paddingRight: 0
      }
    }, "We build engaging apps, websites & innovative eCommerce solutions")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "top-banner-bottom"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_effect_VideoScrollView__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
  }
}
const mapStateToProps = state => ({
  clientWidth: state.clientSlice.clientWidth,
  isPC: state.clientSlice.isPC
});
const mapDispatchToProps = {
  setDirectUrl: _store_baseSlice__WEBPACK_IMPORTED_MODULE_3__.setDirectUrl,
  enableRedirectLoading: _store_baseSlice__WEBPACK_IMPORTED_MODULE_3__.enableRedirectLoading
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)(LandingSection));

/***/ }),

/***/ "./src/page/home/components/ProjectSection.js":
/*!****************************************************!*\
  !*** ./src/page/home/components/ProjectSection.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _projects_components_ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/components/ProjectList */ "./src/page/projects/components/ProjectList.js");
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/projects */ "./src/data/projects.js");
/* harmony import */ var _common_components_RippleBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/components/RippleBtn */ "./src/common/components/RippleBtn.js");
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");






class ProjectSection extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProjectData: _data_projects__WEBPACK_IMPORTED_MODULE_2__["default"].slice(0, 6)
    };
  }
  redirectWorkDetail = project => {
    const projectname = project.alias;
    this.redirectToUrl(`/projects/${projectname}`);
  };
  redirectToUrl = url => {
    this.props.setDirectUrl(url);
    this.props.enableRedirectLoading(true);
  };
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "project",
      className: "project-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "project-section-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "project-section-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_projects_components_ProjectList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      projectList: this.state.ProjectData,
      openDetail: project => this.redirectWorkDetail(project)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "project-projects-title py-0 my-0 section-subject"
    }, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "project-section-btn-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_RippleBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "btn btn-outline project-section-btn",
      onClick: () => this.redirectToUrl("/projects")
    }, "View More")))));
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    setDirectUrl: url => dispatch((0,_store_baseSlice__WEBPACK_IMPORTED_MODULE_4__.setDirectUrl)(url)),
    enableRedirectLoading: loading => dispatch((0,_store_baseSlice__WEBPACK_IMPORTED_MODULE_4__.enableRedirectLoading)(loading))
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, mapDispatchToProps)(ProjectSection));

/***/ }),

/***/ "./src/page/home/components/ServiceSection.js":
/*!****************************************************!*\
  !*** ./src/page/home/components/ServiceSection.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _common_components_PlusSwitchSub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/components/PlusSwitchSub */ "./src/common/components/PlusSwitchSub.js");
/* harmony import */ var _common_components_RippleBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components/RippleBtn */ "./src/common/components/RippleBtn.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");
/* harmony import */ var _data_clients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/data/clients */ "./src/data/clients.js");




// import LogoListBox from '@/common/components/LogoListBox';



const newBrandList = _data_clients__WEBPACK_IMPORTED_MODULE_5__["default"].map(item => item.logo).sort(() => Math.random() - 0.5);
class ServiceSection extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList: [{
        title: 'Web Design',
        icon: 'fa-html5',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit nec velit tristique posuere.'
      }, {
        title: 'Web Development',
        icon: 'fa-code',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit nec velit tristique posuere.'
      }],
      brandList: newBrandList,
      showBrandList: [],
      tempShowBrandList: [],
      lessShowBrandList: [],
      selectedIndexRow: [0, 1],
      changeStatus: false,
      dropdownIndex: null,
      selectedIndexStyle: {
        height: 0
      },
      animating: 'closed',
      itemWidthRows: [],
      dropdownList: [{
        title: 'Branding',
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "A brand is more than just a logo and color palette. We'll craft a distinct visual and verbal identity, create necessary assets, and establish clear brand guidelines to maintain consistency across all touchpoints."),
        icon: './assets/img/service/dropdownlist/Branding.webp'
      }, {
        title: 'Digital Products',
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We concentrates on designing authentic connections through the use of both aesthetics and behavioral science. Our team deliver engaging digital products that help brands thrive in the modern economy."),
        icon: './assets/img/service/dropdownlist/Digital Products.webp'
      }, {
        title: 'Websites',
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "A modern brand is defined by its digital presence, starting with the website. We focus on creating websites that effectively convey the brand's identity and perspective for an enhanced user experience."),
        icon: './assets/img/service/dropdownlist/Websites.webp'
      }, {
        title: 'Development',
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Our web and mobile app developers are committed to achieving visual and performance excellence. From the backend to the frontend, we prioritize delivering a seamless and enjoyable user experience on all devices."),
        icon: './assets/img/service/dropdownlist/Development.webp'
      }, {
        title: 'Content',
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Content is a crucial aspect of the user experience, and we offer a range of services to support this, including copywriting, illustration, graphics, iconography, interaction, video production."),
        icon: './assets/img/service/dropdownlist/web-design.webp'
      }, {
        title: 'Artificial Intelligence',
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We strategically integrates AI, optimizing processes, and elevating digital products."),
        icon: './assets/img/service/dropdownlist/Artificial intelligence.jpg'
      }],
      firstClick: true
    };
    this.collapseRefs = [];
    this.descRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.timer = null;
    this.collapseTimer = null;
  }
  checkIsSelected = index => {
    return this.state.selectedIndexRow.includes(index);
  };
  collectItems(index, element) {
    this.collapseRefs[index] = element;
  }
  buildCollapseListItemHeightAttrs(index) {
    if (this.collapseRefs[index]) {
      this.collapseRefs[index].setAttribute('bind-height', this.collapseRefs[index].getBoundingClientRect().height);
    }
  }
  // componentDidMount () {
  //     this.collapseRefs.map((item, index) => {
  //         this.buildCollapseListItemHeightAttrs(index);
  //     });
  // }
  handleCollapse(index) {
    this.collapseRefs.map((_item, index) => {
      this.buildCollapseListItemHeightAttrs(index);
    });
    if (this.state.dropdownIndex === index) {
      this.setState({
        dropdownIndex: null
      });
    } else {
      this.setState({
        dropdownIndex: index,
        firstClick: false,
        animating: 'pending'
      });
      if (this.collapseTimer) this.collapseTimer.cancel();
      this.collapseTimer = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)(() => {
        this.setState({
          animating: 'loading'
        });
        !!this.collapseTimer && this.collapseTimer.cancel();
        this.collapseTimer = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)(() => {
          this.setState({
            animating: 'closed'
          });
        }, 200)();
      }, 300)();
    }
  }
  redirectTo = url => {
    const {
      setDirectUrl,
      enableRedirectLoading
    } = this.props;
    enableRedirectLoading(true);
    setDirectUrl(url);
  };
  componentWillUnmount() {
    !!this.timer && this.timer.cancel();
    !!this.collapseTimer && this.collapseTimer.cancel();
    this.collapseRefs = [];
  }
  getClassName = index => {
    const className = ["sscs-list-item", "animate-slideInDown  delay-1-" + (index + 0) + "s", this.checkIsSelected(index) ? "active" : "", this.state.dropdownIndex === index ? "read" : null].join(' ');
    return className;
  };
  renderMatchStyle = index => {
    return index == this.state.dropdownIndex ? {
      height: this.state.animating == 'pending' ? 100 + 'px' : this.state.animating == 'loading' ? 'auto' : this.collapseRefs[index].getBoundingClientRect().height
    } : {
      height: 0
    };
  };
  componentDidMount() {
    this.timer = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.debounce)(() => {
      this.handleCollapse(0);
    }, 300)();
  }
  render() {
    // const { clientWidth, isPC } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "service-section"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "animate-slideInDown section-subject"
    }, " Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "service-section-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "service-section-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "service-section-content-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sscd-intro animate-slideInDown text-lexend",
      style: {
        animationDelay: "0.6s"
      },
      ref: this.descRef
    }, "We build intuitive and transformative digital experiences for the brands by blending AI, design and technology.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "service-section-content-subjectbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "sscs-list"
    }, this.state.dropdownList.map((item, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: this.getClassName(index),
        style: {
          animationDelay: index * 0.07 + 0.6 + "s"
        },
        onClick: () => this.handleCollapse.bind(this)(index)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "sscs-list-item-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_PlusSwitchSub__WEBPACK_IMPORTED_MODULE_1__["default"], {
        active: this.state.dropdownIndex === index,
        firstClick: this.state.isFirstClick
      }), "\xA0", item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "sscs-list-item-desc text-lexend",
        ref: el => this.collectItems(index, el),
        style: this.renderMatchStyle(index)
      }, item.description));
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "service-section-container-addition btn-group text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_RippleBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "btn btn-outlined ripple-effect-reverse-btn",
      onClick: () => this.redirectTo('./services')
    }, "Our Services"))));
  }
}
const mapStateToProps = state => {
  return {
    clientWidth: state.clientSlice.clientWidth,
    isPC: state.clientSlice.isPC
  };
};
const mapDispatchToProps = {
  setDirectUrl: _store_baseSlice__WEBPACK_IMPORTED_MODULE_4__.setDirectUrl,
  enableRedirectLoading: _store_baseSlice__WEBPACK_IMPORTED_MODULE_4__.enableRedirectLoading
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(mapStateToProps, mapDispatchToProps)(ServiceSection));

/***/ }),

/***/ "./src/page/home/components/SolutionsSection.js":
/*!******************************************************!*\
  !*** ./src/page/home/components/SolutionsSection.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _common_components_RippleBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/components/RippleBtn */ "./src/common/components/RippleBtn.js");
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");

// import { lazyAct } from '@/utils/index';


// import HoverCursorBox from '@/common/components/HoverCursorBox';

class SolutionsSection extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      fadeIn: false,
      fadeOut: false
      // showText: false,
    };
    this.contentRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }
  // animateText() {
  //   this.setState({ showText: true });
  // }
  handleClick = () => {
    this.redirectTo('/projects/appify');
  };
  redirectTo = url => {
    const {
      setDirectUrl,
      enableRedirectLoading
    } = this.props;
    enableRedirectLoading(true);
    setDirectUrl(url);
  };
  // componentDidMount() {
  //   this.animateText();
  // }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "solution",
      className: "content solutions-section",
      ref: this.contentRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "solutions-section-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "solutions-section-inner-intro"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "animate-slideInDown section-subject  delay-0-4s"
    }, "Solutions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ssii-subject animate-slideInUp delay-0-6s"
    }, "Mobile Commerce"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ssii-desc animate-slideInUp delay-0-8s text-lexend"
    }, "Appify is an innovative mobile commerce solution that empowers brands to effortless unify their online and offline operations, driving the next generation of business transformation. Enabling brands to sell anytime, anywhere more easily, quickly and seamlessly."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ssic-btn-wrapper animate-fadeIn delay-1-1s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_RippleBtn__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "btn btn-play-video theme-btn ripple-effect-btn",
      onClick: () => this.handleClick()
    }, "Discover"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "solutions-section-inner-additional animate-slideInUp delay-0-9s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "solutions-section-inner-additional-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "solutions-section-inner-additional-item-icon",
      style: {
        backgroundImage: 'url(./assets/img/solutions/Appify-solution.webp)'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "./assets/img/solutions/Appify-solution.webp",
      alt: "inline+preview"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "solutions-section-video-scroll-wrapper"
    })));
  }
}
const mapStateToProps = state => ({
  // clientWidth: state.clientSlice.clientWidth,
  // isPC: state.clientSlice.isPC,
});
const mapDispatchToProps = {
  setDirectUrl: _store_baseSlice__WEBPACK_IMPORTED_MODULE_2__.setDirectUrl,
  enableRedirectLoading: _store_baseSlice__WEBPACK_IMPORTED_MODULE_2__.enableRedirectLoading
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(SolutionsSection));

/***/ }),

/***/ "./src/page/home/components/effect/VideoScrollView.js":
/*!************************************************************!*\
  !*** ./src/page/home/components/effect/VideoScrollView.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");


// import { lazyAct, checkIsInViewport } from '../../../../utils';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

class VideoScrollView extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoSrc: '/assets/video/EB-introduction.mp4',
      inViewScrollTop: 0,
      isOnMouse: false,
      videoStyle: {
        transform: 'scale(1.23)'
      },
      cur_x: 0,
      cur_y: 0,
      videoboxStyle: {
        clipPath: 'inset(0)'
      }
    };
    this.videoRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.videoContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.videoLayoutRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.markRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.scrollY !== this.props.scrollY) {
      this.scrollChangeStyle(this.props.scrollY);
      // checkIsInViewport()
      // this.video.currentTime = this.props.scrollY * 0.001;
    }
  }
  bindVideoEvents = () => {
    // this.videoRef.current.addEventListener('ended', this.offVideoFullScreen);
  };
  bindLayoutMouseOverEvent = () => {
    const markTarget = this.markRef.current;
    markTarget.style.transform = 'translateY(-20px)';
  };
  bindLayoutMouseOutEvent = () => {
    const markTarget = this.markRef.current;
    markTarget.style.transform = 'translateY(0)';
  };
  bindDeviceOrientationEvent = event => {
    const markTarget = this.markRef.current;
    const gamma = event.gamma; // Left to right tilt in degrees
    if (gamma > 15) {
      markTarget.style.transform = 'translateY(-20px)';
    } else if (gamma < -15) {
      markTarget.style.transform = 'translateY(20px)';
    } else {
      markTarget.style.transform = 'translateY(0)';
    }
  };
  componentDidMount() {
    if (this.state.inViewScrollTop == 0) {
      this.setState({
        inViewScrollTop: window.scrollY + this.videoContainerRef.current.getBoundingClientRect().top
      });
    }
    this.scrollChangeStyle(window.scrollY);

    // this.videoRef.current.addEventListener('loadeddata', this.bindVideoEvents);
    const LayoutTarget = this.videoLayoutRef.current;
    LayoutTarget.addEventListener('mouseover', this.bindLayoutMouseOverEvent);
    LayoutTarget.addEventListener('mouseout', this.bindLayoutMouseOutEvent);
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.bindDeviceOrientationEvent);
    } else {
      console.log('Device orientation not supported');
    }
  }
  checkInView = scrollY => {
    if (!this.videoContainerRef.current) return;
    const videoRect = this.videoContainerRef.current.getBoundingClientRect();
    const videoHeight = videoRect.height;
    const videoTop = videoRect.top;
    // if (videoTop >= 0 && videoTop + videoHeight >= 0) {
    //     if (videoTop == 0) {
    //         this.state.inViewScrollTop = scrollY;
    //     }
    //     return true;
    // }
    // return videoTop >= 0 && videoTop+ videoHeight / 2 >= 0;
    const videoBottom = videoRect.bottom;
    if (videoTop <= 2 / 3 * window.innerHeight && videoBottom >= 0) {
      // if (videoTop == 0) {
      //     this.state.inViewScrollTop = scrollY;
      // }
      return true;
    }
    return videoTop >= 0 && videoTop + videoHeight / 2 >= 0;
  };
  renderValidScaleRatio = ratio => {
    if (ratio < 1.06) return 1.06;
    if (ratio > this.maxScaleRatio) return this.maxScaleRatio;
    return ratio;
  };
  maxScaleRatio = 1.23;
  scrollChangeStyle = scrollY => {
    // const maxScaleRatio = window.innerWidth / this.videoContainerRef.current.getBoundingClientRect().width;
    // if (this.checkInView(scrollY)) {
    const _scrollY = scrollY;
    if (scrollY < window.innerHeight / 6) {
      this.setState({
        videoboxStyle: {
          clipPath: 'inset(0)'
        },
        videoStyle: {
          transform: `scale(${this.maxScaleRatio * 100}%)`,
          transition: '0.11s',
          transformOrigin: 'center center'
        }
      });
    } else {
      if (this.videoContainerRef.current.getBoundingClientRect().bottom > 0 && this.videoContainerRef.current.getBoundingClientRect().top < window.innerHeight) {
        const videoScale = 1 + (_scrollY - this.state.inViewScrollTop) / window.innerHeight;
        let videoToScale = this.renderValidScaleRatio(this.maxScaleRatio - (_scrollY - this.state.inViewScrollTop) / window.innerHeight * 0.2);
        const isPC = this.props.clientWidth > 767.9;
        const maxClipPathWidth = isPC ? window.innerWidth * 8.33 / 100 : 18;
        const changeClipWidth = videoScale * (maxClipPathWidth / (isPC ? 8.33 / 5 : 1)) * 1.85 - 40;
        const clipWidth = Math.min(maxClipPathWidth, changeClipWidth);
        const roundedClipWidth = Math.min(Math.round(clipWidth * 0.5), 40);

        // if (clipWidth === maxClipPathWidth) {
        //     videoToScale = 1.06;
        // }

        this.setState({
          videoStyle: {
            transform: `scale(${videoToScale * 100}%)`,
            transformOrigin: 'center center',
            willChange: 'transform',
            transition: '0.11s'
          },
          videoboxStyle: {
            clipPath: isPC ? `inset(0 ${clipWidth}px round ${roundedClipWidth}px)` : 'inset(0)'
          }
        });
      }
    }
  };
  getMousePos = e => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return {
      x,
      y
    };
  };
  mouseMove = e => {
    const {
      x,
      y
    } = this.getMousePos(e);
    this.setState({
      isOnMouse: true,
      cur_x: x + 'px',
      cur_y: y + 'px'
    });
  };
  mouseLeave = e => {
    this.setState({
      isOnMouse: false
    });
  };
  makeVideoFullScreen = () => {
    const video = this.videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };
  offVideoFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };
  componentWillUnmount() {
    // this.videoRef.current.removeEventListener('ended', this.offVideoFullScreen);
    // this.videoRef.current.removeEventListener('loadeddata', this.bindVideoEvents);
    this.videoLayoutRef.current.removeEventListener('mouseover', this.bindLayoutMouseOverEvent);
    this.videoLayoutRef.current.removeEventListener('mouseout', this.bindLayoutMouseOutEvent);
    if (window.DeviceOrientationEvent) {
      window.removeEventListener('deviceorientation', this.bindDeviceOrientationEvent);
    }
  }
  videoboxRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "video-scroll-view",
      ref: this.videoContainerRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "video-scroll-view-content",
      style: this.state.videoboxStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "vsvc-video full-width",
      style: {
        maxWidth: '100%',
        overflowX: 'clip'
      },
      ref: this.videoboxRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
      ref: this.videoRef,
      muted: true,
      loop: true,
      playsInline: true,
      disablePictureInPicture: true,
      autoPlay: "autoplay",
      style: this.state.videoStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      src: this.state.videoSrc,
      type: "video/mp4"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "video-scroll-view-overlay full-width",
      id: "video-layout",
      ref: this.videoLayoutRef /*onClick={this.makeVideoFullScreen}*/
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "vsvo-water-mark",
      ref: this.markRef
    }))));
  }
}
const mapStateToProps = state => {
  return {
    scrollY: state.scrollSlice.scrollY,
    clientWidth: state.clientSlice.clientWidth
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(VideoScrollView));

/***/ }),

/***/ "./src/page/home/index.js":
/*!********************************!*\
  !*** ./src/page/home/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _page_home_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/page/home/App */ "./src/page/home/App.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/index */ "./src/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");





// import * as Sentry from "@sentry/react";

// Sentry.init({
//     dsn: "https://73dad912c3b0db6b683a8230a1f57cf5@o1038545.ingest.us.sentry.io/4507694400864256",
//     integrations: [
//         Sentry.browserTracingIntegration(),
//         Sentry.browserProfilingIntegration(),
//         Sentry.replayIntegration(),
//     ],
//     // Performance Monitoring
//     tracesSampleRate: 1.0, //  Capture 100% of the transactions
//     // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
//     tracePropagationTargets: ["localhost", /^https:\/\/eb-suite\.com/],
//     // Profiling
//     profilesSampleRate: 1.0, // Profile 100% of the transactions. This value is relative to tracesSampleRate
//     // Session Replay
//     replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//     replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// });

const app = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('app'));
app.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _store_index__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page_home_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/scss/page/home/index.scss":
/*!***************************************!*\
  !*** ./src/scss/page/home/index.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2hvbWUtc3JjX2MuMWp4dTJxd20uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUV4QixNQUFNRSxhQUFhLFNBQVNELDRDQUFTLENBQUM7RUFDakRFLFdBQVdBLENBQUNDLEtBQUssRUFBRTtJQUNmLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUc7TUFDVEMsWUFBWSxFQUFFLEtBQUs7TUFDbkJDLE1BQU0sRUFBRTtJQUNaLENBQUM7RUFDTDtFQUNBQyxXQUFXLEdBQUdBLENBQUEsS0FBTTtJQUNoQixJQUFJLENBQUNILEtBQUssQ0FBQ0MsWUFBWSxJQUFHLElBQUksQ0FBQ0csUUFBUSxDQUFDO01BQUVILFlBQVksRUFBRTtJQUFNLENBQUMsQ0FBQztFQUNwRSxDQUFDO0VBQ0RJLFlBQVksR0FBR0EsQ0FBQSxLQUFNO0lBQ2pCLE1BQU07TUFBRUMsU0FBUztNQUFFSixNQUFNO01BQUVLO0lBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQ1IsS0FBSztJQUNwRCxPQUFPLENBQUMsaUJBQWlCLEVBQUVPLFNBQVMsRUFBRUosTUFBTSxHQUFHLFFBQVEsR0FBRyxJQUFJLEVBQUUsQ0FBQ0ssVUFBVSxJQUFJLENBQUNMLE1BQU0sR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUNNLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDekgsQ0FBQztFQUNEQyxNQUFNQSxDQUFBLEVBQUc7SUFDTCxvQkFDSWQsMERBQUE7TUFBS1csU0FBUyxFQUFFLElBQUksQ0FBQ0QsWUFBWSxDQUFDLENBQUU7TUFBQ00sT0FBTyxFQUFDO0lBQWEsZ0JBRzFEaEIsMERBQUE7TUFBTVcsU0FBUyxFQUFDLE9BQU87TUFBQ00sRUFBRSxFQUFDLElBQUk7TUFBQ0MsRUFBRSxFQUFDLElBQUk7TUFBQ0MsRUFBRSxFQUFDLElBQUk7TUFBQ0MsRUFBRSxFQUFDLElBQUk7TUFBQ0MsTUFBTSxFQUFDLE9BQU87TUFBQ0MsV0FB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RSxXQUFXLEVBQUUzRyxLQUFLLENBQUN3SSxXQUFXLENBQUM3QjtFQUNuQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlckMsb0RBQU8sQ0FBQ2lFLGVBQWUsQ0FBQyxDQUFDUyxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelAxQjtBQUNnQjtBQUNaO0FBQ0E7QUFDSztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1zSyxHQUFHLEdBQUdGLDREQUFVLENBQUN2UixRQUFRLENBQUMwUixjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdERELEdBQUcsQ0FBQzdTLE1BQU0sY0FBQ2QsZ0RBQUEsQ0FBQ3FJLGlEQUFRO0VBQUNxTCxLQUFLLEVBQUVBLG9EQUFLQTtBQUFDLGdCQUM5QjFULGdEQUFBLENBQUNxRixzREFBRyxNQUFFLENBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQzVCWiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL1BsdXNTd2l0Y2hTdWIuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvUmlwcGxlQnRuLmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3BhZ2UvaG9tZS9BcHAuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS9ob21lL2NvbXBvbmVudHMvTGFuZGluZ1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS9ob21lL2NvbXBvbmVudHMvUHJvamVjdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS9ob21lL2NvbXBvbmVudHMvU2VydmljZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS9ob21lL2NvbXBvbmVudHMvU29sdXRpb25zU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9wYWdlL2hvbWUvY29tcG9uZW50cy9lZmZlY3QvVmlkZW9TY3JvbGxWaWV3LmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3BhZ2UvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9zY3NzL3BhZ2UvaG9tZS9pbmRleC5zY3NzPzM3N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudH0gZnJvbSdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVzU3dpdGNoU3ViIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzRmlyc3RDTGljazogZmFsc2UsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5pc0ZpcnN0Q0xpY2sgJiZ0aGlzLnNldFN0YXRlKHsgaXNGaXJzdENMaWNrOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICAgIGdldENsYXNzTmFtZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZSwgYWN0aXZlLCBmaXJzdENsaWNrIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiBbXCJwbHVzLXN3aXRjaC1zdWJcIiwgY2xhc3NOYW1lLCBhY3RpdmUgPyAnYWN0aXZlJyA6IG51bGwsICFmaXJzdENsaWNrICYmICFhY3RpdmUgPyAndW5hY3RpdmUnIDogbnVsbF0uam9pbignICcpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXt0aGlzLmdldENsYXNzTmFtZSgpfSB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cclxuICAgICAgICAgICAgey8qIDxsaW5lIGNsYXNzTmFtZT1cImxpbmUxXCIgeDE9XCIzMFwiIHkxPVwiNTBcIiB4Mj1cIjcwXCIgeTI9XCI1MFwiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlV2lkdGg9XCI1XCIgLz5cclxuICAgICAgICAgICAgPGxpbmUgY2xhc3NOYW1lPVwibGluZTJcIiB4MT1cIjMwXCIgeTE9XCI1MFwiIHgyPVwiNzBcIiB5Mj1cIjUwXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VXaWR0aD1cIjVcIiAvPiAqL31cclxuICAgICAgICAgICAgPGxpbmUgY2xhc3NOYW1lPVwibGluZTFcIiB4MT1cIjEwXCIgeTE9XCI1MFwiIHgyPVwiOTBcIiB5Mj1cIjUwXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VXaWR0aD1cIjVcIiAvPlxyXG4gICAgICAgICAgICA8bGluZSBjbGFzc05hbWU9XCJsaW5lMlwiIHgxPVwiMTBcIiB5MT1cIjUwXCIgeDI9XCI5MFwiIHkyPVwiNTBcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPVwiNVwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSdyZWFjdCc7XHJcbmltcG9ydCB7IGxhenlBY3QgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5jbGFzcyBSaXBwbGVCdG4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICByaXBwbGU6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5idXR0b25SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcmlwcGxlOiB0cnVlIH0pO1xyXG4gICAgdGhpcy5idWlsZFJpcHBsZShlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU1vdXNlVXAgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJpcHBsZTogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVNb3VzZUxlYXZlID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyByaXBwbGU6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRSaXBwbGUgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnV0dG9uUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBidXR0b25SZWN0ID0gYnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgZGlhbWV0ZXIgPSBNYXRoLm1heChidXR0b25SZWN0LndpZHRoLCBidXR0b25SZWN0LmhlaWdodCk7XHJcbiAgICBjb25zdCByYWRpdXMgPSBkaWFtZXRlciAvIDU7XHJcbiAgICByaXBwbGUuc3R5bGUud2lkdGggPSByaXBwbGUuc3R5bGUuaGVpZ2h0ID0gYCR7cmFkaXVzfXB4YDtcclxuICAgIHJpcHBsZS5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WCAtIGJ1dHRvblJlY3QueCAtIHJhZGl1cyAvIDJ9cHhgO1xyXG4gICAgcmlwcGxlLnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFkgLSBidXR0b25SZWN0LnkgLSByYWRpdXMgLyAyfXB4YDtcclxuICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKFwicmlwcGxlXCIpO1xyXG4gICAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKHJpcHBsZSk7XHJcbiAgICBsYXp5QWN0KDAuNCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJpcHBsZS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgbGF6eUFjdCgwLjA4KS50aGVuKCgpID0+IHtcclxuICAgICAgICByaXBwbGUucmVtb3ZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBvbkNsaWNrIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyByaXBwbGUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgLy8gY29uc3QgcmlwcGxlU3R5bGUgPSB7XHJcbiAgICAvLyAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAvLyAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgLy8gICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgLy8gICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcclxuICAgIC8vICAgb3BhY2l0eTogcmlwcGxlPyAwLjQxIDogMCxcclxuICAgIC8vICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtyaXBwbGU/IDguNSA6IDF9KWAsXHJcbiAgICAvLyAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuNDFzIDAuMXMsIHRyYW5zZm9ybSAwLjM2cydcclxuICAgIC8vIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHJlZj17dGhpcy5idXR0b25SZWZ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtbJ3JpcHBsZS1idG4nLCBjbGFzc05hbWVdLmpvaW4oJyAnKX1cclxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd259XHJcbiAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZU1vdXNlVXB9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmlwcGxlQnRuOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IFdlYkZvbnQgZnJvbSAnd2ViZm9udGxvYWRlcic7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJ0AvY29udGV4dC9BcHBDb250ZXh0JztcclxuaW1wb3J0IHsgbGF6eUFjdCwgY2hlY2tJc0luVmlld3BvcnQsIGxvYWRGb250IH0gZnJvbSAnQC91dGlscy9pbmRleCc7XHJcbmltcG9ydCBIZWFkZXJNZW51cyBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBMYW5kaW5nU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvTGFuZGluZ1NlY3Rpb24nO1xyXG5pbXBvcnQgU29sdXRpb25zU2VjdGlvblYwNjA0IGZyb20gJy4vY29tcG9uZW50cy9Tb2x1dGlvbnNTZWN0aW9uJztcclxuaW1wb3J0IFNlcnZpY2VTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9TZXJ2aWNlU2VjdGlvbic7XHJcbmltcG9ydCBQcm9qZWN0U2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdFNlY3Rpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IFByZWxvYWQgZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9QcmVsb2FkJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2V0Q2xpZW50V2lkdGgsIHNldENsaWVudEhlaWdodCB9IGZyb20gJ0Avc3RvcmUvY2xpZW50U2xpY2UnO1xyXG5pbXBvcnQgeyBzZXRTY3JvbGxZIH0gZnJvbSAnQC9zdG9yZS9zY3JvbGxTbGljZSc7XHJcbmltcG9ydCB7IHNldElzQXBwT3BlbiB9IGZyb20gJ0Avc3RvcmUvYmFzZVNsaWNlJztcclxuaW1wb3J0IFJlZGlyZWN0TG9hZGluZyBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL1JlZGlyZWN0TG9hZGluZyc7XHJcbmltcG9ydCBHb29nbGVDb25zZW50IGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvdHJhY2tpbmcvR29vZ2xlQ29uc2VudCc7XHJcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICdAL3Njc3MvcGFnZS9ob21lL2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgSG92ZXJDdXJzb3JCb3ggZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9Ib3ZlckN1cnNvckJveCc7XHJcbmltcG9ydCBDbGllbnRzIGZyb20gJ0AvcGFnZS9hYm91dC9jb21wb25lbnRzL0NsaWVudHMnO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5Db250ZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1RleHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93SGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93U2Nyb2xsVmlldzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcm9sbENvbnRlbnRIZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIGlzUEM6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGVudFJlZiA9IFJlYWN0LmNyZWF0ZVJlZihudWxsKTtcclxuICAgICAgICB0aGlzLnNvbHV0aW9uc1JlZiA9IFJlYWN0LmNyZWF0ZVJlZihudWxsKTtcclxuICAgICAgICB0aGlzLlNlcnZpY2VzUmVmID0gUmVhY3QuY3JlYXRlUmVmKG51bGwpO1xyXG4gICAgICAgIHRoaXMud29ya1JlZiA9IFJlYWN0LmNyZWF0ZVJlZihudWxsKTtcclxuICAgICAgICB0aGlzLmFib3V0UmVmID0gUmVhY3QuY3JlYXRlUmVmKG51bGwpO1xyXG4gICAgICAgIHRoaXMuY29udGFjdFJlZiA9IFJlYWN0LmNyZWF0ZVJlZihudWxsKTtcclxuICAgICAgICB0aGlzLmNsb2NrUmVmID0gUmVhY3QuY3JlYXRlUmVmKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNjcm9sbEJlaGF2aW9yICgpIHtcclxuICAgICAgICBbdGhpcy5zb2x1dGlvbnNSZWYuY3VycmVudCwgdGhpcy5TZXJ2aWNlc1JlZi5jdXJyZW50LCB0aGlzLndvcmtSZWYuY3VycmVudCwgdGhpcy5hYm91dFJlZi5jdXJyZW50LCB0aGlzLmNvbnRhY3RSZWYuY3VycmVudF0uZm9yRWFjaChyZWYgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVmKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja0lzSW5WaWV3cG9ydChyZWYsIChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzICYmICFyZWYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc3RhdHVzICYmIHJlZi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aHJvdHRsZSh0aGlzLmhhbmRsZVNjcm9sbCwgMTAwKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgIGxvYWRGb250KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2V0U2Nyb2xsWSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICBpZiAoc2Nyb2xsVG9wIDwgdGhpcy5wcm9wcy5zY3JvbGxZIHx8IHNjcm9sbFRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5zaG93SGVhZGVyICYmIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dIZWFkZXIgJiYgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaG93SGVhZGVyOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2Nyb2xsWShzY3JvbGxUb3ApO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsQmVoYXZpb3IoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCwgc2V0Q2xpZW50V2lkdGgsIHNldENsaWVudEhlaWdodCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBkY193aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICBjbGllbnRXaWR0aCAhPSBkY193aWR0aCAmJiBzZXRDbGllbnRXaWR0aChkY193aWR0aCk7XHJcbiAgICAgICAgY29uc3QgZGNfaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICBjbGllbnRIZWlnaHQgIT0gZGNfaGVpZ2h0ICYmIHNldENsaWVudEhlaWdodChkY19oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsQmVoYXZpb3IoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYnVpbGRDb250ZXh0KHN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHIuc3BsaXQoJycpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Db250ZW50VGltZXIgPSBudWxsO1xyXG4gICAgc2V0T3BlbkNvbnRlbnQoc3RhdHVzKSB7XHJcbiAgICAgICAgY29uc3QgeyBzZXRJc0FwcE9wZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgLy8gdGhpcy5vcGVuQ29udGVudFRpbWVyID0gZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGVuQ29udGVudDogc3RhdHVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0SXNBcHBPcGVuKHN0YXR1cyk7XHJcbiAgICAgICAgLy8gfSwgMzAwKSgpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xyXG4gICAgICAgIC8vIOS9oOWQjOagt+WPr+S7peWwhumUmeivr+aXpeW/l+S4iuaKpee7meacjeWKoeWZqCAgXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNhdWdodCBhbiBlcnJvciBpbiBFcnJvckJvdW5kYXJ5XCIsIGVycm9yLCBlcnJvckluZm8pO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlU2hvd1Njcm9sbFZpZXcoc3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dTY3JvbGxWaWV3OiBzdGF0dXNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLm9wZW5Db250ZW50VGltZXIgJiYgdGhpcy5vcGVuQ29udGVudFRpbWVyLmNhbmNlbCgpOyBcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZWxvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgLy8gY29uc3QgeyBpc1BDLCBzY3JvbGxZLCBpc0FwcE9wZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e319PlxyXG4gICAgICAgICAgICAgICAgPEdvb2dsZUNvbnNlbnQ+PC9Hb29nbGVDb25zZW50PlxyXG4gICAgICAgICAgICAgICAgPEhvdmVyQ3Vyc29yQm94PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3BlbkNvbnRlbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJNZW51cyBoaWRlPXshdGhpcy5zdGF0ZS5zaG93SGVhZGVyfSBhY3RpdmVwYWdlPVwiaG9tZVwiPjwvSGVhZGVyTWVudXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZGluZ1NlY3Rpb24gb3BlbkNvbnRlbnQ9e3RoaXMuc3RhdGUub3BlbkNvbnRlbnR9PjwvTGFuZGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbHV0aW9uc1wiIHJlZj17dGhpcy5zb2x1dGlvbnNSZWZ9PjxTb2x1dGlvbnNTZWN0aW9uVjA2MDQgb3BlbkNvbnRlbnQ9e3RoaXMuc3RhdGUub3BlbkNvbnRlbnR9PjwvU29sdXRpb25zU2VjdGlvblYwNjA0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlc1wiIHJlZj17dGhpcy5TZXJ2aWNlc1JlZn0+PFNlcnZpY2VTZWN0aW9uPjwvU2VydmljZVNlY3Rpb24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50cy1zZWN0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnRzLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsaWVudHMgbm9zaG93dGV4dD17dHJ1ZX0vPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0JyByZWY9e3RoaXMud29ya1JlZn0+PFByb2plY3RTZWN0aW9uPjwvUHJvamVjdFNlY3Rpb24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5jbG9ja1JlZn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlbG9hZGluZyAgPyA8UmVkaXJlY3RMb2FkaW5nIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8Lz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDw+PFByZWxvYWQgb25PcGVuPXt2ID0+IHRoaXMuc2V0T3BlbkNvbnRlbnQodil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJlbG9hZD48ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48aDE+Jm5ic3A7PC9oMT48L2Rpdj48Lz59XHJcbiAgICAgICAgICAgICAgICA8L0hvdmVyQ3Vyc29yQm94PlxyXG4gICAgICAgICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+KTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzUEM6IHN0YXRlLmNsaWVudFNsaWNlLmlzUEMsXHJcbiAgICAgICAgaXNUYWJsZXQ6IHN0YXRlLmNsaWVudFNsaWNlLmlzVGFibGV0LFxyXG4gICAgICAgIGlzQXBwT3Blbjogc3RhdGUuYmFzZVNsaWNlLmlzQXBwT3BlbixcclxuICAgICAgICBwYWdlbG9hZGluZzogc3RhdGUuYmFzZVNsaWNlLnJlZGlyZWN0bG9hZGluZyxcclxuICAgICAgICBzY3JvbGxZOiBzdGF0ZS5zY3JvbGxTbGljZS5zY3JvbGxZLFxyXG4gICAgICAgIGNsaWVudFdpZHRoOiBzdGF0ZS5jbGllbnRTbGljZS5jbGllbnRXaWR0aCxcclxuICAgICAgICBjbGllbnRIZWlnaHQ6IHN0YXRlLmNsaWVudFNsaWNlLmNsaWVudEhlaWdodCxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBzZXRDbGllbnRXaWR0aCxcclxuICAgIHNldENsaWVudEhlaWdodCxcclxuICAgIHNldFNjcm9sbFksXHJcbiAgICBzZXRJc0FwcE9wZW5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgbGF6eUFjdCB9IGZyb20gJ0AvdXRpbHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcyc7XHJcbmltcG9ydCBWaWRlb1Njcm9sbFZpZXcgZnJvbSAnLi9lZmZlY3QvVmlkZW9TY3JvbGxWaWV3JztcclxuLy8gaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xyXG4vLyBpbXBvcnQgUmlwcGxlQnRuIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvUmlwcGxlQnRuJztcclxuaW1wb3J0IHsgc2V0RGlyZWN0VXJsLCBlbmFibGVSZWRpcmVjdExvYWRpbmcgfSBmcm9tICdAL3N0b3JlL2Jhc2VTbGljZSc7XHJcblxyXG5jbGFzcyBMYW5kaW5nU2VjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGludHJvczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRhZ1RpdGxlOiAnMTQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICd5ZWFycyBvbiB0aGUgbWFya2V0JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRhZ1RpdGxlOiAnNTAwSycsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FwcHMgZG93bmxvYWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGFnVGl0bGU6ICc1MDAwKycsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0RBVScsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgc2VsZWN0ZWRJbmRleDogMCxcclxuICAgICAgZmFkZUluOiBmYWxzZSxcclxuICAgICAgZmFkZU91dDogZmFsc2UsXHJcbiAgICAgIHNob3dUZXh0OiBmYWxzZSxcclxuICAgIH1cclxuICAgIHRoaXMuY29udGVudFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5pbnRlclRpbWVyID0gbnVsbDtcclxuICB9XHJcbiAgYW5pbWF0ZVRleHQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1RleHQ6IHRydWUgfSk7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVmZmVjdC10ZXh0IC5sZXR0ZXJzJykpIHtcclxuICAgICAgYW5pbWUudGltZWxpbmUoeyBsb29wOiBmYWxzZSB9KVxyXG4gICAgICAgIC5hZGQoe1xyXG4gICAgICAgICAgdGFyZ2V0czogJy5lZmZlY3QtdGV4dCAubGluZScsXHJcbiAgICAgICAgICBzY2FsZVk6IFswLCAxXSxcclxuICAgICAgICAgIG9wYWNpdHk6IFswLjUsIDFdLFxyXG4gICAgICAgICAgZWFzaW5nOiBcImVhc2VPdXRFeHBvXCIsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjgwXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYWRkKHtcclxuICAgICAgICAgIHRhcmdldHM6ICcuZWZmZWN0LXRleHQgLmxpbmUnLFxyXG4gICAgICAgICAgdHJhbnNsYXRlWDogWzAsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZmZlY3QtdGV4dCAubGV0dGVycycpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgMTBdLFxyXG4gICAgICAgICAgZWFzaW5nOiBcImVhc2VPdXRFeHBvXCIsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjgwLFxyXG4gICAgICAgICAgZGVsYXk6IDgwXHJcbiAgICAgICAgfSkuYWRkKHtcclxuICAgICAgICAgIHRhcmdldHM6ICcuZWZmZWN0LXRleHQgLmxldHRlcicsXHJcbiAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICBlYXNpbmc6IFwiZWFzZU91dEV4cG9cIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICBvZmZzZXQ6ICctPTc3NScsXHJcbiAgICAgICAgICBkZWxheTogKGVsLCBpKSA9PiAyMCAqIChpICsgMSlcclxuICAgICAgICB9KS5maW5pc2hlZC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuYW5pbWF0ZVRleHRSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdiZy10ZXh0LWFuaW1hdGlvbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuYW5pbWF0ZVRleHQoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5pbnRlclRpbWVyLmNhbmNlbCgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRDb250ZXh0KHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJyk7XHJcbiAgfVxyXG4gIHJlbmRlcklubGluZUxldHRlciAoc3RyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5idWlsZENvbnRleHQoc3RyKS5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgaWYgKHYgPT09ICcgJykge1xyXG4gICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJsZXR0ZXJcIiBrZXk9e2l9PiZuYnNwOzwvc3Bhbj5cclxuICAgICAgfSBlbHNlIGlmICh2ID09PSAnXycpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxldHRlci1saW5lXCIga2V5PXtpfSBzdHlsZT17eyBoZWlnaHQ6ICcwcHgnIH19PjwvZGl2PlxyXG4gICAgICByZXR1cm4gKDxzcGFuIGNsYXNzTmFtZT1cImxldHRlclwiIGtleT17aX0+e3Z9PC9zcGFuPilcclxuICAgIH0pO1xyXG4gIH1cclxuICByZWRpcmVjdFRvID0gKHVybCkgPT4ge1xyXG4gICAgY29uc3QgeyBzZXREaXJlY3RVcmwsIGVuYWJsZVJlZGlyZWN0TG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGVuYWJsZVJlZGlyZWN0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldERpcmVjdFVybCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZVRleHRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJsYW5kaW5nXCIgY2xhc3NOYW1lPVwiY29udGVudCBjb21tb24tY2VudGVyLWJveFwiIHJlZj17dGhpcy5jb250ZW50UmVmfT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtbXCJlZmZlY3QtdGV4dCBteS0wIHBiLTBcIiwgdGhpcy5zdGF0ZS5zaG93VGV4dCA/ICdzaG93JyA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxldHRlcnNcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd29yZFdyYXA6ICdub3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJJbmxpbmVMZXR0ZXIoJ0NyYWZ0aW5nICcpIH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHdvcmRXcmFwOiAnbm93cmFwJyB9fT5cclxuICAgICAgICAgICAgICB7IHRoaXMucmVuZGVySW5saW5lTGV0dGVyKCdEaWdpdGFsICcpIH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gcmVmPXt0aGlzLmFuaW1hdGVUZXh0UmVmfSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd29yZFdyYXA6ICdub3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5saW5lTGV0dGVyKCdFeHBlcmllbmNlcycpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlci1saW5lXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMHB4JyB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd29yZFdyYXA6ICdub3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5saW5lTGV0dGVyKCdUaGF0ICcpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd29yZFdyYXA6ICdub3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5saW5lTGV0dGVyKCdJbnR1aXQsICcpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd29yZFdyYXA6ICdub3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5saW5lTGV0dGVyKCdJbnNwaXJlICcpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd29yZFdyYXA6ICdub3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5saW5lTGV0dGVyKCdhbmQgJyl9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3b3JkV3JhcDogJ25vd3JhcCcgfX0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbmxpbmVMZXR0ZXIoJ0VuZ2FnZScpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFubmVyIHB0LTBcIj5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYW5uZXItbGVmdFwiPlxyXG4gICAgICAgICAgICA8dGFibGUgY2VsbFNwYWNpbmc9XCIwXCIgY2VsbFBhZGRpbmc9XCIwXCIgYm9yZGVyPVwiMFwiPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaW50cm9zLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICBpID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXggPyA8dGJvZHkga2V5PXtpfSBjbGFzc05hbWU9e1widGJsLWl0ZW0gXCIgKyAoaSA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4ID8gXCJzZWxlY3RlZFwiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YmwtdGFnLWJveCBjaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1widGJsLXRhZ1wiLCB0aGlzLnN0YXRlLmZhZGVJbiA/IFwiZmFkZS1pblwiIDogbnVsbCwgdGhpcy5zdGF0ZS5mYWRlT3V0ID8gXCJmYWRlLW91dFwiIDogbnVsbF0uam9pbignICcpfT57di50YWdUaXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1widGJsLWRlc2NyaXB0aW9uXCIsIHRoaXMuc3RhdGUuZmFkZUluID8gXCJmYWRlLWluXCIgOiBudWxsLCB0aGlzLnN0YXRlLmZhZGVPdXQgPyBcImZhZGUtb3V0XCIgOiBudWxsXS5qb2luKCcgJyl9Pnt2LmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PiA6IG51bGwpKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhbm5lci1yaWdodFwiPlxyXG4gICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCIgY2VsbFNwYWNpbmc9XCIwXCIgYm9yZGVyPVwiMFwiIGNlbGxQYWRkaW5nPVwiMFwiPlxyXG4gICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGJyLWRlc2NyaXB0aW9uIHRleHQtbGV4ZW5kXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDAsIHBhZGRpbmdSaWdodDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIFdlIGJ1aWxkIGVuZ2FnaW5nIGFwcHMsIHdlYnNpdGVzICYgaW5ub3ZhdGl2ZSBlQ29tbWVyY2Ugc29sdXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhbm5lci1ib3R0b21cIj5cclxuICAgICAgICAgICAgey8qIDxSaXBwbGVCdG4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wbGF5LXZpZGVvIHRoZW1lLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVkaXJlY3RUbygnaHR0cHM6Ly9kZXYuYXBwaWZ5LmNjJyl9PkFwcGlmeTwvUmlwcGxlQnRuPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFZpZGVvU2Nyb2xsVmlldz48L1ZpZGVvU2Nyb2xsVmlldz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz4pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNsaWVudFdpZHRoOiBzdGF0ZS5jbGllbnRTbGljZS5jbGllbnRXaWR0aCxcclxuICBpc1BDOiBzdGF0ZS5jbGllbnRTbGljZS5pc1BDLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICBzZXREaXJlY3RVcmwsXHJcbiAgZW5hYmxlUmVkaXJlY3RMb2FkaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTGFuZGluZ1NlY3Rpb24pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuLi8uLi9wcm9qZWN0cy9jb21wb25lbnRzL1Byb2plY3RMaXN0XCI7XHJcbmltcG9ydCBQcm9qZWN0RGF0YSBmcm9tIFwiQC9kYXRhL3Byb2plY3RzXCI7XHJcbmltcG9ydCBSaXBwbGVCdG4gZnJvbSBcIkAvY29tbW9uL2NvbXBvbmVudHMvUmlwcGxlQnRuXCI7XHJcbmltcG9ydCB7IHNldERpcmVjdFVybCwgZW5hYmxlUmVkaXJlY3RMb2FkaW5nIH0gZnJvbSAnQC9zdG9yZS9iYXNlU2xpY2UnO1xyXG5cclxuY2xhc3MgUHJvamVjdFNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgUHJvamVjdERhdGE6IFByb2plY3REYXRhLnNsaWNlKDAsIDYpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlZGlyZWN0V29ya0RldGFpbCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdG5hbWUgPSBwcm9qZWN0LmFsaWFzO1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RUb1VybChgL3Byb2plY3RzLyR7cHJvamVjdG5hbWV9YCk7XHJcbiAgICB9XHJcbiAgICByZWRpcmVjdFRvVXJsID0gKHVybCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0RGlyZWN0VXJsKHVybCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVSZWRpcmVjdExvYWRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3RcIiBjbGFzc05hbWU9XCJwcm9qZWN0LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1zZWN0aW9uLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXNlY3Rpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdExpc3QgcHJvamVjdExpc3Q9e3RoaXMuc3RhdGUuUHJvamVjdERhdGF9IG9wZW5EZXRhaWw9eyhwcm9qZWN0KSA9PiB0aGlzLnJlZGlyZWN0V29ya0RldGFpbChwcm9qZWN0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtcHJvamVjdHMtdGl0bGUgcHktMCBteS0wIHNlY3Rpb24tc3ViamVjdFwiPlByb2plY3RzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJvamVjdExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1zZWN0aW9uLWJ0bi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmlwcGxlQnRuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lIHByb2plY3Qtc2VjdGlvbi1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVkaXJlY3RUb1VybChcIi9wcm9qZWN0c1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5WaWV3IE1vcmU8L1JpcHBsZUJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge307XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0RGlyZWN0VXJsOiAodXJsKSA9PiBkaXNwYXRjaChzZXREaXJlY3RVcmwodXJsKSksXHJcbiAgICAgICAgZW5hYmxlUmVkaXJlY3RMb2FkaW5nOiAobG9hZGluZykgPT4gZGlzcGF0Y2goZW5hYmxlUmVkaXJlY3RMb2FkaW5nKGxvYWRpbmcpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2plY3RTZWN0aW9uKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBsYXp5IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGx1c1N3aXRjaFN1YiBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL1BsdXNTd2l0Y2hTdWInO1xyXG5pbXBvcnQgUmlwcGxlQnRuIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvUmlwcGxlQnRuJztcclxuLy8gaW1wb3J0IExvZ29MaXN0Qm94IGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvTG9nb0xpc3RCb3gnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHNldERpcmVjdFVybCwgZW5hYmxlUmVkaXJlY3RMb2FkaW5nIH0gZnJvbSAnQC9zdG9yZS9iYXNlU2xpY2UnO1xyXG5pbXBvcnQgY2xpZW50c0RhdGEgZnJvbSAnQC9kYXRhL2NsaWVudHMnO1xyXG5cclxuY29uc3QgbmV3QnJhbmRMaXN0ID0gY2xpZW50c0RhdGEubWFwKGl0ZW0gPT4gaXRlbS5sb2dvKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG5cclxuY2xhc3MgU2VydmljZVNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXHJcbiAgICAgICAgICAgIHN1YmplY3RMaXN0OiBbXHJcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdXZWIgRGVzaWduJywgaWNvbjogJ2ZhLWh0bWw1JywgZGVzYzogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCB1dCBlbGl0IG5lYyB2ZWxpdCB0cmlzdGlxdWUgcG9zdWVyZS4nfSxcclxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ1dlYiBEZXZlbG9wbWVudCcsIGljb246ICdmYS1jb2RlJywgZGVzYzogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCB1dCBlbGl0IG5lYyB2ZWxpdCB0cmlzdGlxdWUgcG9zdWVyZS4nfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBicmFuZExpc3Q6IG5ld0JyYW5kTGlzdCxcclxuICAgICAgICAgICAgc2hvd0JyYW5kTGlzdDogW10sXHJcbiAgICAgICAgICAgIHRlbXBTaG93QnJhbmRMaXN0OiBbXSxcclxuICAgICAgICAgICAgbGVzc1Nob3dCcmFuZExpc3Q6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4Um93OiBbMCwgMV0sXHJcbiAgICAgICAgICAgIGNoYW5nZVN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duSW5kZXg6IG51bGwsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhTdHlsZToge2hlaWdodDogMH0sXHJcbiAgICAgICAgICAgIGFuaW1hdGluZzogJ2Nsb3NlZCcsXHJcbiAgICAgICAgICAgIGl0ZW1XaWR0aFJvd3M6IFtdLFxyXG4gICAgICAgICAgICBkcm9wZG93bkxpc3Q6IFtcclxuICAgICAgICAgICAgICAgIHsgdGl0bGU6ICdCcmFuZGluZycsIGRlc2NyaXB0aW9uOiA8cD5BIGJyYW5kIGlzIG1vcmUgdGhhbiBqdXN0IGEgbG9nbyBhbmQgY29sb3IgcGFsZXR0ZS4gV2UnbGwgY3JhZnQgYSBkaXN0aW5jdCB2aXN1YWwgYW5kIHZlcmJhbCBpZGVudGl0eSwgY3JlYXRlIG5lY2Vzc2FyeSBhc3NldHMsIGFuZCBlc3RhYmxpc2ggY2xlYXIgYnJhbmQgZ3VpZGVsaW5lcyB0byBtYWludGFpbiBjb25zaXN0ZW5jeSBhY3Jvc3MgYWxsIHRvdWNocG9pbnRzLjwvcD4sIGljb246ICcuL2Fzc2V0cy9pbWcvc2VydmljZS9kcm9wZG93bmxpc3QvQnJhbmRpbmcud2VicCcgfSxcclxuICAgICAgICAgICAgICAgIHsgdGl0bGU6ICdEaWdpdGFsIFByb2R1Y3RzJywgZGVzY3JpcHRpb246IDxwPldlIGNvbmNlbnRyYXRlcyBvbiBkZXNpZ25pbmcgYXV0aGVudGljIGNvbm5lY3Rpb25zIHRocm91Z2ggdGhlIHVzZSBvZiBib3RoIGFlc3RoZXRpY3MgYW5kIGJlaGF2aW9yYWwgc2NpZW5jZS4gT3VyIHRlYW0gZGVsaXZlciBlbmdhZ2luZyBkaWdpdGFsIHByb2R1Y3RzIHRoYXQgaGVscCBicmFuZHMgdGhyaXZlIGluIHRoZSBtb2Rlcm4gZWNvbm9teS48L3A+LCBpY29uOiAnLi9hc3NldHMvaW1nL3NlcnZpY2UvZHJvcGRvd25saXN0L0RpZ2l0YWwgUHJvZHVjdHMud2VicCd9LFxyXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogJ1dlYnNpdGVzJywgZGVzY3JpcHRpb246IDxwPkEgbW9kZXJuIGJyYW5kIGlzIGRlZmluZWQgYnkgaXRzIGRpZ2l0YWwgcHJlc2VuY2UsIHN0YXJ0aW5nIHdpdGggdGhlIHdlYnNpdGUuIFdlIGZvY3VzIG9uIGNyZWF0aW5nIHdlYnNpdGVzIHRoYXQgZWZmZWN0aXZlbHkgY29udmV5IHRoZSBicmFuZCdzIGlkZW50aXR5IGFuZCBwZXJzcGVjdGl2ZSBmb3IgYW4gZW5oYW5jZWQgdXNlciBleHBlcmllbmNlLjwvcD4sIGljb246ICcuL2Fzc2V0cy9pbWcvc2VydmljZS9kcm9wZG93bmxpc3QvV2Vic2l0ZXMud2VicCd9LFxyXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogJ0RldmVsb3BtZW50JywgZGVzY3JpcHRpb246IDxwPk91ciB3ZWIgYW5kIG1vYmlsZSBhcHAgZGV2ZWxvcGVycyBhcmUgY29tbWl0dGVkIHRvIGFjaGlldmluZyB2aXN1YWwgYW5kIHBlcmZvcm1hbmNlIGV4Y2VsbGVuY2UuIEZyb20gdGhlIGJhY2tlbmQgdG8gdGhlIGZyb250ZW5kLCB3ZSBwcmlvcml0aXplIGRlbGl2ZXJpbmcgYSBzZWFtbGVzcyBhbmQgZW5qb3lhYmxlIHVzZXIgZXhwZXJpZW5jZSBvbiBhbGwgZGV2aWNlcy48L3A+LCBpY29uOiAnLi9hc3NldHMvaW1nL3NlcnZpY2UvZHJvcGRvd25saXN0L0RldmVsb3BtZW50LndlYnAnfSxcclxuICAgICAgICAgICAgICAgIHsgdGl0bGU6ICdDb250ZW50JywgZGVzY3JpcHRpb246IDxwPkNvbnRlbnQgaXMgYSBjcnVjaWFsIGFzcGVjdCBvZiB0aGUgdXNlciBleHBlcmllbmNlLCBhbmQgd2Ugb2ZmZXIgYSByYW5nZSBvZiBzZXJ2aWNlcyB0byBzdXBwb3J0IHRoaXMsIGluY2x1ZGluZyBjb3B5d3JpdGluZywgaWxsdXN0cmF0aW9uLCBncmFwaGljcywgaWNvbm9ncmFwaHksIGludGVyYWN0aW9uLCB2aWRlbyBwcm9kdWN0aW9uLjwvcD4sIGljb246ICcuL2Fzc2V0cy9pbWcvc2VydmljZS9kcm9wZG93bmxpc3Qvd2ViLWRlc2lnbi53ZWJwJ30sXHJcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiAnQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UnLCBkZXNjcmlwdGlvbjogPHA+V2Ugc3RyYXRlZ2ljYWxseSBpbnRlZ3JhdGVzIEFJLCBvcHRpbWl6aW5nIHByb2Nlc3NlcywgYW5kIGVsZXZhdGluZyBkaWdpdGFsIHByb2R1Y3RzLjwvcD4sIGljb246ICcuL2Fzc2V0cy9pbWcvc2VydmljZS9kcm9wZG93bmxpc3QvQXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UuanBnJ30sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGZpcnN0Q2xpY2s6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbGxhcHNlUmVmcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGVzY1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VUaW1lciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJc1NlbGVjdGVkID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleFJvdy5pbmNsdWRlcyhpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGVjdEl0ZW1zIChpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VSZWZzW2luZGV4XSA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBidWlsZENvbGxhcHNlTGlzdEl0ZW1IZWlnaHRBdHRycyAoaW5kZXgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZVJlZnNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VSZWZzW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2JpbmQtaGVpZ2h0JywgdGhpcy5jb2xsYXBzZVJlZnNbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIC8vICAgICB0aGlzLmNvbGxhcHNlUmVmcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYnVpbGRDb2xsYXBzZUxpc3RJdGVtSGVpZ2h0QXR0cnMoaW5kZXgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgaGFuZGxlQ29sbGFwc2UgKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZVJlZnMubWFwKChfaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZENvbGxhcHNlTGlzdEl0ZW1IZWlnaHRBdHRycyhpbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZHJvcGRvd25JbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3Bkb3duSW5kZXg6IG51bGwgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3Bkb3duSW5kZXg6IGluZGV4LCBmaXJzdENsaWNrOiBmYWxzZSwgYW5pbWF0aW5nOiAncGVuZGluZycgfSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbGxhcHNlVGltZXIpIHRoaXMuY29sbGFwc2VUaW1lci5jYW5jZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZVRpbWVyID0gZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuaW1hdGluZzogJ2xvYWRpbmcnIH0pO1xyXG4gICAgICAgICAgICAgICAgISF0aGlzLmNvbGxhcHNlVGltZXIgJiYgdGhpcy5jb2xsYXBzZVRpbWVyLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZVRpbWVyID0gZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRpbmc6ICdjbG9zZWQnIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwKSgpO1xyXG4gICAgICAgICAgICB9LCAzMDApKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVkaXJlY3RUbyA9ICh1cmwpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNldERpcmVjdFVybCwgZW5hYmxlUmVkaXJlY3RMb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGVuYWJsZVJlZGlyZWN0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXREaXJlY3RVcmwodXJsKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcclxuICAgICAgICAhIXRoaXMudGltZXIgJiYgdGhpcy50aW1lci5jYW5jZWwoKTtcclxuICAgICAgICAhIXRoaXMuY29sbGFwc2VUaW1lciAmJiB0aGlzLmNvbGxhcHNlVGltZXIuY2FuY2VsKCk7XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZVJlZnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDbGFzc05hbWUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXCJzc2NzLWxpc3QtaXRlbVwiLCBcImFuaW1hdGUtc2xpZGVJbkRvd24gIGRlbGF5LTEtXCIgKyAoaW5kZXggKyAwKSArIFwic1wiLCB0aGlzLmNoZWNrSXNTZWxlY3RlZChpbmRleCkgPyBcImFjdGl2ZVwiIDogXCJcIiwgdGhpcy5zdGF0ZS5kcm9wZG93bkluZGV4ID09PSBpbmRleCA/IFwicmVhZFwiIDogbnVsbF0uam9pbignICcpO1xyXG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTWF0Y2hTdHlsZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpbmRleCA9PSB0aGlzLnN0YXRlLmRyb3Bkb3duSW5kZXggPyB7IGhlaWdodDogdGhpcy5zdGF0ZS5hbmltYXRpbmcgPT0gJ3BlbmRpbmcnID8gMTAwICsgJ3B4JyA6IFxyXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS5hbmltYXRpbmcgPT0gJ2xvYWRpbmcnID8gJ2F1dG8nIDogdGhpcy5jb2xsYXBzZVJlZnNbaW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodClcclxuICAgICAgICB9IDogeyBoZWlnaHQ6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IGRlYm91bmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDb2xsYXBzZSgwKTtcclxuICAgICAgICB9LCAzMDApKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IHsgY2xpZW50V2lkdGgsIGlzUEMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2Utc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtc2xpZGVJbkRvd24gc2VjdGlvbi1zdWJqZWN0XCI+IFNlcnZpY2VzPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1zZWN0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2Utc2VjdGlvbi1jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2Utc2VjdGlvbi1jb250ZW50LWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzc2NkLWludHJvIGFuaW1hdGUtc2xpZGVJbkRvd24gdGV4dC1sZXhlbmRcIiBzdHlsZT17e2FuaW1hdGlvbkRlbGF5OiBcIjAuNnNcIn19IHJlZj17dGhpcy5kZXNjUmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZSBidWlsZCBpbnR1aXRpdmUgYW5kIHRyYW5zZm9ybWF0aXZlIGRpZ2l0YWwgZXhwZXJpZW5jZXMgZm9yIHRoZSBicmFuZHMgYnkgYmxlbmRpbmcgQUksIGRlc2lnbiBhbmQgdGVjaG5vbG9neS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLXNlY3Rpb24tY29udGVudC1zdWJqZWN0Ym94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzc2NzLWxpc3QnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZHJvcGRvd25MaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17dGhpcy5nZXRDbGFzc05hbWUoaW5kZXgpfSBzdHlsZT17e2FuaW1hdGlvbkRlbGF5OiAoaW5kZXggKiAwLjA3ICsgMC42KSArIFwic1wifX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDb2xsYXBzZS5iaW5kKHRoaXMpKGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzc2NzLWxpc3QtaXRlbS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzU3dpdGNoU3ViIGFjdGl2ZT17dGhpcy5zdGF0ZS5kcm9wZG93bkluZGV4ID09PSBpbmRleH0gZmlyc3RDbGljaz17dGhpcy5zdGF0ZS5pc0ZpcnN0Q2xpY2t9IC8+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Njcy1saXN0LWl0ZW0tZGVzYyB0ZXh0LWxleGVuZFwiIHJlZj17KGVsKSA9PiB0aGlzLmNvbGxlY3RJdGVtcyhpbmRleCwgZWwpfSBzdHlsZT17dGhpcy5yZW5kZXJNYXRjaFN0eWxlKGluZGV4KX0+e2l0ZW0uZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlLXNlY3Rpb24tY29udGFpbmVyLWFkZGl0aW9uIGJ0bi1ncm91cCB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJpcHBsZUJ0biBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZWQgcmlwcGxlLWVmZmVjdC1yZXZlcnNlLWJ0bicgb25DbGljaz17KCkgPT4gdGhpcy5yZWRpcmVjdFRvKCcuL3NlcnZpY2VzJyl9Pk91ciBTZXJ2aWNlczwvUmlwcGxlQnRuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLXNlY3Rpb24tYnJhbmQtbW9yZSBzZXJ2aWNlLXNlY3Rpb24tYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtc2xpZGVJbkRvd24gc2VjdGlvbi1zdWJqZWN0XCIgc3R5bGU9e3twYWRkaW5nTGVmdDogXCIwcHhcIiwgcGFkZGluZ1JpZ2h0OiBcIjBweFwiLCBwYWRkaW5nQm90dG9tOiAnNjBweCd9fT5DbGllbnRzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ29MaXN0Qm94IGxpc3Q9e3RoaXMuc3RhdGUuYnJhbmRMaXN0fSBsaXN0Q2xhc3NOYW1lPVwic2VydmljZS1zZWN0aW9uLWJyYW5kLWxpc3RcIiBsaXN0SXRlbUNsYXNzTmFtZT1cInNlcnZpY2Utc2VjdGlvbi1icmFuZC1pdGVtXCIgc2hvd0Ftb3VudD1cIjEyXCIgd2FpdEFtb3VudD1cIjRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsaWVudFdpZHRoOiBzdGF0ZS5jbGllbnRTbGljZS5jbGllbnRXaWR0aCxcclxuICAgICAgICBpc1BDOiBzdGF0ZS5jbGllbnRTbGljZS5pc1BDLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIHNldERpcmVjdFVybCxcclxuICAgIGVuYWJsZVJlZGlyZWN0TG9hZGluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlcnZpY2VTZWN0aW9uKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyBsYXp5QWN0IH0gZnJvbSAnQC91dGlscy9pbmRleCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSaXBwbGVCdG4gZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9SaXBwbGVCdG4nO1xyXG4vLyBpbXBvcnQgSG92ZXJDdXJzb3JCb3ggZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9Ib3ZlckN1cnNvckJveCc7XHJcbmltcG9ydCB7IHNldERpcmVjdFVybCwgZW5hYmxlUmVkaXJlY3RMb2FkaW5nIH0gZnJvbSAnQC9zdG9yZS9iYXNlU2xpY2UnO1xyXG5cclxuY2xhc3MgU29sdXRpb25zU2VjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXHJcbiAgICAgIGZhZGVJbjogZmFsc2UsXHJcbiAgICAgIGZhZGVPdXQ6IGZhbHNlLFxyXG4gICAgICAvLyBzaG93VGV4dDogZmFsc2UsXHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRlbnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB9XHJcbiAgLy8gYW5pbWF0ZVRleHQoKSB7XHJcbiAgLy8gICB0aGlzLnNldFN0YXRlKHsgc2hvd1RleHQ6IHRydWUgfSk7XHJcbiAgLy8gfVxyXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5yZWRpcmVjdFRvKCcvcHJvamVjdHMvYXBwaWZ5Jyk7XHJcbiAgfVxyXG4gIHJlZGlyZWN0VG8gPSAodXJsKSA9PiB7XHJcbiAgICBjb25zdCB7IHNldERpcmVjdFVybCwgZW5hYmxlUmVkaXJlY3RMb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgZW5hYmxlUmVkaXJlY3RMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RGlyZWN0VXJsKHVybCk7XHJcbiAgfVxyXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIC8vICAgdGhpcy5hbmltYXRlVGV4dCgpO1xyXG4gIC8vIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJzb2x1dGlvblwiIGNsYXNzTmFtZT1cImNvbnRlbnQgc29sdXRpb25zLXNlY3Rpb25cIiByZWY9e3RoaXMuY29udGVudFJlZn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2x1dGlvbnMtc2VjdGlvbi1pbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2x1dGlvbnMtc2VjdGlvbi1pbm5lci1pbnRyb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYW5pbWF0ZS1zbGlkZUluRG93biBzZWN0aW9uLXN1YmplY3QgIGRlbGF5LTAtNHMnPlNvbHV0aW9uczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNzaWktc3ViamVjdCBhbmltYXRlLXNsaWRlSW5VcCBkZWxheS0wLTZzXCI+XHJcbiAgICAgICAgICAgIE1vYmlsZSBDb21tZXJjZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzc2lpLWRlc2MgYW5pbWF0ZS1zbGlkZUluVXAgZGVsYXktMC04cyB0ZXh0LWxleGVuZFwiPkFwcGlmeSBpcyBhbiBpbm5vdmF0aXZlIG1vYmlsZSBjb21tZXJjZSBzb2x1dGlvbiB0aGF0IGVtcG93ZXJzIGJyYW5kcyB0byBlZmZvcnRsZXNzIHVuaWZ5IHRoZWlyIG9ubGluZSBhbmQgb2ZmbGluZSBvcGVyYXRpb25zLCBkcml2aW5nIHRoZSBuZXh0IGdlbmVyYXRpb24gb2YgYnVzaW5lc3MgdHJhbnNmb3JtYXRpb24uXHJcbiAgICAgICAgICAgIEVuYWJsaW5nIGJyYW5kcyB0byBzZWxsIGFueXRpbWUsIGFueXdoZXJlIG1vcmUgZWFzaWx5LCBxdWlja2x5IGFuZCBzZWFtbGVzc2x5LjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNzaWMtYnRuLXdyYXBwZXIgYW5pbWF0ZS1mYWRlSW4gZGVsYXktMS0xc1wiPlxyXG4gICAgICAgICAgICAgIHsvKiA8SG92ZXJDdXJzb3JCb3g+ICovfVxyXG4gICAgICAgICAgICAgICAgPFJpcHBsZUJ0biBjbGFzc05hbWU9XCJidG4gYnRuLXBsYXktdmlkZW8gdGhlbWUtYnRuIHJpcHBsZS1lZmZlY3QtYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5EaXNjb3ZlcjwvUmlwcGxlQnRuPlxyXG4gICAgICAgICAgICAgIHsvKiA8L0hvdmVyQ3Vyc29yQm94PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29sdXRpb25zLXNlY3Rpb24taW5uZXItYWRkaXRpb25hbCBhbmltYXRlLXNsaWRlSW5VcCBkZWxheS0wLTlzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29sdXRpb25zLXNlY3Rpb24taW5uZXItYWRkaXRpb25hbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2x1dGlvbnMtc2VjdGlvbi1pbm5lci1hZGRpdGlvbmFsLWl0ZW0taWNvblwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybCguL2Fzc2V0cy9pbWcvc29sdXRpb25zL0FwcGlmeS1zb2x1dGlvbi53ZWJwKSd9fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL3NvbHV0aW9ucy9BcHBpZnktc29sdXRpb24ud2VicFwiIGFsdD1cImlubGluZStwcmV2aWV3XCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc29sdXRpb25zLXNlY3Rpb24tdmlkZW8tc2Nyb2xsLXdyYXBwZXInPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPik7XHJcbiAgfVxyXG59IFxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIC8vIGNsaWVudFdpZHRoOiBzdGF0ZS5jbGllbnRTbGljZS5jbGllbnRXaWR0aCxcclxuICAvLyBpc1BDOiBzdGF0ZS5jbGllbnRTbGljZS5pc1BDLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICBzZXREaXJlY3RVcmwsXHJcbiAgZW5hYmxlUmVkaXJlY3RMb2FkaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU29sdXRpb25zU2VjdGlvbik7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20ncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbi8vIGltcG9ydCB7IGxhenlBY3QsIGNoZWNrSXNJblZpZXdwb3J0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnO1xyXG4vLyBpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbi8vIGltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scyc7XHJcbi8vIGltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyJztcclxuLy8gaW1wb3J0IHsgRFJBQ09Mb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9EUkFDT0xvYWRlcic7XHJcblxyXG5jbGFzcyBWaWRlb1Njcm9sbFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmlkZW9TcmM6ICcvYXNzZXRzL3ZpZGVvL0VCLWludHJvZHVjdGlvbi5tcDQnLFxyXG4gICAgICAgICAgICBpblZpZXdTY3JvbGxUb3A6IDAsXHJcbiAgICAgICAgICAgIGlzT25Nb3VzZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpZGVvU3R5bGU6IHt0cmFuc2Zvcm06ICdzY2FsZSgxLjIzKSd9LFxyXG4gICAgICAgICAgICBjdXJfeDogMCxcclxuICAgICAgICAgICAgY3VyX3k6IDAsXHJcbiAgICAgICAgICAgIHZpZGVvYm94U3R5bGU6IHtjbGlwUGF0aDogJ2luc2V0KDApJ30sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnZpZGVvUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy52aWRlb0NvbnRhaW5lclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgIHRoaXMudmlkZW9MYXlvdXRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICB0aGlzLm1hcmtSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAocHJldlByb3BzLnNjcm9sbFkhPT0gdGhpcy5wcm9wcy5zY3JvbGxZKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQ2hhbmdlU3R5bGUodGhpcy5wcm9wcy5zY3JvbGxZKTtcclxuICAgICAgICAgICAgLy8gY2hlY2tJc0luVmlld3BvcnQoKVxyXG4gICAgICAgICAgICAvLyB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lID0gdGhpcy5wcm9wcy5zY3JvbGxZICogMC4wMDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRWaWRlb0V2ZW50cyA9ICgpID0+IHtcclxuICAgICAgICAvLyB0aGlzLnZpZGVvUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCB0aGlzLm9mZlZpZGVvRnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZExheW91dE1vdXNlT3ZlckV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hcmtUYXJnZXQgPSB0aGlzLm1hcmtSZWYuY3VycmVudDtcclxuICAgICAgICBtYXJrVGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC0yMHB4KSc7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZExheW91dE1vdXNlT3V0RXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFya1RhcmdldCA9IHRoaXMubWFya1JlZi5jdXJyZW50O1xyXG4gICAgICAgIG1hcmtUYXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMCknO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmREZXZpY2VPcmllbnRhdGlvbkV2ZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFya1RhcmdldCA9IHRoaXMubWFya1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnN0IGdhbW1hID0gZXZlbnQuZ2FtbWE7IC8vIExlZnQgdG8gcmlnaHQgdGlsdCBpbiBkZWdyZWVzXHJcbiAgICAgICAgaWYgKGdhbW1hID4gMTUpIHtcclxuICAgICAgICAgICAgbWFya1RhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMjBweCknO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtbWEgPCAtMTUpIHtcclxuICAgICAgICAgICAgbWFya1RhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgyMHB4KSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWFya1RhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pblZpZXdTY3JvbGxUb3AgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5WaWV3U2Nyb2xsVG9wOiB3aW5kb3cuc2Nyb2xsWSArIHRoaXMudmlkZW9Db250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ2hhbmdlU3R5bGUod2luZG93LnNjcm9sbFkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMudmlkZW9SZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgdGhpcy5iaW5kVmlkZW9FdmVudHMpO1xyXG4gICAgICAgIGNvbnN0IExheW91dFRhcmdldCA9IHRoaXMudmlkZW9MYXlvdXRSZWYuY3VycmVudDtcclxuICAgICAgICBMYXlvdXRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5iaW5kTGF5b3V0TW91c2VPdmVyRXZlbnQpO1xyXG4gICAgICAgIExheW91dFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMuYmluZExheW91dE1vdXNlT3V0RXZlbnQpO1xyXG4gICAgICAgIGlmICh3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLmJpbmREZXZpY2VPcmllbnRhdGlvbkV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGV2aWNlIG9yaWVudGF0aW9uIG5vdCBzdXBwb3J0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0luVmlldyA9IChzY3JvbGxZKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvQ29udGFpbmVyUmVmLmN1cnJlbnQpIHJldHVybjtcclxuICAgICAgICBjb25zdCB2aWRlb1JlY3QgPSB0aGlzLnZpZGVvQ29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgdmlkZW9IZWlnaHQgPSB2aWRlb1JlY3QuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHZpZGVvVG9wICAgID0gdmlkZW9SZWN0LnRvcDtcclxuICAgICAgICAvLyBpZiAodmlkZW9Ub3AgPj0gMCAmJiB2aWRlb1RvcCArIHZpZGVvSGVpZ2h0ID49IDApIHtcclxuICAgICAgICAvLyAgICAgaWYgKHZpZGVvVG9wID09IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc3RhdGUuaW5WaWV3U2Nyb2xsVG9wID0gc2Nyb2xsWTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHZpZGVvVG9wID49IDAgJiYgdmlkZW9Ub3ArIHZpZGVvSGVpZ2h0IC8gMiA+PSAwO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvQm90dG9tID0gdmlkZW9SZWN0LmJvdHRvbTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodmlkZW9Ub3AgPD0gMiAvIDMgKiB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgdmlkZW9Cb3R0b20gPj0gMCkge1xyXG4gICAgICAgICAgICAvLyBpZiAodmlkZW9Ub3AgPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdGF0ZS5pblZpZXdTY3JvbGxUb3AgPSBzY3JvbGxZO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmlkZW9Ub3AgPj0gMCAmJiB2aWRlb1RvcCArIHZpZGVvSGVpZ2h0IC8gMiA+PSAwO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyVmFsaWRTY2FsZVJhdGlvID0gKHJhdGlvKSA9PiB7XHJcbiAgICAgICAgaWYgKHJhdGlvIDwgMS4wNikgcmV0dXJuIDEuMDY7XHJcbiAgICAgICAgaWYgKHJhdGlvID4gdGhpcy5tYXhTY2FsZVJhdGlvKSByZXR1cm4gdGhpcy5tYXhTY2FsZVJhdGlvO1xyXG4gICAgICAgIHJldHVybiByYXRpbztcclxuICAgIH1cclxuXHJcbiAgICBtYXhTY2FsZVJhdGlvID0gMS4yMztcclxuXHJcbiAgICBzY3JvbGxDaGFuZ2VTdHlsZSA9IChzY3JvbGxZKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3QgbWF4U2NhbGVSYXRpbyA9IHdpbmRvdy5pbm5lcldpZHRoIC8gdGhpcy52aWRlb0NvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmNoZWNrSW5WaWV3KHNjcm9sbFkpKSB7XHJcbiAgICAgICAgY29uc3QgX3Njcm9sbFkgPSBzY3JvbGxZO1xyXG4gICAgICAgIGlmIChzY3JvbGxZIDwgd2luZG93LmlubmVySGVpZ2h0IC8gNikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHZpZGVvYm94U3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGlwUGF0aDogJ2luc2V0KDApJyxcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgdmlkZW9TdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7dGhpcy5tYXhTY2FsZVJhdGlvICogMTAwfSUpYCxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnMC4xMXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52aWRlb0NvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IDAgJiYgdGhpcy52aWRlb0NvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb1NjYWxlID0gMSArIChfc2Nyb2xsWSAtIHRoaXMuc3RhdGUuaW5WaWV3U2Nyb2xsVG9wKSAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAgICAgICAgIGxldCB2aWRlb1RvU2NhbGUgPSB0aGlzLnJlbmRlclZhbGlkU2NhbGVSYXRpbyh0aGlzLm1heFNjYWxlUmF0aW8gLSAoX3Njcm9sbFkgLSB0aGlzLnN0YXRlLmluVmlld1Njcm9sbFRvcCkgLyB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzUEMgPSB0aGlzLnByb3BzLmNsaWVudFdpZHRoID4gNzY3Ljk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhDbGlwUGF0aFdpZHRoID0gaXNQQyA/ICh3aW5kb3cuaW5uZXJXaWR0aCAqIDguMzMgLyAxMDApIDogMTg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VDbGlwV2lkdGggPSB2aWRlb1NjYWxlICogKG1heENsaXBQYXRoV2lkdGggLyAoaXNQQyA/IDguMzMgLyA1IDogMSkpICogMS44NSAtIDQwO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGlwV2lkdGggPSBNYXRoLm1pbihtYXhDbGlwUGF0aFdpZHRoLCBjaGFuZ2VDbGlwV2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91bmRlZENsaXBXaWR0aCA9IE1hdGgubWluKE1hdGgucm91bmQoY2xpcFdpZHRoICogMC41KSwgNDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIChjbGlwV2lkdGggPT09IG1heENsaXBQYXRoV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB2aWRlb1RvU2NhbGUgPSAxLjA2O1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHt2aWRlb1RvU2NhbGUgKiAxMDB9JSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICcwLjExcycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb2JveFN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBQYXRoOiBpc1BDID8gYGluc2V0KDAgJHtjbGlwV2lkdGh9cHggcm91bmQgJHtyb3VuZGVkQ2xpcFdpZHRofXB4KWAgOiAnaW5zZXQoMCknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TW91c2VQb3MgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgICByZXR1cm4geyB4LCB5IH07XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VNb3ZlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuZ2V0TW91c2VQb3MoZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzT25Nb3VzZTogdHJ1ZSxcclxuICAgICAgICAgICAgY3VyX3g6IHggKyAncHgnLFxyXG4gICAgICAgICAgICBjdXJfeTogeSArICdweCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VMZWF2ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzT25Nb3VzZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlVmlkZW9GdWxsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGlmICh2aWRlby5yZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICB2aWRlby5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW8ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgICAgdmlkZW8ud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHZpZGVvLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2aWRlby5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHZpZGVvLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmVmlkZW9GdWxsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIC8vIHRoaXMudmlkZW9SZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRlZCcsIHRoaXMub2ZmVmlkZW9GdWxsU2NyZWVuKTtcclxuICAgICAgICAvLyB0aGlzLnZpZGVvUmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsIHRoaXMuYmluZFZpZGVvRXZlbnRzKTtcclxuICAgICAgICB0aGlzLnZpZGVvTGF5b3V0UmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5iaW5kTGF5b3V0TW91c2VPdmVyRXZlbnQpO1xyXG4gICAgICAgIHRoaXMudmlkZW9MYXlvdXRSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMuYmluZExheW91dE1vdXNlT3V0RXZlbnQpO1xyXG4gICAgICAgIGlmICh3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudCkge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLmJpbmREZXZpY2VPcmllbnRhdGlvbkV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmlkZW9ib3hSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tc2Nyb2xsLXZpZXdcIiByZWY9e3RoaXMudmlkZW9Db250YWluZXJSZWZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1zY3JvbGwtdmlldy1jb250ZW50XCIgc3R5bGU9e3RoaXMuc3RhdGUudmlkZW9ib3hTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2c3ZjLXZpZGVvIGZ1bGwtd2lkdGhcIiBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBvdmVyZmxvd1g6ICdjbGlwJyB9fSByZWY9e3RoaXMudmlkZW9ib3hSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gcmVmPXt0aGlzLnZpZGVvUmVmfSBtdXRlZCBsb29wIHBsYXlzSW5saW5lIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlIGF1dG9QbGF5PVwiYXV0b3BsYXlcIiBzdHlsZT17dGhpcy5zdGF0ZS52aWRlb1N0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXt0aGlzLnN0YXRlLnZpZGVvU3JjfSB0eXBlPVwidmlkZW8vbXA0XCI+PC9zb3VyY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aWZyYW1lIHJlZj17dGhpcy52aWRlb1JlZn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2N1c3RvbWVyLWV2d2M2N3Z0cGdmOG9vbG4uY2xvdWRmbGFyZXN0cmVhbS5jb20vNjI0NzljY2FmMDI2MDY1YjY2ZTYwNmNiNGM3ZjcxOTAvaWZyYW1lP211dGVkPXRydWUmcHJlbG9hZD10cnVlJmxvb3A9dHJ1ZSZhdXRvcGxheT10cnVlJnBvc3Rlcj1odHRwcyUzQSUyRiUyRmN1c3RvbWVyLWV2d2M2N3Z0cGdmOG9vbG4uY2xvdWRmbGFyZXN0cmVhbS5jb20lMkY2MjQ3OWNjYWYwMjYwNjViNjZlNjA2Y2I0YzdmNzE5MCUyRnRodW1ibmFpbHMlMkZ0aHVtYm5haWwuanBnJTNGdGltZSUzRCUyNmhlaWdodCUzRDYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiIHN0eWxlPXt7IGJvcmRlcjogJ25vbmUnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCBsZWZ0OiAwLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBneXJvc2NvcGU7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IHBpY3R1cmUtaW4tcGljdHVyZTtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lmcmFtZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1zY3JvbGwtdmlldy1vdmVybGF5IGZ1bGwtd2lkdGhcIiBpZD1cInZpZGVvLWxheW91dFwiIHJlZj17dGhpcy52aWRlb0xheW91dFJlZn0gLypvbkNsaWNrPXt0aGlzLm1ha2VWaWRlb0Z1bGxTY3JlZW59Ki8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKnRoaXMuc3RhdGUuaXNPbk1vdXNlID8gPHNwYW4gY2xhc3NOYW1lPVwidGlwLWJveFwiIHN0eWxlPXt7IGxlZnQ6IHRoaXMuc3RhdGUuY3VyX3gsIHRvcDogdGhpcy5zdGF0ZS5jdXJfeSB9fT5QbGF5IFZpZGVvPC9zcGFuPjogbnVsbCovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndnN2by13YXRlci1tYXJrJyByZWY9e3RoaXMubWFya1JlZn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNjcm9sbFk6IHN0YXRlLnNjcm9sbFNsaWNlLnNjcm9sbFksXHJcbiAgICAgICAgY2xpZW50V2lkdGg6IHN0YXRlLmNsaWVudFNsaWNlLmNsaWVudFdpZHRoXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFZpZGVvU2Nyb2xsVmlldyk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IEFwcCBmcm9tICdAL3BhZ2UvaG9tZS9BcHAnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZS9pbmRleCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgKiBhcyBTZW50cnkgZnJvbSBcIkBzZW50cnkvcmVhY3RcIjtcclxuXHJcbi8vIFNlbnRyeS5pbml0KHtcclxuLy8gICAgIGRzbjogXCJodHRwczovLzczZGFkOTEyYzNiMGRiNmI2ODNhODIzMGExZjU3Y2Y1QG8xMDM4NTQ1LmluZ2VzdC51cy5zZW50cnkuaW8vNDUwNzY5NDQwMDg2NDI1NlwiLFxyXG4vLyAgICAgaW50ZWdyYXRpb25zOiBbXHJcbi8vICAgICAgICAgU2VudHJ5LmJyb3dzZXJUcmFjaW5nSW50ZWdyYXRpb24oKSxcclxuLy8gICAgICAgICBTZW50cnkuYnJvd3NlclByb2ZpbGluZ0ludGVncmF0aW9uKCksXHJcbi8vICAgICAgICAgU2VudHJ5LnJlcGxheUludGVncmF0aW9uKCksXHJcbi8vICAgICBdLFxyXG4vLyAgICAgLy8gUGVyZm9ybWFuY2UgTW9uaXRvcmluZ1xyXG4vLyAgICAgdHJhY2VzU2FtcGxlUmF0ZTogMS4wLCAvLyAgQ2FwdHVyZSAxMDAlIG9mIHRoZSB0cmFuc2FjdGlvbnNcclxuLy8gICAgIC8vIFNldCAndHJhY2VQcm9wYWdhdGlvblRhcmdldHMnIHRvIGNvbnRyb2wgZm9yIHdoaWNoIFVSTHMgZGlzdHJpYnV0ZWQgdHJhY2luZyBzaG91bGQgYmUgZW5hYmxlZFxyXG4vLyAgICAgdHJhY2VQcm9wYWdhdGlvblRhcmdldHM6IFtcImxvY2FsaG9zdFwiLCAvXmh0dHBzOlxcL1xcL2ViLXN1aXRlXFwuY29tL10sXHJcbi8vICAgICAvLyBQcm9maWxpbmdcclxuLy8gICAgIHByb2ZpbGVzU2FtcGxlUmF0ZTogMS4wLCAvLyBQcm9maWxlIDEwMCUgb2YgdGhlIHRyYW5zYWN0aW9ucy4gVGhpcyB2YWx1ZSBpcyByZWxhdGl2ZSB0byB0cmFjZXNTYW1wbGVSYXRlXHJcbi8vICAgICAvLyBTZXNzaW9uIFJlcGxheVxyXG4vLyAgICAgcmVwbGF5c1Nlc3Npb25TYW1wbGVSYXRlOiAwLjEsIC8vIFRoaXMgc2V0cyB0aGUgc2FtcGxlIHJhdGUgYXQgMTAlLiBZb3UgbWF5IHdhbnQgdG8gY2hhbmdlIGl0IHRvIDEwMCUgd2hpbGUgaW4gZGV2ZWxvcG1lbnQgYW5kIHRoZW4gc2FtcGxlIGF0IGEgbG93ZXIgcmF0ZSBpbiBwcm9kdWN0aW9uLlxyXG4vLyAgICAgcmVwbGF5c09uRXJyb3JTYW1wbGVSYXRlOiAxLjAsIC8vIElmIHlvdSdyZSBub3QgYWxyZWFkeSBzYW1wbGluZyB0aGUgZW50aXJlIHNlc3Npb24sIGNoYW5nZSB0aGUgc2FtcGxlIHJhdGUgdG8gMTAwJSB3aGVuIHNhbXBsaW5nIHNlc3Npb25zIHdoZXJlIGVycm9ycyBvY2N1ci5cclxuLy8gfSk7XHJcblxyXG5jb25zdCBhcHAgPSBjcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbmFwcC5yZW5kZXIoPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8QXBwIC8+XHJcbjwvUHJvdmlkZXI+KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQbHVzU3dpdGNoU3ViIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaXNGaXJzdENMaWNrIiwiYWN0aXZlIiwiaGFuZGxlQ2xpY2siLCJzZXRTdGF0ZSIsImdldENsYXNzTmFtZSIsImNsYXNzTmFtZSIsImZpcnN0Q2xpY2siLCJqb2luIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInZpZXdCb3giLCJ4MSIsInkxIiwieDIiLCJ5MiIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwibGF6eUFjdCIsIlJpcHBsZUJ0biIsInJpcHBsZSIsImJ1dHRvblJlZiIsImNyZWF0ZVJlZiIsImhhbmRsZU1vdXNlRG93biIsImUiLCJidWlsZFJpcHBsZSIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZXZlbnQiLCJkb2N1bWVudCIsImJ1dHRvbiIsImN1cnJlbnQiLCJidXR0b25SZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZGlhbWV0ZXIiLCJNYXRoIiwibWF4Iiwid2lkdGgiLCJoZWlnaHQiLCJyYWRpdXMiLCJzdHlsZSIsImxlZnQiLCJjbGllbnRYIiwieCIsInRvcCIsImNsaWVudFkiLCJ5IiwiY2xhc3NMaXN0IiwiYWRkIiwidGFyZ2V0IiwiYXBwZW5kQ2hpbGQiLCJ0aGVuIiwib3BhY2l0eSIsInJlbW92ZSIsImNoaWxkcmVuIiwib25DbGljayIsInJlZiIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwib25Nb3VzZUxlYXZlIiwiQXBwQ29udGV4dCIsImNoZWNrSXNJblZpZXdwb3J0IiwibG9hZEZvbnQiLCJIZWFkZXJNZW51cyIsIkxhbmRpbmdTZWN0aW9uIiwiU29sdXRpb25zU2VjdGlvblYwNjA0IiwiU2VydmljZVNlY3Rpb24iLCJQcm9qZWN0U2VjdGlvbiIsIkZvb3RlciIsIlByZWxvYWQiLCJjb25uZWN0Iiwic2V0Q2xpZW50V2lkdGgiLCJzZXRDbGllbnRIZWlnaHQiLCJzZXRTY3JvbGxZIiwic2V0SXNBcHBPcGVuIiwiUmVkaXJlY3RMb2FkaW5nIiwiR29vZ2xlQ29uc2VudCIsInRocm90dGxlIiwiSG92ZXJDdXJzb3JCb3giLCJDbGllbnRzIiwiQXBwIiwib3BlbkNvbnRlbnQiLCJzaG93VGV4dCIsInNob3dIZWFkZXIiLCJzaG93U2Nyb2xsVmlldyIsInNjcm9sbENvbnRlbnRIZWlnaHQiLCJpc1BDIiwiY29udGVudFJlZiIsInNvbHV0aW9uc1JlZiIsIlNlcnZpY2VzUmVmIiwid29ya1JlZiIsImFib3V0UmVmIiwiY29udGFjdFJlZiIsImNsb2NrUmVmIiwiaGFuZGxlU2Nyb2xsQmVoYXZpb3IiLCJmb3JFYWNoIiwic3RhdHVzIiwiY29udGFpbnMiLCJjb21wb25lbnREaWRNb3VudCIsImhhbmRsZVJlc2l6ZSIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwic2Nyb2xsVG9wIiwic2Nyb2xsWSIsImlubmVySGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJkY193aWR0aCIsImRvY3VtZW50RWxlbWVudCIsImRjX2hlaWdodCIsImJ1aWxkQ29udGV4dCIsInN0ciIsInNwbGl0Iiwib3BlbkNvbnRlbnRUaW1lciIsInNldE9wZW5Db250ZW50IiwiYm9keSIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJlcnJvckluZm8iLCJjb25zb2xlIiwiY2hhbmdlU2hvd1Njcm9sbFZpZXciLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNhbmNlbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWdlbG9hZGluZyIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImhpZGUiLCJhY3RpdmVwYWdlIiwibm9zaG93dGV4dCIsIm9uT3BlbiIsInYiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjbGllbnRTbGljZSIsImlzVGFibGV0IiwiaXNBcHBPcGVuIiwiYmFzZVNsaWNlIiwicmVkaXJlY3Rsb2FkaW5nIiwic2Nyb2xsU2xpY2UiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJhbmltZSIsIlZpZGVvU2Nyb2xsVmlldyIsInNldERpcmVjdFVybCIsImVuYWJsZVJlZGlyZWN0TG9hZGluZyIsImludHJvcyIsInRhZ1RpdGxlIiwiZGVzY3JpcHRpb24iLCJzZWxlY3RlZEluZGV4IiwiZmFkZUluIiwiZmFkZU91dCIsImludGVyVGltZXIiLCJhbmltYXRlVGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aW1lbGluZSIsImxvb3AiLCJ0YXJnZXRzIiwic2NhbGVZIiwiZWFzaW5nIiwiZHVyYXRpb24iLCJ0cmFuc2xhdGVYIiwiZGVsYXkiLCJvZmZzZXQiLCJlbCIsImkiLCJmaW5pc2hlZCIsImFuaW1hdGVUZXh0UmVmIiwicmVuZGVySW5saW5lTGV0dGVyIiwibWFwIiwia2V5IiwicmVkaXJlY3RUbyIsInVybCIsImlkIiwiZGlzcGxheSIsIndvcmRXcmFwIiwiY2VsbFNwYWNpbmciLCJib3JkZXIiLCJjZWxsUGFkZGluZyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiUHJvamVjdExpc3QiLCJQcm9qZWN0RGF0YSIsInNsaWNlIiwicmVkaXJlY3RXb3JrRGV0YWlsIiwicHJvamVjdCIsInByb2plY3RuYW1lIiwiYWxpYXMiLCJyZWRpcmVjdFRvVXJsIiwicHJvamVjdExpc3QiLCJvcGVuRGV0YWlsIiwiZGlzcGF0Y2giLCJsb2FkaW5nIiwibGF6eSIsImRlYm91bmNlIiwiY2xpZW50c0RhdGEiLCJuZXdCcmFuZExpc3QiLCJpdGVtIiwibG9nbyIsInNvcnQiLCJyYW5kb20iLCJzdWJqZWN0TGlzdCIsInRpdGxlIiwiaWNvbiIsImRlc2MiLCJicmFuZExpc3QiLCJzaG93QnJhbmRMaXN0IiwidGVtcFNob3dCcmFuZExpc3QiLCJsZXNzU2hvd0JyYW5kTGlzdCIsInNlbGVjdGVkSW5kZXhSb3ciLCJjaGFuZ2VTdGF0dXMiLCJkcm9wZG93bkluZGV4Iiwic2VsZWN0ZWRJbmRleFN0eWxlIiwiYW5pbWF0aW5nIiwiaXRlbVdpZHRoUm93cyIsImRyb3Bkb3duTGlzdCIsImNvbGxhcHNlUmVmcyIsImRlc2NSZWYiLCJ0aW1lciIsImNvbGxhcHNlVGltZXIiLCJjaGVja0lzU2VsZWN0ZWQiLCJpbmRleCIsImluY2x1ZGVzIiwiY29sbGVjdEl0ZW1zIiwiZWxlbWVudCIsImJ1aWxkQ29sbGFwc2VMaXN0SXRlbUhlaWdodEF0dHJzIiwic2V0QXR0cmlidXRlIiwiaGFuZGxlQ29sbGFwc2UiLCJfaXRlbSIsInJlbmRlck1hdGNoU3R5bGUiLCJhbmltYXRpb25EZWxheSIsImJpbmQiLCJpc0ZpcnN0Q2xpY2siLCJTb2x1dGlvbnNTZWN0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwic3JjIiwiYWx0IiwidmlkZW9TcmMiLCJpblZpZXdTY3JvbGxUb3AiLCJpc09uTW91c2UiLCJ2aWRlb1N0eWxlIiwidHJhbnNmb3JtIiwiY3VyX3giLCJjdXJfeSIsInZpZGVvYm94U3R5bGUiLCJjbGlwUGF0aCIsInZpZGVvUmVmIiwidmlkZW9Db250YWluZXJSZWYiLCJ2aWRlb0xheW91dFJlZiIsIm1hcmtSZWYiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJzY3JvbGxDaGFuZ2VTdHlsZSIsImJpbmRWaWRlb0V2ZW50cyIsImJpbmRMYXlvdXRNb3VzZU92ZXJFdmVudCIsIm1hcmtUYXJnZXQiLCJiaW5kTGF5b3V0TW91c2VPdXRFdmVudCIsImJpbmREZXZpY2VPcmllbnRhdGlvbkV2ZW50IiwiZ2FtbWEiLCJMYXlvdXRUYXJnZXQiLCJEZXZpY2VPcmllbnRhdGlvbkV2ZW50IiwibG9nIiwiY2hlY2tJblZpZXciLCJ2aWRlb1JlY3QiLCJ2aWRlb0hlaWdodCIsInZpZGVvVG9wIiwidmlkZW9Cb3R0b20iLCJib3R0b20iLCJyZW5kZXJWYWxpZFNjYWxlUmF0aW8iLCJyYXRpbyIsIm1heFNjYWxlUmF0aW8iLCJfc2Nyb2xsWSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ2aWRlb1NjYWxlIiwidmlkZW9Ub1NjYWxlIiwibWF4Q2xpcFBhdGhXaWR0aCIsImlubmVyV2lkdGgiLCJjaGFuZ2VDbGlwV2lkdGgiLCJjbGlwV2lkdGgiLCJtaW4iLCJyb3VuZGVkQ2xpcFdpZHRoIiwicm91bmQiLCJ3aWxsQ2hhbmdlIiwiZ2V0TW91c2VQb3MiLCJyZWN0IiwibW91c2VNb3ZlIiwibW91c2VMZWF2ZSIsIm1ha2VWaWRlb0Z1bGxTY3JlZW4iLCJ2aWRlbyIsInJlcXVlc3RGdWxsc2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIm1zUmVxdWVzdEZ1bGxzY3JlZW4iLCJvZmZWaWRlb0Z1bGxTY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsIndlYmtpdEV4aXRGdWxsc2NyZWVuIiwibW96Q2FuY2VsRnVsbFNjcmVlbiIsIm1zRXhpdEZ1bGxzY3JlZW4iLCJ2aWRlb2JveFJlZiIsIm1heFdpZHRoIiwib3ZlcmZsb3dYIiwibXV0ZWQiLCJwbGF5c0lubGluZSIsImRpc2FibGVQaWN0dXJlSW5QaWN0dXJlIiwiYXV0b1BsYXkiLCJ0eXBlIiwiY3JlYXRlUm9vdCIsInN0b3JlIiwiYXBwIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9