import { call, put, takeLatest } from "redux-saga/effects";
import fetchGetUsers from "../requests/fetchUsers";

function* handleGetUsers() {
  try {
    const users = yield call(fetchGetUsers);
    yield put({ type: "GET_USERS_SUCCESS", users });
  } catch (err) {
    console.log(err.message);
    yield put({ type: "GET_USERS_FAILED", message: err.message });
  }
}

function* watcherUserSaga() {
  yield takeLatest("GET_USER_REQUESTED", handleGetUsers);
}

export default watcherUserSaga;
