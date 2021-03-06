import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export default function ChallengeLink({
  href = "",
  ChallengeName = "",
  ...props
}) {
  const classes = useStyles();

  return (
    <Button
      className={classes.Link}
      variant="outlined"
      onClick={() => {
        window.location.href = href;
      }}
      {...props}
    >
      {ChallengeName}
    </Button>
  );
}

const useStyles = makeStyles({
  Link: {
    marginLeft: "5px",
    marginRight: "5px",
    color: "red",
    borderWidth: "5px",
  },
  a: { color: "red", textDecoration: "none" },
});
