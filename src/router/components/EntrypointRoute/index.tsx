import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { RootState } from "store/reducers";
import { isLogged } from "utils/authz";

const EntrypointRoute = ({ ...props }) => {
  const { token } = useSelector((state: RootState) => state.authz);

  return (
    <Route
      {...props}
      render={() =>
        isLogged(token) ? <Redirect to="/users" /> : <Redirect to="/login" />
      }
    />
  );
};

export default EntrypointRoute;
