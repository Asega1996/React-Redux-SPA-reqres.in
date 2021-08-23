import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { RootState } from "store/reducers";
import { isLogged } from "utils/authz";

const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
  const { token } = useSelector((state: RootState) => state.authz);
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLogged(token) && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
