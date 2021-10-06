import React, { useState } from "react";
import RadioButton from "../../molecules/RadioButton/RadioButton";
import TextInput from "../../molecules/TextInput";

const list = [
  {
    value: "opt1",
    label: "Representative",
    children: <TextInput />,
  },
  {
    value: "opt2",
    label: "Representative",
    children: <TextInput />,
  },
];

const RadioWithInput = () => {
  const [active, setActive] = useState("opt1");

  const handleActive = (value) => {
    setActive(value);
  };
  return (
    <div style={{ marginTop: 20 }}>
      Radio With Sub Component Text Input
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

export default RadioWithInput;
