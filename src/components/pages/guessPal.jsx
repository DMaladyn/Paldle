import classes from "./guessPal.module.css";
import allPals from "../data/pals";
import Answer from "../parts/answer";
import { useState } from "react";

import Pal from "../parts/palDisplay";

function GuessPal() {
  const correctPal = "Cattiva";

  const [guesses, setGuesses] = useState([
    <Answer
      answer={correctPal}
      name="Lifmunk"
      key={allPals["Lifmunk"].index}
    />,
    <Answer answer={correctPal} name="Bushi" key={allPals["Bushi"].index} />,
    <Answer
      answer={correctPal}
      name="Lunaris"
      key={allPals["Lunaris"].index}
    />,
  ]);

  const answers = [];

  return (
    <>
      <div className={classes.info}></div>
      <div className={classes.game}>
        {allPals[correctPal].index}
        <br />
        {guesses}
      </div>
      <div className={classes.more}></div>
    </>
  );
}

export default GuessPal;
