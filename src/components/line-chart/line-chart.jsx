import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Chart } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register({
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
});

const LineChart = () => {
  const [lineData1, setLineData1] = useState({});
  const [lineData2, setLineData2] = useState({});
  const { response_times } = useSelector((state) => state.slice);

  useEffect(() => {
    setLineData1({
      average_time: response_times?.day_wise?.map((item) => {
        return item?.average_time;
      }),
      date: response_times?.day_wise?.map((item) => {
        return item?.date;
      }),
    });
    setLineData2({
      average_time: response_times?.week_wise?.map((item) => {
        return item?.average_time;
      }),
      date: response_times?.week_wise?.map((item) => {
        return item?.week;
      }),
    });
  }, [response_times]);
  const options = {};
  const data = {
    labels: lineData2?.date,
    datasets: [
      // number of lines  to show number of Lines
      {
        // type: "bar",
        label: "Day Wise",
        data: lineData1?.average_time,
        borderColor: "red",
        backgroundColor: "red",
        tension: 0.4,
      },
      {
        label: "Week Wise",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: lineData2?.average_time,
      },
    ],
  };
  console.log({ data });
  return (
    <div className="barchart">
      <Line type="bar" data={data} options={options} />
    </div>
  );
};

export default LineChart;
