import "./Footer.css";
import logo from "../assets/imgs/logo.png";

// Test for Rony
const Footer = () => {
  return (
    <>
      <hr style={{ width: "90vw" }} />
      <div className="footer">
        <img src={logo} alt="" style={{ height: "120px" }} />
        <p>© 2024 LaundrylessATX Services. All rights reserved.</p>
        <div>
          <a href="mailto:laundrylessinfo@gmail.com">
            laundrylessinfo@gmail.com
          </a>
          <p className="round1">(512) 814-7675</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
