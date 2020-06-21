import React from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Counters from "./components/counters";
import Tasks from "./components/tasks";
import "./App.css";
import TimerDisplay from "./components/timerDisplay";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div class="row container-fluid">
        <div class="col-3">
          <SideBar />
        </div>
        <div class="col-9">
          <main className="container">
            <TimerDisplay />
            <Tasks />
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
