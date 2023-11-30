import React from "react";
import styled from "styled-components";
import { styled as styedMui } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styedMui(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#00B3FF" : "#308fe8",
  },
}));
const SecondRow = () => {
  const savingsArray = [
    {
      text: "Gaming PC",
      value: 309,
    },
    {
      text: "New House",
      value: 950,
    },
    {
      text: "Summer Trip",
      value: 550,
    },
    {
      text: "Wedding",
      value: 620,
    },
    {
      text: "To Up Game",
      value: 170,
    },
  ];
  return (
    <WrapperDiv>
      <ChartDiv>Chart div</ChartDiv>
      <MySavings>
        <HeadingDiv>
          <b>My Savings</b>
          <label>View All</label>
        </HeadingDiv>
        <SavingsContainer>
          {savingsArray?.map(({ text, value }, i) => (
            <div key={i} className="item">
              <div>
                <b>{text}</b>
                <BorderLinearProgress
                  variant="determinate"
                  value={value / 10}
                />
              </div>
              <b>${value}</b>
            </div>
          ))}
        </SavingsContainer>
      </MySavings>
    </WrapperDiv>
  );
};

export default SecondRow;

const WrapperDiv = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 4fr 2fr;
  @media (max-width: 993px) {
    grid-template-columns: 1fr;
  }
`;

const ChartDiv = styled.div``;

const MySavings = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  font-size: 14px;
  padding: 20px;
`;
const HeadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  b {
    font-size: 20px;
    color: black;
    font-weight: 700;
  }
  label {
    color: #00b3ff;
    font-size: 16px;
    font-weight: 600;
  }
`;

const SavingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0px;
  .item {
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .item div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1;
  }
  .item div b {
    font-size: 16px;
  }
`;
