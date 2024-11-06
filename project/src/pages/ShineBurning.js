import React from "react";
import "../assets/styles/ShineBurningStyle.css";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Icon from "react-bootstrap-icons";
import { Carousel } from "react-bootstrap";  // Import Carousel
import image1 from '../assets/images/Shin/Shine-Burning-1.jpg'
import image2 from '../assets/images/Shin/Shine-Burning-2.jpg'
import image3 from '../assets/images/Shin/Shine-Burning-3.jpg'
import Shop from '../assets/images/Shin/Shop.jpg'
import 'boxicons/css/boxicons.min.css';

function ShineBurning() {
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
    series: "Mobile Suit Gundam Build Fighters Try",
    modelNumber: "SBG-E01",
    manufacturer: "Sekai Kamiki",
    pilot: "Sekai Kamiki",
    affiliation: "Try Fighters Team",
    origin: "Gunpla Battle Universe",
    features: [
      "Advanced martial arts capabilities",
      "Powered by Plavsky Particles for enhanced performance",
      "Highly mobile and agile in combat",
      "Features the powerful Burning Burst System",
    ],
    abilities: [
      "High mobility",
      "Close combat martial arts proficiency",
      "Equipped with the Hyper Burning Knuckle and Burning Burst",
    ],
    armament: [
      "Beam Sabers",
      "Hyper Burning Knuckle",
      "Plavsky Particle Field",
      "Burning Burst System",
    ],
    battleExperience: [
      {
        title: "Final Battle in Gunpla World Tournament",
        description: "Played a crucial role in the Try Fighters' victory over the other teams, especially in the final battle against the Tryon 3.",
      },
    ],
    contactInfo: {
      email: "info@shinburning.com",
      phone: "+1 234 567 890",
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
      <div className="shine-body">
        <Header />
        <div className="shine-container">
          {/* Replace avatar with Carousel */}
          <Carousel interval={2000} fade>
            {/* Add 3 images for Carousel */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1} // Replace with actual image URL
                alt="Shin Burning Image 1"
                style={{ objectFit: 'cover', height: '400px' }} // Set a fixed height for uniformity
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2} // Replace with actual image URL
                alt="Shin Burning Image 2"
                style={{ objectFit: 'cover', height: '400px' }} // Set a fixed height for uniformity
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image3} // Replace with actual image URL
                alt="Shin Burning Image 3"
                style={{ objectFit: 'cover', height: '400px' }} // Set a fixed height for uniformity
              />
            </Carousel.Item>
          </Carousel>
          <div className="shine-experience">
            <div className="shin-name" data-aos="fade-left" data-aos-duration="2000">
              <h1>Shin Burning Gundam</h1>
              <ul className="contact">
                <li><span>Series</span> {gundamInfo.series}</li>
                <li><span>Model Number</span> {gundamInfo.modelNumber}</li>
                <li><span>Manufacturer</span> {gundamInfo.manufacturer}</li>
                <li><span>Pilot</span> {gundamInfo.pilot}</li>
                <li><span>Affiliation</span> {gundamInfo.affiliation}</li>
              </ul>
            </div>
          </div>
          <div className="shine-info" data-aos="fade-right" data-aos-duration="2000">
            <ul className="info-education">
              <li>Origin: <b>{gundamInfo.origin}</b></li>
              <h2 className="actor-h2">Gundam Info</h2>
              <p><a href="https://gundam.fandom.com/wiki/SBG-E01_Shin_Burning_Gundam" target="_blank" rel="noopener noreferrer">Learn More</a></p>
            </ul>
          </div>

          <div className="shine-intro" data-aos="fade-left" data-aos-duration="2000">
            <h2 className="actor-h2">SPECIAL FEATURES</h2>
            <ul>
              {gundamInfo.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="shine-experience">
            <div className="item" data-aos="fade-right" data-aos-duration="2000">
              <h2 className="actor-h2">HIGHLIGHTED ABILITIES</h2>
              <div className="time">
                {gundamInfo.abilities.map((ability, index) => (
                  <p key={index}>{ability}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="shine-skills">
            <div data-aos="fade-left" data-aos-duration="2000">
              <h2>ARMAMENT</h2>
              <ul>
                {gundamInfo.armament.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="shine-experience">
            <div className="shine-projects" data-aos="fade-right" data-aos-duration="2000">
              <h2 className="actor-h2">BATTLE EXPERIENCE</h2>
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
            <p>Your go-to shop for authentic Gundam models, featuring the iconic Shin Burning Gundam. Stay updated on new releases and exclusive collectibles.</p>
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
          <p>&copy; 2024 Shine Burning Gundam. All rights reserved.</p>
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

export default ShineBurning;
