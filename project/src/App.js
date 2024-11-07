import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";


import LTToan from "./pages/LTToan";
import Home from "./pages/Home";

import TienCV from "./pages/TienCV";
import Vinh from '../src/pages/Vinh'


import ThanhDat from "./pages/Nguyen";
import DetailPage from './components/DetailPage'; // Nhập trang chi tiết
import Nguyen from "./pages/Nguyen";
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lttoan" element={<LTToan />} />
        <Route path="/dat" element={<ThanhDat />} />
        <Route path="/bcn" element={<Nguyen />} />
        <Route path="/tien" element={<TienCV />} />
        <Route path="/vinh" element={<Vinh />} />
        <Route path="/detail/:id" element={<DetailPage />} /> {/* Định nghĩa route cho trang chi tiết */}
      </Routes>
    </div>
  );
}

export default App;
