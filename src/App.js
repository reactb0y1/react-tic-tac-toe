import React, {useState} from "react";
import './App.scss';
import Header from "./Header/Header";

function App() {
    const defaultSquares = [
        {id: 0, player: null},
        {id: 1, player: null},
        {id: 2, player: null},
        {id: 3, player: null},
        {id: 4, player: null},
        {id: 5, player: null},
        {id: 6, player: null},
        {id: 7, player: null},
        {id: 8, player: null},
    ];
    const [squares, setSquares] = useState(defaultSquares);
    const [scores, setScores] = useState({X: 0, O: 0});
    const [activePlayer, setActivePlayer] = useState('X');
    const winnerLine = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

    const isWinner = player => {
        const squaresPlayer = squares.reduce((indexes, item, index) => {
            return item.player === player ? [...indexes, index] : indexes
        }, []);

        const win = winnerLine.some(itemSome => {
            return itemSome.every(itemEvery => squaresPlayer.includes(itemEvery))
        });

        const draw = squares.every(square => square.player !== null);

        if (draw) {
            return 'draw';
        }

        if (win) {
            return player;
        }
    };

    const clickHandler = e => {
        const num = e.target.dataset.num;
        const player = activePlayer;

        if (!squares[num].player) {
            squares[num].player = player;
            setActivePlayer(activePlayer === 'X' ? 'O' : 'X');
            setSquares(squares)
        }

        const winner = isWinner(player);

        if (winner === 'draw') {
            setTimeout(reset, 1000);
        } else if (winner) {
            setTimeout(reset, 1000);
            scores[player] = scores[player] + 1;
            setScores(scores)
        }
    };

    const reset = () => {
        setSquares(defaultSquares);
    };

    const totalReset = () => {
        reset();
        setScores({X: 0, O: 0})
    };

    const setList = squares.map(item => {
        const id = item.id;
        return (
            <li
                className="tic-tac-toe__cell"
                onClick={clickHandler}
                key={id}
                data-num={id}
            >{squares[id].player}</li>
        )
    });

    return (
        <>
            <Header scores={scores} totalReset={totalReset} activePlayer={activePlayer}/>
            <div className="tic-tac-toe container">
                <ul className="tic-tac-toe__list">
                    {setList}
                </ul>
            </div>
        </>
    );
}

export default App;
