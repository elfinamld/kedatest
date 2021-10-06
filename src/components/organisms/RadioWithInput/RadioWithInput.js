import React, { useState } from "react";
import RadioButton from "../../molecules/RadioButton/RadioButton";
import TextInput from "../../molecules/TextInput";
import BaseView from "../BaseView/BaseView";

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
    <BaseView title={" Radio With Sub Component Text Input"}>
      <div>
        {list.map((el, id) => (
          <RadioButton
            key={id}
            onChange={handleActive}
            active={active === el.value}
            isLast={list.length - 1 !== id}
            {...el}
            label={active !== el.value ? el.label : null}
          />
        ))}
      </div>
    </BaseView>
  );
};

export default RadioWithInput;
