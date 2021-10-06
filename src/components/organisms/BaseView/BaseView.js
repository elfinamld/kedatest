import React from "react";
import TitleText from "../../molecules/Text/TitleText";

const BaseView = ({ children, title }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <TitleText title={title} />
      <div style={{ paddingTop: 15, paddingBottom: 10 }}>{children}</div>
    </div>
  );
};

export default BaseView;
