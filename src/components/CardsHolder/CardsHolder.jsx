import React from "react";
import Card from "../Card/Card";
import "./card-holder.css";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SelectCompo from "../select-compo/select-compo";
import SummaryCard from "../SummaryCard/SummaryCard";
import OverAllProgress from "../OverAllProgress/OverAllProgress";
const CardsHolder = () => {
  const firstCardsData = [
    {
      SmallIcon: LeaderboardOutlinedIcon,
      title: "Total revenue",
      value: `$53,00989`,
      text: `12% increse from last month`,
      color: "orange",
    },
    {
      SmallIcon: BusinessCenterOutlinedIcon,
      title: "Projects",
      value: `95/100`,
      text: `10% decrese from last month`,
      color: "lightgreen",
    },
    {
      SmallIcon: AccessTimeOutlinedIcon,
      title: "Time spent",
      value: `1122 / 1300 Hours`,
      text: `8% increse from last month`,
      color: "orange",
    },
    {
      SmallIcon: PersonOutlineOutlinedIcon,
      title: "Resources",
      value: `101 / 120`,
      text: `2% increse from last month`,
    },
  ];
  return (
    <div className="container">
      <div className="overview-heading">
        <h2>Overview</h2> <SelectCompo text={`Last 30 Days`} />
      </div>
      <div className="first-row">
        {firstCardsData?.map((item, i) => (
          <Card {...item} key={i} i />
        ))}
      </div>
      <div className="second-row">
        <SummaryCard />
        <OverAllProgress />
      </div>
    </div>
  );
};

export default CardsHolder;
