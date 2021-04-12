import React, {useState} from "react";
import './App.css';

function App() {
    const [squares, setSquares] = useState(new Array(9).fill(null));
    const [count, setCount] = useState(0);
    const winnerLine = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

    const isWinner = player => {
        const squaresPlayer = squares.reduce((indexes, item, index) => {
            return item === player ? [...indexes, index] : indexes
        }, []);

        const win = winnerLine.some(itemSome => {
            return itemSome.every(itemEvery => squaresPlayer.includes(itemEvery))
        });

        return win && player
    };

    const clickHandler = e => {
        const num = e.target.dataset.num;
        const player = count % 2 === 0 ? 'X' : 'O';

        if (squares[num] === null) {
            squares[num] = player;
            setCount(count + 1);
            setSquares(squares)
        }

        const winner = isWinner(player);

        if (winner) {
            setTimeout(() => alert(winner + ' win'), 0);
            setTimeout(() => {
                setCount(0);
                setSquares(new Array(9).fill(null));
            }, 1000);
        }
    };

    return (
        <div className="tic-tac-toe">
            <div className="tic-tac-toe__cell" onClick={clickHandler} data-num="0">{squares[0]}</div>
            <div className="tic-tac-toe__cell" onClick={clickHandler} data-num="1">{squares[1]}</div>
            <div className="tic-tac-toe__cell" onClick={clickHandler} data-num="2">{squares[2]}</div>
            <div className="tic-tac-toe__cell" onClick={clickHandler} data-num="3">{squares[3]}</div>
            <div className="tic-tac-toe__cell" onClick={clickHandler} data-num="4">{squares[4]}</div>
            <div className="tic-tac-toe__cell" onClick={clickHandler} data-num="5">{squares[5]}</div>
            <div className="tic-tac-toe__cell" onClick={clickHandler} data-num="6">{squares[6]}</div>
            <div className="tic-tac-toe__cell" onClick={clickHandler} data-num="7">{squares[7]}</div>
            <div className="tic-tac-toe__cell" onClick={clickHandler} data-num="8">{squares[8]}</div>
        </div>
    );
}

export default App;
