import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Layout from "./components/layout/layout.jsx";
import GuessPal from "./components/pages/guessPal.jsx";
import GuessPalStreak from "./components/pages/guessPalStreak.jsx";
import MainPage from "./components/pages/mainPage.jsx";

import { BrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    elmenent: (
      <App>
        <Layout />
      </App>
    ),
    children: [
      {
        path: "/daily",
        element: <GuessPal />,
      },
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/streak",
        element: <GuessPalStreak />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
