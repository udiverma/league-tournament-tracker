// Home.js
import * as React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="statsContainer">
        <header className="header">
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
            <button className="btn">STATS</button>
            <button className="btn">PLAYERS</button>
            <button className="btn">TEAMS</button>
            <button className="btn">CHAMPS</button>
            <button className="btn">GAMES</button>
          </div>
        </header>
        <main className="mainContent">
          <article className="article">
            <section className="matchStats">
              <h2 className="matchTitle">Blue Vs. Red</h2>
              <p className="matchDetails">
                <span className="teamBlue">Blue:</span>{" "}
                <span className="percentageBlue">%50</span>
                <br />
                <span className="teamRed">Red:</span>{" "}
                <span className="percentageRed">%50</span>
                <br />
              </p>
              <div className="matchGraph" />
            </section>
          </article>
        </main>
      </section>
    </>
  );
};

export default Home;