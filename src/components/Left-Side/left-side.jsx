import React from "react";
import CardImg from "../../assets/card-img.png";
import { BiUpArrowAlt } from "react-icons/bi";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import StyledButton from "../Styled-Button/StyledButton";
export const LeftSide = () => {
  return (
    <WrapperDiv>
      <>
        <h3>My Card</h3>
        <img src={CardImg} alt="CardImg" />
      </>
      <BalanceDiv>
        <label>Your Balance</label>
        <PriceDiv>
          <label>$128,320</label>
          <b>
            {" "}
            <BiUpArrowAlt />
            23.12%
          </b>
          <b className="red">
            {" "}
            <BiUpArrowAlt />
            23.12%
          </b>
        </PriceDiv>
        <hr />
        <CurrancyText>
          <label>Currency</label>
          <label>Status</label>
        </CurrancyText>
        <CurrancyText color="black">
          <label>USD/ US Doller</label>
          <label>Active</label>
        </CurrancyText>
      </BalanceDiv>
      {/* Add button */}
      <StyledButton text="Add Card" bg={"#00B3FF"} Iicon={IoMdAdd} />
      <QueckTransfer>
        <h3>Quick Transfer</h3>
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </QueckTransfer>
      <InputWrap>
        <label htmlFor="cardinput">Card Number</label>
        <input type="text" id="cardinput" defaultValue={"2323 2323 2323 23"} />
      </InputWrap>
      <ButtonsDiv>
        <StyledButton text="Save Money" bg={"#00B3FF"} />
        <StyledButton text="Save as Draft" bg={"#00B3FF"} />
      </ButtonsDiv>
    </WrapperDiv>
  );
};

const WrapperDiv = styled.div`
  @media (max-width: 993px) {
    h3 {
      margin-top: 0px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 667px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`;
const BalanceDiv = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;
  label {
    font-size: 18px;
    color: lightgray;
    font-weight: 600;
  }
`;

const PriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  label {
    font-size: 18px;
    color: black;
    font-weight: 600;
  }
  b {
    font-size: 17px;
    color: black;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 2px;
    color: green;
  }
  .red {
    color: red;
  }
`;

const CurrancyText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    font-size: 18px;
    color: ${({ color }) => color || "lightgray"};
    font-weight: 600;
  }
`;
const QueckTransfer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  label {
    font-size: 18px;
    color: ${({ color }) => color || "lightgray"};
    font-weight: 600;
  }
  .circles {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .circle {
    padding: 23px;
    border-radius: 100%;
    background-color: lightgray;
  }
`;

const InputWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  label {
    font-size: 18px;
    color: lightgray;
    font-weight: 600;
  }
  input {
    padding: 10px;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border-radius: 10px;
  }
  input:active,
  input:focus {
    border-color: #00b3ff;
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
