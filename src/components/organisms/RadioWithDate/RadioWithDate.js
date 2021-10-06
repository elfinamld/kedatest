import React, { useState } from "react";
import Date from "../../molecules/Date";
import RadioButton from "../../molecules/RadioButton/RadioButton";

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

export default RadioWithDate;
