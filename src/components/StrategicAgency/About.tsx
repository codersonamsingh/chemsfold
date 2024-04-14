"use client";

import React from "react";
import Image from "next/image";

const MockTest: React.FC = () => {
  return (
    <>
      <div className="mock-test-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="mock-test-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Image
                  src="/images/faq.png"
                  alt="image"
                  width={830}
                  height={750}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="mock-test-content">
                <span className="sub-title">Mock Test</span>
                <h2>Assess Your Skills with Our Mock Tests</h2>
                <p>
                  Our mock tests are designed to assess and enhance your
                  skills in various subjects. Whether you're preparing for
                  exams or simply want to gauge your understanding, our mock
                  tests offer comprehensive evaluations.
                </p>

                <div className="mock-test-types">
                  <h3>Types of Mock Tests</h3>
                  <ul>
                    <li>
                      <span>
                        <i className="fas fa-check"></i> Initial Test
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i> After Course Test
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mock-test-durations">
                  <h3>Test Durations</h3>
                  <ul>
                    <li>
                      <span>
                        <i className="fas fa-check"></i> 30 Minutes
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i> 1 Hour
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i> 2 Hours
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fas fa-check"></i> 3 Hours
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mock-test-login">
                  <p>Log in to access the mock tests and track your progress.</p>
                  {/* You can add a login button or symbol here */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Shape Images */}
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.svg"
            alt="image"
            width={24}
            height={24}
          />
        </div>
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default MockTest;
