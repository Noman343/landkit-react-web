import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const [success, setSuccess] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    if (
      (name === "") &
      (email === "") &
      (password === "") &
      (phone === "") &
      (message === "")
    ) {
      setNameError("Name is required");
      setEmailError("Email is required");
      setPasswordError("Password is required");
      setPhoneError("Phone is required");
      setMessageError("Message is required");
      setTimeout(() => {
        setNameError("");
        setEmailError("");
        setPasswordError("");
        setPhoneError("");
        setMessageError("");
      }, 2000);
    } else if (name === "") {
      setNameError("Please provide the name.");
      setTimeout(() => {
        setNameError("");
      }, 2000);
    } else if (email === "") {
      setEmailError("Please provide the email.");
      setTimeout(() => {
        setEmailError("");
      }, 2000);
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please enter a valid email.");
      setTimeout(() => {
        setEmailError("");
      }, 2000);
    } else if (password === "") {
      setPasswordError("Please provide the password.");
      setTimeout(() => {
        setPasswordError("");
      }, 2000);
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      setTimeout(() => {
        setPasswordError("");
      }, 2000);
    } else if (phone === "") {
      setPhoneError("Please provide the phone number.");
      setTimeout(() => {
        setPhoneError("");
      }, 2000);
    } else if (message === "") {
      setMessageError("Please tell us how we can help you.");
      setTimeout(() => {
        setMessageError("");
      }, 2000);
    } else {
      setSuccess("Your form has been submitted.");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setMessage("");
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    }
  }

  return (
    <div className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2 col-sm-1"></div>

        <div className="col-lg-6 col-md-8 col-sm-10">
          <h1 className="text-center display-4">
            Contact <span style={{ color: "blue" }}>Us</span>
          </h1>
          <form>
            <div className="form-floating">
              <input
                type="text"
                className="form-control input-fields"
                id="form-name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="light-text" htmlFor="form-name">
                Name
              </label>
            </div>

            <p
              style={
                nameError
                  ? { display: "block", color: "red" }
                  : { display: "none" }
              }
            >
              {nameError}
            </p>

            <div className="form-floating">
              <input
                type="email"
                className="form-control input-fields"
                id="form-email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="light-text" htmlFor="form-email">
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
                id="form-pwd"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="light-text" htmlFor="form-pwd">
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

            <div className="form-floating">
              <input
                type="number"
                className="form-control input-fields"
                id="form-num"
                placeholder="+ 92"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label className="light-text" htmlFor="form-num">
                Phone
              </label>
            </div>

            <p
              style={
                phoneError
                  ? { display: "block", color: "red" }
                  : { display: "none" }
              }
            >
              {phoneError}
            </p>

            <div className="form-floating">
              <textarea
                style={{ height: "100px" }}
                className="form-control input-fields"
                id="form-message"
                name="message"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
              <label className="light-text" htmlFor="form-message">
                Message
              </label>
            </div>
            <p
              style={
                messageError
                  ? { display: "block", color: "red" }
                  : { display: "none" }
              }
            >
              {messageError}
            </p>

            <div
              className="mt-3"
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
                className="btn btn-lg lift btn-success mb-3"
                onClick={formSubmit}
              >
                Download
              </button>
            </div>
          </form>
        </div>

        <div className="col-lg-3 col-md-2 col-sm-1"></div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
