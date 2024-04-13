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
            <h2>Our Featured Services</h2>
            <p>
              Real innovations and a positive customer experience are the heart
              of successful communication. No fake products and services.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-featured-box">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>

                <h3>Mock Test</h3>
                <p>
                  Take mock tests to assess your knowledge and readiness for exams.
                </p>

                <Link href="/mock-tests" className="default-btn">
                  Take Test <span></span>
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
                  Enroll in our online classes for comprehensive learning experiences.
                </p>

                <Link href="/online-classes" className="default-btn">
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
                  Experience personalized learning tailored to your educational needs.
                </p>

                <Link href="/personalized-learning" className="default-btn">
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
