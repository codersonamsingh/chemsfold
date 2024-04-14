"use client";

import React from "react";
import Link from "next/link";

const Services: React.FC = () => {
  return (
    <>
      <div className="services-area ptb-100 bg-F4F7FC">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">What We Offer</span>
            <h2>Empowering Minds, Enriching Lives</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-mock-test"></i>
                </div>
                <h3>
                  <Link href="/services/details">Mock Tests</Link>
                </h3>
                <p>
                  Take our mock tests to assess your skills and readiness for
                  upcoming challenges.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Explore More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-00aeff">
                  <i className="flaticon-classes"></i>
                </div>
                <h3>
                  <Link href="/services/details">Classes</Link>
                </h3>
                <p>
                  Join our interactive classes designed to enhance your
                  learning experience and achieve your educational goals.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Explore More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-f78acb">
                  <i className="flaticon-crash-course"></i>
                </div>
                <h3>
                  <Link href="/services/details">Crash Courses</Link>
                </h3>
                <p>
                  Enroll in our crash courses to accelerate your learning and
                  excel in your academics.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Explore More
                  <i className="flaticon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
