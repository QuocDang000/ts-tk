import { PayloadAction } from "@reduxjs/toolkit";
import * as React from "react";
import { fork, take } from "redux-saga/effects";
import { authActions, LoginPayLoad } from "./authSlice";

function* handleLogin(payload: LoginPayLoad) {
  console.log('Handle login', payload);
}

function* handleLogout() {
  console.log('Handle logout');
}

function* watchLoginFlow() {
  const action: PayloadAction<LoginPayLoad> = yield take(authActions.login.type)
  yield fork(handleLogin, action.payload)

  yield take(authActions.logout.type)
  yield fork(handleLogout)
}

export default function* authSaga() {
  yield fork(watchLoginFlow)
}
