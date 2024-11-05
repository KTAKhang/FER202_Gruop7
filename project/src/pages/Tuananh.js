import React, { useEffect } from "react";
import AOS from "aos";

import * as Icon from "react-bootstrap-icons";
import "aos/dist/aos.css";
import avt from "../assets/images/Tuananh/avt.jpg";
import "../assets/styles/Tuananh.css";

function Tuananh() {
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      const navbarlinks = select("#navbar .scrollto", true);
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };

    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);

    const scrollto = (el) => {
      let header = select("#header");
      let offset = header.offsetHeight;

      if (!header.classList.contains("header-scrolled")) {
        offset -= 20;
      }

      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    };

    let selectHeader = select("#header");
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add("header-scrolled");
        } else {
          selectHeader.classList.remove("header-scrolled");
        }
      };
      window.addEventListener("load", headerScrolled);
      onscroll(document, headerScrolled);
    }

    return () => {
      window.removeEventListener("load", navbarlinksActive);
      window.removeEventListener("scroll", navbarlinksActive);
    };
  }, []);

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
    <div>
      <header
        id="header"
        className="fixed-top d-flex justify-content-center align-items-center header-transparent"
      >
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#tuananh">
                Tuananh
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#project">
                Project
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </header>

      <section id="hero-anh">
        <div
          className="hero-anh-container"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1>Lê Công Tuấn Anh</h1>
          <h2>I'm an Intern Front-end developer</h2>
          <a href="#about" className="btn-scroll scrollto" title="Scroll Down">
            <i className="bx bx-chevron-down"></i>
          </a>
        </div>
      </section>

      <div className="wrapper grid grid wide">
        <div className="wrapper-infomation" id="about">
          <div className="avatar-contact">
            <img src={avt} alt="Avatar" />
            <p className="i">
              <b>E</b> : anhlctce172067@fpt.edu.vn
            </p>
            <p className="i">
              <b>P</b> : 0388083281
            </p>
            <p className="i">
              <b>D</b> : 10/09/2003
            </p>
            <p className="i">
              <b>A</b> : Vinh Long, Vietnam
            </p>
          </div>
          <div className="infomation">
            <div style={{ position: "relative" }} className="hr">
              <h1>Lê Công Tuấn Anh</h1>
              <div className="specialize">
                <i>Front-End Developer</i>
              </div>
              <div className="target">
                <h3 style={{ fontWeight: 400 }}>OBJECTIVE</h3>
              </div>
            </div>
            <div className="target-des">
              Through this internship opportunity, I hope to learn a lot from the company's
              employees, further enhance my knowledge, and effectively apply what I have
              learned to the job. I hope that the knowledge and experience gained during the
              internship can help build a strong foundation for myself and contribute to the
              company, as well as learn more in the field of Information Technology.
            </div>
          </div>
        </div>
        <div className="info" id="resume">
          <hr className="custom-hr" />
          <div className="edu-exp">
            <div className="edu">EDUCATION</div>
            <div className="exp" style={{ marginLeft: "27.9%" }}>
              Language

            </div> <br />

          </div>
          <div className="Layout-edu-exp">
            <div className="edu-des">
              <div className="edu-fpt">
                <h3> FPT UNIVERSITY </h3>
                <p>Software Engineering</p>
                <p> 2021-2025 </p>
              </div>
              <div className="edu-coursera">
                <h3>COURSERA</h3>
                <i>
                  <h4>Certificate :</h4>
                </i>
                <i>
                  <div>
                    - Computer Communications(8, 2023) <br />
                    - Software Development Lifecycle (4, 2024) <br />
                    - Academic Skills for University Success (8, 2022)<br />
                    - Web Design for Everybody: Basics of Web Development & Coding (11/2023)<br />
                  </div>
                </i>

              </div>
              <div className="layout-skill">

                <i>
                  <p>
                    <b style={{ fontWeight: 500 }}>Summer2022</b> : English
                    certificate- Level 6- Summit 2
                  </p>
                  <p>Ability to read English documents, basic communication</p>
                </i>
              </div>
              <div className="layout-skill">
                <div className="skill-anh">Activities</div>
                <h4>2021-2023</h4>
                <i>
                  <p>
                    - Actively participated in conferences organized by the
                    school
                  </p>
                  <p>
                    - Actively participated in all valid party activities
                    organized by the school party cell
                  </p>

                </i>
              </div>
            </div>
            <div className="exp-des">



              <div className="item-des">
                <div className="layout-skill">
                  <h3>English</h3>
                  <div
                    className="skill-anh"
                    style={{ marginTop: 37.5, fontSize: 14 }}
                  >
                    Skills
                  </div>
                  <h3>Programming</h3>
                  <i>
                    <ul>
                      <li>
                        Proficient in Reactjs, HTML5/CSS3, JavaScript, and
                        Responsive Design
                      </li>

                      <li>
                        Knowledgeable in Java, C, C++, JavaScript programming
                      </li>
                      <li>Basic Git usage</li>
                      <li>
                        Ability to customize code without depending on external
                        libr/aries
                      </li>
                      <li>Strong logical thinking skills</li>
                      <li>Ability to work in a team</li>
                    </ul>
                  </i>
                  <h3>Research, Self-learning</h3>
                  <i>
                    <ul>
                      <li>
                        Ability to self-learn and quickly adapt to new
                        technologies.
                      </li>
                    </ul>
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="Project" id="project">
            <div className="custom-hr"></div>
            <div className="skill-anh">Projects</div>
            <div className="project-table">
              <div className="project-title">
                <h4>Food Store Management Website</h4>
                <p className="time">4/2024 - 7/2024</p>
              </div>
              <table border="1">
                <tbody>
                  <tr>
                    <th>Project Name</th>
                    <td style={{ fontWeight: 500 }}>Food Store Management Website</td>
                  </tr>
                  <tr>
                    <th>Project Description</th>
                    <td>
                      - Full online food sales system
                      Functions such as: Search, Sort, Filter products by
                      name, type, product pagination, cart usage
                      cookies and sessions. <br />
                      - Applying the MVC model to the project <br />- Source code: ...
                    </td>
                  </tr>
                  <tr>
                    <th>Number of Team Members</th>
                    <td>5</td>
                  </tr>
                  <tr>
                    <th>Position</th>
                    <td>Menber</td>
                  </tr>
                  <tr>
                    <th>Role in the Project</th>
                    <td>Full-stack developer</td>
                  </tr>
                  <tr>
                    <th>Technologies Used</th>
                    <td>Java Web, HTML, CSS, JavaScript, SQL Server</td>
                  </tr>
                </tbody>
              </table>
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
          <h3>Le Cong Tuan Anh</h3>
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
      </footer>
    </div>
  );
}

export default Tuananh;
