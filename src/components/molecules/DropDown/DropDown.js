import React from "react";

const DropDown = ({ data, title, open, onOpen, onClick }) => {
  console.log(open);
  return (
    <select id="language" placeholder={title}>
      {data.map((el, id) => (
        <option
          key={id}
          style={{ marginLeft: 10, marginRight: 10 }}
          value={el.title}
          onClick={() => {
            onOpen();
            onClick(el.title);
          }}
          selected={el.title === title ? title : null}
        >
          {el.title}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
