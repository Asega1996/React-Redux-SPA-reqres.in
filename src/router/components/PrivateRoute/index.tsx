import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { RootState } from "store/reducers";
import { isLogged } from "utils/authz";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useSelector((state: RootState) => state.authz);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLogged(token) ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
