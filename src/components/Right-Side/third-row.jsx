import React from "react";
import styled from "styled-components";
import { GrDownload } from "react-icons/gr";
import { MdCompareArrows } from "react-icons/md";

import { DoughnutChart } from "../charts/Doughnut";

const ThirdRow = () => {
  const transactions = [
    {
      Icons: GrDownload,
      text: "Order Revenue",
      value: ` +874`,
      date: `27 Apr, 22`,
    },
    {
      Icons: MdCompareArrows,
      text: "Withdrawal Initiated",
      value: ` -2490`,
      date: `25 Apr, 22`,
    },
    {
      Icons: GrDownload,
      text: "Order Revenue",
      value: ` +126`,
      date: `1 Mar, 22`,
    },
  ];
  return (
    <WrapperDiv>
      <ChartDiv>
        <b>All Expenses</b>
        <DurationDiv>
          <div>
            <b>Daily</b>
            <b>$475</b>
          </div>
          <div>
            <b>Weekly</b>
            <b>$3,327</b>
          </div>
          <div>
            <b>Monthly</b>
            <b>$12.131</b>
          </div>
        </DurationDiv>
        <DoughnutChart />
      </ChartDiv>
      <MySavings>
        <HeadingDiv>
          <b>History Transactions</b>
          <label>View All</label>
        </HeadingDiv>
        <SavingsContainer>
          {transactions?.map(({ text, value, Icons, date }, i) => (
            <div key={i} className="item">
              <span className="icons">
                <Icons />
              </span>
              <div>
                <b>{text}</b>
                <label>{date}</label>
              </div>
              <b style={{ color: value?.includes("+") ? "lightgreen" : "red" }}>
                $ {` `}
                {value}
              </b>
            </div>
          ))}
        </SavingsContainer>
      </MySavings>
    </WrapperDiv>
  );
};

export default ThirdRow;

const WrapperDiv = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 993px) {
    grid-template-columns: 1fr;
  }
`;

const ChartDiv = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  font-size: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  b {
    font-size: 20px;
    color: black;
    font-weight: 700;
  }
`;

const DurationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
  }
  div b {
    font-size: 18px;
  }
  div b:first-child {
    font-size: 16px;
    color: lightgray;
    font-weight: 500;
  }
`;

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
    flex: 1;
  }
  .item .icons {
    padding: 5px 10px;
    background: #00b3ff;
    color: #ffff;
    border-radius: 100%;
    font-size: 20px;
    font-weight: 700;
  }
  .item div b {
    font-size: 16px;
  }
`;
