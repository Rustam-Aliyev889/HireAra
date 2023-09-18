import React, { Component } from 'react';

class MouseTracker extends Component {
  state = {
    isMouseOver: false,
    timer: null,
    elapsedTime: 0,
  };

  handleMouseEnter = () => {
    this.setState({ isMouseOver: true });
    if (!this.state.timer) {
      this.startTimer();
    }
  };

  handleMouseLeave = () => {
    if (this.state.isMouseOver) {
      this.setState({
        isMouseOver: false,
        elapsedTime: 0,
      });
      this.stopTimer();
    }
  };

  handleMouseMove = () => {
    // Restarts the timer when the mouse moves
    if (this.state.isMouseOver) {
      this.restartTimer();
    }
  };

  startTimer() {
    this.setState({
      timer: setInterval(this.updateTimer, 1000),
    });
  }

  stopTimer() {
    clearInterval(this.state.timer);
    this.setState({ timer: null });
  }

  restartTimer() {
    this.stopTimer();
    this.setState({ elapsedTime: 0 });
    this.startTimer();
  }

  updateTimer = () => {
    if (this.state.isMouseOver) {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    } else {
      this.stopTimer();
    }
  };

  render() {
    return (
      <div
        className='timer'
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseMove={this.handleMouseMove} 
      >
        {this.props.children}
        <p>Mouse is over for: {this.state.elapsedTime} seconds</p>
      </div>
    );
  }
}

export default MouseTracker;

