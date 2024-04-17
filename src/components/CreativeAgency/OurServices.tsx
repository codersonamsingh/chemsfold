import React from "react";
import Link from "next/link";

const MockTestSection: React.FC = () => {
  return (
    <>
      <div className="mock-test-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">CLASSES</span>
            <h2>Prepare with Classes</h2>
            <p>
              Sharpen your skills and assess your progress with our range of Classes tailored for students of Class 4, 5, and 6.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-mock-test-box">
                <h3>Class</h3>
                <ul>
                  <li>Class 4</li>
                  <li>Class 5</li>
                  <li>Class 6</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-mock-test-box">
                <h3>Type</h3>
                <ul>
                  <li>Initial Test</li>
                  <li>After Course</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-mock-test-box">
                <h3>Duration</h3>
                <ul>
                  <li>30 Minutes</li>
                  <li>1 Hour</li>
                  <li>2 Hours</li>
                  <li>3 Hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockTestSection;
