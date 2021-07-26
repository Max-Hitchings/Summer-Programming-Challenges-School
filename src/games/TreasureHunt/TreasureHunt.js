// import "./TreasureHunt.css";
import { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function TreasureHunt() {
  const [Gold, SetGold] = useState([
    Math.round(Math.random() * 10),
    Math.round(Math.random() * 10),
  ]);
  const [Guesses, setGuesses] = useState([[100, 100]]);
  const [GuessesCount, setGuessesCount] = useState(0);
  const classes = useStyles();

  const NewGold = () => {
    SetGold([Math.round(Math.random() * 10), Math.round(Math.random() * 10)]);
  };

  const CheckForGold = (row, column) => {
    let InGuesses = false;
    var x;
    for (x = 0; x < Guesses.length; x++) {
      if (Guesses[x][0] === row && Guesses[x][1] === column) {
        InGuesses = true;
      }
    }

    if (!InGuesses) {
      setGuesses([...Guesses, [row, column]]);
      setGuessesCount(GuessesCount + 1);
    }

    if (Gold[0] === row && Gold[1] === column) {
      document.getElementById(`row-${row},column-${column}`).className = `${
        document.getElementById(`row-${row},column-${column}`).className
      } Board-Item-Corect`;
    } else {
      document.getElementById(`row-${row},column-${column}`).className = `${
        document.getElementById(`row-${row},column-${column}`).className
      } Board-Item-Incorect`;
    }
  };

  const ColumnGen = (row) => {
    let Columns = [];
    for (let column = 0; column < 10; column++) {
      Columns.push(
        <Grid
          item
          className={classes.BoardItem}
          onClick={() => CheckForGold(row, column)}
          key={`row-${row},column-${column}`}
          id={`row-${row},column-${column}`}
        ></Grid>
      );
    }
    return Columns;
  };

  const BoardGen = () => {
    let Board = [];
    for (let row = 0; row < 10; row++) {
      Board.push([
        <Grid className={classes.BoardRow} key={`row-${row}`} container>
          {ColumnGen(row)}
        </Grid>,
      ]);
    }
    return Board;
  };

  return (
    <>
      <div className={classes.TreasureHunt}>
        <div className={classes.BoardContainer}>{BoardGen()}</div>
        <div className={classes.BoardControls}>
          <div className={classes.GuessesCounter}>Guesses: {GuessesCount}</div>
          <Button>RESET</Button>
        </div>
      </div>
      <div className={classes.BoardControls}>hi</div>
    </>
  );
}

const useStyles = makeStyles({
  TreasureHunt: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgb(58, 139, 139)",
    position: "absolute",
    display: "flex",
  },
  BoardContainer: {
    width: "500px",
    height: "500px",
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "0",
  },
  BoardRow: {
    height: "10%",
  },
  BoardItem: {
    width: "10%",
    height: "100%",
    border: "1px solid",
  },
  BoardControls: {
    width: "150px",
    height: "150px",
    backgroundColor: "orange",
    alignSelf: "center",
    marginLeft: "50px",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  GuessesCounter: {
    marginBottom: "10px",
  },
});
