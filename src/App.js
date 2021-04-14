import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./containers/Home/Home";
import { Login } from "./containers/Login/Login";
import { ProtectedRoute } from "./components/index";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const [user, setUser] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(false);
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          handleLogin={handleLogin}
          render={(props) => (
            <Login
              {...props}
              user={user.toString()}
              handleLogin={handleLogin}
            />
          )}
        />
        <ProtectedRoute
          exact
          path="/home"
          handleLogout={handleLogout}
          component={Home}
        />
      </Switch>
    </Router>
  );
};
