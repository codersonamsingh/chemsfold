"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const ChelmsfordSolution: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://youtu.be/Si6YbxWh0bE?si=2cdwYmqOQ-JR_0y0"]}
      />

      <div
        className="solution-area ptb-100 extra-pb"
        style={{
          backgroundImage: `url(/images/solution-bg.jpg)`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="solution-content">
                <span className="sub-title">Watch Our Video</span>
                <h2>Embark on a Journey of Knowledge</h2>
                <p>
                  At Chelmsford, we believe in empowering minds and enriching
                  lives through education. Our platform offers a variety of
                  courses and mock tests to help you achieve your educational
                  aspirations.
                </p>

                <Link href="/contact" className="default-btn">
                  Contact Us <span></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="solution-video">
                <div
                  onClick={() => setToggler(!toggler)}
                  className="video-btn popup-youtube"
                >
                  <i className="flaticon-play-button"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChelmsfordSolution;
