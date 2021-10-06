import React from "react";
import { styling } from "../../../assets/styling";

const Date = () => {
  return (
    <div>
      <input
        type={"date"}
        style={{
          backgroundColor: "white",
          borderColor: "ButtonHighlight",
          height: 30,
          paddingLeft: 10,
          paddingRight: 10,
          borderRadius: 5,
          borderWidth: 0.5,
          ...styling.text,
        }}
      />
    </div>
  );
};

export default Date;
