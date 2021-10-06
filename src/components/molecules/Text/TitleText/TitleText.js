import React from "react";
import { styling } from "../../../../assets/styling";

const TitleText = ({ title }) => {
  return (
    <div>
      <label style={styling.title}>{title}</label>
    </div>
  );
};

export default TitleText;
