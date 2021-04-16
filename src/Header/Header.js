import Mode from '../Mode/Mode'
import './Header.scss';

const Header = ({scores, totalReset}) => {

    return (
        <header className="header">
            <div className="player">
                <h3 className="player__name">X</h3>
                <p className="player__count">{scores.X}</p>
            </div>
            <button className="btn btn-reset" onClick={totalReset}>Reset</button>
            <Mode/>
            <div className="player player--reverse">
                <h3 className="player__name">O</h3>
                <p className="player__count">{scores.O}</p>
            </div>
        </header>
    )

};
export default Header
