import React from "react";
import "./sample.css";
const Mango = () => {
  return <h2>Mango is Fruit</h2>;
};

const Avengers = () => {
  return (
    <ul>
      <h1>Avengers Series</h1>
      <li>1. The Avengers</li>
      <li>2. Avangers Age Of Ultron</li>
      <li>3. Avangers Infinity War</li>
      <li>4. The End game</li>
    </ul>
  );
};

const Sample = () => {
  return (
    <div>
      <Mango />
      <Avengers />
    </div>
  );
};

export default Sample;
