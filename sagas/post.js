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

//AddPost
function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    //const result = yield fork(addPostAPI, action.data);
    yield delay(1000);
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

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}
//yield take 단점 : 일회용
//takeEvery로 while문 대체해서 반복하게 만듬
//takeLatest 모르고 여러번 눌러도 마지막만 실행하게만듬 (중복 못하게, 보통은 takeLatest 많이함)
//throttle 시간제한을 두고 그 시간안에는 한번만 실행

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
