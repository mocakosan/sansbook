webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined,\n  _jsxFileName = \"/Users/js/Desktop/sansbook/components/PostForm.js\",\n  _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar PostForm = function PostForm() {\n  _s();\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n      return state.post;\n    }),\n    imagePaths = _useSelector.imagePaths;\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n    text = _useState[0],\n    setText = _useState[1];\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var imageInput = useRef();\n  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (e) {\n    setText(e.target.value);\n  }, []);\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    dispatch(addPost);\n  }, []);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    style: {\n      margin: \"10px 0 20px\"\n    },\n    encType: \"multipart/form-data\",\n    onFinish: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].textarea, {\n    value: text,\n    onChange: onChangeText,\n    maxLength: 140,\n    placeholder: \"\\uC5B4\\uB5A4 \\uC77C\\uC774 \\uC0DD\\uACBC\\uB098\\uC694\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    multiple: true,\n    hidden: true,\n    ref: imageInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onClickImageUpload,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"\\uC774\\uBBF8\\uC9C0 \\uC5C5\\uB85C\\uB4DC\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    style: {\n      \"float\": \"right\"\n    },\n    htmlType: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"\\uC9F9\\uCA31\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, imagePaths.map(function (v) {\n    return __jsx(\"div\", {\n      key: v,\n      style: {\n        display: \"inline-block\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      src: v,\n      style: {\n        width: \"200px\"\n      },\n      alt: v,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 15\n      }\n    }, \"\\uC81C\\uAC70\")));\n  })));\n};\n_s(PostForm, \"P51dO7WdHshgx2RDXTKgsQPsOd8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"]];\n});\n_c = PostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\nvar _c;\n$RefreshReg$(_c, \"PostForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcz83OWM1Il0sIm5hbWVzIjpbIlBvc3RGb3JtIiwiX3MiLCJfdXNlU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImltYWdlUGF0aHMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJvbkNoYW5nZVRleHQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwiYWRkUG9zdCIsIl9fanN4IiwiRm9ybSIsInN0eWxlIiwibWFyZ2luIiwiZW5jVHlwZSIsIm9uRmluaXNoIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIklucHV0IiwidGV4dGFyZWEiLCJvbkNoYW5nZSIsIm1heExlbmd0aCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm11bHRpcGxlIiwiaGlkZGVuIiwicmVmIiwiQnV0dG9uIiwib25DbGljayIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImh0bWxUeXBlIiwibWFwIiwidiIsImtleSIsImRpc3BsYXkiLCJzcmMiLCJ3aWR0aCIsImFsdCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ0c7QUFDUztBQUV2RCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFDckIsSUFBQUMsWUFBQSxHQUF1QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFBQztJQUFqREMsVUFBVSxHQUFBSixZQUFBLENBQVZJLFVBQVU7RUFDbEIsSUFBQUMsU0FBQSxHQUF3QkMsc0RBQVEsQ0FBQyxF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QUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxFQUFHLEVBQ2xEWixLQUFBO01BQUFNLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQ0VaLEtBQUEsQ0FBQ3NCLDJDQUFNO01BQUFoQixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxrQkFBWSxDQUNmLENBQ0Y7RUFBQSxDQUNQLENBQUMsQ0FDRSxDQUNEO0FBRVgsQ0FBQztBQUFDakMsRUFBQSxDQTFDSUQsUUFBUTtFQUFBLFFBQ1dHLHVEQUFXLEVBRWpCUyx1REFBVztBQUFBO0FBQUEyQyxFQUFBLEdBSHhCdkQsUUFBUTtBQTRDQ0EsdUVBQVEsRUFBQztBQUFBLElBQUF1RCxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCB7IGltYWdlUGF0aHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfSwgW10pO1xuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChhZGRQb3N0KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDIwcHhcIiB9fVxuICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgb25GaW5pc2g9e29uU3VibWl0fVxuICAgID5cbiAgICAgIDxJbnB1dC50ZXh0YXJlYVxuICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cbiAgICAgICAgbWF4TGVuZ3RoPXsxNDB9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7Ja065akIOydvOydtCDsg53qsrzrgpjsmpRcIlxuICAgICAgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19IGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAg7Ke57KixXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt2fSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiIH19IGFsdD17dn0gLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxCdXR0b24+7KCc6rGwPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostForm.js\n");

/***/ })

})