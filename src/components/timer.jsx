import React, { Component } from "react";
import TimerDisplay from "./timerDisplay";
import TaskTable from "./taskTable";

class Timer extends Component {
  state = {
    title: "",
    duration: 0,
    tasks: [],
  };

  handleFormSubmit = (time) => {
    console.log([time]);
    let tasks = [...this.state.tasks];
    tasks.push({
      title: this.state.title,
      duration: time,
    });

    this.setState({ title: "", duration: 0, tasks });
  };

  handleInputChange = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <main className="container">
        <TimerDisplay
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <TaskTable tasks={this.state.tasks} />
      </main>
    );
  }
}

export default Timer;