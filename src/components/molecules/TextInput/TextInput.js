import React from "react";

const TextInput = ({ disabled }) => {
  return (
    <div>
      <input type={"text"} style={{ height: 30 }} disabled={disabled} />
    </div>
  );
};

export default TextInput;
