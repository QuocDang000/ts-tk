import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Auth0Provider
      domain='dev-j3i4pkt7sb42hnak.us.auth0.com'
      clientId='MEYswLiE0ku1Wm68iYF8roYEJbSqcw59'
      authorizationParams={{
        redirect_uri: `${window.location.origin}/admin`,
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
