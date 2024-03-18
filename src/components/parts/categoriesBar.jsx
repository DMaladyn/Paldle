import classes from "./categoriesBar.module.css";

import HoverExplanation from "./hoverExplanation";

import { useState } from "react";

function CategoriesBar() {
  //position to control position of hover window, visibility to set its opacity and text to change category description
  const [position, setPosition] = useState({ bottom: 0, left: 0 });
  const [visibility, setVisibility] = useState(0);
  const [text, setText] = useState("");

  //move hover window to specified spot above category, and set text inside to description of that category
  function moveHoverWindow(x, y, description) {
    setText(description);
    setPosition({ bottom: y, left: x });
    setVisibility(1);
  }

  //hides hover window and moves it to default position
  function hideHoverWindow() {
    setText("");
    setPosition({ bottom: 55, left: 0 });
    setVisibility(0);
  }

  //function that creates div to be displayed inside informational window that appears
  //when you hover over category
  function createRules(red, yellow, green) {
    return (
      <div
        style={{
          width: "90%",
          textAlign: "left",
          paddingLeft: "12px",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        {red ? (
          <>
            <span style={{ width: "100%" }}>
              <span style={{ color: "red" }}>Red</span> - {red}
            </span>
            <br></br>
          </>
        ) : null}

        {yellow ? (
          <>
            <span style={{ width: "100%" }}>
              <span style={{ color: "yellow" }}>Yellow</span> - {yellow}
            </span>
            <br></br>
          </>
        ) : null}

        {green ? (
          <span style={{ width: "100%" }}>
            <span style={{ color: "green" }}>Green</span> - {green}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div className={classes.categoriesContainer}>
      {/* passing values to HoverExplaination element */}
      <HoverExplanation
        visibility={visibility}
        position={position}
        text={text}
      />
      <div className={classes.categories}>
        <span>Name</span>
        {/* declaring position and description each category - first width (left) in %, second height (bottom) in px*/}
        <span
          onMouseOut={() => hideHoverWindow()}
          onMouseOver={() =>
            moveHoverWindow(
              20.5,
              55,
              createRules(
                "Wrong Pal Index",
                "Correct Pal is within range of 10 in Paldeck",
                "Correct Pal Index"
              )
            )
          }
        >
          Index
        </span>
        <span
          onMouseOut={() => hideHoverWindow()}
          onMouseOver={() =>
            moveHoverWindow(
              29.5,
              55,
              createRules(
                "Correct Pal is different type",
                "Type matches one of Correct Pal's types",
                "Type matches Correct Pal's type"
              )
            )
          }
        >
          Type
        </span>
        <span
          onMouseOut={() => hideHoverWindow()}
          onMouseOver={() =>
            moveHoverWindow(
              39.5,
              55,
              createRules(
                "Correct Pal's partner skill has different purpose",
                "Correct Pal's partner skill is partially for this",
                "Correct Pal's partner skill is designed for that"
              )
            )
          }
        >
          Partner Skill
        </span>
        <span
          onMouseOut={() => hideHoverWindow()}
          onMouseOver={() =>
            moveHoverWindow(
              47,
              55,
              createRules(
                "One has unique Pal Gear, and the other doesn't have it",
                "",
                "Both have, or both don't have unique Pal Gear"
              )
            )
          }
        >
          Has Pal Gear
        </span>
        <span
          onMouseOut={() => hideHoverWindow()}
          onMouseOver={() =>
            moveHoverWindow(
              54,
              55,
              createRules(
                "One is mountable, and the other isn't",
                "Both are different types of mounts",
                "Both are/aren't mountable"
              )
            )
          }
        >
          Mount Type
        </span>
        <span
          onMouseOut={() => hideHoverWindow()}
          onMouseOver={() =>
            moveHoverWindow(
              61.5,
              55,
              createRules(
                "One has Boss Version, and the other doesn't have it",
                "",
                "Both have, or both don't have Boss Version"
              )
            )
          }
        >
          Has Boss Version
        </span>
        <span
          onMouseOut={() => hideHoverWindow()}
          onMouseOver={() =>
            moveHoverWindow(
              71.5,
              55,
              createRules(
                "Pals have different food consumption",
                "Correct Pal's food consumption is 1 higher/smaller",
                "Pals have same food consumption"
              )
            )
          }
        >
          Food
        </span>
        <span
          onMouseOut={() => hideHoverWindow()}
          onMouseOver={() =>
            moveHoverWindow(
              89.5,
              55,
              createRules(
                "Correct Pal isn't suitable for that work",
                "Correct Pal is suitable for that work, but on different level",
                "Correct Pal is suitable for that work on same level"
              )
            )
          }
        >
          Work Suitability
        </span>
      </div>
    </div>
  );
}

export default CategoriesBar;
