import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Male", "Female", "Unknown"],
  datasets: [
    {
      label: "",
      data: [40, 35, 25],
      backgroundColor: ["#c0820e", "blue", "black"],
      borderColor: ["#c0820e", "blue", "black"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  legend: {
    display: true,
    position: "right",
    align: "end",
  },
};
export const DoughnutChart = () => {
  return (
    <StyedWrap>
      <Doughnut options={options} data={data} />;
    </StyedWrap>
  );
};

const StyedWrap = styled.div`
  canvas {
    height: 250px !important;
    width: 250px !important;
  }
`;
