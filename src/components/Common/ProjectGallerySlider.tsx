"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const ProjectGallerySlider: React.FC = () => {
  return (
    <>
      <div className="projects-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Projects Gallery</span>
            <h2>Explore Our Educational Initiatives</h2>
          </div>
        </div>

        <div className="container-fluid">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1700: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="projects-slides"
          >
            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-image/project1.jpg"
                  alt="image"
                  width={600}
                  height={600}
                />
                <div className="projects-content">
                  <h3>
                    <Link href="/courses/details">Mock Test Preparation</Link>
                  </h3>
                  <span className="category">Crash Course</span>
                </div>
                <div className="plus-icon">
                  <Link href="/courses/details" className="popup-btn">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-image/project2.jpg"
                  alt="image"
                  width={600}
                  height={600}
                />
                <div className="projects-content">
                  <h3>
                    <Link href="/courses/details">Comprehensive Learning Program</Link>
                  </h3>
                  <span className="category">Full Course</span>
                </div>
                <div className="plus-icon">
                  <Link href="/courses/details" className="popup-btn">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-image/project3.jpg"
                  alt="image"
                  width={600}
                  height={600}
                />
                <div className="projects-content">
                  <h3>
                    <Link href="/mocktests/details">Initial Assessment</Link>
                  </h3>
                  <span className="category">30 Minutes Test</span>
                </div>
                <div className="plus-icon">
                  <Link href="/mocktests/details" className="popup-btn">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-image/project4.jpg"
                  alt="image"
                  width={600}
                  height={600}
                />
                <div className="projects-content">
                  <h3>
                    <Link href="/mocktests/details">Post-Course Evaluation</Link>
                  </h3>
                  <span className="category">2 Hours Test</span>
                </div>
                <div className="plus-icon">
                  <Link href="/mocktests/details" className="popup-btn">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Image
                  src="/images/projects-image/project5.jpg"
                  alt="image"
                  width={600}
                  height={600}
                />
                <div className="projects-content">
                  <h3>
                    <Link href="/mocktests/details">Final Assessment</Link>
                  </h3>
                  <span className="category">3 Hours Test</span>
                </div>
                <div className="plus-icon">
                  <Link href="/mocktests/details" className="popup-btn">
                    <span></span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProjectGallerySlider;
