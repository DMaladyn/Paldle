import classes from "./guessPal.module.css";
import allPals from "../data/pals";
import Answer from "../parts/answer";
import { useState } from "react";

import logo from "../graphics/logo.png";

function GuessPal() {
  const correctPal = "Digtoise";

  const [guesses, setGuesses] = useState([]);

  const [allNames, setAllNames] = useState(Object.keys(allPals));

  const [palsList, setPalsList] = useState(allNames);

  const answers = [];

  function makeGuess(name) {
    // add guess to the list of guesses using answer module
    setGuesses(
      guesses.concat([
        <Answer answer={correctPal} name={name} key={allPals[name].index} />,
      ])
    );

    //deletes guessed pal from list of all names and from list of displayed names
    setAllNames(allNames.filter((nameCheck) => nameCheck != name));
    setPalsList(allNames.filter((nameCheck) => nameCheck != name));
  }

  function editList(event) {
    const name = event.target.value;
    const matchingNames = [];

    const regex = new RegExp(name, "i");

    for (let i = 0; i < allNames.length; i++) {
      if (regex.test(allNames[i])) matchingNames.push(allNames[i]);
    }

    setPalsList(matchingNames);

    console.log(name);
  }

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <img className={classes.logo} src={logo}></img>
      </div>
      <div className={classes.game}>
        <div className={classes.inputHolder}>
          <input className={classes.nameInput} onChange={editList} />
          <div className={classes.selectWindow}>
            <ul>
              {palsList.map((x, index) => (
                <li key={index} onClick={() => makeGuess(x)}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.categories}>
          <span>Name</span>
          <span>Index</span>
          <span>Type</span>
          <span>Partner Skill</span>
          <span>Has Pal Gear</span>
          <span>Mount Type</span>
          <span>Has Boss Version</span>
          <span>Food</span>
          <span>Work Suitability</span>
        </div>
        {guesses}
      </div>
      <div className={classes.more}></div>
    </div>
  );
}

export default GuessPal;
