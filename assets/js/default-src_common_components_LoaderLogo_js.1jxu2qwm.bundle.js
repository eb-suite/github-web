"use strict";
(self["webpackChunkweb_webpack"] = self["webpackChunkweb_webpack"] || []).push([["default-src_common_components_LoaderLogo_js"],{

/***/ "./src/common/components/LoaderLogo.js":
/*!*********************************************!*\
  !*** ./src/common/components/LoaderLogo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoaderLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class LoaderLogo extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }
  splittingText(text) {
    let words = text.split(" ");
    let result = "";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
      className: "loader-box-title"
    }, words.map((word, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: index,
        className: "word",
        "data-word": word,
        style: {
          '--word-index': index
        }
      }, word.split('').map((char, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: index,
        className: "char",
        "data-char": char,
        style: {
          '--char-index': index
        }
      }, char)));
    }));
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loader-box-container"
    }, this.splittingText('EB'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loader-box-dot"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "loader-box-dot-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      className: "loader-box-dot-wave background",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 800 800"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M799.09 90s11.04 0 0 0c-80.714 0-79.621-90-200-90-120.377 0-118.607 90-200 90-81.391 0-81.215-90-200-90C80.308 0 78.68 89.29-.91 90c-6.946.062 0 0 0 0v510h800V90z"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      className: "loader-box-dot-wave foreground",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 800 800"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M799.09 90s11.04 0 0 0c-80.714 0-79.621-90-200-90-120.377 0-118.607 90-200 90-81.391 0-81.215-90-200-90C80.308 0 78.68 89.29-.91 90c-6.946.062 0 0 0 0v510h800V90z"
    }))))));
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2RlZmF1bHQtc3JjX2NvbW1vbl9jb21wb25lbnRzX0xvYWRlckxvZ29fanMuMWp4dTJxd20uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUUxQixNQUFNRSxVQUFVLFNBQVNELDRDQUFTLENBQUM7RUFFOUNFLFdBQVdBLENBQUNDLEtBQUssRUFBRTtJQUNmLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0VBQ2hCO0VBQ0FDLGFBQWFBLENBQUNDLElBQUksRUFBRTtJQUNoQixJQUFJQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMzQixJQUFJQyxNQUFNLEdBQUcsRUFBRTtJQUNmLG9CQUFRVCwwREFBQTtNQUFJVyxTQUFTLEVBQUM7SUFBa0IsR0FBRUosS0FBSyxDQUFDSyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxLQUFLLEtBQUs7TUFDakUsb0JBQU9kLDBEQUFBO1FBQU1lLEdBQUcsRUFBRUQsS0FBTTtRQUFDSCxTQUFTLEVBQUMsTUFBTTtRQUFDLGFBQVdFLElBQUs7UUFBQ0csS0FBSyxFQUFFO1VBQUUsY0FBYyxFQUFFRjtRQUFNO01BQUUsR0FBRUQsSUFBSSxDQUFDTCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNJLEdBQUcsQ0FBQyxDQUFDSyxJQUFJLEVBQUVILEtBQUssa0JBQUtkLDBEQUFBO1FBQU1lLEdBQUcsRUFBRUQsS0FBTTtRQUFDSCxTQUFTLEVBQUMsTUFBTTtRQUFDLGFBQVdNLElBQUs7UUFBQ0QsS0FBSyxFQUFFO1VBQUUsY0FBYyxFQUFFRjtRQUFNO01BQUUsR0FBRUcsSUFBVyxDQUFDLENBQVEsQ0FBQztJQUNsUCxDQUFDLENBQU0sQ0FBQztFQUNaO0VBQ0FDLE1BQU1BLENBQUEsRUFBRztJQUVMLG9CQUNJbEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO01BQUtXLFNBQVMsRUFBQztJQUFzQixHQUNoQyxJQUFJLENBQUNOLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFDekJMLDBEQUFBO01BQUtXLFNBQVMsRUFBQztJQUFnQixnQkFDM0JYLDBEQUFBO01BQUtXLFNBQVMsRUFBQztJQUFzQixnQkFDakNYLDBEQUFBO01BQUtXLFNBQVMsRUFBQyxnQ0FBZ0M7TUFBQ1MsS0FBSyxFQUFDLDRCQUE0QjtNQUFDQyxPQUFPLEVBQUM7SUFBYSxnQkFDcEdyQiwwREFBQTtNQUFNc0IsQ0FBQyxFQUFDO0lBQW9LLENBQUUsQ0FDN0ssQ0FBQyxlQUNOdEIsMERBQUE7TUFBS1csU0FBUyxFQUFDLGdDQUFnQztNQUFDUyxLQUFLLEVBQUMsNEJBQTRCO01BQUNDLE9BQU8sRUFBQztJQUFhLGdCQUNwR3JCLDBEQUFBO01BQU1zQixDQUFDLEVBQUM7SUFBb0ssQ0FBRSxDQUM3SyxDQUNKLENBQ0osQ0FDSixDQUNQLENBQUM7RUFFWDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLXdlYnBhY2svLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvTG9hZGVyTG9nby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXJMb2dvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIHNwbGl0dGluZ1RleHQodGV4dCkge1xyXG4gICAgICAgIGxldCB3b3JkcyA9IHRleHQuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIHJldHVybiAoPGgxIGNsYXNzTmFtZT1cImxvYWRlci1ib3gtdGl0bGVcIj57d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwid29yZFwiIGRhdGEtd29yZD17d29yZH0gc3R5bGU9e3sgJy0td29yZC1pbmRleCc6IGluZGV4IH19Pnt3b3JkLnNwbGl0KCcnKS5tYXAoKGNoYXIsIGluZGV4KSA9PiA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjaGFyXCIgZGF0YS1jaGFyPXtjaGFyfSBzdHlsZT17eyAnLS1jaGFyLWluZGV4JzogaW5kZXggfX0+e2NoYXJ9PC9zcGFuPil9PC9zcGFuPjtcclxuICAgICAgICB9KX08L2gxPilcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWJveC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zcGxpdHRpbmdUZXh0KCdFQicpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWJveC1kb3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItYm94LWRvdC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJsb2FkZXItYm94LWRvdC13YXZlIGJhY2tncm91bmRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA4MDAgODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03OTkuMDkgOTBzMTEuMDQgMCAwIDBjLTgwLjcxNCAwLTc5LjYyMS05MC0yMDAtOTAtMTIwLjM3NyAwLTExOC42MDcgOTAtMjAwIDkwLTgxLjM5MSAwLTgxLjIxNS05MC0yMDAtOTBDODAuMzA4IDAgNzguNjggODkuMjktLjkxIDkwYy02Ljk0Ni4wNjIgMCAwIDAgMHY1MTBoODAwVjkwelwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwibG9hZGVyLWJveC1kb3Qtd2F2ZSBmb3JlZ3JvdW5kXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgODAwIDgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNzk5LjA5IDkwczExLjA0IDAgMCAwYy04MC43MTQgMC03OS42MjEtOTAtMjAwLTkwLTEyMC4zNzcgMC0xMTguNjA3IDkwLTIwMCA5MC04MS4zOTEgMC04MS4yMTUtOTAtMjAwLTkwQzgwLjMwOCAwIDc4LjY4IDg5LjI5LS45MSA5MGMtNi45NDYuMDYyIDAgMCAwIDB2NTEwaDgwMFY5MHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMb2FkZXJMb2dvIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInNwbGl0dGluZ1RleHQiLCJ0ZXh0Iiwid29yZHMiLCJzcGxpdCIsInJlc3VsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJtYXAiLCJ3b3JkIiwiaW5kZXgiLCJrZXkiLCJzdHlsZSIsImNoYXIiLCJyZW5kZXIiLCJGcmFnbWVudCIsInhtbG5zIiwidmlld0JveCIsImQiXSwic291cmNlUm9vdCI6IiJ9