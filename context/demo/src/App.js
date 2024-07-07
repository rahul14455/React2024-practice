import { createContext, useState } from "react";
import "./App.css";
import Count from "./Count";
import Display from "./Display";
export const store = createContext();

function App() {
  const [data, setData] = useState([
    {
      brandName: "Nokia",
    },
    {
      brandName: "GooglePixcels",
    },
    {
      brandName: "Microsoft",
    },
    {
      brandName: "OnePlus",
    },
    {
      brandName: "MI",
    },
  ]);

  return (
    <store.Provider value={[data, setData]}>
      <div className="App">
        <Count />
        <Display />
      </div>
    </store.Provider>
  );
}

export default App;
