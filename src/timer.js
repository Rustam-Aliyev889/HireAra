import React, { Component } from 'react';

class MouseTracker extends Component {
  state = {
    isMouseOver: false, // tracks whether the mouse pointer is currently over the element
    timer: null, //  stores the ID of the interval timer used to update the elapsed time
    elapsedTime: 0, // stores the elapsed time in seconds while the mouse is over the element
  };

  // starts the timer to update elapsedTime by a second
  handleMouseEnter = () => {
    this.setState({ isMouseOver: true });
    if (!this.state.timer) {
      this.startTimer();
    }
  };

  // when the mouse pointer leaves the element, resets elapsedTime to 0, and stops the timer
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

  //  sets timer to null
  stopTimer() {
    clearInterval(this.state.timer);
    this.setState({ timer: null });
  }

  //  resets elapsedTime to 0, and starts a new timer
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
        <p>You have been hypnotized for: {this.state.elapsedTime} seconds</p>
      </div>
    );
  }
}

export default MouseTracker;

