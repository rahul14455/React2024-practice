import React, { useState } from "react";

const ExampleFour = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"} Text
        </button>
        {isVisible && <p>Hello</p>}
      </>
    </div>
  );
};

export default ExampleFour;
