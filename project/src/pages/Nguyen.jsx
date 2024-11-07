import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel từ react-bootstrap
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AOS from "aos";
import "aos/dist/aos.css";
import * as Icon from "react-bootstrap-icons";

import anh1 from "../assets/images/Nguyen/anh6.jpg"; // Import các hình ảnh
import anh2 from "../assets/images/Nguyen/anh8.webp";
import anh3 from "../assets/images/Nguyen/anh10.jpg";
import anh4 from "../assets/images/Nguyen/anh11.jpg";


import "../assets/styles/Nguyen.css";

const items = [
  {
    "id": 1,
    "name": "Earth Federation (Liên bang Địa Cầu)",
    "origin": "Mobile Suit Gundam (Universal Century)",
    "description": "Earth Federation là tổ chức chính phủ lớn trên Trái Đất, chịu trách nhiệm quản lý các thuộc địa không gian và bảo vệ an ninh cho toàn bộ nhân loại. Liên bang thường được mô tả là chính quyền chính thống, mặc dù cũng có những mặt tối như tham nhũng và bất công trong hệ thống quản lý. Trong bối cảnh của Universal Century, Liên bang phải đối mặt với nhiều thách thức từ các phe phái độc lập, đặc biệt là Principality of Zeon, những người đòi quyền tự trị cho các thuộc địa không gian. Qua các cuộc chiến như One Year War, Liên bang đã phát triển các dòng Mobile Suit riêng để đối đầu với Zeon, nổi bật nhất là RX-78-2 Gundam, biểu tượng của sức mạnh và sự kiên định của Liên bang. Tuy nhiên, bên cạnh mục tiêu duy trì hòa bình, Liên bang Địa Cầu cũng bộc lộ mặt tối khi các lãnh đạo thường mưu cầu quyền lực cá nhân, khiến tổ chức này trở thành một trong những phe phức tạp và gây nhiều tranh cãi trong series Gundam.",
    "image": anh1,
    "rating": 5
  },
  {
    "id": 2,
    "name": "Principality of Zeon (Cộng hòa Zeon)",
    "origin": "Mobile Suit Gundam (Universal Century)",
    "description": "Principality of Zeon, thường gọi là Zeon, là một phe phái tách ra từ các thuộc địa không gian Side 3, do gia tộc Zabi lãnh đạo. Zeon xuất hiện như là lực lượng cách mạng đòi độc lập khỏi Liên bang Địa Cầu. Họ tin vào hệ tư tưởng của Zeon Zum Deikun, người tin rằng nhân loại sẽ phát triển tốt hơn khi sống trong không gian. Zeon ban đầu kêu gọi quyền tự trị cho các cư dân không gian nhưng sau đó bị biến tướng dưới sự lãnh đạo của gia tộc Zabi thành một chế độ độc tài quân sự. Trong cuộc chiến One Year War, Zeon đã sử dụng công nghệ Mobile Suit để gây sức ép và tấn công Liên bang, mở ra kỷ nguyên của các trận chiến giữa các cỗ máy khổng lồ như Zaku II. Dù Zeon thua cuộc trong nhiều trận chiến quan trọng, tàn dư của Zeon vẫn tiếp tục chiến đấu cho lý tưởng tự do, dẫn đến sự ra đời của Neo Zeon và các phong trào kháng chiến khác. Zeon đại diện cho lý tưởng tự do, nhưng cũng là cảnh báo về sự độc tài và lòng tham quyền lực, làm nên một hình ảnh đối lập rõ rệt với Earth Federation.",
    "image": anh2,
    "rating": 5
  },
  {
    "id": 3,
    "name": "ZAFT (Quân Đònn Phản Vật Chất",
    "origin": "Mobile Suit Gundam SEED (Cosmic Era)",
    "description": "ZAFT (Zodiac Alliance of Freedom Treaty) là tổ chức quân sự của các thuộc địa không gian PLANT, nơi sinh sống của Coordinators - những con người có DNA đã được chỉnh sửa để cải thiện các kỹ năng và trí thông minh. ZAFT ra đời với mục tiêu bảo vệ quyền lợi của các Coordinators trước sự kỳ thị và áp bức từ Liên minh Trái Đất. Cuộc chiến giữa ZAFT và Liên minh Trái Đất bùng phát sau nhiều sự kiện căng thẳng, bao gồm các vụ tấn công và sự phân biệt đối xử. Được trang bị các Mobile Suit tiên tiến như Gundam Seed và Freedom Gundam, ZAFT không ngừng chiến đấu vì tự do và quyền tự quyết. Tuy nhiên, nội bộ ZAFT cũng tồn tại các mâu thuẫn và đấu tranh quyền lực, dẫn đến nhiều tranh cãi và xung đột giữa các lãnh đạo của tổ chức này. ZAFT không chỉ là biểu tượng của sự tiến bộ công nghệ mà còn là lời nhắc nhở về sự đấu tranh cho công bằng và quyền lợi cá nhân trong một xã hội đầy bất công.",
    "image": anh3,
    "rating": 4
  },
  {
    "id": 4,
    "name": "Celestial Being (Dế Quốc Anno Domini)",
    "origin": "Mobile Suit Gundam 00 (Anno Domini)",
    "description": "Celestial Being là một tổ chức tư nhân bí mật được thành lập với mục tiêu chấm dứt tất cả các cuộc chiến tranh trên toàn cầu. Được tài trợ và lãnh đạo bởi Aeolia Schenberg, một nhà khoa học lỗi lạc, Celestial Being tin rằng chỉ có thể đạt được hòa bình thực sự khi loại bỏ được các xung đột quân sự. Với các Mobile Suit Gundam mạnh mẽ và những phi công tài giỏi gọi là Gundam Meisters, Celestial Being can thiệp vào các cuộc xung đột và đánh bại những ai gây chiến. Tổ chức này tuân thủ triệt để lý tưởng của mình, nhưng không ngừng đối mặt với các chỉ trích từ phía chính phủ và người dân vì cách tiếp cận cực đoan. Celestial Being có sự tổ chức chặt chẽ, sử dụng công nghệ GN Drive độc quyền cho các Gundam của mình, giúp họ có thể hoạt động lâu dài mà không cần tiếp nhiên liệu. Tuy nhiên, sự tồn tại của Celestial Being cũng đặt ra câu hỏi về việc liệu hòa bình ép buộc có thực sự bền vững và có thể mang lại tự do thực sự hay không.",
    "image": anh4,
    "rating": 5
  },

];


function Nguyen() {
    const navigate = useNavigate(); // Khai báo useNavigate

    const handleCarouselClick = (id) => {
      navigate(`/detail/${id}`); // Điều hướng đến trang chi tiết với id
    };
  
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
  
    // AOS animation library
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
        {/* Header */}
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
                <a className="nav-link scrollto" href="#hero-anh">
                 Chi Nguyen
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#carousel-section">
                  About
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
  
        {/* Hero Section */}
        <section id="hero-anh">
          <div
            className="hero-anh-container"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1>Bui Chi Nguyen</h1>
            <h2>I am the master of Gundam</h2>
            <a href="#about" className="btn-scroll scrollto" title="Scroll Down">
              <i className="bx bx-chevron-down"></i>
            </a>
          </div>
        </section>
  
        {/* Carousel Section */}
        <section id="carousel-section" className="my-5">
        <Carousel>
  {items.map(item => (
    <Carousel.Item key={item.id} onClick={() => handleCarouselClick(item.id)}>
      <img
        src={item.image}
        className="d-block w-100"
        alt={item.name}
        style={{ height: "500px", objectFit: "cover" }}
      />
      <Carousel.Caption>
        <h3 className="tieude">{item.name}</h3>
        <p className="thongtin">
          {item.description.length > 100
            ? `${item.description.slice(0, 100)}...`
            : item.description}
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>

        </section>
  
        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <span>Contact Me</span>
              <h2></h2>
              <p>
              A GunDam series expert is always ready to take your questions.
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
                        <a href="https://x.com/Nguyenbcce" className="twitter">
                          <Icon.Twitter />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100030750404219&mibextid=ZbWKwL" className="facebook">
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
                      <p>skynguyenlee@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <i className="bx bx-phone-call"></i>
                      <h3>Call Me</h3>
                      <p>0984 009 002</p>
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
  
        {/* Footer */}
        <footer id="footer">
          <div className="container">
            <h3>Bui Chi Nguyen</h3>
            <p>As one as wind and cloud </p>
            <div className="social-links">
              <a href="/https://x.com/Nguyenbcce" className="twitter">
                <Icon.Twitter />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100030750404219&mibextid=ZbWKwL" className="facebook">
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

export default Nguyen