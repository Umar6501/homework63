import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      style={{ borderRadius: props.hasRadius ? "10px" : "" }}
    >
      {props.children}
    </button>
  );
};

export default Button;
