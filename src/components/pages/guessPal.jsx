import classes from "./guessPal.module.css";
import allPals from "../data/pals";
import Answer from "../parts/answer";
import Victory from "../animations/victory";
import EndScreenTemplate from "../parts/endScreenTemplate";
import CategoriesBar from "../parts/categoriesBar";
import { useState, useEffect, useRef } from "react";

function GuessPal(props) {
  const [correctPal, setCorrectPal] = useState(props.correctPal);

  //if there is no correctPal in props, it sets correctPal as random pal instead of daily pal
  useEffect(() => {
    if (!props.correctPal) {
      let keys = Object.keys(allPals);
      let randomIndex = Math.floor(Math.random() * keys.length);

      setCorrectPal(keys[randomIndex]);

      console.log(correctPal);
    }
  }, []);

  const inputRef = useRef(null);

  const animationRef = useRef();

  const [guesses, setGuesses] = useState([]);

  const [gameInProgress, setGameInProgress] = useState(true);
  const [winScreen, setWinScreen] = useState(false);

  const [allNames, setAllNames] = useState(Object.keys(allPals));

  const [palsList, setPalsList] = useState(allNames);

  const [displayList, setDisplayList] = useState(false);

  function makeGuess(name) {
    // add guess to the list of guesses
    setGuesses(
      [
        <Answer answer={correctPal} name={name} key={allPals[name].index} />,
      ].concat(guesses)
    );

    //deletes guessed pal from list of all names and from list of displayed names
    setAllNames(allNames.filter((nameCheck) => nameCheck != name));
    setPalsList(allNames.filter((nameCheck) => nameCheck != name));

    //if guess was correct start win animation
    if (name == correctPal) {
      setGameInProgress(false);
      animationRef.current.startAnimation("🏆");
      setWinScreen(true);
    }

    //sets value of name input to empty string
    inputRef.current.value = "";
  }

  //limits pals on the display list to the ones that contain specified substring
  function editList(event) {
    const name = event.target.value;
    const matchingNames = [];

    const regex = new RegExp(name, "i");

    for (let i = 0; i < allNames.length; i++) {
      if (regex.test(allNames[i])) matchingNames.push(allNames[i]);
    }

    setPalsList(matchingNames);
  }

  //closes screen that is displayed when player end's game
  function closeEndScreen() {
    setWinScreen(false);
  }

  //adds event listener that checks if used click was inside or outside input element
  //and if it was outside it hides display list
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setDisplayList(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.info}></div>
      <div className={classes.game}>
        <div className={classes.inputHolder}>
          {gameInProgress ? (
            <input
              ref={inputRef}
              className={classes.nameInput}
              onChange={editList}
              onClick={() => setDisplayList(true)}
              placeholder="Guess the Pal"
            />
          ) : (
            <div className={classes.youWon}>Correct!</div>
          )}

          {/* if conditions are met it displays list of pals matching string inside input */}
          {displayList && gameInProgress && (
            <div
              className={`${classes.selectWindow} ${classes.customScrollbar}`}
            >
              <ul>
                {palsList.map((x, index) => (
                  <li
                    className={classes.listHolder}
                    key={index}
                    onClick={() => makeGuess(x)}
                  >
                    <div className={classes.listElement}>
                      <img
                        className={classes.listImg}
                        src={`/icons/${x}.png`}
                        alt={""}
                      />
                      <span className={classes.listName}>
                        {x.replace(/_/g, " ")}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <CategoriesBar />
        {guesses}
      </div>
      <div className={classes.more}></div>

      {/* winscreen is on the bottom to make sure it will display on top of other elements*/}
      {winScreen ? (
        <EndScreenTemplate
          firstLine={`You Won!`}
          secondLine={`Today's Pal was ${props.correctPal.replace(/_/g, " ")}`}
          aboveButtons={`Continue playing?`}
          firstButton={`home`}
          secondButton={`streak`}
          close={closeEndScreen}
        />
      ) : null}

      <Victory correctPal={correctPal} ref={animationRef} />
    </div>
  );
}

export default GuessPal;
