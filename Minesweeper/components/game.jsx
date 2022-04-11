import React from "react";
import Board from "./board.jsx";
import * as Minesweeper from "../minesweeper.js";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      board: new Minesweeper.Board(9, 9)

    }
    this.updateGame = this.updateGame.bind(this)
  }

  updateGame(tile, flagged) {
    flagged ? tile.toggleFlag() : tile.explore()
    this.setState({ board: this.state.board})
  }


  render() {
    const won = this.state.board.won() ? "You won" : ""
    const lost = this.state.board.lost() ? "You Suck(lost)" : ""

    return (
      <div>
        <h1>{won}{lost}</h1>
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
      
    )
  }
}

export default Game;