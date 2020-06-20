import React from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Counters from "./components/counters";
import Task from "./components/task";
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
            <Task />
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
