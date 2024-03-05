import classes from "./endScreenTemplate.module.css";

import CustomLink from "./customLink";
import StreakLink from "./streakLink";

function EndScreenTemplate(props) {
  const buttons = {
    home: <CustomLink text="🏠Home" address="/" />,
    streak: <StreakLink />,
    streakLose: (
      <StreakLink
        loseStreak={() =>
          setTimeout(() => {
            props.close();
          }, 100)
        }
      />
    ),
  };

  return (
    <div>
      <div className={classes.darkenBackground} onClick={() => props.close()}>
        {""}
      </div>

      <div className={classes.endContainer}>
        <div className={classes.firstLine}>{props.firstLine}</div>
        <div className={classes.secondLine}>{props.secondLine}</div>
        <div className={classes.thirdLine}>{props.thirdLine}</div>

        <div className={classes.aboveButtons}>{props.aboveButtons}</div>

        <div className={classes.leftButton}>{buttons[props.firstButton]}</div>
        <div className={classes.rightButton}>{buttons[props.secondButton]}</div>
      </div>
    </div>
  );
}

export default EndScreenTemplate;
