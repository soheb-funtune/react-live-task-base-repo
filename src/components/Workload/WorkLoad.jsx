import React from "react";
import "./work-load.css";
import SelectCompo from "../select-compo/select-compo";
import CardWraper from "../CardWraper/CardWraper";
const WorkLoad = () => {
  return (
    <CardWraper>
      <div className="header">
        <h3>Project Workload</h3>
        <SelectCompo text={"Last 3 Months"} />
      </div>
      <div className="work-body-container">
        <ul className="list-container">
          <span>Sam</span>
          <li></li>
          <li></li>
          <li>07</li>
        </ul>
        <ul className="list-container">
          <span>Meldy</span>
          <li></li>
          <li></li>
          <li></li>
          <li>08</li>
        </ul>
        <ul className="list-container">
          <span>Ken</span>
          <li>02</li>
        </ul>
        <ul className="list-container">
          <span>Meldy</span>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li style={{ background: "orange" }}>10</li>
        </ul>
        <ul className="list-container">
          <span>Vego</span>
          <li></li>
          <li></li>
          <li></li>
          <li>08</li>
        </ul>
        <ul className="list-container">
          <span>Kedin</span>
          <li>02</li>
        </ul>
        <ul className="list-container">
          <span>Melm</span>
          <li></li>
          <li>04</li>
        </ul>
      </div>
    </CardWraper>
  );
};

export default WorkLoad;
