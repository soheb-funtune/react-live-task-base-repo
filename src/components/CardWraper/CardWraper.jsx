import React from "react";
import "./card-wraper.css";
const CardWraper = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

export default CardWraper;
