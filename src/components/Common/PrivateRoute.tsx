import { Redirect, Route, RouteProps } from "react-router-dom";

export interface PrivateRouteProps {}

export function PrivateRoute(props: RouteProps) {
  const isLogin = Boolean(localStorage.getItem("access_token"));

  return isLogin ? <Route {...props} /> : <Redirect to={"/login"} />;
}
