import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SideBar } from "./components/sidebar/sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <SideBar />
    </div>
  );
}

export default App;
