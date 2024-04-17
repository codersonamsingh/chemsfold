"use client";

import React from "react";
import Link from "next/link";

const FeaturedServices: React.FC = () => {
  return (
    <>
      <div className="featured-services-area ptb-100 pt-0">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Services</span>
            <h2>Discover Our Services</h2>
            <p>
              Explore our range of services designed to enhance your learning journey. We're committed to providing top-quality education tailored to your needs.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-featured-box">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>

                <h3>Mock Tests</h3>
                <p>
                  Assess your skills and prepare effectively with our mock tests.
                </p>

                <Link href="/MockTest" className="default-btn">
                  Take Test <span> </span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-featured-box">
                <div className="icon color-facd60">
                  <i className="flaticon-mail"></i>
                </div>

                <h3>Online Classes</h3>
                <p>
                  Embark on a journey of knowledge with our interactive online classes.
                </p>

                <Link href="/Classes" className="default-btn">
                  Enroll Now <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-featured-box">
                <div className="icon color-1ac0c6">
                  <i className="flaticon-research"></i>
                </div>

                <h3>Personalized Learning</h3>
                <p>
                  Tailored learning experiences designed to meet your unique educational requirements.
                </p>

                <Link href="/About Us" className="default-btn">
                  Learn More <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
