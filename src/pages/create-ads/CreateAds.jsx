import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const CreateAds = ({ children }) => {
  return (
    <div>
      {/* <h5>Creating Ads</h5> */}
      <Outlet />
    </div>
  );
};

export default CreateAds;
