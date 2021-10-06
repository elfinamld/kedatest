import React from "react";

const DropDown = ({ data, title, open, onOpen, onClick }) => {
  return (
    <div>
      <div onClick={onOpen}>{title}</div>
      {open
        ? data.map((el, id) => (
            <div key={id}>
              <button onClick={() => onClick(el.title)}>{el.title}</button>
            </div>
          ))
        : null}
    </div>
  );
};

export default DropDown;
