import React, { useState } from "react";

const StatesDemo = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>UseStates Example</h1>
      <button onClick={incrementCount}>+</button>
      <span>Count:{count}</span>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};

export default StatesDemo;
