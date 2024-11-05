import React from "react";
import "../assets/styles/TienCVStyle.css";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Icon from "react-bootstrap-icons";

function TienCV() {

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
    <>
      <div className="tien-body">
        <Header />
        <div className="tien-container">
          <div className="tien-avatar"></div>
          <div className="CV-name" data-aos="fade-left" data-aos-duration="2000">
            <h1>Danh Thi Cam Tien</h1>
            <ul className="contact">
              <li>
                <span>P</span> 0944707644
              </li>
              <li>
                <span>B</span> 20/01/2003
              </li>
              <li>
                <span>E</span> tiendanh1812@gmail.com
              </li>
              <li>
                <span>F</span> https://www.facebook.com/profile.php
              </li>
              <li>
                <span>A</span> Dinh Hoa, Go Quao, Kien Giang
              </li>
            </ul>
          </div>
          <div className="tien-info" data-aos="fade-right" data-aos-duration="2000">
            <ul className="info-education">
              <li>
                From <b>Can Tho</b> - VietNam
              </li>
              <h2 className="actor-h2">GitHub</h2>
              <p>https://github.com/Tienn201</p>
            </ul>
          </div>

          <div className="tien-intro" data-aos="fade-left" data-aos-duration="2000">
            <h2 className="actor-h2">CAREER GOALS</h2>
            <ul>
              <li>Learn software engineer</li>
              <li>Accumulate programming expertise</li>
              <li>
                In 3 years, cultivate and learn the necessary skills to become a
                Professional program developer.
              </li>

              <li>
                In 5 years, improve your communication skills and become a
                Business Analyst
              </li>
            </ul>
          </div>

          <div className="tien-experience">
            <div className="item" data-aos="fade-right" data-aos-duration="2000">
              <h2 className="actor-h2">EDUCATION</h2>
              <div className="time">
                <p>2018 - 2021 Go Quao High School</p>
                <p>2021 - 2025 FPT Can Tho University</p>
              </div>
              <div className="des"></div>
            </div>

            <div data-aos="fade-right" data-aos-duration="2000">
              <h2 className="tien-skills">SKILLS</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>SQL Server</li>
                <li>Java</li>
                <li>GitHub</li>
                <li>React JS</li>
              </ul>
            </div>
          </div>

          <div
            className="actor-project"
            data-aos="fade-left"
            data-aos-duration="2000">
            <h2 className="actor-h2">WORKING EXPERIENCE</h2>

            <div className="item">
              <h4>Build Website Tech Solution</h4>
              <div className="time">2023</div>
              <div className="group mg-10">Group 2 FPT University</div>
              <div className="des mg-10">
                Tech Solution is a phone sale website with functions such as
                logging in, searching for phones, adding, updating, and deleting
                phones for Admin pages.
              </div>
              <div className="des_con mg-10">
                Design and develop a movie ticket booking system website using
                HTML, CSS, JavaScript and JDBC.
              </div>
            </div>

            <div className="item">
              <h4>Build Website Cinema</h4>
              <div className="time mg-10">2024</div>
              <div className="group mg-10">Group 2 FPT University</div>
              <div className="des mg-10">
                The Cinema website is set up with functions such as log in,
                booking movie tickets, searching for movie information, and
                displaying movie information.
              </div>
              <div className="des_con mg-10">
                Design and develop a movie ticket booking system website using
                HTML, CSS, JavaScript and JDBC.
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <span>Contact Me</span>
            <h2>Contact Me</h2>
            <p>
              Sit sint consectetur velit quisquam cupiditate impedit suscipit
              alias
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in-right">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="bx bx-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <div className="social-links">
                      <a href="#" className="twitter">
                        <Icon.Twitter />
                      </a>
                      <a href="#" className="facebook">
                        <Icon.Facebook />
                      </a>
                      <a href="#" className="instagram">
                        <Icon.Instagram />
                      </a>
                      <a href="#" className="google-plus">
                        <Icon.Skype />
                      </a>
                      <a href="#" className="linkedin">
                        <Icon.Linkedin />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Me</h3>
                    <p>contact@example.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-phone-call"></i>
                    <h3>Call Me</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="zoom-in-left">
              <form action="" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="container">
          <h3>Danh Thi Cam Tien</h3>
          <p>As one as wind and cloud </p>
          <div className="social-links">
            <a href="#" className="twitter">
              <Icon.Twitter />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100035697588679" className="facebook">
              <Icon.Facebook />
            </a>
            <a href="#" className="instagram">
              <Icon.Instagram />
            </a>
            <a href="#" className="google-plus">
              <Icon.Skype />
            </a>
            <a href="#" className="linkedin">
              <Icon.Linkedin />
            </a>
          </div>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Laura</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer></>
  );
}

export default TienCV;
