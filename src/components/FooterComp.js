import React from "react";
import brandImg from "../assets/brand.svg";

function FooterComp() {
  return (
    <footer>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 pt-2 pb-2">
            <img src={brandImg} className="footer-brand img-fluid mb-2" />
            <p className="mb-2">A better way to build.</p>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="https://twitter.com/No13mi23" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/nomi.malik.3998"
                  className="facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/n_o_m_i_3/"
                  className="instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="www.linkedin.com/in/malik-noman343"
                  className="linkedin"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 pt-2 pb-2">
            <h6 className="fw-bold text-uppercase">products</h6>
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="#">Page Builder</a>
              </li>
              <li className="mb-3">
                <a href="#">UI Kit</a>
              </li>
              <li className="mb-3">
                <a href="#">Styleguide</a>
              </li>
              <li className="mb-3">
                <a href="#">Documentation</a>
              </li>
              <li className="mb-3">
                <a href="#">Changelog</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 pt-2 pb-2">
            <h6 className="fw-bold text-uppercase">Services</h6>
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="#">Page Builder</a>
              </li>
              <li className="mb-3">
                <a href="#">Styleguide</a>
              </li>
              <li className="mb-3">
                <a href="#">Documentation</a>
              </li>
              <li className="mb-3">
                <a href="#">Changelog</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 offset-md-4 offset-lg-0 pt-2 pb-2">
            <h6 className="fw-bold text-uppercase">Connect</h6>
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="#">Page Builder</a>
              </li>
              <li className="mb-3">
                <a href="#">Styleguide</a>
              </li>
              <li className="mb-3">
                <a href="#">Documentation</a>
              </li>
              <li className="mb-3">
                <a href="#">Changelog</a>
              </li>
              <li className="mb-3">
                <a href="#">Styleguide</a>
              </li>
              <li className="mb-3">
                <a href="#">Documentation</a>
              </li>
              <li className="mb-3">
                <a href="#">Changelog</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 pt-2 pb-2">
          <h6 className="fw-bold text-uppercase">Legal</h6>
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="#">Page Builder</a>
              </li>
              <li className="mb-3">
                <a href="#">Styleguide</a>
              </li>
              <li className="mb-3">
                <a href="#">Documentation</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComp;
