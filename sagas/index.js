import { all, fork, take, call, put } from "redux-saga/effects";
import axios from "axios";

//all 배열안에 있는것들을 한번에 실행
//fork 비동기 함수 호출
//call 동기 함수 호출

//LOGIN
function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    const result = yield fork(logInAPI, action.data);
    yield put({
      //put : dispatch
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

//LOGOUT
function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    const result = yield fork(logOutAPI);
    yield put({
      //put : dispatch
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

//AddPost
function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    const result = yield fork(addPostAPI, action.data);
    yield put({
      //put : dispatch
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield take("LOG_IN_REQUEST", logIn); //take("LOG_IN") : 로그인이란 액션이 실행될때까지 기다림
}

function* watchLogOut() {
  yield take("LOG_OUT_REQUEST", logOut);
}
function* watchAddPost() {
  yield take("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut, fork(watchAddPost))]);
}
