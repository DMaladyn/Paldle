import classes from "./palDisplay.module.css";

function Pal(props) {
  return <div className={classes.pal}>{props.name}</div>;
}

export default Pal;
