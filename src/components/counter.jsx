import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    this.setState({ value: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getCountColour()}>{this.state.value}</span>
        <button onClick={this.handleIncrement} className="btn btn-info btn-sm">
          Increment
        </button>
        <button
          onClick={this.handleDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getCountColour() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {}
}

export default Counter;
