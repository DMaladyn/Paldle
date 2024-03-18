import classes from "./layout.module.css";

import PersonalLinks from "../parts/personalLinks";

import { Link } from "react-router-dom";

//layout that takes in main component and displays it in format:
//logo that is link leading to home page
//main component - like home page or daily mode
//personal information of creator
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
