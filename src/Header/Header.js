import Mode from '../Mode/Mode'
import cn from 'classnames';
import './Header.scss';

const Header = ({scores, totalReset, activePlayer}) => {

    return (
        <header className="header">
            <div className={cn("player", {'active': activePlayer === 'X'})}>
                <h3 className="player__name">X</h3>
                <p className="player__count">{scores.X}</p>
            </div>
            <Mode totalReset={totalReset}/>
            <div className={cn("player", {'active': activePlayer === 'O'})}>
                <h3 className="player__name">O</h3>
                <p className="player__count">{scores.O}</p>
            </div>
        </header>
    )

};
export default Header
