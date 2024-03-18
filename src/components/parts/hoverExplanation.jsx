import classes from "./hoverExplanation.module.css";

function HoverExplanation(props) {
  //takes in position, visibility and text, and then positions itself accordingly, with proper opacity and text
  return (
    <div
      style={{
        bottom: props.position.bottom + "px",
        left: `calc(${props.position.left}% - 157px)`,
        opacity: props.visibility,
      }}
      className={classes.hoverContainer}
    >
      {props.text}
    </div>
  );
}

export default HoverExplanation;
