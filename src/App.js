//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [scoreHome, setScoreHome ] = useState(0);
const [scoreAway, setScoreAway] = useState(0);

const add7Home = event => {
  setScoreHome(scoreHome + 7);
};

const add3Home = event => {
  setScoreHome(scoreHome + 3);
};

const add7Away = event => {
  setScoreAway(scoreAway + 7);
};

const add3Away = event => {
  setScoreAway(scoreAway +3);
};

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score">{scoreHome}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
  <div className="away__score">{scoreAway}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {add7Home} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {add3Home} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {add7Away} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {add3Away} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
