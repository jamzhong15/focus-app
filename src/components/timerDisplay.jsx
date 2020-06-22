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
    this.props.handleFormSubmit(this.state.currentTime);
  };

  render() {
    const { currentTime } = this.state;
    let seconds = ("0" + (Math.floor(currentTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(currentTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(currentTime / 3600000)).slice(-2);

    return (
      <div className="Stopwatch m-5 text-center">
        <div className="card shadow bg-light mb-3">
          <div className="card-header">TIMER</div>
          <div className="card-body">
            <div className="Stopwatch-display">
              <h1 style={{ fontSize: 90 }}>
                {hours}:{minutes}:{seconds}
              </h1>
            </div>
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="What are you working on?"
                onChange={this.props.handleInputChange}
                id="title"
              ></input>
              {this.state.isTiming === false && this.state.currentTime === 0 && (
                <button
                  className="btn btn-success m-2"
                  onClick={this.startTimer}
                >
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
                <button
                  className="btn btn-danger"
                  onClick={() => this.resetTimer()}
                >
                  Finish
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerDisplay;
