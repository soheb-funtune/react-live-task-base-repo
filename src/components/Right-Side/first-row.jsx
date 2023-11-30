import React from "react";
import styled from "styled-components";
import { BiUpArrowAlt } from "react-icons/bi";
const FirstRow = ({ data }) => {
  return (
    <WrapperDiv>
      {data?.map(({ text, price, gain }, i) => (
        <ItemWrap key={i}>
          <ItemLeft>
            <label>{text}</label>
            <b>${price}</b>
          </ItemLeft>
          {gain ? (
            <label className="label-cl">
              <BiUpArrowAlt />
              {gain}%
            </label>
          ) : (
            <label></label>
          )}
        </ItemWrap>
      ))}
    </WrapperDiv>
  );
};

export default FirstRow;

const WrapperDiv = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 993px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid lightgray;
  width: 100%;
  border-radius: 6px 10px 10px 6px;
  padding: 10px 0px;
  position: relative;
  &:first-child {
    border-left: 7px solid lightblue;
  }
  &:nth-child(2) {
    border-left: 7px solid lightgreen;
  }
  &:nth-child(3) {
    border-left: 7px solid yellow;
  }
  &:nth-child(4) {
    border-left: 7px solid orange;
  }

  .label-cl {
    background-color: rgba(144, 238, 144, 0.2);
    color: #82ee82;
    border-radius: 5px;
    padding: 1px 5px;
    display: flex;
    align-items: center;
    gap: 3px;
  }
`;
const ItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
  label {
    font-size: 18px;
    color: lightgray;
    font-weight: 600;
  }
  b {
    font-size: 17px;
    color: black;
    font-weight: 700;
  }
`;
