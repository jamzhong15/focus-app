import React, { Component } from "react";
import TaskRow from "./taskRow";

class Tasks extends Component {
  state = {
    tasks: [
      { title: "hello", duration: 16 },
      { title: "hello2", duration: 18 },
    ],
  };

  renderTasks = (task, index) => {
    return (
      <tr key={index}>
        <td>{task.title}</td>
        <td>{task.duration}</td>
      </tr>
    );
  };

  render() {
    return (
      <div className="card shadow bg-light mb-3">
        <div className="card-header">Recents</div>
        <div className="card-body">
          <p className="card-text">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              {/* <tbody>{this.state.tasks.map(this.renderTasks)}</tbody> */}
              <TaskRow task={this.state.tasks[0]} />
            </table>
          </p>
        </div>
      </div>
    );
  }
}

export default Tasks;
