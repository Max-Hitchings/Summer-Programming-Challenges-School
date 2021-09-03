import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function BackButton() {
  const classes = useStyles();

  return (
    <Button className={classes.BackButton} variant="contained" href="/">
      BACK
    </Button>
  );
}

const useStyles = makeStyles({
  BackButton: {
    position: "static",
    margin: "15px",
    backgroundColor: "rgb(0, 183, 255)",
    fontWeight: "1000",
    zIndex: 20,
  },
});
