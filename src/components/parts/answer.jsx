import allPals from "../data/pals";
import classes from "./answer.module.css";

function Answer(props) {
  const guess = allPals[props.name];
  const correct = allPals[props.answer];

  const colors = {
    right: "rgb(0, 230, 0)",
    half: "rgb(255, 187, 51)",
    wrong: "rgb(230, 0, 0)",
  };

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
    index.color = colors["right"];
  } else if (Math.abs(indexCorrect - indexGuess) <= 10) {
    index.color = colors["half"];
  } else {
    index.color = colors["wrong"];
  }

  //tests if all, some or none of the types are matching
  for (let i = 0; i < guess.type.length; i++) {
    type["type" + i] = guess.type[i];

    if (correct.type.includes(guess.type[i])) {
      type["type" + i + "Color"] = colors["right"];
    } else {
      type["type" + i + "Color"] = colors["wrong"];
    }
  }

  //checks if work capabilities are matching
  let works = Object.keys(guess.work);

  for (let i = 0, x = 0; i <= 11; i++) {
    if (guess.work[works[i]] == 0) continue;

    work["work" + x] = works[i];
    if (guess.work[works[i]] == correct.work[works[i]]) {
      work["work" + x + "Color"] = colors["right"];
    } else if (correct.work[works[i]] != 0) {
      work["work" + x + "Color"] = colors["half"];
    } else {
      work["work" + x + "Color"] = colors["wrong"];
    }

    x += 1;
  }

  //checks if partner abilities have same role
  partner.partner = guess.partner;
  if (guess.partner == correct.partner) {
    partner.color = colors["right"];
  } else if (
    ((guess.partner == "damage" || guess.partner == "utility") &&
      correct.partner == "both") ||
    ((correct.partner == "damage" || correct.partner == "utility") &&
      guess.partner == "both")
  ) {
    partner.color = colors["half"];
  } else {
    partner.color = colors["wrong"];
  }

  //checks if both have or have no special gear for them
  gear.gear = guess.gear;
  if (guess.gear == correct.gear) {
    gear.color = colors["right"];
  } else {
    gear.color = colors["wrong"];
  }

  //checks if they can be used as mount and if yes, what type
  mount.mount = guess.mount;
  if (guess.mount == correct.mount) {
    mount.color = colors["right"];
  } else if (guess.mount == false || correct.mount == false) {
    mount.color = colors["wrong"];
  } else {
    mount.color = colors["half"];
  }

  //checks if both have or have no boss/alpha version
  boss.boss = guess.boss;
  if (guess.boss == correct.boss) {
    boss.color = colors["right"];
  } else {
    boss.color = colors["wrong"];
  }

  //checks if both have same, similar or much different (difference higher than 1) of food consumption
  food.food = guess.food;
  if (guess.food == correct.food) {
    food.color = colors["right"];
  } else if (Math.abs(guess.food - correct.food) <= 1) {
    food.color = colors["half"];
  } else {
    food.color = colors["wrong"];
  }

  return (
    <div className={classes.answer}>
      answer {correct.index}
      <br />
      {indexGuess} {index.color}
      <br />
      {type.type0} {type.type0Color}
      <br />
      work {work.work0}
      <br />
      {partner.partner} {partner.color}
      <br />
      {String(gear.gear)} {gear.color}
      <br />
      {String(mount.mount)} {mount.color}
      <br />
      {String(boss.boss)} {boss.color}
      <br />
      {food.food} {food.color}
      <br />
    </div>
  );
}

export default Answer;
