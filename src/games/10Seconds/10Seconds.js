import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BackButton from "../../util/BackButton";

export default function Guess10Seconds() {
  const classes = useStyles();

  const [GuessTime, setGuessTime] = useState(0);
  const [GameStarted, setGameStarted] = useState(false);
  const [StartTime, setStartTime] = useState(0);
  const [TimeTaken, setTimeTaken] = useState(0);

  const startGame = () => {
    setStartTime(new Date());
    setGameStarted(true);
  };

  const endGame = () => {
    setTimeTaken(new Date() - StartTime);
    setGameStarted(false);
  };

  return (
    <>
      <BackButton />
      <div className={classes.root}>
        {GameStarted ? (
          <Button
            variant="contained"
            onClick={() => {
              endGame();
            }}
          >
            END GAME
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              startGame();
            }}
          >
            START GAME
          </Button>
        )}

        <div>Your time is {TimeTaken / 1000} seconds</div>
      </div>
    </>
  );
}

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundColor: "rgb(58, 139, 139)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bolder",
    fontSize: "30px",
  },
});