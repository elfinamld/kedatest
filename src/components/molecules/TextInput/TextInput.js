import TextField from "@mui/material/TextField";
import React from "react";
import { styling } from "../../../assets/styling";
import "./index.css";

const TextInput = ({ disabled, style, testId }) => {
  return (
    <div style={style}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder={"Input text in here"}
        size="small"
        style={{
          backgroundColor: disabled ? "ButtonHighlight " : "white",
          borderColor: "green",
          borderWidth: 1,
        }}
        inputProps={{
          "data-testid": testId || "text-field",
          sx: { ...styling.text },
        }}
        disabled={disabled}
      />
    </div>
  );
};

export default TextInput;
