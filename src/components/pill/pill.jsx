import React from "react";
import "./pill.css";

const Pill = ({ BtnIcon, text }) => {
  return (
    <div className="wraper">
      <BtnIcon className="add-icon" />

      {text}
    </div>
  );
};

export default Pill;
