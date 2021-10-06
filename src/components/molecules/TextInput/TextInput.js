import TextField from "@mui/material/TextField";
import React from "react";
import { styling } from "../../../assets/styling";
import "./index.css";

const TextInput = ({ disabled, style }) => {
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
          sx: { ...styling.text },
        }}
        disabled={disabled}
      />
    </div>
  );
};

export default TextInput;
