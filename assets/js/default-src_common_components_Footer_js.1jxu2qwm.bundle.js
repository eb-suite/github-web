"use strict";
(self["webpackChunkweb_webpack"] = self["webpackChunkweb_webpack"] || []).push([["default-src_common_components_Footer_js"],{

/***/ "./src/common/components/Footer.js":
/*!*****************************************!*\
  !*** ./src/common/components/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_baseSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/baseSlice */ "./src/store/baseSlice.js");



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  renderNowYear() {
    const now = new Date();
    return now.getFullYear();
  }
  redirectToUrl(url) {
    this.props.setDirectUrl(url);
    this.props.enableRedirectLoading(true);
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
      className: "footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "footer-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "footer-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "footer-wrapper-top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "footer-wrapper-top-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Let's Talk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "mailto:enquiry@eb-suite.com",
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "effect-underline-move-hover"
    }, "enquiry@eb-suite.com"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtl-phone"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "tel:852-3611-0949",
      target: "_blank",
      className: "effect-underline-move-hover"
    }, "3611-0949")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtl-address"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "effect-underline-move-hover",
      href: "https://www.google.com.hk/maps/place/%E6%96%B0%E8%92%B2%E5%B4%97%E9%9B%99%E5%96%9C%E8%A1%979%E8%99%9F%E5%8C%AF%E9%81%94%E5%95%86%E6%A5%AD%E4%B8%AD%E5%BF%83/@22.3378804,114.1952828,17z/data=!3m1!4b1!4m6!3m5!1s0x340406d0a990ed91:0x943c05253c5637f8!8m2!3d22.3378755!4d114.1978577!16s%2Fg%2F12hq4w_d8?hl=zh-TW&entry=ttu",
      target: "_blank"
    }, "2101, Win Plaza, 9 Sheung Hei Street. H.K."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "footer-wrapper-top-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fwtr-links"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "fwtr-links-list list-unstyled"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "fwtr-links-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "effect-underline-move-hover",
      onClick: () => this.redirectToUrl("/projects")
    }, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "fwtr-links-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "effect-underline-move-hover",
      onClick: () => this.redirectToUrl("/about")
    }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "fwtr-links-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "effect-underline-move-hover",
      onClick: () => this.redirectToUrl("/services")
    }, "Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "fwtr-links-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "effect-underline-move-hover",
      onClick: () => this.redirectToUrl("/contact")
    }, "Contact")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "footerwrapper-bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "footerwrapper-bottom-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "footerwrapper-bottom-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fbr-address-additional"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "list-unstyled"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "effect-underline-move-hover",
      onClick: () => this.redirectToUrl("/privacy-policy")
    }, "Privacy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "effect-underline-move-hover",
      onClick: () => this.redirectToUrl("/terms-of-use")
    }, "Terms")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "footerwrapper-bottom-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fbr-copy"
    }, "Copyright \xA9", this.renderNowYear(), " eb-suite limited. All rights reserved")))))));
  }
}
const mapStateToProps = state => {
  return {
    // state
  };
};
const mapDispatchToProps = {
  setDirectUrl: _store_baseSlice__WEBPACK_IMPORTED_MODULE_1__.setDirectUrl,
  enableRedirectLoading: _store_baseSlice__WEBPACK_IMPORTED_MODULE_1__.enableRedirectLoading
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(Footer));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2RlZmF1bHQtc3JjX2NvbW1vbl9jb21wb25lbnRzX0Zvb3Rlcl9qcy4xanh1MnF3bS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSDtBQUNrQztBQUV4RSxNQUFNSyxNQUFNLFNBQVNKLDRDQUFTLENBQUM7RUFDN0JLLFdBQVdBLENBQUNDLEtBQUssRUFBRTtJQUNqQixLQUFLLENBQUNBLEtBQUssQ0FBQztFQUNkO0VBQ0FDLGFBQWFBLENBQUEsRUFBRztJQUNkLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQztJQUN0QixPQUFPRCxHQUFHLENBQUNFLFdBQVcsQ0FBQyxDQUFDO0VBQzFCO0VBQ0FDLGFBQWFBLENBQUNDLEdBQUcsRUFBRTtJQUNqQixJQUFJLENBQUNOLEtBQUssQ0FBQ0osWUFBWSxDQUFDVSxHQUFHLENBQUM7SUFDNUIsSUFBSSxDQUFDTixLQUFLLENBQUNILHFCQUFxQixDQUFDLElBQUksQ0FBQztFQUN4QztFQUNBVSxNQUFNQSxDQUFBLEVBQUc7SUFDUCxvQkFDRWQsMERBQUE7TUFBUWdCLFNBQVMsRUFBQztJQUFRLGdCQUN4QmhCLDBEQUFBO01BQUtnQixTQUFTLEVBQUM7SUFBYyxnQkFDM0JoQiwwREFBQTtNQUFLZ0IsU0FBUyxFQUFDO0lBQWdCLGdCQUM3QmhCLDBEQUFBO01BQUtnQixTQUFTLEVBQUM7SUFBb0IsZ0JBQ2pDaEIsMERBQUE7TUFBS2dCLFNBQVMsRUFBQztJQUF5QixnQkFDdENoQiwwREFBQSxhQUFJLFlBQWMsQ0FBQyxlQUNuQkEsMERBQUEseUJBQ0VBLDBEQUFBO01BQUdpQixJQUFJLEVBQUMsNkJBQTZCO01BQUNDLE1BQU0sRUFBQztJQUFRLGdCQUNuRGxCLDBEQUFBO01BQU1nQixTQUFTLEVBQUM7SUFBNkIsR0FBQyxzQkFFeEMsQ0FDTCxDQUNGLENBQUMsZUFDSmhCLDBEQUFBO01BQUtnQixTQUFTLEVBQUM7SUFBWSxnQkFDekJoQiwwREFB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Oi8vd2ViLXdlYnBhY2svLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZXREaXJlY3RVcmwsIGVuYWJsZVJlZGlyZWN0TG9hZGluZyB9IGZyb20gJ0Avc3RvcmUvYmFzZVNsaWNlJztcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcbiAgcmVuZGVyTm93WWVhcigpIHtcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gbm93LmdldEZ1bGxZZWFyKCk7XHJcbiAgfVxyXG4gIHJlZGlyZWN0VG9VcmwodXJsKSB7XHJcbiAgICB0aGlzLnByb3BzLnNldERpcmVjdFVybCh1cmwpO1xyXG4gICAgdGhpcy5wcm9wcy5lbmFibGVSZWRpcmVjdExvYWRpbmcodHJ1ZSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItaW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd3JhcHBlci10b3BcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13cmFwcGVyLXRvcC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+TGV0J3MgVGFsazwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzplbnF1aXJ5QGViLXN1aXRlLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVmZmVjdC11bmRlcmxpbmUtbW92ZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgZW5xdWlyeUBlYi1zdWl0ZS5jb21cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnd0bC1waG9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjg1Mi0zNjExLTA5NDlcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJlZmZlY3QtdW5kZXJsaW5lLW1vdmUtaG92ZXJcIj4zNjExLTA5NDk8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnd0bC1hZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImVmZmVjdC11bmRlcmxpbmUtbW92ZS1ob3ZlclwiIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tLmhrL21hcHMvcGxhY2UvJUU2JTk2JUIwJUU4JTkyJUIyJUU1JUI0JTk3JUU5JTlCJTk5JUU1JTk2JTlDJUU4JUExJTk3OSVFOCU5OSU5RiVFNSU4QyVBRiVFOSU4MSU5NCVFNSU5NSU4NiVFNiVBNSVBRCVFNCVCOCVBRCVFNSVCRiU4My9AMjIuMzM3ODgwNCwxMTQuMTk1MjgyOCwxN3ovZGF0YT0hM20xITRiMSE0bTYhM201ITFzMHgzNDA0MDZkMGE5OTBlZDkxOjB4OTQzYzA1MjUzYzU2MzdmOCE4bTIhM2QyMi4zMzc4NzU1ITRkMTE0LjE5Nzg1NzchMTZzJTJGZyUyRjEyaHE0d19kOD9obD16aC1UVyZlbnRyeT10dHVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAyMTAxLCBXaW4gUGxhemEsIDkgU2hldW5nIEhlaSBTdHJlZXQuIEguSy5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd3JhcHBlci10b3AtcmlnaHRcIj4gIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmd3RyLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmd3RyLWxpbmtzLWxpc3QgbGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmd3RyLWxpbmtzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWZmZWN0LXVuZGVybGluZS1tb3ZlLWhvdmVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5yZWRpcmVjdFRvVXJsKFwiL3Byb2plY3RzXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmd3RyLWxpbmtzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWZmZWN0LXVuZGVybGluZS1tb3ZlLWhvdmVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5yZWRpcmVjdFRvVXJsKFwiL2Fib3V0XCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmd3RyLWxpbmtzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWZmZWN0LXVuZGVybGluZS1tb3ZlLWhvdmVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5yZWRpcmVjdFRvVXJsKFwiL3NlcnZpY2VzXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmd3RyLWxpbmtzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWZmZWN0LXVuZGVybGluZS1tb3ZlLWhvdmVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5yZWRpcmVjdFRvVXJsKFwiL2NvbnRhY3RcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJ3cmFwcGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyd3JhcHBlci1ib3R0b20taW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyd3JhcHBlci1ib3R0b20tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZici1hZGRyZXNzLWFkZGl0aW9uYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImVmZmVjdC11bmRlcmxpbmUtbW92ZS1ob3ZlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVkaXJlY3RUb1VybChcIi9wcml2YWN5LXBvbGljeVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByaXZhY3lcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZWZmZWN0LXVuZGVybGluZS1tb3ZlLWhvdmVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5yZWRpcmVjdFRvVXJsKFwiL3Rlcm1zLW9mLXVzZVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1zXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlcndyYXBwZXItYm90dG9tLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmJyLWNvcHlcIj5Db3B5cmlnaHQgJmNvcHk7e3RoaXMucmVuZGVyTm93WWVhcigpfSBlYi1zdWl0ZSBsaW1pdGVkLiBBbGwgcmlnaHRzIHJlc2VydmVkXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgLy8gc3RhdGVcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gIHNldERpcmVjdFVybCxcclxuICBlbmFibGVSZWRpcmVjdExvYWRpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKEZvb3Rlcik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsInNldERpcmVjdFVybCIsImVuYWJsZVJlZGlyZWN0TG9hZGluZyIsIkZvb3RlciIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXJOb3dZZWFyIiwibm93IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwicmVkaXJlY3RUb1VybCIsInVybCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJocmVmIiwidGFyZ2V0Iiwib25DbGljayIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==