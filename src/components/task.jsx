import React, { Component } from "react";

class Task extends Component {
  state = {};
  render() {
    return (
      <div className="card shadow bg-light mb-3">
        <div className="card-header">Tasks</div>
        <div className="card-body">
          <h5 className="card-title">Light card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default Task;
