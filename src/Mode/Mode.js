import {useState} from 'react';
import cn from 'classnames';
import './Mode.scss';

const Mode = ({totalReset}) => {

    const modes = [
        {mode: 'comp', text: "Player VS Computer"},
        {mode: 'players', text: "Player VS Player"},
    ];

    const [unActiveMode, setUnActiveMode] = useState(false);

    const [activeMode, setActiveMode] = useState(modes[0].mode);

    const modeChange = bar => {
        setActiveMode(bar);
        setUnActiveMode(true)
    };

    const resetClick = () => {
        totalReset();
        setUnActiveMode(false)
    };

    const setList = modes.map(item => (
        <li
            key={item.mode}
            className={cn({'active': activeMode === item.mode}, 'mode__item')}
            onClick={() => modeChange(item.mode)}
        >{item.text}</li>
    ));

    return (
        <div className={'mode'}>
            <button className="btn btn-reset" onClick={resetClick}>Reset</button>
            <ul className={cn('mode__list', {'un-active': unActiveMode})}>
                {setList}
            </ul>
        </div>
    )
};

export default Mode
