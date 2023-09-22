import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>
        {props.person.name} is {props.person.age} years old!
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
