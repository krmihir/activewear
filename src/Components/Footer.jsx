import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="container-fluid p-4 mt-3"
        style={{ backgroundColor: "#A2D2FF" }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Active Sportswear</h5>
            <p>
              Your one-stop shop for all your activewear needs. From sports gear
              to accessories, we’ve got you covered!
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-dark">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <p>Email: support@activesportswear.com</p>
              </li>
              <li>
                <p>Phone: +123 456 7890</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Active Sportswear
      </div>
    </footer>
  );
};

export default Footer;
