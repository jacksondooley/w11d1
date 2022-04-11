import React from 'react';
import Tile from "./tile.jsx"

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      board: 5
    }
  }

  render () {
    return (
      <div>
        {this.props.board.grid.map((row, i) => {
          return <div className={"row"} key={i}>{row.map((tile, j) => {
            return (
              <Tile tile={tile} updateGame={this.props.updateGame}/>  
            )
          })}</div>
        })}
      </div>
    )
  }
}

export default Board;
