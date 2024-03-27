import classes from "./personalLinks.module.css";

function PersonalLinks() {
  //my personal links, lie github
  return (
    <div className={classes.personal}>
      Made by
      <a
        className={classes.personalLink}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/DMaladyn"
      >
        <img className={classes.personalIcon} src={"github.png"} />
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
  );
}

export default PersonalLinks;
