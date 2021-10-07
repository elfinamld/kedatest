import React from "react";
import { styling } from "../../../assets/styling";

const RadioButton = ({
  ariaLabel,
  value,
  children,
  onChange,
  active,
  label,
  isLast,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: 15,
        marginBottom: isLast ? 15 : 0,
      }}
    >
      <label
        style={{
          ...styling.text,
          display: "flex",
        }}
      >
        <input
          type="radio"
          style={{ marginRight: 10 }}
          defaultValue={value}
          checked={active}
          onChange={() => {
            onChange(value);
          }}
        />

        {label}
      </label>
      {label ? null : children}
    </div>
  );
};

export default RadioButton;
