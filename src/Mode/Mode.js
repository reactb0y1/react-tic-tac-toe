import {useState} from 'react';
import cn from 'classnames';
import './Mode.scss';

const Mode = () => {

    const modes = [
        {mode: 'comp', text: "Player VS Computer"},
        {mode: 'players', text: "Player VS Player"},
    ];

    const [activeMode, setActiveMode] = useState(modes[0].mode);

    const setList = modes.map(item => (
        <li
            key={item.mode}
            className={cn({'active': activeMode === item.mode}, 'mode')}
            onClick={() => setActiveMode(item.mode)}
        >{item.text}</li>
    ));

    return (
        <ul>
            {setList}
        </ul>
    )
};

export default Mode
