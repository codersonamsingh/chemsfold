"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const CaseStudies: React.FC = () => {
  return (
    <>
      <div className="works-area ptb-100 gray-bg">
        <div className="container-fluid">
          <div className="section-title">
            <span className="sub-title">Projects</span>
            <h2>Our Case Studies</h2>
            <p>
              Embark on a journey of knowledge, innovation, and personal growth with our cutting-edge e-learning platform. Here, empowerment flourishes, and your educational aspirations take center stage. Explore our diverse range of case studies showcasing our commitment to enriching minds and empowering learners.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              930: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
            className="work-slider"
          >
            <SwiperSlide>
              <div className="work-card">
                <Image
                  src="/images/works/work1.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects/2">Mock Test</Link>
                  </span>
                  <h3>
                    <Link href="/projects/details">
                      Initial Test: Assess Your Knowledge
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-card">
                <Image
                  src="/images/works/work2.jpg"
                  alt="image"
                  width={510}
                  height={700}
                />

                <div className="content text-center">
                  <span>
                    <Link href="/projects/2">Full Course</Link>
                  </span>
                  <h3>
                    <Link href="/projects/details">
                      Comprehensive Learning Experience
                    </Link>
                  </h3>

                  <Link href="/projects/details" className="work-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Add more slides here for different case studies */}

          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
