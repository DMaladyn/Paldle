import classes from "./guessPal.module.css";
import allPals from "../data/pals";
import Answer from "../parts/answer";
import Victory from "../animations/victory";
import Streak from "../parts/streak";
import EndScreenTemplate from "../parts/endScreenTemplate";
import CategoriesBar from "../parts/categoriesBar";
import NamesList from "../parts/namesList";

import preloadIcons from "../functions/preload";

import { useState, useEffect, useRef } from "react";

function GuessPalStreak() {
  const [correctPal, setCorrectPal] = useState();

  //sets correct pal at the start of game
  useEffect(() => {
    let keys = Object.keys(allPals);
    let randomIndex = Math.floor(Math.random() * keys.length);

    setCorrectPal(keys[randomIndex]);

    preloadIcons(Object.keys(allPals));
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

  const [currentStreak, setCurrentStreak] = useState(0);
  const [lastStreakScore, setLastStreakScore] = useState(0);

  const [currentLives, setCurrentLives] = useState(startingLives);

  const [loseScreen, setLoseScreen] = useState(false);

  //handle element that blocks you from hovering over guesses after making a guess
  const [hoverBlocker, setHoverBlocker] = useState(false);

  function blockHover() {
    setHoverBlocker(true);

    setTimeout(() => {
      setHoverBlocker(false);
    }, 1200);
  }

  function makeGuess(name) {
    // add guess to the list of guesses using answer module
    setGuesses(
      [
        <Answer answer={correctPal} name={name} key={allPals[name].index} />,
      ].concat(guesses)
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

  //reduces amount of lives and checks if they reached 0
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

    //pics random index from array of list of pals
    let keys = Object.keys(allPals);
    let randomIndex = Math.floor(Math.random() * keys.length);

    animationRef.current.startAnimation("❌");

    //sets currect correct pal as LastPal and shows end screen
    setLastPal(correctPal);
    setLoseScreen(true);

    //starts timeout to start new round with new correctPal
    setTimeout(() => {
      setGameInProgress(true);

      setGuesses([]);
      setCorrectPal(keys[randomIndex]);

      animationRef.current.stopAnimation();
    }, 3000);
  }

  //increases streak, sets lives to starting lives selected at the start, starts winning animation,
  //resets all values to default and sets timer to start new round
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

  //closes end screen and changes hp to one matching new (or same) query params
  function closeEndScreen() {
    setLoseScreen(false);
    searchParams = new URLSearchParams(location.search);
    setStartingLives(searchParams.get("hp"));
    setCurrentLives(searchParams.get("hp"));

    //sets independent streak tracker back to 0
    setLastStreakScore(0);
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
      <Streak streak={currentStreak} lives={currentLives} />

      <Victory correctPal={correctPal} ref={animationRef} />

      <div className={classes.game}>
        <div className={classes.inputHolder}>
          {hoverBlocker ? <div className={classes.blocker}>&nbsp;</div> : null}

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
              style={{ fontSize: "22px" }}
            >
              Generating New Pal...
            </div>
          )}

          {/* if conditions are met it displays list of pals matching string inside input */}
          {displayList && gameInProgress && (
            <NamesList
              makeGuess={makeGuess}
              blockHover={blockHover}
              palsList={palsList}
            />
          )}
        </div>
        <CategoriesBar />
        {guesses}
      </div>
      <div className={classes.more}></div>

      {/* loseScreen is on the bottom to make sure it will display on top of other elements*/}
      {loseScreen ? (
        <EndScreenTemplate
          pal={lastPal}
          firstLine={`You Lost!`}
          secondLine={`Correct Pal was`}
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
