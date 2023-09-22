import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrement() {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0,
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => this.incrementFive()}>Increment 5</button>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export default Counter;
