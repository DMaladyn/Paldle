import classes from "./guessPal.module.css";
import allPals from "../data/pals";
import Answer from "../parts/answer";
import Victory from "../animations/victory";
import { useState, useEffect, useRef } from "react";

import logo from "../graphics/logo.png";

function GuessPal() {
  const correctPal = "Digtoise";

  const inputRef = useRef(null);

  const animationRef = useRef();

  const [guesses, setGuesses] = useState([
    <Answer
      answer={correctPal}
      name={"Lamball"}
      key={allPals["Lamball"].index}
    />,
    <Answer
      answer={correctPal}
      name={"Lamball"}
      key={allPals["Lamball"].index}
    />,
    <Answer
      answer={correctPal}
      name={"Lamball"}
      key={allPals["Lamball"].index}
    />,
    <Answer
      answer={correctPal}
      name={"Lamball"}
      key={allPals["Lamball"].index}
    />,
    <Answer
      answer={correctPal}
      name={"Lamball"}
      key={allPals["Lamball"].index}
    />,
    <Answer
      answer={correctPal}
      name={"Lamball"}
      key={allPals["Lamball"].index}
    />,
    <Answer
      answer={correctPal}
      name={"Lamball"}
      key={allPals["Lamball"].index}
    />,
    <Answer
      answer={correctPal}
      name={"Lamball"}
      key={allPals["Lamball"].index}
    />,
    <Answer
      answer={correctPal}
      name={"Lamball"}
      key={allPals["Lamball"].index}
    />,
    <Answer
      answer={correctPal}
      name={"Lamball"}
      key={allPals["Lamball"].index}
    />,
    <Answer
      answer={correctPal}
      name={"Lamball"}
      key={allPals["Lamball"].index}
    />,
  ]);

  const [gameInProgress, setGameInProgress] = useState(true);

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
      animationRef.current.startAnimation();
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

    console.log(name);
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
      <Victory ref={animationRef} />
      <div className={classes.info}>
        <img className={classes.logo} src={logo}></img>
      </div>
      <div className={classes.game}>
        <div className={classes.inputHolder}>
          {gameInProgress ? (
            <input
              ref={inputRef}
              className={classes.nameInput}
              onChange={editList}
              onClick={() => setDisplayList(true)}
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
                      <>
                        <img
                          className={classes.listImg}
                          src={imageSources[x]}
                          alt={x}
                        />
                        <span className={classes.listName}>{x}</span>
                      </>
                    ) : (
                      <span>Loading...</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
