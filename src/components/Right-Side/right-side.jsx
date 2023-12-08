import React from "react";
import FirstRow from "./first-row";
import SecondRow from "./second-row";
import ThirdRow from "./third-row";

export const RightSide = () => {
  const arr = [
    {
      text: "My Balance",
      price: "120,320",
      gain: "",
    },
    {
      text: "Income",
      price: "120,320",
      gain: "11.09",
    },
    {
      text: "Saving",
      price: "120,320",
      gain: "11.09",
    },
    {
      text: "Expenses",
      price: "120,320",
      gain: "",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <FirstRow data={arr} />
      <SecondRow />
      <ThirdRow />
    </div>
  );
};
