import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

const DoughnutChart = () => {
  const [dData, setDData] = useState({});
  const { usage_statistics } = useSelector((state) => state.slice);
  useEffect(() => {
    setDData({
      keys: Object.keys(usage_statistics?.by_platform),
      data: Object.values(usage_statistics?.by_platform),
    });
  }, [usage_statistics]);
  const data = {
    labels: dData?.keys,
    datasets: [
      {
        label: "Rating",
        data: dData?.data,
        backgroundColor: ["Red", "Green", "Purple", "Orange"],
        borderColor: ["Red", "Green", "Purple", "Orange"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="barchart">
      <Doughnut data={data} />;
    </div>
  );
};

export default DoughnutChart;
