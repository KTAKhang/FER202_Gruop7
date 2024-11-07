import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";



import Home from "./pages/Home";

import ShineBurning from "./pages/ShineBurning";
import ShineBurningDetail from "./pages/ShineBurningDetail";
import Vinh from '../src/pages/Vinh'
import Tuananh from "./pages/Tuananh";
import ThanhDat from "./pages/ThangDat";
import Aerial from "./pages/Aerial";
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aerial" element={<Aerial />} />
        <Route path="/dat" element={<ThanhDat />} />
        <Route path="/lcta" element={<Tuananh />} />
        <Route path="/shin-burning" element={<ShineBurning />} />
        <Route path="/shin-burning-detail" element={<ShineBurningDetail />} />
        <Route path="/vinh" element={<Vinh />} />
      </Routes>
    </div>
  );
}

export default App;
