import React, { useState } from "react";
import RadioButton from "../../molecules/RadioButton/RadioButton";
import TextInput from "../../molecules/TextInput";
import BaseView from "../BaseView/BaseView";
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
    <BaseView title={"Radio With Other Sub Component"}>
      <div>
        {list.map((el, id) => (
          <RadioButton
            key={id}
            index={id}
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

export default RadioWithOther;
