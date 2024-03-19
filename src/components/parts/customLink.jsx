import classes from "./customLink.module.css";

import { Link } from "react-router-dom";

function CustomLink(props) {
  //takes in path and text tp be displayed
  return (
    <Link style={{ textDecoration: "none" }} to={props.path}>
      <div
        style={{ fontSize: props.fontSize }}
        className={classes.linkGuessPal}
      >
        {props.text}
      </div>
    </Link>
  );
}

export default CustomLink;
