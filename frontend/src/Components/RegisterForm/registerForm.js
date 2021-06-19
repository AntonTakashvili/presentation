import React, { useState } from "react";
import * as helpers from "../../store/helpers";
import { Link, useHistory } from "react-router-dom";
import "./registerForm.css";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rptPass, setRptPass] = useState("");
  const history = useHistory();

  const registerUser = () => {
    if (email.trim() && pass.trim() && rptPass === pass) {
      helpers
        .registerUser(email, pass)
        .then(() => history.push("/login"))
        .catch((err) => alert(err.response.data.msg));
    } else {
      alert("Form is not valid, Try again");
    }
  };

  const handleEnterKey = (event) => event.key === "Enter" && registerUser();

  return (
    <div className="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <div>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          className="email form-input"
          required
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleEnterKey}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          className="psw form-input"
          required
          onChange={(e) => setPass(e.target.value)}
          onKeyDown={handleEnterKey}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          className="psw-repeat form-input"
          required
          onChange={(e) => setRptPass(e.target.value)}
          onKeyDown={handleEnterKey}
        />
      </div>
      <hr />

      <button
        type="submit"
        className="registerbtn"
        onClick={(e) => {
          e.preventDefault();
          registerUser();
        }}
      >
        Register
      </button>
      <h3>
        Already have an account?
        <Link to="/login">
          <small>Log In</small>
        </Link>
      </h3>
    </div>
  );
};

export default RegisterForm;
