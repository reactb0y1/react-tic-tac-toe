import {useState} from 'react';
import cn from 'classnames';
import './Mode.scss';

const Mode = ({totalReset}) => {

    const modes = [
        {mode: 'comp', text: "Player VS Computer"},
        {mode: 'players', text: "Player VS Player"},
    ];

    const [activeMode, setActiveMode] = useState(modes[0].mode);

    const setList = modes.map(item => (
        <li
            key={item.mode}
            className={cn({'active': activeMode === item.mode}, 'mode__item')}
            onClick={() => setActiveMode(item.mode)}
        >{item.text}</li>
    ));

    return (
        <div className='mode'>
            <button className="btn btn-reset" onClick={totalReset}>Reset</button>
            <ul className='mode__list'>
                {setList}
            </ul>
        </div>
    )
};

export default Mode
