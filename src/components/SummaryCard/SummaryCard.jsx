import React from "react";
import CardWraper from "../CardWraper/CardWraper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./SummaryCard.css";
import CircularProgress from "@mui/material/CircularProgress";
import SelectCompo from "../select-compo/select-compo";
import { Divider } from "@mui/material";

const SummaryCard = () => {
  const arr = [
    {
      name: "Rasel",
      manager: "Abhishek",
      date: "may 25,2023",
      status: "Completed",
      progress: 100,
    },
    {
      name: "Soheb",
      manager: "Abhishek",
      date: "may 25,2023",
      status: "At risk",
      progress: 68,
    },
    {
      name: "Sayyad",
      manager: "Abhishek",
      date: "may 25,2023",
      status: "Delayed",
      progress: 35,
    },
    {
      name: "Arman",
      manager: "Abhishek",
      date: "may 25,2023",
      status: "On going",
      progress: 50,
    },
  ];
  return (
    <CardWraper>
      <div className="header-div">
        <h3>Project Summary</h3>
        <div className="select-group-div">
          <SelectCompo text={`Project`} />
          <SelectCompo text={`Manager`} />
          <SelectCompo text={`Status`} />
        </div>
      </div>
      <div className="table-div">
        <div className="table-headings">
          <b>Name</b>
          <b>Project Manager</b>
          <b>Due Date</b>
          <b>Status</b>
          <b>Progress</b>
        </div>
        <Divider />
        <div className="table-body">
          {arr?.map(({ name, manager, date, status, progress }, index) => (
            <div className="single-item" key={index}>
              <span>{name}</span>
              <span>{manager}</span>
              <span>{date}</span>
              <span
                className={`status-spna ${
                  status == "Completed"
                    ? "green"
                    : status == "On going"
                    ? "orange"
                    : status == "Delayed"
                    ? "yellow"
                    : "red"
                }`}
              >
                {status}
              </span>
              <span>
                <Box sx={{ position: "relative", display: "inline-flex" }}>
                  <CircularProgress
                    style={{
                      color:
                        status == "Completed"
                          ? "green"
                          : status == "On going"
                          ? "orange"
                          : status == "Delayed"
                          ? "yellow"
                          : "red",
                    }}
                    variant="determinate"
                    value={progress}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      opacity: 0.3,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="caption"
                      component="div"
                      style={{
                        color: "black",
                      }}
                    >
                      {`${Math.round(progress)}%`}
                    </Typography>
                  </Box>
                </Box>
              </span>
            </div>
          ))}
        </div>
      </div>
    </CardWraper>
  );
};

export default SummaryCard;
