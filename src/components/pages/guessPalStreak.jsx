import classes from "./guessPal.module.css";
import allPals from "../data/pals";
import Answer from "../parts/answer";
import Victory from "../animations/victory";
import Streak from "../parts/streak";
import EndScreenTemplate from "../parts/endScreenTemplate";
import CategoriesBar from "../parts/categoriesBar";

import { useState, useEffect, useRef } from "react";

function GuessPalStreak(props) {
  const [correctPal, setCorrectPal] = useState();

  useEffect(() => {
    let keys = Object.keys(allPals);
    let randomIndex = Math.floor(Math.random() * keys.length);

    setCorrectPal(keys[randomIndex]);

    console.log(correctPal);
  }, []);

  let searchParams = new URLSearchParams(location.search);

  const [startingLives, setStartingLives] = useState(searchParams.get("hp"));

  const inputRef = useRef(null);

  const animationRef = useRef();

  const [guesses, setGuesses] = useState([]);

  const [gameInProgress, setGameInProgress] = useState(true);

  const [allNames, setAllNames] = useState(Object.keys(allPals));

  const [palsList, setPalsList] = useState(allNames);

  const [displayList, setDisplayList] = useState(false);

  //pal that was correct one during lost attempt
  const [lastPal, setLastPal] = useState();

  const [imageSources, setImageSources] = useState({});

  const [currentStreak, setCurrentStreak] = useState(0);
  const [lastStreakScore, setLastStreakScore] = useState(0);

  const [currentLives, setCurrentLives] = useState(startingLives);

  const [loseScreen, setLoseScreen] = useState(false);

  /*   useEffect(() => {
    const loadImages = async () => {
      const loadedImages = {};
      for (const name of palsList) {
        const image = await import(`../icons/${name}.png`);
        loadedImages[name] = image.default;
      }
      setImageSources(loadedImages);
    };

    loadImages();
  }, []); */

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

      youWonStreak();
    } else {
      streakAnswerWrong();
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

  function streakAnswerWrong() {
    setCurrentLives(currentLives - 1);

    if (currentLives <= 1) youLostStreak();
  }

  //for handling streak highscore
  let highscore = localStorage.getItem("highscore");

  //handles all events that happen when you lose in streak mode
  function youLostStreak() {
    //check if new score is highscore
    if (lastStreakScore > Number(highscore)) {
      localStorage.setItem("highscore", lastStreakScore);
    }

    //reset streak and lives
    setCurrentLives(startingLives);
    setCurrentStreak(0);

    setGameInProgress(false);

    //reset list of pals and list of pals names
    setAllNames(Object.keys(allPals));
    setPalsList(Object.keys(allPals));

    let keys = Object.keys(allPals);
    let randomIndex = Math.floor(Math.random() * keys.length);

    animationRef.current.startAnimation("❌");

    setLastPal(correctPal);
    setLoseScreen(true);

    setTimeout(() => {
      setGameInProgress(true);

      setGuesses([]);
      setCorrectPal(keys[randomIndex]);

      animationRef.current.stopAnimation();
    }, 3000);
  }

  function youWonStreak() {
    setCurrentLives(startingLives);
    setCurrentStreak(currentStreak + 1);

    setLastStreakScore(currentStreak + 1);

    setAllNames(Object.keys(allPals));
    setPalsList(Object.keys(allPals));

    let keys = Object.keys(allPals);
    let randomIndex = Math.floor(Math.random() * keys.length);

    setTimeout(() => {
      setGameInProgress(true);

      setGuesses([]);
      animationRef.current.stopAnimation();
      setCorrectPal(keys[randomIndex]);
    }, 3000);
  }

  //closes end screen and changes hp to one matching new query params
  function closeEndScreen() {
    setLoseScreen(false);
    searchParams = new URLSearchParams(location.search);
    setStartingLives(searchParams.get("hp"));
    setCurrentLives(searchParams.get("hp"));

    //sets independent streak tracker back to 0
    setLastStreakScore(0);
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
      <Streak streak={currentStreak} lives={currentLives} />

      <Victory correctPal={correctPal} ref={animationRef} />

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
            <div
              className={currentLives > 0 ? classes.youWon : classes.youLost}
            >
              Generating New Pal...
            </div>
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
                    <div className={classes.listElement}>
                      <img
                        className={classes.listImg}
                        src={`/icons/${x}.png`}
                        alt={""}
                      />
                      <span className={classes.listName}>{x}</span>
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

      {loseScreen ? (
        <EndScreenTemplate
          firstLine={`You Lost!`}
          secondLine={`Correct Pal was ${lastPal}`}
          thirdLine={
            lastStreakScore >= Number(highscore)
              ? `New Highscore: ${lastStreakScore}`
              : `Score: ${lastStreakScore} Highscore: ${highscore}`
          }
          aboveButtons={`Try again?`}
          firstButton={`home`}
          secondButton={`streakLose`}
          close={closeEndScreen}
        />
      ) : null}
    </div>
  );
}

export default GuessPalStreak;
