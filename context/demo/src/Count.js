import React, { useContext } from "react";
import { store } from "./App";
const Count = () => {
  const [data, setData] = useContext(store);
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3>Count: {data.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default Count;
