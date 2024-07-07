import React, { useState } from "react";

const Exampleone = () => {
  const [color, setColor] = useState("Green");
  const changeColor = () => {
    setColor("Orange");
  };
  return (
    <div>
      <>
        <h1>My Favourite color is {color}</h1>
        <button onClick={changeColor}>Blue</button>
      </>
    </div>
  );
};

export default Exampleone;
