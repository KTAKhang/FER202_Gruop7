import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";



import Home from "./pages/Home";

import TienCV from "./pages/TienCV";
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
        <Route path="/tien" element={<TienCV />} />
        <Route path="/vinh" element={<Vinh />} />
      </Routes>
    </div>
  );
}

export default App;
