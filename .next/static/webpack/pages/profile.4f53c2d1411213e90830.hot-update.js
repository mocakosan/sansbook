webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NicknameEditForm */ \"./components/NicknameEditForm.js\");\n/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FollowList */ \"./components/FollowList.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _this = undefined,\n  _jsxFileName = \"/Users/js/Desktop/sansbook/pages/profile.js\",\n  _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar fetcher = function fetcher(url) {\n  return axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(url, {\n    withCredentials: true\n  }).then(function (result) {\n    return result.data;\n  });\n};\nvar Profile = function Profile() {\n  _s();\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(3),\n    followingsLimit = _useState[0],\n    setFollowingsLimit = _useState[1];\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(3),\n    followersLimit = _useState2[0],\n    setFollowersLimit = _useState2[1];\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"http://localhost:3065/user/followers?limit=\".concat(followersLimit), fetcher),\n    followersData = _useSWR.data,\n    followerError = _useSWR.error;\n  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"http://localhost:3065/user/followings?limit=\".concat(followingsLimit), fetcher),\n    followingsData = _useSWR2.data,\n    followingError = _useSWR2.error;\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n      return state.user;\n    }),\n    me = _useSelector.me;\n  // useEffect(() => {\n  //   dispatch({\n  //     type: LOAD_FOLLOWINGS_REQUEST,\n  //   });\n  //   dispatch({\n  //     type: LOAD_FOLLOWERS_REQUEST,\n  //   });\n  // }, []);\n  console.log(\"@@@@@@\", me);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!(me && me.id)) {\n      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(\"/\");\n    }\n  }, [me && me.id]);\n  var loadMoreFollowers = useCallback(function () {\n    setFollowersLimit(function (prev) {\n      return prev + 3;\n    });\n  }, []);\n  var loadMoreFollowings = useCallback(function () {\n    setFollowingsLimit(function (prev) {\n      return prev + 3;\n    });\n  }, []);\n  if (!me) {\n    return \"내정보 로딩중\";\n  }\n  if (followerError || followingError) {\n    console.error(followerError || followingError);\n    return \"팔로잉/팔로워 로딩 중 에러가 발생했습니다.\";\n  }\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, \"\\uB0B4\\uD504\\uB85C\\uD544 | Sansbook \")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    header: \"\\uD314\\uB85C\\uC789 \\uBAA9\\uB85D\",\n    data: followingsData,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    header: \"\\uD314\\uB85C\\uC6CC \\uBAA9\\uB85D\",\n    data: followersData,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  })));\n};\n\n//SSR : next전용 서버사이드 렌더링 = 사용\n_s(Profile, \"TNaPMnHP8j+1PA/jQoeWbQVFMb4=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"], swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"]];\n});\n_c = Profile;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcz81YmUyIl0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXN1bHQiLCJkYXRhIiwiUHJvZmlsZSIsIl9zIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJmb2xsb3dpbmdzTGltaXQiLCJzZXRGb2xsb3dpbmdzTGltaXQiLCJfdXNlU3RhdGUyIiwiZm9sbG93ZXJzTGltaXQiLCJzZXRGb2xsb3dlcnNMaW1pdCIsIl91c2VTV1IiLCJ1c2VTV1IiLCJjb25jYXQiLCJmb2xsb3dlcnNEYXRhIiwiZm9sbG93ZXJFcnJvciIsImVycm9yIiwiX3VzZVNXUjIiLCJmb2xsb3dpbmdzRGF0YSIsImZvbGxvd2luZ0Vycm9yIiwiX3VzZVNlbGVjdG9yIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJpZCIsIlJvdXRlciIsInB1c2giLCJsb2FkTW9yZUZvbGxvd2VycyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93aW5ncyIsIl9fanN4IiwiUmVhY3QiLCJGcmFnbWVudCIsIkhlYWQiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQXBwTGF5b3V0IiwiTmlja25hbWVFZGl0Rm9ybSIsIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJfYyIsIl9fTl9TU1AiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDbkI7QUFDaUM7QUFDWjtBQUNSO0FBQ0U7QUFDWDtBQUVSO0FBQ0M7QUFJMUIsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlDLEdBQUc7RUFBQSxPQUNsQkMsNkNBQUssQ0FBQ0MsR0FBRyxD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SUFBQTtFQUFBLEdBQ1JWLEtBQUEsQ0FBQ1ksb0VBQWdCO0lBQUFSLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQUcsRUFDcEJWLEtBQUEsQ0FBQ2EsOERBQVU7SUFBQ0MsTUFBTSxFQUFDLGlDQUFRO0lBQUNoRCxJQUFJLEVBQUVpQixjQUFlO0lBQUFxQixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ3BEVixLQUFBLENBQUNhLDhEQUFVO0lBQUNDLE1BQU0sRUFBQyxpQ0FBUTtJQUFDaEQsSUFBSSxFQUFFYSxhQUFjO0lBQUF5QixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxFQUFHLENBQ3pDLENBQ1g7QUFFUCxDQUFDOztBQUVEO0FBQUExQyxFQUFBLENBM0RNRCxPQUFPO0VBQUEsUUFHMkNVLDJDQUFNLEVBSUpBLDJDQUFNLEVBSy9DUyx1REFBVztBQUFBO0FBQUE2QixFQUFBLEdBWnRCaEQsT0FBTztBQUFBLElBQUFpRCxPQUFBO0FBOEVFakQsc0VBQU8sRUFBQztBQUFBLElBQUFnRCxFQUFBO0FBQUFFLFlBQUEsQ0FBQUYsRUFBQSIsImZpbGUiOiIuL3BhZ2VzL3Byb2ZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybVwiO1xuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9sbG93TGlzdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xuaW1wb3J0IHsgRU5EIH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+XG4gIGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LmRhdGEpO1xuXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xuICBjb25zdCBbZm9sbG93aW5nc0xpbWl0LCBzZXRGb2xsb3dpbmdzTGltaXRdID0gdXNlU3RhdGUoMyk7XG4gIGNvbnN0IFtmb2xsb3dlcnNMaW1pdCwgc2V0Rm9sbG93ZXJzTGltaXRdID0gdXNlU3RhdGUoMyk7XG4gIGNvbnN0IHsgZGF0YTogZm9sbG93ZXJzRGF0YSwgZXJyb3I6IGZvbGxvd2VyRXJyb3IgfSA9IHVzZVNXUihcbiAgICBgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvZm9sbG93ZXJzP2xpbWl0PSR7Zm9sbG93ZXJzTGltaXR9YCxcbiAgICBmZXRjaGVyXG4gICk7XG4gIGNvbnN0IHsgZGF0YTogZm9sbG93aW5nc0RhdGEsIGVycm9yOiBmb2xsb3dpbmdFcnJvciB9ID0gdXNlU1dSKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlci9mb2xsb3dpbmdzP2xpbWl0PSR7Zm9sbG93aW5nc0xpbWl0fWAsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZGlzcGF0Y2goe1xuICAvLyAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXG4gIC8vICAgfSk7XG4gIC8vICAgZGlzcGF0Y2goe1xuICAvLyAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcbiAgLy8gICB9KTtcbiAgLy8gfSwgW10pO1xuICBjb25zb2xlLmxvZyhcIkBAQEBAQFwiLCBtZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbbWUgJiYgbWUuaWRdKTtcblxuICBjb25zdCBsb2FkTW9yZUZvbGxvd2VycyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRGb2xsb3dlcnNMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9hZE1vcmVGb2xsb3dpbmdzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEZvbGxvd2luZ3NMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFtZSkge1xuICAgIHJldHVybiBcIuuCtOygleuztCDroZzrlKnspJFcIjtcbiAgfVxuXG4gIGlmIChmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yKTtcbiAgICByZXR1cm4gXCLtjJTroZzsnokv7YyU66Gc7JuMIOuhnOuUqSDspJEg7JeQ65+s6rCAIOuwnOyDne2WiOyKteuLiOuLpC5cIjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+64K07ZSE66Gc7ZWEIHwgU2Fuc2Jvb2sgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgIDxOaWNrbmFtZUVkaXRGb3JtIC8+XG4gICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOyeiSDrqqnroZ1cIiBkYXRhPXtmb2xsb3dpbmdzRGF0YX0gLz5cbiAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMIOuqqeuhnVwiIGRhdGE9e2ZvbGxvd2Vyc0RhdGF9IC8+XG4gICAgICA8L0FwcExheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vU1NSIDogbmV4dOyghOyaqSDshJzrsoTsgqzsnbTrk5wg66CM642U66eBID0g7IKs7JqpXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoXG4gIChzdG9yZSkgPT4gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogXCJcIjtcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IFwiXCI7XG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xuICAgICAgLy/sv6DtgqTrpbwg7I2o7IScIOyalOyyreydhCDrs7Trg4jsnYTrloTrp4wg7J6g7IucIOuztOq0gO2VtOuRkOyXiOuLpOqwgCDsv6DtgqQg7JWI7I2o7IScIOyalOyyreuztOuCvOuWhOuKlCDshJzrsoTsl5DshJwg6rO17Jyg7ZWY6rOgIOyeiOuKlCDsv6DtgqTrpbwg7KCc6rGw7ZWY64qUXG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTsgLy/snpjrqrvtlZjrqbQg64K0IOuSpOuhnCDroZzqt7jsnbjtlZjripQg7IKs656M7J20IOuCtOy/oO2CpOulvCDqs7XsnKDtlbTshJwg64K07KCV67O066GcIOuhnOq3uOyduO2VmOuKlCDtmITsg4HsnbQg7J287Ja064KY7IScIO2VtOuRkOuKlCDsobDsuZhcbiAgICB9XG4gICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gICAgfSk7XG5cbiAgICBzdG9yZS5kaXNwYXRjaChFTkQpO1xuICAgIGF3YWl0IHN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xuICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ })

})