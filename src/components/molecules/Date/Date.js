import React from "react";
import { styling } from "../../../assets/styling";

const Date = () => {
  return (
    <div>
      <input
        type={"date"}
        style={{
          height: 30,
          paddingLeft: 10,
          paddingRight: 10,
          borderRadius: 5,
          borderWidth: 0.2,
          ...styling.text,
        }}
      />
    </div>
  );
};

export default Date;
