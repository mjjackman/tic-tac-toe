import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: ""
    }
    this.press = this.press.bind(this);
  }
  render() {
    return (
      <div className="square" onClick={ this.press }>{this.state.symbol}
      </div>);
  }

  press() {
    if (!this.state.symbol) {
      this.setState({ symbol: this.props.currentPlayer });
    }
  }
}

export default Square;