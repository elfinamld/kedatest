import React from "react";
import { styling } from "../../../assets/styling";
import Button from "../../molecules/Button";
import TextInput from "../../molecules/TextInput";

const button = [
  {
    label: "Cancel",
    bgColor: "ButtonHighlight",
  },
  {
    label: "OK",
    bgColor: "rgb(8,72,191)",
  },
];

const CombinationComp = () => {
  return (
    <div>
      <div>
        <label style={{ ...styling.text }}>Input</label>
        <TextInput style={{ marginTop: 5 }} />
      </div>
      <div style={{ marginTop: 10 }}>
        <label style={{ ...styling.text }}>Input Disabled With Button</label>
        <div style={styling.alignCenter}>
          <TextInput disabled={true} style={{ marginTop: 5 }} />
          {button.map((el, id) => (
            <div key={id} style={{ marginLeft: 10 }}>
              <Button
                {...el}
                onClick={(label) => console.log("Clicked!", label)}
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <label style={{ ...styling.text }}>Input Disabled</label>
        <div style={styling.alignCenter}>
          <TextInput style={{ marginTop: 5 }} disabled={true} />
        </div>
      </div>
    </div>
  );
};

export default CombinationComp;
