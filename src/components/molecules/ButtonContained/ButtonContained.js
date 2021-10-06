import React from "react";
import Button from "@mui/material/Button";

const ButtonContained = ({ label, bgColor, onClick, disabled }) => {
  return (
    <Button
      onClick={() => onClick(label)}
      variant="contained"
      disabled={disabled}
      size={"small"}
      style={{
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: bgColor,
        color: "white",
        borderColor: "transparent",
        fontSize: 10,
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonContained;
