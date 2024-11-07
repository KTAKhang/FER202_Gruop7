import React, { useEffect } from 'react';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as Icon from 'react-bootstrap-icons';
import 'aos/dist/aos.css';
import '../assets/styles/Aerial.css';

import Banner1 from '../assets/images/Aerial/a1.png';
import Banner2 from '../assets/images/Aerial/a2.png';
import Banner3 from '../assets/images/Aerial/a3.png';
import Banner4 from '../assets/images/Aerial/a3.png';
import Banner5 from '../assets/images/Aerial/a3.png';
import Banner6 from '../assets/images/Aerial/SPC.png';
import Footer from '../components/Khang/Footer';

function Aerial() {

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
                            <a className="nav-link scrollto" href="#detail">
                                Detail
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#review">
                                review
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
                    <h1>Gundam Universe</h1>
                    <h2>Explore the world of Gundam through my designs and projects</h2>
                    <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="bx bx-chevron-down"></i></a>
                </div>
            </section>

            <main id="main">
                <section id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                            <span>Aerial Gundam</span>
                            <h2>Aerial Gundam</h2>

                        </div>
                        <div id="carouselExampleIndicators" className="carousel slide ">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Banner1} className="d-block haha w-100 h-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Banner2} className="d-block haha w-100 h-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Banner3} className="d-block haha w-100 h-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Banner4} className="d-block haha w-100 h-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Banner5} className="d-block haha w-100 h-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>
                <section id="detail" className="detail">
                    <div className="container">

                        <div className="section-title" data-aos="zoom-out-down">
                            <span>Detail</span>
                            <h2>Detail</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 d-flex flex-column align-items-stretch mt-3">
                                <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                                    <h4>1. History and Importance</h4>
                                    <p><strong>Origins:</strong> The first Gundam series, <em>Mobile Suit Gundam</em>, was launched in 1979 by Yoshiyuki Tomino. It was a pioneer in the "real robot" genre.</p>
                                    <p><strong>Scope:</strong> Gundam has evolved into a massive franchise, encompassing anime, manga, model kits (Gunpla), and video games.</p>

                                    <h4>2. The World of Gundam and Its Stories</h4>
                                    <p>The storyline often revolves around military and political conflicts, featuring "Mobile Suits" (MS) or "Gundams"—giant robots piloted by humans. Key timelines include <em>Universal Century</em> (UC) and <em>After Colony</em> (AC).</p>

                                    <h4>3. Gunpla and Culture</h4>
                                    <p><strong>Gunpla:</strong> Gundam model kits are incredibly popular worldwide and appeal not only to children but also to adults and collectors.</p>

                                    <h4>4. Social and Political Significance</h4>
                                    <p>Gundam is more than just robots; it also touches on themes of war, peace, and social issues.</p>

                                    <h4>5. Notable Series</h4>
                                    <ul>
                                        <li><strong>Mobile Suit Gundam (1979):</strong> The start of the Gundam universe, focusing on the conflict between the Earth Federation and Zeon.</li>
                                        <li><strong>Gundam Wing (1995):</strong> Known in the West, it tells the story of young pilots fighting to protect Earth.</li>
                                        <li><strong>Gundam Seed (2002):</strong> A popular series with impressive visuals and a compelling storyline.</li>
                                    </ul>

                                    <h4>6. Gundam Aerial</h4>
                                    <p><strong>Introduction:</strong> Gundam Aerial is a recent addition to the Gundam lineup, introduced in <em>Mobile Suit Gundam: The Witch from Mercury</em>. Aerial is piloted by the protagonist Suletta Mercury, and it brings a fresh, innovative design to the Gundam universe.</p>
                                    <p><strong>Features:</strong> Aerial combines advanced technology with a sleek, modern aesthetic. Its unique GUND-ARM system makes it stand out among other Gundams, providing exceptional combat capabilities and resonance with its pilot.</p>
                                    <p><strong>Impact:</strong> Gundam Aerial has garnered attention for its modern design and symbolic connection to new-generation Gundam fans, expanding the franchise's appeal and relevance in contemporary anime culture.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
                <section id="review" className="review">
                    <div className="container">

                        <div className="section-title" data-aos="zoom-in-down">
                            <span>Gundam Aerial</span>
                            <h2>Gundam Aerial</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in-right">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-cube"></i></div>
                                    <h4 className="title">Design and Structure</h4>
                                    <p className="description">Gundam Aerial features a sleek, futuristic design with a striking color scheme of white, blue, and red accents, symbolizing its advanced technological capabilities.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-out-up">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-brain"></i></div>
                                    <h4 className="title">GUND Format System</h4>
                                    <p className="description">Equipped with the advanced GUND Format system, Aerial allows for seamless pilot integration, enhancing combat efficiency and responsiveness in battle.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-out-up">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-dots-horizontal-rounded"></i></div>
                                    <h4 className="title">Bits and Weaponry</h4>
                                    <p className="description">The deployable Bits offer versatile offensive and defensive options, enabling Aerial to create energy shields and launch focused attacks for strategic advantage.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in-left">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-shield"></i></div>
                                    <h4 className="title">Combat and Defense</h4>
                                    <p className="description">Aerial boasts powerful beam weaponry and advanced defensive systems, making it a formidable mobile suit in both close and ranged engagements.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title">
                            <span>Contact FIVEBOYS</span>
                            <h2>Contact FIVEBOYS</h2>
                            <p>If you want to buy similar model please come to our shop</p>
                        </div>

                        <div className="row">

                            <div className="container col-lg-6" data-aos="zoom-in-right">

                                <div className="row">
                                    <img src={Banner6} className="d-block w-100 h-100" alt="..." />
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </main>

            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Aerial;
