import React from "react";
import styled from "styled-components";
const StyledButton = ({ text, bg, width, Iicon, handleClick, ...props }) => {
  return (
    <ButtonStyle
      {...props}
      onClick={handleClick}
      bg={bg}
      Iicon={Iicon}
      width={width}
    >
      {Iicon && (
        <span className="icon-wrap">
          <Iicon className={"plus-icon"} />{" "}
        </span>
      )}
      {text}
    </ButtonStyle>
  );
};

export default StyledButton;

const ButtonStyle = styled.button`
  border: 1px solid;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  font-weight: 600;
  padding: 7px 25px;
  border-radius: 5px;
  width: ${({ width }) => width || "100%"};
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  background: ${({ bg, Iicon }) => "#dcdee6"};
  transition: all ease-in-out 0.4s;
  &:first-child {
    background: ${({ bg, Iicon }) => (!Iicon && bg) || "#dcdee6"};
  }
  &:hover {
    transform: scale(1.02);
    background: ${({ bg, Iicon }) => bg || "#dcdee6"};
    color: #ffff;
    .icon-wrap {
      color: #00b3ff;
      background: #ffff;
    }
  }
  .icon-wrap {
    text-align: center;
    padding: 5px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    background: #00b3ff;
    color: #ffff;
    transition: all ease-in-out 0.4s;
  }
`;
