import { useState, useEffect } from "react";
import classes from "./answerDisplay.module.css";

import food from "../icons/food.png";
import allPals from "../data/pals";

import kindling from "../iconsWork/kindling.png";
import watering from "../iconsWork/watering.png";
import planting from "../iconsWork/planting.png";
import electricity from "../iconsWork/electricity.png";
import handiwork from "../iconsWork/handiwork.png";
import gathering from "../iconsWork/gathering.png";
import lumbering from "../iconsWork/lumbering.png";
import mining from "../iconsWork/mining.png";
import medicine from "../iconsWork/medicine.png";
import cooling from "../iconsWork/cooling.png";
import transporting from "../iconsWork/transporting.png";
import farming from "../iconsWork/farming.png";

import water from "../iconsType/water.png";
import ice from "../iconsType/ice.png";
import fire from "../iconsType/fire.png";
import dark from "../iconsType/dark.png";
import grass from "../iconsType/grass.png";
import dragon from "../iconsType/dragon.png";
import electric from "../iconsType/electric.png";
import neutral from "../iconsType/neutral.png";
import ground from "../iconsType/ground.png";
/* test to update  */

function AnswerDisplay(props) {
  const [imageSrc, setImageSrc] = useState(null);

  const foodDisplay = [];
  const workDisplay = [];

  for (let i = 0; i < props.food.food; i++) {
    foodDisplay.push(<img className={classes.food} src={food}></img>);
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
            src={eval(eval("props.work.work" + i))}
            className={`${classes.workType} ${
              classes[props.work.work]
            }${i}Color`}
          ></img>
        </span>
      </span>
    );
  }

  useEffect(() => {
    import(`../icons/${props.name}.png`)
      .then((module) => setImageSrc(module.default))
      .catch((error) => {
        console.error(`Failed to load image: ${error}`);
      });
  }, [props.name]);

  const multipleTypes = props.type.type1 != null;

  return (
    <div className={classes.container}>
      <div className={`${classes.notWork} ${classes.name}`}>
        <img className={classes.icon} src={imageSrc}></img>
        <span>{props.name}</span>
      </div>

      <span className={`${classes.notWork} ${classes[props.index.color]}`}>
        {props.index.index}
      </span>

      {/* display of types */}
      <span className={`${classes.notWork} ${classes.types}`}>
        <span
          className={`${classes[props.type.type0Color]} ${classes.imgHolder}`}
        >
          <img className={classes.typeImg} src={eval(props.type.type0)}></img>
        </span>
        {multipleTypes ? (
          <span
            className={`${classes[props.type.type1Color]} ${classes.imgHolder}`}
          >
            <img className={classes.typeImg} src={eval(props.type.type1)}></img>
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
