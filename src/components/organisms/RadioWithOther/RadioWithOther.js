import React, { useState } from "react";
import RadioButton from "../../molecules/RadioButton/RadioButton";
import TextInput from "../../molecules/TextInput";
import CombinationComp from "../CombinationComp";

const list = [
  {
    value: "opt1",
    children: <TextInput />,
  },
  {
    value: "opt2",
    children: <CombinationComp />,
  },
];

const RadioWithOther = () => {
  const [active, setActive] = useState("opt1");

  const handleActive = (value) => {
    setActive(value);
  };
  return (
    <div style={{ marginTop: 20 }}>
      Radio With Sub Component Date
      <div>
        {list.map((el, id) => (
          <RadioButton
            key={id}
            index={id}
            onChange={handleActive}
            active={active === el.value}
            {...el}
            label={active !== el.value ? el.label : null}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioWithOther;
