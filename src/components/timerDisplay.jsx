import React, { Component } from "react";

class TimerDisplay extends Component {
  state = { isTiming: false, currentTime: 0, timeElapsed: 0 };

  startTimer = () => {
    this.setState({
      isTiming: true,
      currentTime: this.state.currentTime,
      timeElapsed: Date.now() - this.state.currentTime,
    });

    this.timer = setInterval(() => {
      this.setState({
        currentTime: Date.now() - this.state.timeElapsed,
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ isTiming: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({ currentTime: 0, timeElapsed: 0 });
  };

  render() {
    const { currentTime } = this.state;
    let seconds = ("0" + (Math.floor(currentTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(currentTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(currentTime / 3600000)).slice(-2);

    return (
      <div className="Stopwatch jumbotron m-5 text-center">
        <div className="Stopwatch-header">Stopwatch</div>
        <div className="Stopwatch-display">
          <h1 style={{ fontSize: 100 }}>
            {hours}:{minutes}:{seconds}
          </h1>
        </div>
        {this.state.isTiming === false && this.state.currentTime === 0 && (
          <button className="btn btn-info m-2" onClick={this.startTimer}>
            Start
          </button>
        )}
        {this.state.isTiming === true && (
          <button className="btn btn-info m-2" onClick={this.stopTimer}>
            Stop
          </button>
        )}
        {this.state.isTiming === false && this.state.currentTime > 0 && (
          <button className="btn btn-info m-2" onClick={this.startTimer}>
            Resume
          </button>
        )}
        {this.state.isTiming === false && this.state.currentTime > 0 && (
          <button className="btn btn-info" onClick={this.resetTimer}>
            Reset
          </button>
        )}
      </div>
    );
  }
}

export default TimerDisplay;
