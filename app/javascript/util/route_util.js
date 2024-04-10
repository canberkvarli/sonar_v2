import React from "react";
import { useSelector } from "react-redux";
import { Route, redirect } from "react-router-dom";

export const AuthRoute = ({ component: Component, path, exact }) => {
  const loggedIn = useSelector((state) => Boolean(state.session.id));

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => (!loggedIn ? <Component {...props} /> : redirect("/"))}
    />
  );
};

export const ProtectedRoute = ({ component: Component, path, exact }) => {
  const loggedIn = useSelector((state) => Boolean(state.session.id));

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        loggedIn ? <Component {...props} /> : redirect("/login")
      }
    />
  );
};
