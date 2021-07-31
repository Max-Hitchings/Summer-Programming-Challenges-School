import { makeStyles } from "@material-ui/core/styles";
import ChallengeLink from "./util/ChallengeLink";

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <p>Summer coding challenges</p>
        <div>
          <ChallengeLink href="/treasure-hunt" ChallengeName="treasure hunt" />

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
