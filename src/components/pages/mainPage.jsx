import classes from "./mainPage.module.css";

import StreakLink from "../parts/streakLink";
import CustomLink from "../parts/customLink";

import { useState } from "react";

import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <div className={classes.select}>Select Game Mode</div>
      <div className={classes.gamemodes}>
        <CustomLink text="📅Daily" address="/daily" />
        <StreakLink />
      </div>
    </div>
  );
}

export default MainPage;
