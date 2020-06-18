import React from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import TimerDisplay from "./components/timerDisplay";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <TimerDisplay />
      </main>
    </React.Fragment>
  );
}

export default App;
