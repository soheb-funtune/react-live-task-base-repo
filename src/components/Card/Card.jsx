import React from "react";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import SouthEastOutlinedIcon from "@mui/icons-material/SouthEastOutlined";
import "./Card.css";
const Card = ({ SmallIcon, title, value, text, color }) => {
  return (
    <div className="card-container">
      <span style={{ background: color || "red" }} className="icon-span">
        <SmallIcon className="icons" />
      </span>
      <p className="title">{title}</p>
      <p className="value">{value}</p>
      <small>
        {text?.includes("decrese") ? (
          <SouthEastOutlinedIcon className="arrow" style={{ color: "red" }} />
        ) : (
          <CallMadeOutlinedIcon className="arrow" />
        )}
        {text}
      </small>
    </div>
  );
};

export default Card;
