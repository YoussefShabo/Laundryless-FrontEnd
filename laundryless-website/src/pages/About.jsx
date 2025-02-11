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
import example1 from "../assets/imgs/The Speedy Bubble.jpeg";
import example2 from "../assets/imgs/neighborhoodcleaners_img1.jpg";
import example3 from "../assets/imgs/neighborhoodcleaners_img2.jpg";
import example4 from "../assets/imgs/Washed Again 1.jpg";

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
                  Welcome to Laundryless, a trusted laundry service designed to
                  enhance convenience for both property managers and residents.
                  Based in Austin, Texas, our journey began with a simple goal:
                  to provide a seamless, reliable, and efficient laundry
                  solution that adds value to residential communities. Over the
                  years, we have become a preferred partner for multifamily
                  properties, offering professional garment care with a
                  commitment to quality and service excellence.
                </p>
              </div>
            </div>

            <br />
            <div className="missionSection">
              {/* <img src={serviceImage} alt="Our Service" className="missionImg" /> */}
              <div className="textSection">
                <h2>Our Mission</h2>
                <p className="C1paragraph">
                  At Laundryless, our mission is to simplify laundry management
                  for property managers while delivering unmatched convenience
                  to residents. We provide fast, reliable, and hassle-free
                  services that integrate seamlessly with your property's
                  offerings. By combining advanced technology with personalized
                  care, we ensure that every pickup and delivery enhances the
                  tenant experience—helping you attract and retain satisfied
                  residents with a premium amenity they'll love.
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
                  We are committed to delivering excellence in every aspect of
                  our service. From pickup to delivery, we maintain the highest
                  standards of care, ensuring residents receive
                  professional-grade laundry service they can trust.
                </p>
              </div>
              <div className="valueBox">
                <h3>Reliability</h3>
                <p className="C1paragraph">
                  We know that property managers need dependable service to keep
                  operations running smoothly. Our team ensures consistent,
                  on-time pickups and deliveries, making laundry an effortless
                  amenity for your residents.
                </p>
              </div>
              <div className="valueBox">
                <h3>Community</h3>
                <p className="C1paragraph">
                  As a local business, we take pride in building strong
                  partnerships with property managers and residential
                  communities across Austin. Our goal is to enhance tenant
                  satisfaction by providing a value-added service that residents
                  appreciate.
                </p>
              </div>
              <div className="valueBox">
                <h3>Convenience</h3>
                <p className="C1paragraph">
                  We simplify laundry management for property managers with
                  flexible scheduling, seamless integration into your property's
                  services, and an easy-to-use online platform—so you can offer
                  a hassle-free amenity without added complexity.
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

        <center className="centerAlign">
          <img src={example1} alt="" className="width501" />
          <img src={example2} alt="" className="width501" />
          <img src={example3} alt="" className="width501" />
          <img src={example4} alt="" className="width501" />
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
              Reach out to us at info@laundrylessatx.com <br />
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
