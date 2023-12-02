import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLeft>
        <b>APP LOGO</b>
      </HeaderLeft>
      <HeaderRight>
        <Link to={"/"}>
          <label>DASHABOARD</label>
        </Link>
        <Link to={"/ads"}>
          <label>CREATE ADS</label>
        </Link>
      </HeaderRight>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 5px inset lightgray;
  justify-content: space-between;
  gap: 20px;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media (max-width: 993px) {
    gap: 7px;
  }
  b {
    font-size: 20px;
    font-weight: 900;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  a {
    text-decoration: none;
  }
  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    padding: 10px 10px;
    border-radius: 10px;
  }
  label:hover,
  label:active {
    background: #e3f6fe;
    color: #00b3ff;
    img {
      filter: hue-rotate(320deg);
    }
  }
`;
