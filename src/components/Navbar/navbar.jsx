import React from "react";
import { Link } from "gatsby";
import { handleDropdown, handleMobileDropdown } from "common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link to="/" className="logo">
          <h6>Eric Steiner</h6>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={`/`} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/about`} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <Link to={`/showcase/showcase-dark`} className="dropdown-item">
                  Showcase Parallax
                </Link>
                <Link to={`/showcase4/showcase4-dark`} className="dropdown-item">
                  Showcase Carousel
                </Link>
                <Link to={`/showcase3/showcase3-dark`} className="dropdown-item">
                  Showcase Circle
                </Link>
                <Link to={`/works/works-dark`} className="dropdown-item">
                  Portfolio Masonry
                </Link>
                <Link to={`/works2/works2-dark`} className="dropdown-item">
                  Portfolio Filtering
                </Link>
                <Link to={`/works3/works3-dark`} className="dropdown-item">
                  Portfolio Gallery
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
