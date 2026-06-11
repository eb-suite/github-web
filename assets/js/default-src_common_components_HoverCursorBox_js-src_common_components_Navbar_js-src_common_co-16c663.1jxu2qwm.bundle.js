"use strict";
(self["webpackChunkweb_webpack"] = self["webpackChunkweb_webpack"] || []).push([["default-src_common_components_HoverCursorBox_js-src_common_components_Navbar_js-src_common_co-16c663"],{

/***/ "./src/common/components/Hamburger.js":
/*!********************************************!*\
  !*** ./src/common/components/Hamburger.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hamburger)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class Hamburger extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: ["header-hamburger", this.props.isopen ? " unactive" : " active"].join(' ')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "hamburger-box",
      onClick: () => {
        this.props.onToggole();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "hamburger-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null))));
  }
}

/***/ }),

/***/ "./src/common/components/HoverCursorBox.js":
/*!*************************************************!*\
  !*** ./src/common/components/HoverCursorBox.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HoverCursorBoxEffect_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HoverCursorBoxEffect.lib */ "./src/common/components/HoverCursorBoxEffect.lib.js");


class HoverCursorBox extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  cursorRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  boxRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  contextBoxRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      cursorStyle: {},
      disabled: false
    };
  }
  handleMouseEnter = () => {
    if (this.state.disabled) return;
    this.setState({
      hover: true
    });
  };
  handleMounseMove = e => {
    const ref = this.boxRef;
    if (this.cursorRef.current) {
      this.setState({
        cursorStyle: {
          top: e.clientY - ref.current.getBoundingClientRect().top,
          left: e.clientX - ref.current.getBoundingClientRect().left
        }
      });
    }
  };
  handleMouseLeave = () => {
    this.setState({
      hover: false
    });
  };
  handleDisableClick = e => {
    this.setState({
      disabled: true
    });
  };
  initCursor = null;
  componentDidMount() {
    this.initCursor = new _HoverCursorBoxEffect_lib__WEBPACK_IMPORTED_MODULE_1__["default"](this.cursorRef.current, this.boxRef.current);
    this.contextBoxRef.current.addEventListener('mouseenter', this.handleMouseEnter);
    this.contextBoxRef.current.addEventListener('mousemove', this.handleMounseMove);
    this.contextBoxRef.current.addEventListener('mouseleave', this.handleMouseLeave);
    this.contextBoxRef.current.addEventListener('click', this.handleDisableClick);
    // this.setState({ cursorStyle: { top: Math.floor(Math.random() * window.innerHeight) + 'px', left: Math.floor(Math.random() * window.innerWidth) + 'px' } });
  }
  componentWillUnmount() {
    !!this.initCursor && this.initCursor.destroy(this.boxRef.current);
    this.contextBoxRef.current.addEventListener('mouseenter', this.handleMouseEnter);
    this.contextBoxRef.current.removeEventListener('mousemove', this.handleMounseMove);
    this.contextBoxRef.current.addEventListener('mouseleave', this.handleMouseLeave);
    this.contextBoxRef.current.addEventListener('click', this.handleDisableClick);
  }
  render() {
    // const { hover, disabled } = this.state;
    const {
      children,
      className,
      style
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      ref: this.boxRef,
      className: [className, 'cursor-box'].join(' '),
      style: style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      ref: this.cursorRef,
      className: "Cursor v-hidden"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      ref: this.contextBoxRef,
      className: "context-box"
    }, children));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoverCursorBox);

/***/ }),

/***/ "./src/common/components/HoverCursorBoxEffect.lib.js":
/*!***********************************************************!*\
  !*** ./src/common/components/HoverCursorBoxEffect.lib.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


// get AppContext global variables isPC

// const cursor = document.getElementById("cursor");
let amount = 20;
const sineDots = Math.floor(amount * 0.3);
const width = 26;
const idleTimeout = 150;
let lastFrame = 0;
let mousePosition = {
  x: Math.floor(Math.random() * window.innerWidth),
  y: Math.floor(Math.random() * window.innerHeight)
};
let dots = [];
let timeoutID;
let idle = false;

// let hoverButton;
// let hoverTL;

// class HoverButton {
//     constructor(id) {
//         this.hovered = false;
//         this.animatingHover = false;
//         this.forceOut = false;
//         this.timing = 0.65;
//         this.el = document.getElementById(id);
//         this.bg = this.el.getElementsByClassName("bg")[0];
//         this.el.addEventListener("mouseenter", this.onMouseEnter);
//         this.el.addEventListener("mouseleave", this.onMouseLeave);
//     }

//     onMouseEnter = () => {
//         this.hoverInAnim();
//     };

//     hoverInAnim = () => {
//         if (!this.hovered) {
//             this.hovered = true;
//             this.animatingHover = true;
//             this.forceOut = false;
//             gsap.fromTo(
//                 this.bg,
//                 this.timing,
//                 { x: "-112%" },
//                 {
//                     x: "-12%",
//                     ease: Power3.easeOut,
//                     onComplete: () => {
//                         this.animatingHover = false;
//                         if (this.forceOut) {
//                             this.foceOut = false;
//                             this.hoverOutAnim();
//                         }
//                     }
//                 }
//             );
//         }
//     };

//     onMouseLeave = () => {
//         if (!this.animatingHover) {
//             this.hoverOutAnim();
//         } else {
//             this.forceOut = true;
//         }
//     };

//     hoverOutAnim = () => {
//         this.hovered = false;
//         gsap.to(this.bg, this.timing, {
//             x: "100%",
//             ease: Power3.easeOut,
//             onComplete: () => {
//             }
//         });
//     };
// }

class Dot {
  constructor(index = 0, cursor) {
    this.index = index;
    this.anglespeed = 0.05;
    this.x = 0;
    this.y = 0;
    this.scale = 1 - 0.05 * index;
    // this.range = width / 2 - width / 2 * this.scale + 2;
    this.range = width / 2 - width / 2 * this.scale + 0.6;
    this.limit = width * 0.75 * this.scale;
    this.element = document.createElement("span");
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.element, {
      scale: this.scale
    });
    cursor.appendChild(this.element);
  }
  lock() {
    this.lockX = this.x;
    this.lockY = this.y;
    this.angleX = Math.PI * 2 * Math.random();
    this.angleY = Math.PI * 2 * Math.random();
  }
  draw(delta) {
    if (!idle || this.index <= sineDots) {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.element, {
        x: this.x,
        y: this.y
      });
    } else {
      this.angleX += this.anglespeed;
      this.angleY += this.anglespeed;
      this.y = this.lockY + Math.sin(this.angleY) * this.range;
      this.x = this.lockX + Math.sin(this.angleX) * this.range;
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.element, {
        x: this.x,
        y: this.y
      });
    }
  }
}

// class Circle {
//     constructor(id) {
//         const el = document.getElementById(id);
//         const parent = el.parentElement;
//         parent.removeChild(el);
//         const chars = el.innerText.split("");
//         chars.push(" ");
//         for (let i = 0; i < chars.length; i++) {
//             const span = document.createElement("span");
//             span.innerText = chars[i];
//             span.className = `char${i + 1}`;
//             parent.appendChild(span);
//         }
//     }
// }

function onMouseEnter(cursorRef) {
  cursorRef.classList.contains('v-hidden') && cursorRef.classList.remove('v-hidden');
}
function onMouseLeave(cursorRef) {
  cursorRef.classList.contains('v-hidden') || cursorRef.classList.add('v-hidden');
}
function init(cursorRef, boxRef) {
  boxRef.addEventListener("mousemove", onMouseMove);
  boxRef.addEventListener("touchmove", onTouchMove);
  boxRef.addEventListener("mouseenter", () => onMouseEnter(cursorRef));
  boxRef.addEventListener("mouseleave", () => onMouseLeave(cursorRef));
  // hoverButton = new HoverButton("button");
  // eslint-disable-next-line no-new
  // new Circle("circle-content");
  lastFrame += new Date();
  buildDots(cursorRef);
  render();
}
function destroy(boxRef) {
  // hoverButton.destroy();
  boxRef.removeEventListener("mousemove", onMouseMove);
  boxRef.removeEventListener("touchmove", onTouchMove);
  boxRef.removeEventListener("mouseenter", onMouseEnter);
  boxRef.removeEventListener("mouseleave", onMouseLeave);
  boxRef.removeEventListener("touche", onMouseLeave);
}

/*function limit(value, min, max) {
    return Math.min(Math.max(min, value), max);
}*/

function startIdleTimer() {
  timeoutID = setTimeout(goInactive, idleTimeout);
  idle = false;
}
function resetIdleTimer() {
  clearTimeout(timeoutID);
  startIdleTimer();
}
function goInactive() {
  idle = true;
  for (let dot of dots) {
    dot.lock();
  }
}
function buildDots(cursorRef) {
  amount = window.innerWidth > 768 ? 16 : Math.floor(amount / 2);
  for (let i = 0; i < amount; i++) {
    let dot = new Dot(i, cursorRef);
    dots.push(dot);
  }
}
const onMouseMove = event => {
  mousePosition.x = event.clientX - width / 2;
  mousePosition.y = event.clientY - width / 2;
  resetIdleTimer();
};
const onTouchMove = () => {
  mousePosition.x = event.touches[0].clientX - width / 2;
  mousePosition.y = event.touches[0].clientY - width / 2;
  resetIdleTimer();
};
const render = timestamp => {
  const delta = timestamp - lastFrame;
  positionCursor(delta);
  lastFrame = timestamp;
  requestAnimationFrame(render);
};

// let sincePositionX = 0;
// let sincePositionY = 0;
// let stopStatus = true;
const positionCursor = delta => {
  let x = mousePosition.x;
  let y = mousePosition.y;
  // if (sincePositionX === x && sincePositionY === y && !stopStatus) {
  //     stopStatus = true;
  // } else {
  //     if (stopStatus) stopStatus = false;
  // }
  const isPC = window.innerWidth > 768;
  dots.forEach((dot, index, dots) => {
    let nextDot = dots[index + 1] || dots[0];
    dot.x = x;
    dot.y = y;
    dot.draw(delta);
    if (!idle || index <= sineDots) {
      const dx = (nextDot.x - dot.x) * (isPC ? 0.30 : 0.21);
      const dy = (nextDot.y - dot.y) * (isPC ? 0.30 : 0.21);
      x += dx;
      y += dy;
    }
  });
  // sincePositionX = mousePosition.x;
  // sincePositionY = mousePosition.y;
};
class HoverCursorBoxEffect {
  constructor(cursorRef, boxRef) {
    init(cursorRef, boxRef);
  }
  destroy(boxRef) {
    destroy(boxRef);
    // hoverButton.destroy();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoverCursorBoxEffect);

/***/ }),

/***/ "./src/common/components/Navbar.js":
/*!*****************************************!*\
  !*** ./src/common/components/Navbar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hamburger */ "./src/common/components/Hamburger.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/AppContext */ "./src/context/AppContext.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





// import HoverTextUnderLine from './effects/HoverTextUnderLine';
// import { lazyAct } from '@/utils/';

class LogoSvg extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  timer = null;
  render() {
    let {
      color,
      activepage
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "logo-svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      width: "100%",
      height: "100%",
      viewBox: "0 0 738.000000 772.000000",
      preserveAspectRatio: "xMidYMid meet"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      transform: "translate(0.000000,772.000000) scale(0.100000,-0.100000)",
      fill: color || "#fff",
      stroke: "none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M680 7696 c-86 -19 -129 -35 -220 -82 -197 -101 -336 -264 -412 -484\r\n-32 -93 -33 -99 -33 -260 0 -145 3 -174 23 -240 80 -254 262 -452 503 -549\r\n158 -63 81 -61 1958 -61 l1706 0 400 836 c220 460 402 840 403 845 6 15 -4262\r\n9 -4328 -5z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M4231 4793 c-300 -626 -587 -1225 -638 -1331 l-92 -193 1367 4 c1351\r\n3 1368 3 1452 24 273 68 478 180 660 363 188 187 309 413 367 683 25 117 25\r\n399 -1 517 -55 255 -173 475 -353 661 -154 159 -322 266 -523 333 -206 69\r\n-198 68 -985 73 l-710 4 -544 -1138z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M725 5593 c-259 -36 -509 -218 -628 -458 -69 -138 -82 -200 -82 -385\r\n1 -152 3 -171 28 -245 83 -247 273 -452 496 -536 155 -57 57 -54 1411 -56\r\nl1245 -3 400 836 c220 460 402 840 403 845 4 9 -3211 10 -3273 2z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M710 3479 c-258 -43 -495 -221 -618 -464 -63 -127 -77 -193 -77 -375\r\n0 -161 1 -167 33 -260 80 -229 231 -400 442 -499 170 -79 116 -75 950 -78\r\nl745 -3 400 836 c220 460 402 840 403 845 5 12 -2207 9 -2278 -2z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M2655 1503 c-346 -724 -649 -1357 -672 -1405 l-42 -88 2097 3 2097 3\r\n100 22 c280 65 500 186 701 386 206 207 333 445 391 733 24 122 24 394 0 516\r\n-42 211 -132 412 -258 581 -210 279 -489 456 -848 538 l-96 22 -1420 3 -1420\r\n3 -630 -1317z"
    }))));
  }
}
class HeaderMenus extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      gotoHide: false,
      isHover: false,
      isWait: false
    };
    this.logoRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.clockRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
  }
  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    if (this.state.isOpen) {
      this.setState({
        isWait: true
      }, () => {
        !!this.timer && this.timer.cancel();
        this.timer = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.debounce)(() => {
          this.setState({
            isWait: false
          });
        }, 400)();
      });
    }
  }
  setMenuStatus(isOpen) {
    this.setState({
      isOpen: isOpen
    });
  }
  hideMenu() {
    this.setState({
      gotoHide: true
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isHover !== this.state.isHover) {
      this.logoRef.current.hide = true;
      window.requestAnimationFrame(() => {
        this.logoRef.current.hide = false;
      });
    }
  }
  setOnLogoHover() {
    !this.state.isHover && this.setState({
      isHover: true
    });
  }
  setOffLogoHover() {
    this.state.isHover && this.setState({
      isHover: false
    });
  }
  static contextType = _context_AppContext__WEBPACK_IMPORTED_MODULE_2__["default"];
  redirectTo = url => {
    const {
      setDirectUrl,
      enableRedirectLoading
    } = this.props;
    enableRedirectLoading(true);
    setDirectUrl(url);
  };
  scrollToTarget(target) {
    switch (target) {
      case 'solution':
        this.redirectTo('./projects/appify');
        break;
      case 'service':
        this.redirectTo('./services');
        break;
      case 'project':
        this.redirectTo('./projects');
        break;
      case 'about':
        this.redirectTo('./about');
        break;
      case 'contact':
        this.redirectTo('./contact');
        break;
    }
  }
  handleRedirect = (target, e) => {
    e.preventDefault();
    e.stopPropagation();
    switch (target) {
      case 'solution':
        this.redirectTo('./projects/appify');
        break;
      case 'service':
        this.redirectTo('./services');
        break;
      case 'project':
        this.redirectTo('./projects');
        break;
      case 'about':
        this.redirectTo('./about');
        break;
      case 'contact':
        this.redirectTo('./contact');
        break;
    }
  };
  render() {
    const {
      isPC,
      scrollY
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: ["header-navbar", this.props.hide ? "hide-it" : "", isPC ? "ispc" : "ismb", scrollY > 100 ? 'mix-it' : '', this.state.isOpen || this.state.isWait ? "menu-open" : ""].join(' ')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "header-navbar-inner"
    }, isPC ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: this.logoRef,
      onMouseEnter: () => {
        this.setOnLogoHover();
      },
      onMouseLeave: () => {
        this.setOffLogoHover();
      },
      className: "menu-logo",
      onClick: () => this.redirectTo('/'),
      style: {
        paddingTop: '4px',
        paddingBottom: '4px',
        paddingRight: '4px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoSvg, {
      color: "#fff"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "header-navbar-menu-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "list-unstyled"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: ["menu-item off-underline", this.props.activepage == 'appify' ? 'menu-active' : null].join(' '),
      onClick: e => this.handleRedirect('solution', e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Solutions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: ["menu-item off-underline", this.props.activepage == 'projects' ? 'menu-active' : null].join(' '),
      onClick: e => this.handleRedirect('project', e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Projects"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: ["menu-item off-underline", this.props.activepage == 'services' ? 'menu-active' : null].join(' '),
      onClick: e => this.handleRedirect('service', e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Services"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: ["menu-item off-underline", this.props.activepage == 'about' ? 'menu-active' : null].join(' '),
      onClick: e => this.handleRedirect('about', e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "About"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: ["menu-item off-underline", this.props.activepage == 'contact' ? 'menu-active' : null].join(' '),
      onClick: e => this.handleRedirect('contact', e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Contact")))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "menu-logo",
      onClick: () => this.redirectTo('/'),
      style: {
        paddingTop: '4px',
        paddingBottom: '4px',
        paddingRight: '4px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoSvg, {
      color: "#fff"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Hamburger__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isopen: this.state.isOpen,
      onToggole: this.toggleMenu.bind(this)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "header-navbar-menu-box" + (this.state.isOpen ? " show" : this.state.isWait ? " unshow" : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "list-unstyled"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      onClick: e => this.handleRedirect('solution', e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "menu-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Solutions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      onClick: e => this.handleRedirect('project', e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "menu-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Projects"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      onClick: e => this.handleRedirect('service', e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "menu-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Services"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      onClick: e => this.handleRedirect('about', e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "menu-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "About"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      onClick: e => this.handleRedirect('contact', e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "menu-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#"
    }, "Contact")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "bottom-menu-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      cellPadding: "0",
      cellSpacing: "0",
      border: "0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        paddingRight: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      t: "1716452600007",
      className: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "3828",
      width: "2.8vh",
      height: "2.8vh"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M707.456 830.741333H280.554667a94.570667 94.570667 0 0 1-94.464-94.4V309.333333a94.570667 94.570667 0 0 1 94.442666-94.464h163.541334a32 32 0 1 1 0 64h-163.52a30.485333 30.485333 0 0 0-30.464 30.464v427.008a30.485333 30.485333 0 0 0 30.442666 30.442667h426.922667a30.485333 30.485333 0 0 0 30.464-30.442667v-173.482666a32 32 0 1 1 64 0v173.482666a94.592 94.592 0 0 1-94.464 94.4zM501.12 532.48a32 32 0 0 1-22.613333-54.613333L758.485333 197.802667a32 32 0 0 1 45.248 45.248L523.733333 523.093333a31.914667 31.914667 0 0 1-22.613333 9.386667z m304.832-103.402667a32 32 0 0 1-32-32v-161.152h-177.92a32 32 0 1 1 0-64h194.56a47.402667 47.402667 0 0 1 47.36 47.36v177.792a32 32 0 0 1-32 32z",
      "p-id": "3829",
      fill: "#ffffff"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "menu-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "mailto:enquiry@eb-suite.com",
      target: "_blank"
    }, "Get In Touch")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        paddingRight: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      t: "1716452259786",
      className: "icon",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "2612",
      width: "2.8vh",
      height: "2.8vh"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M505.344 0C332.288 0 192 140.288 192 315.904c0 173.056 169.984 391.68 315.904 569.856 143.36-181.248 315.904-394.24 315.904-569.856C821.248 140.288 680.96 0 505.344 0z m0 524.288C389.12 524.288 296.96 429.568 296.96 315.904 296.96 199.68 391.68 108.032 504.832 108.032c116.224 0 207.872 94.72 207.872 207.872 3.072 116.224-91.136 208.384-207.36 208.384z",
      fill: "#ffffff",
      "p-id": "2613"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: "M386.56 315.904c0 32.256 13.312 61.952 35.328 83.968C443.392 421.376 476.16 435.2 505.856 435.2c32.256 0 61.952-13.312 83.968-35.328 21.504-21.504 35.328-54.272 35.328-83.968 0-32.256-13.312-61.952-35.328-83.968-21.504-21.504-54.272-35.328-83.968-35.328-32.256 0-61.952 13.312-83.968 35.328-22.016 22.016-35.328 51.712-35.328 83.968zM507.904 1024c-202.752 0-408.064-65.024-408.064-186.368 0-67.584 67.584-124.416 186.368-159.232 21.504-5.632 43.008 5.632 48.64 27.136 5.632 21.504-5.632 43.008-27.136 48.64-89.088 24.064-129.536 59.392-129.536 83.968 0 43.008 129.536 108.032 332.288 108.032s332.288-65.024 332.288-108.032c0-24.064-48.64-61.952-137.728-86.528-21.504-5.632-32.256-27.136-27.136-48.64 5.632-21.504 27.136-32.256 48.64-27.136 124.416 32.256 197.12 91.648 197.12 162.304-7.68 120.832-212.992 185.856-415.744 185.856z",
      fill: "#ffffff",
      "p-id": "2614"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "menu-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "https://www.google.com.hk/maps/place/%E6%96%B0%E8%92%B2%E5%B4%97%E9%9B%99%E5%96%9C%E8%A1%979%E8%99%9F%E5%8C%AF%E9%81%94%E5%95%86%E6%A5%AD%E4%B8%AD%E5%BF%83/@22.3378804,114.1952828,17z/data=!3m1!4b1!4m6!3m5!1s0x340406d0a990ed91:0x943c05253c5637f8!8m2!3d22.3378755!4d114.1978577!16s%2Fg%2F12hq4w_d8?hl=zh-TW&entry=ttu",
      target: "_blank"
    }, "2101, Win Plaza, 9 Sheung Hei Street, Hong Kong"))))))))))));
  }
}
const mapStateToProps = state => ({
  isPC: state.clientSlice.isPC,
  scrollY: state.scrollSlice.scrollY
});
const mapDispatchToProps = {
  setDirectUrl: _store_baseSlice__WEBPACK_IMPORTED_MODULE_3__.setDirectUrl,
  enableRedirectLoading: _store_baseSlice__WEBPACK_IMPORTED_MODULE_3__.enableRedirectLoading
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, mapDispatchToProps)(HeaderMenus));

/***/ }),

/***/ "./src/common/components/Preload.js":
/*!******************************************!*\
  !*** ./src/common/components/Preload.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Preload)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

// import { lazyAct } from "@/utils/index";

class Preload extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      onshow: true,
      showBefore: true
    };
  }
  timer = null;
  componentDidMount() {
    // this.timer = debounce(() => {
    this.setState({
      loaded: true
    });
    // }, 0)();
  }
  showTimer = null;
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.loaded != this.state.loaded && this.state.loaded) {
      this.setState({
        showBefore: false
      }, () => {
        this.setState({
          onshow: false
        });
        this.props.onOpen(true);
        // !!this.showTimer && this.showTimer.cancel();
        // this.showTimer = debounce(() => {
        this.setState({
          loaded: true
        });
        // }, 0)();
      });
    }
  }
  componentWillUnmount() {
    !!this.timer && this.timer.cancel();
    !!this.showTimer && this.showTimer.cancel();
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, this.state.onshow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ["loader-box", this.state.loaded ? "unactive" : "", this.state.showBefore ? "show-before" : ""].join(' ')
    }) : null);
  }
}

/***/ }),

/***/ "./src/common/components/RedirectLoading.js":
/*!**************************************************!*\
  !*** ./src/common/components/RedirectLoading.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");




class RedirectLoading extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  callbackEvent = () => {
    const {
      redirectUrl
    } = this.props;
    if (/^(http|https):\/\//.test(redirectUrl)) return window.open(redirectUrl, '_blank');else {
      let linkUrl = (window.location.pathname === '/' ? '' : '../') + redirectUrl;
      linkUrl = linkUrl.replace(/\/\//g, '/');
      linkUrl = linkUrl.replace(/\/\//g, '/');
      linkUrl = linkUrl.replace(/\/\//g, '/');
      return window.location.href = linkUrl;
    }
  };
  componentDidMount() {
    const {
      redirectloading,
      enableRedirectLoading,
      disableRedirectLoading
    } = this.props;
    enableRedirectLoading();
    if (redirectloading) {
      this.callbackEvent();
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.lazyAct)(0.3).then(() => {
        disableRedirectLoading();
      });
    }
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "redirect-loader-layer"
    });
  }
}
const mapStateToProps = state => ({
  redirectloading: state.baseSlice.redirectloading,
  redirectUrl: state.baseSlice.redirectUrl
});
const mapDispatchToProps = {
  enableRedirectLoading: _store_baseSlice__WEBPACK_IMPORTED_MODULE_2__.enableRedirectLoading,
  disableRedirectLoading: _store_baseSlice__WEBPACK_IMPORTED_MODULE_2__.disableRedirectLoading
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(RedirectLoading));

/***/ }),

/***/ "./src/common/components/tracking/GoogleConsent.js":
/*!*********************************************************!*\
  !*** ./src/common/components/tracking/GoogleConsent.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/esm/index.esm.js");
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/analytics */ "./node_modules/firebase/analytics/dist/esm/index.esm.js");

// Import the functions you need from the SDKs you need


class GoogleConsent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConsented: false
    };
    this.contentRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }
  initGoogletag() {
    // const script = document.createElement('script');
    // script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-1010348604';
    // document.head.appendChild(script);
    // Load Tag Manager script.
    var gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-MG94C9KL';
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(gtmScript, firstScript);
  }

  // gtag() {
  //     window.dataLayer = window.dataLayer || [];
  //     dataLayer.push(arguments);
  // }

  closeConsentBox = () => {
    this.setState({
      isConsented: true
    });
  };

  // clickAllowHandler = () => {
  //     localStorage.setItem("cookieConsent", "accepted");
  //     this.initGoogletag();
  //     this.gtag('js', new Date());
  //     this.gtag('config', 'AW-1010348604');
  //     this.gtag('event', 'consent', { 'event_category': 'consent', 'event_label': 'allow' });
  //     this.closeConsentBox();
  // }

  clickDeclineHandler = () => {
    localStorage.setItem("cookieConsent", "declined");
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('consent', 'update', {
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      ad_storage: 'denied',
      analytics_storage: 'denied'
    });
    gtag('event', 'consent', {
      'event_category': 'consent',
      'event_label': 'decline'
    });
    this.closeConsentBox();
  };
  clickAllowHandler() {
    localStorage.setItem("cookieConsent", "accepted");
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted'
    });
    this.initGoogletag();
    this.closeConsentBox();
  }
  fireBaseInit() {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDtDi9_zPArAcPm5kFx_PTVsd1mUfxMk6g",
      authDomain: "eb-official-website.firebaseapp.com",
      projectId: "eb-official-website",
      storageBucket: "eb-official-website.appspot.com",
      messagingSenderId: "884194019502",
      appId: "1:884194019502:web:6195a354cb9c719fbbc53f",
      measurementId: "G-JFX4F93T84"
    };

    // Initialize Firebase
    const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);
    const analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_2__.getAnalytics)(app);
  }
  componentDidMount() {
    this.fireBaseInit();
    if (localStorage.getItem("cookieConsent") === "accepted") {
      this.setState({
        isConsented: true
      });
      gtag('consent', 'update', {
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        ad_storage: 'granted',
        analytics_storage: 'granted'
      });
      this.initGoogletag();
    }
  }

  // handleConsent = () => {
  //     document.cookie = 'consentCookie=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
  //     this.setState({ isConsented: true });
  // }

  render() {
    const {
      isConsented
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !isConsented && false ? /*#__PURE__*/0 : null);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleConsent);

/***/ }),

/***/ "./src/context/AppContext.js":
/*!***********************************!*\
  !*** ./src/context/AppContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  isPC: window.innerWidth > 768,
  isTablet: window.innerWidth > 768 && window.innerWidth < 1200,
  scrollY: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);

/***/ }),

/***/ "./src/store/baseSlice.js":
/*!********************************!*\
  !*** ./src/store/baseSlice.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   disableRedirectLoading: () => (/* binding */ disableRedirectLoading),
/* harmony export */   enableRedirectLoading: () => (/* binding */ enableRedirectLoading),
/* harmony export */   setDirectUrl: () => (/* binding */ setDirectUrl),
/* harmony export */   setIsAppOpen: () => (/* binding */ setIsAppOpen)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");

const initialState = {
  isAppOpen: false,
  redirectloading: false,
  redirectUrl: null
};
const baseSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'base',
  initialState,
  reducers: {
    setIsAppOpen: (state, action) => {
      state.isAppOpen = action.payload;
    },
    setDirectUrl: (state, action) => {
      state.redirectUrl = action.payload;
    },
    enableRedirectLoading: (state, action) => {
      state.redirectloading = true;
    },
    disableRedirectLoading: (state, action) => {
      state.redirectloading = false;
    }
  }
});
const {
  setIsAppOpen,
  setDirectUrl,
  enableRedirectLoading,
  disableRedirectLoading
} = baseSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSlice.reducer);

/***/ }),

/***/ "./src/store/clientSlice.js":
/*!**********************************!*\
  !*** ./src/store/clientSlice.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setClientHeight: () => (/* binding */ setClientHeight),
/* harmony export */   setClientWidth: () => (/* binding */ setClientWidth)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");

const initialState = {
  clientWidth: 0,
  clientHeight: 0,
  isPC: window.clientWidth >= 768,
  isTablet: window.clientWidth >= 768 && window.clientWidth < 1024
};
const clientSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'client',
  initialState,
  reducers: {
    setClientWidth: (state, action) => {
      state.clientWidth = action.payload;
      state.isPC = action.payload >= 768;
      state.isTablet = action.payload >= 768 && action.payload < 1024;
    },
    setClientHeight: (state, action) => {
      state.clientHeight = action.payload;
    }
  }
});
const {
  setClientWidth,
  setClientHeight
} = clientSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientSlice.reducer);

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/redux/dist/redux.mjs");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var _baseSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseSlice */ "./src/store/baseSlice.js");
/* harmony import */ var _clientSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientSlice */ "./src/store/clientSlice.js");
/* harmony import */ var _scrollSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollSlice */ "./src/store/scrollSlice.js");




const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
  baseSlice: _baseSlice__WEBPACK_IMPORTED_MODULE_0__["default"],
  clientSlice: _clientSlice__WEBPACK_IMPORTED_MODULE_1__["default"],
  scrollSlice: _scrollSlice__WEBPACK_IMPORTED_MODULE_2__["default"]
});
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({
  reducer: rootReducer
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/store/scrollSlice.js":
/*!**********************************!*\
  !*** ./src/store/scrollSlice.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setInScrollContentViewInitTop: () => (/* binding */ setInScrollContentViewInitTop),
/* harmony export */   setInitViewScrollToLeft: () => (/* binding */ setInitViewScrollToLeft),
/* harmony export */   setOnPullScrollContentHeight: () => (/* binding */ setOnPullScrollContentHeight),
/* harmony export */   setScrollContentHeight: () => (/* binding */ setScrollContentHeight),
/* harmony export */   setScrollContentIsInView: () => (/* binding */ setScrollContentIsInView),
/* harmony export */   setScrollContentMoveY: () => (/* binding */ setScrollContentMoveY),
/* harmony export */   setScrollPosition: () => (/* binding */ setScrollPosition),
/* harmony export */   setScrollY: () => (/* binding */ setScrollY)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");

const scrollSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'scroll',
  initialState: {
    scrollY: 0,
    scrollPosition: 0,
    scrollContentIsInView: false,
    scrollContentIsInViewInitTop: 0,
    scrollContentHeight: 0,
    initViewScrollToLeft: 0,
    onPullScrollContentHeight: '100vh',
    scrollContentMoveY: 0
  },
  reducers: {
    setScrollY: (state, action) => {
      state.scrollY = action.payload;
    },
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload;
    },
    setScrollContentIsInView: (state, action) => {
      state.scrollContentIsInView = action.payload;
    },
    setInScrollContentViewInitTop: (state, action) => {
      state.scrollContentIsInViewInitTop = action.payload;
    },
    setScrollContentHeight: (state, action) => {
      state.scrollContentHeight = action.payload;
    },
    setInitViewScrollToLeft: (state, action) => {
      state.initViewScrollToLeft = action.payload;
    },
    setOnPullScrollContentHeight: (state, action) => {
      state.onPullScrollContentHeight = action.payload;
    },
    setScrollContentMoveY: (state, action) => {
      state.scrollContentMoveY = action.payload;
    }
  }
});
const {
  setScrollY,
  setScrollPosition,
  setScrollContentIsInView,
  setInScrollContentViewInitTop,
  setScrollContentHeight,
  setInitViewScrollToLeft,
  setOnPullScrollContentHeight,
  setScrollContentMoveY
} = scrollSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollSlice.reducer);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsInHalfViewport: () => (/* binding */ checkIsInHalfViewport),
/* harmony export */   checkIsInViewport: () => (/* binding */ checkIsInViewport),
/* harmony export */   checkIsSupportWebp: () => (/* binding */ checkIsSupportWebp),
/* harmony export */   getRelWidth: () => (/* binding */ getRelWidth),
/* harmony export */   lazyAct: () => (/* binding */ lazyAct),
/* harmony export */   lazyCall: () => (/* binding */ lazyCall),
/* harmony export */   loadFont: () => (/* binding */ loadFont),
/* harmony export */   redirectTo: () => (/* binding */ redirectTo)
/* harmony export */ });
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


// export const lazyAct = (func) => {
//     let result;
//     return () => {
//         if (!result) {
//             result = func();
//         }
//     }
// }

// const debounce = (func, wait) => {
//     let timeout;
//     return (...args) => {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             func.apply(null, args);
//         }, wait);
//     }
// }

const lazyAct = seconds => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      try {
        clearTimeout(timer);
        resolve();
      } catch (error) {
        clearTimeout(timer);
        reject(error);
      }
    }, seconds * 1000);
  });
};
function lazyCall(func, ...args) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
      clearTimeout(timer);
    }, 300);
  };
}
function checkIsInViewport(element, callback) {
  const rect = element.getBoundingClientRect();
  callback.call(null, (rect.bottom <= 7 / 8 * window.innerHeight || rect.top <= window.innerHeight) && rect.bottom >= 0);
}
function checkIsInHalfViewport(element, callback) {
  const rect = element.getBoundingClientRect();
  callback.call(null, rect.bottom <= 1 / 2 * document.documentElement.clientHeight + rect.height && rect.bottom >= 0 && rect.top <= 1 / 2 * document.documentElement.clientHeight);
}
function checkIsSupportWebp() {
  return true;
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}
function redirectTo(url) {
  if (/^http/.test(url)) return window.open(url, '_blank');
  return window.location.href = url;
}
function getRelWidth(element) {
  if (!element) return 0;
  const rect = element.getBoundingClientRect();
  return rect.width;
}
function loadFont() {
  loadNoScriptTag.call(null);
  webfontloader__WEBPACK_IMPORTED_MODULE_0___default().load({
    defer: true,
    async: true,
    timeout: 1000,
    google: {
      // families: ['Montserrat:300,400,500,600,700,800', 'Lexend:300,400,500,600,700,800', 'Raleway:300,400,500,600,700,800']
      families: ['Montserrat:600,700', 'Raleway:400,500,600']
    },
    active: () => {
      loadGtag.call(null);
    }
  });
}
function loadGtag() {
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js';
  script.defer = true; // optional but recommended
  script.async = true; // optional but recommended
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('consent', 'default', {
    'ad_user_data': 'granted',
    'ad_personalization': 'granted',
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
    'wait_for_update': 500
  });
  gtag('js', new Date());
  gtag('config', 'AW-1010348604');
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    'event': 'gtm.js'
  });
  return () => {
    script.remove();
  };
}
function loadNoScriptTag() {
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.googletagmanager.com/ns.html?id=AW-1010348604';
  iframe.height = 0;
  iframe.width = 0;
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  document.head.appendChild(noscript);
  return () => {
    noscript.remove();
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2RlZmF1bHQtc3JjX2NvbW1vbl9jb21wb25lbnRzX0hvdmVyQ3Vyc29yQm94X2pzLXNyY19jb21tb25fY29tcG9uZW50c19OYXZiYXJfanMtc3JjX2NvbW1vbl9jby0xNmM2NjMuMWp4dTJxd20uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNoQixNQUFNQyxTQUFTLFNBQVNELDRDQUFlLENBQUM7RUFDbkRHLFdBQVdBLENBQUNDLEtBQUssRUFBRTtJQUNmLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQ25CO0VBRUFDLE1BQU1BLENBQUEsRUFBRztJQUNMLG9CQUFPTixnREFBQTtNQUFLUSxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEdBQUc7SUFBRSxnQkFDL0ZWLGdEQUFBO01BQUtRLFNBQVMsRUFBQyxlQUFlO01BQUNHLE9BQU8sRUFBRUEsQ0FBQSxLQUFNO1FBQUUsSUFBSSxDQUFDUCxLQUFLLENBQUNRLFNBQVMsQ0FBQyxDQUFDO01BQUM7SUFBRSxnQkFDckVaLGdEQUFBO01BQUtRLFNBQVMsRUFBQztJQUFpQixnQkFDNUJSLGdEQUFBLGFBQVksQ0FBQyxlQUNiQSxnREFBQSxhQUFZLENBQ1gsQ0FDSixDQUNKLENBQUM7RUFDVjtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCMEI7QUFDNEI7QUFHdEQsTUFBTWMsY0FBYyxTQUFTZCx3REFBZSxDQUFDO0VBRXpDZSxTQUFTLGdCQUFHZixzREFBZSxDQUFDLENBQUM7RUFFN0JpQixNQUFNLGdCQUFHakIsc0RBQWUsQ0FBQyxDQUFDO0VBRTFCa0IsYUFBYSxnQkFBR2xCLHNEQUFlLENBQUMsQ0FBQztFQUVqQ0csV0FBV0EsQ0FBQ0MsS0FBSyxFQUFFO0lBQ2YsS0FBSyxD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QUUsSUFBSXJILElBQUksQ0FBQyxDQUFDLENBQUM7RUFDdEJxSCxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQztFQUMvQnpKLE1BQU0sQ0FBQzBKLFNBQVMsQ0FBQzdHLElBQUksQ0FBQztJQUFFLFdBQVcsRUFBRSxJQUFJVCxJQUFJLENBQUMsQ0FBQyxDQUFDd04sT0FBTyxDQUFDLENBQUM7SUFBRSxPQUFPLEVBQUU7RUFBUyxDQUFDLENBQUM7RUFDL0UsT0FBTyxNQUFNO0lBQ1RGLE1BQU0sQ0FBQzVOLE1BQU0sQ0FBQyxDQUFDO0VBQ25CLENBQUM7QUFDTDtBQUVBLFNBQVNvTixlQUFlQSxDQUFBLEVBQUc7RUFDdkIsTUFBTVcsUUFBUSxHQUFHOU8sUUFBUSxDQUFDL0QsYUFBYSxDQUFDLFVBQVUsQ0FBQztFQUNuRCxNQUFNOFMsTUFBTSxHQUFHL08sUUFBUSxDQUFDL0QsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQzhTLE1BQU0sQ0FBQzlHLEdBQUcsR0FBRywyREFBMkQ7RUFDeEU4RyxNQUFNLENBQUMxTCxNQUFNLEdBQUcsQ0FBQztFQUNqQjBMLE1BQU0sQ0FBQ3BRLEtBQUssR0FBRyxDQUFDO0VBQ2hCb1EsTUFBTSxDQUFDM1EsS0FBSyxDQUFDNFEsT0FBTyxHQUFHLE1BQU07RUFDN0JELE1BQU0sQ0FBQzNRLEtBQUssQ0FBQzZRLFVBQVUsR0FBRyxRQUFRO0VBQ2xDSCxRQUFRLENBQUM1TyxXQUFXLENBQUM2TyxNQUFNLENBQUM7RUFDNUIvTyxRQUFRLENBQUM0TyxJQUFJLENBQUMxTyxXQUFXLENBQUM0TyxRQUFRLENBQUM7RUFDbkMsT0FBTyxNQUFNO0lBQ1RBLFFBQVEsQ0FBQy9OLE1BQU0sQ0FBQyxDQUFDO0VBQ3JCLENBQUM7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9jb21tb24vY29tcG9uZW50cy9Ib3ZlckN1cnNvckJveC5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9jb21tb24vY29tcG9uZW50cy9Ib3ZlckN1cnNvckJveEVmZmVjdC5saWIuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL1ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvUmVkaXJlY3RMb2FkaW5nLmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL3RyYWNraW5nL0dvb2dsZUNvbnNlbnQuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvY29udGV4dC9BcHBDb250ZXh0LmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3N0b3JlL2Jhc2VTbGljZS5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9zdG9yZS9jbGllbnRTbGljZS5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy9zdG9yZS9zY3JvbGxTbGljZS5qcyIsIndlYnBhY2s6Ly93ZWItd2VicGFjay8uL3NyYy91dGlscy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbWJ1cmdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge31cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtbXCJoZWFkZXItaGFtYnVyZ2VyXCIsIHRoaXMucHJvcHMuaXNvcGVuID8gXCIgdW5hY3RpdmVcIiA6IFwiIGFjdGl2ZVwiXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucHJvcHMub25Ub2dnb2xlKCkgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDdXN0b21DdXJzb3IgZnJvbSAnLi9Ib3ZlckN1cnNvckJveEVmZmVjdC5saWInO1xyXG5cclxuXHJcbmNsYXNzIEhvdmVyQ3Vyc29yQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjdXJzb3JSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHJcbiAgICBib3hSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuXHJcbiAgICBjb250ZXh0Qm94UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaG92ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJzb3JTdHlsZToge30sXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGlzYWJsZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXI6IHRydWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZU1vdW5zZU1vdmUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuYm94UmVmO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnNvclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IGUuY2xpZW50WSAtIHJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBlLmNsaWVudFggLSByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiBmYWxzZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlRGlzYWJsZUNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzYWJsZWQ6IHRydWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRDdXJzb3IgPSBudWxsO1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEN1cnNvciA9IG5ldyBDdXN0b21DdXJzb3IodGhpcy5jdXJzb3JSZWYuY3VycmVudCwgdGhpcy5ib3hSZWYuY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Qm94UmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGFuZGxlTW91c2VFbnRlcik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Qm94UmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3Vuc2VNb3ZlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHRCb3hSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVNb3VzZUxlYXZlKTtcclxuICAgICAgICB0aGlzLmNvbnRleHRCb3hSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRGlzYWJsZUNsaWNrKTsgXHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGN1cnNvclN0eWxlOiB7IHRvcDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVySGVpZ2h0KSArICdweCcsIGxlZnQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lcldpZHRoKSArICdweCcgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICAhIXRoaXMuaW5pdEN1cnNvciAmJiB0aGlzLmluaXRDdXJzb3IuZGVzdHJveSh0aGlzLmJveFJlZi5jdXJyZW50KTtcclxuICAgICAgICB0aGlzLmNvbnRleHRCb3hSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oYW5kbGVNb3VzZUVudGVyKTtcclxuICAgICAgICB0aGlzLmNvbnRleHRCb3hSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdW5zZU1vdmUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dEJveFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZU1vdXNlTGVhdmUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dEJveFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEaXNhYmxlQ2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zdCB7IGhvdmVyLCBkaXNhYmxlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIHN0eWxlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLmJveFJlZn0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAnY3Vyc29yLWJveCddLmpvaW4oJyAnKX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHJlZj17dGhpcy5jdXJzb3JSZWZ9IGNsYXNzTmFtZT17Wydob3Zlci1tb3VzZS1jdXJzb3InLCBob3ZlciA/ICdob3Zlci1tb3VzZS1jdXJzb3ItLWlzLXZpc2libGUnIDogbnVsbF0uam9pbignICcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Li4uc3R5bGUsLi4udGhpcy5zdGF0ZS5jdXJzb3JTdHlsZSwgY3Vyc29yOiBob3ZlciAmJiAhZGlzYWJsZWQgPyAncG9pbnRlcic6ICdkZWZhdWx0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEyXCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIHdpZHRoPVwiODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpbHRlciBpZD1cImdvb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj1cIlNvdXJjZUdyYXBoaWNcIiBzdGREZXZpYXRpb249XCI2XCIgcmVzdWx0PVwiYmx1clwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49XCJibHVyXCIgbW9kZT1cIm1hdHJpeFwiIHZhbHVlcz1cIjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDM1IC0xNVwiIHJlc3VsdD1cImdvb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cImdvb1wiIG9wZXJhdG9yPVwiYXRvcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpbHRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3RoaXMuY3Vyc29yUmVmfSBjbGFzc05hbWU9XCJDdXJzb3Igdi1oaWRkZW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17dGhpcy5jb250ZXh0Qm94UmVmfSBjbGFzc05hbWU9XCJjb250ZXh0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG92ZXJDdXJzb3JCb3g7XHJcbiIsImltcG9ydCBnc2FwLCB7IFBvd2VyMyB9IGZyb20gXCJnc2FwXCI7XHJcblxyXG4vLyBnZXQgQXBwQ29udGV4dCBnbG9iYWwgdmFyaWFibGVzIGlzUENcclxuXHJcbi8vIGNvbnN0IGN1cnNvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3Vyc29yXCIpO1xyXG5sZXQgYW1vdW50ID0gMjA7XHJcbmNvbnN0IHNpbmVEb3RzID0gTWF0aC5mbG9vcihhbW91bnQgKiAwLjMpO1xyXG5jb25zdCB3aWR0aCA9IDI2O1xyXG5jb25zdCBpZGxlVGltZW91dCA9IDE1MDtcclxubGV0IGxhc3RGcmFtZSA9IDA7XHJcbmxldCBtb3VzZVBvc2l0aW9uID0geyB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCksIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdpbmRvdy5pbm5lckhlaWdodCkgfTtcclxubGV0IGRvdHMgPSBbXTtcclxubGV0IHRpbWVvdXRJRDtcclxubGV0IGlkbGUgPSBmYWxzZTtcclxuXHJcbi8vIGxldCBob3ZlckJ1dHRvbjtcclxuLy8gbGV0IGhvdmVyVEw7XHJcblxyXG4vLyBjbGFzcyBIb3ZlckJ1dHRvbiB7XHJcbi8vICAgICBjb25zdHJ1Y3RvcihpZCkge1xyXG4vLyAgICAgICAgIHRoaXMuaG92ZXJlZCA9IGZhbHNlO1xyXG4vLyAgICAgICAgIHRoaXMuYW5pbWF0aW5nSG92ZXIgPSBmYWxzZTtcclxuLy8gICAgICAgICB0aGlzLmZvcmNlT3V0ID0gZmFsc2U7XHJcbi8vICAgICAgICAgdGhpcy50aW1pbmcgPSAwLjY1O1xyXG4vLyAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbi8vICAgICAgICAgdGhpcy5iZyA9IHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJnXCIpWzBdO1xyXG4vLyAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5vbk1vdXNlRW50ZXIpO1xyXG4vLyAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbk1vdXNlTGVhdmUpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIG9uTW91c2VFbnRlciA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLmhvdmVySW5BbmltKCk7XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGhvdmVySW5BbmltID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGlmICghdGhpcy5ob3ZlcmVkKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuaG92ZXJlZCA9IHRydWU7XHJcbi8vICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW5nSG92ZXIgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICB0aGlzLmZvcmNlT3V0ID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIGdzYXAuZnJvbVRvKFxyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuLy8gICAgICAgICAgICAgICAgIHRoaXMudGltaW5nLFxyXG4vLyAgICAgICAgICAgICAgICAgeyB4OiBcIi0xMTIlXCIgfSxcclxuLy8gICAgICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB4OiBcIi0xMiVcIixcclxuLy8gICAgICAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW5nSG92ZXIgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9yY2VPdXQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jZU91dCA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Zlck91dEFuaW0oKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIG9uTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuLy8gICAgICAgICBpZiAoIXRoaXMuYW5pbWF0aW5nSG92ZXIpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5ob3Zlck91dEFuaW0oKTtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICB0aGlzLmZvcmNlT3V0ID0gdHJ1ZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGhvdmVyT3V0QW5pbSA9ICgpID0+IHtcclxuLy8gICAgICAgICB0aGlzLmhvdmVyZWQgPSBmYWxzZTtcclxuLy8gICAgICAgICBnc2FwLnRvKHRoaXMuYmcsIHRoaXMudGltaW5nLCB7XHJcbi8vICAgICAgICAgICAgIHg6IFwiMTAwJVwiLFxyXG4vLyAgICAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dCxcclxuLy8gICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9O1xyXG4vLyB9XHJcblxyXG5jbGFzcyBEb3Qge1xyXG4gICAgY29uc3RydWN0b3IoaW5kZXggPSAwLCBjdXJzb3IpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5hbmdsZXNwZWVkID0gMC4wNTtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IDEgLSAwLjA1ICogaW5kZXg7XHJcbiAgICAgICAgLy8gdGhpcy5yYW5nZSA9IHdpZHRoIC8gMiAtIHdpZHRoIC8gMiAqIHRoaXMuc2NhbGUgKyAyO1xyXG4gICAgICAgIHRoaXMucmFuZ2UgPSB3aWR0aCAvIDIgLSB3aWR0aCAvIDIgKiB0aGlzLnNjYWxlICsgMC42O1xyXG4gICAgICAgIHRoaXMubGltaXQgPSB3aWR0aCAqIDAuNzUgKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGdzYXAuc2V0KHRoaXMuZWxlbWVudCwgeyBzY2FsZTogdGhpcy5zY2FsZSB9KTtcclxuICAgICAgICBjdXJzb3IuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2NrKCkge1xyXG4gICAgICAgIHRoaXMubG9ja1ggPSB0aGlzLng7XHJcbiAgICAgICAgdGhpcy5sb2NrWSA9IHRoaXMueTtcclxuICAgICAgICB0aGlzLmFuZ2xlWCA9IE1hdGguUEkgKiAyICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLmFuZ2xlWSA9IE1hdGguUEkgKiAyICogTWF0aC5yYW5kb20oKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGRlbHRhKSB7XHJcbiAgICAgICAgaWYgKCFpZGxlIHx8IHRoaXMuaW5kZXggPD0gc2luZURvdHMpIHtcclxuICAgICAgICAgICAgZ3NhcC5zZXQodGhpcy5lbGVtZW50LCB7IHg6IHRoaXMueCwgeTogdGhpcy55IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5nbGVYICs9IHRoaXMuYW5nbGVzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5hbmdsZVkgKz0gdGhpcy5hbmdsZXNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLmxvY2tZICsgTWF0aC5zaW4odGhpcy5hbmdsZVkpICogdGhpcy5yYW5nZTtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5sb2NrWCArIE1hdGguc2luKHRoaXMuYW5nbGVYKSAqIHRoaXMucmFuZ2U7XHJcbiAgICAgICAgICAgIGdzYXAuc2V0KHRoaXMuZWxlbWVudCwgeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNsYXNzIENpcmNsZSB7XHJcbi8vICAgICBjb25zdHJ1Y3RvcihpZCkge1xyXG4vLyAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4vLyAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsLnBhcmVudEVsZW1lbnQ7XHJcbi8vICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGVsKTtcclxuLy8gICAgICAgICBjb25zdCBjaGFycyA9IGVsLmlubmVyVGV4dC5zcGxpdChcIlwiKTtcclxuLy8gICAgICAgICBjaGFycy5wdXNoKFwiIFwiKTtcclxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuLy8gICAgICAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBjaGFyc1tpXTtcclxuLy8gICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSBgY2hhciR7aSArIDF9YDtcclxuLy8gICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gb25Nb3VzZUVudGVyKGN1cnNvclJlZikge1xyXG4gICAgY3Vyc29yUmVmLmNsYXNzTGlzdC5jb250YWlucygndi1oaWRkZW4nKSAmJiBjdXJzb3JSZWYuY2xhc3NMaXN0LnJlbW92ZSgndi1oaWRkZW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Nb3VzZUxlYXZlKGN1cnNvclJlZikge1xyXG4gICAgY3Vyc29yUmVmLmNsYXNzTGlzdC5jb250YWlucygndi1oaWRkZW4nKSB8fCBjdXJzb3JSZWYuY2xhc3NMaXN0LmFkZCgndi1oaWRkZW4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdChjdXJzb3JSZWYsIGJveFJlZikge1xyXG4gICAgYm94UmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xyXG4gICAgYm94UmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgb25Ub3VjaE1vdmUpO1xyXG4gICAgYm94UmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IG9uTW91c2VFbnRlcihjdXJzb3JSZWYpKTtcclxuICAgIGJveFJlZi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiBvbk1vdXNlTGVhdmUoY3Vyc29yUmVmKSk7XHJcbiAgICAvLyBob3ZlckJ1dHRvbiA9IG5ldyBIb3ZlckJ1dHRvbihcImJ1dHRvblwiKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcclxuICAgIC8vIG5ldyBDaXJjbGUoXCJjaXJjbGUtY29udGVudFwiKTtcclxuICAgIGxhc3RGcmFtZSArPSBuZXcgRGF0ZSgpO1xyXG4gICAgYnVpbGREb3RzKGN1cnNvclJlZik7XHJcbiAgICByZW5kZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzdHJveShib3hSZWYpIHtcclxuICAgIC8vIGhvdmVyQnV0dG9uLmRlc3Ryb3koKTtcclxuICAgIGJveFJlZi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcclxuICAgIGJveFJlZi5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG9uVG91Y2hNb3ZlKTtcclxuICAgIGJveFJlZi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBvbk1vdXNlRW50ZXIpO1xyXG4gICAgYm94UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTW91c2VMZWF2ZSk7XHJcbiAgICBib3hSZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZVwiLCBvbk1vdXNlTGVhdmUpO1xyXG59XHJcblxyXG4vKmZ1bmN0aW9uIGxpbWl0KHZhbHVlLCBtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgdmFsdWUpLCBtYXgpO1xyXG59Ki9cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0SWRsZVRpbWVyKCkge1xyXG4gICAgdGltZW91dElEID0gc2V0VGltZW91dChnb0luYWN0aXZlLCBpZGxlVGltZW91dCk7XHJcbiAgICBpZGxlID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0SWRsZVRpbWVyKCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XHJcbiAgICBzdGFydElkbGVUaW1lcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnb0luYWN0aXZlKCkge1xyXG4gICAgaWRsZSA9IHRydWU7XHJcbiAgICBmb3IgKGxldCBkb3Qgb2YgZG90cykge1xyXG4gICAgICAgIGRvdC5sb2NrKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkRG90cyhjdXJzb3JSZWYpIHtcclxuICAgIGFtb3VudCA9IHdpbmRvdy5pbm5lcldpZHRoID4gNzY4ID8gMTYgOiBNYXRoLmZsb29yKGFtb3VudCAvIDIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG4gICAgICAgIGxldCBkb3QgPSBuZXcgRG90KGksIGN1cnNvclJlZik7XHJcbiAgICAgICAgZG90cy5wdXNoKGRvdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG9uTW91c2VNb3ZlID0gZXZlbnQgPT4ge1xyXG4gICAgbW91c2VQb3NpdGlvbi54ID0gZXZlbnQuY2xpZW50WCAtIHdpZHRoIC8gMjtcclxuICAgIG1vdXNlUG9zaXRpb24ueSA9IGV2ZW50LmNsaWVudFkgLSB3aWR0aCAvIDI7XHJcbiAgICByZXNldElkbGVUaW1lcigpO1xyXG59O1xyXG5cclxuY29uc3Qgb25Ub3VjaE1vdmUgPSAoKSA9PiB7XHJcbiAgICBtb3VzZVBvc2l0aW9uLnggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB3aWR0aCAvIDI7XHJcbiAgICBtb3VzZVBvc2l0aW9uLnkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgLSB3aWR0aCAvIDI7XHJcbiAgICByZXNldElkbGVUaW1lcigpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyID0gdGltZXN0YW1wID0+IHtcclxuICAgIGNvbnN0IGRlbHRhID0gdGltZXN0YW1wIC0gbGFzdEZyYW1lO1xyXG4gICAgcG9zaXRpb25DdXJzb3IoZGVsdGEpO1xyXG4gICAgbGFzdEZyYW1lID0gdGltZXN0YW1wO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XHJcbn07XHJcblxyXG4vLyBsZXQgc2luY2VQb3NpdGlvblggPSAwO1xyXG4vLyBsZXQgc2luY2VQb3NpdGlvblkgPSAwO1xyXG4vLyBsZXQgc3RvcFN0YXR1cyA9IHRydWU7XHJcbmNvbnN0IHBvc2l0aW9uQ3Vyc29yID0gZGVsdGEgPT4ge1xyXG4gICAgbGV0IHggPSBtb3VzZVBvc2l0aW9uLng7XHJcbiAgICBsZXQgeSA9IG1vdXNlUG9zaXRpb24ueTtcclxuICAgIC8vIGlmIChzaW5jZVBvc2l0aW9uWCA9PT0geCAmJiBzaW5jZVBvc2l0aW9uWSA9PT0geSAmJiAhc3RvcFN0YXR1cykge1xyXG4gICAgLy8gICAgIHN0b3BTdGF0dXMgPSB0cnVlO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICBpZiAoc3RvcFN0YXR1cykgc3RvcFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgaXNQQyA9IHdpbmRvdy5pbm5lcldpZHRoID4gNzY4O1xyXG4gICAgZG90cy5mb3JFYWNoKChkb3QsIGluZGV4LCBkb3RzKSA9PiB7XHJcbiAgICAgICAgbGV0IG5leHREb3QgPSBkb3RzW2luZGV4ICsgMV0gfHwgZG90c1swXTtcclxuICAgICAgICBkb3QueCA9IHg7XHJcbiAgICAgICAgZG90LnkgPSB5O1xyXG4gICAgICAgIGRvdC5kcmF3KGRlbHRhKTtcclxuICAgICAgICBpZiAoIWlkbGUgfHwgaW5kZXggPD0gc2luZURvdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZHggPSAobmV4dERvdC54IC0gZG90LngpICogKGlzUEMgPyAwLjMwIDogMC4yMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gKG5leHREb3QueSAtIGRvdC55KSAqIChpc1BDID8gMC4zMCA6IDAuMjEpO1xyXG4gICAgICAgICAgICB4ICs9IGR4O1xyXG4gICAgICAgICAgICB5ICs9IGR5O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gc2luY2VQb3NpdGlvblggPSBtb3VzZVBvc2l0aW9uLng7XHJcbiAgICAvLyBzaW5jZVBvc2l0aW9uWSA9IG1vdXNlUG9zaXRpb24ueTtcclxufTtcclxuXHJcbmNsYXNzIEhvdmVyQ3Vyc29yQm94RWZmZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGN1cnNvclJlZiwgYm94UmVmKSB7XHJcbiAgICAgICAgaW5pdChjdXJzb3JSZWYsIGJveFJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveShib3hSZWYpIHtcclxuICAgICAgICBkZXN0cm95KGJveFJlZik7XHJcbiAgICAgICAgLy8gaG92ZXJCdXR0b24uZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3ZlckN1cnNvckJveEVmZmVjdDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIYW1idXJnZXIgZnJvbSAnLi9IYW1idXJnZXInO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXBwQ29udGV4dCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldERpcmVjdFVybCwgZW5hYmxlUmVkaXJlY3RMb2FkaW5nIH0gZnJvbSAnQC9zdG9yZS9iYXNlU2xpY2UnO1xyXG4vLyBpbXBvcnQgSG92ZXJUZXh0VW5kZXJMaW5lIGZyb20gJy4vZWZmZWN0cy9Ib3ZlclRleHRVbmRlckxpbmUnO1xyXG4vLyBpbXBvcnQgeyBsYXp5QWN0IH0gZnJvbSAnQC91dGlscy8nO1xyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jbGFzcyBMb2dvU3ZnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIHRpbWVyID0gbnVsbDtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHsgY29sb3IsIGFjdGl2ZXBhZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdsb2dvLXN2Zyc+XHJcbiAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCA3MzguMDAwMDAwIDc3Mi4wMDAwMDBcIiAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cclxuICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw3NzIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPXtjb2xvciB8fCBcIiNmZmZcIn0gc3Ryb2tlPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjgwIDc2OTYgYy04NiAtMTkgLTEyOSAtMzUgLTIyMCAtODIgLTE5NyAtMTAxIC0zMzYgLTI2NCAtNDEyIC00ODRcclxuLTMyIC05MyAtMzMgLTk5IC0zMyAtMjYwIDAgLTE0NSAzIC0xNzQgMjMgLTI0MCA4MCAtMjU0IDI2MiAtNDUyIDUwMyAtNTQ5XHJcbjE1OCAtNjMgODEgLTYxIDE5NTggLTYxIGwxNzA2IDAgNDAwIDgzNiBjMjIwIDQ2MCA0MDIgODQwIDQwMyA4NDUgNiAxNSAtNDI2MlxyXG45IC00MzI4IC01elwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQyMzEgNDc5MyBjLTMwMCAtNjI2IC01ODcgLTEyMjUgLTYzOCAtMTMzMSBsLTkyIC0xOTMgMTM2NyA0IGMxMzUxXHJcbjMgMTM2OCAzIDE0NTIgMjQgMjczIDY4IDQ3OCAxODAgNjYwIDM2MyAxODggMTg3IDMwOSA0MTMgMzY3IDY4MyAyNSAxMTcgMjVcclxuMzk5IC0xIDUxNyAtNTUgMjU1IC0xNzMgNDc1IC0zNTMgNjYxIC0xNTQgMTU5IC0zMjIgMjY2IC01MjMgMzMzIC0yMDYgNjlcclxuLTE5OCA2OCAtOTg1IDczIGwtNzEwIDQgLTU0NCAtMTEzOHpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03MjUgNTU5MyBjLTI1OSAtMzYgLTUwOSAtMjE4IC02MjggLTQ1OCAtNjkgLTEzOCAtODIgLTIwMCAtODIgLTM4NVxyXG4xIC0xNTIgMyAtMTcxIDI4IC0yNDUgODMgLTI0NyAyNzMgLTQ1MiA0OTYgLTUzNiAxNTUgLTU3IDU3IC01NCAxNDExIC01NlxyXG5sMTI0NSAtMyA0MDAgODM2IGMyMjAgNDYwIDQwMiA4NDAgNDAzIDg0NSA0IDkgLTMyMTEgMTAgLTMyNzMgMnpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03MTAgMzQ3OSBjLTI1OCAtNDMgLTQ5NSAtMjIxIC02MTggLTQ2NCAtNjMgLTEyNyAtNzcgLTE5MyAtNzcgLTM3NVxyXG4wIC0xNjEgMSAtMTY3IDMzIC0yNjAgODAgLTIyOSAyMzEgLTQwMCA0NDIgLTQ5OSAxNzAgLTc5IDExNiAtNzUgOTUwIC03OFxyXG5sNzQ1IC0zIDQwMCA4MzYgYzIyMCA0NjAgNDAyIDg0MCA0MDMgODQ1IDUgMTIgLTIyMDcgOSAtMjI3OCAtMnpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNjU1IDE1MDMgYy0zNDYgLTcyNCAtNjQ5IC0xMzU3IC02NzIgLTE0MDUgbC00MiAtODggMjA5NyAzIDIwOTcgM1xyXG4xMDAgMjIgYzI4MCA2NSA1MDAgMTg2IDcwMSAzODYgMjA2IDIwNyAzMzMgNDQ1IDM5MSA3MzMgMjQgMTIyIDI0IDM5NCAwIDUxNlxyXG4tNDIgMjExIC0xMzIgNDEyIC0yNTggNTgxIC0yMTAgMjc5IC00ODkgNDU2IC04NDggNTM4IGwtOTYgMjIgLTE0MjAgMyAtMTQyMFxyXG4zIC02MzAgLTEzMTd6XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSGVhZGVyTWVudXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNPcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgZ290b0hpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0hvdmVyOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNXYWl0OiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2dvUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgdGhpcy5jbG9ja1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlTWVudSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1dhaXQ6IHRydWVcclxuICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgISF0aGlzLnRpbWVyICYmIHRoaXMudGltZXIuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1dhaXQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCA0MDApKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0TWVudVN0YXR1cyhpc09wZW4pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNPcGVuOiBpc09wZW5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhpZGVNZW51KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBnb3RvSGlkZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHByZXZTdGF0ZS5pc0hvdmVyICE9PSB0aGlzLnN0YXRlLmlzSG92ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dvUmVmLmN1cnJlbnQuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvUmVmLmN1cnJlbnQuaGlkZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRPbkxvZ29Ib3ZlcigpIHtcclxuICAgICAgICAhdGhpcy5zdGF0ZS5pc0hvdmVyICYmIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0hvdmVyOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRPZmZMb2dvSG92ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5pc0hvdmVyICYmIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0hvdmVyOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcclxuICAgIHJlZGlyZWN0VG8gPSAodXJsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZXREaXJlY3RVcmwsIGVuYWJsZVJlZGlyZWN0TG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBlbmFibGVSZWRpcmVjdExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0RGlyZWN0VXJsKHVybCk7XHJcbiAgICB9XHJcbiAgICBzY3JvbGxUb1RhcmdldCh0YXJnZXQpIHtcclxuICAgICAgICBzd2l0Y2ggKHRhcmdldCkge1xyXG4gICAgICAgICAgICBjYXNlICdzb2x1dGlvbic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8oJy4vcHJvamVjdHMvYXBwaWZ5Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2VydmljZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8oJy4vc2VydmljZXMnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzogXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8oJy4vcHJvamVjdHMnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdhYm91dCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8oJy4vYWJvdXQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjb250YWN0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUbygnLi9jb250YWN0Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVSZWRpcmVjdCA9ICh0YXJnZXQsIGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBzd2l0Y2ggKHRhcmdldCkge1xyXG4gICAgICAgICAgICBjYXNlICdzb2x1dGlvbic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8oJy4vcHJvamVjdHMvYXBwaWZ5Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2VydmljZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8oJy4vc2VydmljZXMnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUbygnLi9wcm9qZWN0cycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Fib3V0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUbygnLi9hYm91dCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NvbnRhY3QnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKCcuL2NvbnRhY3QnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGlzUEMsIHNjcm9sbFkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDw+PGRpdiBjbGFzc05hbWU9e1tcImhlYWRlci1uYXZiYXJcIiwgdGhpcy5wcm9wcy5oaWRlID8gXCJoaWRlLWl0XCIgOiBcIlwiLCBpc1BDID8gXCJpc3BjXCIgOiBcImlzbWJcIiwgc2Nyb2xsWSA+IDEwMCA/ICdtaXgtaXQnIDogJycsIHRoaXMuc3RhdGUuaXNPcGVuIHx8IHRoaXMuc3RhdGUuaXNXYWl0ID8gXCJtZW51LW9wZW5cIiA6IFwiXCJdLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhci1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAge2lzUEMgPyA8PjxkaXYgcmVmPXt0aGlzLmxvZ29SZWZ9IG9uTW91c2VFbnRlcj17KCkgPT4geyB0aGlzLnNldE9uTG9nb0hvdmVyKCkgfX0gb25Nb3VzZUxlYXZlPXsoKSA9PiB7IHRoaXMuc2V0T2ZmTG9nb0hvdmVyKCkgfX0gY2xhc3NOYW1lPVwibWVudS1sb2dvXCIgb25DbGljaz17KCkgPT4gdGhpcy5yZWRpcmVjdFRvKCcvJyl9IHN0eWxlPXt7cGFkZGluZ1RvcDogJzRweCcsIHBhZGRpbmdCb3R0b206ICc0cHgnLCBwYWRkaW5nUmlnaHQ6ICc0cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ29TdmcgY29sb3I9XCIjZmZmXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdmJhci1tZW51LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3NOYW1lPXtbXCJtZW51LWl0ZW0gb2ZmLXVuZGVybGluZVwiLCB0aGlzLnByb3BzLmFjdGl2ZXBhZ2UgPT0gJ2FwcGlmeScgPyAnbWVudS1hY3RpdmUnIDogbnVsbF0uam9pbignICcpfSBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlUmVkaXJlY3QoJ3NvbHV0aW9uJywgZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SG92ZXJUZXh0VW5kZXJMaW5lPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29sdXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9Ib3ZlclRleHRVbmRlckxpbmU+ICAgICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbXCJtZW51LWl0ZW0gb2ZmLXVuZGVybGluZVwiLCB0aGlzLnByb3BzLmFjdGl2ZXBhZ2UgPT0ncHJvamVjdHMnID8gJ21lbnUtYWN0aXZlJyA6IG51bGxdLmpvaW4oJyAnKX0gb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZVJlZGlyZWN0KCdwcm9qZWN0JywgZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEhvdmVyVGV4dFVuZGVyTGluZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0hvdmVyVGV4dFVuZGVyTGluZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbXCJtZW51LWl0ZW0gb2ZmLXVuZGVybGluZVwiLCB0aGlzLnByb3BzLmFjdGl2ZXBhZ2UgPT0gJ3NlcnZpY2VzJyA/ICdtZW51LWFjdGl2ZScgOiBudWxsXS5qb2luKCcgJyl9IG9uQ2xpY2s9e2UgPT4gdGhpcy5oYW5kbGVSZWRpcmVjdCgnc2VydmljZScsIGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxIb3ZlclRleHRVbmRlckxpbmU+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9Ib3ZlclRleHRVbmRlckxpbmU+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1wibWVudS1pdGVtIG9mZi11bmRlcmxpbmVcIiwgdGhpcy5wcm9wcy5hY3RpdmVwYWdlID09ICdhYm91dCcgPyAnbWVudS1hY3RpdmUnIDogbnVsbF0uam9pbignICcpfSBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlUmVkaXJlY3QoJ2Fib3V0JywgZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEhvdmVyVGV4dFVuZGVyTGluZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0hvdmVyVGV4dFVuZGVyTGluZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbXCJtZW51LWl0ZW0gb2ZmLXVuZGVybGluZVwiLCB0aGlzLnByb3BzLmFjdGl2ZXBhZ2UgPT0gJ2NvbnRhY3QnID8gJ21lbnUtYWN0aXZlJyA6IG51bGxdLmpvaW4oJyAnKX0gb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZVJlZGlyZWN0KCdjb250YWN0JywgZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEhvdmVyVGV4dFVuZGVyTGluZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvSG92ZXJUZXh0VW5kZXJMaW5lPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC8+IDogPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWxvZ29cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlZGlyZWN0VG8oJy8nKX0gc3R5bGU9e3sgcGFkZGluZ1RvcDogJzRweCcsIHBhZGRpbmdCb3R0b206ICc0cHgnLCBwYWRkaW5nUmlnaHQ6ICc0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ29TdmcgY29sb3I9XCIjZmZmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIYW1idXJnZXIgaXNvcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn0gb25Ub2dnb2xlPXt0aGlzLnRvZ2dsZU1lbnUuYmluZCh0aGlzKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaGVhZGVyLW5hdmJhci1tZW51LWJveFwiICsgKHRoaXMuc3RhdGUuaXNPcGVuID8gXCIgc2hvd1wiIDogKHRoaXMuc3RhdGUuaXNXYWl0ID9cIiB1bnNob3dcIiA6ICcnKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlUmVkaXJlY3QoJ3NvbHV0aW9uJywgZSl9PjxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+PGEgaHJlZj1cIiNcIj5Tb2x1dGlvbnM8L2E+PC9kaXY+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlUmVkaXJlY3QoJ3Byb2plY3QnLCBlKX0+PGRpdiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj48YSBocmVmPVwiI1wiPlByb2plY3RzPC9hPjwvZGl2PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVJlZGlyZWN0KCdzZXJ2aWNlJywgZSl9PjxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+PGEgaHJlZj1cIiNcIj5TZXJ2aWNlczwvYT48L2Rpdj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVSZWRpcmVjdCgnYWJvdXQnLCBlKX0+PGRpdiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj48YSBocmVmPVwiI1wiPkFib3V0PC9hPjwvZGl2PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVJlZGlyZWN0KCdjb250YWN0JywgZSl9PjxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+PGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPjwvZGl2PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tbWVudS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJlYi1kaXZpZGVyXCI+PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjZWxsUGFkZGluZz1cIjBcIiBjZWxsU3BhY2luZz1cIjBcIiBib3JkZXI9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnMTBweCcgfX0+PHN2ZyB0PVwiMTcxNjQ1MjYwMDAwN1wiIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjM4MjhcIiB3aWR0aD1cIjIuOHZoXCIgaGVpZ2h0PVwiMi44dmhcIj48cGF0aCBkPVwiTTcwNy40NTYgODMwLjc0MTMzM0gyODAuNTU0NjY3YTk0LjU3MDY2NyA5NC41NzA2NjcgMCAwIDEtOTQuNDY0LTk0LjRWMzA5LjMzMzMzM2E5NC41NzA2NjcgOTQuNTcwNjY3IDAgMCAxIDk0LjQ0MjY2Ni05NC40NjRoMTYzLjU0MTMzNGEzMiAzMiAwIDEgMSAwIDY0aC0xNjMuNTJhMzAuNDg1MzMzIDMwLjQ4NTMzMyAwIDAgMC0zMC40NjQgMzAuNDY0djQyNy4wMDhhMzAuNDg1MzMzIDMwLjQ4NTMzMyAwIDAgMCAzMC40NDI2NjYgMzAuNDQyNjY3aDQyNi45MjI2NjdhMzAuNDg1MzMzIDMwLjQ4NTMzMyAwIDAgMCAzMC40NjQtMzAuNDQyNjY3di0xNzMuNDgyNjY2YTMyIDMyIDAgMSAxIDY0IDB2MTczLjQ4MjY2NmE5NC41OTIgOTQuNTkyIDAgMCAxLTk0LjQ2NCA5NC40ek01MDEuMTIgNTMyLjQ4YTMyIDMyIDAgMCAxLTIyLjYxMzMzMy01NC42MTMzMzNMNzU4LjQ4NTMzMyAxOTcuODAyNjY3YTMyIDMyIDAgMCAxIDQ1LjI0OCA0NS4yNDhMNTIzLjczMzMzMyA1MjMuMDkzMzMzYTMxLjkxNDY2NyAzMS45MTQ2NjcgMCAwIDEtMjIuNjEzMzMzIDkuMzg2NjY3eiBtMzA0LjgzMi0xMDMuNDAyNjY3YTMyIDMyIDAgMCAxLTMyLTMydi0xNjEuMTUyaC0xNzcuOTJhMzIgMzIgMCAxIDEgMC02NGgxOTQuNTZhNDcuNDAyNjY3IDQ3LjQwMjY2NyAwIDAgMSA0Ny4zNiA0Ny4zNnYxNzcuNzkyYTMyIDMyIDAgMCAxLTMyIDMyelwiIHAtaWQ9XCIzODI5XCIgZmlsbD1cIiNmZmZmZmZcIj48L3BhdGg+PC9zdmc+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmVucXVpcnlAZWItc3VpdGUuY29tXCIgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBJbiBUb3VjaDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHQ9XCIxNzE2NDUyMjU5Nzg2XCIgY2xhc3NOYW1lPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiMjYxMlwiIHdpZHRoPVwiMi44dmhcIiBoZWlnaHQ9XCIyLjh2aFwiPjxwYXRoIGQ9XCJNNTA1LjM0NCAwQzMzMi4yODggMCAxOTIgMTQwLjI4OCAxOTIgMzE1LjkwNGMwIDE3My4wNTYgMTY5Ljk4NCAzOTEuNjggMzE1LjkwNCA1NjkuODU2IDE0My4zNi0xODEuMjQ4IDMxNS45MDQtMzk0LjI0IDMxNS45MDQtNTY5Ljg1NkM4MjEuMjQ4IDE0MC4yODggNjgwLjk2IDAgNTA1LjM0NCAweiBtMCA1MjQuMjg4QzM4OS4xMiA1MjQuMjg4IDI5Ni45NiA0MjkuNTY4IDI5Ni45NiAzMTUuOTA0IDI5Ni45NiAxOTkuNjggMzkxLjY4IDEwOC4wMzIgNTA0LjgzMiAxMDguMDMyYzExNi4yMjQgMCAyMDcuODcyIDk0LjcyIDIwNy44NzIgMjA3Ljg3MiAzLjA3MiAxMTYuMjI0LTkxLjEzNiAyMDguMzg0LTIwNy4zNiAyMDguMzg0elwiIGZpbGw9XCIjZmZmZmZmXCIgcC1pZD1cIjI2MTNcIj48L3BhdGg+PHBhdGggZD1cIk0zODYuNTYgMzE1LjkwNGMwIDMyLjI1NiAxMy4zMTIgNjEuOTUyIDM1LjMyOCA4My45NjhDNDQzLjM5MiA0MjEuMzc2IDQ3Ni4xNiA0MzUuMiA1MDUuODU2IDQzNS4yYzMyLjI1NiAwIDYxLjk1Mi0xMy4zMTIgODMuOTY4LTM1LjMyOCAyMS41MDQtMjEuNTA0IDM1LjMyOC01NC4yNzIgMzUuMzI4LTgzLjk2OCAwLTMyLjI1Ni0xMy4zMTItNjEuOTUyLTM1LjMyOC04My45NjgtMjEuNTA0LTIxLjUwNC01NC4yNzItMzUuMzI4LTgzLjk2OC0zNS4zMjgtMzIuMjU2IDAtNjEuOTUyIDEzLjMxMi04My45NjggMzUuMzI4LTIyLjAxNiAyMi4wMTYtMzUuMzI4IDUxLjcxMi0zNS4zMjggODMuOTY4ek01MDcuOTA0IDEwMjRjLTIwMi43NTIgMC00MDguMDY0LTY1LjAyNC00MDguMDY0LTE4Ni4zNjggMC02Ny41ODQgNjcuNTg0LTEyNC40MTYgMTg2LjM2OC0xNTkuMjMyIDIxLjUwNC01LjYzMiA0My4wMDggNS42MzIgNDguNjQgMjcuMTM2IDUuNjMyIDIxLjUwNC01LjYzMiA0My4wMDgtMjcuMTM2IDQ4LjY0LTg5LjA4OCAyNC4wNjQtMTI5LjUzNiA1OS4zOTItMTI5LjUzNiA4My45NjggMCA0My4wMDggMTI5LjUzNiAxMDguMDMyIDMzMi4yODggMTA4LjAzMnMzMzIuMjg4LTY1LjAyNCAzMzIuMjg4LTEwOC4wMzJjMC0yNC4wNjQtNDguNjQtNjEuOTUyLTEzNy43MjgtODYuNTI4LTIxLjUwNC01LjYzMi0zMi4yNTYtMjcuMTM2LTI3LjEzNi00OC42NCA1LjYzMi0yMS41MDQgMjcuMTM2LTMyLjI1NiA0OC42NC0yNy4xMzYgMTI0LjQxNiAzMi4yNTYgMTk3LjEyIDkxLjY0OCAxOTcuMTIgMTYyLjMwNC03LjY4IDEyMC44MzItMjEyLjk5MiAxODUuODU2LTQxNS43NDQgMTg1Ljg1NnpcIiBmaWxsPVwiI2ZmZmZmZlwiIHAtaWQ9XCIyNjE0XCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5oay9tYXBzL3BsYWNlLyVFNiU5NiVCMCVFOCU5MiVCMiVFNSVCNCU5NyVFOSU5QiU5OSVFNSU5NiU5QyVFOCVBMSU5NzklRTglOTklOUYlRTUlOEMlQUYlRTklODElOTQlRTUlOTUlODYlRTYlQTUlQUQlRTQlQjglQUQlRTUlQkYlODMvQDIyLjMzNzg4MDQsMTE0LjE5NTI4MjgsMTd6L2RhdGE9ITNtMSE0YjEhNG02ITNtNSExczB4MzQwNDA2ZDBhOTkwZWQ5MToweDk0M2MwNTI1M2M1NjM3ZjghOG0yITNkMjIuMzM3ODc1NSE0ZDExNC4xOTc4NTc3ITE2cyUyRmclMkYxMmhxNHdfZDg/aGw9emgtVFcmZW50cnk9dHR1JyB0YXJnZXQ9J19ibGFuayc+MjEwMSwgV2luIFBsYXphLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOSBTaGV1bmcgSGVpIFN0cmVldCwgSG9uZyBLb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgaXNQQzogc3RhdGUuY2xpZW50U2xpY2UuaXNQQyxcclxuICAgIHNjcm9sbFk6IHN0YXRlLnNjcm9sbFNsaWNlLnNjcm9sbFlcclxufSk7XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIHNldERpcmVjdFVybCxcclxuICAgIGVuYWJsZVJlZGlyZWN0TG9hZGluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGVhZGVyTWVudXMpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgbGF6eUFjdCB9IGZyb20gXCJAL3V0aWxzL2luZGV4XCI7XHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICAgIG9uc2hvdzogdHJ1ZSxcclxuICAgICAgc2hvd0JlZm9yZTogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHRpbWVyID0gbnVsbFxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vIHRoaXMudGltZXIgPSBkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxvYWRlZDogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgLy8gfSwgMCkoKTtcclxuICB9XHJcblxyXG4gIHNob3dUaW1lciA9IG51bGw7XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShfcHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgIFxyXG4gICAgaWYgKHByZXZTdGF0ZS5sb2FkZWQgIT0gdGhpcy5zdGF0ZS5sb2FkZWQgJiYgdGhpcy5zdGF0ZS5sb2FkZWQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0JlZm9yZTogZmFsc2UgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG9uc2hvdzogZmFsc2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vbk9wZW4odHJ1ZSk7XHJcbiAgICAgICAgICAvLyAhIXRoaXMuc2hvd1RpbWVyICYmIHRoaXMuc2hvd1RpbWVyLmNhbmNlbCgpO1xyXG4gICAgICAgICAgLy8gdGhpcy5zaG93VGltZXIgPSBkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vIH0sIDApKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICEhdGhpcy50aW1lciAmJiB0aGlzLnRpbWVyLmNhbmNlbCgpO1xyXG4gICAgISF0aGlzLnNob3dUaW1lciAmJiB0aGlzLnNob3dUaW1lci5jYW5jZWwoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5vbnNob3cgPyA8ZGl2IGNsYXNzTmFtZT17W1wibG9hZGVyLWJveFwiLCB0aGlzLnN0YXRlLmxvYWRlZCA/IFwidW5hY3RpdmVcIiA6IFwiXCIsIHRoaXMuc3RhdGUuc2hvd0JlZm9yZSA/IFwic2hvdy1iZWZvcmVcIiA6IFwiXCJdLmpvaW4oJyAnKX0+PC9kaXY+IDogbnVsbH1cclxuICAgICAgPC8+O1xyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbGF6eUFjdCB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgZW5hYmxlUmVkaXJlY3RMb2FkaW5nLCBkaXNhYmxlUmVkaXJlY3RMb2FkaW5nIH0gZnJvbSAnQC9zdG9yZS9iYXNlU2xpY2UnO1xyXG5cclxuY2xhc3MgUmVkaXJlY3RMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNhbGxiYWNrRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyByZWRpcmVjdFVybCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoL14oaHR0cHxodHRwcyk6XFwvXFwvLy50ZXN0KHJlZGlyZWN0VXJsKSkgcmV0dXJuIHdpbmRvdy5vcGVuKHJlZGlyZWN0VXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBsaW5rVXJsID0od2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnLycgPyAnJyA6ICcuLi8nKSArIHJlZGlyZWN0VXJsO1xyXG4gICAgICAgICAgICBsaW5rVXJsID0gbGlua1VybC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKTtcclxuICAgICAgICAgICAgbGlua1VybCA9IGxpbmtVcmwucmVwbGFjZSgvXFwvXFwvL2csICcvJyk7XHJcbiAgICAgICAgICAgIGxpbmtVcmwgPSBsaW5rVXJsLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rVXJsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHsgcmVkaXJlY3Rsb2FkaW5nLCBlbmFibGVSZWRpcmVjdExvYWRpbmcsIGRpc2FibGVSZWRpcmVjdExvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgZW5hYmxlUmVkaXJlY3RMb2FkaW5nKCk7XHJcbiAgICAgICAgaWYgKHJlZGlyZWN0bG9hZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrRXZlbnQoKVxyXG4gICAgICAgICAgICBsYXp5QWN0KDAuMykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlUmVkaXJlY3RMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVkaXJlY3QtbG9hZGVyLWxheWVyXCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJlZGlyZWN0LWxvYWRlclwiPjwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgcmVkaXJlY3Rsb2FkaW5nOiBzdGF0ZS5iYXNlU2xpY2UucmVkaXJlY3Rsb2FkaW5nLFxyXG4gICAgcmVkaXJlY3RVcmw6IHN0YXRlLmJhc2VTbGljZS5yZWRpcmVjdFVybFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIGVuYWJsZVJlZGlyZWN0TG9hZGluZyxcclxuICAgIGRpc2FibGVSZWRpcmVjdExvYWRpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShSZWRpcmVjdExvYWRpbmcpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgZ2V0QW5hbHl0aWNzIH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xyXG5cclxuY2xhc3MgR29vZ2xlQ29uc2VudCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNDb25zZW50ZWQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0R29vZ2xldGFnKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIC8vIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1BVy0xMDEwMzQ4NjA0JztcclxuICAgICAgICAvLyBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgLy8gTG9hZCBUYWcgTWFuYWdlciBzY3JpcHQuXHJcbiAgICAgICAgdmFyIGd0bVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIGd0bVNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgZ3RtU2NyaXB0LnNyYyA9ICdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9R1RNLU1HOTRDOUtMJztcclxuXHJcbiAgICAgICAgdmFyIGZpcnN0U2NyaXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xyXG4gICAgICAgIGZpcnN0U2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGd0bVNjcmlwdCwgZmlyc3RTY3JpcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGd0YWcoKSB7XHJcbiAgICAvLyAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAvLyAgICAgZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjbG9zZUNvbnNlbnRCb3ggPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ29uc2VudGVkOiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsaWNrQWxsb3dIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llQ29uc2VudFwiLCBcImFjY2VwdGVkXCIpO1xyXG4gICAgLy8gICAgIHRoaXMuaW5pdEdvb2dsZXRhZygpO1xyXG4gICAgLy8gICAgIHRoaXMuZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcclxuICAgIC8vICAgICB0aGlzLmd0YWcoJ2NvbmZpZycsICdBVy0xMDEwMzQ4NjA0Jyk7XHJcbiAgICAvLyAgICAgdGhpcy5ndGFnKCdldmVudCcsICdjb25zZW50JywgeyAnZXZlbnRfY2F0ZWdvcnknOiAnY29uc2VudCcsICdldmVudF9sYWJlbCc6ICdhbGxvdycgfSk7XHJcbiAgICAvLyAgICAgdGhpcy5jbG9zZUNvbnNlbnRCb3goKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjbGlja0RlY2xpbmVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llQ29uc2VudFwiLCBcImRlY2xpbmVkXCIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGd0YWcoKSB7IGRhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7IH1cclxuICAgICAgICBndGFnKCdjb25zZW50JywgJ3VwZGF0ZScsIHtcclxuICAgICAgICAgICAgYWRfdXNlcl9kYXRhOiAnZGVuaWVkJyxcclxuICAgICAgICAgICAgYWRfcGVyc29uYWxpemF0aW9uOiAnZGVuaWVkJyxcclxuICAgICAgICAgICAgYWRfc3RvcmFnZTogJ2RlbmllZCcsXHJcbiAgICAgICAgICAgIGFuYWx5dGljc19zdG9yYWdlOiAnZGVuaWVkJ1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBndGFnKCdldmVudCcsICdjb25zZW50JywgeyAnZXZlbnRfY2F0ZWdvcnknOiAnY29uc2VudCcsICdldmVudF9sYWJlbCc6ICdkZWNsaW5lJyB9KTtcclxuICAgICAgICB0aGlzLmNsb3NlQ29uc2VudEJveCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrQWxsb3dIYW5kbGVyICgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZUNvbnNlbnRcIiwgXCJhY2NlcHRlZFwiKTtcclxuICAgICAgICBmdW5jdGlvbiBndGFnKCkgeyBkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpOyB9XHJcblxyXG4gICAgICAgIGd0YWcoJ2NvbnNlbnQnLCAndXBkYXRlJywge1xyXG4gICAgICAgICAgICBhZF91c2VyX2RhdGE6ICdncmFudGVkJyxcclxuICAgICAgICAgICAgYWRfcGVyc29uYWxpemF0aW9uOiAnZ3JhbnRlZCcsXHJcbiAgICAgICAgICAgIGFkX3N0b3JhZ2U6ICdncmFudGVkJyxcclxuICAgICAgICAgICAgYW5hbHl0aWNzX3N0b3JhZ2U6ICdncmFudGVkJ1xyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICAgdGhpcy5pbml0R29vZ2xldGFnKCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUNvbnNlbnRCb3goKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlQmFzZUluaXQoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcclxuXHJcbiAgICAgICAgLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG4gICAgICAgIC8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcclxuICAgICAgICBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBcIkFJemFTeUR0RGk5X3pQQXJBY1BtNWtGeF9QVFZzZDFtVWZ4TWs2Z1wiLFxyXG4gICAgICAgICAgICBhdXRoRG9tYWluOiBcImViLW9mZmljaWFsLXdlYnNpdGUuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICAgICAgICAgIHByb2plY3RJZDogXCJlYi1vZmZpY2lhbC13ZWJzaXRlXCIsXHJcbiAgICAgICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZWItb2ZmaWNpYWwtd2Vic2l0ZS5hcHBzcG90LmNvbVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI4ODQxOTQwMTk1MDJcIixcclxuICAgICAgICAgICAgYXBwSWQ6IFwiMTo4ODQxOTQwMTk1MDI6d2ViOjYxOTVhMzU0Y2I5YzcxOWZiYmM1M2ZcIixcclxuICAgICAgICAgICAgbWVhc3VyZW1lbnRJZDogXCJHLUpGWDRGOTNUODRcIlxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbiAgICAgICAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgICAgICAgY29uc3QgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5maXJlQmFzZUluaXQoKTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWVDb25zZW50XCIpID09PSBcImFjY2VwdGVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ29uc2VudGVkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBndGFnKCdjb25zZW50JywgJ3VwZGF0ZScsIHtcclxuICAgICAgICAgICAgICAgIGFkX3VzZXJfZGF0YTogJ2dyYW50ZWQnLFxyXG4gICAgICAgICAgICAgICAgYWRfcGVyc29uYWxpemF0aW9uOiAnZ3JhbnRlZCcsXHJcbiAgICAgICAgICAgICAgICBhZF9zdG9yYWdlOiAnZ3JhbnRlZCcsXHJcbiAgICAgICAgICAgICAgICBhbmFseXRpY3Nfc3RvcmFnZTogJ2dyYW50ZWQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRHb29nbGV0YWcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaGFuZGxlQ29uc2VudCA9ICgpID0+IHtcclxuICAgIC8vICAgICBkb2N1bWVudC5jb29raWUgPSAnY29uc2VudENvb2tpZT10cnVlOyBleHBpcmVzPVRodSwgMzEgRGVjIDIwOTkgMjM6NTk6NTkgVVRDOyBwYXRoPS8nO1xyXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBpc0NvbnNlbnRlZDogdHJ1ZSB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc0NvbnNlbnRlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgIWlzQ29uc2VudGVkICYmIGZhbHNlID9cclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e3RoaXMuY29udGVudFJlZn0gc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIGJhY2tncm91bmQ6ICcjMTYxNjE2JywgekluZGV4OiA5OTk5LCBmb250U2l6ZTogJzExcHgnLCBsaW5lSGVpZ2h0OiAnMS41JywgY29sb3I6ICcjZmZmJywgcGFkZGluZzogJzJyZW0gMXJlbScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29va2llLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Ugb25seSB1c2UgY29va2llcyB0byBkZWxpdmVyIGEgYmV0dGVyIGJyb3dzaW5nIGV4cGVyaWVuY2UsIG1vcmUgcGVyc29uYWxpemVkIGNvbnRlbnQsIGFuZCB0byBhbmFseXplIHNpdGUgdHJhZmZpYy4gSWYgeW91IGNvbnNlbnQsIGNsaWNrIFwiQWxsb3cgQ29va2llc1wiLiBPdGhlcndpc2UsIHBsZWFzZSB2aXNpdCBvdXIgPGEgaHJlZj1cIi9wcml2YWN5LXBvbGljeVwiIHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScgfX0gdGFyZ2V0PSdfYmxhbmsnPlByaXZhY3kgUG9saWN5PC9hPiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29va2llLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWNjZXB0XCIgY2xhc3NOYW1lPVwiY29va2llLWJ1dHRvblwiIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcsIGNvbG9yOiAnIzAwMCcsIG1hcmdpblJpZ2h0OiAnMnJlbScsIHdpZHRoOiAnNi44cmVtJyB9fSBvbkNsaWNrPXtlID0+IHRoaXMuY2xpY2tBbGxvd0hhbmRsZXIoKSB9PkFsbG93IENvb2tpZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVjbGluZVwiIGNsYXNzTmFtZT1cImNvb2tpZS1idXR0b25cIiBzdHlsZT17eyBwYWRkaW5nOiAnNXB4IDEwcHgnLCBjb2xvcjogJyMwMDAnLCB3aWR0aDogJzYuOHJlbScgfX0gb25DbGljaz17ZSA9PiB0aGlzLmNsaWNrRGVjbGluZUhhbmRsZXIoKSB9PkRlY2xpbmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQ29uc2VudDsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgaXNQQzogd2luZG93LmlubmVyV2lkdGggPiA3NjgsXHJcbiAgaXNUYWJsZXQ6IHdpbmRvdy5pbm5lcldpZHRoID4gNzY4ICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgMTIwMCxcclxuICBzY3JvbGxZOiAwLFxyXG59KTsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0OyIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNBcHBPcGVuOiBmYWxzZSxcclxuICByZWRpcmVjdGxvYWRpbmc6IGZhbHNlLFxyXG4gIHJlZGlyZWN0VXJsOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgYmFzZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdiYXNlJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldElzQXBwT3BlbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuaXNBcHBPcGVuID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0RGlyZWN0VXJsOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5yZWRpcmVjdFVybCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIGVuYWJsZVJlZGlyZWN0TG9hZGluZzogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUucmVkaXJlY3Rsb2FkaW5nID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBkaXNhYmxlUmVkaXJlY3RMb2FkaW5nOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5yZWRpcmVjdGxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRJc0FwcE9wZW4sIHNldERpcmVjdFVybCwgZW5hYmxlUmVkaXJlY3RMb2FkaW5nLCBkaXNhYmxlUmVkaXJlY3RMb2FkaW5nIH0gPSBiYXNlU2xpY2UuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VTbGljZS5yZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY2xpZW50V2lkdGg6IDAsXHJcbiAgICBjbGllbnRIZWlnaHQ6IDAsXHJcbiAgICBpc1BDOiB3aW5kb3cuY2xpZW50V2lkdGggPj0gNzY4LFxyXG4gICAgaXNUYWJsZXQ6IHdpbmRvdy5jbGllbnRXaWR0aCA+PSA3NjggJiYgd2luZG93LmNsaWVudFdpZHRoIDwgMTAyNCxcclxufTtcclxuXHJcbmNvbnN0IGNsaWVudFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2NsaWVudCcsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldENsaWVudFdpZHRoOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5jbGllbnRXaWR0aCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BDID0gYWN0aW9uLnBheWxvYWQgPj0gNzY4O1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1RhYmxldCA9IGFjdGlvbi5wYXlsb2FkID49IDc2OCAmJiBhY3Rpb24ucGF5bG9hZCA8IDEwMjQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRDbGllbnRIZWlnaHQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNsaWVudEhlaWdodCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldENsaWVudFdpZHRoLCBzZXRDbGllbnRIZWlnaHQgfSA9IGNsaWVudFNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRTbGljZS5yZWR1Y2VyOyIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IGJhc2VTbGljZSBmcm9tICcuL2Jhc2VTbGljZSc7XHJcbmltcG9ydCBjbGllbnRTbGljZSBmcm9tICcuL2NsaWVudFNsaWNlJztcclxuaW1wb3J0IHNjcm9sbFNsaWNlIGZyb20gJy4vc2Nyb2xsU2xpY2UnO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgYmFzZVNsaWNlLFxyXG4gICAgY2xpZW50U2xpY2UsXHJcbiAgICBzY3JvbGxTbGljZSxcclxufSk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiByb290UmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuY29uc3Qgc2Nyb2xsU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTonc2Nyb2xsJyxcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHNjcm9sbFk6IDAsXHJcbiAgICBzY3JvbGxQb3NpdGlvbjogMCxcclxuICAgIHNjcm9sbENvbnRlbnRJc0luVmlldzogZmFsc2UsXHJcbiAgICBzY3JvbGxDb250ZW50SXNJblZpZXdJbml0VG9wOiAwLFxyXG4gICAgc2Nyb2xsQ29udGVudEhlaWdodDogMCxcclxuICAgIGluaXRWaWV3U2Nyb2xsVG9MZWZ0OiAwLFxyXG4gICAgb25QdWxsU2Nyb2xsQ29udGVudEhlaWdodDogJzEwMHZoJyxcclxuICAgIHNjcm9sbENvbnRlbnRNb3ZlWTogMCxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRTY3JvbGxZOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zY3JvbGxZID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0U2Nyb2xsUG9zaXRpb246IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnNjcm9sbFBvc2l0aW9uID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0U2Nyb2xsQ29udGVudElzSW5WaWV3OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zY3JvbGxDb250ZW50SXNJblZpZXcgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRJblNjcm9sbENvbnRlbnRWaWV3SW5pdFRvcDooc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zY3JvbGxDb250ZW50SXNJblZpZXdJbml0VG9wID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0U2Nyb2xsQ29udGVudEhlaWdodDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuc2Nyb2xsQ29udGVudEhlaWdodCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldEluaXRWaWV3U2Nyb2xsVG9MZWZ0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pbml0Vmlld1Njcm9sbFRvTGVmdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldE9uUHVsbFNjcm9sbENvbnRlbnRIZWlnaHQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLm9uUHVsbFNjcm9sbENvbnRlbnRIZWlnaHQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRTY3JvbGxDb250ZW50TW92ZVk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnNjcm9sbENvbnRlbnRNb3ZlWSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFNjcm9sbFksIHNldFNjcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxDb250ZW50SXNJblZpZXcsIHNldEluU2Nyb2xsQ29udGVudFZpZXdJbml0VG9wLCBzZXRTY3JvbGxDb250ZW50SGVpZ2h0LCBzZXRJbml0Vmlld1Njcm9sbFRvTGVmdCwgc2V0T25QdWxsU2Nyb2xsQ29udGVudEhlaWdodCwgc2V0U2Nyb2xsQ29udGVudE1vdmVZIH0gPSBzY3JvbGxTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsU2xpY2UucmVkdWNlcjsiLCJpbXBvcnQgV2ViRm9udCBmcm9tICd3ZWJmb250bG9hZGVyJztcclxuaW1wb3J0IHsgZGVib3VuY2UsIHRocm90dGxlIH0gZnJvbSAnbG9kYXNoJztcclxuLy8gZXhwb3J0IGNvbnN0IGxhenlBY3QgPSAoZnVuYykgPT4ge1xyXG4vLyAgICAgbGV0IHJlc3VsdDtcclxuLy8gICAgIHJldHVybiAoKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuLy8gICAgICAgICAgICAgcmVzdWx0ID0gZnVuYygpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCkgPT4ge1xyXG4vLyAgICAgbGV0IHRpbWVvdXQ7XHJcbi8vICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuLy8gICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbi8vICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4vLyAgICAgICAgIH0sIHdhaXQpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3QgbGF6eUFjdCA9IChzZWNvbmRzKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBzZWNvbmRzICogMTAwMCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxhenlDYWxsKGZ1bmMsIC4uLmFyZ3MpIHtcclxuICAgIGxldCB0aW1lcjtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmdW5jKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc0luVmlld3BvcnQoZWxlbWVudCwgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY2FsbGJhY2suY2FsbChudWxsLCAoXHJcbiAgICAgICAgKHJlY3QuYm90dG9tIDw9IDcgLyA4ICogd2luZG93LmlubmVySGVpZ2h0IHx8IHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCkgJiZcclxuICAgICAgICByZWN0LmJvdHRvbSA+PSAwXHJcbiAgICApKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNJbkhhbGZWaWV3cG9ydChlbGVtZW50LCBjYWxsYmFjaykge1xyXG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjYWxsYmFjay5jYWxsKG51bGwsIChcclxuICAgICAgICByZWN0LmJvdHRvbSA8PSAxIC8gMiAqIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyByZWN0LmhlaWdodCAmJlxyXG4gICAgICAgIHJlY3QuYm90dG9tID49IDAgJiZcclxuICAgICAgICByZWN0LnRvcCA8PSAxIC8gMiAqIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuICAgICkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc1N1cHBvcnRXZWJwKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBpZiAoISEoZWxlbS5nZXRDb250ZXh0ICYmIGVsZW0uZ2V0Q29udGV4dCgnMmQnKSkpIHtcclxuICAgICAgICByZXR1cm4gZWxlbS50b0RhdGFVUkwoJ2ltYWdlL3dlYnAnKS5pbmRleE9mKCdkYXRhOmltYWdlL3dlYnAnKSA9PT0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0VG8odXJsKSB7XHJcbiAgICBpZiAoL15odHRwLy50ZXN0KHVybCkpIHJldHVybiB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbFdpZHRoKGVsZW1lbnQpIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIDA7XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiByZWN0LndpZHRoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZvbnQoKSB7XHJcbiAgICBsb2FkTm9TY3JpcHRUYWcuY2FsbChudWxsKTtcclxuICAgIFdlYkZvbnQubG9hZCh7XHJcbiAgICAgICAgZGVmZXI6IHRydWUsXHJcbiAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgdGltZW91dDogMTAwMCxcclxuICAgICAgICBnb29nbGU6IHtcclxuICAgICAgICAgICAgLy8gZmFtaWxpZXM6IFsnTW9udHNlcnJhdDozMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCcsICdMZXhlbmQ6MzAwLDQwMCw1MDAsNjAwLDcwMCw4MDAnLCAnUmFsZXdheTozMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCddXHJcbiAgICAgICAgICAgIGZhbWlsaWVzOiBbJ01vbnRzZXJyYXQ6NjAwLDcwMCcsICdSYWxld2F5OjQwMCw1MDAsNjAwJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGl2ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2FkR3RhZy5jYWxsKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkR3RhZyAoKSB7XHJcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcyc7XHJcbiAgICBzY3JpcHQuZGVmZXIgPSB0cnVlOyAgLy8gb3B0aW9uYWwgYnV0IHJlY29tbWVuZGVkXHJcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlOyAgLy8gb3B0aW9uYWwgYnV0IHJlY29tbWVuZGVkXHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICBmdW5jdGlvbiBndGFnKCkge1xyXG4gICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgZ3RhZygnY29uc2VudCcsICdkZWZhdWx0Jywge1xyXG4gICAgICAgICdhZF91c2VyX2RhdGEnOiAnZ3JhbnRlZCcsXHJcbiAgICAgICAgJ2FkX3BlcnNvbmFsaXphdGlvbic6ICdncmFudGVkJyxcclxuICAgICAgICAnYWRfc3RvcmFnZSc6ICdncmFudGVkJyxcclxuICAgICAgICAnYW5hbHl0aWNzX3N0b3JhZ2UnOiAnZ3JhbnRlZCcsXHJcbiAgICAgICAgJ3dhaXRfZm9yX3VwZGF0ZSc6IDUwMCxcclxuICAgIH0pO1xyXG4gICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcclxuICAgIGd0YWcoJ2NvbmZpZycsICdBVy0xMDEwMzQ4NjA0Jyk7XHJcbiAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goeyAnZ3RtLnN0YXJ0JzogbmV3IERhdGUoKS5nZXRUaW1lKCksICdldmVudCc6ICdndG0uanMnIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlKCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTm9TY3JpcHRUYWcoKSB7XHJcbiAgICBjb25zdCBub3NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25vc2NyaXB0Jyk7XHJcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgIGlmcmFtZS5zcmMgPSAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vbnMuaHRtbD9pZD1BVy0xMDEwMzQ4NjA0JztcclxuICAgIGlmcmFtZS5oZWlnaHQgPSAwO1xyXG4gICAgaWZyYW1lLndpZHRoID0gMDtcclxuICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIG5vc2NyaXB0LmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5vc2NyaXB0KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgbm9zY3JpcHQucmVtb3ZlKCk7XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhhbWJ1cmdlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpc29wZW4iLCJqb2luIiwib25DbGljayIsIm9uVG9nZ29sZSIsIkN1c3RvbUN1cnNvciIsIkhvdmVyQ3Vyc29yQm94IiwiY3Vyc29yUmVmIiwiY3JlYXRlUmVmIiwiYm94UmVmIiwiY29udGV4dEJveFJlZiIsImhvdmVyIiwiY3Vyc29yU3R5bGUiLCJkaXNhYmxlZCIsImhhbmRsZU1vdXNlRW50ZXIiLCJzZXRTdGF0ZSIsImhhbmRsZU1vdW5zZU1vdmUiLCJlIiwicmVmIiwiY3VycmVudCIsInRvcCIsImNsaWVudFkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwiY2xpZW50WCIsImhhbmRsZU1vdXNlTGVhdmUiLCJoYW5kbGVEaXNhYmxlQ2xpY2siLCJpbml0Q3Vyc29yIiwiY29tcG9uZW50RGlkTW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoaWxkcmVuIiwic3R5bGUiLCJnc2FwIiwiUG93ZXIzIiwiYW1vdW50Iiwic2luZURvdHMiLCJNYXRoIiwiZmxvb3IiLCJ3aWR0aCIsImlkbGVUaW1lb3V0IiwibGFzdEZyYW1lIiwibW91c2VQb3NpdGlvbiIsIngiLCJyYW5kb20iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwieSIsImlubmVySGVpZ2h0IiwiZG90cyIsInRpbWVvdXRJRCIsImlkbGUiLCJEb3QiLCJpbmRleCIsImN1cnNvciIsImFuZ2xlc3BlZWQiLCJzY2FsZSIsInJhbmdlIiwibGltaXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJzZXQiLCJhcHBlbmRDaGlsZCIsImxvY2siLCJsb2NrWCIsImxvY2tZIiwiYW5nbGVYIiwiUEkiLCJhbmdsZVkiLCJkcmF3IiwiZGVsdGEiLCJzaW4iLCJvbk1vdXNlRW50ZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsIm9uTW91c2VMZWF2ZSIsImFkZCIsImluaXQiLCJvbk1vdXNlTW92ZSIsIm9uVG91Y2hNb3ZlIiwiRGF0ZSIsImJ1aWxkRG90cyIsInN0YXJ0SWRsZVRpbWVyIiwic2V0VGltZW91dCIsImdvSW5hY3RpdmUiLCJyZXNldElkbGVUaW1lciIsImNsZWFyVGltZW91dCIsImRvdCIsImkiLCJwdXNoIiwiZXZlbnQiLCJ0b3VjaGVzIiwidGltZXN0YW1wIiwicG9zaXRpb25DdXJzb3IiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpc1BDIiwiZm9yRWFjaCIsIm5leHREb3QiLCJkeCIsImR5IiwiSG92ZXJDdXJzb3JCb3hFZmZlY3QiLCJBcHBDb250ZXh0IiwiY29ubmVjdCIsInNldERpcmVjdFVybCIsImVuYWJsZVJlZGlyZWN0TG9hZGluZyIsImRlYm91bmNlIiwiTG9nb1N2ZyIsInRpbWVyIiwiY29sb3IiLCJhY3RpdmVwYWdlIiwidmVyc2lvbiIsInhtbG5zIiwiaGVpZ2h0Iiwidmlld0JveCIsInByZXNlcnZlQXNwZWN0UmF0aW8iLCJ0cmFuc2Zvcm0iLCJmaWxsIiwic3Ryb2tlIiwiZCIsIkhlYWRlck1lbnVzIiwiaXNPcGVuIiwiZ290b0hpZGUiLCJpc0hvdmVyIiwiaXNXYWl0IiwibG9nb1JlZiIsImNsb2NrUmVmIiwidG9nZ2xlTWVudSIsImNhbmNlbCIsInNldE1lbnVTdGF0dXMiLCJoaWRlTWVudSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImhpZGUiLCJzZXRPbkxvZ29Ib3ZlciIsInNldE9mZkxvZ29Ib3ZlciIsImNvbnRleHRUeXBlIiwicmVkaXJlY3RUbyIsInVybCIsInNjcm9sbFRvVGFyZ2V0IiwidGFyZ2V0IiwiaGFuZGxlUmVkaXJlY3QiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNjcm9sbFkiLCJGcmFnbWVudCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1JpZ2h0IiwiaHJlZiIsImJpbmQiLCJjZWxsUGFkZGluZyIsImNlbGxTcGFjaW5nIiwiYm9yZGVyIiwidCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNsaWVudFNsaWNlIiwic2Nyb2xsU2xpY2UiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJQcmVsb2FkIiwibG9hZGVkIiwib25zaG93Iiwic2hvd0JlZm9yZSIsInNob3dUaW1lciIsIl9wcmV2UHJvcHMiLCJvbk9wZW4iLCJsYXp5QWN0IiwiZGlzYWJsZVJlZGlyZWN0TG9hZGluZyIsIlJlZGlyZWN0TG9hZGluZyIsImNhbGxiYWNrRXZlbnQiLCJyZWRpcmVjdFVybCIsInRlc3QiLCJvcGVuIiwibGlua1VybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwicmVkaXJlY3Rsb2FkaW5nIiwidGhlbiIsImJhc2VTbGljZSIsImluaXRpYWxpemVBcHAiLCJnZXRBbmFseXRpY3MiLCJHb29nbGVDb25zZW50IiwiaXNDb25zZW50ZWQiLCJjb250ZW50UmVmIiwiaW5pdEdvb2dsZXRhZyIsImd0bVNjcmlwdCIsImFzeW5jIiwic3JjIiwiZmlyc3RTY3JpcHQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJjbG9zZUNvbnNlbnRCb3giLCJjbGlja0RlY2xpbmVIYW5kbGVyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImd0YWciLCJkYXRhTGF5ZXIiLCJhcmd1bWVudHMiLCJhZF91c2VyX2RhdGEiLCJhZF9wZXJzb25hbGl6YXRpb24iLCJhZF9zdG9yYWdlIiwiYW5hbHl0aWNzX3N0b3JhZ2UiLCJjbGlja0FsbG93SGFuZGxlciIsImZpcmVCYXNlSW5pdCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImFuYWx5dGljcyIsImdldEl0ZW0iLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiYmFja2dyb3VuZCIsInpJbmRleCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJpZCIsIm1hcmdpblJpZ2h0IiwiY3JlYXRlQ29udGV4dCIsImlzVGFibGV0IiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpc0FwcE9wZW4iLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRJc0FwcE9wZW4iLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInNldENsaWVudFdpZHRoIiwic2V0Q2xpZW50SGVpZ2h0IiwiY29uZmlndXJlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJyb290UmVkdWNlciIsInN0b3JlIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxDb250ZW50SXNJblZpZXciLCJzY3JvbGxDb250ZW50SXNJblZpZXdJbml0VG9wIiwic2Nyb2xsQ29udGVudEhlaWdodCIsImluaXRWaWV3U2Nyb2xsVG9MZWZ0Iiwib25QdWxsU2Nyb2xsQ29udGVudEhlaWdodCIsInNjcm9sbENvbnRlbnRNb3ZlWSIsInNldFNjcm9sbFkiLCJzZXRTY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbENvbnRlbnRJc0luVmlldyIsInNldEluU2Nyb2xsQ29udGVudFZpZXdJbml0VG9wIiwic2V0U2Nyb2xsQ29udGVudEhlaWdodCIsInNldEluaXRWaWV3U2Nyb2xsVG9MZWZ0Iiwic2V0T25QdWxsU2Nyb2xsQ29udGVudEhlaWdodCIsInNldFNjcm9sbENvbnRlbnRNb3ZlWSIsIldlYkZvbnQiLCJ0aHJvdHRsZSIsInNlY29uZHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVycm9yIiwibGF6eUNhbGwiLCJmdW5jIiwiYXJncyIsImNoZWNrSXNJblZpZXdwb3J0IiwiY2FsbGJhY2siLCJyZWN0IiwiY2FsbCIsImNoZWNrSXNJbkhhbGZWaWV3cG9ydCIsImRvY3VtZW50RWxlbWVudCIsImNoZWNrSXNTdXBwb3J0V2VicCIsImVsZW0iLCJnZXRDb250ZXh0IiwidG9EYXRhVVJMIiwiaW5kZXhPZiIsImdldFJlbFdpZHRoIiwibG9hZEZvbnQiLCJsb2FkTm9TY3JpcHRUYWciLCJsb2FkIiwiZGVmZXIiLCJ0aW1lb3V0IiwiZ29vZ2xlIiwiZmFtaWxpZXMiLCJhY3RpdmUiLCJsb2FkR3RhZyIsInNjcmlwdCIsImhlYWQiLCJnZXRUaW1lIiwibm9zY3JpcHQiLCJpZnJhbWUiLCJkaXNwbGF5IiwidmlzaWJpbGl0eSJdLCJzb3VyY2VSb290IjoiIn0=