import "./Footer.css";
import logo from "../assets/imgs/logo.png";
import aaa from "../assets/imgs/AAA.png";
import taa from "../assets/imgs/TAA.png";
import naa from "../assets/imgs/NAA.png";

// Test for Rony
const Footer = () => {
  return (
    <>
      <hr style={{ width: "90vw" }} />
      <div className="footer">
        <img src={logo} alt="" style={{ height: "120px" }} />

        <div className="AAA">
          <center>
            <p>Proud members of:</p>
            <img
              src={aaa}
              alt=""
              style={{ height: "60px", marginRight: "70px" }}
            />
            <img
              src={taa}
              alt=""
              style={{ height: "60px", marginRight: "70px" }}
            />
            <img
              src={naa}
              alt=""
              style={{ height: "60px", marginRight: "70px" }}
            />
          </center>
        </div>
        <div>
          <a href="mailto:info@laundrylessatx.com">info@laundrylessatx.com</a>
          <p className="round1">(512) 814-7675</p>
          <p>© 2025 LaundrylessATX Services. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
