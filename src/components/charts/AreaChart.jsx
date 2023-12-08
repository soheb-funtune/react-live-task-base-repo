import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Line Chart For Money Flow",
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export const data = {
  labels,

  datasets: [
    {
      fill: true,
      borderJoinStyle: "round",
      borderWidth: "3px",
      label: "",
      data: [200, 443, 443, 622, 133, 533],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const AreaChart = () => {
  return <Line options={options} data={data} />;
};
