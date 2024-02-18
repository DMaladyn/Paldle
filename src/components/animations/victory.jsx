import classes from "./victory.module.css";

import Digtoise from "../icons/Digtoise.png";

import { useState, forwardRef, useImperativeHandle } from "react";

import JSConfetti from "js-confetti";

const Victory = forwardRef((props, ref) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const jsConfetti = new JSConfetti();

  const palsToFall = [];

  for (let i = 1; i < 9; i++) {
    palsToFall.push(
      <div
        style={{
          position: "absolute",
          left: `${10 * i}vw`,
          top: `${-70 - Math.random() * 300}px`,
        }}
      >
        {isAnimating ? (
          <img
            className={`${classes.animateDown} ${classes.palIcon}`}
            src={Digtoise}
          />
        ) : null}
      </div>
    );
  }

  useImperativeHandle(ref, () => ({
    startAnimation() {
      setIsAnimating(true);
      jsConfetti.addConfetti({
        emojis: ["🏆"], // Use the emoji as confetti
        emojiSize: 70,
        confettiNumber: 30, // Number of confetti particles
      });
    },
  }));

  return <div className={classes.animation}>{palsToFall}</div>;
});

Victory.displayName = "Animation";

export default Victory;
