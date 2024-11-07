import React from "react";
import Header from "../components/Header";
import AOS from "aos";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import "../assets/styles/Home.css";

import img1 from '../assets/images/Home/gundam3.png'
import img2 from '../assets/images/Home/gundam4.png'
import img3 from '../assets/images/Home/mg2.jpg'
import img4 from '../assets/images/Home/gundam6.png'
import img5 from '../assets/images/Home/gundam7.png'

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
        <h1 style={{ color: '#595cff' }}>Bách Khoa GunDam</h1>
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
            <div className="content kiet-content d-flex flex-column align-items-center justify-content-center">
              <div className="bg-green">
                <h3 className="text-white fs-5">Lưu Trường Toán</h3>
                <p className="fs-6 text-white">CE172023</p>
                <p className="fs-6 text-white">Front-end developer</p>
                <Link to={"/lttoan"} className="text-kiet">
                  Detail
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
                alt=""
              />
            </div>
            <div className="content tien-content d-flex flex-column align-items-center justify-content-center">
              <div className="bg-red">
                <h3 className="text-white fs-5">Danh Thị Cẩm Tiên</h3>
                <p className="fs-6 text-white">CE171331</p>
                <p className="fs-6 text-white">Front-end developer</p>
                <Link to={"/tien"} className="text-color-tien">
                  Detail
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
                <h3 className="text-white fs-5">Lê Công Tuấn Anh</h3>
                <p className="fs-6 text-white">CE172067</p>
                <p className="fs-6 text-white">Front-end developer</p>
                <Link to={"/lcta"} className="text-phuc">
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="body">
            <div className="imgContainer">
              <img
                src={img3}
                alt=""
              />
            </div>
            <div className="content phuc-content d-flex flex-column align-items-center justify-content-center">
              <div className="bg-blue">
                <h3 className="text-white fs-5">[HG]Age Two Magnum</h3>
                <p className="fs-6 text-white">High Grade</p>
                <p className="fs-6 text-white">500.000 VND</p>
                <Link to={'/Age2Magnum'} className='text-phuc'>Detail</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="body">
            <div className="imgContainer">
              <img src={img5} alt="" />
            </div>
            <div className="content sang-content d-flex flex-column align-items-center justify-content-center">
              <div>
                <h3 className="text-white fs-5">Hồng Phước Vinh</h3>
                <p className="fs-6 text-white">CE181415</p>
                <p className="fs-6 text-white">Front-end developer</p>
                <Link to={'/vinh'} className='text-sang'>Detail</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
