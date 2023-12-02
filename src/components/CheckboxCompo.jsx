import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StyledButton from "./StyledButton/StyledButton";
const CheckboxCompo = () => {
  let navigate = useNavigate();
  const [checkedVal, setChecked] = useState("");
  const handleClick = () => {
    console.log("handelCLicked", checkedVal);
    navigate(`/ads/${checkedVal}`);
  };
  return (
    <Wrapper>
      <RadioButtonsStep>
        <label htmlFor="text">
          <input
            type="radio"
            onChange={() => setChecked("text")}
            name="textmedia"
            id="text"
            value={"text"}
          />
          <div className="text-container">
            <small>Create</small>
            <b>Text Ad</b>
          </div>
        </label>
        <label htmlFor="media">
          <input
            type="radio"
            onChange={() => setChecked("media")}
            name="textmedia"
            id="media"
            value={"media"}
          />
          <div className="text-container">
            <small>Create</small>
            <b>Media Ad</b>
          </div>
        </label>
      </RadioButtonsStep>
      <ButtonDiv>
        <StyledButton
          handleClick={handleClick}
          text="Next"
          bg={"#00B3FF"}
          width={"min-content"}
        />
      </ButtonDiv>
    </Wrapper>
  );
};

export default CheckboxCompo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80vh;
  width: 100%;
  /* background-color: red; */
`;
const RadioButtonsStep = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 20px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    /* border: 1px solid black; */
    box-shadow: 1px 1px 5px gray;
    border-radius: 20px;
    min-height: 200px;
    width: 150px;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;
