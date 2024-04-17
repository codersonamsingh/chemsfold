"use client";

import React from "react";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="overview-area overflow-hidden ptb-100 pt-0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Classes</span>
                <h2>Customized Learning Paths for Every Student</h2>
                <p>
                  At Chelmsford, we offer tailored educational experiences designed to suit the individual needs of each student.
                </p>
          </div>

          {/* Our Services One */}
          <div className="overview-box">
            <div className="overview-content">
            <div className="features-text">
            <span className="sub-title">Crash Course</span>
      <h2>Accelerated Learning for Quick Mastery</h2>
      <p>
        Our crash courses are designed for students seeking rapid skill acquisition and focused exam preparation. Dive deep into key concepts and master critical topics in a condensed timeframe.
      </p>

                </div>
                <div className="features-text">
        <h4>
          <i className="flaticon-tick"></i> Core Development
        </h4>
        <p>
          Empower yourself with core development skills essential for success in today's fast-paced world. From foundational knowledge to advanced techniques, our crash courses cover it all.
        </p>
      </div>

                <div className="features-text">
        <h4>
          <i className="flaticon-tick"></i> Define Your Choices
        </h4>
        <p>
          Customize your learning experience by defining your preferences and goals. With our crash courses, you have the flexibility to tailor your curriculum and focus on what matters most to you.
        </p>
      </div>
              </div>
            </div>

            {/* <div 
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
            </div> */}
          </div>

          {/* Our Services Two */}
          <div className="overview-box">
            {/* <div 
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/why-choose-img1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div> */}

            <div className="overview-content">
              <div className="content right-content">
                {/* <span className="sub-title">Design & Development</span>
                <h2>Solving problems, building brands</h2>
                <p>
                  We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication.
                </p> */}

                {/* <ul className="features-list">
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Recommender systems
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Demand prediction
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Omnichannel analytics
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Lead generation
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Dedicated Developers
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> 24/7 Support
                    </span>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>

          {/* Our Services Three */}
          <div className="overview-box">
            {/* <div className="overview-content">
              <div className="content">
               
                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Core Development
                  </h4>
                  <p>
                  Empower yourself with core development skills essential for success in today's fast-paced world. From foundational
                   knowledge to advanced techniques, our crash courses cover it all.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Define Your Choices
                  </h4>
                  <p>
                  Customize your learning experience by defining your preferences and goals.
                   With our crash courses, you have the flexibility to tailor your curriculum and focus on what matters most to you.
                  </p>
                </div>
              </div>
            </div> */}

            <div 
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                
                <Image
                  src="/images/features-image/feature-image1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>
          </div>

          {/* Our Services Four */}
          <div className="overview-box">
            {/* <div 
              className="overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="image">
                <Image
                  src="/images/features-image/feature-image2.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div> */}

            <div className="overview-content">
              <div className="content right-content">
                {/* <span className="sub-title">SEO Consultancy</span>
                <h2>We make smart, good-looking things</h2>
                <p>
                  We believe brand interaction is key in communication. Real
                  innovations and a positive customer experience are the heart
                  of successful communication.
                </p> */}

                {/* <ul className="features-list">
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Recommender systems
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Demand prediction
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Omnichannel analytics
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Lead generation
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Dedicated Developers
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> 24/7 Support
                    </span>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default OurServices;
