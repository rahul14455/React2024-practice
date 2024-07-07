import React from "react";

const SecondComponent = (props) => {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h1>Subject:{props.sub}</h1>
      <h1>Age:{props.age}</h1>
      <h1>Place:{props.place}</h1>
    </div>
  );
};

export default SecondComponent;
