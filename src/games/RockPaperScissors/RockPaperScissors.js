import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BackButton from "../../util/BackButton";

export default function RockPaperScissors() {
  var ComputerPick = "Rock";
  var UserPick = "Rock";
  const [GameResult, SetGameResult] = useState("not started");
  const classes = useStyles();

  const UpdateComputer = async () => {
    const rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
      ComputerPick = "Rock";
    } else if (rand === 1) {
      ComputerPick = "Paper";
    } else if (rand === 2) {
      ComputerPick = "Scissors";
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
      <div className={classes.Container}>
        <BackButton />
        <div className={classes.Game}>
          <Button
            onClick={() => {
              UpdateGame("Rock");
            }}
          >
            Rock
          </Button>
          <Button
            onClick={() => {
              UpdateGame("Paper");
            }}
          >
            Paper
          </Button>
          <Button
            onClick={() => {
              UpdateGame("Scissors");
            }}
          >
            Scissors
          </Button>
          {GameResult}
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles({
  Container: { height: "100vh", width: "100vw" },
  Game: { margin: "50px" },
});
