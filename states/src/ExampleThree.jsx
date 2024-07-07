import React, { useState } from "react";

const ExampleThree = () => {
  const [count, setCount] = useState(0);
  const Increase = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <>
        <button onClick={Increase}>Increment</button>
        <span>Count:{count}</span>
        <button onClick={Decrease}>Decrement</button>
      </>
    </div>
  );
};

export default ExampleThree;
