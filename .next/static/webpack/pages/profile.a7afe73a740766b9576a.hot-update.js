webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/NicknameEditForm.js":
/*!****************************************!*\
  !*** ./components/NicknameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useInput */ \"./components/hooks/useInput.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\nvar _this = undefined,\n  _jsxFileName = \"/Users/js/Desktop/sansbook/components/NicknameEditForm.js\",\n  _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar NicknameEditForm = function NicknameEditForm() {\n  _s();\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n      return state.user;\n    }),\n    me = _useSelector.me;\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((me === null || me === void 0 ? void 0 : me.nickname) || \"\"),\n    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n    nickname = _useInput2[0],\n    onChangeNickname = _useInput2[1];\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__[\"CHANGE_NICKNAME_REQUEST\"],\n      data: nickname\n    });\n  }, [nickname]);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    style: {\n      marginBottom: \"20px\",\n      border: \"1px solid #d9d9d9\",\n      padding: \"20px\"\n    },\n    onFinish: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"].Search, {\n    value: nickname,\n    onChange: onChangeNickname,\n    addonBefore: \"\\uB2C9\\uB124\\uC784\",\n    enterButton: \"\\uC218\\uC815\",\n    onSearch: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }));\n};\n_s(NicknameEditForm, \"N7qq+s3xxzry3hENaoydffT6TQU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n});\n_c = NicknameEditForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NicknameEditForm);\nvar _c;\n$RefreshReg$(_c, \"NicknameEditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzPzE3YTkiXSwibmFtZXMiOlsiTmlja25hbWVFZGl0Rm9ybSIsIl9zIiwiX3VzZVNlbGVjdG9yIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsIl91c2VJbnB1dCIsInVzZUlucHV0Iiwibmlja25hbWUiLCJfdXNlSW5wdXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJvbkNoYW5nZU5pY2tuYW1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJkYXRhIiwiX19qc3giLCJGb3JtIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXIiLCJwYWRkaW5nIiwib25GaW5pc2giLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSW5wdXQiLCJTZWFyY2giLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiYWRkb25CZWZvcmUiLCJlbnRlckJ1dHRvbiIsIm9uU2VhcmNoIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ1U7QUFDVTtBQUNmO0FBQ21CO0FBRTNELElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEsRUFBUztFQUFBQyxFQUFBO0VBQzdCLElBQUFDLFlBQUEsR0FBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFBQztJQUF6Q0MsRUFBRSxHQUFBSixZQUFBLENBQUZJLEVBQUU7RUFDVixJQUFBQyxTQUFBLEdBQXFDQywrREFBUSxDQUFDLENBQUFGLEVBQUUsYUFBRkEsRUFBRSx1QkFBRkEsRUFBRSxDQUFFRyxRQUFRLEtBQUksRUFBRSxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsd0ZBQUEsQ0FBQUosU0FBQTtJQUExREUsUUFBUSxHQUFBQyxVQUFBO0lBQUVFLGdCQUFnQixHQUFBRixVQUFBO0VBQ2pDLElBQU1HLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUU5QixJQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUNqQ0gsUUFBUSxDQUFDO01BQ1BJLElBQUksRUFBRUMsc0VBQXVCO01BQzdCQyxJQUFJLEVBQUVWO0lBQ1IsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLENBQUNBLFFBQVEsQ0FBQyxDQUFDO0VBQ2QsT0FDRVcsS0FBQSxDQUFDQyx5Q0FBSTtJQUNIQyxLQUFLLEVBQUU7TUFDTEMsWUFBWSxFQUFFLE1BQU07TUFDcEJDLE1BQU0sRUFBRSxtQkFBbUI7TUFDM0JDLE9BQU8sRUFBRTtJQUNYLENBQUU7SUFDRkMsUUFBUSxFQUFFWCxRQUFTO0lBQUFZLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRW5CYixLQUFBLENBQUNjLDBDQUFLLENBQUNDLE1BQU07SUFDWEMsS0FBSyxFQUFFM0IsUUFBUztJQUNoQjRCLFFBQVEsRUFBRXpCLGdCQUFpQjtJQUMzQjBCLFdBQVcsRUFBQyxvQkFBSztJQUNqQkMsV0FBVyxFQUFDLGNBQUk7SUFDaEJDLFFBQVEsRUFBRXpCLFFBQVM7SUFBQVksTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFDbkIsQ0FDRztBQUVYLENBQUM7QUFBQ2hDLEVBQUEsQ0E3QklELGdCQUFnQjtFQUFBLFFBQ0xHLHVEQUFXLEVBQ1dLLHVEQUFRLEVBQzVCTSx1REFBVztBQUFBO0FBQUEyQixFQUFBLEdBSHhCekMsZ0JBQWdCO0FBK0JQQSwrRUFBZ0IsRUFBQztBQUFBLElBQUF5QyxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi9ob29rcy91c2VJbnB1dFwiO1xuaW1wb3J0IHsgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5jb25zdCBOaWNrbmFtZUVkaXRGb3JtID0gKCkgPT4ge1xuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQobWU/Lm5pY2tuYW1lIHx8IFwiXCIpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXG4gICAgICBkYXRhOiBuaWNrbmFtZSxcbiAgICB9KTtcbiAgfSwgW25pY2tuYW1lXSk7XG4gIHJldHVybiAoXG4gICAgPEZvcm1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2Q5ZDlkOVwiLFxuICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgIH19XG4gICAgICBvbkZpbmlzaD17b25TdWJtaXR9XG4gICAgPlxuICAgICAgPElucHV0LlNlYXJjaFxuICAgICAgICB2YWx1ZT17bmlja25hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfVxuICAgICAgICBhZGRvbkJlZm9yZT1cIuuLieuEpOyehFwiXG4gICAgICAgIGVudGVyQnV0dG9uPVwi7IiY7KCVXCJcbiAgICAgICAgb25TZWFyY2g9e29uU3VibWl0fVxuICAgICAgLz5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOaWNrbmFtZUVkaXRGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NicknameEditForm.js\n");

/***/ })

})