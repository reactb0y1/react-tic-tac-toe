import React, {useState} from "react";
import './App.scss';

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
    const [countStep, setCountStep] = useState(0);
    const [scores, setScores] = useState({X: 0, O: 0});
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
        const player = countStep % 2 === 0 ? 'X' : 'O';

        if (!squares[num].player) {
            squares[num].player = player;
            setCountStep(countStep + 1);
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
        setCountStep(0);
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
            <header className="header">
                <div className="player">
                    <h3 className="player__name">X</h3>
                    <p className="player__count">{scores.X}</p>
                </div>
                <button className="btn btn-reset" onClick={totalReset}>Reset</button>
                <div className="player player--reverse">
                    <h3 className="player__name">O</h3>
                    <p className="player__count">{scores.O}</p>
                </div>
            </header>

            <div className="tic-tac-toe container">
                <ul className="tic-tac-toe__list">
                    {setList}
                </ul>
            </div>
        </>
    );
}

export default App;
