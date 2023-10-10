import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  decrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter Demo</h1>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.incrementCounter}>Increment Counter</button>&emsp;
        <button onClick={this.decrementCounter}>Decrement Counter</button>
      </div>
    );
  }
}
