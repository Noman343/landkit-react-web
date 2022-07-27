import React from "react";
import img from "../assets/cover-15.jpg";

function SignUp() {
  return (
    <>
      <section>
        <div class="container d-flex flex-column">
          <div class="row align-items-center justify-content-center gx-0 min-vh-100">
            <div class="col-12 col-md-6 col-lg-4 py-8 py-md-11">
              <h1 class="mb-0 fw-bold">Sign up</h1>

              <p class="mb-6 text-muted">Simplify your workflow in minutes.</p>

              <form class="mb-6">
                <div class="form-group">
                  <label class="form-label" for="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@address.com"
                  />
                </div>

                <div class="form-group mb-5">
                  <label class="form-label" for="password">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>

                <button class="btn w-100 btn-primary" type="submit">
                  Sign up
                </button>
              </form>

              <p class="mb-0 fs-sm text-muted">
                Already have an account? <a href="signin-cover.html">Log in</a>.
              </p>
            </div>
            <div class="col-lg-7 offset-lg-1 align-self-stretch d-none d-lg-block">
              <div
                class="h-100 w-cover bg-cover"
                style={{ backgroundImage: `url(${img})`}}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
