import React from "react";
import "./over-all.css";
import SelectCompo from "../select-compo/select-compo";
import CardWraper from "../CardWraper/CardWraper";
const OverAllProgress = () => {
  return (
    <CardWraper>
      <div className="header">
        <h3>Overall Progress</h3>
        <SelectCompo text={"All"} />
      </div>
      <div className="body-container">
        <div className="body-main">95%</div>
        <div className="body-footer">
          <div className="item">
            <b style={{ color: "black" }}>95</b>
            <small>Total Projects</small>
          </div>
          <div className="item">
            <b style={{ color: "green" }}>25</b>
            <small>Completed</small>
          </div>
          <div className="item">
            <b style={{ color: "#c5c51b" }}>25</b>
            <small>Delayed</small>
          </div>
          <div className="item">
            <b style={{ color: "orange" }}>35</b>
            <small>On going</small>
          </div>
        </div>
      </div>
    </CardWraper>
  );
};

export default OverAllProgress;
