import React from "react";
const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div>
            <div className="item">
              <div className="logo">
                <h3>My Socials</h3>
              </div>
              <div className="social">
                <a href="https://x.com/vflyingcowboy" target='_blank' rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/vflyingcowboy" target='_blank' rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@vflyingcowboy" target="_blank" rel="noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2023 Eric Steiner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
