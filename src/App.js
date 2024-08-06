import React from "react";
import Hero from "../src/meblue.jpg";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden bg-[#120f1c]">
        <div id="bx-overlay">
          <span className="loader"></span>
        </div>
        <header className="bg-[#1d1a29] w-full bx-static bx-dark">
          <nav className="border-gray-200 py-2">
            <div className="flex flex-wrap justify-between items-center px-6 mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] max-[320px]:px-[12px] sm:max-w-[540px]">
              <a href="index.html" className="flex items-center">
                <img
                  src="assets/img/logo/logo-dark.png"
                  className="w-[90px]"
                  alt="Logo"
                />
              </a>
              <div className="flex items-center lg:order-2">
                <button
                  type="button"
                  className="text-white bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2 hidden 2xl:block xl:block lg:block"
                >
                  Get a quote
                </button>
                <button
                  data-collapse-toggle="mobile-menu"
                  type="button"
                  id="dropdown-toggle"
                  className="inline-flex items-center border border-[#27213b] p-2 text-lg text-gray-500 rounded-lg lg:hidden"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
              <div
                className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu"
              >
                <ul
                  className="flex flex-col font-medium lg:flex-row lg:space-x-8 2xl:border-0 lg:border-0 lg:bg-[#1d1a29] border lg:mt-0 lg-mb-4 lg:p-[0] lg:border-none lg:rounded-[0] lg:text-[15px] mt-4 p-[15px] 2xl:mb-0 xl:mb-0 lg:mb-0 mb-2 border-[#27213b] rounded-[30px] text-[13px]"
                  id="top-menu"
                >
                  <li className="nav-item active">
                    <a
                      href="#home"
                      className="block py-2 pr-4 pl-3 text-[#ddd] lg:p-0"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#about"
                      className="block py-2 pr-4 pl-3 text-[#ddd] lg:p-0"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#experience"
                      className="block py-2 pr-4 pl-3 text-[#ddd] lg:p-0"
                    >
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#portfolio"
                      className="block py-2 pr-4 pl-3 text-[#ddd] lg:p-0"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#news"
                      className="block py-2 pr-4 pl-3 text-[#ddd] lg:p-0"
                    >
                      News
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#contact"
                      className="block py-2 pr-4 pl-3 text-[#ddd] lg:p-0"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <div id="home" className="section-hero bg-[#161321] relative">
          <img
            className="shape1 absolute w-12 left-72 bottom-36 parallax sm:block hidden"
            src="assets/img/shape/shape-1.png"
            alt="shape-1"
          />
          <img
            className="shape2 absolute w-12 top-72 right-32 parallax top sm:block hidden"
            src="assets/img/shape/shape-2.png"
            alt="shape-2"
          />
          <img
            className="shape3 absolute w-12 top-48	left-96 parallax left top sm:block hidden"
            src="assets/img/shape/shape-3.png"
            alt="shape-3"
          />
          <img
            className="shape4 absolute w-6 bottom-72 left-24 parallax left sm:block hidden"
            src="assets/img/shape/shape-4.png"
            alt="shape-4"
          />
          <img
            className="shape5 absolute w-12 bottom-48 right-12 parallax bottom sm:block hidden"
            src="assets/img/shape/shape-5.png"
            alt="shape-5"
          />
          <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] py-[80px] px-4">
            <div
              className="w-full 2xl:h-[90vh] lg:h-[80vh] h-[70vh] max-[320px]:h-[50vh] flex items-center px-2 2xl:max-w-lg xl:max-w-lg lg:max-w-lg lg:w-1/2 lg:mx-0 md:max-w-lg md:w-1/2 md:mx-0 2xl:w-1/2 xl:w-1/2 sm:items-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="text-center 2xl:text-left xl:text-left lg:text-left md:text-left h-72">
                <span className="text-[#7963e0] text-[18px] font-bold">
                  Hello, My name is
                </span>
                <h1 className="text-[#fff] 2xl:text-[60px] xl:text-[55px] lg:text-[50px] md:text-[45px] text-[40px] font-bold">
                  lsabelle Ryal
                </h1>
                <h2 className="py-4 text-[#fff] text-[20px] font-bold">
                  i'm A web Devloper
                </h2>
                <p className="pt-2 text-gray-500 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. enim
                  ratione eligendi expedita!
                </p>
                <button
                  type="button"
                  className="text-white mt-8 bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Hire me
                </button>
              </div>
            </div>
            <div className="w-1/2 hidden px-2 2xl:block xl:block lg:block md:block z-10">
              <img src={Hero} alt="girl" className="max-h-full" />
            </div>
          </div>
          <div className="relative">
            <img
              src="assets/img/shape/hero-shape-dark.png"
              alt="hero-shape"
              className="absolute bottom-0 left-0 right-0 w-full bg-center z-10 bg-cover"
            />
          </div>
        </div>

        <section
          id="service"
          className="2xl:py-[80px] py-[70px] bg-[#120f1c] relative"
        >
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <img
              src="assets/img/shape/shape-6.png"
              alt="shape"
              className="absolute w-12 h-12 top-28 right-40"
            />
          </div>
          <div
            className="banner text-center mb-[30px]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <span className="text-[14px] text-[#ddd]">BEST IT SERVICE</span>
            <h2 className="text-center text-[#ddd] mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
              It Industries We’re
              <span className="text-[#7963e0]">Offering</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-[30px]">
              <div
                className="transition-all rounded flex justify-start items-start"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                <div className="pr-6 border-r border-[#7963e0] max-[480px]:hidden">
                  <h6 className="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold text-[#7963e0] 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] opacity-50">
                    01
                  </h6>
                </div>
                <div className="pl-6 border-l border-[#27213b]">
                  <div className="flex">
                    <img src="assets/img/service/icon-1.png" alt="service-1" />
                  </div>
                  <h4 className="text-[20px] text-[#ddd] pt-6 font-bold">
                    Graphics design
                  </h4>
                  <p className="pt-2 text-[#999] text-[15px] leading-[28px]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
              <div
                className="transition-all rounded flex justify-start items-start"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                <div className="pr-6 border-r border-[#7963e0] max-[480px]:hidden">
                  <h6 className="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold text-[#7963e0] 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] opacity-50">
                    02
                  </h6>
                </div>
                <div className="pl-6 border-l border-[#27213b]">
                  <div className="flex">
                    <img src="assets/img/service/icon-2.png" alt="service-2" />
                  </div>
                  <h4 className="text-[20px] text-[#ddd] pt-6 font-bold">
                    Devlopment
                  </h4>
                  <p className="pt-2 text-[#999] text-[15px] leading-[28px]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
              <div
                className="transition-all rounded flex justify-start items-start"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                <div className="pr-6 border-r border-[#7963e0] max-[480px]:hidden">
                  <h6 className="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold text-[#7963e0] 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] opacity-50">
                    03
                  </h6>
                </div>
                <div className="pl-6 border-l border-[#27213b]">
                  <div className="flex">
                    <img src="assets/img/service/icon-3.png" alt="service-3" />
                  </div>
                  <h4 className="text-[20px] text-[#ddd] pt-6 font-bold">
                    SEO Friendly
                  </h4>
                  <p className="pt-2 text-[#999] text-[15px] leading-[28px]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="2xl:border-b 2xl:pt-24 2xl:border-[#27213b] lg:border-b lg:border-[#27213b] lg:pt-12 pt-0 flex flex-wrap justify-between items-center mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] px-6"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          ></div>
        </section>

        <section id="about" className="bg-[#120f1c] 2xl:pb-[80px] pb-[70px]">
          <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px]">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] px-6 max-[320px]:px-[0px]">
              <div
                className="transition-all relative"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                <img
                  src="assets/img/shape/shape-6.png"
                  alt="shape-6"
                  className="absolute w-12 top-2.5 left-2.5"
                />
                <img
                  src="assets/img/about/img-1.jpg"
                  alt="about-img-1"
                  className="w-full rounded-lg"
                />
                <img
                  src="assets/img/shape/shape-7.png"
                  alt="shape-7"
                  className="absolute w-12 bottom-5 right-2.5"
                />
              </div>
              <div
                className="transition-all"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                <div className="banner mb-[30px]">
                  <span className="text-[14px] text-[#ddd]">ABOUT US</span>
                  <h2 className="text-white mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
                    Creativity bleeds from the pen of{" "}
                    <span className="text-[#7963e0]">inspiration</span>
                  </h2>
                </div>
                <p className="text-[16px] text-[#777] 2xl:mb-[31px] xl:mb-[35px] lg:mb-[10px] mb-[25px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus praesentium totam error consequatur aperiam iusto
                  neque fuga velit.
                </p>
                <div className="border border-[#27213b] p-[24px] rounded-lg">
                  <div className="box-border flex justify-between max-[400px]:block">
                    <div className="left">
                      <div className="name">
                        <span className="text-white text-[16px] leading-[28px] font-bold">
                          Full Name :
                        </span>
                        <br />
                        <span className="detail text-[14px] leading-[28px] text-[#777]">
                          Richard Lord{" "}
                        </span>
                      </div>
                      <div className="age pt-[20px]">
                        <span className="text-white text-[16px] leading-[28px] font-bold">
                          Age :
                        </span>
                        <br />
                        <span className="detail text-[14px] leading-[28px] text-[#777]">
                          30 Years
                        </span>
                      </div>
                    </div>
                    <div className="right">
                      <div className="ph">
                        <span className="text-white text-[16px] leading-[28px] font-bold">
                          Phone No :
                        </span>
                        <br />
                        <span className="detail text-[14px] leading-[28px] text-[#777]">
                          +00 987654321
                        </span>
                      </div>
                      <div className="email pt-[20px]">
                        <span className="text-white text-[16px] leading-[28px] font-bold">
                          Email :
                        </span>
                        <br />
                        <span className="detail text-[14px] leading-[28px] text-[#777]">
                          example@example.com
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom pt-[20px]">
                    <span className="text-white text-[16px] leading-[28px] font-bold">
                      Address :
                    </span>
                    <span className="detail text-[14px] leading-[28px] text-[#777]">
                      Ruami mellow moraes,- Salvador, Brazil
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="section-experience bg-[#161321] relative"
        >
          <div className="relative pt-[60px]">
            <img
              src="assets/img/shape/bg-shape-dark.png"
              alt="bg-shape"
              className="absolute top-0 left-0 right-0 w-full bg-center bg-cover"
            />
          </div>
          <div className="2xl:pb-[80px] pb-[70px] 2xl:pt-[80px] md:pt-[70px] pt-[20px]">
            <div
              className="banner text-center mb-[30px]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <span className="text-[14px] text-[#ddd]">QUALIFICATION</span>
              <h2 className="text-center mt-[5px] text-white 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
                My <span className="text-[#7963e0]">ACHIEVEMENTS</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-between items-center mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6 relative">
              <img
                src="assets/img/shape/shape-8.png"
                alt="shape-8"
                className="absolute w-12 -top-10 right-10"
              />
              <div className="absolute -top-10 left-10 h-12 w-12 bg-[#f1c7a1] rounded-full"></div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                <div className="transition-all justify-start items-start">
                  <h2 className="text-white text-[20px] font-bold leading-[24px]">
                    Education
                  </h2>
                  <div className="border-l-2 border-[#27213b] pl-6">
                    <div
                      className="p-[30px] bg-[#120f1c] rounded-3xl mt-8 relative"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-delay="400"
                    >
                      <div className="absolute top-0 bottom-0 -left-6 w-4">
                        <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#120f1c] absolute top-28 -left-2.5"></span>
                        <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                      </div>
                      <span className="text-[#ddd] text-[12px] font-medium">
                        June 15, 2013 - 2016
                      </span>
                      <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                        Master in Computer Engineering{" "}
                        <span className="ml-[15px] text-[#999] text-[14px]">
                          - First Class
                        </span>
                      </h4>
                      <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Mollitia sequi doloremque ullam placeat quos
                        provident ex fuga. Ratione ab explicabo doloribus error
                        odio veritatis tenetur.
                      </p>
                    </div>
                    <div
                      className="p-[30px] bg-[#120f1c] rounded-3xl mt-8 relative"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-delay="600"
                    >
                      <div className="absolute top-0 bottom-0 -left-6 w-4">
                        <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#120f1c] absolute top-28 -left-2.5"></span>
                        <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                      </div>
                      <span className="text-[#ddd] text-[12px] font-medium">
                        June 12, 2010 - 2013
                      </span>
                      <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                        Bachelor in Computer Engineering{" "}
                        <span className="ml-[15px] text-[#999] text-[14px]">
                          - First Class
                        </span>
                      </h4>
                      <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Mollitia sequi doloremque ullam placeat quos
                        provident ex fuga. Ratione ab explicabo doloribus error
                        odio veritatis tenetur.
                      </p>
                    </div>
                    <div
                      className="p-[30px] bg-[#120f1c] rounded-3xl mt-8 relative"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-delay="800"
                    >
                      <div className="absolute top-0 bottom-0 -left-6 w-4">
                        <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#120f1c] absolute top-28 -left-2.5"></span>
                        <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                      </div>
                      <span className="text-[#ddd] text-[12px] font-medium">
                        June 1, 2009 - 2010
                      </span>
                      <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                        Higher Secondary{" "}
                        <span className="ml-[15px] text-[#999] text-[14px]">
                          - (A+)
                        </span>
                      </h4>
                      <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Mollitia sequi doloremque ullam placeat quos
                        provident ex fuga. Ratione ab explicabo doloribus error
                        odio veritatis tenetur.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="transition-all justify-start 2xl:mt-0 xl:mt-0 lg:mt-0 mt-[15px] items-start"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <h2 className="text-white text-[20px] font-bold leading-[24px]">
                    Experience
                  </h2>
                  <div className="border-l-2 border-[#27213b] pl-6">
                    <div
                      className="p-[30px] bg-[#120f1c] rounded-3xl mt-8 relative"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-delay="400"
                    >
                      <div className="absolute top-0 bottom-0 -left-6 w-4">
                        <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#120f1c] absolute top-28 -left-2.5"></span>
                        <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                      </div>
                      <span className="text-[#ddd] text-[12px] font-medium">
                        March 12, 2020
                      </span>
                      <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                        Envato
                        <span className="ml-[15px] text-[#999] text-[14px]">
                          - Team Leader
                        </span>
                      </h4>
                      <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Mollitia sequi doloremque ullam placeat quos
                        provident ex fuga. Ratione ab explicabo doloribus error
                        odio veritatis tenetur.
                      </p>
                    </div>
                    <div
                      className="p-[30px] bg-[#120f1c] rounded-3xl mt-8 relative"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-delay="600"
                    >
                      <div className="absolute top-0 bottom-0 -left-6 w-4">
                        <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#120f1c] absolute top-28 -left-2.5"></span>
                        <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                      </div>
                      <span className="text-[#ddd] text-[12px] font-medium">
                        January 23, 2018 - 2020
                      </span>
                      <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                        Facebook Company{" "}
                        <span className="ml-[15px] text-[#999] text-[14px]">
                          - Sr. Developer
                        </span>
                      </h4>
                      <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Mollitia sequi doloremque ullam placeat quos
                        provident ex fuga. Ratione ab explicabo doloribus error
                        odio veritatis tenetur.
                      </p>
                    </div>
                    <div
                      className="p-[30px] bg-[#120f1c] rounded-3xl mt-8 relative"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-delay="800"
                    >
                      <div className="absolute top-0 bottom-0 -left-6 w-4">
                        <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#120f1c] absolute top-28 -left-2.5"></span>
                        <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                      </div>
                      <span className="text-[#ddd] text-[12px] font-medium">
                        July 23, 2016 - 2018{" "}
                      </span>
                      <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                        Twitter Company{" "}
                        <span className="ml-[15px] text-[#999] text-[14px]">
                          - Jr. Developer
                        </span>
                      </h4>
                      <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Mollitia sequi doloremque ullam placeat quos
                        provident ex fuga. Ratione ab explicabo doloribus error
                        odio veritatis tenetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="section-Portfolio 2xl:py-[80px] py-[70px]"
        >
          <div
            className="banner text-center mb-[30px]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <span className="text-[14px] text-[#ddd]">PORTFOLIO</span>
            <h2 className="text-center mt-[5px] text-white 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
              My <span className="text-[#7963e0]"> PORTFOLIO</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-between items-center mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6">
            <div className="m-b-minus-24px w-full">
              <div
                className="portfolio-content"
                id="MixItUpDA2FB7"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="600"
              >
                <div className="portfolio-tabs mb-[30px]">
                  <ul className="2xl:flex xl:flex md:flex sm:block place-content-center text-center">
                    <li
                      className="text-[14px] text-[#ddd] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block active"
                      data-filter="all"
                    >
                      ALL
                    </li>
                    <li
                      className="text-[14px] text-[#ddd] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block"
                      data-filter=".design"
                    >
                      DESIGN
                    </li>
                    <li
                      className="text-[14px] text-[#ddd] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block"
                      data-filter=".development"
                    >
                      DEVELOPMENT
                    </li>
                    <li
                      className="text-[14px] text-[#ddd] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block"
                      data-filter=".graphics"
                    >
                      GRAPHICS
                    </li>
                    <li
                      className="text-[14px] text-[#ddd] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block"
                      data-filter=".templates"
                    >
                      Templates
                    </li>
                  </ul>
                </div>
                <div className="portfolio-content-items">
                  <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div className="mix graphics templates">
                      <div className="portfolio-img truncate rounded-2xl relative">
                        <img
                          src="assets/img/portfolio/img-1.jpg"
                          alt="graphics"
                          className="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125"
                        />
                        <h3 className="top-contain absolute top-[15px] right-[15px]">
                          <span className="bg-black rounded-full text-white font-normal text-[12px] px-2 py-1">
                            3D Graphics
                          </span>
                          <span className="bg-black rounded-full text-white font-normal text-[12px] px-2 py-1">
                            Templates
                          </span>
                        </h3>
                        <div className="bottom-contain absolute bottom-4 left-4 right-4">
                          <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                            <a
                              href="#"
                              className="text-white text-sm flex items-center"
                            >
                              Nitro - Car Service
                            </a>
                            <a
                              href="assets/img/portfolio/img-1.jpg"
                              data-fancybox="gallery"
                              className="text-white text-sm grid justify-items-end"
                            >
                              <p className="hidden">.</p>
                              <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mix design">
                      <div className="portfolio-img truncate rounded-2xl relative">
                        <img
                          src="assets/img/portfolio/img-2.jpg"
                          alt="design"
                          className="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125"
                        />
                        <h3 className="top-contain absolute top-[15px] right-[15px]">
                          <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                            Web Design
                          </span>
                        </h3>
                        <div className="bottom-contain absolute bottom-4 left-4 right-4">
                          <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                            <a
                              href="#"
                              className="text-white text-sm flex items-center"
                            >
                              Boros - Artificial Intelligence
                            </a>
                            <a
                              href="assets/img/portfolio/img-2.jpg"
                              data-fancybox="gallery"
                              className="text-white text-sm grid justify-items-end"
                            >
                              <p className="hidden">.</p>
                              <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mix design">
                      <div className="portfolio-img truncate rounded-2xl relative">
                        <img
                          src="assets/img/portfolio/img-3.jpg"
                          alt="design"
                          className="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125"
                        />
                        <h3 className="top-contain absolute top-[15px] right-[15px]">
                          <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                            Web Design
                          </span>
                        </h3>
                        <div className="bottom-contain absolute bottom-4 left-4 right-4">
                          <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                            <a
                              href="#"
                              className="text-white text-sm flex items-center"
                            >
                              Mila - Virtual Reality
                            </a>
                            <a
                              href="assets/img/portfolio/img-3.jpg"
                              data-fancybox="gallery"
                              className="text-white text-sm grid justify-items-end"
                            >
                              <p className="hidden">.</p>
                              <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mix development">
                      <div className="portfolio-img truncate rounded-2xl relative">
                        <img
                          src="assets/img/portfolio/img-4.jpg"
                          alt="development"
                          className="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125"
                        />
                        <h3 className="top-contain absolute top-[15px] right-[15px]">
                          <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                            Development
                          </span>
                        </h3>
                        <div className="bottom-contain absolute bottom-4 left-4 right-4">
                          <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                            <a
                              href="#"
                              className="text-white text-sm flex items-center"
                            >
                              Sen - Hotel Website
                            </a>
                            <a
                              href="assets/img/portfolio/img-4.jpg"
                              data-fancybox="gallery"
                              className="text-white text-sm grid justify-items-end"
                            >
                              <p className="hidden">.</p>
                              <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mix templates design">
                      <div className="portfolio-img truncate rounded-2xl relative">
                        <img
                          src="assets/img/portfolio/img-1.jpg"
                          alt="templates"
                          className="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125"
                        />
                        <h3 className="top-contain absolute top-[15px] right-[15px]">
                          <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                            Templates
                          </span>
                          <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                            Web Design
                          </span>
                        </h3>
                        <div className="bottom-contain absolute bottom-4 left-4 right-4">
                          <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                            <a
                              href="#"
                              className="text-white text-sm flex items-center"
                            >
                              Ekka - eCommerce template
                            </a>
                            <a
                              href="assets/img/portfolio/img-1.jpg"
                              data-fancybox="gallery"
                              className="text-white text-sm grid justify-items-end"
                            >
                              <p className="hidden">.</p>
                              <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mix development graphics">
                      <div className="portfolio-img truncate rounded-2xl relative">
                        <img
                          src="assets/img/portfolio/img-2.jpg"
                          alt="development"
                          className="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125"
                        />
                        <h3 className="top-contain absolute top-[15px] right-[15px]">
                          <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                            Development
                          </span>
                          <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                            3D Graphics
                          </span>
                        </h3>
                        <div className="bottom-contain absolute bottom-4 left-4 right-4">
                          <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                            <a
                              href="#"
                              className="text-white text-sm flex items-center"
                            >
                              Bukki - Teck crafts
                            </a>
                            <a
                              href="assets/img/portfolio/img-2.jpg"
                              data-fancybox="gallery"
                              className="text-white text-sm grid justify-items-end"
                            >
                              <p className="hidden">.</p>
                              <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="section-news bg-[#161321]">
          <div className="relative pt-[60px]">
            <img
              src="assets/img/shape/bg-shape-dark.png"
              alt="bg-shape"
              className="absolute top-0 left-0 right-0 w-full bg-center bg-cover"
            />
          </div>
          <div className="2xl:pb-[80px] pb-[70px] 2xl:pt-[80px] md:pt-[70px] pt-[20px]">
            <div
              className="banner text-center mb-[30px]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <span className="text-[14px] text-[#ddd]">BLOGS</span>
              <h2 className="text-center mt-[5px] text-white 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
                Latest <span className="text-[#7963e0]"> NEWS</span>
              </h2>
            </div>
            <div
              className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] relative px-6"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <div className="relative"></div>
              <div className="2xl:absolute 2xl:max-[1140px] xl:absolute xl:max-w-[720px] lg:absolute lg:max-w-[620px] max-w-[100%] relative">
                <div className="transition-all justify-start items-start">
                  <div className="news-slider">
                    <div className="carousel-wrap">
                      <div className="owl-carousel news-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                          <div className="owl-stage">
                            <div className="owl-item">
                              <div className="card bg-[#120f1c] rounded-2xl p-6">
                                <img
                                  src="assets/img/news/img-2.jpg"
                                  alt="news-3"
                                  className="rounded-2xl"
                                />
                                <div className="news-card-details mt-[16px]">
                                  <p className="text-[13px] leading-[30px] mb-[5px] text-[#7963e0]">
                                    By Admin{" "}
                                    <span className="text-gray-400">
                                      - 04 Comments
                                    </span>
                                  </p>
                                  <h5 className="text-white pb-[15px] text-[17px] font-bold border-b border-[#27213b]">
                                    Lorem ipsum dolor sit amet.
                                  </h5>
                                  <div className="pt-[15px] text-sm text-[#7963e0]">
                                    Read More{" "}
                                    <a className="hover:text-[#7963e0]">
                                      <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="owl-item">
                              <div className="card bg-[#120f1c] rounded-2xl p-6">
                                <img
                                  src="assets/img/news/img-3.jpg"
                                  alt="news-3"
                                  className="rounded-2xl"
                                />
                                <div className="news-card-details mt-[16px]">
                                  <p className="text-[13px] leading-[30px] mb-[5px] text-[#7963e0]">
                                    By Admin{" "}
                                    <span className="text-gray-400">
                                      - 04 Comments
                                    </span>
                                  </p>
                                  <h5 className="text-white pb-[15px] text-[17px] font-bold border-b border-[#27213b]">
                                    Lorem ipsum dolor sit amet.
                                  </h5>
                                  <div className="pt-[15px] text-sm text-[#7963e0]">
                                    Read More{" "}
                                    <a className="hover:text-[#7963e0]">
                                      <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transition-all flex-row 2xl:block xl:block lg:block hidden">
                <img
                  src="assets/img/news/img-1.jpg"
                  alt="news"
                  className="w-auto rounded-[15px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="section-contact 2xl:py-[80px] py-[70px]"
        >
          <div
            className="banner text-center mb-[30px]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <span className="text-[14px] text-[#ddd]">FORM</span>
            <h2 className="text-center mt-[5px] 2xl:text-[35px] text-[#fff] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
              Get In <span className="text-[#7963e0]">TOUCH</span>
            </h2>
          </div>
          <form>
            <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6">
              <div className="m-b-minus-24px w-full">
                <div
                  className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <div className="border border-[#27213b] rounded-lg">
                    <div className="border-b border-[#27213b]">
                      <input
                        type="text"
                        className="appearance-none bg-[#161321] w-full py-6 px-3 text-[#777] leading-tight focus:outline-none focus:bg-[#120f1c] rounded-t-lg"
                        id="fname"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="border-b border-[#27213b]">
                      <input
                        type="email"
                        className="appearance-none bg-[#161321] w-full py-6 px-3 text-[#777] leading-tight focus:outline-none focus:bg-[#120f1c] rounded-t-lg"
                        id="umail"
                        placeholder="Email"
                      />
                    </div>
                    <div className="border-b border-[#27213b]">
                      <input
                        type="text"
                        className="appearance-none bg-[#161321] w-full py-6 px-3 text-[#777] leading-tight focus:outline-none focus:bg-[#120f1c] rounded-t-lg"
                        id="phone"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="appearance-none bg-[#161321] w-full py-6 px-3 text-[#777] leading-tight focus:outline-none focus:bg-[#120f1c] rounded-t-lg"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="mb-0">
                    <div className="mb-4">
                      <textarea
                        className="w-full border border-[#27213b] bg-[#161321] text-[#777] rounded-xl pl-4 pt-2 focus:outline-none focus:bg-[#120f1c]"
                        id="exampleFormControlTextarea1"
                        rows="8"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="text-white bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>

        <footer className="bg-[#070415]">
          <div className="flex justify-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] 2xl:flex-row xl:flex-row lg:flex-row flex-col md:max-w-[720px] max-[320px]:px-[12px] sm:max-w-[540px] gap-[30px] px-6 py-8">
            <div className="lg:w-1/2 text-white text-[12px] font-normal 2xl:text-left xl:text-left text-center">
              Copyright ©
              <a href="index.html" className="hover:text-white font-semibold">
                Borox
              </a>
              all rights reserved. Powered by Borox.
            </div>
            <div className="lg:w-1/2 text-white font-normal text-[12px] flex 2xl:justify-end xl:justify-end lg:justify-end justify-between">
              <a href="javascript:void(0)" className="pr-10 hover:text-white">
                Privacy Policy
              </a>
              <a href="javascript:void(0)" className="hover:text-white">
                Terms and Conditions
              </a>
            </div>
          </div>
        </footer>

        <div
          id="scrollup"
          className="fixed bg-[#7963e0] text-white rounded-full flex justify-center text-center items-center p-2 right-6 cursor-pointer bottom-6 h-10 w-10 z-20"
        >
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
};

export default App;
