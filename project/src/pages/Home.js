import React from "react";
import Header from "../components/Header";
import AOS from "aos";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import "../assets/styles/Home.css";
import img1 from '../assets/images/Home/Shine-Burning.jpg'
import img4 from '../assets/images/Home/a1.png'
import img2 from '../assets/images/Home/a1.png'


function Home() {

  //AOS animation libary
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  return (
    <div id="home-background">
      <Header />
      <div className="text-center h1-home">
        <h1 style={{ color: '#595cff' }}>Gundam Encyclopedia</h1>
      </div>
      <div className="container d-flex align-items-center justify-content-center flex-wrap">
        <div className="box">
          <div className="body">
            <div className="imgContainer">
              <img
                src={img4}
                alt=""
              />
            </div>
            <div className="content khang-content d-flex flex-column align-items-center justify-content-center">
              <div className="bg-arial">
                <h3 className="text-white fs-5">Gundam Aerial</h3>
                <p className="fs-6 text-white"><strong>Model Number:</strong> XVX-016</p>
                <p className="fs-6 text-white"><strong>Pilot:</strong> Suletta Mercury</p>
                <p className="fs-6 text-white"><strong>Special Move:</strong> Permet Score Overload</p>
                <Link to={"/aerial"} className="text-color-gundam">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="body">
            <div className="imgContainer">
              <img
                src={img1}
                alt="Shin Burning Gundam"
              />
            </div>
            <div className="content gundam-content d-flex flex-column align-items-center justify-content-center">
              <div className="bg-red">
                <h3 className="text-white fs-5 font-weight-bold">Shin Burning Gundam</h3>
                <p className="fs-6 text-white">Model Number: SBG-E01</p>
                <p className="fs-6 text-white">Pilot: Sekai Kamiki</p>
                <p className="fs-6 text-white">Special Move: Burning Burst</p>
                <Link to={"/shin-burning"} className="text-color-gundam">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="body">
            <div className="imgContainer">
              <img
                src={img2}
                alt=""
              />
            </div>
            <div className="content duc-content d-flex flex-column align-items-center justify-content-center">
              <div className="bg-pink">
                <h3 className="text-white fs-5">Bùi Chí Nguyên</h3>
                <p className="fs-6 text-white">CE170530</p>
                <p className="fs-6 text-white">Front-end developer</p>
                <Link to={"/bcn"} className="text-phuc">
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>





      </div>
    </div>
  );
}

export default Home;
