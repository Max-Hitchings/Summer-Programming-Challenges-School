import { useState, useEffect } from "react";
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
  const [GameScore, SetGameScore] = useState({
    player: parseInt(0),
    computer: parseInt(0),
  });
  const classes = useStyles();

  // useEffect(() => {
  //   console.log(GameResult);
  //   if (GameResult === "Won") {
  //     SetGameScore({
  //       player: GameResult.player + 1,
  //       computer: GameResult.computer,
  //     });
  //   }
  // }, [GameResult]);

  const WinCase = () => {
    SetGameResult("Won");
    console.log(GameScore, "win", GameScore.player + 1);
    SetGameScore({
      player: GameScore.player + 1,
      computer: GameScore.computer,
    });
  };

  const LoseCase = () => {
    SetGameResult("Lost");
    console.log(GameScore, "lose", GameScore.player + 1);

    SetGameScore({
      player: GameScore.player,
      computer: GameScore.computer + 1,
    });
  };

  const DrawCase = () => {
    SetGameResult("Draw");
  };

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
    if (UserPick === ComputerPick) {
      DrawCase();
    } else if (UserPick === "Rock") {
      if (ComputerPick === "Paper") {
        LoseCase();
      } else {
        WinCase();
      }
    } else if (UserPick === "Paper") {
      if (ComputerPick === "Scissors") {
        LoseCase();
      } else {
        WinCase();
      }
    } else if (UserPick === "Scissors") {
      if (ComputerPick === "Rock") {
        LoseCase();
      } else if (ComputerPick === "Paper") {
        WinCase();
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
          <div
            className={classes.GameScore}
          >{`${GameScore.player} - ${GameScore.computer}`}</div>
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
          {GameScore.player}
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
  GameScore: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "30px",
    height: "40px",
    marginBottom: "10px",
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
