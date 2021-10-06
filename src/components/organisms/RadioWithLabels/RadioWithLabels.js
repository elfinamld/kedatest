import React, { useState } from "react";
import RadioButton from "../../molecules/RadioButton/RadioButton";

const list = [
  {
    value: "Radio A",
    children: "Radio A",
  },
  {
    value: "Radio B",
    children: "Radio B",
  },
  {
    value: "Radio C",
    children: "Radio C",
  },
];

const RadioWithLabels = () => {
  const [active, setActive] = useState(null);

  const handleActive = (value) => {
    setActive(value);
  };

  return (
    <div style={{ marginTop: 20 }}>
      Radio With Label
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
    </div>
  );
};

export default RadioWithLabels;
