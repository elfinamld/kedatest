import React from "react";
import { styling } from "../../../assets/styling";
import ButtonContained from "../../molecules/ButtonContained";
import TextInput from "../../molecules/TextInput";

const button = [
  {
    label: "Cancel",
    bgColor: "#BABABA",
  },
  {
    label: "OK",
    bgColor: "rgb(8,72,191)",
  },
];

const CombinationComp = ({ disabled }) => {
  return (
    <div>
      <div>
        <label style={{ ...styling.text }}>Input</label>
        <TextInput
          style={{ marginTop: 5 }}
          disabled={disabled}
          testId={"text-field-1"}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <label style={{ ...styling.text }}>Input With Button</label>
        <div style={{ ...styling.alignCenter, alignItems: "flex-end" }}>
          <TextInput
            disabled={disabled}
            style={{ marginTop: 5 }}
            testId={"text-field-2"}
          />
          {button.map((el, id) => (
            <div key={id} style={{ marginLeft: 10 }}>
              <ButtonContained
                {...el}
                onClick={(label) => console.log("Clicked!", label)}
                disabled={disabled}
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <label style={{ ...styling.text }}>Input Disabled</label>
        <div style={styling.alignCenter}>
          <TextInput
            style={{ marginTop: 5 }}
            disabled={true}
            testId={"text-field-3"}
          />
        </div>
      </div>
    </div>
  );
};

export default CombinationComp;
