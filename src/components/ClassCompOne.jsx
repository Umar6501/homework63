import React, { Component } from "react";

class ClassCompOne extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: "John",
        age: 30,
      },
    };
  }

  greet() {
    console.log("Hello " + this.state.person.name);
  }

  render() {
    // let person = {
    //   name: "John",
    //   age: 30,
    // };

    // function greet() {
    //   console.log("Hello world!");
    // }
    // greet();

    this.greet();

    return (
      <div>
        {/* <h1>
          His name is {person.name}, he is {person.age} years old
        </h1> */}
        <h1>
          His name is {this.state.person.name}, he is {this.state.person.age}
          years old
        </h1>
      </div>
    );
  }
}

export default ClassCompOne;
