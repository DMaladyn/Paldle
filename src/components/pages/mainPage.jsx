import classes from "./mainPage.module.css";

import StreakLink from "../parts/streakLink";
import CustomLink from "../parts/customLink";

import { useState } from "react";

import { Link } from "react-router-dom";

function MainPage() {
  //main page with links to different game modes
  return (
    <div>
      <div className={classes.select}>Select Game Mode</div>
      <div className={classes.gamemodes}>
        <CustomLink text="📅Daily" path="/daily" />
        <StreakLink />
      </div>
    </div>
  );
}

export default MainPage;
