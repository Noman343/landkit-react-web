import React, { useState, useEffect } from "react";
import img from "../assets/cover-15.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BouncingBalls } from "react-cssfx-loading";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInState, setLoggedInState] = useState("");
  const [status, setStatus] = useState(0);
  const [msg, setMsg] = useState("");

  // useEffect(() => {
  //   return () => {
  //     setMsg("");
  //     setStatus("");
  //   };
  // }, [username, email, password]);

  function signup(e) {
    e.preventDefault();
    setLoggedInState("logging in");
    if (username === "" || email === "" || password === "") {
      setMsg("Please complete the Fields");
      setStatus(400);
      setLoggedInState("");
    } else {
      axios
        .post("https://cryptic-brushlands-00751.herokuapp.com/signup", {
          name: username,
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.msg === "No matching documents") {
            setMsg("Account Created Successfully now you can Log In.");
            setStatus(200);
            setLoggedInState("");
            setTimeout(() => {
              setStatus(0);
              setMsg("");
              setEmail("");
              setPassword("");
              setUsername("");
            }, 2000);
          } else if (res.data.msg === "please login") {
            setMsg("You are already Registered. Please Log In.");
            setStatus(200);
            setLoggedInState("");
            setTimeout(() => {
              setStatus(0);
              setMsg("");
              setEmail("");
              setPassword("");
              setUsername("");
            }, 2000);
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
              <h1 className="mb-1">Sign up</h1>

              <p className="mb-6 light-text">
                Simplify your workflow in minutes.
              </p>

              <form onSubmit={signup}>
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
                    type="text"
                    className="form-control input-fields"
                    id="card-name"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                      Sign Up
                    </button>
                  )}
                </div>
              </form>

              <p className="mb-0 mt-3 fs-sm text-muted">
                Already have an account? <Link to={"/login"}>Log in</Link>.
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

export default SignUp;
