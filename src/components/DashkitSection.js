import React from "react";
import Row from "react-bootstrap/Row";
import img from "../assets/dashkit.jpg";

function DashkitSection() {
  return (
    <div className="container pt-5 pb-5" id="">
      <Row className="text-justify align-items-center justify-content-between">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="text-justify ">
            <h2 className="h2">We have lots of experience</h2>
            <h2 className="text-primary">building Bootstrap themes.</h2>

            <p className="light-text h5 pt-3 pb-4">
              We've built well over a dozen Bootstrap themes and sold tens of
              thousands of copies.
            </p>

            <div className="d-flex">
              <div className="icon mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  className="bi bi-arrow-repeat"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                    fill="#335eea"
                  />
                  <path
                    fill="#335eea"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
              </div>
              <div className="ps-4 pt-2 pb-2 text-justify">
                <h1 className="h4">Built for developers</h1>
                <p className="mt-1 mb-1 light-text cards-p-text">
                  Landkit is built to make your life easier. Variables, build
                  tooling, documentation, and reusable components.
                </p>
              </div>
            </div>

            <div className="d-flex">
              <div className="icon mt-2">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              className="bi bi-code-slash"
              viewBox="0 0 16 16"
            >
              <path
                d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
                fill="#335eea"
              />
            </svg>
              </div>
              <div className="ps-4 pt-2 pb-2 text-justify">
                <h1 className="h4">Built for developers</h1>
                <p className="mt-1 mb-1 light-text cards-p-text">
                  Landkit is built to make your life easier. Variables, build
                  tooling, documentation, and reusable components.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={img} alt="img" className="img-fluid dashkitImg" />
        </div>
      </Row>
    </div>
  );
}

export default DashkitSection;
