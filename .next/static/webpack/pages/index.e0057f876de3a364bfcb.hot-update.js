webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n  _jsxFileName = \"/Users/js/Desktop/sansbook/components/PostCard.js\",\n  _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar PostCard = function PostCard(_ref) {\n  _s();\n  var post = _ref.post;\n  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    var _state$user$me;\n    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;\n  });\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    cover: post.Images[0] && __jsx(PostImages, {\n      images: post.Images,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 34\n      }\n    }),\n    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"RetweetOutlined\"], {\n      key: \"retweet\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }\n    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"HeartOutlined\"], {\n      key: \"heart\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }\n    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"MessageOutlined\"], {\n      key: \"comment\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }\n    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Popover\"], {\n      key: \"more\",\n      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"].Group, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 15\n        }\n      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }\n      }, \"\\uC218\\uC815\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        type: \"danger\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }\n      }, \"\\uC0AD\\uC81C\")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 19\n        }\n      }, \"\\uC2E0\\uACE0\")),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }\n    }, __jsx(EllipsisOutlined, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }\n    }))],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Meta, {\n    avatar: __jsx(Avatar, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 19\n      }\n    }, post.User.nickname[0]),\n    title: post.User.nickname,\n    description: __jsx(PostCardContent, {\n      postData: post.content,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 24\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  })), __jsx(CommentForm, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }), __jsx(Comments, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }));\n};\n_s(PostCard, \"FJdoDJNyUlJ5WKWdRipc5DguCUQ=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n_c = PostCard;\nPostCard.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,\n    user: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,\n    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,\n    Comment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),\n    Images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object)\n  }).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcz85MWRiIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwiX3JlZiIsIl9zIiwicG9zdCIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIl9zdGF0ZSR1c2VyJG1lIiwidXNlciIsIm1lIiwiX19qc3giLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQ2FyZCIsImNvdmVyIiwiSW1hZ2VzIiwiUG9zdEltYWdlcyIsImltYWdlcyIsImFjdGlvbnMiLCJSZXR3ZWV0T3V0bGluZWQiLCJrZXkiLCJIZWFydE91dGxpbmVkIiwiTWVzc2FnZU91dGxpbmVkIiwiUG9wb3ZlciIsImNvbnRlbnQiLCJCdXR0b24iLCJHcm91cCIsIlVzZXIiLCJSZWFjdCIsIkZyYWdtZW50IiwidHlwZSIsIkVsbGlwc2lzT3V0bGluZWQiLCJNZXRhIiwiYXZhdGFyIiwiQXZhdGFyIiwibmlja25hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiUG9zdENhcmRDb250ZW50IiwicG9zdERhdGEiLCJDb21tZW50Rm9ybSIsIkNvbW1lbnRzIiwiX2MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZWRBdCIsIkNvbW1lbnQiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QztBQUtsQjtBQUNlO0FBQ1A7QUFFbkMsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUFDLElBQUEsRUFBaUI7RUFBQUMsRUFBQTtFQUFBLElBQVhDLElBQUksR0FBQUYsSUFBQSxDQUFKRSxJQUFJO0VBQ3RCLElBQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO0lBQUEsSUFBQUMs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RThDLGlEQUFTLENBQUNDLEtBQUssQ0FBQztJQUNwQjlDLEVBQUUsRUFBRTZDLGlEQUFTLENBQUNFLE1BQU07SUFDcEIzQyxJQUFJLEVBQUV5QyxpREFBUyxDQUFDRyxNQUFNO0lBQ3RCdkIsT0FBTyxFQUFFb0IsaURBQVMsQ0FBQ0ksTUFBTTtJQUN6QkMsU0FBUyxFQUFFTCxpREFBUyxDQUFDRyxNQUFNO0lBQzNCRyxPQUFPLEVBQUVOLGlEQUFTLENBQUNPLE9BQU8sQ0FBQ1AsaURBQVMsQ0FBQ0csTUFBTSxDQUFDO0lBQzVDaEMsTUFBTSxFQUFFNkIsaURBQVMsQ0FBQ08sT0FBTyxDQUFDUCxpREFBUyxDQUFDRyxNQUFNO0VBQzVDLENBQUMsQ0FBQyxDQUFDSztBQUNMLENBQUM7QUFFY3pELHVFQUFRLEVBQUM7QUFBQSxJQUFBK0MsRUFBQTtBQUFBVyxZQUFBLENBQUFYLEVBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgUG9wb3ZlciwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7XG4gIFJldHdlZXRPdXRsaW5lZCxcbiAgSGVhcnRPdXRsaW5lZCxcbiAgTWVzc2FnZU91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENhcmRcbiAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxuICAgICAgICBhY3Rpb25zPXtbXG4gICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgLz4sXG4gICAgICAgICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiAvPixcbiAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiAvPixcbiAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAga2V5PVwibW9yZVwiXG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiPuyCreygnDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+7Iug6rOgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cbiAgICAgICAgICA8L1BvcG92ZXI+LFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8Q2FyZC5NZXRhXG4gICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxuICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XG4gICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XG4gICAgICAgIC8+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8Q29tbWVudEZvcm0gLz5cbiAgICAgIDxDb21tZW50cyAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgQ29tbWVudDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostCard.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar dummyUser = {\n  id: 1,\n  nickname: \"jangsan\",\n  Posts: [],\n  Followings: [],\n  Followers: []\n};\nvar initialState = {\n  isLoggedIn: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\nvar loginAction = function loginAction(data) {\n  return {\n    type: \"LOG_IN\",\n    data: data\n  };\n};\nvar logoutAction = function logoutAction() {\n  return {\n    type: \"LOG_OUT\"\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case \"LOG_IN\":\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isLoggedIn: true,\n          me: dummyUser,\n          loginData: action.data\n        });\n      }\n    case \"LOG_OUT\":\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isLoggedIn: false,\n          me: null\n        });\n      }\n    case \"SIGN_UP\":\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          signUpData: action.data\n        });\n      }\n    default:\n      {\n        return _objectSpread({}, state);\n      }\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImR1bW15VXNlciIsImlkIiwibmlja25hbWUiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dEFjdGlvbiIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwiX29iamVjdFNwcmVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUc7RUFDaEJDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLFFBQVEsRUFBRSxTQUFTO0VBQ25CQyxLQUFLLEVBQUUsRUFBRTtFQUNUQyxVQUFVLEVBQUUsRUFBRTtFQUNkQyxTQUFTLEVBQUU7QUFDYixDQUFDO0FBRU0sSUFBTUMsWUFBWSxHQUFHO0VBQzFCQyxVQUFVLEVBQUUsS0FBSztFQUNqQkMsRUFBRSxFQUFFLElBQUk7RUFDUkMsVUFBVSxFQUFFLENBQUMsQ0FBQztFQUNkQyxTQUFTLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFDTSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUMsSUFBSSxFQUFLO0VBQ25DLE9BQU87SUFDTEMsSUFBSSxFQUFFLFFBQVE7SUFDZEQsSUFBSSxFQUFKQTtFQUNGLENBQUM7QUFDSCxDQUFDO0FBQ00sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUNoQyxPQUFPO0lBQ0xELElBQUksRUFBRTtFQUNSLENBQUM7QUFDSCxDQUFDO0FBRWMsMkVBQWtDO0VBQUEsSUFBakNFLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdWLFlBQVk7RUFBQSxJQUFFYSxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDMUMsUUFBUUMsTUFBTSxDQUFDTixJQUFJO0lBQ2pCLEtBQUssUUFBUTtNQUFFO1FBQ2IsT0FBQU8sYUFBQSxDQUFBQSxhQUFBLEtBQ0tMLEtBQUs7VUFDUlIsVUFBVSxFQUFFLElBQUk7VUFDaEJDLEVBQUUsRUFBRVIsU0FBUztVQUNiVSxTQUFTLEVBQUVTLE1BQU0sQ0FBQ1A7UUFBSTtNQUUxQjtJQUNBLEtBQUssU0FBUztNQUFFO1FBQ2QsT0FBQVEsYUFBQSxDQUFBQSxhQUFBLEtBQ0tMLEtBQUs7VUFDUlIsVUFBVSxFQUFFLEtBQUs7VUFDakJDLEVBQUUsRUFBRTtRQUFJO01BRVo7SUFDQSxLQUFLLFNBQVM7TUFBRTtRQUNkLE9BQUFZLGFBQUEsQ0FBQUEsYUFBQSxLQUNLTCxLQUFLO1VBQ1JOLFVBQVUsRUFBRVUsTUFBTSxDQUFDUDtRQUFJO01BRTNCO0lBQ0E7TUFBUztRQUNQLE9BQUFRLGFBQUEsS0FDS0wsS0FBSztNQUVaO0VBQUM7QUFFTCxDQUFDIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGR1bW15VXNlciA9IHtcbiAgaWQ6IDEsXG4gIG5pY2tuYW1lOiBcImphbmdzYW5cIixcbiAgUG9zdHM6IFtdLFxuICBGb2xsb3dpbmdzOiBbXSxcbiAgRm9sbG93ZXJzOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICBtZTogbnVsbCxcbiAgc2lnblVwRGF0YToge30sXG4gIGxvZ2luRGF0YToge30sXG59O1xuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcIkxPR19JTlwiLFxuICAgIGRhdGEsXG4gIH07XG59O1xuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcIkxPR19PVVRcIixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiTE9HX0lOXCI6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICBtZTogZHVtbXlVc2VyLFxuICAgICAgICBsb2dpbkRhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBcIkxPR19PVVRcIjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICBtZTogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgXCJTSUdOX1VQXCI6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaWduVXBEYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})