import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ShineBurning from "./pages/ShineBurning";
import ShineBurningDetail from "./pages/ShineBurningDetail";
import AerialDetail from "./pages/AerialDetail";
import DetailPage from './components/DetailPage'; // Nhập trang chi tiết
import Nguyen from "./pages/Nguyen";
import Aerial from "./pages/Aerial";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aerial" element={<Aerial />} />
        <Route path="/aerial-detail" element={<AerialDetail />} />
        <Route path="/shin-burning" element={<ShineBurning />} />
        <Route path="/shin-burning-detail" element={<ShineBurningDetail />} />
        <Route path="/bcn" element={<Nguyen />} />
        <Route path="/detail/:id" element={<DetailPage />} /> {/* Định nghĩa route cho trang chi tiết */}
      </Routes>
    </div>
  );
}

export default App;
