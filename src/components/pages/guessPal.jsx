import classes from "./guessPal.module.css";
import allPals from "../data/pals";
import Answer from "../parts/answer";
import Victory from "../animations/victory";
import Streak from "../parts/streak";
import EndScreenTemplate from "../parts/endScreenTemplate";
import CategoriesBar from "../parts/categoriesBar";
import { useState, useEffect, useRef } from "react";

function GuessPal(props) {
  const [correctPal, setCorrectPal] = useState(props.correctPal);

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

  const [imageSources, setImageSources] = useState({});

  useEffect(
    () => {
      const loadImages = async () => {
        const loadedImages = {};
        for (const name of palsList) {
          const image = await import(`../icons/${name}.png`);
          loadedImages[name] = image.default;
        }
        setImageSources(loadedImages);
      };

      loadImages();
    },
    [
      /* palsList */
    ]
  );

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

    if (name == correctPal) {
      setGameInProgress(false);
      animationRef.current.startAnimation("🏆");
      setWinScreen(true);
    }
    inputRef.current.value = "";
  }

  function editList(event) {
    const name = event.target.value;
    const matchingNames = [];

    const regex = new RegExp(name, "i");

    for (let i = 0; i < allNames.length; i++) {
      if (regex.test(allNames[i])) matchingNames.push(allNames[i]);
    }

    setPalsList(matchingNames);
  }

  function closeEndScreen() {
    setWinScreen(false);
  }

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
      {/* {correctPal} */}

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
                    {imageSources[x] ? (
                      <div className={classes.listElement}>
                        <img
                          className={classes.listImg}
                          src={imageSources[x]}
                          alt={""}
                        />
                        <span className={classes.listName}>{x}</span>
                      </div>
                    ) : (
                      <span>Loading...</span>
                    )}
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

      {/* winscreen on bottom to make sure it will display on top */}
      {winScreen ? (
        <EndScreenTemplate
          firstLine={`You Won!`}
          secondLine={`Today's Pal was ${props.correctPal}`}
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
