import React from "react";
import "../assets/styles/ThanhDat.css";
import Header from "../components/Header";
import * as Icon from "react-bootstrap-icons";
import avt from "../assets/images/ThanhDat/thanhdat.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function ThanhDat() {

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
    <div className="phuc-bg-img">
      <Header />

      <div className="PhucCV-container">
        <div className="contect-left" style={{ color: "white" }} >
          <img src={avt} alt="Avatar" data-aos="flip-left" />
          <div className="info-phuccv" data-aos="fade-right" data-aos-duration="1000">
            <h3>Nguyễn Thành Đạt</h3>
            <p>https://www.facebook.com/profile.php?id=100035697588679</p>
            <p>nguyenthanhdat09072003@gmail.com</p>
            <p>0333652753</p>
            <p>Tân Phong, Giá Rai, Bạc Liêu</p>
          </div>
          <div className="hobby-phuccv" data-aos="fade-right" data-aos-duration="1000">
            <h3>HOBBY </h3>
            <p>Play Valorant</p>
            <p>Cooking </p>
            <p>Watch Anime </p>
          </div>
          <div className="Skill-phuccv" data-aos="fade-right" data-aos-duration="1000">
            <h3>SKILLS SUMMARY</h3>
            <p>Problem-solving skills</p>
            <p> Teamwork skill</p>
            <p>Information retrieval skill</p>
          </div>
          <div className="LANGUAGE-phuccv" data-aos="fade-right" data-aos-duration="1000">
            <h3> PROGRAMMING LANGUAGE</h3>
            <p> Learned HTML/CSS, Java, JavaScript and SQL Server</p>
          </div>
        </div>
        <div className="contect-right" data-aos="fade-left">
          <div className="Profile-phuccv">
            <h1>Profile</h1>
            <p>
              {" "}
              For myself, I always seize opportunities, try to complete assigned
              tasks and am not afraid of difficulties
            </p>
          </div>
          <div className="EDUCATION-phuccv">
            <h1>EDUCATION</h1>
            <div className="EDUCATION-info">
              <h2>Tan Phong High school </h2>
              <p>2018 - 2021</p>
              <h2> FPT University</h2>
              <p>2021 - current</p>
              <p>Major: Software engineer</p>
            </div>
          </div>
          <div className="TARGETS-phuccv">
            <h1>TARGETS</h1>
            <div className="TARGETS-info">
              <p>
                {" "}
               Seeking an internship opportunity as a Front-end Developer in a professional environment, where I can apply newly acquired knowledge and develop Front-end programming skills. My goal is to become a Front-end expert capable of building modern, user-friendly, interactive user interfaces. 

              </p>
            </div>
          </div>
          <div className="ADVANTAGE-phuccv">
            <h1>ADVANTAGE</h1>
            <div className="ADVANTAGE-info">
              <p> Eager to learn.</p>
              <p> Capture information quickly.. </p>
              <p> Always ready to participate in activities</p>
              <p> Flexibility in work</p>
            </div>
          </div>
          <div className="Experience-phuccv">
            <h1>Experience</h1>
            <div className="Experience-info">
              <p>Participate in many projects during your studies at school</p>
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
export default ThanhDat;
