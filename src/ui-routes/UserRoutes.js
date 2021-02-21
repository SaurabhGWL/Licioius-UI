import React from "react";
import { Switch } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";
import SecuredRoute from "./SecuredRoute";

const Dashboard = Loadable({
  loader: () => import("../ui-pages/UserHome/components/Content/Dashboard"),
  loading: Loading,
});

const UserRoutes = () => {
  return (
    <Switch>
      <SecuredRoute exact path="/user-home" component={Dashboard} />
     
    </Switch>
  );
};

export default UserRoutes;
