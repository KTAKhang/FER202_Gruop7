import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";



import Home from "./pages/Home";

import ShineBurning from "./pages/ShineBurning";
import ShineBurningDetail from "./pages/ShineBurningDetail";
import Aerial from "./pages/Aerial";
import AerialDetail from "./pages/AerialDetail";
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

      </Routes>
    </div>
  );
}

export default App;
