import React, { Component } from "react";
import TimerDisplay from "./timerDisplay";
import TaskTable from "./taskTable";

// Todo:
// tasks state out of sync, needs to be fixed

class Timer extends Component {
  state = {
    title: "",
    duration: 0,
    tasks: [],
  };

  handleFormSubmit = (data) => {
    let tasks = [...this.state.tasks];
    tasks.unshift({
      title: this.state.title,
      duration: data.elapsed,
      startDate: data.startDate,
    });
    console.log(tasks);
    this.setState({ title: "", duration: 0, tasks });
    this.postSubmission();
  };

  postSubmission = async () => {
    const response = await fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.tasks),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(JSON.stringify(data));
    }
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
