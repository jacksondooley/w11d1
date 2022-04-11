import React from "react"

class Tile extends React.Component {
  constructor(props){
    super(props),
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault();
    this.props.updateGame(this.props.tile, event.altKey);
  }

  render() {
    const value = () => {
      if (this.props.tile.bombed && this.props.tile.explored) {
        return '\u{1F4A5}'
      } else if (this.props.tile.flagged) {
        return "\u{1F6A9}";
      } else if (this.props.tile.explored && this.props.tile.adjacentBombCount() > 0) {
        return this.props.tile.adjacentBombCount()
      }
    }

    const explored = () => {
      return this.props.tile.explored ? "explored" : "unexplored"
    }

    const bombed = () => {
      return this.props.tile.bombed ? " bombed" : ""
    }

    const flagged = () => {
      return this.props.tile.flagged ? " flagged" : ""
    }

    return (
      <div 
      onClick = {this.handleClick}
      className={"tile " + explored() + bombed() + flagged()}>
        {value()}
      </div>
    )
  }
}

export default Tile;