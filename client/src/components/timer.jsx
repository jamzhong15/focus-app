import React, { Component } from "react";
import TimerDisplay from "./timerDisplay";
import TaskTable from "./taskTable";

class Timer extends Component {
  state = {
    title: "",
    duration: 0,
    tasks: [],
  };

  handleFormSubmit = (time, date) => {
    console.log([time]);
    let tasks = [...this.state.tasks];
    tasks.push({
      title: this.state.title,
      duration: time,
      startDate: date,
    });

    this.setState({ title: "", duration: 0, tasks });
  };

  handleInputChange = (e) => {
    this.setState({ title: e.target.value });
  };

  async componentDidMount() {
    const url = "http://localhost:5000/test";
    const response = await fetch(url);
    const data = await response.text();
    console.log(data);
  }

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