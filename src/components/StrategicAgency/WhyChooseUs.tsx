"use client";

import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="why-choose-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-content">
                <span className="sub-title">Why Choose Us</span>
                <h2>Empowering Minds, Enriching Lives</h2>
                <p>
                  Embark on a journey of knowledge, innovation, and personal growth with our cutting-edge e-learning platform. Here, empowerment flourishes, and your educational aspirations take center stage.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Comprehensive Curriculum
                  </h4>
                  <p>
                    Dive into a curriculum meticulously crafted to ignite curiosity and foster holistic development.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Flexible Learning Options
                  </h4>
                  <p>
                    Choose from crash courses or full courses tailored to suit your schedule and learning pace.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="why-choose-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Image
                  src="/images/why-choose-img1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
