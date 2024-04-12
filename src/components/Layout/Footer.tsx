"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-area overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contact Information</h3>

                <ul className="footer-contact-info">
                  <li>
                    <i className="flaticon-phone-call"></i>
                    <span>Mon to Fri : 10:00AM - 06:00PM</span>
                    <a href="tel:1235421457852">+919846173905</a>
                  </li>
                  <li>
                    <i className="flaticon-email"></i>
                    <span>Have a Question?</span>
                    <a href="mailto:vivek@softechinfra.com">vivek@softechinfra.com</a>
                  </li>
                  <li>
                    <i className="flaticon-social-media"></i>
                    <span>Social Media</span>
                    <ul className="social">
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/" target="_blank">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Quick Links</h3>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link href="/mock-tests">Mock Tests</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Instagram</h3>

                <ul className="footer-instagram-post">
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <Image
                        src="/images/instagram-image/insta-img1.jpg"
                        alt="image"
                        width={150}
                        height={122}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <Image
                        src="/images/instagram-image/insta-img2.jpg"
                        alt="image"
                        width={150}
                        height={122}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <Image
                        src="/images/instagram-image/insta-img3.jpg"
                        alt="image"
                        width={150}
                        height={122}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <Image
                        src="/images/instagram-image/insta-img4.jpg"
                        alt="image"
                        width={150}
                        height={122}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <Image
                        src="/images/instagram-image/insta-img5.jpg"
                        alt="image"
                        width={150}
                        height={122}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <Image
                        src="/images/instagram-image/insta-img6.jpg"
                        alt="image"
                        width={150}
                        height={122}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-md-6">
                <p>
                  &copy;{currentYear} Chelmsford Empowering Minds. All rights reserved{" "}
                  <a href="https://chelmsford.com/" target="_blank">
                    Chelmsford
                  </a>
                </p>
              </div>

              <div className="col-lg-6 col-sm-6 col-md-6">
                <ul>
                  <li>
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

