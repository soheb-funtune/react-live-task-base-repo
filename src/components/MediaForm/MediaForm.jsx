import React, { useState } from "react";
import styled from "styled-components";
import LabeledInput from "../LabeledInput";
import StyledButton from "../StyledButton/StyledButton";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MediaForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handelOnchange = (e) => {
    // e.preventDefault();
    console.log("onChnage");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handeSubmit = (e) => {
    e.preventDefault();
    console.log({ formData });
    if (
      formData?.Bussiness_Name &&
      formData?.Button_Lebel &&
      formData?.Description_01 &&
      formData?.Heading_01 &&
      formData?.Heading_02 &&
      formData?.Website_URL &&
      formData?.Video_URL &&
      formData?.Square &&
      formData?.Landscape
    ) {
      Swal.fire({
        title: "Submited",
        text: false,
        icon: "info",
      }).then((res) => {
        if (res) {
          setFormData({});
          navigate(`/ads`);
        }
      });
    } else {
      Swal.fire({
        title: "Fill All Details !",
        text: false,
        icon: "warning",
      });
    }
  };

  return (
    <Wrapper onSubmit={(e) => handeSubmit(e)}>
      <h4>Create Text & Media</h4>

      <InputsContainer>
        <div>
          <LabeledInput
            handelOnchange={handelOnchange}
            formData={formData}
            text={"Heading 01"}
            placeholdeText={"Add a Heading that would Make users Interested"}
          />
          <LabeledInput
            handelOnchange={handelOnchange}
            formData={formData}
            mTop={"10px"}
            text={"Heading 02"}
            placeholdeText={"Add a Heading that would Make users Interested"}
          />
        </div>
        <LabeledInput
          handelOnchange={handelOnchange}
          formData={formData}
          text={"Description 01"}
          placeholdeText={"Add a Heading that would Make users Interested"}
          type={"textarea"}
        />
      </InputsContainer>

      <InputsContainer single={"1fr 1fr 1fr"}>
        <LabeledInput
          handelOnchange={handelOnchange}
          formData={formData}
          label={"Landscape Marketing Image (1.9:1)"}
          text={"Landscape"}
          placeholdeText={"Add the URL of the image you want to use For Ads"}
        />
        <LabeledInput
          handelOnchange={handelOnchange}
          formData={formData}
          label={"Potrait Marketing Image (4.5)"}
          text={"Potrait"}
          placeholdeText={"Add the URL of the image you want to use For Ads"}
        />
        <LabeledInput
          handelOnchange={handelOnchange}
          formData={formData}
          label={"Square Marketing Image (1.1)"}
          text={"Square"}
          placeholdeText={"Add the URL of the image you want to use For Ads"}
        />
      </InputsContainer>
      <InputsContainer single={"1fr"}>
        <LabeledInput
          handelOnchange={handelOnchange}
          formData={formData}
          label={"Square Marketing Image (1.1)"}
          text={"Video URL"}
          placeholdeText={"Add the URL of the image you want to use For Ads"}
        />
      </InputsContainer>
      <InputsContainer>
        <LabeledInput
          handelOnchange={handelOnchange}
          formData={formData}
          text={"Bussiness Name"}
          placeholdeText={"Add Your Bussiness Name"}
        />
        <LabeledInput
          handelOnchange={handelOnchange}
          formData={formData}
          text={"Button Lebel"}
          placeholdeText={"Select Lebel that best suit for your Button"}
          type={"select"}
        />
      </InputsContainer>
      <InputsContainer single={"1fr"}>
        <LabeledInput
          handelOnchange={handelOnchange}
          formData={formData}
          text={"Website URL"}
          placeholdeText={"Add the URL of Landing Page"}
        />
      </InputsContainer>
      <ButtonDiv>
        <StyledButton
          handleClick={() => navigate(`/ads`)}
          text="Back"
          bg={"gray"}
          width={"min-content"}
        />
        <StyledButton
          type="submit"
          text="Next"
          bg={"#00B3FF"}
          width={"min-content"}
        />
      </ButtonDiv>
    </Wrapper>
  );
};

export default MediaForm;

const Wrapper = styled.form`
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 20px 20px 80px;
  box-sizing: border-box;
  min-height: 80vh;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 10px;

  h4 {
    margin: 0px;
  }
`;

const InputsContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: ${({ single }) => (single ? single : "1fr 1fr")};
  column-gap: 20px;
  row-gap: 10px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
