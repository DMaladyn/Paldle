import classes from "./streak.module.css";

function Streak(props) {
  //displays current steak and amoutn of lives in top right corner
  return (
    <div className={classes.streakContainer}>
      ❤️{props.lives} &nbsp; 🔥{props.streak}
    </div>
  );
}

export default Streak;
