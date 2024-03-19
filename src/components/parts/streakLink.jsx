import classes from "./streakLink.module.css";

import { useState } from "react";

import { Link } from "react-router-dom";

function StreakLink(props) {
  const [startingLives, setStartingLives] = useState(6);
  const [showLivesSelector, setShowLivesSelector] = useState(false);

  //decreases amoutn of starting lives
  function decreaseLives() {
    if (startingLives > 3) setStartingLives(startingLives - 1);
  }

  //increases amount of starting lives
  function increaseLives() {
    if (startingLives < 15) setStartingLives(startingLives + 1);
  }

  //it makes sure when button inside Link is clicked it no longer redirect to that Link's path
  const handleButtonClick = (event) => {
    // This prevents the click event from bubbling up to the Link component
    event.preventDefault();
    event.stopPropagation();
  };

  //Link to streak game mode with ability to select amount of lives with which you will start each round
  return (
    <Link
      onMouseEnter={() => setShowLivesSelector(true)}
      onMouseLeave={() => setShowLivesSelector(false)}
      style={{ textDecoration: "none" }}
      to={`/streak?hp=${startingLives}`}
      onClick={props.loseStreak ? () => props.loseStreak() : null}
    >
      <div
        style={{ fontSize: props.fontSize }}
        className={classes.linkGuessPal}
      >
        🔥Streak&nbsp;
        {showLivesSelector ? (
          <span className={classes.livesContainer}>
            <button
              onClick={(event) => {
                handleButtonClick(event);
                decreaseLives();
              }}
              className={`${classes.livesButton} ${classes.alignLeft}`}
            >
              {"<"}
            </button>
            <div className={classes.middleContent}>❤️{startingLives}</div>
            <button
              onClick={(event) => {
                handleButtonClick(event);
                increaseLives();
              }}
              className={`${classes.livesButton} ${classes.alignRight}`}
            >
              {">"}
            </button>
          </span>
        ) : null}
      </div>
    </Link>
  );
}

export default StreakLink;
