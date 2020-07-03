import React, { Component } from "react";

class TaskRow extends Component {
  state = {};
  render() {
    const task = this.props.row;

    return (
      <tr>
        <td>{task.title}</td>
        <td>{task.startDate}</td>
        <td>{task.duration}</td>
      </tr>
    );
  }
}

export default TaskRow;
