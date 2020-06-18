import React from "react";

class Time extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 100, marginLeft: 100 }}>
          {this.props.minutes}:{this.props.seconds}
        </h1>
      </div>
    );
  }
}

export default Time;
