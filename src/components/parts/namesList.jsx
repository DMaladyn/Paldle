import classes from "./namesList.module.css";

function NamesList(props) {
  return (
    <div className={`${classes.selectWindow} ${classes.customScrollbar}`}>
      <ul>
        {props.palsList.map((x, index) => (
          <li
            className={classes.listHolder}
            key={index}
            onClick={() => {
              props.makeGuess(x);
              props.blockHover();
            }}
          >
            <div className={classes.listElement}>
              <img
                className={classes.listImg}
                src={`/iconsResized64/${x}_64.png`}
                alt={""}
              />
              <span className={classes.listName}>{x.replace(/_/g, " ")}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NamesList;
