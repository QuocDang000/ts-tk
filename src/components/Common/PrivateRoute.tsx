import { Admin } from "components/Layout";
import LoginPage from "features/auth/pages/LoginPage";
import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

export interface PrivateRouteProps {}

export function PrivateRoute(props: RouteProps) {
  const isLogin = Boolean(localStorage.getItem("access_token"));

  if (isLogin) return <Route {...props} />;
  return <Redirect to={"/login"} />;
}
