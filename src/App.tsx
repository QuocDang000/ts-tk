import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import cityApi from "api/cityApi";
import { Route, Switch } from "react-router-dom";
import LoginPage from "features/auth/pages/LoginPage";
import { Notfound, PrivateRoute } from "components/Common";
import { Admin } from "components/Layout";
import { useAppDispatch } from "app/hooks";
import LogoutButton from "features/auth/pages/LogoutBtn";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    cityApi.getAll().then((res) => console.log(res));
  });

  return (
    <div className='App'>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>

        <PrivateRoute path='/admin'>
          <Admin />
        </PrivateRoute>

        <Route>
          <Notfound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
