// import "./TreasureHunt.css";
import { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function TreasureHunt() {
  const [Gold, SetGold] = useState([
    Math.round(Math.random() * 10),
    Math.round(Math.random() * 10),
  ]);
  const [Guesses, setGuesses] = useState([]);
  const [GuessesCount, setGuessesCount] = useState(0);
  const classes = useStyles();

  const NewGold = () => {
    SetGold([Math.round(Math.random() * 10), Math.round(Math.random() * 10)]);
  };

  const ResetHandler = () => {
    console.log("shush");
    SetGold([Math.round(Math.random() * 10), Math.round(Math.random() * 10)]);
    setGuesses([]);
    setGuessesCount(0);

    const BoardItems = document.getElementsByClassName(classes.BoardItem);
    for (var i = 0; i < BoardItems.length; i++) {
      BoardItems[i].classList.remove("Board-Item-Incorect");
      BoardItems[i].classList.remove("Board-Item-Corect");
    }
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
      document
        .getElementById(`row-${row},column-${column}`)
        .classList.add("Board-Item-Corect");
    } else {
      console.log(
        document
          .getElementById(`row-${row},column-${column}`)
          .classList.add("Board-Item-Incorect")
      );
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
        <div className={classes.BoardContainer} id="BoardContainer">
          {BoardGen()}
        </div>
        <div className={classes.BoardControls}>
          <div className={classes.GuessesCounter}>Guesses: {GuessesCount}</div>
          <Button
            onClick={() => {
              ResetHandler();
            }}
          >
            RESET
          </Button>
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
    width: "100px",
    height: "500px",
    // background:
    //   "radial-gradient(circle, rgba(62,103,228,1) 0%, rgba(58,139,139,1) 100%)",
    // background: "red",
    // borderRadius: "75px",
    border: "1px solid",
    alignSelf: "center",
    marginLeft: "10px",
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
