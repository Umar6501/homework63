import React from "react";

const FunctionClick = () => {
  function greet() {
    alert("Hello world");
  }

  return (
    <div>
      <button onClick={greet}>Click</button>
    </div>
  );
};

export default FunctionClick;
