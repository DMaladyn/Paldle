import classes from "./layout.module.css";

import PersonalLinks from "../parts/personalLinks";

import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <div className={classes.layoutContainer}>
      <Link className={classes.logoLink} to="/">
        <img className={classes.logo} src="/logo.png"></img>
      </Link>
      <br></br>

      <main className={classes.main}>{props.children}</main>

      <PersonalLinks />
    </div>
  );
}

export default Layout;