import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import TreasureHunt from "./games/TreasureHunt";

export default function AppRoutes() {
  return (
    //https://reactrouter.com/web/guides/quick-start
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/treasure-hunt" component={TreasureHunt} />
      </Switch>
    </Router>
  );
}
