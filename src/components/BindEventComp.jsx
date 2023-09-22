import React, { Component } from "react";

export class BindEventComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // this.increment = this.increment.bind(this);
  }

  //   increment() {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        {/* <button onClick={this.increment}>Increment</button> */}

        {/* <button onClick={this.increment.bind(this)}>Increment</button> */}
        {/* <button onClick={() => this.increment()}>Increment</button> */}
        {/* <button onClick={this.increment}>Increment</button> */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default BindEventComp;
