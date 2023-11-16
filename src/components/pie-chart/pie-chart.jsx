import React, { useEffect, useState } from "react";
import { Chart } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

// ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [pieData, setPieData] = useState({});
  const { user_satisfaction } = useSelector((state) => state.slice);
  useEffect(() => {
    setPieData({
      keys: user_satisfaction?.ratings?.map((item) => `Rating ${item?.rating}`),
      data: user_satisfaction?.ratings?.map((item) => item?.count),
    });
  }, [user_satisfaction]);
  const data = {
    labels: pieData?.keys,
    datasets: [
      {
        label: "Rating",
        data: pieData?.data,
        backgroundColor: ["Red", "Green", "Purple", "Orange"],
        borderColor: ["Red", "Green", "Purple", "Orange"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="barchart">
      <Pie
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Pie Chart for Ratings",
            },
          },
          scales: false,
        }}
      />
      ;
    </div>
  );
};

export default PieChart;
