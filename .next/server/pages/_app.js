module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AQn3");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Sansbook = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("title", null, "Sansbook ")), __jsx(Component, null));
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].withRedux(Sansbook));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "2/VE":
/***/ (function(module, exports) {

module.exports = require("@faker-js/faker");

/***/ }),

/***/ "2WPw":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./reducers/post.js + 1 modules
var post = __webpack_require__("p+NB");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// CONCATENATED MODULE: ./sagas/post.js




//import shortId from "shortid";

//all 배열안에 있는것들을 한번에 실행
//fork 비동기 함수 호출
//call 동기 함수 호출

//Retweet
function retweetAPI(data) {
  return external_axios_default.a.post(`/post/${data}/retweet`);
}
function* retweet(action) {
  try {
    const result = yield Object(effects_["call"])(retweetAPI, action.data);
    yield Object(effects_["put"])({
      type: post["B" /* RETWEET_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["z" /* RETWEET_FAILURE */],
      error: err.response.data
    });
  }
}

//loadPost
function loadPostAPI(data) {
  return external_axios_default.a.get(`/post/${data}`);
}
function* loadPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["r" /* LOAD_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["p" /* LOAD_POST_FAILURE */],
      data: err.response.data
    });
  }
}

//LoadPosts
function loadPostsAPI(lastId) {
  return external_axios_default.a.get(`/posts?lastId=${lastId || 0}`);
}
function* loadPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostsAPI, action.lastId);
    yield Object(effects_["put"])({
      type: post["o" /* LOAD_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["m" /* LOAD_POSTS_FAILURE */],
      data: err.response.data
    });
  }
}

//loadUserPost
function loadUserPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}
function* loadUserPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["u" /* LOAD_USER_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["s" /* LOAD_USER_POSTS_FAILURE */],
      data: err.response.data
    });
  }
}

//loadHashtagPost
function loadHashtagPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}
function* loadHashtagPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["l" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["j" /* LOAD_HASHTAG_POSTS_FAILURE */],
      data: err.response.data
    });
  }
}

//AddPost
function addPostAPI(data) {
  return external_axios_default.a.post("/post", data);
}
function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      //put : dispatch
      type: post["f" /* ADD_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["a" /* ADD_POST_TO_ME */],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["d" /* ADD_POST_FAILURE */],
      data: err.response.data
    });
  }
}

//Upload images
function uploadImagesAPI(data) {
  return external_axios_default.a.post("/post/images", data);
}
function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: post["H" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["F" /* UPLOAD_IMAGES_FAILURE */],
      error: err.response.data
    });
  }
}

//RemovePost
function removePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}`);
}
function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      //put : dispatch
      type: post["y" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["C" /* REMOVE_POST_OF_ME */],
      data: action.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["w" /* REMOVE_POST_FAILURE */],
      data: err.response.data
    });
  }
}

//AddCommnet
function addCommentAPI(data) {
  return external_axios_default.a.post(`/post/${data.postId}/comment`, data);
}
function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      //put : dispatch
      type: post["c" /* ADD_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_FAILURE */],
      data: err.response.data
    });
  }
}

//LIKE
function likePostAPI(data) {
  return external_axios_default.a.patch(`/post/${data}/like`);
}
function* likePost(action) {
  try {
    const result = yield Object(effects_["call"])(likePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["i" /* LIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["g" /* LIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

//UNLIKE
function unlikePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}/like`);
}
function* unlikePost(action) {
  try {
    const result = yield Object(effects_["call"])(unlikePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["E" /* UNLIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["C" /* UNLIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}
function* watchRetweet() {
  yield Object(effects_["takeLatest"])(post["A" /* RETWEET_REQUEST */], retweet);
}
function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(post["G" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}
function* watchLikePost() {
  yield Object(effects_["takeLatest"])(post["h" /* LIKE_POST_REQUEST */], likePost);
}
function* watchUnLikePost() {
  yield Object(effects_["takeLatest"])(post["D" /* UNLIKE_POST_REQUEST */], unlikePost);
}
function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(post["q" /* LOAD_POST_REQUEST */], loadPost);
}
function* watchLoadPosts() {
  yield Object(effects_["throttle"])(5000, post["n" /* LOAD_POSTS_REQUEST */], loadPosts);
}
function* watchLoadUserPosts() {
  yield Object(effects_["throttle"])(5000, post["t" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);
}
function* watchLoadHashtagPosts() {
  yield Object(effects_["throttle"])(5000, post["k" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}
function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);
}
function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["x" /* REMOVE_POST_REQUEST */], removePost);
}
function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);
}
//yield take 단점 : 일회용
//takeEvery로 while문 대체해서 반복하게 만듬
//takeLatest 모르고 여러번 눌러도 마지막만 실행하게만듬 (중복 못하게, 보통은 takeLatest 많이함)
//throttle 시간제한을 두고 그 시간안에는 한번만 실행

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchRetweet), Object(effects_["fork"])(watchUnLikePost), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchLoadPosts), Object(effects_["fork"])(watchLoadUserPosts), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchUploadImages)]);
}
// CONCATENATED MODULE: ./sagas/user.js




//all 배열안에 있는것들을 한번에 실행
//fork 비동기 함수 호출
//call 동기 함수 호출

//Load_MY_INFO_USER : 로그인 유(새로고침해도 안풀리게) 내정보
function loadMyInfoAPI() {
  return external_axios_default.a.get("/user");
}
function* loadMyInfo() {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoAPI);
    yield Object(effects_["put"])({
      type: user["p" /* LOAD_MY_INFO_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["n" /* LOAD_MY_INFO_FAILURE */],
      error: err.response.data
    });
  }
}

//LoadUser : 상대방 정보
function loadUserAPI(data) {
  return external_axios_default.a.get(`/user/${data}`);
}
function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserAPI, action.data);
    yield Object(effects_["put"])({
      type: user["s" /* LOAD_USER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["q" /* LOAD_USER_FAILURE */],
      error: err.response.data
    });
  }
}

//LOGIN
function logInAPI(data) {
  return external_axios_default.a.post("/user/login", data);
}
function* logIn(action) {
  try {
    const result = yield Object(effects_["call"])(logInAPI, action.data);
    yield Object(effects_["put"])({
      //put : dispatch
      type: user["v" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["t" /* LOG_IN_FAILURE */],
      error: err.response.data
    });
  }
}

//LOGOUT
function logOutAPI() {
  return external_axios_default.a.post("/user/logout");
}
function* logOut() {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      //put : dispatch
      type: user["y" /* LOG_OUT_SUCCESS */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["w" /* LOG_OUT_FAILURE */],
      data: err.response.data
    });
  }
}

//SignUp
function signUpAPI(data) {
  return external_axios_default.a.post("/user", data);
}
function* signUp(action) {
  try {
    const result = yield Object(effects_["call"])(signUpAPI, action.data);
    yield Object(effects_["put"])({
      //put : dispatch
      type: user["F" /* SIGN_UP_SUCCESS */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["D" /* SIGN_UP_FAILURE */],
      data: err.response.data
    });
  }
}

//Follow
function followAPI(data) {
  return external_axios_default.a.patch(`/user/${data}/follow`);
}
function* follow(action) {
  try {
    const result = yield Object(effects_["call"])(followAPI, action.data);
    yield Object(effects_["put"])({
      type: user["g" /* FOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["e" /* FOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}

//UnFollow
function unfollowAPI(data) {
  return external_axios_default.a.delete(`/user/${data}/follow`);
}
function* unfollow(action) {
  try {
    const result = yield Object(effects_["call"])(unfollowAPI, action.data);
    yield Object(effects_["put"])({
      type: user["I" /* UNFOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["G" /* UNFOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}

//LoadFollowers
function loadFollowersAPI(data) {
  return external_axios_default.a.get("/user/followers", data);
}
function* loadFollowers(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowersAPI, action.data);
    yield Object(effects_["put"])({
      type: user["j" /* LOAD_FOLLOWERS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["h" /* LOAD_FOLLOWERS_FAILURE */],
      error: err.response.data
    });
  }
}

//LoadFollowings
function loadFollowingsAPI(data) {
  return external_axios_default.a.get("/user/followings", data);
}
function* loadFollowings(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowingsAPI, action.data);
    yield Object(effects_["put"])({
      type: user["m" /* LOAD_FOLLOWINGS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["k" /* LOAD_FOLLOWINGS_FAILURE */],
      error: err.response.data
    });
  }
}

//RemoveFollower
function removeFollowerAPI(data) {
  return external_axios_default.a.delete(`/user/follower/${data}`);
}
function* removeFollower(action) {
  try {
    const result = yield Object(effects_["call"])(removeFollowerAPI, action.data);
    yield Object(effects_["put"])({
      type: user["B" /* REMOVE_FOLLOWER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["z" /* REMOVE_FOLLOWER_FAILURE */],
      error: err.response.data
    });
  }
}

//ChangeNickname
function changeNicknameAPI(data) {
  return external_axios_default.a.patch("/user/nickname", {
    nickname: data
  });
}
function* changeNickname(action) {
  try {
    const result = yield Object(effects_["call"])(changeNicknameAPI, action.data);
    yield Object(effects_["put"])({
      type: user["d" /* CHANGE_NICKNAME_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["b" /* CHANGE_NICKNAME_FAILURE */],
      error: err.response.data
    });
  }
}
function* watchChangeNickname() {
  yield Object(effects_["takeLatest"])(user["c" /* CHANGE_NICKNAME_REQUEST */], changeNickname);
}
function* watchLoadMyInfo() {
  yield Object(effects_["takeLatest"])(user["o" /* LOAD_MY_INFO_REQUEST */], loadMyInfo);
}
function* watchLoadUser() {
  yield Object(effects_["takeLatest"])(user["r" /* LOAD_USER_REQUEST */], loadUser);
}
function* watchFollow() {
  yield Object(effects_["takeLatest"])(user["f" /* FOLLOW_REQUEST */], follow);
}
function* watchUnfollow() {
  yield Object(effects_["takeLatest"])(user["H" /* UNFOLLOW_REQUEST */], unfollow);
}
function* watchLoadFollowers() {
  yield Object(effects_["takeLatest"])(user["i" /* LOAD_FOLLOWERS_REQUEST */], loadFollowers);
}
function* watchLoadFollowings() {
  yield Object(effects_["takeLatest"])(user["l" /* LOAD_FOLLOWINGS_REQUEST */], loadFollowings);
}
function* watchRemoveFollower() {
  yield Object(effects_["takeLatest"])(user["A" /* REMOVE_FOLLOWER_REQUEST */], removeFollower);
}
function* watchLogIn() {
  yield Object(effects_["takeLatest"])(user["u" /* LOG_IN_REQUEST */], logIn); //take("LOG_IN") : 로그인이란 액션이 실행될때까지 기다림
}

function* watchLogOut() {
  yield Object(effects_["takeLatest"])(user["x" /* LOG_OUT_REQUEST */], logOut);
}
function* watchSignUp() {
  yield Object(effects_["takeLatest"])(user["E" /* SIGN_UP_REQUEST */], signUp);
}
//yield take 단점 : 일회용
//takeEvery로 while문 대체해서 반복하게 만듬
//takeLatest 모르고 여러번 눌러도 마지막만 실행하게만듬 (중복 못하게, 보통은 takeLatest 많이함)
//throttle 시간제한을 두고 그 시간안에는 한번만 실행

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchFollow), Object(effects_["fork"])(watchUnfollow), Object(effects_["fork"])(watchLoadFollowers), Object(effects_["fork"])(watchLoadFollowings), Object(effects_["fork"])(watchRemoveFollower), Object(effects_["fork"])(watchLoadMyInfo), Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchChangeNickname)]);
}
// CONCATENATED MODULE: ./sagas/index.js




external_axios_default.a.defaults.baseURL = "http://localhost:3001";
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(postSaga), Object(effects_["fork"])(userSaga)]);
}
// CONCATENATED MODULE: ./reducers/index.js





// (이전상태, 액션) => 다음상태ㄴ
const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      console.log("HYDRATE", action);
      return action.payload;
    default:
      {
        const combinedReducer = Object(external_redux_["combineReducers"])({
          user: user["J" /* default */],
          post: post["I" /* default */]
        });
        return combinedReducer(state, action);
      }
  }
};
/* harmony default export */ var reducers = (rootReducer);
// CONCATENATED MODULE: ./store/configureStore.js






const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};
const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);


// const dummyUser = {
//   id: 1,
//   nickname: "jangsan",
//   Posts: [],
//   Followings: [],
//   Followers: [],
// };

const initialState = {
  mainPosts: [],
  imagePaths: [],
  loadMyInfoLoading: false,
  // 내정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserLoading: false,
  // 유저 정보 가져오기 시도중
  loadUserDone: false,
  loadUserError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  changeNicknameLoading: false,
  //닉네임 변경시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  me: null
};
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

// const dummyUser = (data) => ({
//   ...data,
//   nickname: "jangsan",
//   id: 1,
//   Posts: [{ id: 1 }],
//   Followings: [
//     { nickname: "부기초" },
//     { nickname: "Chanho Lee" },
//     { nickname: "neue zeal" },
//   ],
//   Followers: [
//     { nickname: "부기초" },
//     { nickname: "Chanho Lee" },
//     { nickname: "neue zeal" },
//   ],
// });

// action당 3가지씩 Request,Success,Failure
//login action
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});

//logout action
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});
const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;
    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.userInfo = action.data;
      draft.loadUserDone = true;
      break;
    case LOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;
    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;
    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me = action.data;
      draft.loadMyInfoDone = true;
      break;
    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;
    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data.userId
      });
      draft.followDone = true;
      break;
    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;
    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;
    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.userId);
      draft.unfollowDone = true;
      break;
    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;
    case LOAD_FOLLOWINGS_REQUEST:
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsError = null;
      draft.loadFollowingsDone = false;
      break;
    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.me.Followings = action.data;
      draft.loadFollowingsDone = true;
      break;
    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      break;
    case LOAD_FOLLOWERS_REQUEST:
      draft.loadFollowersLoading = true;
      draft.loadFollowersError = null;
      draft.loadFollowersDone = false;
      break;
    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.me.Followers = action.data;
      draft.loadFollowersDone = true;
      break;
    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      break;
    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerError = null;
      draft.removeFollowerDone = false;
      break;
    case REMOVE_FOLLOWER_SUCCESS:
      draft.removeFollowerLoading = false;
      draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.userId);
      draft.removeFollowerDone = true;
      break;
    case REMOVE_FOLLOWER_FAILURE:
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.error;
      break;
    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;
    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = action.data;
      draft.logInDone = true;
      break;
    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;
    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;
    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;
    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;
    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;
    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;
    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;
    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;
    case CHANGE_NICKNAME_SUCCESS:
      draft.me.nickname = action.data.nickname;
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;
    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;
    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: [{ id: action.data }, ...state.me.Posts],
    //   },
    // };
    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
    //   },
    // };
    default:
      break;
  }
});
/* harmony default export */ __webpack_exports__["J"] = (reducer);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ LIKE_POST_REQUEST; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ LIKE_POST_SUCCESS; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ LIKE_POST_FAILURE; });
__webpack_require__.d(__webpack_exports__, "D", function() { return /* binding */ UNLIKE_POST_REQUEST; });
__webpack_require__.d(__webpack_exports__, "E", function() { return /* binding */ UNLIKE_POST_SUCCESS; });
__webpack_require__.d(__webpack_exports__, "C", function() { return /* binding */ UNLIKE_POST_FAILURE; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* binding */ LOAD_POST_REQUEST; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* binding */ LOAD_POST_SUCCESS; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* binding */ LOAD_POST_FAILURE; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* binding */ LOAD_POSTS_REQUEST; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* binding */ LOAD_POSTS_SUCCESS; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* binding */ LOAD_POSTS_FAILURE; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* binding */ LOAD_USER_POSTS_REQUEST; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* binding */ LOAD_USER_POSTS_SUCCESS; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* binding */ LOAD_USER_POSTS_FAILURE; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ LOAD_HASHTAG_POSTS_REQUEST; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ LOAD_HASHTAG_POSTS_SUCCESS; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ LOAD_HASHTAG_POSTS_FAILURE; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ ADD_POST_REQUEST; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ ADD_POST_SUCCESS; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ ADD_POST_FAILURE; });
__webpack_require__.d(__webpack_exports__, "G", function() { return /* binding */ UPLOAD_IMAGES_REQUEST; });
__webpack_require__.d(__webpack_exports__, "H", function() { return /* binding */ UPLOAD_IMAGES_SUCCESS; });
__webpack_require__.d(__webpack_exports__, "F", function() { return /* binding */ UPLOAD_IMAGES_FAILURE; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* binding */ REMOVE_POST_REQUEST; });
__webpack_require__.d(__webpack_exports__, "y", function() { return /* binding */ REMOVE_POST_SUCCESS; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* binding */ REMOVE_POST_FAILURE; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ ADD_COMMENT_REQUEST; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ ADD_COMMENT_SUCCESS; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ADD_COMMENT_FAILURE; });
__webpack_require__.d(__webpack_exports__, "A", function() { return /* binding */ RETWEET_REQUEST; });
__webpack_require__.d(__webpack_exports__, "B", function() { return /* binding */ RETWEET_SUCCESS; });
__webpack_require__.d(__webpack_exports__, "z", function() { return /* binding */ RETWEET_FAILURE; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* binding */ REMOVE_IMAGE; });

// UNUSED EXPORTS: initialState, addPost, addCommnet

// EXTERNAL MODULE: external "shortid"
var external_shortid_ = __webpack_require__("2WPw");

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__("T5ka");

// CONCATENATED MODULE: ./util/produce.js

/* harmony default export */ var produce = ((...args) => {
  //immer가 익스플로어에서도 작동할수 있게 하는방법
  Object(external_immer_["enableES5"])();
  return Object(external_immer_["produce"])(...args);
});
// EXTERNAL MODULE: external "@faker-js/faker"
var faker_ = __webpack_require__("2/VE");

// CONCATENATED MODULE: ./reducers/post.js



faker_["faker"].seed(123);
const initialState = {
  singlePost: null,
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
};

// export const generateDummyPost = (number) =>
//   Array(number)
//     .fill()
//     .map(() => ({
//       id: shortId.generate(),
//       User: {
//         id: shortId.generate(),
//         nickname: faker.name.findName(),
//       },
//       content: faker.lorem.paragraph(),
//       Images: [
//         {
//           src: faker.image.image(),
//         },
//       ],
//       Comments: [
//         {
//           User: {
//             id: shortId.generate(),
//             nickname: faker.name.findName(),
//           },
//           content: faker.lorem.sentence(),
//         },
//       ],
//     }));

// export const initialState = {
//   mainPosts: [
//     {
//       id: 1,
//       User: {
//         id: 1,
//         nickname: "제로초",
//       },
//       content: "첫 번째 게시글 #해시태그 #jangsan",
//       Images: [
//         {
//           id: shortId.generate(),
//           src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
//         },
//         {
//           id: shortId.generate(),
//           src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
//         },
//         {
//           id: shortId.generate(),
//           src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
//         },
//       ],
//       Comments: [
//         {
//           id: shortId.generate(),
//           User: {
//             id: shortId.generate(),
//             nickname: "nero",
//           },
//           content: "우와 개정판이 나왔군요~",
//         },
//         {
//           id: shortId.generate(),
//           User: {
//             id: shortId.generate(),
//             nickname: "hero",
//           },
//           content: "얼른 사고싶어요~",
//         },
//       ],
//     },
//   ],
//   imagePaths: [],
//   addPostLoading: false,
//   addPostDone: false,
//   addPostError: null,
//   removePostLoading: false,
//   removePostDone: false,
//   removePostError: null,
//   addCommentLoading: false,
//   addCommentDone: false,
//   addCommentError: null,
// };
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const RETWEET_FAILURE = "RETWEET_FAILURE";
const REMOVE_IMAGE = "REMOVE_IMAGE";
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addCommnet = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

// const dummyPost = (data) => ({
//   id: data.id,
//   content: data.content,
//   User: {
//     id: 1,
//     nickname: "제로초",
//   },
//   Images: [],
//   Comments: [],
// });
// const dummyComment = (data) => ({
//   id: shortId.generate(),
//   content: data,
//   User: {
//     id: 1,
//     nickname: "제로초",
//   },
// });

//reducer : 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
const reducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case RETWEET_REQUEST:
      draft.retweetLoading = true;
      draft.retweetDone = false;
      draft.retweetError = null;
      break;
    case RETWEET_SUCCESS:
      {
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }
    case RETWEET_FAILURE:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      break;
    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;
    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.userId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }
    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;
    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;
    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.userId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }
    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      break;
    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;
    case LOAD_POST_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.singlePost = action.data;
      break;
    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
      break;
    case LOAD_USER_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;
    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePosts = action.data.length === 10;
      break;
    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;
    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data);
      draft.imagePaths = [];
      break;
    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;
    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;
    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }
    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;
    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;
    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      break;
    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;
    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;
    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;
    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
        // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
        // };
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;
    default:
      break;
  }
});
/* harmony default export */ var post = __webpack_exports__["I"] = (reducer);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });