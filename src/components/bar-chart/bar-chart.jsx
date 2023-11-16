import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";
import "../../App.css";

const BarChar = () => {
  const [barData, setBarData] = useState({});
  const { category_distribution } = useSelector((state) => state.slice);

  useEffect(() => {
    setBarData({
      keys: Object.keys(category_distribution)?.map((item) =>
        item?.split("_")?.join(" ")?.toLocaleUpperCase()
      ),
      values: Object.values(category_distribution),
    });
  }, [category_distribution]);
  return (
    <div className="barchart">
      <Bar
        data={{
          labels: barData?.keys,
          datasets: [
            {
              label: "Category Distribution",
              data: barData?.values,
              backgroundColor: ["Red", "Green", "Purple", "Orange"],
              maxBarThickness: 50,
              borderWidth: 2,
              borderColor: "black",
              //   hoverBackgroundColor: "yellow",
              //   order: 1,
              pointStyle: "triangle",
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: false,
            title: {
              display: true,
              text: "Bar Chart for Category Distribution",
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                // display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChar;
