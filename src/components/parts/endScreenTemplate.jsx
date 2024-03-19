import classes from "./endScreenTemplate.module.css";

import CustomLink from "./customLink";
import StreakLink from "./streakLink";

function EndScreenTemplate(props) {
  //declares different kind of buttons there so when used in different element they dont haveto pass whole buttons
  //but instead they can only pass name of button
  const buttons = {
    home: <CustomLink text="🏠Home" path="/" />,
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
        <div className={classes.secondLine}>
          {props.secondLine}
          &nbsp;
          <img src={`icons/${props.pal}.png`} className={classes.image} />
          &nbsp;
          {props.pal.replace(/_/g, " ")}
        </div>
        <div className={classes.thirdLine}>{props.thirdLine}</div>

        {/* <div className={classes.image}>
          <img src="icons/Digtoise.png" />
        </div> */}

        <div className={classes.aboveButtons}>{props.aboveButtons}</div>

        <div className={classes.leftButton}>{buttons[props.firstButton]}</div>
        <div className={classes.rightButton}>{buttons[props.secondButton]}</div>
      </div>
    </div>
  );
}

export default EndScreenTemplate;
