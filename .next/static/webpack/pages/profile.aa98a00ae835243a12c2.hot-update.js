webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined,\n  _jsxFileName = \"/Users/js/Desktop/sansbook/components/FollowList.js\",\n  _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar FollowList = function FollowList(_ref) {\n  _s();\n  var header = _ref.header,\n    data = _ref.data,\n    onClickMore = _ref.onClickMore,\n    loading = _ref.loading;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var onCancel = function onCancel(id) {\n    return function () {\n      if (header === \"팔로잉\") {\n        dispatch({\n          type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"UNFOLLOW_REQUEST\"],\n          data: id\n        });\n      }\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"REMOVE_FOLLOWER_REQUEST\"],\n        data: id\n      });\n    };\n  };\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n    style: {\n      marginBottom: 20\n    },\n    grid: {\n      gutter: 4,\n      xs: 2,\n      md: 3\n    },\n    size: \"small\",\n    header: __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }\n    }, header),\n    loadMore: __jsx(\"div\", {\n      style: {\n        textAlign: \"center\",\n        margin: \"10px 0\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      onClick: onClickMore,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }\n    }, \"\\uB354 \\uBCF4\\uAE30\")),\n    bordered: true,\n    dataSource: data,\n    renderItem: function renderItem(item) {\n      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"List\"].Item, {\n        style: {\n          marginTop: 20\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"StopOutlined\"], {\n          key: \"stop\",\n          onClick: onCancel(item.id),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 23\n          }\n        })],\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Meta, {\n        description: item.nickname,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }\n      })));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  });\n};\n_s(FollowList, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"]];\n});\n_c = FollowList;\nFollowList.propTypes = {\n  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,\n  onClickMore: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\nvar _c;\n$RefreshReg$(_c, \"FollowList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzP2ZhMDIiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsIl9yZWYiLCJfcyIsImhlYWRlciIsImRhdGEiLCJvbkNsaWNrTW9yZSIsImxvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DYW5jZWwiLCJpZCIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJfX2pzeCIsIkxpc3QiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImdyaWQiLCJndXR0ZXIiLCJ4cyIsIm1kIiwic2l6ZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJsb2FkTW9yZSIsInRleHRBbGlnbiIsIm1hcmdpbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJib3JkZXJlZCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsIkl0ZW0iLCJtYXJnaW5Ub3AiLCJDYXJkIiwiYWN0aW9ucyIsIlN0b3BPdXRsaW5lZCIsImtleSIsIk1ldGEiLCJkZXNjcmlwdGlvbiIsIm5pY2tuYW1lIiwiX2MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIiwiYm9vbCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDUDtBQUNQO0FBQzBDO0FBQ25DO0FBRTFDLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBQyxJQUFBLEVBQStDO0VBQUFDLEVBQUE7RUFBQSxJQUF6Q0MsTUFBTSxHQUFBRixJQUFBLENBQU5FLE1BQU07SUFBRUMsSUFBSSxHQUFBSCxJQUFBLENBQUpHLElBQUk7SUFBRUMsV0FBVyxHQUFBSixJQUFBLENBQVhJLFdBQVc7SUFBRUMsT0FBTyxH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QUEsQ0F2Q0lGLFVBQVU7RUFBQSxRQUNHUSx1REFBVztBQUFBO0FBQUF3QyxFQUFBLEdBRHhCaEQsVUFBVTtBQXlDaEJBLFVBQVUsQ0FBQ2lELFNBQVMsR0FBRztFQUNyQjlDLE1BQU0sRUFBRStDLGlEQUFTLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVTtFQUNuQ2hELElBQUksRUFBRThDLGlEQUFTLENBQUNHLEtBQUssQ0FBQ0QsVUFBVTtFQUNoQy9DLFdBQVcsRUFBRTZDLGlEQUFTLENBQUNJLElBQUksQ0FBQ0YsVUFBVTtFQUN0QzlDLE9BQU8sRUFBRTRDLGlEQUFTLENBQUNLLElBQUksQ0FBQ0g7QUFDMUIsQ0FBQztBQUVjcEQseUVBQVUsRUFBQztBQUFBLElBQUFnRCxFQUFBO0FBQUFRLFlBQUEsQ0FBQVIsRUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9sbG93TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBMaXN0LCBDYXJkIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IFVORk9MTE9XX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IEZvbGxvd0xpc3QgPSAoeyBoZWFkZXIsIGRhdGEsIG9uQ2xpY2tNb3JlLCBsb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvbkNhbmNlbCA9IChpZCkgPT4gKCkgPT4ge1xuICAgIGlmIChoZWFkZXIgPT09IFwi7YyU66Gc7J6JXCIpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcbiAgICAgICAgZGF0YTogaWQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXG4gICAgICBkYXRhOiBpZCxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0XG4gICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XG4gICAgICBncmlkPXt7IGd1dHRlcjogNCwgeHM6IDIsIG1kOiAzIH19XG4gICAgICBzaXplPVwic21hbGxcIlxuICAgICAgaGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxuICAgICAgbG9hZE1vcmU9e1xuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjEwcHggMFwiIH19PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja01vcmV9PuuNlCDrs7TquLA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICBib3JkZXJlZFxuICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cbiAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXG4gICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiIG9uQ2xpY2s9e29uQ2FuY2VsKGl0ZW0uaWQpfSAvPl19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgKX1cbiAgICAvPlxuICApO1xufTtcblxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25DbGlja01vcmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ })

})