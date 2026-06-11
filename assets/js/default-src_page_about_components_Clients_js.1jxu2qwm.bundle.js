"use strict";
(self["webpackChunkweb_webpack"] = self["webpackChunkweb_webpack"] || []).push([["default-src_page_about_components_Clients_js"],{

/***/ "./src/common/components/LogoTag.js":
/*!******************************************!*\
  !*** ./src/common/components/LogoTag.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// import { lazyAct } from "@/utils/";

class LogoTag extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null,
      imgWidth: null,
      imgHeight: null
    };
    this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }
  getImageWidthFromSrc() {
    const img = new Image();
    img.src = this.props.src;
    return img.width;
  }
  componentDidMount() {
    const {
      pullImageInfo,
      src,
      height
    } = this.props;
    if (src) {
      const img = new Image();
      if (img.complete) {
        this.setState({
          imgSrc: src
        });
        if (pullImageInfo) pullImageInfo({
          width: height / img.height * img.width,
          height
        });
        this.setState({
          imgWidth: img.width,
          imgHeight: img.height
        });
      }
      img.onload = () => {
        this.setState({
          imgSrc: img.src
        });
        if (pullImageInfo) pullImageInfo({
          width: height / img.height * img.width,
          height
        });
        this.setState({
          imgWidth: img.width,
          imgHeight: img.height
        });
      };
      img.src = src;
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      this.componentDidMount();
    }
  }
  render() {
    const height = this.props.height || 50;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: ["logo-tag", this.props.className].join(" "),
      ref: this.ref,
      style: {
        backgroundImage: !!this.state.imgSrc ? `url(${this.state.imgSrc})` : null,
        height: `${height}px`,
        width: `${height / this.state.imgHeight * this.state.imgWidth}px`
      }
    }, !!this.state.imgSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: this.props.src,
      alt: this.props.alt,
      style: {
        opacity: 0,
        visibility: "hidden"
      }
    }));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoTag);

/***/ }),

/***/ "./src/data/awards.js":
/*!****************************!*\
  !*** ./src/data/awards.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
// {name: 'Webby', logo: '/assets/img/page/about/Webby_logo-copy.webp'},
{
  name: 'AWWW',
  logo: '/assets/img/page/about/Awwwards.svg'
}, {
  name: 'C2A',
  logo: '/assets/img/page/about/C2A-dark.webp'
}]);

/***/ }),

/***/ "./src/data/clients.js":
/*!*****************************!*\
  !*** ./src/data/clients.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  name: 'Adrenaline',
  logo: '/assets/img/service/clients/v3/adrenaline.png'
}, {
  name: 'Aims',
  logo: '/assets/img/service/clients/v3/aims.png'
}, {
  name: 'Biotherm',
  logo: '/assets/img/service/clients/v3/biotherm.png'
}, {
  name: 'Bydeigners',
  logo: '/assets/img/service/clients/v3/bydesigners.png'
}, {
  name: 'Carat',
  logo: '/assets/img/service/clients/v3/carat.png'
}, {
  name: 'Cathay',
  logo: '/assets/img/service/clients/v3/cathay.png'
}, {
  name: 'Clp',
  logo: '/assets/img/service/clients/v3/clp.png'
}, {
  name: 'Craftique',
  logo: '/assets/img/service/clients/v3/craftique.png'
}, {
  name: 'Digit Digit',
  logo: '/assets/img/service/clients/v3/digit.png'
}, {
  name: 'Dksh',
  logo: '/assets/img/service/clients/v3/dksh.png'
}, {
  name: 'Estee-Lauder',
  logo: '/assets/img/service/clients/v3/estee-lauder.png'
}, {
  name: 'Eugene',
  logo: '/assets/img/service/clients/v3/eugene.png'
}, {
  name: 'Fancl',
  logo: '/assets/img/service/clients/v3/fancl.png'
}, {
  name: 'Fidelity',
  logo: '/assets/img/service/clients/v3/fidelity.png'
}, {
  name: 'Flight001',
  logo: '/assets/img/service/clients/v3/flight001.png'
}, {
  name: 'HKCU',
  logo: '/assets/img/service/clients/v3/HKCU.png'
}, {
  name: 'HSBC',
  logo: '/assets/img/service/clients/v3/hsbc.png'
}, {
  name: 'Isobar',
  logo: '/assets/img/service/clients/v3/isobar.png'
}, {
  name: 'Mtr',
  logo: '/assets/img/service/clients/v3/mtr.png'
}, {
  name: 'Olay',
  logo: '/assets/img/service/clients/v3/olay.png'
}, {
  name: 'paulY',
  logo: '/assets/img/service/clients/v3/paulY.png'
}, {
  name: 'Rasonic',
  logo: '/assets/img/service/clients/v3/rasonic.png'
},
// {name: 'Rhythmfit', logo: '/assets/img/service/clients/v3/rhythmfit.png'},
{
  name: 'Sephora',
  logo: '/assets/img/service/clients/v3/sephora.png'
}, {
  name: 'SHK',
  logo: '/assets/img/service/clients/v3/SHK.png'
}, {
  name: 'Soup-Up',
  logo: '/assets/img/service/clients/v3/soupup.png'
}, {
  name: 'St. James',
  logo: '/assets/img/service/clients/v3/st.james.png'
}, {
  name: 'Takbo',
  logo: '/assets/img/service/clients/v3/takbo.png'
}, {
  name: 'Toshiba',
  logo: '/assets/img/service/clients/v3/toshiba.png'
}, {
  name: 'Water Oasis',
  logo: '/assets/img/service/clients/v3/water-oasis.png'
}, {
  name: 'WingTai',
  logo: '/assets/img/service/clients/v3/wingTai.png'
}, {
  name: 'WTF',
  logo: '/assets/img/service/clients/v3/WTF.png'
}, {
  name: 'Zha',
  logo: '/assets/img/service/clients/v3/ZHA.png'
}, {
  name: 'Zyphr',
  logo: '/assets/img/service/clients/v3/zyphr.png'
}]);

/***/ }),

/***/ "./src/page/about/components/Clients.js":
/*!**********************************************!*\
  !*** ./src/page/about/components/Clients.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./src/utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _data_clients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/clients */ "./src/data/clients.js");
/* harmony import */ var _data_awards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/awards */ "./src/data/awards.js");
/* harmony import */ var _common_components_LogoTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/components/LogoTag */ "./src/common/components/LogoTag.js");






class Clients extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectlist: [{
        subject: 'members',
        minamount: 10,
        addition: '10+ members',
        num: 0
      }, {
        subject: 'completed projects',
        minamount: 100,
        addition: '100+ projects',
        num: 0
      }, {
        subject: 'of experience',
        minamount: 14,
        addition: '14 years of experience',
        num: 0
      }],
      isRuning: false,
      brandList: _data_clients__WEBPACK_IMPORTED_MODULE_2__["default"].sort((a, b) => Math.random() - 0.5),
      awardList: _data_awards__WEBPACK_IMPORTED_MODULE_3__["default"].sort((a, b) => Math.random() - 0.5),
      showBrandList: [],
      tempShowBrandList: [],
      lessShowBrandList: [],
      selectedIndexRow: [0, 1],
      collectBoxWidths: []
    };
    this.viewRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  }
  checkIsSelected = index => {
    return this.state.selectedIndexRow.includes(index);
  };
  getRandomIndex = maxNum => {
    const index = Math.round(Math.random() * (maxNum - 1));
    return index > maxNum - 1 ? maxNum - 1 : index;
  };
  renderShowBrandList = (showBrandList, lessBrandList, selectedIndexRow) => {
    return showBrandList.map((item, index) => {
      if (selectedIndexRow.includes(index)) {
        const selectIndex = this.getRandomIndex(lessBrandList.length);
        return lessBrandList.splice(selectIndex, 1)[0];
      }
      return item;
    }).filter(item => !!item);
  };
  renderLessBrandList = (showBrandList, selectedIndexRow) => {
    return showBrandList.map((item, index) => {
      if (selectedIndexRow.includes(index)) {
        return item;
      }
    }).filter(item => item !== null);
  };
  renderMatchArray = (array, num) => {
    const renderArray = [];
    const renderLessArray = [];
    for (let ind = 0; ind < array.length; ind++) {
      const element = array[ind];
      if (!element) continue;
      if (renderArray.length < num) {
        renderArray.push(element);
      } else {
        renderLessArray.push(element);
      }
    }
    return [renderArray, renderLessArray];
  };
  renderCombineArray = (array1, array2) => {
    const combineArray = [];
    for (let ind = 0; ind < array1.length; ind++) {
      const element = array1[ind];
      if (!element) continue;
      combineArray.push(element);
    }
    for (let ind = 0; ind < array2.length; ind++) {
      const element = array2[ind];
      if (!element) continue;
      combineArray.push(element);
    }
    return combineArray;
  };
  selectChangeIcon = () => {
    const {
      isPC
    } = this.props;
    let selectedIndexRow = [];
    let lessBrandList;
    let tempShowBrandList = this.state.tempShowBrandList.length < 2 ? this.state.brandList : this.state.tempShowBrandList;
    let showBrandList = [];
    const maxNum = isPC ? 12 : 8;
    const changeNextNum = isPC ? 3 : 3;
    // [showBrandList, lessBrandList] = this.renderMatchArray(tempShowBrandList, 0, maxNum);
    showBrandList = tempShowBrandList.slice(0, maxNum);
    lessBrandList = tempShowBrandList.slice(maxNum);
    do {
      const selectedIndex = this.getRandomIndex(maxNum);
      if (!selectedIndexRow.includes(selectedIndex)) {
        selectedIndexRow.push(selectedIndex);
      }
    } while (selectedIndexRow.length < changeNextNum);
    const _lessBrandList = this.renderLessBrandList(showBrandList, selectedIndexRow);
    showBrandList = this.renderShowBrandList(showBrandList, lessBrandList, selectedIndexRow);

    // tempShowBrandList = [...showBrandList, ..._lessBrandList];
    tempShowBrandList = this.renderCombineArray(showBrandList, _lessBrandList);
    this.setState({
      selectedIndexRow,
      tempShowBrandList
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.lazyAct)(0.2).then(() => {
      this.setState({
        showBrandList
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.lazyAct)(6).then(() => {
        this.selectChangeIcon();
      });
    });
  };
  digitMumberAnimation(str) {
    let hasChanged = false;
    const newArray = this.state.subjectlist.map(item => {
      if (item.subject === str && item.num != item.minamount) {
        item.num += 1;
        hasChanged = true;
      }
      return item;
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.lazyAct)(0.08).then(() => {
      if (hasChanged) {
        this.setState({
          subjectlist: newArray
        });
        this.digitMumberAnimation(str);
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.scrollY !== this.props.scrollY) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkIsInViewport)(this.viewRef.current, status => {
        if (status) {
          if (!this.state.isRuning) {
            this.digitMumberAnimation('members');
            this.digitMumberAnimation('completed projects');
            this.digitMumberAnimation('of experience');
            this.setState({
              isRuning: true
            });
          }
        } else {
          const newArray = this.state.subjectlist.map(item => {
            item.num = 0;
            return item;
          });
          this.setState({
            subjectlist: newArray,
            isRuning: false
          });
        }
      });
    }
  }
  componentDidMount() {
    this.selectChangeIcon();
  }
  collectBoxWidth = (index, style) => {
    const width = !!style.width ? style.width : 0;
    const collectBoxWidths = this.state.collectBoxWidths;
    collectBoxWidths[index] = width;
    this.setState({
      collectBoxWidths
    });
  };
  renderItemStyle = index => {
    const {
      isPC
    } = this.props;
    const {
      collectBoxWidths
    } = this.state;
    let width = collectBoxWidths[index];
    if (isPC) return {
      // width: `calc(25% - 1rem)`,
      // flexBasis: `calc(25% - 1rem)`,
    };
    width = isPC ? width + 26 : width;
    return {
      width: `${width}px`,
      flexBasis: `${width}px`
    };
  };
  render() {
    const {
      isPC,
      isTablet,
      noshowtext
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients",
      ref: this.viewRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner"
    }, !noshowtext && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-wrapper-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ciwb-list"
    }, this.state.subjectlist.map((item, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "ciwb-list-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "ciwb-list-item-num"
      }, item.minamount, index == 2 ? ' Years' : '+'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "ciwb-list-item-text"
      }, item.subject));
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-intro-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-intro-wrapper-desc"
    }, "Founded in 2010, eb-suite limited is a full-stack digital studio specializing in the design and development of apps, websites, branding and Mobile Commerce solutions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-intro-wrapper-desc"
    }, "We are a dynamic team of tech enthusiasts, multi-skilled designers, and curious IT specialists\u2014always eager to take on new challenges and evolve as rapidly as the digital landscape itself. Our diverse expertise allows us to stay ahead of the curve, continually learning and adapting to new technologies and trends."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-intro-wrapper-desc"
    }, "At the heart of everything we do is a passion for creating exceptional digital experiences that people love. We focus on crafting solutions that are both powerful and refined, offering high functionality while maintaining a polished, user-centered experience.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "We are driven by our core values:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Creativity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Technology Driven"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Sophistication"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Passion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Curiosity"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-intro-wrapper-desc"
    }, "These values inspire us to achieve excellence, ensuring that every project we deliver is not only functional but also engaging, refine designed, and tailored to meet the needs of our clients and their audiences."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-addition"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-addition-title section-subject"
    }, "Awards"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-addition-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ciad-imgbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ciad-imgbox-list",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
      }
    }, this.state.awardList.map((item, index) => {
      if (!!item) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: ['ciad-imgbox-list-item'].join(' '),
        style: {
          marginRight: '1rem',
          marginBottom: '30px',
          display: 'inline-block',
          flexBasis: 'auto',
          width: 'auto',
          maxWidth: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_LogoTag__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: item.logo,
        alt: item.name,
        height: isPC ? 45 : 32
      }));
    }).filter(item => !!item))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-addition"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-addition-title section-subject"
    }, "Clients"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "clients-inner-addition-desc"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ciad-imgbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ciad-imgbox-list",
      style: isTablet ? {
        columnCount: 3,
        display: 'block!important',
        columnGap: '2rem'
      } : isPC ? {
        columnCount: 4,
        display: 'block!important',
        columnGap: '9rem'
      } : {
        columnCount: 3,
        display: 'block!important',
        columnGap: '1rem'
      }
    }, this.state.showBrandList.map((item, index) => {
      if (!!item) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: ['ciad-imgbox-list-item', this.checkIsSelected(index) ? 'fade-in' : ''].join(' '),
        style: this.renderItemStyle(index)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_LogoTag__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: item.logo,
        alt: item.name,
        height: isPC ? 60 : 55,
        pullImageInfo: v => this.collectBoxWidth(index, v)
      }));
    }).filter(item => !!item)))))));
  }
}
const mapStateToProps = state => {
  return {
    // scrollY: state.getIn(['app', 'window', 'pageYOffset']),
    scrollY: state.scrollSlice.scrollY,
    clientWidth: state.clientSlice.clientWidth,
    isPC: state.clientSlice.isPC,
    isTablet: state.clientSlice.isTablet
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps)(Clients));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2RlZmF1bHQtc3JjX3BhZ2VfYWJvdXRfY29tcG9uZW50c19DbGllbnRzX2pzLjFqeHUycXdtLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDekM7O0FBRUEsTUFBTUUsT0FBTyxTQUFTRCw0Q0FBUyxDQUFDO0VBQzVCRSxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7SUFDZixLQUFLLENBQUNBLEtBQUssQ0FBQztJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHO01BQ1RDLE1BQU0sRUFBRSxJQUFJO01BQ1pDLFFBQVEsRUFBRSxJQUFJO01BQ2RDLFNBQVMsRUFBRTtJQUNmLENBQUM7SUFDRCxJQUFJLENBQUNDLEdBQUcsZ0JBQUdULHNEQUFlLENBQUMsQ0FBQztFQUNoQztFQUVBVyxvQkFBb0JBLENBQUEsRUFBRztJQUNuQixNQUFNQyxHQUFHLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDdkJELEdBQUcsQ0FBQ0UsR0FBRyxHQUFHLElBQUksQ0FBQ1YsS0FBSyxDQUFDVSxHQUFHO0lBQ3hCLE9BQU9GLEdBQUcsQ0FBQ0csS0FBSztFQUNwQjtFQUVBQyxpQkFBaUJBLENBQUEsRUFBRztJQUNoQixNQUFNO01BQUNDLGFBQWE7TUFBRUgsR0FBRztNQUFFSTtJQUFNLENBQUMsR0FBRyxJQUFJLENBQUNkLEtBQUs7SUFDL0MsSUFBSVUsR0FBRyxFQUFFO01BQ0wsTUFBTUYsR0FBRyxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO01BQ3ZCLElBQUlELEdBQUcsQ0FBQ08sUUFBUSxFQUFFO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLENBQUM7VUFDVmQsTUFBTSxFQUFFUTtRQUNaLENBQUMsQ0FBQztRQUNGLElBQUlHLGFBQWEsRUFBRUEsYUFBYSxDQUFDO1VBQUVGLEtBQUssRUFBRUcsTUFBTSxHQUFHTixHQUFHLENBQUNNLE1BQU0sR0FBR04sR0FBRyxDQUFDRyxLQUFLO1VBQUVHO1FBQU0sQ0FBQyxDQUFDO1FBQ25GLElB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QUFDRCxJQUFJLEVBQUUsUUFBUTtFQUFFQyxJQUFJLEVBQUU7QUFBMkMsQ0FBQyxFQUNuRTtFQUFDRCxJQUFJLEVBQUUsS0FBSztFQUFFQyxJQUFJLEVBQUU7QUFBd0MsQ0FBQyxFQUM3RDtFQUFDRCxJQUFJLEVBQUUsV0FBVztFQUFFQyxJQUFJLEVBQUU7QUFBOEMsQ0FBQyxFQUN6RTtFQUFDRCxJQUFJLEVBQUUsYUFBYTtFQUFFQyxJQUFJLEVBQUU7QUFBMEMsQ0FBQyxFQUN2RTtFQUFDRCxJQUFJLEVBQUUsTUFBTTtFQUFFQyxJQUFJLEVBQUU7QUFBeUMsQ0FBQyxFQUMvRDtFQUFDRCxJQUFJLEVBQUUsY0FBYztFQUFFQyxJQUFJLEVBQUU7QUFBaUQsQ0FBQyxFQUMvRTtFQUFDRCxJQUFJLEVBQUUsUUFBUTtFQUFFQyxJQUFJLEVBQUU7QUFBMkMsQ0FBQyxFQUNuRTtFQUFDRCxJQUFJLEVBQUUsT0FBTztFQUFFQyxJQUFJLEVBQUU7QUFBMEMsQ0FBQyxFQUNqRTtFQUFDRCxJQUFJLEVBQUUsVUFBVTtFQUFFQyxJQUFJLEVBQUU7QUFBNkMsQ0FBQyxFQUN2RTtFQUFDRCxJQUFJLEVBQUUsV0FBVztFQUFFQyxJQUFJLEVBQUU7QUFBOEMsQ0FBQyxFQUN6RTtFQUFDRCxJQUFJLEVBQUUsTUFBTTtFQUFFQyxJQUFJLEVBQUU7QUFBeUMsQ0FBQyxFQUMvRDtFQUFDRCxJQUFJLEVBQUUsTUFBTTtFQUFFQyxJQUFJLEVBQUU7QUFBeUMsQ0FBQyxFQUMvRDtFQUFDRCxJQUFJLEVBQUUsUUFBUTtFQUFFQyxJQUFJLEVBQUU7QUFBMkMsQ0FBQyxFQUNuRTtFQUFDRCxJQUFJLEVBQUUsS0FBSztFQUFFQyxJQUFJLEVBQUU7QUFBd0MsQ0FBQyxFQUM3RDtFQUFDRCxJQUFJLEVBQUUsTUFBTTtFQUFFQyxJQUFJLEVBQUU7QUFBeUMsQ0FBQyxFQUMvRDtFQUFDRCxJQUFJLEVBQUUsT0FBTztFQUFFQyxJQUFJLEVBQUU7QUFBMEMsQ0FBQyxFQUNqRTtFQUFDRCxJQUFJLEVBQUUsU0FBUztFQUFFQyxJQUFJLEVBQUU7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QixPQUFPO0lBQ0g7SUFDQTZGLE9BQU8sRUFBRTdGLEtBQUssQ0FBQ2tILFdBQVcsQ0FBQ3JCLE9BQU87SUFDbENzQixXQUFXLEVBQUVuSCxLQUFLLENBQUNvSCxXQUFXLENBQUNELFdBQVc7SUFDMUNqQyxJQUFJLEVBQUVsRixLQUFLLENBQUNvSCxXQUFXLENBQUNsQyxJQUFJO0lBQzVCaUIsUUFBUSxFQUFFbkcsS0FBSyxDQUFDb0gsV0FBVyxDQUFDakI7RUFDaEMsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZW5FLG9EQUFPLENBQUNpRixlQUFlLENBQUMsQ0FBQzlFLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL0xvZ29UYWcuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvZGF0YS9hd2FyZHMuanMiLCJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvZGF0YS9jbGllbnRzLmpzIiwid2VicGFjazovL3dlYi13ZWJwYWNrLy4vc3JjL3BhZ2UvYWJvdXQvY29tcG9uZW50cy9DbGllbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgbGF6eUFjdCB9IGZyb20gXCJAL3V0aWxzL1wiO1xyXG5cclxuY2xhc3MgTG9nb1RhZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpbWdTcmM6IG51bGwsXHJcbiAgICAgICAgICAgIGltZ1dpZHRoOiBudWxsLFxyXG4gICAgICAgICAgICBpbWdIZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlV2lkdGhGcm9tU3JjKCkge1xyXG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZy5zcmMgPSB0aGlzLnByb3BzLnNyYztcclxuICAgICAgICByZXR1cm4gaW1nLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtwdWxsSW1hZ2VJbmZvLCBzcmMsIGhlaWdodH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChzcmMpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGlmIChpbWcuY29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1NyYzogc3JjLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHVsbEltYWdlSW5mbykgcHVsbEltYWdlSW5mbyh7IHdpZHRoOiBoZWlnaHQgLyBpbWcuaGVpZ2h0ICogaW1nLndpZHRoLCBoZWlnaHR9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1dpZHRoOiBpbWcud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiBpbWcuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1NyYzogaW1nLnNyYyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHB1bGxJbWFnZUluZm8pIHB1bGxJbWFnZUluZm8oeyB3aWR0aDogaGVpZ2h0IC8gaW1nLmhlaWdodCAqIGltZy53aWR0aCwgaGVpZ2h0IH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nV2lkdGg6IGltZy53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IGltZy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChwcmV2UHJvcHMuc3JjICE9PSB0aGlzLnByb3BzLnNyYykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodCB8fCA1MDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W1wibG9nby10YWdcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWVdLmpvaW4oXCIgXCIpfSByZWY9e3RoaXMucmVmfSBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICEhdGhpcy5zdGF0ZS5pbWdTcmMgPyBgdXJsKCR7dGhpcy5zdGF0ZS5pbWdTcmN9KWAgOiBudWxsLCBoZWlnaHQ6IGAke2hlaWdodH1weGAsIHdpZHRoOiBgJHtoZWlnaHQgLyB0aGlzLnN0YXRlLmltZ0hlaWdodCAqIHRoaXMuc3RhdGUuaW1nV2lkdGh9cHhgfX0+XHJcbiAgICAgICAgICAgICAgICB7ISF0aGlzLnN0YXRlLmltZ1NyYyAmJiA8aW1nIHNyYz17dGhpcy5wcm9wcy5zcmN9IGFsdD17dGhpcy5wcm9wcy5hbHR9IHN0eWxlPXt7b3BhY2l0eTogMCwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIn19IC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvVGFnOyIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIC8vIHtuYW1lOiAnV2ViYnknLCBsb2dvOiAnL2Fzc2V0cy9pbWcvcGFnZS9hYm91dC9XZWJieV9sb2dvLWNvcHkud2VicCd9LFxyXG4gICAge25hbWU6ICdBV1dXJywgbG9nbzonL2Fzc2V0cy9pbWcvcGFnZS9hYm91dC9Bd3d3YXJkcy5zdmcnfSxcclxuICAgIHtuYW1lOiAnQzJBJywgbG9nbzogJy9hc3NldHMvaW1nL3BhZ2UvYWJvdXQvQzJBLWRhcmsud2VicCd9LFxyXG5dOyIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtuYW1lOiAnQWRyZW5hbGluZScsIGxvZ286ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2NsaWVudHMvdjMvYWRyZW5hbGluZS5wbmcnfSxcclxuICAgIHtuYW1lOiAnQWltcycsIGxvZ286Jy9hc3NldHMvaW1nL3NlcnZpY2UvY2xpZW50cy92My9haW1zLnBuZyd9LFxyXG4gICAge25hbWU6ICdCaW90aGVybScsIGxvZ286ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2NsaWVudHMvdjMvYmlvdGhlcm0ucG5nJ30sXHJcbiAgICB7bmFtZTogJ0J5ZGVpZ25lcnMnLCBsb2dvOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9jbGllbnRzL3YzL2J5ZGVzaWduZXJzLnBuZyd9LFxyXG4gICAge25hbWU6ICdDYXJhdCcsIGxvZ286ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2NsaWVudHMvdjMvY2FyYXQucG5nJ30sXHJcbiAgICB7bmFtZTogJ0NhdGhheScsIGxvZ286ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2NsaWVudHMvdjMvY2F0aGF5LnBuZyd9LFxyXG4gICAge25hbWU6ICdDbHAnLCBsb2dvOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9jbGllbnRzL3YzL2NscC5wbmcnfSxcclxuICAgIHtuYW1lOiAnQ3JhZnRpcXVlJywgbG9nbzogJy9hc3NldHMvaW1nL3NlcnZpY2UvY2xpZW50cy92My9jcmFmdGlxdWUucG5nJ30sXHJcbiAgICB7bmFtZTogJ0RpZ2l0IERpZ2l0JywgbG9nbzogJy9hc3NldHMvaW1nL3NlcnZpY2UvY2xpZW50cy92My9kaWdpdC5wbmcnfSxcclxuICAgIHtuYW1lOiAnRGtzaCcsIGxvZ286ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2NsaWVudHMvdjMvZGtzaC5wbmcnfSxcclxuICAgIHtuYW1lOiAnRXN0ZWUtTGF1ZGVyJywgbG9nbzogJy9hc3NldHMvaW1nL3NlcnZpY2UvY2xpZW50cy92My9lc3RlZS1sYXVkZXIucG5nJ30sXHJcbiAgICB7bmFtZTogJ0V1Z2VuZScsIGxvZ286ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2NsaWVudHMvdjMvZXVnZW5lLnBuZyd9LFxyXG4gICAge25hbWU6ICdGYW5jbCcsIGxvZ286ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2NsaWVudHMvdjMvZmFuY2wucG5nJ30sXHJcbiAgICB7bmFtZTogJ0ZpZGVsaXR5JywgbG9nbzogJy9hc3NldHMvaW1nL3NlcnZpY2UvY2xpZW50cy92My9maWRlbGl0eS5wbmcnfSxcclxuICAgIHtuYW1lOiAnRmxpZ2h0MDAxJywgbG9nbzogJy9hc3NldHMvaW1nL3NlcnZpY2UvY2xpZW50cy92My9mbGlnaHQwMDEucG5nJ30sXHJcbiAgICB7bmFtZTogJ0hLQ1UnLCBsb2dvOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9jbGllbnRzL3YzL0hLQ1UucG5nJ30sXHJcbiAgICB7bmFtZTogJ0hTQkMnLCBsb2dvOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9jbGllbnRzL3YzL2hzYmMucG5nJ30sXHJcbiAgICB7bmFtZTogJ0lzb2JhcicsIGxvZ286ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2NsaWVudHMvdjMvaXNvYmFyLnBuZyd9LFxyXG4gICAge25hbWU6ICdNdHInLCBsb2dvOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9jbGllbnRzL3YzL210ci5wbmcnfSxcclxuICAgIHtuYW1lOiAnT2xheScsIGxvZ286ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2NsaWVudHMvdjMvb2xheS5wbmcnfSxcclxuICAgIHtuYW1lOiAncGF1bFknLCBsb2dvOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9jbGllbnRzL3YzL3BhdWxZLnBuZyd9LFxyXG4gICAge25hbWU6ICdSYXNvbmljJywgbG9nbzogJy9hc3NldHMvaW1nL3NlcnZpY2UvY2xpZW50cy92My9yYXNvbmljLnBuZyd9LFxyXG4gICAgLy8ge25hbWU6ICdSaHl0aG1maXQnLCBsb2dvOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9jbGllbnRzL3YzL3JoeXRobWZpdC5wbmcnfSxcclxuICAgIHtuYW1lOiAnU2VwaG9yYScsIGxvZ286ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2NsaWVudHMvdjMvc2VwaG9yYS5wbmcnfSxcclxuICAgIHtuYW1lOiAnU0hLJywgbG9nbzogJy9hc3NldHMvaW1nL3NlcnZpY2UvY2xpZW50cy92My9TSEsucG5nJ30sXHJcbiAgICB7bmFtZTogJ1NvdXAtVXAnLCBsb2dvOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9jbGllbnRzL3YzL3NvdXB1cC5wbmcnfSxcclxuICAgIHtuYW1lOiAnU3QuIEphbWVzJywgbG9nbzogJy9hc3NldHMvaW1nL3NlcnZpY2UvY2xpZW50cy92My9zdC5qYW1lcy5wbmcnfSxcclxuICAgIHtuYW1lOiAnVGFrYm8nLCBsb2dvOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9jbGllbnRzL3YzL3Rha2JvLnBuZyd9LFxyXG4gICAge25hbWU6ICdUb3NoaWJhJywgbG9nbzogJy9hc3NldHMvaW1nL3NlcnZpY2UvY2xpZW50cy92My90b3NoaWJhLnBuZyd9LFxyXG4gICAge25hbWU6ICdXYXRlciBPYXNpcycsIGxvZ286ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2NsaWVudHMvdjMvd2F0ZXItb2FzaXMucG5nJ30sXHJcbiAgICB7bmFtZTogJ1dpbmdUYWknLCBsb2dvOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9jbGllbnRzL3YzL3dpbmdUYWkucG5nJ30sXHJcbiAgICB7bmFtZTogJ1dURicsIGxvZ286ICcvYXNzZXRzL2ltZy9zZXJ2aWNlL2NsaWVudHMvdjMvV1RGLnBuZyd9LFxyXG4gICAge25hbWU6ICdaaGEnLCBsb2dvOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9jbGllbnRzL3YzL1pIQS5wbmcnfSxcclxuICAgIHtuYW1lOiAnWnlwaHInLCBsb2dvOiAnL2Fzc2V0cy9pbWcvc2VydmljZS9jbGllbnRzL3YzL3p5cGhyLnBuZyd9LFxyXG5dOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNoZWNrSXNJblZpZXdwb3J0LCBsYXp5QWN0IH0gZnJvbSAnQC91dGlscyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBjbGllbnRzRGF0YSBmcm9tICdAL2RhdGEvY2xpZW50cyc7XHJcbmltcG9ydCBhd2FyZHNEYXRhIGZyb20gJ0AvZGF0YS9hd2FyZHMnO1xyXG5pbXBvcnQgTG9nb1RhZyBmcm9tICdAL2NvbW1vbi9jb21wb25lbnRzL0xvZ29UYWcnO1xyXG5cclxuY2xhc3MgQ2xpZW50cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0geyBcclxuICAgICAgICAgICAgc3ViamVjdGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgIHtzdWJqZWN0OiAnbWVtYmVycycsIG1pbmFtb3VudDogMTAsIGFkZGl0aW9uOiAnMTArIG1lbWJlcnMnLCBudW06IDB9LFxyXG4gICAgICAgICAgICAgICAge3N1YmplY3Q6ICdjb21wbGV0ZWQgcHJvamVjdHMnLCBtaW5hbW91bnQ6IDEwMCwgYWRkaXRpb246ICcxMDArIHByb2plY3RzJywgbnVtOiAwfSxcclxuICAgICAgICAgICAgICAgIHtzdWJqZWN0OiAnb2YgZXhwZXJpZW5jZScsIG1pbmFtb3VudDogMTQsIGFkZGl0aW9uOiAnMTQgeWVhcnMgb2YgZXhwZXJpZW5jZScsIG51bTogMH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGlzUnVuaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgYnJhbmRMaXN0OiBjbGllbnRzRGF0YS5zb3J0KChhLCBiKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KSxcclxuICAgICAgICAgICAgYXdhcmRMaXN0OiBhd2FyZHNEYXRhLnNvcnQoKGEsIGIpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpLFxyXG4gICAgICAgICAgICBzaG93QnJhbmRMaXN0OiBbXSxcclxuICAgICAgICAgICAgdGVtcFNob3dCcmFuZExpc3Q6IFtdLFxyXG4gICAgICAgICAgICBsZXNzU2hvd0JyYW5kTGlzdDogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhSb3c6IFswLCAxXSxcclxuICAgICAgICAgICAgY29sbGVjdEJveFdpZHRoczogW10sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnZpZXdSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIH1cclxuICAgIGNoZWNrSXNTZWxlY3RlZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXhSb3cuaW5jbHVkZXMoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbUluZGV4ID0gKG1heE51bSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heE51bSAtIDEpKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggPiBtYXhOdW0gLSAxID8gbWF4TnVtIC0gMSA6IGluZGV4O1xyXG4gICAgfVxyXG4gICAgcmVuZGVyU2hvd0JyYW5kTGlzdCA9IChzaG93QnJhbmRMaXN0LCBsZXNzQnJhbmRMaXN0LCBzZWxlY3RlZEluZGV4Um93KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNob3dCcmFuZExpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleFJvdy5pbmNsdWRlcyhpbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEluZGV4ID0gdGhpcy5nZXRSYW5kb21JbmRleChsZXNzQnJhbmRMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVzc0JyYW5kTGlzdC5zcGxpY2Uoc2VsZWN0SW5kZXgsIDEpWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pLmZpbHRlcihpdGVtID0+ICEhaXRlbSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJMZXNzQnJhbmRMaXN0ID0gKHNob3dCcmFuZExpc3QsIHNlbGVjdGVkSW5kZXhSb3cpID0+IHtcclxuICAgICAgICByZXR1cm4gc2hvd0JyYW5kTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4Um93LmluY2x1ZGVzKGluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKTtcclxuICAgIH1cclxuICAgIHJlbmRlck1hdGNoQXJyYXkgPSAoYXJyYXksIG51bSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJBcnJheSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHJlbmRlckxlc3NBcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZCA9IDA7IGluZCA8IGFycmF5Lmxlbmd0aDsgaW5kKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZF07XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXJBcnJheS5sZW5ndGggPCBudW0pIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckFycmF5LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJMZXNzQXJyYXkucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3JlbmRlckFycmF5LCByZW5kZXJMZXNzQXJyYXldO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQ29tYmluZUFycmF5ID0gKGFycmF5MSwgYXJyYXkyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tYmluZUFycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kID0gMDsgaW5kIDwgYXJyYXkxLmxlbmd0aDsgaW5kKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5MVtpbmRdO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBjb21iaW5lQXJyYXkucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kID0gMDsgaW5kIDwgYXJyYXkyLmxlbmd0aDsgaW5kKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5MltpbmRdO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBjb21iaW5lQXJyYXkucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVBcnJheTtcclxuICAgIH1cclxuICAgIHNlbGVjdENoYW5nZUljb24gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgaXNQQyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgc2VsZWN0ZWRJbmRleFJvdyA9IFtdO1xyXG4gICAgICAgIGxldCBsZXNzQnJhbmRMaXN0O1xyXG4gICAgICAgIGxldCB0ZW1wU2hvd0JyYW5kTGlzdCA9IHRoaXMuc3RhdGUudGVtcFNob3dCcmFuZExpc3QubGVuZ3RoIDwgMiA/IHRoaXMuc3RhdGUuYnJhbmRMaXN0IDogdGhpcy5zdGF0ZS50ZW1wU2hvd0JyYW5kTGlzdDtcclxuICAgICAgICBsZXQgc2hvd0JyYW5kTGlzdCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG1heE51bSA9IGlzUEMgPyAxMiA6IDg7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlTmV4dE51bSA9IGlzUEMgPyAzIDogMztcclxuICAgICAgICAvLyBbc2hvd0JyYW5kTGlzdCwgbGVzc0JyYW5kTGlzdF0gPSB0aGlzLnJlbmRlck1hdGNoQXJyYXkodGVtcFNob3dCcmFuZExpc3QsIDAsIG1heE51bSk7XHJcbiAgICAgICAgc2hvd0JyYW5kTGlzdCA9IHRlbXBTaG93QnJhbmRMaXN0LnNsaWNlKDAsIG1heE51bSk7XHJcbiAgICAgICAgbGVzc0JyYW5kTGlzdCA9IHRlbXBTaG93QnJhbmRMaXN0LnNsaWNlKG1heE51bSk7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5nZXRSYW5kb21JbmRleChtYXhOdW0pO1xyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdGVkSW5kZXhSb3cuaW5jbHVkZXMoc2VsZWN0ZWRJbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhSb3cucHVzaChzZWxlY3RlZEluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKHNlbGVjdGVkSW5kZXhSb3cubGVuZ3RoIDwgY2hhbmdlTmV4dE51bSk7XHJcblxyXG4gICAgICAgIGNvbnN0IF9sZXNzQnJhbmRMaXN0ID0gdGhpcy5yZW5kZXJMZXNzQnJhbmRMaXN0KHNob3dCcmFuZExpc3QsIHNlbGVjdGVkSW5kZXhSb3cpO1xyXG4gICAgICAgIHNob3dCcmFuZExpc3QgPSB0aGlzLnJlbmRlclNob3dCcmFuZExpc3Qoc2hvd0JyYW5kTGlzdCwgbGVzc0JyYW5kTGlzdCwgc2VsZWN0ZWRJbmRleFJvdyk7XHJcblxyXG4gICAgICAgIC8vIHRlbXBTaG93QnJhbmRMaXN0ID0gWy4uLnNob3dCcmFuZExpc3QsIC4uLl9sZXNzQnJhbmRMaXN0XTtcclxuICAgICAgICB0ZW1wU2hvd0JyYW5kTGlzdCA9IHRoaXMucmVuZGVyQ29tYmluZUFycmF5KHNob3dCcmFuZExpc3QsIF9sZXNzQnJhbmRMaXN0KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJbmRleFJvdywgdGVtcFNob3dCcmFuZExpc3QgfSk7XHJcblxyXG4gICAgICAgIGxhenlBY3QoMC4yKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dCcmFuZExpc3QgfSk7XHJcbiAgICAgICAgICAgIGxhenlBY3QoNikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdENoYW5nZUljb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkaWdpdE11bWJlckFuaW1hdGlvbihzdHIpIHtcclxuICAgICAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gdGhpcy5zdGF0ZS5zdWJqZWN0bGlzdC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnN1YmplY3QgPT09IHN0ciAmJiBpdGVtLm51bSAhPSBpdGVtLm1pbmFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5udW0gKz0gMTtcclxuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxhenlBY3QoMC4wOCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3ViamVjdGxpc3Q6IG5ld0FycmF5IH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWdpdE11bWJlckFuaW1hdGlvbihzdHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHByZXZQcm9wcy5zY3JvbGxZICE9PSB0aGlzLnByb3BzLnNjcm9sbFkpIHtcclxuICAgICAgICAgICAgY2hlY2tJc0luVmlld3BvcnQodGhpcy52aWV3UmVmLmN1cnJlbnQsIChzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNSdW5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWdpdE11bWJlckFuaW1hdGlvbignbWVtYmVycycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpZ2l0TXVtYmVyQW5pbWF0aW9uKCdjb21wbGV0ZWQgcHJvamVjdHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWdpdE11bWJlckFuaW1hdGlvbignb2YgZXhwZXJpZW5jZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNSdW5pbmc6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdBcnJheSA9IHRoaXMuc3RhdGUuc3ViamVjdGxpc3QubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJqZWN0bGlzdDogbmV3QXJyYXksIGlzUnVuaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDaGFuZ2VJY29uKCk7XHJcbiAgICB9XHJcbiAgICBjb2xsZWN0Qm94V2lkdGggPSAoaW5kZXgsIHN0eWxlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSAhIXN0eWxlLndpZHRoID8gc3R5bGUud2lkdGggOiAwO1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3RCb3hXaWR0aHMgPSB0aGlzLnN0YXRlLmNvbGxlY3RCb3hXaWR0aHM7XHJcbiAgICAgICAgY29sbGVjdEJveFdpZHRoc1tpbmRleF0gPSB3aWR0aDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGVjdEJveFdpZHRocyB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlckl0ZW1TdHlsZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXNQQyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGNvbGxlY3RCb3hXaWR0aHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY29sbGVjdEJveFdpZHRoc1tpbmRleF07XHJcbiAgICAgICAgaWYgKGlzUEMpIHJldHVybiB7IFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogYGNhbGMoMjUlIC0gMXJlbSlgLFxyXG4gICAgICAgICAgICAvLyBmbGV4QmFzaXM6IGBjYWxjKDI1JSAtIDFyZW0pYCxcclxuICAgICAgICAgfTtcclxuICAgICAgICB3aWR0aCA9IGlzUEMgPyB3aWR0aCArIDI2OiB3aWR0aDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxyXG4gICAgICAgICAgICBmbGV4QmFzaXM6IGAke3dpZHRofXB4YCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXNQQywgaXNUYWJsZXQsIG5vc2hvd3RleHQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudHNcIiByZWY9e3RoaXMudmlld1JlZn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudHMtaW5uZXInPlxyXG4gICAgICAgICAgICB7IW5vc2hvd3RleHQgJiYgPD48ZGl2IGNsYXNzTmFtZT1cImNsaWVudHMtaW5uZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRzLWlubmVyLXdyYXBwZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Npd2ItbGlzdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1YmplY3RsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2Npd2ItbGlzdC1pdGVtJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Npd2ItbGlzdC1pdGVtLW51bSc+e2l0ZW0ubWluYW1vdW50fXtpbmRleCA9PSAyID8gJyBZZWFycycgOiAnKyd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXdiLWxpc3QtaXRlbS10ZXh0Jz57aXRlbS5zdWJqZWN0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2Npd2ItbGlzdC1pdGVtLXRleHQnPntpdGVtLmFkZGl0aW9ufTwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnRzLWlubmVyLWludHJvLXdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsaWVudHMtaW5uZXItaW50cm8td3JhcHBlci1kZXNjJz5Gb3VuZGVkIGluIDIwMTAsIGViLXN1aXRlIGxpbWl0ZWQgaXMgYSBmdWxsLXN0YWNrIGRpZ2l0YWwgc3R1ZGlvIHNwZWNpYWxpemluZyBpbiB0aGUgZGVzaWduIGFuZCBkZXZlbG9wbWVudCBvZiBhcHBzLCB3ZWJzaXRlcywgYnJhbmRpbmcgYW5kIE1vYmlsZSBDb21tZXJjZSBzb2x1dGlvbnMuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50cy1pbm5lci1pbnRyby13cmFwcGVyLWRlc2MnPldlIGFyZSBhIGR5bmFtaWMgdGVhbSBvZiB0ZWNoIGVudGh1c2lhc3RzLCBtdWx0aS1za2lsbGVkIGRlc2lnbmVycywgYW5kIGN1cmlvdXMgSVQgc3BlY2lhbGlzdHPigJRhbHdheXMgZWFnZXIgdG8gdGFrZSBvbiBuZXcgY2hhbGxlbmdlcyBhbmQgZXZvbHZlIGFzIHJhcGlkbHkgYXMgdGhlIGRpZ2l0YWwgbGFuZHNjYXBlIGl0c2VsZi4gT3VyIGRpdmVyc2UgZXhwZXJ0aXNlIGFsbG93cyB1cyB0byBzdGF5IGFoZWFkIG9mIHRoZSBjdXJ2ZSwgY29udGludWFsbHkgbGVhcm5pbmcgYW5kIGFkYXB0aW5nIHRvIG5ldyB0ZWNobm9sb2dpZXMgYW5kIHRyZW5kcy48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGllbnRzLWlubmVyLWludHJvLXdyYXBwZXItZGVzYyc+QXQgdGhlIGhlYXJ0IG9mIGV2ZXJ5dGhpbmcgd2UgZG8gaXMgYSBwYXNzaW9uIGZvciBjcmVhdGluZyBleGNlcHRpb25hbCBkaWdpdGFsIGV4cGVyaWVuY2VzIHRoYXQgcGVvcGxlIGxvdmUuIFdlIGZvY3VzIG9uIGNyYWZ0aW5nIHNvbHV0aW9ucyB0aGF0IGFyZSBib3RoIHBvd2VyZnVsIGFuZCByZWZpbmVkLCBvZmZlcmluZyBoaWdoIGZ1bmN0aW9uYWxpdHkgd2hpbGUgbWFpbnRhaW5pbmcgYSBwb2xpc2hlZCwgdXNlci1jZW50ZXJlZCBleHBlcmllbmNlLjxici8+XHJcbiAgICAgICAgICAgICAgICBXZSBhcmUgZHJpdmVuIGJ5IG91ciBjb3JlIHZhbHVlczpcclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DcmVhdGl2aXR5PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRlY2hub2xvZ3kgRHJpdmVuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNvcGhpc3RpY2F0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBhc3Npb248L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q3VyaW9zaXR5PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpZW50cy1pbm5lci1pbnRyby13cmFwcGVyLWRlc2MnPlxyXG4gICAgICAgICAgICAgICAgVGhlc2UgdmFsdWVzIGluc3BpcmUgdXMgdG8gYWNoaWV2ZSBleGNlbGxlbmNlLCBlbnN1cmluZyB0aGF0IGV2ZXJ5IHByb2plY3Qgd2UgZGVsaXZlciBpcyBub3Qgb25seSBmdW5jdGlvbmFsIGJ1dCBhbHNvIGVuZ2FnaW5nLCByZWZpbmUgZGVzaWduZWQsIGFuZCB0YWlsb3JlZCB0byBtZWV0IHRoZSBuZWVkcyBvZiBvdXIgY2xpZW50cyBhbmQgdGhlaXIgYXVkaWVuY2VzLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PjwvPn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRzLWlubmVyLWFkZGl0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRzLWlubmVyLWFkZGl0aW9uLXRpdGxlIHNlY3Rpb24tc3ViamVjdFwiPkF3YXJkczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRzLWlubmVyLWFkZGl0aW9uLWRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2lhZC1pbWdib3gnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2lhZC1pbWdib3gtbGlzdCcgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLCBmbGV4V3JhcDogJ3dyYXAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hd2FyZExpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e1snY2lhZC1pbWdib3gtbGlzdC1pdGVtJ10uam9pbignICcpfSBzdHlsZT17e21hcmdpblJpZ2h0OiAnMXJlbScsIG1hcmdpbkJvdHRvbTogJzMwcHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhCYXNpczogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPXtpdGVtLmxpbmt9IHRhcmdldD0nX2JsYW5rJz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nb1RhZyBzcmM9e2l0ZW0ubG9nb30gYWx0PXtpdGVtLm5hbWV9IGhlaWdodD17aXNQQyA/IDQ1IDogMzJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9hPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuZmlsdGVyKGl0ZW0gPT4gISFpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cy1pbm5lci1hZGRpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cy1pbm5lci1hZGRpdGlvbi10aXRsZSBzZWN0aW9uLXN1YmplY3RcIj5DbGllbnRzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudHMtaW5uZXItYWRkaXRpb24tZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaWFkLWltZ2JveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaWFkLWltZ2JveC1saXN0JyBzdHlsZT17aXNUYWJsZXQgPyB7IGNvbHVtbkNvdW50OiAzLCBkaXNwbGF5OiAnYmxvY2shaW1wb3J0YW50JywgY29sdW1uR2FwOiAnMnJlbScgfSA6IChpc1BDID8geyBjb2x1bW5Db3VudDogNCwgZGlzcGxheTogJ2Jsb2NrIWltcG9ydGFudCcsIGNvbHVtbkdhcDogJzlyZW0nIH0gOiB7IGNvbHVtbkNvdW50OiAzLCBkaXNwbGF5OiAnYmxvY2shaW1wb3J0YW50JywgY29sdW1uR2FwOiAnMXJlbScgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0JyYW5kTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17WydjaWFkLWltZ2JveC1saXN0LWl0ZW0nLCB0aGlzLmNoZWNrSXNTZWxlY3RlZChpbmRleCkgPyAnZmFkZS1pbicgOiAnJ10uam9pbignICcpfSBzdHlsZT17dGhpcy5yZW5kZXJJdGVtU3R5bGUoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPXtpdGVtLmxpbmt9IHRhcmdldD0nX2JsYW5rJz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nb1RhZyBzcmM9e2l0ZW0ubG9nb30gYWx0PXtpdGVtLm5hbWV9IGhlaWdodD17aXNQQyA/IDYwIDogNTV9IHB1bGxJbWFnZUluZm89eyh2KSA9PiB0aGlzLmNvbGxlY3RCb3hXaWR0aChpbmRleCwgdil9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9hPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuZmlsdGVyKGl0ZW0gPT4gISFpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBzY3JvbGxZOiBzdGF0ZS5nZXRJbihbJ2FwcCcsICd3aW5kb3cnLCAncGFnZVlPZmZzZXQnXSksXHJcbiAgICAgICAgc2Nyb2xsWTogc3RhdGUuc2Nyb2xsU2xpY2Uuc2Nyb2xsWSxcclxuICAgICAgICBjbGllbnRXaWR0aDogc3RhdGUuY2xpZW50U2xpY2UuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgaXNQQzogc3RhdGUuY2xpZW50U2xpY2UuaXNQQyxcclxuICAgICAgICBpc1RhYmxldDogc3RhdGUuY2xpZW50U2xpY2UuaXNUYWJsZXQsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2xpZW50cyk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxvZ29UYWciLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJpbWdTcmMiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsInJlZiIsImNyZWF0ZVJlZiIsImdldEltYWdlV2lkdGhGcm9tU3JjIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImNvbXBvbmVudERpZE1vdW50IiwicHVsbEltYWdlSW5mbyIsImhlaWdodCIsImNvbXBsZXRlIiwic2V0U3RhdGUiLCJvbmxvYWQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiam9pbiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYWx0Iiwib3BhY2l0eSIsInZpc2liaWxpdHkiLCJuYW1lIiwibG9nbyIsImNoZWNrSXNJblZpZXdwb3J0IiwibGF6eUFjdCIsImNvbm5lY3QiLCJjbGllbnRzRGF0YSIsImF3YXJkc0RhdGEiLCJDbGllbnRzIiwic3ViamVjdGxpc3QiLCJzdWJqZWN0IiwibWluYW1vdW50IiwiYWRkaXRpb24iLCJudW0iLCJpc1J1bmluZyIsImJyYW5kTGlzdCIsInNvcnQiLCJhIiwiYiIsIk1hdGgiLCJyYW5kb20iLCJhd2FyZExpc3QiLCJzaG93QnJhbmRMaXN0IiwidGVtcFNob3dCcmFuZExpc3QiLCJsZXNzU2hvd0JyYW5kTGlzdCIsInNlbGVjdGVkSW5kZXhSb3ciLCJjb2xsZWN0Qm94V2lkdGhzIiwidmlld1JlZiIsImNoZWNrSXNTZWxlY3RlZCIsImluZGV4IiwiaW5jbHVkZXMiLCJnZXRSYW5kb21JbmRleCIsIm1heE51bSIsInJvdW5kIiwicmVuZGVyU2hvd0JyYW5kTGlzdCIsImxlc3NCcmFuZExpc3QiLCJtYXAiLCJpdGVtIiwic2VsZWN0SW5kZXgiLCJsZW5ndGgiLCJzcGxpY2UiLCJmaWx0ZXIiLCJyZW5kZXJMZXNzQnJhbmRMaXN0IiwicmVuZGVyTWF0Y2hBcnJheSIsImFycmF5IiwicmVuZGVyQXJyYXkiLCJyZW5kZXJMZXNzQXJyYXkiLCJpbmQiLCJlbGVtZW50IiwicHVzaCIsInJlbmRlckNvbWJpbmVBcnJheSIsImFycmF5MSIsImFycmF5MiIsImNvbWJpbmVBcnJheSIsInNlbGVjdENoYW5nZUljb24iLCJpc1BDIiwiY2hhbmdlTmV4dE51bSIsInNsaWNlIiwic2VsZWN0ZWRJbmRleCIsIl9sZXNzQnJhbmRMaXN0IiwidGhlbiIsImRpZ2l0TXVtYmVyQW5pbWF0aW9uIiwic3RyIiwiaGFzQ2hhbmdlZCIsIm5ld0FycmF5IiwicHJldlN0YXRlIiwic2Nyb2xsWSIsImN1cnJlbnQiLCJzdGF0dXMiLCJjb2xsZWN0Qm94V2lkdGgiLCJyZW5kZXJJdGVtU3R5bGUiLCJmbGV4QmFzaXMiLCJpc1RhYmxldCIsIm5vc2hvd3RleHQiLCJGcmFnbWVudCIsImtleSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWF4V2lkdGgiLCJjb2x1bW5Db3VudCIsImNvbHVtbkdhcCIsInYiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzY3JvbGxTbGljZSIsImNsaWVudFdpZHRoIiwiY2xpZW50U2xpY2UiXSwic291cmNlUm9vdCI6IiJ9