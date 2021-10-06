import React from "react";
import Button from "../../molecules/Button";
import TextInput from "../../molecules/TextInput";

const CombinationComp = () => {
  return (
    <div>
      <div>
        Input
        <TextInput />
      </div>
      <div>
        Input Disabled With Button
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextInput disabled={true} />
          {[0, 1].map((el, id) => (
            <Button key={id} />
          ))}
        </div>
      </div>
      <div>
        Input Disabled
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextInput disabled={true} />
        </div>
      </div>
    </div>
  );
};

export default CombinationComp;
