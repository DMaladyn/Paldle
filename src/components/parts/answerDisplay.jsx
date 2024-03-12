/* import { useState, useEffect } from "react"; */
import classes from "./answerDisplay.module.css";

/* import food from "../../public/icons/food.png"; */
import allPals from "../data/pals";

/* test to update */

function AnswerDisplay(props) {
  /* const [imageSrc, setImageSrc] = useState(null); */

  const foodDisplay = [];
  const workDisplay = [];

  for (let i = 0; i < props.food.food; i++) {
    foodDisplay.push(
      <img className={classes.food} src="/icons/food.png" alt="logo"></img>
    );
  }

  for (let i = 0; i < Object.keys(props.work).length / 2; i++) {
    workDisplay.push(
      <span
        className={`${classes.workHolder} ${
          classes[eval("props.work.work" + i + "Color")]
        }`}
      >
        <span className={classes.workLevel}>
          {allPals[props.name].work[eval(`props.work.work${i}`)]}
        </span>
        <span className={classes.workTypeWrapper}>
          <img
            src={`/iconsWork/${eval("props.work.work" + i)}.png`}
            className={`${classes.workType} ${
              classes[props.work.work]
            }${i}Color`}
          ></img>
        </span>
      </span>
    );
  }

  const multipleTypes = props.type.type1 != null;

  return (
    <div className={classes.container}>
      <div className={`${classes.notWork} ${classes.name}`}>
        <img className={classes.icon} src={`/icons/${props.name}.png`}></img>
        <span>{props.name.replace(/_/g, " ")}</span>
      </div>

      <span className={`${classes.notWork} ${classes[props.index.color]}`}>
        {props.index.index}
      </span>

      {/* display of types */}
      <span className={`${classes.notWork} ${classes.types}`}>
        <span
          className={`${classes[props.type.type0Color]} ${classes.imgHolder}`}
        >
          <img
            className={classes.typeImg}
            src={`/iconsType/${props.type.type0}.png`}
          ></img>
        </span>
        {multipleTypes ? (
          <span
            className={`${classes[props.type.type1Color]} ${classes.imgHolder}`}
          >
            <img
              className={classes.typeImg}
              src={`/iconsType/${props.type.type1}.png`}
            ></img>
          </span>
        ) : null}
      </span>

      <span className={`${classes.notWork} ${classes[props.partner.color]}`}>
        {props.partner.partner}
      </span>

      <span className={`${classes.notWork} ${classes[props.gear.color]}`}>
        {props.gear.gear ? "Yes" : "No"}
      </span>

      <span className={`${classes.notWork} ${classes[props.mount.color]}`}>
        {props.mount.mount ? props.mount.mount : "None"}
      </span>

      <span className={`${classes.notWork} ${classes[props.boss.color]}`}>
        {props.boss.boss ? "Yes" : "No"}
      </span>

      <span
        className={`${classes.notWork} ${classes[props.food.color]} ${
          classes.foodContainer
        }`}
      >
        {foodDisplay}
      </span>

      <span className={classes.works}>{workDisplay}</span>
    </div>
  );
}

export default AnswerDisplay;