import React from "react";

const RadioButton = ({ value, children, onChange, active, label }) => {
  return (
    <div className="radio" style={{ display: "flex", alignItems: "center" }}>
      <input
        type="radio"
        defaultValue={value}
        checked={active}
        onChange={() => {
          onChange(value);
        }}
      />
      <label>{label}</label>
      {label ? null : children}
    </div>
  );
};

export default RadioButton;
