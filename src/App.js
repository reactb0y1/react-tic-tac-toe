import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squares: new Array(9).fill(null),
        count: 0
    }
  }

  clickHandler = e => {
    let num = e.target.dataset.num;
    let currentSquare = this.state.squares;
      if (currentSquare[num] === null) {
          currentSquare[num] = this.state.count % 2 === 0 ? 'X' : 'O';
          this.setState({count: this.state.count + 1});
          this.setState({squares: currentSquare});
      }
  };

  render() {
    return (
      <div className="tic-tac-toe">
        <div className="tic-tac-toe__cell" onClick={this.clickHandler} data-num="0">{this.state.squares[0]}</div>
        <div className="tic-tac-toe__cell" onClick={this.clickHandler} data-num="1">{this.state.squares[1]}</div>
        <div className="tic-tac-toe__cell" onClick={this.clickHandler} data-num="2">{this.state.squares[2]}</div>
        <div className="tic-tac-toe__cell" onClick={this.clickHandler} data-num="3">{this.state.squares[3]}</div>
        <div className="tic-tac-toe__cell" onClick={this.clickHandler} data-num="4">{this.state.squares[4]}</div>
        <div className="tic-tac-toe__cell" onClick={this.clickHandler} data-num="5">{this.state.squares[5]}</div>
        <div className="tic-tac-toe__cell" onClick={this.clickHandler} data-num="6">{this.state.squares[6]}</div>
        <div className="tic-tac-toe__cell" onClick={this.clickHandler} data-num="7">{this.state.squares[7]}</div>
        <div className="tic-tac-toe__cell" onClick={this.clickHandler} data-num="8">{this.state.squares[8]}</div>
      </div>
    );
  }
}

export default App;
