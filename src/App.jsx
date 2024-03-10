import "./App.css";

import GuessPal from "./components/pages/guessPal";
import GuessPalStreak from "./components/pages/guessPalStreak";
import MainPage from "./components/pages/mainPage";
import Layout from "./components/layout/layout";

import allPals from "./components/data/pals";

import { Route, Routes } from "react-router-dom";

function App() {
  //all names of pals
  const allNames = Object.keys(allPals);
  //order that determines what is your daily pal
  const dailyOrder = [
    100, 51, 113, 64, 39, 23, 135, 88, 54, 117, 115, 1, 81, 67, 120, 7, 101,
    110, 112, 22, 94, 27, 124, 39, 88, 5, 128, 28, 1, 66, 12, 122, 110, 112, 84,
    103, 98, 100, 107, 71, 51, 33, 15, 25, 113, 5, 2, 87, 111, 95, 75, 14, 61,
    63, 24, 74, 44, 43, 40, 85, 106, 115, 104, 76, 22, 3, 59, 77, 50, 99, 13,
    57, 123, 15, 21, 135, 32, 67, 24, 105, 80, 95, 102, 82, 68, 36, 70, 82, 14,
    53, 58, 43, 17, 69, 70, 32, 47, 92, 56, 86, 68, 58, 108, 61, 102, 37, 3, 99,
    96, 85, 40, 87, 130, 114, 9, 92, 121, 114, 55, 4, 103, 106, 16, 86, 64, 44,
    23, 91, 28, 60, 20, 26, 90, 97, 132, 116, 62, 96, 33, 97, 129, 46, 27, 126,
    79, 133, 79, 85, 56, 73, 83, 121, 42, 104, 65, 74, 90, 120, 118, 45, 52, 11,
    127, 38, 11, 2, 7, 136, 31, 47, 131, 35, 73, 12, 29, 21, 80, 60, 91, 20, 52,
    129, 34, 105, 89, 10, 127, 36, 83, 10, 55, 75, 35, 136, 59, 119, 29, 46,
    134, 130, 53, 94, 54, 37, 38, 101, 18, 93, 122, 42, 16, 48, 25, 125, 45, 72,
    108, 72, 123, 109, 118, 71, 18, 34, 50, 117, 65, 19, 30, 126, 63, 119, 109,
    98, 134, 93, 131, 78, 69, 107, 124, 17, 78, 30, 76, 13, 100, 51, 113, 64,
    39, 23, 135, 88, 54, 117, 115, 1, 81, 67, 120, 7, 101, 110, 112, 22, 94, 27,
    124, 39, 88, 5, 128, 28, 1, 66, 12, 122, 110, 112, 84, 103, 98, 100, 107,
    71, 51, 33, 15, 25, 113, 5, 2, 87, 111, 95, 75, 14, 61, 63, 24, 74, 44, 43,
    40, 85, 106, 115, 104, 76, 22, 3, 59, 77, 50, 99, 13, 57, 123, 15, 21, 135,
    32, 67, 24, 105, 80, 95, 102, 82, 68, 36, 70, 82, 14, 53, 58, 43, 17, 69,
    70, 32, 47, 92, 56, 86, 68, 58, 108, 61, 102, 37, 3, 99, 96, 85, 40, 87,
    130, 114, 9, 92, 121, 114, 55, 4, 103, 106, 16, 86, 64, 44, 23, 91, 28, 60,
    20, 26, 90, 97, 132, 116, 62, 96, 33, 97, 129, 46, 27, 126, 79, 133, 79, 85,
    56, 73, 83, 121, 42, 104, 65, 74, 90, 120, 118, 45, 52, 11, 127, 38, 11, 2,
    7, 136, 31, 47, 131, 35, 73, 12, 29, 21, 80, 60, 91, 20, 52, 129, 34, 105,
    89, 10, 127, 36, 83, 10, 55, 75, 35, 136, 59, 119, 29, 46, 134, 130, 53, 94,
    54, 37, 38, 101, 18, 93, 122, 42, 16, 48, 25, 125, 45, 72, 108, 72, 123,
    109, 118, 71, 18, 34, 50, 117, 65, 19, 30, 126, 63, 119, 109, 98, 134, 93,
    131, 78, 69, 107, 124, 17, 78, 30, 76, 13, 100, 51, 113, 64, 39, 23, 135,
    88, 54, 117, 115, 1, 81, 67, 120, 7, 101, 110, 112, 22, 94, 27, 124, 39, 88,
    5, 128, 28, 1, 66, 12, 122, 110, 112, 84, 103, 98, 100, 107, 71, 51, 33, 15,
    25, 113, 5, 2, 87, 111, 95, 75, 14, 61, 63, 24, 74, 44, 43, 40, 85, 106,
    115, 104, 76, 22, 3, 59, 77, 50, 99, 13, 57, 123, 15, 21, 135, 32, 67, 24,
    105, 80, 95, 102, 82, 68, 36, 70, 82, 14, 53, 58, 43, 17, 69, 70, 32, 47,
    92, 56, 86, 68, 58, 108, 61, 102, 37, 3, 99, 96, 85, 40, 87, 130, 114, 9,
    92, 121, 114, 55, 4, 103, 106, 16, 86, 64, 44, 23, 91, 28, 60, 20, 26, 90,
    97, 132, 116, 62, 96, 33, 97, 129, 46, 27, 126, 79, 133, 79, 85, 56, 73, 83,
    121, 42, 104, 65, 74, 90, 120, 118, 45, 52, 11, 127, 38, 11, 2, 7, 136, 31,
    47, 131, 35, 73, 12, 29, 21, 80, 60, 91, 20, 52, 129, 34, 105, 89, 10, 127,
    36, 83, 10, 55, 75, 35, 136, 59, 119, 29, 46, 134, 130, 53, 94, 54, 37, 38,
    101, 18, 93, 122, 42, 16, 48, 25, 125, 45, 72, 108, 72, 123, 109, 118, 71,
    18, 34, 50, 117, 65, 19, 30, 126, 63, 119, 109, 98, 134, 93, 131, 78, 69,
    107, 124, 17, 78, 30, 76, 13,
  ];

  const timestamp = new Date(2024, 1, 24, 0, 0, 0).getTime();

  console.log((Date.now() - timestamp) / 86400000);

  let correctPal = "";

  correctPal =
    allNames[dailyOrder[Math.floor((Date.now() - timestamp) / 86400000)]];

  return (
    <div className="app_container">
      <Layout>
        <Routes>
          <Route
            path="/Paldle/daily"
            element={<GuessPal mode="daily" correctPal={correctPal} />}
          />
          <Route
            path="/Paldle/streak"
            element={<GuessPalStreak mode="streak" />}
            key={Math.floor(Math.random() * 1000)}
          />
          <Route path="/Paldle" element={<MainPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

{
  /* modes: daily, streak */
}
