import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <p>Summer coding challenges</p>
        <div>
          <button>
            <Link to="/treasure-hunt">treasure-hunt</Link>
          </button>
          <button>
            <Link to="/10-seconds">guess 10 seconds</Link>
          </button>
          <button>
            <a href="https://www.cipher.max-hitchings.com/">ceaser cipher</a>
          </button>
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
