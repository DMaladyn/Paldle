import "./App.css";

import Pal from "./components/parts/palDisplay";
import GuessPal from "./components/pages/guessPal";

function App() {
  return (
    <>
      <GuessPal />
      <Pal name="pallas" />
    </>
  );
}

export default App;
