//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

// function App() {
//   //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

//   const number = 0;

//   const [homeScore, setHomeScore] = useState(number);
//   const [awayScore, setAwayScore] = useState(number);
  

//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);

//   useEffect(() => {
//     if (seconds >= 0) {
//       setTimeout(() => setSeconds(seconds + 1), 1000);
      
//     } else {
//       setSeconds('BOOOOM!');
//     }
//     if (minutes >= 0) {
//       setTimeout(() => setMinutes(minutes + 1), 60000);
//     } else {
//       setMinutes('YAYYYY')
//     }

//   });


//   //creating event to added it to the click handler
//   //touchdown score is 7
//   const homeScoreTouchdown = () => setHomeScore(homeScore + 7);
//   const awayScoreTouchdown = () => setAwayScore(awayScore + 7);

//   //field score is 3
//   const homeScoreField = () => setHomeScore(homeScore + 3);
//   const awayScoreField = () => setAwayScore(awayScore + 3);

//   return (
//     <div className="container">
//       <section className="scoreboard">
//         <div className="topRow">
//           <div className="home">
//             <h2 className="home__name">Lions</h2>

//             {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
//   <div className="home__score">{homeScore}</div>
//           </div>
//   <div className="timer">{minutes}:{seconds}</div>
//           <div className="away">
//             <h2 className="away__name">Tigers</h2>
//   <div className="away__score">{awayScore}</div>
//           </div>
//         </div>
//         <BottomRow />
//       </section>
//       <section className="buttons">
//         <div className="homeButtons">

//           {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
//           {/* added onClick handlers with variables added before */}
//           <button onClick = {homeScoreTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
//           <button onClick = {homeScoreField} className="homeButtons__fieldGoal">Home Field Goal</button>
//         </div>
//         <div className="awayButtons">
//           <button onClick = {awayScoreTouchdown} className="awayButtons__touchdown">Away Touchdown</button>
//           <button onClick = {awayScoreField} className="awayButtons__fieldGoal">Away Field Goal</button>
//         </div>
//       </section>
//     </div>
//   );
// }

//this is for soccer team
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const number = 0;

  const [homeScore, setHomeScore] = useState(number);
  const [awayScore, setAwayScore] = useState(number);
  
//this is a scoreboard timer
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (seconds >= 0) {
      setTimeout(() => setSeconds(seconds + 1), 1000);
      
    } else {
      setSeconds('BOOOOM!');
    }
    if (minutes >= 0) {
      setTimeout(() => setMinutes(minutes + 1), 60000);
    } else {
      setMinutes('YAYYYY')
    }

  });


  //creating event to added it to the click handler
  //touchdown score is 7
  const homeScoreGoal = () => setHomeScore(homeScore + 1);
  const awayScoreGoal = () => setAwayScore(awayScore + 1);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Barcelona</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  <div className="home__score">{homeScore}</div>
          </div>
  <div className="timer">{minutes}:{seconds}</div>
          <div className="away">
            <h2 className="away__name">Real Madrid</h2>
  <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* added onClick handlers with variables added before */}
          <button onClick = {homeScoreGoal} className="homeButtons__touchdown">Home Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {awayScoreGoal} className="awayButtons__touchdown">Away Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
