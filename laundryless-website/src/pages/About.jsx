import React from "react";
import "./About.css";
import about from "../assets/imgs/about.jpg";
import hanged from "../assets/imgs/ideogram15.png";
import foldedShirts from "../assets/imgs/ideogram16.png";
import locker1 from "../assets/imgs/lis.webp";
import locker2 from "../assets/imgs/y1.webp";
import locker3 from "../assets/imgs/y2.webp";
import lockersWall from "../assets/imgs/4lockers.png";
import lockersDims from "../assets/imgs/lockersdims.webp";
import decalLocker1 from "../assets/imgs/lockers1.webp";
import decalLocker2 from "../assets/imgs/lockers2.webp";
import decalLocker3 from "../assets/imgs/lockers3.webp";
import decalLocker4 from "../assets/imgs/lockers4.webp";

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
        <div className="container1">
          <div className="container2">
            <div className="storySection">
              <div className="textSection">
                <h2>Our Story</h2>
                <p className="C1paragraph">
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
            <div className="missionSection">
              {/* <img src={serviceImage} alt="Our Service" className="missionImg" /> */}
              <div className="textSection">
                <h2>Our Mission</h2>
                <p className="C1paragraph">
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
          </div>
          <img src={foldedShirts} alt="folded shirts" className="storyImg" />
        </div>
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
        <div className="valuesSection">
          <div className="container1">
            <img src={hanged} alt="folded shirts" className="storyImg" />
            <div className="valuesContainer">
              <div className="valueBox">
                <h3>Quality</h3>
                <p className="C1paragraph">
                  We believe in delivering excellence in every aspect of our
                  service. From the moment we pick up your laundry to the moment
                  it's delivered back to you, we ensure the highest standards of
                  quality and care.
                </p>
              </div>
              <div className="valueBox">
                <h3>Sustainability</h3>
                <p className="C1paragraph">
                  Our commitment to the environment is unwavering. We use
                  energy-efficient cleaning processes and eco-friendly packaging
                  to minimize our carbon footprint, striving to make a positive
                  impact on the planet.
                </p>
              </div>
              <div className="valueBox">
                <h3>Community</h3>
                <p className="C1paragraph">
                  As a local business, we are deeply rooted in the Austin
                  community. We take pride in supporting local initiatives and
                  building strong relationships with our customers and partners.
                </p>
              </div>
              <div className="valueBox">
                <h3>Convenience</h3>
                <p className="C1paragraph">
                  Your time is valuable. Our services are designed to be as
                  convenient as possible, offering flexible scheduling, easy
                  online ordering, and timely deliveries to fit your busy life.
                </p>
              </div>
            </div>
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
        <center>
          <div className="container1">
            <div className="lockersContainer">
              <div className="lockerBox">
                <h2>Our Lockers</h2>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="C1paragraph">
                  Our robust lockers and locks are meticulously designed to
                  efficiently handle a diverse array of dry cleaning and laundry
                  orders. Constructed with longevity in mind, they boast an
                  impressive lifespan of over 15 years, ensuring reliable
                  performance and durability for extensive use in various
                  settings.
                </p>
              </div>
              <img
                src={locker1}
                alt="Multi-Purpose Laundry Locker"
                className="feats"
              />
              <div className="lockers">
                <div className="lockerNtext">
                  <img
                    src={locker2}
                    alt="Wash and Fold Locker (3 Doors)"
                    className="lockerImg"
                  />
                  <h3>Wash and Fold Locker (3 Doors)</h3>
                  <p className="width500">
                    The wash and fold locker is designed to suit wash and fold
                    laundry orders specifically.
                  </p>
                </div>

                <div className="lockerNtext">
                  <img
                    src={locker3}
                    alt="Long Garment Locker (2 Doors)"
                    className="lockerImg"
                  />
                  <h3>Long Garment Locker (2 Doors)</h3>
                  <p className="width500">
                    The long garment locker is suitable for longer garments like
                    evening gowns and long winter coats.
                  </p>
                </div>
              </div>
              <div className="bigLockers">
                <img src={lockersWall} alt="" className="bigLockerImg" />
                <img src={lockersDims} alt="" className="bigLockerImg" />
              </div>
            </div>
          </div>
          <br />

          <h2>LOCKER DECALS</h2>

          <p className="width500">
            Locker decals can be customised to suit your buildings aesthetics.
          </p>
        </center>
        <center>
          <img src={decalLocker1} alt="" className="width500" />
          <img src={decalLocker2} alt="" className="width500" />
          <img src={decalLocker3} alt="" className="width500" />
          <img src={decalLocker4} alt="" className="width500" />
        </center>
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

            <br />
            <h2>Contact Us</h2>
            <p className="C1paragraph">
              Have questions or need assistance? Our friendly team is here to
              help. <br />
              Reach out to us at laundrylessinfo@gmail.com <br />
              or call us at (512) 814-7675.
            </p>
          </div>
        </center>
      </div>

      <div className="foot" style={{ height: "10vh" }}></div>
    </div>
  );
};

export default About;
