"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-100 bg-F4F7FC">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Latest Updates</span>
            <h2>Stay Updated with Our Latest News and Articles</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog-image/blog-image1.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        By:
                        <Link href="/blog">Sarah Taylor</Link>
                      </li>
                      <li>April 13, 2024</li>
                    </ul>
                  </div>
                  <h3>
                    <Link href="/blog/details">
                      Empower Your Mind: The Path to Personal Growth
                    </Link>
                  </h3>
                  <p>
                    Discover the latest strategies for enhancing personal growth
                    and unlocking your full potential.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog-image/blog-image2.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        By:
                        <Link href="/blog">James Anderson</Link>
                      </li>
                      <li>April 14, 2024</li>
                    </ul>
                  </div>
                  <h3>
                    <Link href="/blog/details">
                      Unleash Your Potential: The Power of Education
                    </Link>
                  </h3>
                  <p>
                    Explore how education can empower individuals and drive
                    positive change in society.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog-image/blog-image3.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        By:
                        <Link href="/blog">Steven Smith</Link>
                      </li>
                      <li>April 15, 2024</li>
                    </ul>
                  </div>
                  <h3>
                    <Link href="/blog/details">
                      Nurturing Young Minds: The Importance of Early Education
                    </Link>
                  </h3>
                  <p>
                    Learn about the crucial role of early education in shaping
                    the future of young minds.
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Shape Image */}
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
      </div>
    </>
  );
};

export default LatestNews;
