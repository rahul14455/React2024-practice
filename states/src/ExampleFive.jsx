import React, { useState } from "react";

const ExampleFive = () => {
  const [message, setMessage] = useState("");
  return (
    <div>
      <>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="..Type a message"
        />
        <p>Message:{message}</p>
      </>
    </div>
  );
};

export default ExampleFive;
