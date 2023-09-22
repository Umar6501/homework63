import React, { Component } from "react";

export class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Good morning!",
    };
  }

  changeMessage() {
    this.setState({
      message: "Good afternoon!",
    });
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.changeMessage()}>Change message</button>
      </div>
    );
  }
}

export default Message;
