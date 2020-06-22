import React from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import "./App.css";
import Timer from "./components/timer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div class="row container-fluid">
        <div class="col-3">
          <SideBar />
        </div>
        <div class="col-9">
          <Timer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
