import React from "react";
import "./Home.css";
import heroSectionImg from "../assets/imgs/ideogram9.png";
import denimshirts from "../assets/imgs/ideogram1.png";
import threeColumnTshirts from "../assets/imgs/ideogram11.png";

const Home = () => {
  return (
    <>
      <div className="heroSection">
        <img src={heroSectionImg} alt="Hero" className="heroSectionImg" />
        <div className="heroText">
          <br />
          <br />
          <h1 className="title">The Future of Laundry Is Here</h1>
          <br />
          <br />
          <p className="paragraph">
            Taking Service Delivery to the Next Level with Wash and Fold,
            Laundered Shirts, Bedding, and Clothing Alterations—Available 24/7
            Right at Your Doorstep!
          </p>
          <br />
          <br />
          <br />
          <br />
          <a href="">
            <button className="Btn">Create an Account</button>
          </a>
        </div>
      </div>
      <div className="visoionSection">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <p>VISION</p>
        <h1 className="titleText">
          Redefining Laundry,
          <br />
          Delivering Freshness!
        </h1>
        <div className="container">
          <p className="containerTxt">
            At Laundryless, our vision is to redefine convenience and quality in
            laundry services. We aspire to transform everyday chores into a
            seamless experience, providing our customers with fast, reliable,
            and eco-friendly laundry solutions. By delivering personalized care
            for your garments right to your doorstep, we aim to save you time
            and hassle, so you can focus on what matters most. Trust us to keep
            your denim crisp and your linens fresh, empowering you to look and
            feel your best every day.
          </p>
          <img src={denimshirts} alt="" className="halfVWphoto" />
        </div>
      </div>
      <div className="serviceSection">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <p>OUR SERVICE</p>
        <h1 className="titleText">
          Completely Self-Sufficient, <br />
          Absolutely Eco-Friendly!
        </h1>
        <div className="container">
          <div className="textSection">
            <p>OPTIMIZED FOR EFFICIENCY</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>24 - 48 hr</h2>
              <h4>Standard service</h4>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>same-day delivery</h2>
              <h4>Expediated service</h4>
            </div>
            <p className="containerTxt">
              Welcome to a new era of laundry service, where convenience meets
              sustainability. At Denim & Linen, we understand that time is
              precious. That's why we offer standard delivery within 24-48 hours
              and an expedited service for those times when you just can't
              wait—same day delivery is at your fingertips. Rooted in our
              commitment to being 'Completely Self-Sufficient, Absolutely
              Eco-Friendly,' every aspect of our service—from our
              energy-efficient cleaning processes to our eco-friendly
              packaging—is designed with the well-being of our planet in mind.
              Experience the future of laundry with Denim & Linen, where every
              delivery is a step towards a greener world.
            </p>
          </div>
          <img src={threeColumnTshirts} alt="" className="halfVWphoto" />
        </div>
      </div>
    </>
  );
};

export default Home;
