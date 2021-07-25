import { Grid, Paper } from "@material-ui/core";

export default function TreasureHunt() {
  const BoardGen = () => {
    let Board = [];
    for (let i = 1; i < 10; i++) {
      Board.push([
        <Grid className="Board-Row" container>
          <Grid item className="Board-Item"></Grid>
          <Grid item className="Board-Item"></Grid>
          <Grid item className="Board-Item"></Grid>
          <Grid item className="Board-Item"></Grid>
          <Grid item className="Board-Item"></Grid>
          <Grid item className="Board-Item"></Grid>
          <Grid item className="Board-Item"></Grid>
          <Grid item className="Board-Item"></Grid>
          <Grid item className="Board-Item"></Grid>
          <Grid item className="Board-Item"></Grid>
        </Grid>,
      ]);
    }
    return Board;
  };

  return (
    <div className="Treasure-Hunt">
      <div className="Board-Container">{BoardGen()}</div>
    </div>
  );
}
