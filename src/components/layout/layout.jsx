import classes from "./layout.module.css";

import logo from "../graphics/logo.png";
import githubLogo from "./layoutIcons/github.png";

import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <div className={classes.layoutContainer}>
      <Link className={classes.logoLink} to="/">
        <img className={classes.logo} src={logo}></img>
      </Link>
      <br></br>

      <main className={classes.main}>{props.children}</main>

      <div className={classes.personal}>
        Made by
        <a
          className={classes.personalLink}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/DMaladyn"
        >
          <img className={classes.personalIcon} src={githubLogo} />
          DMaladyn
        </a>
        <a
          className={classes.personalLink}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/DMaladyn"
        >
          ☕BuyMeACoffee
        </a>
      </div>
    </div>
  );
}

export default Layout;
