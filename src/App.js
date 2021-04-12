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
    const [count, setCount] = useState(0);
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

        return win && player
    };

    const clickHandler = e => {
        const num = e.target.dataset.num;
        const player = count % 2 === 0 ? 'X' : 'O';

        if (!squares[num].player) {
            squares[num].player = player;
            setCount(count + 1);
            setSquares(squares)
        }

        const winner = isWinner(player);

        if (winner) {
            setTimeout(() => alert(winner + ' win'), 0);
            setTimeout(reset, 1000);
        }
    };

    const reset = () => {
        setCount(0);
        setSquares(defaultSquares);
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
        <div className="tic-tac-toe container">

            <button
                className="tic-tac-toe__reset"
                onClick={reset}
            >Reset</button>

            <ul className="tic-tac-toe__list">
                {setList}
            </ul>

        </div>
    );
}

export default App;
