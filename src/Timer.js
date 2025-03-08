import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
  }

  clockTick = () => {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  };

  // ✅ Start the timer when the component mounts
  componentDidMount() {
    this.interval = setInterval(() => this.clockTick(), 1000);
  }

  // ✅ Stop the timer when the component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Time: {this.state.time} seconds</div>;
  }
}

export default Timer;
