import React from "react";
import { useSelector, useNavigate } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const AuthRoute = ({ component: Component, path, exact }) => {
  const loggedIn = useSelector((state) => Boolean(state.session.id));
  const navigate = useNavigate();

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => (!loggedIn ? <Component {...props} /> : navigate("/"))}
    />
  );
};

export const ProtectedRoute = ({ component: Component, path, exact }) => {
  const loggedIn = useSelector((state) => Boolean(state.session.id));
  const navigate = useNavigate();

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        loggedIn ? <Component {...props} /> : navigate("/login")
      }
    />
  );
};

// LEGACY CODE

// import React from "react";
// import { connect } from "react-redux";
// import { Route, Redirect, withRouter } from "react-router-dom";

// const Auth = ({ component: Component, path, loggedIn, exact }) => (
//   <Route
//     path={path}
//     exact={exact}
//     render={(props) =>
//       !loggedIn ? <Component {...props} /> : <Redirect to="/" />
//     }
//   />
// );

// const Protected = ({ component: Component, path, loggedIn, exact }) => (
//   <Route
//     path={path}
//     exact={exact}
//     render={(props) =>
//       loggedIn ? <Component {...props} /> : <Redirect to="/login" />
//     }
//   />
// );

// const mapStateToProps = (state) => ({ loggedIn: Boolean(state.session.id) });

// export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

// export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
