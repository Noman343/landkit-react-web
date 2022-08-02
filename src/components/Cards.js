import React from "react";
import airbnb from '../assets/airbnb.png';

function Cards() {
  return (
    <div className="bg-light">
    <div className="container" id="cards-section">
      <div className="row card-section-row">
        <div className="col-lg-4 col-md-4 col-sm-12  mt-2">
          <div className="icon mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              className="bi bi-toggles"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z"
                fill="#335eea"
              />
            </svg>
          </div>

          <div className="pt-2 pb-2 text-justify">
            <h1 className="h4">Built for developers</h1>
            <p className="mt-1 mb-1 light-text cards-p-text">
              Landkit is built to make your life easier. Variables, build
              tooling, documentation, and reusable components.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
          <div className="icon mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              className="bi bi-grid-1x2-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"
                fill="#335eea"
              />
            </svg>
          </div>

          <div className="pt-2 pb-2 text-justify">
            <h1 className="h4">Designed to be modern</h1>
            <p className="mt-1 mb-1 light-text cards-p-text">
              Designed with the latest design trends in mind. Landkit feels
              modern, minimal, and beautiful.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12  mt-2">
          <div className="icon mb-2">
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

          <div className="pt-2 pb-2 text-justify">
            <h1 className="h4">Documentation for everything</h1>
            <p className="mt-1 mb-1 light-text cards-p-text">
              We've written extensive documentation for components and tools, so
              you never have to reverse engineer anything.
            </p>
          </div>
        </div>
      </div>

      <div className="row card-section-row">
        <div className="col-lg-2 col-md-4 col-sm-6">
         <img src={airbnb} alt="airbnb logo" className="img-fluid" />
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 ">
         <img src={airbnb} alt="airbnb logo" className="img-fluid" />
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6">
         <img src={airbnb} alt="airbnb logo" className="img-fluid" />
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6">
         <img src={airbnb} alt="airbnb logo" className="img-fluid" />
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
         <img src={airbnb} alt="airbnb logo" className="img-fluid" />
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6">
         <img src={airbnb} alt="airbnb logo" className="img-fluid" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
