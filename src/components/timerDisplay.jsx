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

  // convertSeconds(secs) {
  //     const hours = Math.floor(secs/ 60*60);
  //     let excludeHours = secs % (60*60);
  //     const minutes = Math.floor(excludeHours / 60);
  //     let excludeMinutes = secs % (excludeHours % 60);
  //     const seconds = Math.ceil(excludeMinutes);

  //     let time = {
  //         h: hours,
  //         m: minutes,
  //         s: seconds
  //     };
  //     return time;
  // }

  render() {
    const { currentTime } = this.state;
    let seconds = ("0" + (Math.floor(currentTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(currentTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(currentTime / 3600000)).slice(-2);

    return (
      <div className="Stopwatch">
        <div className="Stopwatch-header">Stopwatch</div>
        <div className="Stopwatch-display">
          {hours} : {minutes} : {seconds}
        </div>
        {this.state.isTiming === false && this.state.currentTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.isTiming === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.isTiming === false && this.state.currentTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.isTiming === false && this.state.currentTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

export default TimerDisplay;
