import "./App.css";
/* import background from "./components/graphics/background.jpg"; */

/* import Pal from "./components/parts/palDisplay"; */
import GuessPal from "./components/pages/guessPal";

function App() {
  return (
    <div className="app_container">
      <GuessPal />
      {/*       <Pal name="pallas" /> */}
    </div>
  );
}

export default App;
