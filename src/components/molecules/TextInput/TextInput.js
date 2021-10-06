import React from "react";
import { styling } from "../../../assets/styling";
import "./index.css";

const TextInput = ({ disabled, style }) => {
  return (
    <div style={style}>
      <input
        type={"text"}
        style={styling.base}
        name={"name"}
        disabled={disabled}
        placeholder={"Input text in here"}
      />
    </div>
  );
};

export default TextInput;
