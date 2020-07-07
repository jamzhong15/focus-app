import React from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import "./App.css";
import Timer from "./components/timer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="row container-fluid">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-9">
          <Timer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
