import React from "react";
import { styling } from "../../../assets/styling";

const RadioButton = ({ value, children, onChange, active, label, isLast }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: 15,
        marginBottom: isLast ? 15 : 0,
      }}
    >
      <input
        type="radio"
        defaultValue={value}
        checked={active}
        onChange={() => {
          onChange(value);
        }}
      />
      <label style={{ ...styling.text, marginLeft: 10 }}>{label}</label>
      {label ? null : children}
    </div>
  );
};

export default RadioButton;
