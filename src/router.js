import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Dashboard from "./Dashboard";
import TreasureHunt from "./games/TreasureHunt/TreasureHunt";
import Guess10Seconds from "./games/10Seconds/10Seconds";
import RockPaperScissors from "./games/RockPaperScissors/RockPaperScissors";

export default function AppRoutes() {
  const classes = useStyles();
  document.body.classList.add(classes.root);

  return (
    //https://reactrouter.com/web/guides/quick-start
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/treasure-hunt" component={TreasureHunt} />
        <Route exact path="/10-seconds" component={Guess10Seconds} />
        <Route
          exact
          path="/rock-paper-scissors"
          component={RockPaperScissors}
        />
      </Switch>
    </Router>
  );
}

const useStyles = makeStyles({
  root: { margin: 0, fontFamily: "Segoe UI, Roboto" },
});
