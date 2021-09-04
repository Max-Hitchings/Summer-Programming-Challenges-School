import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import ChallengeLink from "./util/ChallengeLink";
import * as Challenges from "./util/ChallengeMetaData.json";

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <p>Summer Coding Challenges</p>
        <div>
          <ChallengeLink
            href={Challenges.TreasureHunt.href}
            ChallengeName={Challenges.TreasureHunt.ChallengeName}
          />

          <ChallengeLink href="/10-seconds" ChallengeName="guess 10 seconds" />

          <ChallengeLink
            href="/rock-paper-scissors"
            ChallengeName="rock paper scissors"
          />

          <ChallengeLink
            href="https://www.cipher.max-hitchings.com/"
            ChallengeName="ceaser cipher"
          />
        </div>
      </header>
    </div>
  );
}

const useStyles = makeStyles({
  App: {
    textAlign: "center",
  },
  AppHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
});
