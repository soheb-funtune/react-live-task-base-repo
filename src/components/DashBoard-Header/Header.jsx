import React from "react";
import Logo from "../../assets/Logo.png";
import header1 from "../../assets/header1.png";
import header2 from "../../assets/header2.png";
import header3 from "../../assets/header3.png";
import header4 from "../../assets/header4.png";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

const Header = () => {
  const lessthan767 = useMediaPredicate("(max-width: 767px)");

  return (
    <StyledHeader>
      <HeaderLeft>
        <img src={Logo} alt="logo" />
        <>
          <Link to={"/"}>
            <label>
              <img src={header1} alt="logo" />
              {!lessthan767 && "Overview"}
            </label>
          </Link>
          <Link to={"/transaction"}>
            <label>
              <img src={header2} alt="logo" />
              {!lessthan767 && "Transaction"}
            </label>
          </Link>
          <Link to={"/invoice"}>
            <label>
              <img src={header3} alt="logo" />
              {!lessthan767 && "Invoice"}
            </label>
          </Link>
          <Link to={"/activity"}>
            <label>
              <img src={header4} alt="logo" />
              {!lessthan767 && "Activity"}
            </label>
          </Link>
        </>
      </HeaderLeft>
      <HeaderRight>
        <SwitchDiv>
          <>
            <input
              style={{ visibility: "hidden" }}
              id="moon"
              type="radio"
              name="theme"
              value={"moon"}
            />
            <label htmlFor="moon">
              <FaRegMoon />
            </label>
          </>
          <>
            {" "}
            <input
              style={{ visibility: "hidden" }}
              id="sun"
              defaultChecked
              type="radio"
              name="theme"
              value={"sun"}
            />
            <label htmlFor="sun">
              <IoSunnyOutline />
            </label>
          </>
        </SwitchDiv>
        <IconWrapper>
          <CiBellOn />
        </IconWrapper>
        <IconWrapper>
          <CiSettings />
        </IconWrapper>
        <IconWrapper>
          <CiSettings style={{ visibility: "hidden" }} />
        </IconWrapper>
      </HeaderRight>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 993px) {
    flex-direction: column;
  }
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media (max-width: 993px) {
    gap: 7px;
  }
  a {
    text-decoration: none;
  }
  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 15px;
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
  img {
    height: 25px;
  }
  label img {
    width: auto;
    height: 21px;
    cursor: pointer;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const SwitchDiv = styled.div`
  box-shadow: 1px 1px 5px lightgray;
  margin: 0px;
  padding: 3px;
  width: auto;
  height: max-content;
  background: #f5f6fa;
  border-radius: 12px;
  display: flex;
  align-items: center;

  input[type="radio"] {
    appearance: none;
    visibility: hidden;
    position: absolute;
  }
  label {
    padding: 5px;
    font-size: 12px;
    transition: all ease-in-out 0.4s;
  }
  input:checked + label {
    border-radius: 13px;
    background: #ffffff;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6fa;
  padding: 10px;
  border-radius: 100%;
`;

// export const Radio = styled.div`
//   input[type="radio"] {
//     appearance: none;
//     display: none;
//   }

//   label {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 4px 30px;
//     text-align: center;
//     overflow: hidden;
//     transition: linear 0.3s;
//     cursor: pointer;
//     border: 1px solid #999;
//     margin-right: 10px;
//     @media screen and (max-width: 767px) {
//       font-size: 14px;
//       margin-right: 0px;
//     }
//   }

//   input[type="radio"]:checked + label {
//     background-color: rgb(67 56 202);
//     color: white;
//     transition: 0.3s;
//   }
//   input[type="radio"] + label {
//     @media screen and (max-width: 767px) {
//       width: 50%;
//     }
//   }
// `;
