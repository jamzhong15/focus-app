import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span className="">{this.state.count}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {}
}

export default Counter;
