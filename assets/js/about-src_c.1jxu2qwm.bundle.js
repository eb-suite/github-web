"use strict";
(self["webpackChunkweb_webpack"] = self["webpackChunkweb_webpack"] || []).push([["about-src_c"],{

/***/ "./src/common/components/Carousel.js":
/*!*******************************************!*\
  !*** ./src/common/components/Carousel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_LogoTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/components/LogoTag */ "./src/common/components/LogoTag.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ "./src/utils/index.js");




class Carousel extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      moveX: 0,
      interval: null,
      isPlay: false,
      canPlay: true,
      collectBoxWidths: [],
      listItems: this.props.items.concat(this.props.items).concat(this.props.items).concat(this.props.items).concat(this.props.items)
    };
    this.carousel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }
  collectBoxWidth = (index, style) => {
    const width = !!style.width ? style.width : 0;
    const collectBoxWidths = this.state.collectBoxWidths;
    collectBoxWidths[index] = width;
    this.setState({
      collectBoxWidths
    });
  };
  calcListBoxWidth = () => {
    const {
      collectBoxWidths
    } = this.state;
    const {
      isPC
    } = this.props;
    return collectBoxWidths.reduce((acc, cur) => acc + cur + (isPC ? 80 : 35), 0);
  };
  handleSelect = (selectedIndex, e) => {
    e.preventDefault();
    this.setState({
      activeIndex: selectedIndex
    });
  };
  renderMatchWidth = index => {
    if (!!this.state.collectBoxWidths[index]) {
      return this.state.collectBoxWidths[index];
    } else {
      return 0;
    }
  };
  autoPlay = () => {
    requestAnimationFrame(timeFrame => {
      const {
        moveX,
        canPlay
      } = this.state;
      const {
        direction,
        imgWidth,
        isPC
      } = this.props;
      let listItems = this.state.listItems;
      let cusMoveX = moveX;
      if (!canPlay) return this.autoPlay();
      if (direction === 'left') {
        if (cusMoveX >= -1 * this.calcListBoxWidth() + this.carousel.current.getBoundingClientRect().width) {
          cusMoveX = cusMoveX - (isPC ? 0.8 : 0.6);
          this.setState({
            moveX: cusMoveX
          });
        } else {
          this.setState({
            moveX: 0
          });
        }
      } else if (direction === 'right') {
        if (cusMoveX <= 0) {
          cusMoveX = cusMoveX + (isPC ? 0.8 : 0.6);
          this.setState({
            moveX: cusMoveX
          });
        } else {
          this.setState({
            moveX: -1 * this.calcListBoxWidth() + this.carousel.current.getBoundingClientRect().width
          });
        }
      }
      this.autoPlay();
    });
  };
  run() {
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.lazyAct)(0.3).then(() => {
      this.setState({
        isPlay: true
      });
      this.autoPlay();
    });
  }
  componentDidMount() {
    const {
      direction,
      imgWidth
    } = this.props;
    if (direction === 'left') {
      //   this.setState({ moveX: -1 / 2 * this.calcListBoxWidth() });
    } else if (direction === 'right') {
      this.setState({
        moveX: -1 * this.calcListBoxWidth() + this.carousel.current.getBoundingClientRect().width
      });
    }
    this.run();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.scrollY !== this.props.scrollY) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.checkIsInViewport)(this.carousel.current, status => {
        if (status) {
          this.run();
        } else {
          this.setState({
            isPlay: false
          });
        }
      });
    }
  }
  render() {
    const {
      items,
      direction,
      imgWidth,
      imgHeight
    } = this.props;
    const listItems = this.state.listItems;
    let cusImgWidth = imgWidth;
    let cusImgHeight = imgHeight;
    if (cusImgWidth == undefined || cusImgWidth < 50) cusImgWidth = 50;
    if (cusImgHeight == undefined || cusImgHeight < 50) cusImgHeight = 50;
    const {
      activeIndex,
      isPlay
    } = this.state;
    const {
      isPC
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "carousel",
      ref: this.carousel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ["carousel-inner", isPlay ? 'active' : null].join(' '),
      style: {
        transform: `translateX(${this.state.moveX}px)`,
        width: `${this.calcListBoxWidth()}px`
      }
    }, listItems.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: `carousel-item ${activeIndex === index ? 'active' : ''}`,
      onClick: e => this.handleSelect(index, e),
      style: {
        width: `${this.renderMatchWidth(index)}px`,
        height: `${cusImgHeight}px`,
        flexBasis: `${this.renderMatchWidth(index)}px`,
        marginRight: isPC ? '80px' : '35px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "carousel-image" /*style={{ transitionDelay: `${(direction == 'right' ? listItems.length - index - 1 : index) * 0.15 + 0.05}s` }}*/
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "carousel-image-overlay"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "carousel-image-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_LogoTag__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: item.name,
      src: item.image,
      alt: item.name,
      height: cusImgHeight,
      pullImageInfo: v => this.collectBoxWidth(index, v)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "carousel-caption d-none d-md-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, cusImgHeight))))))));
  }
}
const mapStateToProps = state => ({
  scrollY: state.scrollSlice.scrollY,
  isPC: state.clientSlice.isPC
});
const mapDispatchToProps = dispatch => ({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Carousel));

/***/ }),

/***/ "./src/data/languages.js":
/*!*******************************!*\
  !*** ./src/data/languages.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  frontend: [{
    name: 'HTML5',
    icon: '/assets/img/service/language/v2/fontend/html5.svg'
  }, {
    name: 'Java',
    icon: '/assets/img/service/language/v2/fontend/java.svg'
  }, {
    name: 'JavaScript',
    icon: '/assets/img/service/language/v2/fontend/js.svg'
  }, {
    name: 'Kotlin',
    icon: '/assets/img/service/language/v2/fontend/Kotlin.svg'
  }, {
    name: 'Mobile',
    icon: '/assets/img/service/language/v2/fontend/mobile.png'
  }, {
    name: 'React',
    icon: '/assets/img/service/language/v2/fontend/react.svg'
  }, {
    name: 'Swift',
    icon: '/assets/img/service/language/v2/fontend/swift.svg'
  }, {
    name: 'Vue',
    icon: '/assets/img/service/language/v2/fontend/vue.png'
  }, {
    name: 'Web',
    icon: '/assets/img/service/language/v2/fontend/web.png'
  }],
  backend: [
  // { name: 'Alibaba Cloud', icon: '/assets/img/service/language/v2/v1/alibaba.png'},
  {
    name: 'Amazon',
    icon: '/assets/img/service/language/v2/backend/amazon.png'
  }, {
    name: 'Google Cloud',
    icon: '/assets/img/service/language/v2/backend/google.png'
  }, {
    name: 'Nodejs',
    icon: '/assets/img/service/language/v2/fontend/node.svg'
  }, {
    name: 'Python',
    icon: '/assets/img/service/language/v2/fontend/python.png'
  }, {
    name: 'Json',
    icon: '/assets/img/service/language/v2/backend/json.png'
  }, {
    name: 'openAI',
    icon: '/assets/img/service/language/v2/backend/openai.png'
  }, {
    name: 'PHP',
    icon: '/assets/img/service/language/v2/backend/php.png'
  }, {
    name: 'Redis',
    icon: '/assets/img/service/language/v2/backend/redis.svg'
  }]
});

/***/ }),

/***/ "./src/page/about/App.js":
/*!*******************************!*\
  !*** ./src/page/about/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AppContext */ "./src/context/AppContext.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/index */ "./src/utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_clientSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/clientSlice */ "./src/store/clientSlice.js");
/* harmony import */ var _store_scrollSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/scrollSlice */ "./src/store/scrollSlice.js");
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Landing */ "./src/page/about/components/Landing.js");
/* harmony import */ var _components_Clients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Clients */ "./src/page/about/components/Clients.js");
/* harmony import */ var _components_We__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/We */ "./src/page/about/components/We.js");
/* harmony import */ var _common_components_Preload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/common/components/Preload */ "./src/common/components/Preload.js");
/* harmony import */ var _common_components_RedirectLoading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/common/components/RedirectLoading */ "./src/common/components/RedirectLoading.js");
/* harmony import */ var _common_components_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/common/components/Navbar */ "./src/common/components/Navbar.js");
/* harmony import */ var _common_components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/common/components/Footer */ "./src/common/components/Footer.js");
/* harmony import */ var _common_components_Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/common/components/Image */ "./src/common/components/Image.js");
/* harmony import */ var _common_components_tracking_GoogleConsent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/common/components/tracking/GoogleConsent */ "./src/common/components/tracking/GoogleConsent.js");
/* harmony import */ var _scss_page_about_index_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/scss/page/about/index.scss */ "./src/scss/page/about/index.scss");
/* harmony import */ var _common_components_HoverCursorBox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/components/HoverCursorBox */ "./src/common/components/HoverCursorBox.js");

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
    this.resizeHandler();
    window.addEventListener('scroll', this.scrollHandler);
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
      // console.log('pageloading', pageloading);
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_tracking_GoogleConsent__WEBPACK_IMPORTED_MODULE_14__["default"], null), this.state.openContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_HoverCursorBox__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
      hide: !this.state.showHeader,
      activepage: "about"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "about-page"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Landing__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
      src: "/assets/img/page/about/about_us_cover.jpg"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "animate-in-view"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Clients__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_We__WEBPACK_IMPORTED_MODULE_8__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: this.clockRef
    }), pageloading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_RedirectLoading__WEBPACK_IMPORTED_MODULE_10__["default"], null) : null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_components_Preload__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onOpen: v => this.setOpenContent(v)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "\xA0")))));
  }
}
const mapStateToProps = state => {
  return {
    isPC: state.clientSlice.isPC,
    isTablet: state.clientSlice.isTablet,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_17__.connect)(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/page/about/components/Landing.js":
/*!**********************************************!*\
  !*** ./src/page/about/components/Landing.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Landing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_effects_DiffLettersShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/components/effects/DiffLettersShow */ "./src/common/components/effects/DiffLettersShow.js");


class Landing extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "langding-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_effects_DiffLettersShow__WEBPACK_IMPORTED_MODULE_1__["default"], {
      letters: ['A ', 'Full-Stack ', 'digital ', 'studio'],
      ratio: "0.5"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "landing-desc"
    }, "From strategy and ideation to design, development, content creation, marketing and ongoing optimization. We create intuitive and engaging websites, digital experiences and native apps."))));
  }
}

/***/ }),

/***/ "./src/page/about/components/We.js":
/*!*****************************************!*\
  !*** ./src/page/about/components/We.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_components_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/components/Carousel */ "./src/common/components/Carousel.js");
/* harmony import */ var _data_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/languages */ "./src/data/languages.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");




class We extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconlist: ['../assets/img/icons/swift.svg', '../assets/img/icons/Kotlin One Color Logo on White RGB.svg', '../assets/img/icons/node.svg', '../assets/img/icons/java.svg', '../assets/img/icons/html5.svg', '../assets/img/icons/Linux.svg', '../assets/img/icons/react.svg', '../assets/img/icons/redis.svg', '../assets/img/icons/vue.svg', '../assets/img/icons/web.svg'],
      languageList: _data_languages__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  }
  componentDidMount() {
    // console.log('We component did mount', this.state.languageList);
  }
  render() {
    const {
      isPC
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "we"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "we-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "we-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "we-title",
      style: {
        textTransform: 'uppercase'
      }
    }, "We specialize in Swift, Kotlin, Node.js, React, Vue.js, and AI, harnessing cutting-edge technologies to bring your ideas to life"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "we-divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "we-icons-wrapper frontend"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "frontend-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      direction: "right",
      items: this.state.languageList.frontend.sort(() => 0.5 - Math.random()).map((item, index) => {
        return {
          name: item.name,
          image: item.icon
        };
      }),
      imgHeight: isPC ? 85 : 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "we-icons-wrapper backend pt-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "backend-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      direction: "left",
      items: this.state.languageList.backend.sort(() => 0.5 - Math.random()).map((item, index) => {
        return {
          name: item.name,
          image: item.icon
        };
      }),
      imgHeight: isPC ? 85 : 70
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "we-divider"
    }))));
  }
}
const mapStateToProps = state => {
  return {
    isPC: state.clientSlice.isPC
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps)(We));

/***/ }),

/***/ "./src/page/about/index.js":
/*!*********************************!*\
  !*** ./src/page/about/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/page/about/App.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/index */ "./src/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");





const app = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('app'));
app.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _store_index__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/scss/page/about/index.scss":
/*!****************************************!*\
  !*** ./src/scss/page/about/index.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2Fib3V0LXNyY19jLjFqeHUycXdtLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDVTtBQUNiO0FBQ2U7QUFFckQsTUFBTU0sUUFBUSxTQUFTTCw0Q0FBUyxDQUFDO0VBQy9CTSxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7SUFDakIsS0FBSyxDQUFDQSxLQUFLLENBQUM7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBRztNQUNYQyxXQUFXLEVBQUUsQ0FBQztNQUNkQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxRQUFRLEVBQUUsSUFBSTtNQUNkQyxNQUFNLEVBQUUsS0FBSztNQUNiQyxPQUFPLEVBQUUsSUFBSTtNQUNiQyxnQkFBZ0IsRUFBRSxFQUFFO01BQ3BCQyxTQUFTLEVBQUUsSUFBSSxDQUFDUixLQUFLLENBQUNTLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ1YsS0FBSyxDQUFDUyxLQUFLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ1YsS0FBSyxDQUFDUyxLQUFLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ1YsS0FBSyxDQUFDUyxLQUFLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ1YsS0FBSyxDQUFDUyxLQUFLO0lBQ2hJLENBQUM7SUFDRCxJQUFJLENBQUNFLFFBQVEsZ0JBQUduQixzREFBZSxDQUFDLENBQUM7RUFDbkM7RUFFQXFCLGVBQWUsR0FBR0EsQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEtBQUs7SUFDbEMsTUFBTUMsS0FBSyxHQUFHLENBQUMsQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQUM7SUFDN0MsTUFBTVQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDTixLQUFLLENBQUNNLGdCQUFnQjtJQUNwREEsZ0JBQWdCLENBQUNPLEtBQUssQ0FBQyxHQUFHRSxLQUFLO0lBQy9CLElBQUksQ0FBQ0MsUUFBUSxDQUFDO01BQUVWO0lBQWlCLENBQUMsQ0FBQztFQUNyQyxDQUFDO0VBRURXLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDdkIsTUFBTTtNQUFFWDtJQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDTixLQUFLO0lBQ3ZDLE1BQU07TUFBRWtCO0lBQUssQ0FBQyxHQUFHLElBQUksQ0FBQ25CLEtBQUs7SUFDM0IsT0FBT08sZ0JBQWdCLENBQUNhLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsS0FBS0QsR0FBRyxHQUFHQyxHQUFHLElBQUlILElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQy9FLENBQUM7RUFDREksWUFBWSxHQUFHQSxDQUFDQyxhQUFhLEVBQUVDLENBQUMsS0FBSztJQUNuQ0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNULFFBQVEsQ0FBQztNQUFFZixXQUFXLEVBQUVzQjtJQUFjLENBQUMsQ0FBQztFQUMvQyxDQUFDO0VBQ0RHLGdCQUFnQixHQUFJYixLQUFLLElBQUs7SUFDNUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDYixLQUFLLENBQUNNLGdCQUFnQixDQUFDTyxLQUFLLENBQUMsRUFBRTtNQUN4QyxPQUFPLElBQUksQ0FBQ2IsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQ08sS0FBSyxDQUFDO0lBQzNDLENBQUMsTUFBTTtNQUNMLE9BQU8sQ0FBQztJQUNWO0VBQ0YsQ0FBQztFQUNEYyxRQUFRLEdBQUdBLENBQUEsS0FBTTtJQUNmQyxxQkFBcUIsQ0FBRUMsU0FBUyxJQUFLO01BQ2pDLE1BQU07UUFBRTNCLEtBQUs7UUFBRUc7TUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDTCxLQUFLO01BQ3JDLE1BQU07UUFBRThCLFNBQVM7UUFBRUMsUUFBUTtRQUFFYjtNQUFLLENBQUMsR0FBRyxJQUFJLENBQUNuQixLQUFLO01BQ2hELElBQUlRLFNBQVMsR0FBRyxJQUFJLENBQUNQLEtBQUssQ0FBQ08sU0FBUztNQUNwQyxJQUFJeUIsUUFBUSxHQUFHOUIsS0FBSztNQUNwQixJQUFJLENBQUNHLE9BQU8sRUFBRSxPQUFPLElBQUksQ0FBQ3NCLFFBQVEsQ0FBQyxDQUFDO01BQ3BDLElBQUlHLFNBQVMsS0FBSyxNQUFNLEVBQUU7UUFDdEIsSUFBSUUsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ2YsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ1AsUUFBUSxDQUFDdUIsT0FBTyxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUNuQixLQUFLLEVBQUU7VUFDaEdpQixRQUFRLEdBQUdBLFFBQVEsSUFBSWQsSUFBSSxHQUFHLEdBQUcsR0FBRSxHQUFHLENBQUM7VUFDdkMsSUFBSSxDQUFDRixRQUFRLENBQUM7WUFBRWQsS0FBSyxFQUFFOEI7VUFBUyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxNQUFNO1VBQ0gsSUFBSSxDQUFDaEIsUUFBUSxDQUFDO1lBQUVkLEtBQUssRUFBRTtVQUFFLENBQUMsQ0FBQztRQUMvQjtNQUNKLENBQUMsTUFBTSxJQUFJNEIsU0FBUyxLQUFLLE9BQU8sRUFBRTtRQUM5QixJQUFJRSxRQUFRLElBQUksQ0FBQyxFQUFFO1VBQ2ZBLFFBQVEsR0FBR0EsUUFBUSxJQUFJZCxJQUFJLEdBQUcsR0FBRyxHQUFFLEdBQUcsQ0FBQztVQUN2QyxJQUFJLENBQUNGLFFBQVEsQ0FBQztZQUFFZCxLQUFLLEVBQUU4QjtVQUFTLENBQUMsQ0FBQztRQUN0QyxDQUFDLE1BQU07VUFDSCxJQUFJLENBQUNoQixRQUFRLENBQUM7WUFBRWQsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ2UsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ1AsUUFBUSxDQUFDdUIsT0FBTyxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUNuQjtVQUFNLENBQUMsQ0FBQztRQUNoSDtNQUNKO01BQ0EsSUFBSSxDQUFDWSxRQUFRLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUM7RUFDSixDQUFDO0VBRURRLEdBQUdBLENBQUEsRUFBSTtJQUNMeEMsK0NBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQ3lDLElBQUksQ0FBQyxNQUFNO01BQ3BCLElBQUksQ0FBQ3BCLFFBQVEsQ0FBQztRQUFFWixNQUFNLEVBQUU7TUFBSyxDQUFDLENBQUM7TUFDL0IsSUFBSSxDQUFDdUIsUUFBUSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0VBQ0o7RUFFQVUsaUJBQWlCQSxDQUFBLEVBQUc7SUFDbEIsTUFBTTtNQUFFUCxTQUFTO01BQUVDO0lBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQ2hDLEtBQUs7SUFDMUMsSUFBSStCLFNBQVMsS0FBSyxNQUFNLEVBQUU7TUFDMUI7SUFBQSxDQUNDLE1BQU0sSUFBSUEsU0FBUyxLQUFLLE9BQU8sRUFBRTtNQUNsQyxJQUFJLENBQUNkLFFBQVEsQ0FBQztRQUFFZCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDZSxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDUCxRQUFRLENBQUN1QixPQUFPLENBQUNDLHFCQUFxQixDQUFDLENBQUMsQ0FBQ25CO01BQU0sQ0FBQyxDQUFDO0lBQzVHO0lBQ0EsSUFBSSxDQUFDb0IsR0FBRyxDQUFDLENBQUM7RUFDWjtFQUVBRyxrQkFBa0JBLENBQUNDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3ZDLElBQUlELFNBQVMsQ0FBQ0UsT0FBTyxLQUFLLElBQUksQ0FBQzFDLEtBQUssQ0FBQzBDLE9BQU8sRUFBRTtNQUM1QzdDLHlEQUFpQixDQUFDLElBQUksQ0FBQ2MsUUFBUSxDQUFDdUIsT0FBTyxFQUFHUyxNQUFNLElBQUs7UUFDbkQsSUFBSUEsTUFBTSxFQUFFO1VBQ1YsSUFBSSxDQUFDUCxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUMsTUFBTTtVQUNMLElBQUksQ0FBQ25CLFFBQVEsQ0FBQztZQUFFWixNQUFNLEVBQUU7VUFBTSxDQUFDLENBQUM7UUFDbEM7TUFDRixDQUFDLENBQUM7SUFDSjtFQUNGO0VBRUF1QyxNQUFNQSxDQUFBLEVBQUc7SUFDUCxNQUFNO01BQUVuQyxLQUFLO01BQUVzQixTQUFTO01BQUVDLFFBQVE7TUFBRWE7SUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDN0MsS0FBSztJQUM1RCxNQUFNUSxTQUFTLEdBQUcsSUFBSSxDQUFDUCxLQUFLLENBQUNPLFNBQVM7SUFDdEMsSUFBSXNDLFdBQVcsR0FBR2QsUUFBUTtJQUMxQixJQUFJZSxZQUFZLEdBQUdGLFNBQVM7SUFDNUIsSUFBSUMsV0FBVyxJQUFJRSxTQUFTLElBQUlGLFdBQVcsR0FBRyxFQUFFLEVBQUVBLFdBQVcsR0FBRyxFQUFFO0lBQ2xFLElBQUlDLFlBQVksSUFBSUMsU0FBUyxJQUFJRCxZQUFZLEdBQUcsRUFBRSxFQUFFQSxZQUFZLEdBQUcsRUFBRTtJQUNyRSxNQUFNO01BQUU3QyxXQUFXO01BQUdHO0lBQU8sQ0FBQyxHQUFHLElBQUksQ0FBQ0osS0FBSztJQUMzQyxNQUFNO01BQUVrQjtJQUFLLENBQUMsR0FBRyxJQUFJLENBQUNuQixLQUFLO0lBQzNCLG9CQUNFUiwwREFBQTtNQUFLMEQsU0FBUyxFQUFDLFVBQVU7TUFBQ0MsR0FBRyxFQUFFLElBQUksQ0FBQ3hDO0lBQVMsZ0JBQzNDbkIsMERBQUE7TUFBSzBELFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFN0MsTUFBTSxHQUFHLFFBQVEsR0FBRSxJQUFJLENBQUUsQ0FBQytDLElBQUksQ0FBQyxHQUFHLENBQUU7TUFBQ3JDLEtBQUssRUFBRTtRQUFFc0MsU0FBUyxFQUFFLGNBQWMsSUFBSSxDQUFDcEQsS0FBSyxDQUFDRSxLQUFLLEtBQUs7UUFBRWEsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQyxDQUFDO01BQUs7SUFBRSxHQUN0S1YsU0FBUyxDQUFDOEMsR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRXpDLEtBQUssa0JBQ3pCdEIsMERBQUE7TUFDRWdFLEdBQUcsRUFBRTFDLEtBQU07TUFDWG9DLFNBQVMsRUFBRSxpQkFBaUJoRCxXQUFXLEtBQUtZLEtBQUssR0FBRyxRQUFRLEdBQUcsRUFBRSxFQUFHO01BQ3BFMkMsT0FBTyxFQUFFaEMsQ0FBQyxJQUFJLElBQUksQ0FBQ0YsWUFBWSxDQUFDVCxLQUFLLEVBQUVXLENBQUMsQ0FBRTtNQUMxQ1YsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQ1csZ0JBQWdCLENBQUNiLEtBQUssQ0FBQyxJQUFJO1FBQUU0QyxNQUFNLEVBQUUsR0FBR1gsWUFBWSxJQUFJO1FBQUVZLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQ2hDLGdCQUFnQixDQUFDYixLQUFLLENBQUMsSUFBSTtRQUFFOEMsV0FBVyxFQUFFekMsSUFBSSxHQUFHLE1BQU0sR0FBRTtNQUFPO0lBQUUsZ0JBRXZLM0IsMERBQUE7TUFBSzBELFNBQVMsRUFBQyxnQkFBZ0IsQ0FBQztJQUFBLGdCQUM5QjFELDBEQUFBO01BQUswRCxTQUFTLEVBQUM7SUFBd0IsQ0FBTSxDQUFDLGVBQzlDMUQsMERBQUE7TUFBSzBELFNBQVMsRUFBQztJQUFzQixnQkFDakMxRCwwREFBQSxDQUFDRSxrRUFBUTtNQUFDd0QsU0FBUyxFQUFFSyxJQUFJLENBQUNNLElBQUs7TUFBQ0MsR0FBRyxFQUFFUCxJQUFJLENBQUNRLEtBQU07TUFBQ0MsR0FBRyxFQUFFVCxJQUFJLENBQUNNLElBQUs7TUFBQ0gsTUFBTSxFQUFFWCxZQUFhO01BQUNrQixhQUFhLEVBQUdDLENBQUMsSUFBSyxJQUFJLENBQUNyRCxlQUFlLENBQUNDLEtBQUssRUFBRW9ELENBQUM7SUFBRSxDQUFFLENBQUMsZUFDL0kxRSwwREFBQTtNQUFLMEQsU0FBUyxFQUFDO0lBQW9DLGdCQUMvQzFELDBEQUFBLGFBQUt1RCxZQUFpQixDQUNyQixDQUNKLENBQ0YsQ0FDRixDQUNOLENBQ0UsQ0FVRixDQUFDO0VBRVY7QUFDRjtBQUVBLE1BQU1vQixlQUFlLEdBQUdsRSxLQUFLLEtBQUs7RUFDaEN5QyxPQUFPLEVBQUV6QyxLQUFLLENBQUNtRSxXQUFXLENBQUMxQixPQUFPO0VBQ2xDdkIsSUFBSSxFQUFFbEIsS0FBSyxDQUFDb0UsV0FBVyxDQUFDbEQ7QUFDMUIsQ0FBQyxDQUFDO0FBRUYsTUFBTW1ELGtCQUFrQixHQUFHQyxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDM0MsaUVBQWU1RSxvREFBTyxDQUFDd0UsZUFBZSxFQUFFRyxrQkFBa0IsQ0FBQyxDQUFDeEUsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3JKckUsaUVBQWU7RUFDWDBFLFFBQVEsRUFBRSxDQUNOO0lBQUVYLElBQUksRUFBRSxPQUFPO0lBQUVZLElBQUksRUFBRTtFQUFvRCxDQUFDLEVBQzVFO0lBQUVaLElBQUksRUFBRSxNQUFNO0lBQUVZLElBQUksRUFBRTtFQUFtRCxDQUFDLEVBQzFFO0lBQUVaLElBQUksRUFBRSxZQUFZO0lBQUVZLElBQUksRUFBRTtFQUFpRCxDQUFDLEVBQzlFO0lBQUVaLElBQUksRUFBRSxRQUFRO0lBQUVZLElBQUksRUFBRTtFQUFxRCxDQUFDLEVBQzlFO0lBQUVaLElBQUksRUFBRSxRQUFRO0lBQUVZLElBQUksRUFBRTtFQUFxRCxDQUFDLEVBQzlFO0lBQUVaLElBQUksRUFBRSxPQUFPO0lBQUVZLElBQUksRUFBRTtFQUFvRCxDQUFDLEVBQzVFO0lBQUVaLElBQUksRUFBRSxPQUFPO0lBQUVZLElBQUksRUFBRTtFQUFvRCxDQUFDLEVBQzVFO0lBQUVaLElBQUksRUFBRSxLQUFLO0lBQUVZLElBQUksRUFBRTtFQUFrRCxDQUFDLEVBQ3hFO0lBQUVaLElBQUksRUFBRSxLQUFLO0lBQUVZLElBQUksRUFBRTtFQUFrRCxDQUFDLENBQzNFO0VBQ0RDLE9BQU8sRUFBRTtFQUNMO0VBQ0E7SUFBRWIsSUFBSSxFQUFFLFFBQVE7SUFBRVksSUFBSSxFQUFFO0VBQW9ELENBQUMsRUFDN0U7SUFBRVosSUFBSSxFQUFFLGNBQWM7SUFBRVksSUFBSSxFQUFFO0VBQXFELENBQUMsRUFDcEY7SUFBRVosSUFBSSxFQUFFLFFBQVE7SUFBRVksSUFBSSxFQUFFO0VBQW1ELENBQUMsRUFDNUU7SUFBRVosSUFBSSxFQUFFLFFBQVE7SUFBRVksSUFBSSxFQUFFO0VBQXFELENBQUMsRUFDOUU7SUFBRVosSUFBSSxFQUFFLE1BQU07SUFBRVksSUFBSSxFQUFFO0VBQW1ELENBQUMsRUFDMUU7SUFBRVosSUFBSSxFQUFFLFFBQVE7SUFBRVksSUFBSSxFQUFFO0VBQXFELENBQUMsRUFDOUU7SUFBRVosSUFBSSxFQUFFLEtBQUs7SUFBRVksSUFBSSxFQUFFO0VBQWtELENBQUMsRUFDeEU7SUFBRVosSUFBSSxFQUFFLE9BQU87SUFBRVksSUFBSSxFQUFFO0VBQW9ELENBQUM7QUFFcEYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI4QjtBQUMvQjtBQUM4QztBQUN1QjtBQUMvQjtBQUNnQztBQUNyQjtBQUNBO0FBQ047QUFDQTtBQUNWO0FBQ2lCO0FBQ2dCO0FBQ2I7QUFDTDtBQUNGO0FBQ3lCO0FBQ3ZFO0FBQ3NDO0FBQzhCO0FBRXBFLE1BQU1rQixHQUFHLFNBQVNuRyw0Q0FBZSxDQUFDO0VBQzlCTyxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7SUFDZixLQUFLLENBQUNBLEtBQUssQ0FBQztJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHO01BQ1QyRixXQUFXLEVBQUUsS0FBSztNQUNsQkMsVUFBVSxFQUFFO0lBQ2hCLENBQUM7SUFDRCxJQUFJLENBQUNDLFFBQVEsZ0JBQUd0Ryw0Q0FBZSxDQUFDLENBQUM7RUFDckM7RUFFQXVHLG9CQUFvQkEsQ0FBQSxFQUFHO0lBQ25CLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQy9DLEdBQUcsSUFBSTtNQUM5RCxJQUFJQSxHQUFHLEVBQUU7UUFDTHRELCtEQUFpQixDQUFDc0QsR0FBRyxFQUFHUixNQUFNLElBQUs7VUFDL0IsSUFBSUEsTUFBTSxJQUFJLENBQUNRLEdBQUcsQ0FBQ2dELFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdDakQsR0FBRyxDQUFDZ0QsU0FBUyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDO1VBQy9CLENBQUMsTUFBTSxJQUFJLENBQUMxRCxNQUFNLElBQUlRLEdBQUcsQ0FBQ2dELFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BEakQsR0FBRyxDQUFDZ0QsU0FBUyxDQUFDRyxNQUFNLENBQUMsUUFBUSxDQUFDO1VBQ2xDO1FBQ0osQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7RUFDTjtFQUVBQyxhQUFhLEdBQUdBLENBQUEsS0FBTTtJQUNsQixNQUFNO01BQUV4QjtJQUFXLENBQUMsR0FBRyxJQUFJLENBQUMvRSxLQUFLO0lBQ2pDLE1BQU13RyxTQUFTLEdBQUdDLE1BQU0sQ0FBQy9ELE9BQU87SUFDaEMsSUFBSThELFNBQVMsR0FBRyxJQUFJLENBQUN4RyxLQUFLLENBQUMwQyxPQUFPLElBQUk4RCxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFO01BQ2xFLENBQUMsSUFBSSxDQUFDekcsS0FBSyxDQUFDNEYsVUFBVSxJQUFJLElBQUksQ0FBQzVFLFFBQVEsQ0FBQztRQUNwQzRFLFVBQVUsRUFBRTtNQUNoQixDQUFDLENBQUM7SUFDTixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUM1RixLQUFLLENBQUM0RixVQUFVLElBQUksSUFBSSxDQUFDNUUsUUFBUSxDQUFDO1FBQ25DNEUsVUFBVSxFQUFFO01BQ2hCLENBQUMsQ0FBQztJQUNOO0lBQ0FkLFVBQVUsQ0FBQ3lCLFNBQVMsQ0FBQztJQUNyQixJQUFJLENBQUNULG9CQUFvQixDQUFDLENBQUM7RUFDL0IsQ0FBQztFQUVEWSxhQUFhLEdBQUdBLENBQUEsS0FBTTtJQUNsQixNQUFNO01BQUU5QixjQUFjO01BQUVDLGVBQWU7TUFBRThCLFdBQVc7TUFBRUM7SUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDN0csS0FBSztJQUNqRixNQUFNOEcsUUFBUSxHQUFHZCxRQUFRLENBQUNlLGVBQWUsQ0FBQ0gsV0FBVztJQUNyREEsV0FBVyxJQUFJRSxRQUFRLElBQUlqQyxjQUFjLENBQUNpQyxRQUFRLENBQUM7SUFDbkQsTUFBTUUsU0FBUyxHQUFHaEIsUUFBUSxDQUFDZSxlQUFlLENBQUNGLFlBQVk7SUFDdkRBLFlBQVksSUFBSUcsU0FBUyxJQUFJbEMsZUFBZSxDQUFDa0MsU0FBUyxDQUFDO0lBQ3ZELElBQUksQ0FBQ2pCLG9CQUFvQixDQUFDLENBQUM7RUFDL0IsQ0FBQztFQUVEekQsaUJBQWlCQSxDQUFBLEVBQUc7SUFFaEIsSUFBSSxDQUFDaUUsYUFBYSxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDSSxhQUFhLENBQUMsQ0FBQztJQUNwQkYsTUFBTSxDQUFDUSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDVixhQUFhLENBQUM7SUFDckRFLE1BQU0sQ0FBQ1EsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ04sYUFBYSxDQUFDO0lBQ3JEL0Isc0RBQVEsQ0FBQyxDQUFDO0lBQ1Y7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNKO0VBQ0FzQyxjQUFjQSxDQUFDdkUsTUFBTSxFQUFFO0lBQ25CLE1BQU07TUFBRXFDO0lBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQ2hGLEtBQUs7SUFDbkNKLHFEQUFPLENBQUMsR0FBRyxDQUFDLENBQUN5QyxJQUFJLENBQUMsTUFBTTtNQUNwQixJQUFJTSxNQUFNLEVBQUVxRCxRQUFRLENBQUNtQixJQUFJLENBQUNoQixTQUFTLENBQUNFLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDL0MsSUFBSSxDQUFDcEYsUUFBUSxDQUFDO1FBQ1YyRSxXQUFXLEVBQUVqRDtNQUNqQixDQUFDLENBQUM7TUFDRnFDLFlBQVksQ0FBQ3JDLE1BQU0sQ0FBQztJQUN4QixDQUFDLENBQUM7RUFDTjtFQUNBSixrQkFBa0JBLENBQUNDLFNBQVMsRUFBRTtJQUMxQixNQUFNO01BQUU0RSxTQUFTO01BQUVDO0lBQVksQ0FBQyxHQUFHLElBQUksQ0FBQ3JILEtBQUs7SUFDN0MsSUFBSW9ILFNBQVMsSUFBSSxDQUFDNUUsU0FBUyxDQUFDNEUsU0FBUyxFQUFFO01BQ25DWCxNQUFNLENBQUNhLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCO0lBQ0EsSUFBSUQsV0FBVyxJQUFJN0UsU0FBUyxDQUFDNkUsV0FBVyxFQUFFO01BQ3RDO0lBQUE7RUFFUjtFQUNBRSxpQkFBaUJBLENBQUNDLEtBQUssRUFBRUMsU0FBUyxFQUFFO0lBQ2hDO0lBQ0FDLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDLGtDQUFrQyxFQUFFQSxLQUFLLEVBQUVDLFNBQVMsQ0FBQztFQUN2RTtFQUVBRSxvQkFBb0JBLENBQUEsRUFBRztJQUNuQmxCLE1BQU0sQ0FBQ21CLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNyQixhQUFhLENBQUM7SUFDeERFLE1BQU0sQ0FBQ21CLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNqQixhQUFhLENBQUM7RUFDNUQ7RUFFQS9ELE1BQU1BLENBQUEsRUFBRztJQUNMLE1BQU07TUFBRXlFO0lBQVksQ0FBQyxHQUFHLElBQUksQ0FBQ3JILEtBQUs7SUFDbEMsb0JBQVFSLGdEQUFBLENBQUFBLDJDQUFBLHFCQUNKQSxnREFBQSxDQUFDbUYsMkRBQVUsQ0FBQ21ELFFBQVE7TUFBQ0MsS0FBSyxFQUFFLENBQUM7SUFBRSxnQkFDM0J2SSxnREFBQSxDQUFDaUcsa0ZBQWEsTUFBZ0IsQ0FBQyxFQUM5QixJQUFJLENBQUN4RixLQUFLLENBQUMyRixXQUFXLGdCQUNuQnBHLGdEQUFBLENBQUFBLDJDQUFBLHFCQUNBQSxnREFBQSxDQUFDa0csMEVBQWMscUJBQ1hsRyxnREFBQSxDQUFDOEYsa0VBQVc7TUFBQzBDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQy9ILEtBQUssQ0FBQzRGLFVBQVc7TUFBQ29DLFVBQVUsRUFBQztJQUFPLENBQWMsQ0FBQyxlQUM1RXpJLGdEQUFBO01BQUswRCxTQUFTLEVBQUM7SUFBWSxnQkFDdkIxRCxnREFBQTtNQUFLMEQsU0FBUyxFQUFDO0lBQXdCLGdCQUNuQzFELGdEQUFBLENBQUN5RiwyREFBTyxNQUFVLENBQ2pCLENBQUMsZUFDTnpGLGdEQUFBO01BQUswRCxTQUFTLEVBQUM7SUFBd0IsZ0JBQ25DMUQsZ0RBQUEsQ0FBQ2dHLGlFQUFLO01BQUMxQixHQUFHLEVBQUM7SUFBMkMsQ0FBQyxDQUN0RCxDQUFDLGVBQ050RSxnREFBQTtNQUFLMEQsU0FBUyxFQUFDO0lBQWlCLGdCQUM1QjFELGdEQUFBLENBQUMwRiwyREFBTyxNQUFVLENBQUMsZUFDbkIxRixnREFBQSxDQUFDMkYsc0RBQUUsTUFBSyxDQUNQLENBQ0osQ0FBQyxlQUNOM0YsZ0RBQUEsQ0FBQytGLGtFQUFNLE1BQVMsQ0FBQyxlQUNqQi9GLGdEQUFBO01BQUsyRCxHQUFHLEVBQUUsSUFBSSxDQUFDMkM7SUFBUyxDQUFNLENBQUMsRUFDOUJ1QixXQUFXLGdCQUFHN0gsZ0RBQUEsQ0FBQzZGLDJFQUFlLE1BQUUsQ0FBQyxHQUFHLElBQ3pCLENBQ2QsQ0FBQyxnQkFDSDdGLGdEQUFBLENBQUFBLDJDQUFBLHFCQUFFQSxnREFBQSxDQUFDNEYsa0VBQU87TUFBQzhDLE1BQU0sRUFBRWhFLENBQUMsSUFBSSxJQUFJLENBQUNnRCxjQUFjLENBQUNoRCxDQUFDO0lBQUUsQ0FDdEMsQ0FBQyxlQUFBMUUsZ0RBQUE7TUFBSzBELFNBQVMsRUFBQztJQUFTLGdCQUFDMUQsZ0RBQUEsYUFBSSxNQUFVLENBQU0sQ0FBRyxDQUM3QyxDQUN2QixDQUFDO0VBQ1A7QUFDSjtBQUVBLE1BQU0yRSxlQUFlLEdBQUlsRSxLQUFLLElBQUs7RUFDL0IsT0FBTztJQUNIa0IsSUFBSSxFQUFFbEIsS0FBSyxDQUFDb0UsV0FBVyxDQUFDbEQsSUFBSTtJQUM1QmdILFFBQVEsRUFBRWxJLEtBQUssQ0FBQ29FLFdBQVcsQ0FBQzhELFFBQVE7SUFDcENmLFNBQVMsRUFBRW5ILEtBQUssQ0FBQ21JLFNBQVMsQ0FBQ2hCLFNBQVM7SUFDcEMxRSxPQUFPLEVBQUV6QyxLQUFLLENBQUNtRSxXQUFXLENBQUMxQixPQUFPO0lBQ2xDa0UsV0FBVyxFQUFFM0csS0FBSyxDQUFDb0UsV0FBVyxDQUFDdUMsV0FBVztJQUMxQ0MsWUFBWSxFQUFFNUcsS0FBSyxDQUFDb0UsV0FBVyxDQUFDd0MsWUFBWTtJQUM1Q1EsV0FBVyxFQUFFcEgsS0FBSyxDQUFDbUksU0FBUyxDQUFDQztFQUNqQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU0vRCxrQkFBa0IsR0FBRztFQUN2Qk8sY0FBYztFQUNkQyxlQUFlO0VBQ2ZDLFVBQVU7RUFDVkMsWUFBWUEsNERBQUFBO0FBQ2hCLENBQUM7QUFFRCxpRUFBZXJGLHFEQUFPLENBQUN3RSxlQUFlLEVBQUVHLGtCQUFrQixDQUFDLENBQUNxQixHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkt2QjtBQUNpQztBQUUzRCxNQUFNVixPQUFPLFNBQVN4Riw0Q0FBUyxDQUFDO0VBQzdDbUQsTUFBTUEsQ0FBQSxFQUFHO0lBQ1Asb0JBQ0VwRCwwREFBQTtNQUFLMEQsU0FBUyxFQUFDO0lBQVMsZ0JBQ3RCMUQsMERBQUE7TUFBSzBELFNBQVMsRUFBQztJQUFlLGdCQUMxQjFELDBEQUFBO01BQUswRCxTQUFTLEVBQUM7SUFBa0IsZ0JBQy9CMUQsMERBQUE7TUFBSzBELFNBQVMsRUFBQztJQUFlLGdCQUM1QjFELDBEQUFBLENBQUM4SSxrRkFBZTtNQUFDQyxPQUFPLEVBQUUsQ0FDeEIsSUFBSSxFQUNKLGFBQWEsRUFDYixVQUFVLEVBQ1YsUUFBUSxDQUNSO01BQUNDLEtBQUssRUFBQztJQUFLLENBQUMsQ0FDWixDQUFDLGVBQ05oSiwwREFBQTtNQUFLMEQsU0FBUyxFQUFDO0lBQWMsR0FBQywwTEFBNkwsQ0FDeE4sQ0FDSixDQUNGLENBQUM7RUFFVjtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ5QztBQUNXO0FBQ0o7QUFDVjtBQUV0QyxNQUFNaUMsRUFBRSxTQUFTMUYsNENBQVMsQ0FBQztFQUN2Qk0sV0FBV0EsQ0FBQ0MsS0FBSyxFQUFFO0lBQ2YsS0FBSyxDQUFDQSxLQUFLLENBQUM7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBRztNQUNUeUksUUFBUSxFQUFFLENBQ04sK0JBQStCLEVBQy9CLDREQUE0RCxFQUM1RCw4QkFBOEIsRUFDOUIsOEJBQThCLEVBQzlCLCtCQUErQixFQUMvQiwrQkFBK0IsRUFDL0IsK0JBQStCLEVBQy9CLCtCQUErQixFQUMvQiw2QkFBNkIsRUFDN0IsNkJBQTZCLENBQ2hDO01BQ0RDLFlBQVksRUFBRUYsdURBQWdCQTtJQUNsQyxDQUFDO0VBQ0w7RUFDQW5HLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2hCO0VBQUE7RUFFSk0sTUFBTUEsQ0FBQSxFQUFHO0lBQ0wsTUFBTTtNQUFFekI7SUFBSyxDQUFDLEdBQUcsSUFBSSxDQUFDbkIsS0FBSztJQUMzQixvQkFDQVIsMERBQUE7TUFBSzBELFNBQVMsRUFBQztJQUFJLGdCQUNmMUQsMERBQUE7TUFBSzBELFNBQVMsRUFBQztJQUFVLGdCQUNyQjFELDBEQUFBO01BQUswRCxTQUFTLEVBQUM7SUFBWSxnQkFDdkIxRCwwREFBQTtNQUFJMEQsU0FBUyxFQUFDLFVBQVU7TUFBQ25DLEtBQUssRUFBRTtRQUFFNkgsYUFBYSxFQUFFO01BQVk7SUFBRSxHQUFDLGtJQUFvSSxDQUFDLGVBQ3JNcEosMERBQUE7TUFBSzBELFNBQVMsRUFBQztJQUFZLENBQU0sQ0FBQyxlQVVsQzFELDBEQUFBO01BQUswRCxTQUFTLEVBQUM7SUFBMkIsZ0JBQ3RDMUQsMERBQUE7TUFBSzBELFNBQVMsRUFBQztJQUFjLGdCQUN6QjFELDBEQUFBLENBQUNNLG1FQUFRO01BQUNpQyxTQUFTLEVBQUMsT0FBTztNQUFDdEIsS0FBSyxFQUFFLElBQUksQ0FBQ1IsS0FBSyxDQUFDMEksWUFBWSxDQUFDbkUsUUFBUSxDQUFDcUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ3pGLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEVBQUV6QyxLQUFLLEtBQUs7UUFBQyxPQUFPO1VBQUMrQyxJQUFJLEVBQUVOLElBQUksQ0FBQ00sSUFBSTtVQUFFRSxLQUFLLEVBQUVSLElBQUksQ0FBQ2tCO1FBQUksQ0FBQztNQUFBLENBQUMsQ0FBRTtNQUFDNUIsU0FBUyxFQUFFMUIsSUFBSSxHQUFHLEVBQUUsR0FBRztJQUFHLENBQUMsQ0FDbE0sQ0FDSixDQUFDLGVBQ04zQiwwREFBQTtNQUFLMEQsU0FBUyxFQUFDO0lBQStCLGdCQUMxQzFELDBEQUFBO01BQUswRCxTQUFTLEVBQUM7SUFBYSxnQkFDeEIxRCwwREFBQSxDQUFDTSxtRUFBUTtNQUFDaUMsU0FBUyxFQUFDLE1BQU07TUFBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUNSLEtBQUssQ0FBQzBJLFlBQVksQ0FBQ2pFLE9BQU8sQ0FBQ21FLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUN6RixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFekMsS0FBSyxLQUFLO1FBQUMsT0FBTztVQUFDK0MsSUFBSSxFQUFFTixJQUFJLENBQUNNLElBQUk7VUFBRUUsS0FBSyxFQUFFUixJQUFJLENBQUNrQjtRQUFJLENBQUM7TUFBQSxDQUFDLENBQUU7TUFBQzVCLFNBQVMsRUFBRTFCLElBQUksR0FBRyxFQUFFLEdBQUc7SUFBRyxDQUFDLENBQ2hNLENBQ0osQ0FBQyxlQUNOM0IsMERBQUE7TUFBSzBELFNBQVMsRUFBQztJQUFZLENBQU0sQ0FDaEMsQ0FDSixDQUNKLENBQUM7RUFHVjtBQUNKO0FBRUEsTUFBTWlCLGVBQWUsR0FBSWxFLEtBQUssSUFBSztFQUMvQixPQUFPO0lBQ0hrQixJQUFJLEVBQUVsQixLQUFLLENBQUNvRSxXQUFXLENBQUNsRDtFQUM1QixDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFleEIsb0RBQU8sQ0FBQ3dFLGVBQWUsQ0FBQyxDQUFDZ0IsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFYjtBQUNnQjtBQUN0QjtBQUNVO0FBQ0s7QUFFdkMsTUFBTStELEdBQUcsR0FBR0YsNERBQVUsQ0FBQ2hELFFBQVEsQ0FBQ21ELGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0REQsR0FBRyxDQUFDdEcsTUFBTSxjQUFDcEQsZ0RBQUEsQ0FBQ3NJLGlEQUFRO0VBQUNtQixLQUFLLEVBQUVBLG9EQUFLQTtBQUFDLGdCQUM5QnpKLGdEQUFBLENBQUNtRyw0Q0FBRyxNQUFFLENBQ0EsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ1RaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvZGF0YS9sYW5ndWFnZXMuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS9hYm91dC9BcHAuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS9hYm91dC9jb21wb25lbnRzL0xhbmRpbmcuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvcGFnZS9hYm91dC9jb21wb25lbnRzL1dlLmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3BhZ2UvYWJvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvc2Nzcy9wYWdlL2Fib3V0L2luZGV4LnNjc3M/MTE3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9nb0ljb24gZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9Mb2dvVGFnJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbGF6eUFjdCwgY2hlY2tJc0luVmlld3BvcnQgfSBmcm9tICdAL3V0aWxzJztcclxuXHJcbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWN0aXZlSW5kZXg6IDAsXHJcbiAgICAgIG1vdmVYOiAwLFxyXG4gICAgICBpbnRlcnZhbDogbnVsbCxcclxuICAgICAgaXNQbGF5OiBmYWxzZSxcclxuICAgICAgY2FuUGxheTogdHJ1ZSxcclxuICAgICAgY29sbGVjdEJveFdpZHRoczogW10sXHJcbiAgICAgIGxpc3RJdGVtczogdGhpcy5wcm9wcy5pdGVtcy5jb25jYXQodGhpcy5wcm9wcy5pdGVtcykuY29uY2F0KHRoaXMucHJvcHMuaXRlbXMpLmNvbmNhdCh0aGlzLnByb3BzLml0ZW1zKS5jb25jYXQodGhpcy5wcm9wcy5pdGVtcyksXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jYXJvdXNlbCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIH1cclxuXHJcbiAgY29sbGVjdEJveFdpZHRoID0gKGluZGV4LCBzdHlsZSkgPT4ge1xyXG4gICAgY29uc3Qgd2lkdGggPSAhIXN0eWxlLndpZHRoID8gc3R5bGUud2lkdGggOiAwO1xyXG4gICAgY29uc3QgY29sbGVjdEJveFdpZHRocyA9IHRoaXMuc3RhdGUuY29sbGVjdEJveFdpZHRocztcclxuICAgIGNvbGxlY3RCb3hXaWR0aHNbaW5kZXhdID0gd2lkdGg7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29sbGVjdEJveFdpZHRocyB9KTtcclxuICB9XHJcblxyXG4gIGNhbGNMaXN0Qm94V2lkdGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbGxlY3RCb3hXaWR0aHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB7IGlzUEMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gY29sbGVjdEJveFdpZHRocy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIgKyAoaXNQQyA/IDgwIDogMzUpLCAwKTtcclxuICB9XHJcbiAgaGFuZGxlU2VsZWN0ID0gKHNlbGVjdGVkSW5kZXgsIGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJbmRleDogc2VsZWN0ZWRJbmRleCB9KTtcclxuICB9XHJcbiAgcmVuZGVyTWF0Y2hXaWR0aCA9IChpbmRleCkgPT4ge1xyXG4gICAgaWYgKCEhdGhpcy5zdGF0ZS5jb2xsZWN0Qm94V2lkdGhzW2luZGV4XSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb2xsZWN0Qm94V2lkdGhzW2luZGV4XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBhdXRvUGxheSA9ICgpID0+IHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBtb3ZlWCwgY2FuUGxheSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IGRpcmVjdGlvbiwgaW1nV2lkdGgsIGlzUEMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IGxpc3RJdGVtcyA9IHRoaXMuc3RhdGUubGlzdEl0ZW1zO1xyXG4gICAgICAgIGxldCBjdXNNb3ZlWCA9IG1vdmVYO1xyXG4gICAgICAgIGlmICghY2FuUGxheSkgcmV0dXJuIHRoaXMuYXV0b1BsYXkoKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgaWYgKGN1c01vdmVYID49IC0xICogdGhpcy5jYWxjTGlzdEJveFdpZHRoKCkgKyB0aGlzLmNhcm91c2VsLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIGN1c01vdmVYID0gY3VzTW92ZVggLSAoaXNQQyA/IDAuODogMC42KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb3ZlWDogY3VzTW92ZVggfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW92ZVg6IDAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICBpZiAoY3VzTW92ZVggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY3VzTW92ZVggPSBjdXNNb3ZlWCArIChpc1BDID8gMC44OiAwLjYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vdmVYOiBjdXNNb3ZlWCB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb3ZlWDogLTEgKiB0aGlzLmNhbGNMaXN0Qm94V2lkdGgoKSArIHRoaXMuY2Fyb3VzZWwuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dG9QbGF5KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJ1biAoKSB7XHJcbiAgICBsYXp5QWN0KDAuMykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzUGxheTogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLmF1dG9QbGF5KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBkaXJlY3Rpb24sIGltZ1dpZHRoIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBtb3ZlWDogLTEgLyAyICogdGhpcy5jYWxjTGlzdEJveFdpZHRoKCkgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vdmVYOiAtMSAqIHRoaXMuY2FsY0xpc3RCb3hXaWR0aCgpICsgdGhpcy5jYXJvdXNlbC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ydW4oKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgaWYgKHByZXZQcm9wcy5zY3JvbGxZICE9PSB0aGlzLnByb3BzLnNjcm9sbFkpIHtcclxuICAgICAgY2hlY2tJc0luVmlld3BvcnQodGhpcy5jYXJvdXNlbC5jdXJyZW50LCAoc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgICAgdGhpcy5ydW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzUGxheTogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXRlbXMsIGRpcmVjdGlvbiwgaW1nV2lkdGgsIGltZ0hlaWdodCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGxpc3RJdGVtcyA9IHRoaXMuc3RhdGUubGlzdEl0ZW1zO1xyXG4gICAgbGV0IGN1c0ltZ1dpZHRoID0gaW1nV2lkdGg7XHJcbiAgICBsZXQgY3VzSW1nSGVpZ2h0ID0gaW1nSGVpZ2h0O1xyXG4gICAgaWYgKGN1c0ltZ1dpZHRoID09IHVuZGVmaW5lZCB8fCBjdXNJbWdXaWR0aCA8IDUwKSBjdXNJbWdXaWR0aCA9IDUwO1xyXG4gICAgaWYgKGN1c0ltZ0hlaWdodCA9PSB1bmRlZmluZWQgfHwgY3VzSW1nSGVpZ2h0IDwgNTApIGN1c0ltZ0hlaWdodCA9IDUwO1xyXG4gICAgY29uc3QgeyBhY3RpdmVJbmRleCAsIGlzUGxheSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHsgaXNQQyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxcIiByZWY9e3RoaXMuY2Fyb3VzZWx9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbXCJjYXJvdXNlbC1pbm5lclwiLCBpc1BsYXkgPyAnYWN0aXZlJzogbnVsbCBdLmpvaW4oJyAnKX0gc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RoaXMuc3RhdGUubW92ZVh9cHgpYCwgd2lkdGg6IGAke3RoaXMuY2FsY0xpc3RCb3hXaWR0aCgpfXB4YCB9fT5cclxuICAgICAgICAgIHtsaXN0SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjYXJvdXNlbC1pdGVtICR7YWN0aXZlSW5kZXggPT09IGluZGV4ID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5oYW5kbGVTZWxlY3QoaW5kZXgsIGUpfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHt0aGlzLnJlbmRlck1hdGNoV2lkdGgoaW5kZXgpfXB4YCwgaGVpZ2h0OiBgJHtjdXNJbWdIZWlnaHR9cHhgLCBmbGV4QmFzaXM6IGAke3RoaXMucmVuZGVyTWF0Y2hXaWR0aChpbmRleCl9cHhgLCBtYXJnaW5SaWdodDogaXNQQyA/ICc4MHB4JzogJzM1cHgnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWltYWdlXCIgLypzdHlsZT17eyB0cmFuc2l0aW9uRGVsYXk6IGAkeyhkaXJlY3Rpb24gPT0gJ3JpZ2h0JyA/IGxpc3RJdGVtcy5sZW5ndGggLSBpbmRleCAtIDEgOiBpbmRleCkgKiAwLjE1ICsgMC4wNX1zYCB9fSovPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbWFnZS1vdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWltYWdlLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ29JY29uIGNsYXNzTmFtZT17aXRlbS5uYW1lfSBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS5uYW1lfSBoZWlnaHQ9e2N1c0ltZ0hlaWdodH0gcHVsbEltYWdlSW5mbz17KHYpID0+IHRoaXMuY29sbGVjdEJveFdpZHRoKGluZGV4LCB2KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntjdXNJbWdIZWlnaHR9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XHJcbiAgICAgICAgPC9hPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICBzY3JvbGxZOiBzdGF0ZS5zY3JvbGxTbGljZS5zY3JvbGxZLFxyXG4gIGlzUEM6IHN0YXRlLmNsaWVudFNsaWNlLmlzUEMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHt9KTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2Fyb3VzZWwpOyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZyb250ZW5kOiBbXHJcbiAgICAgICAgeyBuYW1lOiAnSFRNTDUnLCBpY29uOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9sYW5ndWFnZS92Mi9mb250ZW5kL2h0bWw1LnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdKYXZhJywgaWNvbjogJy9hc3NldHMvaW1nL3NlcnZpY2UvbGFuZ3VhZ2UvdjIvZm9udGVuZC9qYXZhLnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdKYXZhU2NyaXB0JywgaWNvbjogJy9hc3NldHMvaW1nL3NlcnZpY2UvbGFuZ3VhZ2UvdjIvZm9udGVuZC9qcy5zdmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnS290bGluJywgaWNvbjogJy9hc3NldHMvaW1nL3NlcnZpY2UvbGFuZ3VhZ2UvdjIvZm9udGVuZC9Lb3RsaW4uc3ZnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ01vYmlsZScsIGljb246ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2xhbmd1YWdlL3YyL2ZvbnRlbmQvbW9iaWxlLnBuZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdSZWFjdCcsIGljb246ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2xhbmd1YWdlL3YyL2ZvbnRlbmQvcmVhY3Quc3ZnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1N3aWZ0JywgaWNvbjogJy9hc3NldHMvaW1nL3NlcnZpY2UvbGFuZ3VhZ2UvdjIvZm9udGVuZC9zd2lmdC5zdmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnVnVlJywgaWNvbjogJy9hc3NldHMvaW1nL3NlcnZpY2UvbGFuZ3VhZ2UvdjIvZm9udGVuZC92dWUucG5nJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1dlYicsIGljb246ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2xhbmd1YWdlL3YyL2ZvbnRlbmQvd2ViLnBuZycgfSxcclxuICAgIF0sXHJcbiAgICBiYWNrZW5kOiBbXHJcbiAgICAgICAgLy8geyBuYW1lOiAnQWxpYmFiYSBDbG91ZCcsIGljb246ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2xhbmd1YWdlL3YyL3YxL2FsaWJhYmEucG5nJ30sXHJcbiAgICAgICAgeyBuYW1lOiAnQW1hem9uJywgaWNvbjogJy9hc3NldHMvaW1nL3NlcnZpY2UvbGFuZ3VhZ2UvdjIvYmFja2VuZC9hbWF6b24ucG5nJ30sXHJcbiAgICAgICAgeyBuYW1lOiAnR29vZ2xlIENsb3VkJywgaWNvbjogJy9hc3NldHMvaW1nL3NlcnZpY2UvbGFuZ3VhZ2UvdjIvYmFja2VuZC9nb29nbGUucG5nJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ05vZGVqcycsIGljb246ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2xhbmd1YWdlL3YyL2ZvbnRlbmQvbm9kZS5zdmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnUHl0aG9uJywgaWNvbjogJy9hc3NldHMvaW1nL3NlcnZpY2UvbGFuZ3VhZ2UvdjIvZm9udGVuZC9weXRob24ucG5nJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0pzb24nLCBpY29uOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9sYW5ndWFnZS92Mi9iYWNrZW5kL2pzb24ucG5nJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ29wZW5BSScsIGljb246ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2xhbmd1YWdlL3YyL2JhY2tlbmQvb3BlbmFpLnBuZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdQSFAnLCBpY29uOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9sYW5ndWFnZS92Mi9iYWNrZW5kL3BocC5wbmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnUmVkaXMnLCBpY29uOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9sYW5ndWFnZS92Mi9iYWNrZW5kL3JlZGlzLnN2ZycgfSxcclxuICAgIF0sXHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXBwQ29udGV4dCc7XHJcbmltcG9ydCB7IGxhenlBY3QsIGNoZWNrSXNJblZpZXdwb3J0LCBsb2FkRm9udCB9IGZyb20gJ0AvdXRpbHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZXRDbGllbnRXaWR0aCwgc2V0Q2xpZW50SGVpZ2h0IH0gZnJvbSAnQC9zdG9yZS9jbGllbnRTbGljZSc7XHJcbmltcG9ydCB7IHNldFNjcm9sbFkgfSBmcm9tICdAL3N0b3JlL3Njcm9sbFNsaWNlJztcclxuaW1wb3J0IHsgc2V0SXNBcHBPcGVuIH0gZnJvbSAnQC9zdG9yZS9iYXNlU2xpY2UnO1xyXG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL2NvbXBvbmVudHMvTGFuZGluZyc7XHJcbmltcG9ydCBDbGllbnRzIGZyb20gJy4vY29tcG9uZW50cy9DbGllbnRzJztcclxuaW1wb3J0IFdlIGZyb20gJy4vY29tcG9uZW50cy9XZSc7XHJcbmltcG9ydCBQcmVsb2FkIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvUHJlbG9hZCc7XHJcbmltcG9ydCBSZWRpcmVjdExvYWRpbmcgZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9SZWRpcmVjdExvYWRpbmcnO1xyXG5pbXBvcnQgSGVhZGVyTWVudXMgZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ0AvY29tbW9uL2NvbXBvbmVudHMvSW1hZ2UnO1xyXG5pbXBvcnQgR29vZ2xlQ29uc2VudCBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL3RyYWNraW5nL0dvb2dsZUNvbnNlbnQnO1xyXG4vLyBpbXBvcnQgKiBhcyBjdXJzb3JlZmZlY3RzIGZyb20gJ2N1cnNvci1lZmZlY3RzJztcclxuaW1wb3J0ICdAL3Njc3MvcGFnZS9hYm91dC9pbmRleC5zY3NzJztcclxuaW1wb3J0IEhvdmVyQ3Vyc29yQm94IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL0hvdmVyQ3Vyc29yQm94JztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBvcGVuQ29udGVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dIZWFkZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xvY2tSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTY3JvbGxCZWhhdmlvcigpIHtcclxuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGUtaW4tdmlldycpXS5mb3JFYWNoKHJlZiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZWYpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrSXNJblZpZXdwb3J0KHJlZiwgKHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgJiYgIXJlZi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzdGF0dXMgJiYgcmVmLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNldFNjcm9sbFkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA8IHRoaXMucHJvcHMuc2Nyb2xsWSB8fCBzY3JvbGxUb3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgIXRoaXMuc3RhdGUuc2hvd0hlYWRlciAmJiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNob3dIZWFkZXI6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93SGVhZGVyICYmIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlcjogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNjcm9sbFkoc2Nyb2xsVG9wKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbEJlaGF2aW9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNldENsaWVudFdpZHRoLCBzZXRDbGllbnRIZWlnaHQsIGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZGNfd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY2xpZW50V2lkdGggIT0gZGNfd2lkdGggJiYgc2V0Q2xpZW50V2lkdGgoZGNfd2lkdGgpO1xyXG4gICAgICAgIGNvbnN0IGRjX2hlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgY2xpZW50SGVpZ2h0ICE9IGRjX2hlaWdodCAmJiBzZXRDbGllbnRIZWlnaHQoZGNfaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbEJlaGF2aW9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMucmVzaXplSGFuZGxlcigpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIpO1xyXG4gICAgICAgIGxvYWRGb250KCk7XHJcbiAgICAgICAgLy8gV2ViRm9udC5sb2FkKHtcclxuICAgICAgICAvLyAgICAgZ29vZ2xlOiB7XHJcbiAgICAgICAgLy8gICAgICAgICBmYW1pbGllczogWydNb250c2VycmF0OjMwMCw0MDAsNTAwLDYwMCw3MDAsODAwJywgJ0xleGVuZDozMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCddXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBpZiAoISF0aGlzLmNsb2NrUmVmKSB7XHJcbiAgICAgICAgLy8gICAgIG5ldyBjdXJzb3JlZmZlY3RzLmNsb2NrQ3Vyc29yKHsgZWxlbWVudDogdGhpcy5jbG9ja1JlZi5jdXJyZW50IH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgc2V0T3BlbkNvbnRlbnQoc3RhdHVzKSB7XHJcbiAgICAgICAgY29uc3QgeyBzZXRJc0FwcE9wZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGF6eUFjdCgwLjEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzKSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGVuQ29udGVudDogc3RhdHVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0SXNBcHBPcGVuKHN0YXR1cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc0FwcE9wZW4sIHBhZ2Vsb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChpc0FwcE9wZW4gJiYgIXByZXZQcm9wcy5pc0FwcE9wZW4pIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFnZWxvYWRpbmcgIT0gcHJldlByb3BzLnBhZ2Vsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwYWdlbG9hZGluZycsIHBhZ2Vsb2FkaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XHJcbiAgICAgICAgLy8g5L2g5ZCM5qC35Y+v5Lul5bCG6ZSZ6K+v5pel5b+X5LiK5oql57uZ5pyN5Yqh5ZmoICBcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2F1Z2h0IGFuIGVycm9yIGluIEVycm9yQm91bmRhcnlcIiwgZXJyb3IsIGVycm9ySW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZWxvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e319PlxyXG4gICAgICAgICAgICAgICAgPEdvb2dsZUNvbnNlbnQ+PC9Hb29nbGVDb25zZW50PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3BlbkNvbnRlbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhvdmVyQ3Vyc29yQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyTWVudXMgaGlkZT17IXRoaXMuc3RhdGUuc2hvd0hlYWRlcn0gYWN0aXZlcGFnZT0nYWJvdXQnPjwvSGVhZGVyTWVudXM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWluLXZpZXcgYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhbmRpbmc+PC9MYW5kaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtaW4tdmlldyBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9pbWcvcGFnZS9hYm91dC9hYm91dF91c19jb3Zlci5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbi12aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsaWVudHM+PC9DbGllbnRzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXZT48L1dlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyPjwvRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5jbG9ja1JlZn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlbG9hZGluZyA/IDxSZWRpcmVjdExvYWRpbmcgLz4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSG92ZXJDdXJzb3JCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8PjxQcmVsb2FkIG9uT3Blbj17diA9PiB0aGlzLnNldE9wZW5Db250ZW50KHYpfT5cclxuICAgICAgICAgICAgICAgICAgICA8L1ByZWxvYWQ+PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PGgxPiZuYnNwOzwvaDE+PC9kaXY+PC8+fVxyXG4gICAgICAgICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+KTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzUEM6IHN0YXRlLmNsaWVudFNsaWNlLmlzUEMsXHJcbiAgICAgICAgaXNUYWJsZXQ6IHN0YXRlLmNsaWVudFNsaWNlLmlzVGFibGV0LFxyXG4gICAgICAgIGlzQXBwT3Blbjogc3RhdGUuYmFzZVNsaWNlLmlzQXBwT3BlbixcclxuICAgICAgICBzY3JvbGxZOiBzdGF0ZS5zY3JvbGxTbGljZS5zY3JvbGxZLFxyXG4gICAgICAgIGNsaWVudFdpZHRoOiBzdGF0ZS5jbGllbnRTbGljZS5jbGllbnRXaWR0aCxcclxuICAgICAgICBjbGllbnRIZWlnaHQ6IHN0YXRlLmNsaWVudFNsaWNlLmNsaWVudEhlaWdodCxcclxuICAgICAgICBwYWdlbG9hZGluZzogc3RhdGUuYmFzZVNsaWNlLnJlZGlyZWN0bG9hZGluZyxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICBzZXRDbGllbnRXaWR0aCxcclxuICAgIHNldENsaWVudEhlaWdodCxcclxuICAgIHNldFNjcm9sbFksXHJcbiAgICBzZXRJc0FwcE9wZW5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERpZmZMZXR0ZXJzU2hvdyBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL2VmZmVjdHMvRGlmZkxldHRlcnNTaG93JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLWlubmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5nZGluZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8RGlmZkxldHRlcnNTaG93IGxldHRlcnM9e1tcclxuICAgICAgICAgICAgICAgICAgJ0EgJywgXHJcbiAgICAgICAgICAgICAgICAgICdGdWxsLVN0YWNrICcsIFxyXG4gICAgICAgICAgICAgICAgICAnZGlnaXRhbCAnLCBcclxuICAgICAgICAgICAgICAgICAgJ3N0dWRpbydcclxuICAgICAgICAgICAgICAgIF19IHJhdGlvPVwiMC41XCIvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nLWRlc2MnPkZyb20gc3RyYXRlZ3kgYW5kIGlkZWF0aW9uIHRvIGRlc2lnbiwgZGV2ZWxvcG1lbnQsIGNvbnRlbnQgY3JlYXRpb24sIG1hcmtldGluZyBhbmQgb25nb2luZyBvcHRpbWl6YXRpb24uIFdlIGNyZWF0ZSBpbnR1aXRpdmUgYW5kIGVuZ2FnaW5nIHdlYnNpdGVzLCBkaWdpdGFsIGV4cGVyaWVuY2VzIGFuZCBuYXRpdmUgYXBwcy48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnQC9jb21tb24vY29tcG9uZW50cy9DYXJvdXNlbCc7XHJcbmltcG9ydCBsYW5ndWFnZUxpc3REYXRhIGZyb20gJ0AvZGF0YS9sYW5ndWFnZXMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgV2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXHJcbiAgICAgICAgICAgIGljb25saXN0OiBbXHJcbiAgICAgICAgICAgICAgICAnLi4vYXNzZXRzL2ltZy9pY29ucy9zd2lmdC5zdmcnLFxyXG4gICAgICAgICAgICAgICAgJy4uL2Fzc2V0cy9pbWcvaWNvbnMvS290bGluIE9uZSBDb2xvciBMb2dvIG9uIFdoaXRlIFJHQi5zdmcnLFxyXG4gICAgICAgICAgICAgICAgJy4uL2Fzc2V0cy9pbWcvaWNvbnMvbm9kZS5zdmcnLFxyXG4gICAgICAgICAgICAgICAgJy4uL2Fzc2V0cy9pbWcvaWNvbnMvamF2YS5zdmcnLFxyXG4gICAgICAgICAgICAgICAgJy4uL2Fzc2V0cy9pbWcvaWNvbnMvaHRtbDUuc3ZnJyxcclxuICAgICAgICAgICAgICAgICcuLi9hc3NldHMvaW1nL2ljb25zL0xpbnV4LnN2ZycsXHJcbiAgICAgICAgICAgICAgICAnLi4vYXNzZXRzL2ltZy9pY29ucy9yZWFjdC5zdmcnLFxyXG4gICAgICAgICAgICAgICAgJy4uL2Fzc2V0cy9pbWcvaWNvbnMvcmVkaXMuc3ZnJyxcclxuICAgICAgICAgICAgICAgICcuLi9hc3NldHMvaW1nL2ljb25zL3Z1ZS5zdmcnLFxyXG4gICAgICAgICAgICAgICAgJy4uL2Fzc2V0cy9pbWcvaWNvbnMvd2ViLnN2ZycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGxhbmd1YWdlTGlzdDogbGFuZ3VhZ2VMaXN0RGF0YSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1dlIGNvbXBvbmVudCBkaWQgbW91bnQnLCB0aGlzLnN0YXRlLmxhbmd1YWdlTGlzdCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc1BDIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlLWlubmVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2UtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3dlLXRpdGxlJyBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyB9fT5XZSBzcGVjaWFsaXplIGluIFN3aWZ0LCBLb3RsaW4sIE5vZGUuanMsIFJlYWN0LCBWdWUuanMsIGFuZCBBSSwgaGFybmVzc2luZyBjdXR0aW5nLWVkZ2UgdGVjaG5vbG9naWVzIHRvIGJyaW5nIHlvdXIgaWRlYXMgdG8gbGlmZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlLWRpdmlkZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nd2UtaWNvbnMtd3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZS1pY29ucy1saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmljb25saXN0Lm1hcCgoaWNvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlLWljb25zLWxpc3QtaXRlbVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aWNvbn0gYWx0PVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZS1pY29ucy13cmFwcGVyIGZyb250ZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcm9udGVuZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBkaXJlY3Rpb249XCJyaWdodFwiIGl0ZW1zPXt0aGlzLnN0YXRlLmxhbmd1YWdlTGlzdC5mcm9udGVuZC5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtyZXR1cm4ge25hbWU6IGl0ZW0ubmFtZSwgaW1hZ2U6IGl0ZW0uaWNvbn19KX0gaW1nSGVpZ2h0PXtpc1BDID8gODUgOiA3MH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2UtaWNvbnMtd3JhcHBlciBiYWNrZW5kIHB0LTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tlbmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgZGlyZWN0aW9uPVwibGVmdFwiIGl0ZW1zPXt0aGlzLnN0YXRlLmxhbmd1YWdlTGlzdC5iYWNrZW5kLnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSkubWFwKChpdGVtLCBpbmRleCkgPT4ge3JldHVybiB7bmFtZTogaXRlbS5uYW1lLCBpbWFnZTogaXRlbS5pY29ufX0pfSBpbWdIZWlnaHQ9e2lzUEMgPyA4NSA6IDcwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZS1kaXZpZGVyJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzUEM6IHN0YXRlLmNsaWVudFNsaWNlLmlzUEMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFdlKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IGFwcCA9IGNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuYXBwLnJlbmRlcig8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxBcHAgLz5cclxuPC9Qcm92aWRlcj4pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxvZ29JY29uIiwiY29ubmVjdCIsImxhenlBY3QiLCJjaGVja0lzSW5WaWV3cG9ydCIsIkNhcm91c2VsIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlSW5kZXgiLCJtb3ZlWCIsImludGVydmFsIiwiaXNQbGF5IiwiY2FuUGxheSIsImNvbGxlY3RCb3hXaWR0aHMiLCJsaXN0SXRlbXMiLCJpdGVtcyIsImNvbmNhdCIsImNhcm91c2VsIiwiY3JlYXRlUmVmIiwiY29sbGVjdEJveFdpZHRoIiwiaW5kZXgiLCJzdHlsZSIsIndpZHRoIiwic2V0U3RhdGUiLCJjYWxjTGlzdEJveFdpZHRoIiwiaXNQQyIsInJlZHVjZSIsImFjYyIsImN1ciIsImhhbmRsZVNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZW5kZXJNYXRjaFdpZHRoIiwiYXV0b1BsYXkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aW1lRnJhbWUiLCJkaXJlY3Rpb24iLCJpbWdXaWR0aCIsImN1c01vdmVYIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJ1biIsInRoZW4iLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNjcm9sbFkiLCJzdGF0dXMiLCJyZW5kZXIiLCJpbWdIZWlnaHQiLCJjdXNJbWdXaWR0aCIsImN1c0ltZ0hlaWdodCIsInVuZGVmaW5lZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJyZWYiLCJqb2luIiwidHJhbnNmb3JtIiwibWFwIiwiaXRlbSIsImtleSIsIm9uQ2xpY2siLCJoZWlnaHQiLCJmbGV4QmFzaXMiLCJtYXJnaW5SaWdodCIsIm5hbWUiLCJzcmMiLCJpbWFnZSIsImFsdCIsInB1bGxJbWFnZUluZm8iLCJ2IiwibWFwU3RhdGVUb1Byb3BzIiwic2Nyb2xsU2xpY2UiLCJjbGllbnRTbGljZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZnJvbnRlbmQiLCJpY29uIiwiYmFja2VuZCIsIkFwcENvbnRleHQiLCJsb2FkRm9udCIsInNldENsaWVudFdpZHRoIiwic2V0Q2xpZW50SGVpZ2h0Iiwic2V0U2Nyb2xsWSIsInNldElzQXBwT3BlbiIsIkxhbmRpbmciLCJDbGllbnRzIiwiV2UiLCJQcmVsb2FkIiwiUmVkaXJlY3RMb2FkaW5nIiwiSGVhZGVyTWVudXMiLCJGb290ZXIiLCJJbWFnZSIsIkdvb2dsZUNvbnNlbnQiLCJIb3ZlckN1cnNvckJveCIsIkFwcCIsIm9wZW5Db250ZW50Iiwic2hvd0hlYWRlciIsImNsb2NrUmVmIiwiaGFuZGxlU2Nyb2xsQmVoYXZpb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGxIYW5kbGVyIiwic2Nyb2xsVG9wIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJyZXNpemVIYW5kbGVyIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJkY193aWR0aCIsImRvY3VtZW50RWxlbWVudCIsImRjX2hlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRPcGVuQ29udGVudCIsImJvZHkiLCJpc0FwcE9wZW4iLCJwYWdlbG9hZGluZyIsInNjcm9sbFRvIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJlcnJvciIsImVycm9ySW5mbyIsImNvbnNvbGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwidmFsdWUiLCJoaWRlIiwiYWN0aXZlcGFnZSIsIm9uT3BlbiIsImlzVGFibGV0IiwiYmFzZVNsaWNlIiwicmVkaXJlY3Rsb2FkaW5nIiwiRGlmZkxldHRlcnNTaG93IiwibGV0dGVycyIsInJhdGlvIiwibGFuZ3VhZ2VMaXN0RGF0YSIsImljb25saXN0IiwibGFuZ3VhZ2VMaXN0IiwidGV4dFRyYW5zZm9ybSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwiY3JlYXRlUm9vdCIsInN0b3JlIiwiYXBwIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9