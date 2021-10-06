import React, { useState } from "react";
import Date from "../../molecules/Date";
import RadioButton from "../../molecules/RadioButton/RadioButton";
import BaseView from "../BaseView/BaseView";

const list = [
  {
    value: "opt1",
    label: "Representative",
    children: <Date />,
  },
  {
    value: "opt2",
    label: "Representative",
    children: <Date />,
  },
];

const RadioWithDate = () => {
  const [active, setActive] = useState("opt1");

  const handleActive = (value) => {
    setActive(value);
  };
  return (
    <BaseView title={"Radio With Sub Component Date"}>
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

export default RadioWithDate;
