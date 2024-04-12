"use client";

import React from "react";
import Image from "next/image";

const AboutArea: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about-img1.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">Welcome to Chelmsford Empowering Minds</span>
                <h2>Embark on a Journey of Knowledge and Personal Growth</h2>
                <p>
                  At Chelmsford, we're dedicated to empowering minds and enriching lives through innovative e-learning solutions. Our platform is designed to provide a holistic educational experience that fosters personal growth and academic success.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Comprehensive Course Offerings
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Interactive Learning Environment
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Expert Guidance and Support
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Cutting-edge Educational Tools
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Personalized Learning Paths
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Community Engagement
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Since our inception, Chelmsford has been committed to providing high-quality education that empowers individuals to achieve their fullest potential.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Passion for Learning
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Inspiring Success Stories
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Continuous Innovation
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Educational Excellence
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is to empower learners of all ages to unlock their potential, foster a love for learning, and make education accessible to everyone.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Empowering Minds
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Inspiring Innovation
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Transforming Education
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Building Brighter Futures
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who We Are</h3>
                  <p>
                    At Chelmsford, we are passionate educators, dedicated to shaping the minds of tomorrow and making a positive impact on society through education.
                  </p>

                  <ul className="features-list">
                    <li>
                      <i className="flaticon-tick"></i> Commitment to Excellence
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Student-Centered Approach
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Innovation and Creativity
                    </li>
                    <li>
                      <i className="flaticon-tick"></i> Lifelong Learning Advocates
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Shape Images */}
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default AboutArea;
