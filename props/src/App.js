import "./App.css";
import FifthComponent from "./Components/FifthComponent";
import FirstComponent from "./Components/FirstComponent";
import FourthComponent from "./Components/FourthComponent";
import SecondComponent from "./Components/SecondComponent";
import SixthComponent from "./Components/SixthComponent";
import ThirdComponent from "./Components/ThirdComponent";
import User from "./Components/User";
import ConditionalRendering from "./Maps/ConditionalRendering";
import Maps from "./Maps/Maps";
import UserGreeting from "./Maps/UserGreeting";
import StatesAdvance from "./UseState/StatesAdvance";
import StatesDemo from "./UseState/StatesDemo";

function App(props) {
  // let IsAdmin = false;

  return (
    <div className="App">
      {/* <User name="Rahul kumar" sub="React" age="27" place="Bangalore" />
      <FirstComponent
        name="R Sai Pradeep"
        sub="Js"
        age="27"
        place="Hyderabad"
      />
      <SecondComponent
        name="G Nikhil"
        sub="Android Development"
        age="27"
        place="Delhi"
      />
      <ThirdComponent name="Jagadish" sub="Java" age="27" place="Chennai" />
      <FourthComponent name="Varun" sub="Cloud" age="27" place="Mumbai" />
      <FifthComponent name="Virat" jersey="18" country="India" /> */}
      {/* <Maps /> */}
      {/* <ConditionalRendering />
      {IsAdmin ? <UserGreeting /> : "This is Guest"} */}

      {/* <SixthComponent name="Jocker" sub="Comedy" age="52" place="California" /> */}

      {/* <StatesDemo /> */}
      <StatesAdvance />
    </div>
  );
}
export default App;
