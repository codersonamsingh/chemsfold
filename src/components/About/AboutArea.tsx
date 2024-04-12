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
                <span className="sub-title">Your E-Learning Platform</span>
                <h2>
               Welcome to Your E-Learning Oasis</h2>
                <p>
                Your E-Learning Oasis is a hub for transformative online education, bridging the gap between traditional classrooms and modern digital learning experiences.
                </p>
                <h2>
                Empowering Learning, Personalized Journey
                </h2>
                <p>
                The Gateway to Knowledge, located in the heart of online education, is designed to offer you the full spectrum of learning services, combining the flexibility of digital courses with personalized guidance.
                </p>
                <h2>
                A Full Range of Courses
                </h2>
                <p>
                Your E-Learning Oasis provides a wide range of courses and amenities:
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Diverse Subject Offerings

                
                    </span>
                    <p>
                    From foundational math and English courses to advanced programming and design.
                    </p>
                    
                  </li>
                  
                  <li>
                    <span>
                      <i className="fas fa-check"></i>  Interactive Learning Tools
                    </span>
                    <p>
                    Engage with quizzes, simulations, and collaborative projects for a hands-on learning experience.


                    </p>
                  </li>
                  {/* <li>
                    <span>
                      <i className="fas fa-check"></i> Expert Guidance and Support
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Cutting-edge Educational Tools
                    </span>
                  </li> */}
                  {/* <li>
                    <span>
                      <i className="fas fa-check"></i> Personalized Learning Paths
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check"></i> Community Engagement
                    </span>
                  </li> */}
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
