import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/Laundryless logo.png";
import aaa from "../assets/imgs/AAA.png";
import taa from "../assets/imgs/TAA.png";
import naa from "../assets/imgs/NAA.png";
import NetVendor from "../assets/imgs/NetVendor-Compliance-Product-Logo.svg";
import LinkedIn from "../assets/icons/linkedin-brands-solid.svg";
import Insta from "../assets/icons/square-instagram-brands-solid.svg";
import YouTube from "../assets/icons/square-youtube-brands-solid.svg";
import X from "../assets/icons/square-x-twitter-brands-solid.svg";
import Phone from "../assets/icons/phone-solid.svg";
import Mail from "../assets/icons/envelope-solid.svg";
import Spin from "../assets/imgs/Washateria-Logo.png";
import Fitness from "../assets/imgs/AnyTimeFitness-logo.svg";
import Qflix from "../assets/imgs/QFlix.webp";
const Footer = () => {
  return (
    <>
      <hr style={{ width: "64vw" }} />
      <div className="footer">
        <center>
          <img src={logo} alt="" style={{ height: "150px" }} />
          <div className="columns">
            <div className="column">
              <p style={{ fontWeight: "bold" }}>About</p>

              <p>
                <Link to="/careers">Careers</Link>
              </p>
              <p>
                <Link to="/about">About Us</Link>
              </p>
              <p>
                <Link to="/how-it-works">How It Works</Link>
              </p>
              <p>Contact Us</p>
              <div className="contact">
                <img
                  src={Phone}
                  alt=""
                  style={{ height: "15px", marginRight: "8px" }}
                />{" "}
                <p>(512) 814-7675</p>
              </div>
              <div className="contact">
                <img
                  src={Mail}
                  alt=""
                  style={{ height: "15px", marginRight: "8px" }}
                />{" "}
                <a href="mailto:info@laundrylessatx.com">
                  {" "}
                  info@laundrylessatx.com
                </a>
              </div>

              <img
                src={NetVendor}
                alt=""
                style={{ width: "200px", marginTop: "24px" }}
              />
            </div>
            <div className="column">
              <center>
                <p style={{ fontWeight: "bold" }}>Our Partners</p>
                <br />
                <br />
                <a href="https://spincycleatx.com/">
                  SpinCycle Washateria
                </a>{" "}
                <br />
                <br />
                <a href="https://qflixnow.com/">QFlix</a>
                <br />
                <br />
                <a href="https://clean.cloud/">Clean Cloud</a>
                <br />
                <br />
                <a href="https://www.breezyll.com/">Breezy</a>
                <br />
                <br />
                <a href="https://clearent.com/">Clearent</a>
              </center>
            </div>
            <div className="columnRight">
              <p style={{ fontWeight: "bold" }}>Proud Members of</p>
              <img
                src={aaa}
                alt=""
                style={{ width: "80px", marginTop: "48px" }}
              />
              <img
                src={taa}
                alt=""
                style={{ width: "80px", marginTop: "48px" }}
              />
              <img
                src={naa}
                alt=""
                style={{ width: "80px", marginTop: "48px" }}
              />
            </div>
          </div>
        </center>
        <div className="icons" style={{ marginTop: "160px" }}>
          <img
            src={LinkedIn}
            alt=""
            style={{ height: "20px", paddingRight: "20px" }}
          />
          <img
            src={Insta}
            alt=""
            style={{ height: "20px", paddingRight: "20px" }}
          />
          <img
            src={YouTube}
            alt=""
            style={{ height: "20px", paddingRight: "20px" }}
          />
          <img
            src={X}
            alt=""
            style={{ height: "20px", paddingRight: "20px" }}
          />
        </div>
        <hr style={{ width: "64vw" }} />
        <h6>© Three Schmucks LLC 2024-2025. All rights reserved.</h6>
      </div>
    </>
  );
};

export default Footer;

{
  /* <h5 className="round1">
        tel: (512) 814-7675
        <br />
        e-mail:
        <a href="mailto:info@laundrylessatx.com"> info@laundrylessatx.com</a>
        <br /> © 2025 LaundrylessATX Services. All rights reserved.
      </h5>
      <center className="AAA">
        <h5 style={{ margin: "0px" }}>Proud members of:</h5>
        <img src={aaa} alt="" style={{ width: "130px", margin: "15px" }} />
        <img src={taa} alt="" style={{ width: "130px", margin: "15px" }} />
        <img src={naa} alt="" style={{ width: "130px", margin: "15px" }} />
      </center>

 */
}
