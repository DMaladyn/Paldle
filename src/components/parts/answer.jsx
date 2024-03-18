import allPals from "../data/pals";
import classes from "./answer.module.css";
import AnswerDisplay from "./answerDisplay";

function Answer(props) {
  const guess = allPals[props.name];
  const correct = allPals[props.answer];

  /*   const colors = {
    right: "rgb(0, 230, 0)",
    half: "rgb(255, 187, 51)",
    wrong: "rgb(230, 0, 0)",
  }; */

  //all values will be stored inside thees objects and later passed to be displayed in answerDisplay
  let index = { index: guess.index },
    type = {},
    work = {},
    partner = {},
    gear = {},
    mount = {},
    boss = {},
    food = {};

  //takes digits from index string and turns them to numbers
  let indexCorrect = Number(correct.index.match(/\d+/));
  let indexGuess = Number(guess.index.match(/\d+/));

  //checks if values are same, withing range of 10, or more than 10 away
  if (correct.index == guess.index) {
    index.color = "right";
  } else if (Math.abs(indexCorrect - indexGuess) <= 10) {
    index.color = "half";
  } else {
    index.color = "wrong";
  }

  //tests if all, some or none of the types are matching
  for (let i = 0; i < guess.type.length; i++) {
    type["type" + i] = guess.type[i];

    if (correct.type.includes(guess.type[i])) {
      if (correct.type.length == 1) {
        type["type" + i + "Color"] = "right";
      } else {
        type["type" + i + "Color"] = "half";
      }
    } else {
      type["type" + i + "Color"] = "wrong";
    }
  }

  //checks if work capabilities are matching
  let works = Object.keys(guess.work);

  for (let i = 0, x = 0; i <= 11; i++) {
    if (guess.work[works[i]] == 0) continue;

    work["work" + x] = works[i];
    if (guess.work[works[i]] == correct.work[works[i]]) {
      work["work" + x + "Color"] = "rightWork";
    } else if (correct.work[works[i]] != 0) {
      work["work" + x + "Color"] = "halfWork";
    } else {
      work["work" + x + "Color"] = "wrongWork";
    }

    x += 1;
  }

  //checks if partner abilities have same role
  partner.partner = guess.partner;
  if (guess.partner == correct.partner) {
    partner.color = "right";
  } else if (
    ((guess.partner == "Fighting" || guess.partner == "Utility") &&
      correct.partner == "Flexible") ||
    ((correct.partner == "Fighting" || correct.partner == "Utility") &&
      guess.partner == "Flexible")
  ) {
    partner.color = "half";
  } else {
    partner.color = "wrong";
  }

  //checks if both have or have no special gear for them
  gear.gear = guess.gear;
  if (guess.gear == correct.gear) {
    gear.color = "right";
  } else {
    gear.color = "wrong";
  }

  //checks if they can be used as mount and if yes, what type
  mount.mount = guess.mount;
  if (guess.mount == correct.mount) {
    mount.color = "right";
  } else if (guess.mount == false || correct.mount == false) {
    mount.color = "wrong";
  } else {
    mount.color = "half";
  }

  //checks if both have or have no boss/alpha version
  boss.boss = guess.boss;
  if (guess.boss == correct.boss) {
    boss.color = "right";
  } else {
    boss.color = "wrong";
  }

  //checks if both have same, similar or much different (difference higher than 1) of food consumption
  food.food = guess.food;
  if (guess.food == correct.food) {
    food.color = "right";
  } else if (Math.abs(guess.food - correct.food) <= 1) {
    food.color = "half";
  } else {
    food.color = "wrong";
  }

  return (
    <div className={classes.answer}>
      <AnswerDisplay
        food={food}
        index={index}
        type={type}
        work={work}
        partner={partner}
        gear={gear}
        mount={mount}
        boss={boss}
        name={props.name}
      />
    </div>
  );
}

export default Answer;
