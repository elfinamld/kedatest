import React from "react";
import { styling } from "../../../assets/styling";

const Date = () => {
  return (
    <div>
      <input
        aria-label={"date-picker"}
        type={"date"}
        defaultValue={"2017-06-01"}
        style={{
          backgroundColor: "white",
          borderColor: "ButtonHighlight",
          borderTopColor: "ButtonHighlight",
          borderBottomColor: "ButtonHighlight",
          height: 30,
          paddingLeft: 10,
          paddingRight: 10,
          borderRadius: 5,
          ...styling.text,
        }}
      />
    </div>
  );
};

export default Date;
