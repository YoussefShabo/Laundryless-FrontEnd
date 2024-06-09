import React from "react";
import "./Home.css";
import heroSectionImg from "../assets/imgs/ideogram9.png";

const Home = () => {
  return (
    <div className="heroSection">
      <img src={heroSectionImg} alt="Hero" className="heroSectionImg" />
      <div className="heroText">
        <h1 className="title">The Future of Laundry Is Here</h1>
        <p className="paragraph">
          Taking Service Delivery to the Next Level with Wash and Fold,
          Laundered Shirts, Bedding, and Clothing Alterations—Available 24/7
          Right at Your Doorstep!
        </p>
        <a href="/signup">
          <button className="Btn">Create an Account</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
