import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Chart } from "react-chartjs-2";
import { useSelector } from "react-redux";

const MultitypeChart = () => {
  const [dData2, setDData2] = useState({});
  const { usage_statistics } = useSelector((state) => state.slice);
  useEffect(() => {
    setDData2({
      keys: Object.keys(usage_statistics?.by_country),
      data: Object.values(usage_statistics?.by_country),
    });
  }, [usage_statistics]);
  const data = {
    labels: dData2?.keys,
    datasets: [
      {
        type: "line",
        label: "By Country",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        // fill: false,
        data: dData2?.data,
      },
    ],
  };
  return (
    <div className="barchart">
      <Chart type={"bar"} data={data} />;
    </div>
  );
};

export default MultitypeChart;
