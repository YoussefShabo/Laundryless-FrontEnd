import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/imgs/Group 360.svg";
import Name from "../assets/imgs/Group 361.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Name} alt="Name" style={{ height: "40px" }} />{" "}
        <img src={Logo} alt="Logo" style={{ height: "40px" }} />{" "}
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/how-it-works">How It Works</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
