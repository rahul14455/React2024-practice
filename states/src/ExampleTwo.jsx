import React, { useState } from "react";

const ExampleTwo = () => {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2003",
    color: "red",
  });
  const updateColor = () => {
    setCar((prev) => {
      return { ...prev, color: "blue", year: "2001" };
    });
  };
  return (
    <div>
      <>
        <h1>My {car.brand}</h1>
        <h2>
          It us a {car.color} {car.model} from {car.year}
        </h2>
        <button onClick={updateColor}>ChangeModel</button>
      </>
    </div>
  );
};

export default ExampleTwo;
