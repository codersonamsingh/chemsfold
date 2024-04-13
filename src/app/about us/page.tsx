import React from "react";
import Navbar from "../../components/Layout/Navbar";
import BannerSlider from "../../components/SEOAgency/BannerSlider";
import PageHeader from "../../components/Common/PageHeader";
import AboutArea from "../../components/About/AboutArea";
import FunFacts from "../../components/Common/FunFacts";
import WhyChooseUs from "../../components/About/WhyChooseUs";
import Solution from "../../components/Common/Solution";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="About Us"
        breadcrumbTextOne="Home"
        breadcrumbUrl="/"
        breadcrumbTextTwo="About Us"
      />
       <BannerSlider />

      <AboutArea />

      <FunFacts />

      <WhyChooseUs />

      <Solution />

      <Footer />
    </>
  );
}
