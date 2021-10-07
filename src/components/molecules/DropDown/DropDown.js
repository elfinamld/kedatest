import { MenuItem, Select } from "@mui/material";
import React from "react";
import { styling } from "../../../assets/styling";

const DropDown = ({ data, title, open, onOpen, onClick }) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      aria-label={"select-multiple"}
      id="demo-simple-select"
      value={title}
      displayEmpty
      size={"small"}
      onChange={onClick}
    >
      <MenuItem value="" style={{ ...styling.text }}>
        <em>Select Language</em>
      </MenuItem>
      {data.map((el, id) => (
        <MenuItem key={id} value={el.title} style={{ ...styling.text }}>
          {el.title}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DropDown;
