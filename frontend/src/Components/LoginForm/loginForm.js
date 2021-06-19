import React, { useState } from "react";
import { loginUser } from "../../store/helpers";
import { Link, useHistory } from "react-router-dom";
import "./login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const logIn = () => {
    loginUser(email, pass)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/todos");
      })
      .catch((err) => alert(err.response.data.msg));
  };

  const handleEnterKey = (event) => event.key === "Enter" && logIn();

  return (
    <div>
      {" "}
      <div className="con">
        <header className="head-form">
          <h2>Log In</h2>
          <p>login here using your email and password</p>
        </header>
      </div>
      <div className="field-set">
        <input
          className="form-input"
          id="txt-input"
          type="text"
          placeholder="@Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleEnterKey}
        ></input>
        <br></br>
        <span className="input-item">
          <i className="fa fa-key"></i>
        </span>
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          id="pwd"
          name="password"
          required
          onChange={(e) => setPass(e.target.value)}
          onKeyDown={handleEnterKey}
        ></input>
        <br></br>
        <button
          onClick={(e) => {
            e.preventDefault();
            logIn();
          }}
          className="log-in button"
        >
          Log In
        </button>

        <h3 className="other">
          Don't have account?
          <Link to="/register">
            <small>Register</small>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default LoginForm;
