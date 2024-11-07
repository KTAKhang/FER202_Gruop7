import React from "react";
import "../assets/styles/Age2Magnum.css";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Icon from "react-bootstrap-icons";
import { Carousel } from "react-bootstrap";  // Import Carousel
import image1 from '../assets/images/Age2Mag/Magnum1.webp'
import image2 from '../assets/images/Age2Mag/magnum2.webp'
import image3 from '../assets/images/Age2Mag/magnum3.webp'
import Shop from '../assets/images/Age2Mag/Shop.jpg'
import 'boxicons/css/boxicons.min.css';

function Age2Magnum() {
  // Initialize AOS library for animations
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    offset: 120,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  const gundamInfo = {
    series: "Gundam Build Divers Prologue and Gundam Build Divers",
    modelNumber: " Based on the AGE-2 Gundam AGE-2 Normal",
    manufacturer: "Kyoya Kujo",
    pilot: "Kyoya Kujo",
    affiliation: "Avalon and Coalition of Volunteers",
    features: [
      "Advanced martial arts capabilities",
      "Powered by Plavsky Particles for enhanced performance",
      "Highly mobile and agile in combat",
      "Features the powerful Burning Burst System",
    ],
    abilities: [
      "High mobility",
      "Fit with every type of terrain",
      "Can transform into a fighter jet for high speed battle",
    ],
    armament: [
      "2 x Beam Saber",
      "Shiguru Shield",
      "Hyper DODS Rifle Magnum",
      "2 x Shot Anchor",
    ],
    battleExperience: [
      {
        title: "EX CALIBER",
        description: "The powerful blade can destroy a giant enemy Gunpla, like the miscolored JDG-00X Devil Gundam, in one strike.",
      },
    ],
    contactInfo: {
      email: "gundamnerd02@gmail.com",
      phone: "0907217676",
      socialLinks: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        skype: "#",
        linkedin: "#",
      },
    },
  };

  return (
    <>
      <div className="Age2-body">
        <Header />
        <div className="Age2-container">
          {/* Replace avatar with Carousel */}
          <Carousel interval={2000} fade>
            {/* Add 3 images for Carousel */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1} // Replace with actual image URL
                alt="Age 2 Image 1"
                style={{ objectFit: 'cover', height: '400px' }} // Set a fixed height for uniformity
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2} // Replace with actual image URL
                alt="Age 2 Image 2"
                style={{ objectFit: 'cover', height: '400px' }} // Set a fixed height for uniformity
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image3} // Replace with actual image URL
                alt="Age 2 Image 3"
                style={{ objectFit: 'cover', height: '400px' }} // Set a fixed height for uniformity
              />
            </Carousel.Item>
          </Carousel>
          <div className="Age2-experience">
            <div className="Age2-name" data-aos="fade-left" data-aos-duration="2000">
              <h1>Gundam AGEII Magnum</h1>
              <ul className="contact">
                <li><span>Series</span> {gundamInfo.series}</li>
                <li><span>Orginal Model</span> {gundamInfo.modelNumber}</li>
                <li><span>Manufacturer</span> {gundamInfo.manufacturer}</li>
                <li><span>Pilot</span> {gundamInfo.pilot}</li>
                <p><a href="https://gundam.fandom.com/wiki/Kyoya_Kisugi" target="_blank" rel="noopener noreferrer">Know more about Kyoya Kujo</a></p>
                <li><span>Affiliation</span> {gundamInfo.affiliation}</li>
              </ul>
            </div>
          </div>
          <div className="Age2-info" data-aos="fade-right" data-aos-duration="2000">
            <ul className="info-education">
              <h2 className="actor-h2">Gundam Info</h2>
              <p><a href="https://gundam.fandom.com/wiki/AGE-IIMG_Gundam_AGEII_Magnum" target="_blank" rel="noopener noreferrer">Learn More</a></p>
            </ul>
          </div>

          <div className="Age2-experience">
            <div className="item" data-aos="fade-right" data-aos-duration="2000">
              <h2 className="actor-h2">HIGHLIGHTED ABILITIES</h2>
              <div className="time">
                {gundamInfo.abilities.map((ability, index) => (
                  <p key={index}>{ability}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="Age2-skills">
            <div data-aos="fade-left" data-aos-duration="2000">
              <h2>ARMAMENT</h2>
              <ul>
                {gundamInfo.armament.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="Age2-experience">
            <div className="Age2-projects" data-aos="fade-right" data-aos-duration="2000">
              <h2 className="actor-h2">SPECIAL ATTACK</h2>
              <p><a href="https://www.youtube.com/watch?v=fZW27KOlzHc" target="_blank" rel="noopener noreferrer">View</a></p>
              {gundamInfo.battleExperience.map((experience, index) => (
                <div key={index} className="item">
                  <h4>{experience.title}</h4>
                  <div className="des mg-10">{experience.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span>Welcome to Gundam Universe!</span>
            <h2>Welcome to Gundam Universe!</h2>
            <p>Your go-to shop for authentic Gundam models, featuring the iconic Age Two Magnum Gundam. Stay updated on new releases and exclusive collectibles.</p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in-right">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="bx bx-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <div className="social-links">
                      <a href={gundamInfo.contactInfo.socialLinks.twitter} className="twitter"><Icon.Twitter /></a>
                      <a href={gundamInfo.contactInfo.socialLinks.facebook} className="facebook"><Icon.Facebook /></a>
                      <a href={gundamInfo.contactInfo.socialLinks.instagram} className="instagram"><Icon.Instagram /></a>
                      <a href={gundamInfo.contactInfo.socialLinks.skype} className="google-plus"><Icon.Skype /></a>
                      <a href={gundamInfo.contactInfo.socialLinks.linkedin} className="linkedin"><Icon.Linkedin /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>{gundamInfo.contactInfo.email}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>{gundamInfo.contactInfo.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="zoom-in-left">
              <div className="shop-image-container" style={{ position: 'relative', textAlign: 'center' }}>
                {/* Display the image */}
                <img
                  src={Shop} // Thay thế `imageUrl` bằng đường dẫn đến ảnh bạn muốn hiển thị
                  alt="Shop Image"
                  className="img-fluid"
                  style={{ width: '100%', borderRadius: '8px' }} // Tùy chỉnh kích thước và kiểu ảnh
                />
              </div>
              {/* Button to navigate to the shop */}
              <div className="text-center mt-3">
                <a href="http://localhost:8080" className="btn btn-primary">View Shop</a>
                {/* Thay `/shop` bằng đường dẫn thực tế của trang shop */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <p>&copy; 2024 Age II Magnum Gundam. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="twitter"><Icon.Twitter /></a>
            <a href="#" className="facebook"><Icon.Facebook /></a>
            <a href="#" className="instagram"><Icon.Instagram /></a>
            <a href="#" className="linkedin"><Icon.Linkedin /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Age2Magnum;
