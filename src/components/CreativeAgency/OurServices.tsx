"use client";

import React from "react";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="overview-area overflow-hidden ptb-100 pt-0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title"></span>
            <h2>Embark on a Journey of Knowledge and Growth</h2>
            <p>
              Discover a transformative learning experience with Chelmsford Empowering Minds. Dive into our array of educational services designed to enrich your mind and empower your potential.
            </p>
          </div>

          {/* Online Classes */}
          <div className="overview-box">
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">Interactive Learning</span>
                <h2>Engage in Dynamic Online Classes</h2>
                <p>
                  Immerse yourself in interactive sessions led by expert instructors. Our online classes ensure a vibrant learning environment where knowledge flourishes and skills are honed.
                </p>
              </div>
            </div>

            <div
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/about-img1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>
          </div>

          {/* Mock Tests */}
          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <Image
                  src="/images/why-choose-img1.png"
                  alt="image"
                  width={830}
                  height={750}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-once="true"
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <span className="sub-title">Assessment & Preparation</span>
                <h2>Enhance Your Skills with Mock Tests</h2>
                <p>
                  Sharpen your abilities and gauge your progress with our comprehensive mock tests. Prepare yourself thoroughly for success in your academic pursuits.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Growth */}
          <div className="overview-box">
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">Empowerment & Support</span>
                <h2>Experience Respect, Care, and Progress</h2>
                <p>
                  At Chelmsford, we prioritize your educational journey. Receive the support, care, and opportunities necessary for your personal and academic growth.
                </p>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <Image
                  src="/images/features-image/feature-image1.png"
                  alt="image"
                  width={830}
                  height={750}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="800"
                  data-aos-once="true"
                />
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <Image
                  src="/images/features-image/feature-image2.png"
                  alt="image"
                  width={830}
                  height={750}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-once="true"
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <span className="sub-title">Comprehensive Support</span>
                <h2>Unlock Your Potential with Chelmsford</h2>
                <p>
                  Our platform offers a range of additional services to complement your learning journey. From personalized guidance to advanced resources, we're here to empower you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
