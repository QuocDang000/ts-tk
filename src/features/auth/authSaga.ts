import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { fork, take, put, call, delay } from "redux-saga/effects";
import { authActions, LoginPayLoad } from "./authSlice";

function* handleLogin(payload: LoginPayLoad) {
  try {
    yield delay(1000)
    localStorage.setItem("access_token", "124");

    yield put(
      authActions.loginSuccess({
        name: "QuocDang",
        user_id: "123",
      })
    );

    // redirect to admin page
    yield put(push("/admin"));
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
}

function* handleLogout() {
  localStorage.removeItem("access_token");
  yield put(push("/login"));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayLoad> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
