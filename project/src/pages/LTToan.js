import React, { useEffect } from 'react';
import AOS from 'aos';

import * as Icon from 'react-bootstrap-icons';
import 'aos/dist/aos.css';
import '../assets/styles/LTToanstyle.css';

function LTToan() {

    useEffect(() => {
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)];
            } else {
                return document.querySelector(el);
            }
        };

        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener);
        };

        const navbarlinksActive = () => {
            let position = window.scrollY + 200;
            const navbarlinks = select('#navbar .scrollto', true);
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return;
                let section = select(navbarlink.hash);
                if (!section) return;
                if (
                    position >= section.offsetTop &&
                    position <= section.offsetTop + section.offsetHeight
                ) {
                    navbarlink.classList.add('active');
                } else {
                    navbarlink.classList.remove('active');
                }
            });
        };

        window.addEventListener('load', navbarlinksActive);
        onscroll(document, navbarlinksActive);

        // const scrollto = (el) => {
        //     let header = select('#header');
        //     let offset = header.offsetHeight;

        //     if (!header.classList.contains('header-scrolled')) {
        //         offset -= 20;
        //     }

        //     let elementPos = select(el).offsetTop;
        //     window.scrollTo({
        //         top: elementPos - offset,
        //         behavior: 'smooth'
        //     });
        // };

        let selectHeader = select('#header');
        if (selectHeader) {
            const headerScrolled = () => {
                if (window.scrollY > 100) {
                    selectHeader.classList.add('header-scrolled');
                } else {
                    selectHeader.classList.remove('header-scrolled');
                }
            };
            window.addEventListener('load', headerScrolled);
            onscroll(document, headerScrolled);
        }

        return () => {
            window.removeEventListener('load', navbarlinksActive);
            window.removeEventListener('scroll', navbarlinksActive);
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
            <header id="header" className="fixed-top d-flex justify-content-center align-items-center header-transparent">
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a className="nav-link scrollto active" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#hero">
                                ALL
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
                            <a className="nav-link scrollto" href="#services">
                                Services
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
            <section id="hero">
                <div className="hero-container" data-aos="fade-up"
                    data-aos-duration="3000">
                    <h1>Lưu Trường Toán</h1>
                    <h2>I'm an Intern Front-end developer</h2>
                    <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="bx bx-chevron-down"></i></a>
                </div>
            </section>

            <main id="main">
                <section id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                            <span>About Me</span>
                            <h2>About Me</h2>
                            <p>Some infomation about me</p>
                        </div>
                        <div className="row">
                            <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-in" data-aos-duration="3000"></div>
                            <div className="col-lg-8 d-flex flex-column align-items-stretch mt-3">
                                <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-lg-6" data-aos="fade-in" data-aos-duration="2000">
                                            <ul>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Lưu Trường Toán</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>0949415422</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Address:</strong> <span>Ấp 3 xã Khánh Hội huyện U Minh tỉnh Cà Mau, Việt Nam</span></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6" data-aos="fade-in" data-aos-duration="2000">
                                            <ul>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>FPT University</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>toanltce172023@fpt.edu.vn</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div className="skills-content ps-lg-4">
                                    <div className="progress" data-aos="slide-left">
                                        <span className="skill">HTML <i className="val">98%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style={{ width: '98%' }}></div>
                                        </div>
                                    </div>

                                    <div className="progress" data-aos="slide-left">
                                        <span className="skill">CSS <i className="val">86%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{ width: '86%' }}></div>
                                        </div>
                                    </div>

                                    <div className="progress" data-aos="slide-left">
                                        <span className="skill">JavaScript <i className="val">80%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                <section id="resume" className="resume">
                    <div className="container">

                        <div className="section-title" data-aos="zoom-out-down">
                            <span>My Resume</span>
                            <h2>My Resume</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="zoom-out-right">
                                <h3 className="resume-title">Sumary</h3>
                                <div className="resume-item pb-0">
                                    <h4>My Objective</h4>
                                    <p><em>I am eager to secure an internship where I can gain valuable experience and make meaningful contributions to the company. My goal is to advance to a Junior Developer position within a year and to further develop my skills to become a proficient Senior Developer within the next three years.</em></p>
                                </div>

                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                    <h4>FPT University</h4>
                                    <h5>2021 - Now</h5>
                                    <p><em>Software engineer</em></p>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="zoom-out-left">
                                <h3 className="resume-title">Professional Experience</h3>
                                <div className="resume-item">
                                    {/* <h4>Senior graphic design specialist</h4> */}
                                    <h5>Currently, I do not have practical work experience.</h5>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="services" className="services">
                    <div className="container">

                        <div className="section-title" data-aos="zoom-in-down">
                            <span>My Services</span>
                            <h2>My Services</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in-right">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4 className="title">UI/UX Development</h4>
                                    <p className="description">I specialize in developing user interfaces (UI) and user experiences (UX) using HTML, CSS, and JavaScript to create engaging, user-friendly, and interactive websites.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-out-up">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4 className="title">Web Application Development</h4>
                                    <p className="description">I have extensive experience in developing web applications using Java, with a focus on utilizing Ant for efficient build and project management. My skill set includes integrating frameworks like Bootstrap and TailwindCSS to deliver superior user experiences. I am dedicated to crafting robust and scalable web applications that adhere to modern web standards.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-out-up">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                                    <h4 className="title">New Feature Development</h4>
                                    <p className="description">I participate in developing new features for applications using Java and other popular libraries, ensuring the functionality and performance of the application are stable and robust.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in-left">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-world"></i></div>
                                    <h4 className="title">Performance Optimization and Page Load Speed</h4>
                                    <p className="description">I have skills in optimizing source code and speeding up page load times using performance techniques and technologies to enhance user experience and application performance.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title">
                            <span>Contact Me</span>
                            <h2>Contact Me</h2>
                            <p>Assuming you want to be pursued, who, because of greed, prevents others from accepting you</p>
                        </div>

                        <div className="row">

                            <div className="container col-lg-6" data-aos="zoom-in-right">

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="info-box">
                                            <i className="bx bx-share-alt"></i>
                                            <h3>Social Profiles</h3>
                                            <div className="social-links">
                                                <a href="#" className="twitter"><Icon.Twitter /></a>
                                                <a href="https://www.facebook.com/profile.php?id=100064554986406" className="facebook"><Icon.Facebook /></a>
                                                <a href="#" className="instagram"><Icon.Instagram /></a>
                                                <a href="#" className="google-plus"><Icon.Skype /></a>
                                                <a href="#" className="linkedin"><Icon.Linkedin /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box mt-4">
                                            <i className="bx bx-envelope"></i>
                                            <h3>Email</h3>
                                            <p>ToanLTCE172023@fpt.edu.vn</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box mt-4">
                                            <i className="bx bx-phone-call"></i>
                                            <h3>Call Me</h3>
                                            <p>0949415422</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </main>

            <footer id="footer">
                <div className="container">
                    <h3>Lưu Trường Toán</h3>
                    <p>As one as wind and cloud </p>
                    <div className="social-links">
                        <a href="#" className="twitter"><Icon.Twitter /></a>
                        <a href="https://www.facebook.com/profile.php?id=100064554986406" className="facebook"><Icon.Facebook /></a>
                        <a href="#" className="instagram"><Icon.Instagram /></a>
                        <a href="#" className="google-plus"><Icon.Skype /></a>
                        <a href="#" className="linkedin"><Icon.Linkedin /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LTToan;
