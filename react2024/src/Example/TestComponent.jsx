import React from "react";

const AvengerHeros = () => {
  return (
    <div>
      <h1>Thor</h1>
      <h1>Dr.Strange</h1>
      <h1>Hulk</h1>
    </div>
  );
};

const TestComponent = () => {
  return (
    <div>
      <h1>Captain America</h1>
      <AvengerHeros />
    </div>
  );
};

export default TestComponent;
