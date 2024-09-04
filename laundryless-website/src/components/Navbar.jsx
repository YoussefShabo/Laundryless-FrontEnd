import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/imgs/logoWhite.png";
import Name from "../assets/imgs/nameWhite.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`nav ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        <img src={Name} alt="Name" style={{ height: "40px" }} />{" "}
        <img src={Logo} alt="Logo" style={{ height: "40px" }} />{" "}
      </div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/how-it-works" onClick={closeMenu}>
              How It Works
            </Link>
          </li>
          <li>
            <Link to="/faq" onClick={closeMenu}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
