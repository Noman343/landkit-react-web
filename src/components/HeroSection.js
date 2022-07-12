import React from "react";
import heroImg from "../assets/hero.png";

function HeroSection() {
  return (
      <div className="container" id="hero-section">
        <div className="row hero-section-row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="text-justify hero-text-container">
              <h1 className="h1">
                Welcome to
                <span className="text-primary"> Landkit</span>
                .
                <br />
                Develop anything.
              </h1>
              <p className="h4 mt-4 mb-4 light-text">
                Build a beautiful, modern website with flexible Bootstrap
                components built from scratch.
              </p>
              <div className="hero-btn mt-5">
                <a href="#" className="btn btn-lg btn-primary me-2 lift">
                  Get Started
                </a>
                <a href="#" className="btn btn-lg btn-outline-primary lift">
                  Learn More
                </a>
                
              </div>
            
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12" id="hero-img">
            <img src={heroImg} alt="img" className="w-100" />
          </div>
        </div>
      </div>
  );
}

export default HeroSection;


