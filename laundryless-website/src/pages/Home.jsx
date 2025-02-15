import React from "react";
import "./Home.css";
import heroSectionImg from "../assets/imgs/ideogram9.png";
import denimshirts from "../assets/imgs/ideogram1.png";
import threeColumnTshirts from "../assets/imgs/ideogram11.png";
import customerLockers1 from "../assets/imgs/Clientlockers.png";
import customerLockers2 from "../assets/imgs/Clientlockers2.png";
import ParallaxCarousel from "../components/carousel/carousel";
const Home = () => {
  return (
    <div className="home">
      <div className="">
        <br />
        <br />
        <br />
        <br />
        <ParallaxCarousel />
        <div className="heroText">
          <br />
          <br />
          <p className="heroTitle">The Future of Laundry Is Here</p>
          <br />
          <br />
          <p className="paragraph">
            Taking service delivery to the next level with wash & fold,
            laundered shirts, dry cleaning, bedding, and clothing
            alterations—available 24/7, right at your doorstep!
          </p>
          <br />
          <br />
          <br />
          <br />

          <button className="Btn">
            <a
              style={{ textDecoration: "none", color: "#FAF9F4" }}
              href="mailto:info@laundrylessatx.com"
            >
              Contact Us for more info
            </a>
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div
        className="visionSection"
        style={{ backgroundColor: "inherit", color: "#363E44" }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <p className="vision">OUR SERVICE</p>
        <h1 className="titleText">
          Completely Self-Sufficient, <br />
          Absolutely Eco-Friendly!
        </h1>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="serviceTextSection">
            <p>OPTIMIZED FOR EFFICIENCY</p>
            <div className="serviceData">
              <h2>24 - 48 hr</h2>
              <h4>Standard service</h4>
            </div>
            <hr style={{ width: "80%" }} />
            <div className="serviceData">
              <h2>same-day delivery</h2>
              <h4>Expedited service</h4>
            </div>
            <p className="serviceContainerTxt">
              Welcome to a new era of laundry service—where convenience meets
              efficiency for both you and your residents. At Laundryless, we
              understand the importance of providing top-tier amenities that
              enhance resident's satisfaction. That's why we offer seamless
              24-48 hour standard delivery and expedited same-day service when
              needed. From advanced cleaning technology to streamlined pickup
              and delivery, our service is designed for reliability and ease.
            </p>
          </div>
          <img src={customerLockers1} alt="" className="halfVWphoto" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr className="aboutHr" />
      <br />

      <div className="visionSection">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <p className="vision">VISION</p>
        <h1 className="titleText">
          Redefining Laundry,
          <br />
          Delivering Freshness!
        </h1>
        <br />
        <br />
        <br />
        <div className="container">
          <p className="containerTxt">
            At Laundryless, we partner with property managers to elevate
            residents convenience with seamless, on-demand laundry solutions.
            Our fast, reliable service ensures residents have access to
            high-quality garment care without leaving their building. With
            lockers pickup and delivery, we help you enhance your property's
            appeal, offering an added amenity that saves residents time and
            simplifies their daily routine. Trust Laundryless to provide a
            hassle-free laundry experience that keeps residents satisfied and
            your property competitive.
          </p>
          <img src={customerLockers2} alt="" className="halfVWphoto" />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
