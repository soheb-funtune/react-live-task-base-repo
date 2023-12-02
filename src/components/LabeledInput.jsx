import React from "react";
import styled from "styled-components";

const LabeledInput = ({
  label,
  formData,
  handelOnchange,
  text,
  type,
  placeholdeText,
  mTop,
}) => {
  const textName = text?.split(" ")?.join("_");
  return type === "textarea" ? (
    <Wrapper>
      <label htmlFor={textName}>{label || text}</label>
      <textarea
        name={textName}
        id={textName}
        value={formData?.[textName]}
        onChange={(e) => handelOnchange(e)}
        type={"text"}
        rows="6"
        // cols="50"
        placeholder={placeholdeText}
      />
    </Wrapper>
  ) : type === "select" ? (
    <Wrapper>
      <label htmlFor={textName}>{label || text}</label>
      <select
        name={textName}
        value={formData?.[textName]}
        onChange={(e) => handelOnchange(e)}
      >
        <option value={"@"}>{placeholdeText}</option>
        <option value={"primary"}>Primary</option>
        <option value={"secondary"}>Secondary</option>
      </select>
    </Wrapper>
  ) : (
    <Wrapper mTop={mTop || false}>
      <label htmlFor={textName}>{label || text}</label>
      <input
        id={textName}
        name={textName}
        type={"text"}
        value={formData?.[textName]}
        onChange={(e) => handelOnchange(e)}
        placeholder={placeholdeText}
      />
    </Wrapper>
  );
};

export default LabeledInput;

const Wrapper = styled.div`
  margin-top: ${({ mTop }) => (mTop ? mTop : "0px")};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 5px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  label {
    font-size: 13px;
    font-weight: 400;
  }
  textarea,
  input,
  input:focus-visible,
  select {
    color: gray;
    outline: none;
    padding: 7px;
    border-radius: 0px;
    border: 1px solid lightgray;
  }
  /* @media (max-width: 385px) {
    max-width: 85%;
  } */
`;
