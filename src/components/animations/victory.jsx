import classes from "./victory.module.css";

import { useState, forwardRef, useImperativeHandle, useEffect } from "react";

import JSConfetti from "js-confetti";

const Victory = forwardRef((props, ref) => {
  const [imageSrc, setImageSrc] = useState(null);

  const [isAnimating, setIsAnimating] = useState(false);

  const jsConfetti = new JSConfetti();

  const palsToFall = [];

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

  /*   useEffect(() => {
    import(`../icons/${props.correctPal}.png`)
      .then((module) => setImageSrc(module.default))
      .catch((error) => {
        console.error(`Failed to load image: ${error}`);
        console.log(props.correctPal);
      });
  }, [props.correctPal]);
 */
  useImperativeHandle(ref, () => ({
    startAnimation(emoji) {
      setIsAnimating(true);
      jsConfetti.addConfetti({
        emojis: [emoji], // Use the emoji as confetti
        emojiSize: 70,
        confettiNumber: 30, // Number of confetti particles
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
