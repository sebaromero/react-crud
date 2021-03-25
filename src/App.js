import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./containers/Home/Home";
import { Login } from "./containers/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
    </Switch>
  </BrowserRouter>
);
