webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useInput */ \"./components/hooks/useInput.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _this = undefined,\n  _jsxFileName = \"/Users/js/Desktop/sansbook/components/CommentForm.js\",\n  _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar CommentForm = function CommentForm(_ref) {\n  _s();\n  var post = _ref.post;\n  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    var _state$user$me;\n    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;\n  });\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"\"),\n    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n    commentText = _useInput2[0],\n    onChaneCommentText = _useInput2[1];\n  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {}, [commentText]);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    onFinish: onSubmitComment,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n    style: {\n      position: \"relative\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"].TextArea, {\n    value: commentText,\n    onChange: onChaneCommentText,\n    rows: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"primary\",\n    htmlfor: \"submit\",\n    style: {\n      position: \"absolute\",\n      right: 0,\n      bottom: -40\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"\\uC090\\uC57D\")));\n};\n_s(CommentForm, \"vtTJ/pJJ2OKUkdUZL3iRt5dDEDw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n_c = CommentForm;\nCommentForm.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\nvar _c;\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcz80ZDAyIl0sIm5hbWVzIjpbIkNvbW1lbnRGb3JtIiwiX3JlZiIsIl9zIiwicG9zdCIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIl9zdGF0ZSR1c2VyJG1lIiwidXNlciIsIm1lIiwiX3VzZUlucHV0IiwidXNlSW5wdXQiLCJfdXNlSW5wdXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJjb21tZW50VGV4dCIsIm9uQ2hhbmVDb21tZW50VGV4dCIsIm9uU3VibWl0Q29tbWVudCIsInVzZUNhbGxiYWNrIiwiX19qc3giLCJGb3JtIiwib25GaW5pc2giLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSXRlbSIsInN0eWxlIiwicG9zaXRpb24iLCJJbnB1dCIsIlRleHRBcmVhIiwidmFsdWUiLCJvbkNoYW5nZSIsInJvd3MiLCJCdXR0b24iLCJ0eXBlIiwiaHRtbGZvciIsInJpZ2h0IiwiYm90dG9tIiwiX2MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDUDtBQUNJO0FBQ0w7QUFDTztBQUUxQyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQUMsSUFBQSxFQUFpQjtFQUFBQyxFQUFBO0VBQUEsSUFBWEMsSUFBSSxHQUFBRixJQUFBLENBQUpFLElBQUk7RUFDekIsSUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7SUFBQSxJQUFBQyxjQUFBO0lBQUEsUUFBQUEsY0FBQSxHQUFLRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsRUFBRSxjQUFBRixjQUFBLHVCQUFiQSxjQUFBLENBQWVILEVBQUU7RUFBQSxFQUFDO0VBQ3BELElBQUFNLFNBQUEsR0FBMENDLCtEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsd0ZBQUEsQ0FBQUgsU0FBQTtJQUEvQ0ksV0FBVyxHQUFBRixVQUFBO0lBQUVHLGtCQUFrQixHQUFBSCxVQUFBO0VBQ3RDLElBQU1JLGVBQWUsR0FBR0MseURBQVcsQ0FBQyxZQUFNLENBQUMsQ0FBQyxFQUFFLENBQUNILFdBQVcsQ0FBQyxDQUFDO0VBQzVELE9BQ0VJLEtBQUEsQ0FBQ0MseUNBQUk7SUFBQ0MsUUFBUSxFQUFFSixlQUFnQjtJQUFBSyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM5QlQsS0FBQSxDQUFDQyx5Q0FBSSxDQUFDUyxJQUFJO0lBQUNDLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUU7SUFBVyxDQUFFO0lBQUFULE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3pDVCxLQUFBLENBQUNhLDBDQUFLLENBQUNDLFFBQVE7SUFDYkMsS0FBSyxFQUFFbkIsV0FBWTtJQUNuQm9CLFFBQVEsRUFBRW5CLGtCQUFtQjtJQUM3Qm9CLElBQUksRUFBRSxDQUFFO0lBQUFkLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQ1IsRUFDRlQsS0FBQSxDQUFDa0IsMkNBQU07SUFDTEMsSUFBSSxFQUFDLFNBQVM7SUFDZEMsT0FBTyxFQUFDLFFBQVE7SUFDaEJULEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFUyxLQUFLLEVBQUUsQ0FBQztNQUFFQyxNQUFNLEVBQUUsQ0FBQztJQUFHLENBQUU7SUFBQW5CLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGtCQUdoRCxDQUNDLENBQ1A7QUFFWCxDQUFDO0FBQUN6QixFQUFBLENBdEJJRixXQUFXO0VBQUEsUUFDSkssdURBQVcsRUFDb0JNLHVEQUFRO0FBQUE7QUFBQThCLEVBQUEsR0FGOUN6QyxXQUFXO0FBd0JqQkEsV0FBVyxDQUFDMEMsU0FBUyxHQUFHO0VBQ3RCdkMsSUFBSSxFQUFFd0MsaURBQVMsQ0FBQ0MsTUFBTSxDQUFDQztBQUN6QixDQUFDO0FBRWM3QywwRUFBVyxFQUFDO0FBQUEsSUFBQXlDLEVBQUE7QUFBQUssWUFBQSxDQUFBTCxFQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi9ob29rcy91c2VJbnB1dFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBvbkNoYW5lQ29tbWVudFRleHRdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHt9LCBbY29tbWVudFRleHRdKTtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cbiAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgPElucHV0LlRleHRBcmVhXG4gICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5lQ29tbWVudFRleHR9XG4gICAgICAgICAgcm93cz17NH1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICBodG1sZm9yPVwic3VibWl0XCJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogMCwgYm90dG9tOiAtNDAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIOyCkOyVvVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbkNvbW1lbnRGb3JtLnByb3BUeXBlcyA9IHtcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentForm.js\n");

/***/ })

})