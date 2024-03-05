import classes from "./streak.module.css";

function Streak(props) {
  return (
    <div className={classes.streakContainer}>
      ❤️{props.lives} &nbsp; 🔥{props.streak}
    </div>
  );
}

export default Streak;
