import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateAds from "./pages/create-ads/CreateAds";
import Header from "./components/Header";
import CheckboxCompo from "./components/CheckboxCompo";
import TextForm from "./components/TextForm/TextForm";
import MediaForm from "./components/MediaForm/MediaForm";
import styled from "styled-components";
const Layout = ({ children }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

const LayoutStyle = styled.div`
  padding: 20px 30px;
  background-color: white;
  @media (max-width: 767px) {
    padding: 10px 10px;
  }
`;

function App() {
  return (
    <div>
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
