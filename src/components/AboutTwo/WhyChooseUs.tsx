import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="choose-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-content">
                <div className="section-title text-left">
                  <span className="sub-title">Why Choose Us</span>
                  <h2>Embark on a Journey of Knowledge with Us</h2>

                  <p>
                    Welcome to Chelmsford Empowering Minds, where empowerment flourishes, and educational aspirations take center stage. Our cutting-edge e-learning platform is your oasis for transformative online education. We bridge the gap between traditional classrooms and modern digital learning experiences.
                  </p>

                  <p>
                    Whether you're seeking a crash course or a full course for classes 4, 5, and 6, or need to assess your progress with our mock tests, we've got you covered. Our platform offers initial tests before courses and post-course assessments, with durations ranging from 30 minutes to 3 hours.
                  </p>

                  <p>
                    Join us in this journey of knowledge, innovation, and personal growth. Explore more about Chelmsford Empowering Minds and how it can benefit you or someone you know. Don't hesitate to contact us to embark on your educational journey today.
                  </p>
                </div>

                <div className="choose-btn">
                  <Link href="/about" className="default-btn">
                    Explore More <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-image">
                <Image
                  src="/images/machine-learning/about3.png"
                  alt="image"
                  width={677}
                  height={520}
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
