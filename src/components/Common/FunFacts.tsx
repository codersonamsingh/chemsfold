"use client";

import React from "react";

const FunFacts: React.FC = () => {
  return (
    <>
      <div className="fun-facts-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-fun-facts">
                <h3>
                  50<span className="sign-icon">+</span>
                </h3>
                <p>Qualified Teachers</p>
                <div className="back-text">T</div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-fun-facts">
                <h3>
                  95
                  <span className="sign-icon">%</span>
                </h3>
                <p>Student Satisfaction</p>
                <div className="back-text">S</div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-fun-facts">
                <h3>20+</h3>
                <p>Years of Educational Experience</p>
                <div className="back-text">Y</div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-fun-facts">
                <h3>
                  100
                  <span className="sign-icon">%</span>
                </h3>
                <p>Success Rate</p>
                <div className="back-text">S</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
