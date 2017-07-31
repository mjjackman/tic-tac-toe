import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 0,
      currentPlayer: "X"
    }
    this.press = this.press.bind(this);
  }
  renderBoard() {
    this.boxArray = [];
    for (var i = 0; i < 9; ++i) {
      this.boxArray.push(<Square key={i} currentPlayer={ this.state.currentPlayer }/>);
    }
    return this.boxArray;
  }
  render() {
      return (
        <div className="board" onClick={ this.press }>{ this.renderBoard() }</div>
      );
    }

  press() {
    if (this.state.currentPlayer === "X") {
      this.setState({currentPlayer: "O"});
    } else {
      this.setState({currentPlayer: "X"});
    }
    this.setState({turn: this.state.turn + 1});
    // console.log(this.state.currentPlayer);
    // console.log(this.boxArray.map((square) => {
    //   return square;
    // }));
  }

  finish() {
  }
}

export default Board;