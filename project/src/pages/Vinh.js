import React from 'react';
import avt from "../assets/images/Vinh/AnhThe.png";
import '../assets/styles/Vinh.css';
import Header from '../components/Header';
import * as Icon from "react-bootstrap-icons";

function Vinh() {
  return (
    <>
      <div className='body-vinh'>
        <Header />
        <div className="vinh-container">
          <div className="vinh-avatar">
            <img src={avt} alt="avatar"></img>
          </div>
          <div className="vinh-name">
            <h1>Hồng Phước Vinh</h1>
            <div className="vinh-specialize"><h5>I'm an Intern Front-end developer</h5></div>
            <ul className="vinh-contact">
              <li>
                <span>P</span> 0766142179
              </li>
              <li>
                <span>E</span> vinhphuochongnnn@gmail.com
              </li>

            </ul>
          </div>
          <div className="vinh-info">
            <ul>
              <li>From <b>VL</b> - VietNam</li>
              <li>08/25/2004</li>
              <li>FPT University</li>
            </ul>
          </div>

          <div className="vinh-intro">
            <h2>INTRODUCE MYSELF</h2>
            Fresher software developer seeking an internship position to leverage my growing skills in Java and frontend development with React. Eager to contribute to a dynamic development team, enhance my coding proficiency, and gain hands-on experience in learning in working environment. Motivated to learn from industry professionals and develop innovative solutions to real-world challenges. can you translate this for me to vietnamese
          </div>

          <div className='text-end'>
            <div className="vinh-item">
              <h4>Student</h4>
              <div className="vinh-time">
                <span>2021 - 2025</span>
                <br />
                <span>FPT University</span>
              </div>

            </div>
            <h2 className="vinh-skills">
              SKILLS
            </h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>Java</li>
              <li>MySql</li>
              <li>Git</li>
            </ul>

          </div>
          <div className="vinh-project">
            <h2>PROJECTS</h2>
            <div className="vinh-item">
              <h4>FoodStoreManagement Website</h4>
              <div className="vinh-time">
                2024
              </div>
              <div className="vinh-location">
                Frond-end Developer
              </div>

            </div>

            <div className="vinh-item">
              <h4>Handmade Store</h4>
              <div className="vinh-time">
                2024
              </div>

              <div className="vinh-location">
                Frond-end Developer
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
          <h3>Hong Phuoc Vinh</h3>
          <p>As one as wind and cloud </p>
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
  )
}

export default Vinh