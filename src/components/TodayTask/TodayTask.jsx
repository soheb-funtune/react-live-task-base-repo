import React, { useState } from "react";
import "./today-task.css";
import styled from "styled-components";
import { Divider } from "@mui/material";
import CardWraper from "../CardWraper/CardWraper";
const TodayTask = () => {
  const [activeLi, setActiveLi] = useState("");
  const liArr = ["All", "Important", "Notes", "Links"];
  const listData = [
    {
      text: " Create a user flow of social application design.",
      status: "Approved",
    },
    {
      text: " Create a user flow of social application design.",
      status: "In review",
    },
    {
      text: " Create a user flow of social application design.",
      status: "Approved",
    },
    {
      text: " Interactive Prototype for App.",
      status: "On going",
    },
  ];
  return (
    <CardWraper>
      <h3>Today Task</h3>
      <div className="table">
        <ul className="table-header">
          {liArr?.map((item) => (
            <StyledLi
              key={item}
              activeli={activeLi === item}
              activeLi
              onClick={() => setActiveLi(item)}
            >
              {item}
              {item == "All" ? (
                <span>10</span>
              ) : item === "Notes" ? (
                "05"
              ) : item === "Links" ? (
                <span>{"10"}</span>
              ) : (
                ""
              )}
            </StyledLi>
          ))}
        </ul>
        <Divider />
        <div className="table-body">
          {listData?.map(({ text, status }, i) => (
            <div key={i} className="single-task-item">
              <div className="checkbox-div">
                <label htmlFor={i}>
                  <input className="checkbox" type="checkbox" name={i} id={i} />
                  <label class="checkmark"></label>
                  {text}
                </label>
              </div>
              <div className="flex-div">
                <StatusSpan status={status}>{status}</StatusSpan>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardWraper>
  );
};

export default TodayTask;

const StyledLi = styled.li`
  position: relative;
  cursor: pointer;
  padding: 3px 10px 7px;
  font-weight: 600;
  font-size: 14px;
  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
    width: ${({ activeli }) => (activeli ? "80%" : "0px")};
    background: darkgoldenrod;
    height: 3px;
    transition: all ease-in-out 0.7s;
    margin: auto;
  }
  span {
    margin-left: 5px;
    background: #d9d0d0;
    padding: 3px;
    border-radius: 100%;
    color: #292986;
    font-size: 12px;
  }
`;

const StatusSpan = styled.span`
  display: flex;
  align-items: center;
  background: ${({ status }) =>
    "Approved" == status
      ? "rgba(0, 128, 0,0.3)"
      : "On going" == status
      ? "rgba(255, 165, 0,0.3)"
      : "In review" == status
      ? "rgba(255, 0, 0,0.3)"
      : "black"};
  color: ${({ status }) =>
    "Approved" == status
      ? "rgb(11, 192, 11)"
      : "On going" == status
      ? "rgb(255, 165, 0)"
      : "In review" == status
      ? "rgb(255, 0, 0)"
      : "black"};
  width: fit-content;
  text-align: right;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 12px;
`;
