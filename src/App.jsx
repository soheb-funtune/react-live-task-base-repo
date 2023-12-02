import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateAds from "./pages/create-ads/CreateAds";
import Header from "./components/Header";
import CheckboxCompo from "./components/CheckboxCompo";
import TextForm from "./components/TextForm/TextForm";
import MediaForm from "./components/MediaForm/MediaForm";
const Layout = ({ children }) => {
  return (
    <div style={{ padding: "20px 30px", background: "#f6f6f6" }}>
      {children}
    </div>
  );
};

function App() {
  return (
    <div style={{ boxSizing: "border-box", width: "100%" }}>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ads" element={<CreateAds />}>
              <Route path="/ads/" element={<CheckboxCompo />} />
              <Route path="/ads/text" element={<TextForm />} />
              <Route path="/ads/media" element={<MediaForm />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
