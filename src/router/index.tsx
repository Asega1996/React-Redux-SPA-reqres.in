import React from "react";
import { Switch } from "react-router-dom";
import Login from "screens/LoginScreen";
import UsersList from "screens/UsersScreen";
import EntrypointRoute from "./components/EntrypointRoute";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import UnmatchedRoute from "./components/UnmatchedRoute";

const Routes = () => {
  return (
    <Switch>
      <EntrypointRoute exact path="/" />

      {/* Public/Restricted Routes */}
      <PublicRoute exact path="/login" restricted component={() => <Login />} />

      {/* Private Routes */}
      <PrivateRoute exact path="/users" component={() => <UsersList />} />

      {/* Unmatched Routes -> Show 404 custom screen */}
      <UnmatchedRoute />
    </Switch>
  );
};

export default Routes;
