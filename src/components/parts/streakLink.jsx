import classes from "./streakLink.module.css";

import { useState } from "react";

import { Link } from "react-router-dom";

function StreakLink(props) {
  const [startingLives, setStartingLives] = useState(6);
  const [showLivesSelector, setShowLivesSelector] = useState(false);

  function decreaseLives() {
    if (startingLives > 3) setStartingLives(startingLives - 1);
  }
  function increaseLives() {
    if (startingLives < 15) setStartingLives(startingLives + 1);
  }

  const handleButtonClick = (event) => {
    // This prevents the click event from bubbling up to the Link component
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Link
      onMouseEnter={() => setShowLivesSelector(true)}
      onMouseLeave={() => setShowLivesSelector(false)}
      style={{ textDecoration: "none" }}
      to={`/Paldle/streak?hp=${startingLives}`}
      onClick={props.loseStreak ? () => props.loseStreak() : null}
    >
      <div className={classes.linkGuessPal}>
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
