import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import cityApi from "api/cityApi";
import { Route, Switch } from "react-router-dom";
import LoginPage from "features/auth/pages/LoginPage";
import { Notfound, PrivateRoute } from "components/Common";
import { Admin } from "components/Layout";
import { useAppDispatch } from "app/hooks";

function App() {
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
