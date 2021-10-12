import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./views/dashboard/index";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
