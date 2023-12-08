import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/DashBoard-Header/Header";
import Main from "./components/Main/Main";
import Transaction from "./Pages/transaction";
import Invoice from "./Pages/invoice";
import Activity from "./Pages/activity";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ padding: "10px 20px", boxSizing: "border-box", width: "100%" }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
