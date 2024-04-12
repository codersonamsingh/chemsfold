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
                <h2>Embark on a Journey of Knowledge and Growth</h2>
                <p>
                  At Chelmsford Empowering Minds, we believe that every
                  interaction with education is an opportunity for empowerment
                  and growth. We strive to provide you with the tools and
                  resources to succeed and excel in your educational journey.
                </p>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Cutting-Edge Learning
                    Platform
                  </h4>
                  <p>
                    Our platform is designed to offer innovative and
                    personalized learning experiences. We prioritize your
                    educational needs to ensure your success.
                  </p>
                </div>

                <div className="features-text">
                  <h4>
                    <i className="flaticon-tick"></i> Personalized Learning
                    Paths
                  </h4>
                  <p>
                    Tailor your educational journey according to your needs and
                    preferences. With us, you define your learning choices and
                    pace.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-image">
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
