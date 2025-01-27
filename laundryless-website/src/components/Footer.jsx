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
            <h5 style={{ margin: "0px" }}>Proud members of:</h5>
            <img src={aaa} alt="" style={{ height: "80px", margin: "15px" }} />
            <img src={taa} alt="" style={{ height: "80px", margin: "15px" }} />
            <img src={naa} alt="" style={{ height: "80px", margin: "15px" }} />
          </center>
        </div>
        <div>
          <h5 className="round1">
            e-mail:
            <a href="mailto:info@laundrylessatx.com">
              {" "}
              info@laundrylessatx.com
            </a>
            <br /> tel: (512) 814-7675
            <br /> © 2025 LaundrylessATX Services. All rights reserved.
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
