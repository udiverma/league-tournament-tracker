// Header.js
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav className="nav">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/04ef114c6dcb9e754879a1cfa4c5c9f21d55b37953fc736ca96554dd3a0f73c8?apiKey=28325f7459f743cbaa61f77fd7d719c3&"
              alt="Gobbler Gauntlet"
              className="logo"
            />
            <div className="title">GOBBLER GAUNTLET STATS</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/899ac71b8487584df57b67063f6bccdca8a11745cd19478134cd9f31fd02c3fc?apiKey=28325f7459f743cbaa61f77fd7d719c3&"
              alt="Stats Icon"
              className="statsIcon"
            />
          </nav>
        <div className="buttons">
            <Link to="/">
            <button className="btn">STATS</button>
            </Link>
            <Link to="/players">
            <button className="btn">PLAYERS</button>
            </Link>
            <Link to="/teams">
            <button className="btn">TEAMS</button>
            </Link>
            <Link to="/champs">
            <button className="btn">CHAMPS</button>
            </Link>
            <Link to="/games">
            <button className="btn">GAMES</button>
            </Link>
        </div>
      </div>
  );
};

export default Header;