import React, { useState, useEffect } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phone, setPhone] = useState("");

  const [success, setSuccess] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    if (name === "") {
      setNameError("Please fill out all fields");
      setTimeout(() => {
        setNameError("");
      }, 2000);
    } else if (email === "") {
      setEmailError("Please provide the email");
      setTimeout(() => {
        setEmailError("");
      }, 2000);
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email");
      setTimeout(() => {
        setEmailError("");
      }, 2000);
    } else if (password === "") {
      setPasswordError("Please provide the password");
      setTimeout(() => {
        setPasswordError("");
      }, 2000);
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      setTimeout(() => {
        setPasswordError("");
      }, 2000);
    } else {
      setSuccess("Your form has been submitted.");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    }
  }

  return (
    <div className="container">
      <form>
        <div className="form-floating">
          <input
            type="text"
            className="form-control input-fields"
            id="card-name"
            aria-describedby="emailHelp"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="light-text" htmlFor="card-name">
            Name
          </label>
        </div>

        <p
          style={
            nameError ? { display: "block", color: "red" } : { display: "none" }
          }
        >
          {nameError}
        </p>

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

        <p
          style={
            emailError
              ? { display: "block", color: "red" }
              : { display: "none" }
          }
        >
          {emailError}
        </p>

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

        <p
          style={
            passwordError
              ? { display: "block", color: "red" }
              : { display: "none" }
          }
        >
          {passwordError}
        </p>

        <div className="mt-3"
          style={
            success === ""
              ? { display: "none" }
              : { display: "block", color: "green" }
          }
        >
          <h1 className="display-5 me-2 ms-2">{success}</h1>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="btn btn-lg lift btn-success"
            onClick={formSubmit}
          >
            Download
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
