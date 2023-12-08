import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Shoping", "Workspace", "Platform", "Entertainments"],
  datasets: [
    {
      label: "",
      data: [20, 20, 30, 30],
      backgroundColor: ["black", "gray", "#00b3ff", "#74d2fa"],
      borderColor: ["black", "gray", "#00b3ff", "#74d2fa"],
      borderWidth: 1,
    },
  ],
};

export const DoughnutChart = () => {
  return <Doughnut data={data} />;
};
