import {
  all,
  fork,
  takeEvery,
  takeLatest,
  call,
  put,
  delay,
} from "redux-saga/effects";
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
    yield delay(1000);
    //const result = yield fork(logInAPI, action.data);
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
    //const result = yield fork(logOutAPI);
    yield delay(1000);
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

function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn); //take("LOG_IN") : 로그인이란 액션이 실행될때까지 기다림
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}
//yield take 단점 : 일회용
//takeEvery로 while문 대체해서 반복하게 만듬
//takeLatest 모르고 여러번 눌러도 마지막만 실행하게만듬 (중복 못하게, 보통은 takeLatest 많이함)
//throttle 시간제한을 두고 그 시간안에는 한번만 실행

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
