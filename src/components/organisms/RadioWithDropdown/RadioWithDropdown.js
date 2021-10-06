import React, { useState } from "react";
import DropDown from "../../molecules/DropDown/DropDown";
import RadioButton from "../../molecules/RadioButton/RadioButton";
import TextInput from "../../molecules/TextInput";
import BaseView from "../BaseView/BaseView";

const data = [
  {
    id: 0,
    title: "JavaScript",
  },
  {
    id: 1,
    title: "PHP",
  },
  {
    id: 2,
    title: "Java",
  },
];

const RadioWithDropdown = () => {
  const [active, setActive] = useState("opt2");
  const [title, setTitle] = useState("Select Language");
  const [open, setOpen] = useState(false);

  const handleActive = (value) => {
    setActive(value);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleValue = (title) => {
    setTitle(title);
    handleOpen();
  };

  const list = [
    {
      value: "opt1",
      label: "Representative",
      children: <TextInput />,
    },
    {
      value: "opt2",
      label: "Representative",
      children: (
        <DropDown
          data={data}
          title={title}
          open={open}
          onOpen={handleOpen}
          onClick={handleValue}
        />
      ),
    },
  ];

  return (
    <BaseView title={"Radio With Sub Component Drop Down"}>
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

export default RadioWithDropdown;
