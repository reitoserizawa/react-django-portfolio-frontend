import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/header-logo.png";
import pdf from "../../pdf/Reito.Resume.SoftwareEngineer111022 (4).pdf";

function NavBar() {
  const [visibility, setVisibility] = useState(false);

  const navToggle = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <header className="primary-header flex">
        <div>
          <img src={logo} alt="portfolio logo" className="logo" />
        </div>

        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={visibility}
          onClick={navToggle}
        >
          {visibility ? (
            <i className="fa-solid fa-xmark fa-2x"></i>
          ) : (
            <i className="fa-solid fa-bars fa-2x"></i>
          )}
          <span className="sr-only">Menu</span>
        </button>

        <nav>
          <ul
            id="primary-navigation"
            className="primary-navigation flex"
            data-visible={visibility}
            onClick={navToggle}
          >
            <li className="active">
              <Link to="/">
                <span aria-hidden="true">00</span>Home
              </Link>
            </li>
            <li className="active">
              <Link to="/about">
                <span aria-hidden="true">01</span>About
              </Link>
            </li>
            <li className="active">
              <Link to="/work">
                <span aria-hidden="true">02</span>Work
              </Link>
            </li>
            <li className="active">
              <Link to="/blog">
                <span aria-hidden="true">03</span>Blog
              </Link>
            </li>
            <li className="active">
              <Link to="/contact">
                <span aria-hidden="true">04</span>Contact
              </Link>
            </li>
            <li className="active">
              <a href={pdf} target="_blank" rel="noreferrer">
                <span aria-hidden="true">05</span>Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
