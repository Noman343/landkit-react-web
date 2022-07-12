import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import img from "../assets/photo-26.jpg";
import img2 from "../assets/photo-1.jpg";

export default function App() {
  return (
    <div className="container pt-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-8 col-sm-12">
        <div className="text-center">
        <h1 className="display-6">Our customers are our biggest fans.</h1>
        
        <p className="light-text h5 pt-3 pb-4">
          We don't like to brag, but we don't mind letting our customers do it
          for us. Here are a few nice things folks have said about our themes
          over the years.
        </p>
      </div>
        </div>
      </div>
   
      <Carousel>
        <Carousel.Item interval={4000}>
          <div
            className="card card-row shadow-light-lg"
            id="carousel-section"
            style={{ backgroundColor: "#AFEEEE" }}
          >
            <div className="row">
              <img
                src={img}
                id="carousel-img"
                alt="card-img"
                className="col-12 col-md-6 bg-cover card-img-start"
                style={{
                  borderRadius: "5px 5px 200px 5px / 5px 100px 600px 5px ",
                }}
              />
              <div className="col-12 col-md-6">
                <div className="card-body" style={{ padding: "4rem 2.5rem" }}>
                  <h4
                    className="card-title text-center"
                    style={{ color: "#3F5D87" }}
                  >
                    Instagram
                  </h4>
                  <blockquote className="blockquote mb-0 text-center">
                    <p className="mb-5 mb-md-7">
                      “Working at Landkit has been a dream. The team is amazing,
                      and I feel like I'm part of a family. I'll be here for a
                      great many years.”
                    </p>

                    <footer className="blockquote-footer">
                      <span className="h6 text-uppercase">William Callan</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
          <div
            className="card card-row shadow-light-lg"
            id="carousel-section"
            style={{ backgroundColor: "#AFEEEE" }}
          >
            <div className="row">
              <img
                src={img2}
                id="carousel-img"
                alt="card-img"
                className="col-12 col-md-6 bg-cover card-img-start"
                style={{
                  borderRadius: "5px 5px 200px 5px / 5px 100px 600px 5px ",
                }}
              />
              <div className="col-12 col-md-6">
                <div className="card-body" style={{ padding: "4rem 2.5rem" }}>
                  <h4
                    className="card-title text-center"
                    style={{ color: "#FF5A5F" }}
                  >
                    Airbnb
                  </h4>
                  <blockquote className="blockquote mb-0 text-center">
                    <p className="mb-5 mb-md-7">
                      “Landkit is hands down the most useful front end Bootstrap
                      theme I've ever used. I can't wait to use it again for my
                      next project.”
                    </p>

                    <footer className="blockquote-footer">
                      <span className="h6 text-uppercase">William Callan</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
