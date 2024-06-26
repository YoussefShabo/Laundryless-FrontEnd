import React from "react";
import "./About.css";
import teamImage from "../assets/imgs/ideogram15(2).png";
// import serviceImage from "../assets/imgs/service.jpg";

const About = () => {
  return (
    <div className="aboutUs">
      <img src={teamImage} alt="Hero" className="heroSectionImg" />
      <div className="introSection">
        <center>
          <br />
          <br />
          <br />
          <h1 className="introTitle">ABOUT US</h1>
          <p className="introSubTitle">
            Learn more about our journey, values, and commitment to excellence.
          </p>
        </center>
      </div>
      <div className="storySection">
        <div className="textSection">
          <h2>Our Story</h2>
          <p>
            Welcome to Laundryless, a women-owned business proudly based in the
            vibrant city of Austin, Texas. Our journey began with a simple idea:
            to transform the mundane chore of laundry into a convenient,
            reliable, and eco-friendly service that fits seamlessly into your
            busy lifestyle. Over the years, we've grown into a trusted partner
            for households and businesses alike, offering personalized care for
            your garments with the utmost dedication and professionalism.
          </p>
        </div>
        {/* <img src={teamImage} alt="Our Team" className="storyImg" /> */}
      </div>
      <div className="missionSection">
        {/* <img src={serviceImage} alt="Our Service" className="missionImg" /> */}
        <div className="textSection">
          <h2>Our Mission</h2>
          <p>
            At Laundryless, our mission is to redefine convenience in laundry
            services while championing sustainability. We aim to provide our
            customers with fast, reliable, and eco-friendly solutions, allowing
            you to focus on what truly matters. By integrating cutting-edge
            technology with a personal touch, we ensure that your laundry is
            handled with the care it deserves, delivered right to your doorstep.
          </p>
        </div>
      </div>
      <div className="valuesSection">
        <center>
          <h2>Our Values</h2>
        </center>
        <div className="valuesContainer">
          <div className="valueBox">
            <h3>Quality</h3>
            <p>
              We believe in delivering excellence in every aspect of our
              service. From the moment we pick up your laundry to the moment
              it’s delivered back to you, we ensure the highest standards of
              quality and care.
            </p>
          </div>
          <div className="valueBox">
            <h3>Sustainability</h3>
            <p>
              Our commitment to the environment is unwavering. We use
              energy-efficient cleaning processes and eco-friendly packaging to
              minimize our carbon footprint, striving to make a positive impact
              on the planet.
            </p>
          </div>
          <div className="valueBox">
            <h3>Community</h3>
            <p>
              As a local business, we are deeply rooted in the Austin community.
              We take pride in supporting local initiatives and building strong
              relationships with our customers and partners.
            </p>
          </div>
          <div className="valueBox">
            <h3>Convenience</h3>
            <p>
              Your time is valuable. Our services are designed to be as
              convenient as possible, offering flexible scheduling, easy online
              ordering, and timely deliveries to fit your busy life.
            </p>
          </div>
        </div>
      </div>
      <div className="contactSection">
        <center>
          <h2>Contact Us</h2>
          <p>
            Have questions or need assistance? Our friendly team is here to
            help. Reach out to us at support@laundryless.com or call us at (512)
            555-1234.
          </p>
        </center>
      </div>
      <div className="foot" style={{ height: "50vh" }}></div>
    </div>
  );
};

export default About;
