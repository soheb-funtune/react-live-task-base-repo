import React from "react";
import { LeftSide } from "../Left-Side/left-side";
import styled from "styled-components";
import { RightSide } from "../Right-Side/right-side";
const Main = () => {
  return (
    <StyledMain>
      <LeftSide />
      <RightSide />
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
