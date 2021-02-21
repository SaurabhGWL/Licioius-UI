import React from "react";
import { Route } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";

const Login = Loadable({
  loader: () => import("../ui-pages/Login"),
  loading: Loading
});

const OrderManagement = Loadable({
  loader: () => import("../ui-pages/UserHome/components/Content/OrderManagement"),
  loading: Loading
});



const MainRoutes = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />     {/*Login component should be changed back to Dashboard*/}
      <Route path="/user-home" component={OrderManagement} />
    </div>
  )
}

export default MainRoutes;
