import classes from "./customLink.module.css";

import { Link } from "react-router-dom";

function CustomLink(props) {
  return (
    <Link style={{ textDecoration: "none" }} to={"/Paldle/" + props.address}>
      <div className={classes.linkGuessPal}>{props.text}</div>
    </Link>
  );
}

export default CustomLink;
