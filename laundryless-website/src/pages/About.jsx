import React from "react";
import "./About.css";
import about from "../assets/imgs/about.jpg";
import hanged from "../assets/imgs/ideogram15.png";
import foldedShirts from "../assets/imgs/ideogram16.png";

const About = () => {
  return (
    <div className="about">
      <div className="aboutUs">
        <div className="introSection">
          <center>
            <br />
            <br />
            <br />
            <h1 className="introTitle">ABOUT US</h1>
            <p className="paragraphAbout">
              Learn more about our journey, values, and commitment to
              excellence.
            </p>
          </center>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container1">
          <div className="container2">
            <div className="storySection">
              <div className="textSection">
                <h2>Our Story</h2>
                <p className="paragraph">
                  Welcome to Laundryless, a women-owned business proudly based
                  in the vibrant city of Austin, Texas. Our journey began with a
                  simple idea: to transform the mundane chore of laundry into a
                  convenient, reliable, and eco-friendly service that fits
                  seamlessly into your busy lifestyle. Over the years, we've
                  grown into a trusted partner for households and businesses
                  alike, offering personalized care for your garments with the
                  utmost dedication and professionalism.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="missionSection">
              {/* <img src={serviceImage} alt="Our Service" className="missionImg" /> */}
              <div className="textSection">
                <h2>Our Mission</h2>
                <p className="paragraph">
                  At Laundryless, our mission is to redefine convenience in
                  laundry services while championing sustainability. We aim to
                  provide our customers with fast, reliable, and eco-friendly
                  solutions, allowing you to focus on what truly matters. By
                  integrating cutting-edge technology with a personal touch, we
                  ensure that your laundry is handled with the care it deserves,
                  delivered right to your doorstep.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
          <img src={foldedShirts} alt="folded shirts" className="storyImg" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr className="aboutHr" />
        <br />
        <center>
          <h2>Our Values</h2>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="valuesSection">
          <div className="container1">
            <img src={hanged} alt="folded shirts" className="storyImg" />
            <div className="valuesContainer">
              <div className="valueBox">
                <h3>Quality</h3>
                <p className="paragraph">
                  We believe in delivering excellence in every aspect of our
                  service. From the moment we pick up your laundry to the moment
                  it's delivered back to you, we ensure the highest standards of
                  quality and care.
                </p>
              </div>
              <div className="valueBox">
                <h3>Sustainability</h3>
                <p className="paragraph">
                  Our commitment to the environment is unwavering. We use
                  energy-efficient cleaning processes and eco-friendly packaging
                  to minimize our carbon footprint, striving to make a positive
                  impact on the planet.
                </p>
              </div>
              <div className="valueBox">
                <h3>Community</h3>
                <p className="paragraph">
                  As a local business, we are deeply rooted in the Austin
                  community. We take pride in supporting local initiatives and
                  building strong relationships with our customers and partners.
                </p>
              </div>
              <div className="valueBox">
                <h3>Convenience</h3>
                <p className="paragraph">
                  Your time is valuable. Our services are designed to be as
                  convenient as possible, offering flexible scheduling, easy
                  online ordering, and timely deliveries to fit your busy life.
                </p>
              </div>
            </div>
          </div>
        </div>
        <center>
          <div className="contactSection">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr className="aboutHr" />
            <br />
            <h2>Contact Us</h2>
            <p className="paragraph">
              Have questions or need assistance? Our friendly team is here to
              help. Reach out to us at support@laundryless.com or call us at
              (614) 772-8263.
            </p>
          </div>
        </center>
      </div>
      <div className="foot" style={{ height: "10vh" }}></div>
    </div>
  );
};

export default About;
