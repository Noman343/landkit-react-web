import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import img from "../assets/download-card.jpg";

function KitchenSinkExample() {
  return (
    <div className="container pt-5 pb-5">
      <Row className="align-items-center justify-content-between">
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="w-100">
            <Card className="lift download-section-card" style={{ width: "25rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <form>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control input-fields"
                    id="card-name"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                  />
                  <label className="light-text" htmlFor="card-name">
                    Name
                  </label>
                </div>

                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control input-fields"
                    id="card-email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                  <label className="light-text" htmlFor="card-email">
                    Email
                  </label>
                </div>

                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control input-fields"
                    id="card-pwd"
                    aria-describedby="emailHelp"
                    placeholder="Password"
                  />
                  <label className="light-text" htmlFor="card-pwd">
                    Password
                  </label>
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="btn btn-lg w-100 lift btn-success"
                  >
                    Download
                  </button>
                </div>
              </form>
            </Card.Body>
          </Card>
            </div>
          
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12  download-text-section">
          <div className="text-justify">
            <h2 className="h2">The most useful resource</h2>
            <h2 className="text-success">ever created for developers.</h2>

            <p className="light-text h5 pt-3 pb-4">
              Using Landkit to build your site means never worrying about
              designing another page or cross browser compatibility. Our
              ever-growing library of components and pre-designed layouts will
              make your life easier.
            </p>
            <Row className="justify-content-between">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="d-flex">
                <div className="me-4 text-success">
                  <i className="bi bi-check-circle cards-p-text"></i>
                </div>
                <p className="text-success cards-p-text">Lifetime updates</p>
              </div>

              <div className="d-flex">
                <div className="me-4 text-success">
                  <i className="bi bi-check-circle cards-p-text"></i>
                </div>
                <p className="text-success cards-p-text">Tons of assets</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="d-flex">
                <div className="me-4 text-success">
                  <i className="bi bi-check-circle cards-p-text"></i>
                </div>
                <p className="text-success cards-p-text">Lifetime updates</p>
              </div>

              <div className="d-flex">
                <div className="me-4 text-success">
                  <i className="bi bi-check-circle cards-p-text"></i>
                </div>
                <p className="text-success cards-p-text">Tons of assets</p>
              </div>
            </div>
            </Row>

          </div>
        </div>
      </Row>
    </div>
  );
}

export default KitchenSinkExample;
