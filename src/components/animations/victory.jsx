import classes from "./victory.module.css";

import { useState, forwardRef, useImperativeHandle } from "react";

import JSConfetti from "js-confetti";

const Victory = forwardRef((props, ref) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const jsConfetti = new JSConfetti();

  const palsToFall = [];

  //creates array of images of correctPal that will fall top to bottom when animation is called
  for (let i = 1; i < 9; i++) {
    palsToFall.push(
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${10 * i}vw`,
          top: `${-70 - Math.random() * 300}px`,
        }}
      >
        {isAnimating ? (
          <img
            className={`${classes.animateDown} ${classes.palIcon}`}
            src={`/icons/${props.correctPal}.png`}
          />
        ) : null}
      </div>
    );
  }

  //allows parent to call for animation to start/stop
  useImperativeHandle(ref, () => ({
    startAnimation(emoji) {
      setIsAnimating(true);
      jsConfetti.addConfetti({
        emojis: [emoji],
        emojiSize: 70,
        confettiNumber: 30,
      });
    },
    stopAnimation() {
      setIsAnimating(false);
    },
  }));

  return <div className={classes.animation}>{palsToFall}</div>;
});

Victory.displayName = "Animation";

export default Victory;
