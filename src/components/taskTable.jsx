import React, { Component } from "react";
import TaskRow from "./taskRow";

class TaskTable extends Component {
  // state = {
  //   tasks: [],
  // };

  // renderTasks = (task, index) => {
  //   return (
  //     <tr key={index}>
  //       <td>{task.title}</td>
  //       <td>{task.duration}</td>
  //     </tr>
  //   );
  // };

  render() {
    const tasks = this.props.tasks;

    return (
      <div className="card shadow bg-light mb-3">
        <div className="card-header">Recents</div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Task</th>
                <th scope="col">Duration</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => {
                return <TaskRow key={index} row={task} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskTable;
