import React from "react";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: new Array(9).fill(null),
            count: 0
        };
        this.winnerLine = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
    }

    isWinner = player => {
        for (let i = 0; i < 8; i++) {
            const line = this.winnerLine[i];
            if (this.state.squares[line[0]] === player &&
                this.state.squares[line[1]] === player &&
                this.state.squares[line[2]] === player) {
                return player;
            }
        }
    };

    clickHandler = e => {
        const num = e.target.dataset.num;
        const currentSquare = this.state.squares;
        const player = this.state.count % 2 === 0 ? 'X' : 'O';

        if (currentSquare[num] === null) {
            currentSquare[num] = player;
            this.setState({count: this.state.count + 1});
            this.setState({squares: currentSquare});
        }

        const winner = this.isWinner(player);

        if (winner) {
            setTimeout(() => alert(winner + ' win'), 0);
            setTimeout(() => {
                this.setState({squares: new Array(9).fill(null)});
                this.setState({count: 0})
            }, 1000);
        }
    };

    render() {
        return (
            <div className="tic-tac-toe">
                <div className="tic-tac-toe__cell" onClick={this.clickHandler}
                     data-num="0">{this.state.squares[0]}</div>
                <div className="tic-tac-toe__cell" onClick={this.clickHandler}
                     data-num="1">{this.state.squares[1]}</div>
                <div className="tic-tac-toe__cell" onClick={this.clickHandler}
                     data-num="2">{this.state.squares[2]}</div>
                <div className="tic-tac-toe__cell" onClick={this.clickHandler}
                     data-num="3">{this.state.squares[3]}</div>
                <div className="tic-tac-toe__cell" onClick={this.clickHandler}
                     data-num="4">{this.state.squares[4]}</div>
                <div className="tic-tac-toe__cell" onClick={this.clickHandler}
                     data-num="5">{this.state.squares[5]}</div>
                <div className="tic-tac-toe__cell" onClick={this.clickHandler}
                     data-num="6">{this.state.squares[6]}</div>
                <div className="tic-tac-toe__cell" onClick={this.clickHandler}
                     data-num="7">{this.state.squares[7]}</div>
                <div className="tic-tac-toe__cell" onClick={this.clickHandler}
                     data-num="8">{this.state.squares[8]}</div>
            </div>
        );
    }
}

export default App;
