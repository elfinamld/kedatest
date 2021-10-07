import React, { useState } from "react";
import RadioButton from "../../molecules/RadioButton/RadioButton";
import BaseView from "../BaseView";

const list = [
  {
    value: "Radio A",
    label: "Radio A",
    ariaLabel: "Radio A",
  },
  {
    value: "Radio B",
    label: "Radio B",
    ariaLabel: "Radio B",
  },
  {
    value: "Radio C",
    label: "Radio C",
    ariaLabel: "Radio C",
  },
];

const RadioWithLabels = () => {
  const [active, setActive] = useState("Radio A");

  const handleActive = (value) => {
    setActive(value);
  };

  return (
    <BaseView title={"Radio Button With Prop Label"}>
      <div style={{ display: "flex" }}>
        {list.map((el, id) => (
          <RadioButton
            key={id}
            index={id}
            onChange={handleActive}
            active={active === el.value}
            {...el}
          />
        ))}
      </div>
    </BaseView>
  );
};

export default RadioWithLabels;
