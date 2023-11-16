import { useState } from "react";

import "./App.css";
import BarChar from "./components/bar-chart/bar-chart";
import LineChart from "./components/line-chart/line-chart";
import PieChart from "./components/pie-chart/pie-chart";
import DoughnutChart from "./components/doughnut-chart/doughnut-chart";
import MultitypeChart from "./components/multitype-chart/multitype-chart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="container">
        <div>
          <h3>Category Disctribution </h3>
          <BarChar />
        </div>
        <div>
          <h3>Line Chart</h3>
          <LineChart />
        </div>
        <div>
          <h3>Pie Chart For Rattings </h3>
          <PieChart />
        </div>
        <div>
          <h3>Doughnut Chart for Platform </h3>
          <DoughnutChart />
        </div>
        <div>
          <h3>Line Chart for Country </h3>
          <MultitypeChart />
        </div>
      </div>
    </div>
  );
}

export default App;
