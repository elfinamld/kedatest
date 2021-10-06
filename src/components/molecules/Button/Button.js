import React from "react";

const Button = ({ label, bgColor, onClick }) => {
  return (
    <button
      onClick={() => onClick(label)}
      style={{
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: bgColor,
        color: "white",
        borderColor: "transparent",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
