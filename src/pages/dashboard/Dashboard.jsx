import React from "react";
import styled from "styled-components";
import TableCompo from "./TableCompo";
import { CiCircleQuestion } from "react-icons/ci";
import { DoughnutChart } from "./Doughnut-Chart";
const Dashboard = () => {
  return (
    <Container>
      <Wrapper padding={"20px 0px"}>
        <p>
          Ad Insights <CiCircleQuestion className="Icons" />
        </p>
        <TableCompo />
      </Wrapper>
      <Wrapper>
        <p className="secoond">
          Ad Insights <CiCircleQuestion className="Icons" />
        </p>
        <DoughnutChart />
      </Wrapper>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: ${({ single }) => (single ? single : "1fr 1fr")};
  column-gap: 20px;
  row-gap: 10px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
const Wrapper = styled.div`
  padding: ${({ padding }) => padding || "20px 0px"};
  background-color: #ffff;
  border-radius: 10px;
  border: 1px solid lightgray;
  p {
    position: relative;
    margin: 0px;
    padding-left: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid lightgray;
  }
  .Icons {
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 20px;
    bottom: 0px;
  }
`;
