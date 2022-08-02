import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BouncingBalls } from "react-cssfx-loading";
import img from "../assets/cover-14.jpg";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInState, setLoggedInState] = useState("");
  const [status, setStatus] = useState(0);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    return () => {
      setMsg("");
      setStatus("");
    };
  }, [email, password]);

  function signin(e) {
    e.preventDefault();
    setLoggedInState("logging in");
    if (email === "" || password === "") {
      setMsg("Please complete the Fields");
      setStatus(400);
      setLoggedInState("");
    } else {
      axios
        .post("https://cryptic-brushlands-00751.herokuapp.com/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.msg === "wrong password") {
            setMsg("Incorrect Password");
            setStatus(400);
            setLoggedInState("");
          } else if (res.data.msg === "Incorrect Email") {
            setMsg("Incorrect Email");
            setStatus(400);
            setLoggedInState("");
          } else if (res.status === 200) {
            setMsg(res.data.msg);
            setStatus(200);
            // setEmail("");
            // setPassword("");
            setLoggedInState("");
          } else {
            setMsg("Something went wrong");
            setStatus(500);
            setLoggedInState("");
          }
        })
        .catch((err) => {
          console.log(err);
          setMsg("Internal Server Error Please Try Again later");
          setStatus(500);
          setLoggedInState("");
        });
    }
  }

  return (
    <>
      <section>
        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-center gx-0 min-vh-100">
            <div className="col-12 col-md-6 col-lg-4 py-8 py-md-11">
              <h1 className="mb-1">Sign In</h1>

              <p className="mb-6 light-text">
                Simplify your workflow in minutes.
              </p>

              <form onSubmit={signin}>
                {status === 400 || status === 500 ? (
                  <div
                    className="alert alert-danger d-flex align-items-center"
                    role="alert"
                  >
                    {msg}
                  </div>
                ) : status === 200 ? (
                  <div
                    className="alert alert-primary d-flex align-items-center"
                    role="alert"
                  >
                    {msg}
                  </div>
                ) : (
                  ""
                )}

                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control input-fields"
                    id="card-email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="light-text" htmlFor="card-pwd">
                    Password
                  </label>
                </div>
                <div className="mt-5 text-center">
                  {loggedInState === "logging in" ? (
                    <BouncingBalls />
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-lg w-100 lift btn-primary"
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </form>

              <p className="mb-0 mt-3 fs-sm text-muted">
                Don't have an account? <Link to={"/signup"}>Sign Up</Link>.
              </p>
            </div>
            <div className="col-lg-7 offset-lg-1 align-self-stretch d-none d-lg-block">
              <div
                className="h-100 w-cover bg-cover signupImg"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
