import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BackButton from "../../util/BackButton";

import RockImg from "../../pics/Rock.png";
import PaperImg from "../../pics/Paper.png";
import ScissorsImg from "../../pics/Scissors.png";

export default function RockPaperScissors() {
  var ComputerPick = "Rock";
  var UserPick = "Rock";
  const [GameResult, SetGameResult] = useState("");
  const [ComputerPickState, SetComputerPickState] = useState("");
  const classes = useStyles();

  const UpdateComputer = async () => {
    const rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
      ComputerPick = "Rock";
      await SetComputerPickState("Rock");
    } else if (rand === 1) {
      ComputerPick = "Paper";
      await SetComputerPickState("Paper");
    } else if (rand === 2) {
      ComputerPick = "Scissors";
      await SetComputerPickState("Scissors");
    }

    // switch (Math.floor(Math.random() * 3)) {
    //   case 0:
    //     await SetComputerPick("Rock");
    //     break;
    //   case 1:
    //     await SetComputerPick("Paper");
    //     break;
    //   case 2:
    //     await SetComputerPick("Scissors");
    //     break;
    // }
  };

  const FindWinner = () => {
    console.log(UserPick, ComputerPick);
    if (UserPick === ComputerPick) {
      SetGameResult("Draw");
    } else if (UserPick === "Rock") {
      if (ComputerPick === "Paper") {
        SetGameResult("Lost");
      } else {
        SetGameResult("Won");
      }
    } else if (UserPick === "Paper") {
      if (ComputerPick === "Scissors") {
        SetGameResult("Lost");
      } else {
        SetGameResult("Won");
      }
    } else if (UserPick === "Scissors") {
      console.log("Scissors");
      if (ComputerPick === "Rock") {
        SetGameResult("Lost");
      } else if (ComputerPick === "Paper") {
        SetGameResult("Won");
      }
    }
  };

  const UpdateGame = async (NewPick) => {
    UserPick = NewPick;
    await UpdateComputer();
    await FindWinner();
  };

  return (
    <>
      <BackButton />
      <div className={classes.Container}>
        <div className={classes.Game}>
          <Button
            className={classes.Button}
            onClick={() => {
              UpdateGame("Rock");
            }}
          >
            Rock
          </Button>
          <Button
            className={classes.Button}
            onClick={() => {
              UpdateGame("Paper");
            }}
          >
            Paper
          </Button>
          <Button
            className={classes.Button}
            onClick={() => {
              UpdateGame("Scissors");
            }}
          >
            Scissors
          </Button>
          <div className={classes.GameResult}>{GameResult}</div>
          {GameResult !== "" ? (
            <div className={classes.ComputerResults}>
              Computer:{" "}
              {ComputerPickState === "Rock" ? (
                <img src={RockImg} height={125} />
              ) : ComputerPickState === "Paper" ? (
                <img src={PaperImg} height={125} />
              ) : ComputerPickState === "Scissors" ? (
                <img src={ScissorsImg} height={125} />
              ) : null}
            </div>
          ) : (
            <div className={classes.ComputerResults} />
          )}
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles({
  Container: {
    height: "100vh",
    backgroundColor: "rgb(58, 139, 139)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  GameResult: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "30px",
    height: "40px",
  },
  ComputerResults: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "30px",
    height: "125px",
  },
  Button: {
    border: "1px solid",
    margin: "2.5px",
  },
});
