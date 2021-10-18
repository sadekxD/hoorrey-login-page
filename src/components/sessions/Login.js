import React, { useState } from "react";

const Login = ({ setActive }) => {
  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
  });

  const _submit = (e) => {
    e.preventDefault();
  };

  const _change = (e) => {
    setAuthInfo({
      ...authInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="login login100-form validate-form" onSubmit={_submit}>
      <h1 className="form-header text-center fs-32 m-b-16">Login</h1>
      <div className="wrap-input100 validate-input">
        <input
          className="input100"
          type="text"
          name="email"
          placeholder="Email"
          required
          onChange={_change}
        />
        <span className="focus-input100"></span>
        <span className="symbol-input100">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </span>
      </div>

      <div
        className="wrap-input100 validate-input"
        data-validate="Password is required"
      >
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={_change}
        />
        <span className="focus-input100"></span>
        <span className="symbol-input100">
          <i className="fa fa-lock" aria-hidden="true"></i>
        </span>
      </div>

      <div className="container-login100-form-btn">
        <button className="login100-form-btn">Login</button>
      </div>

      <div className="text-center p-t-12">
        <span className="txt1">Forgot </span>{" "}
        <a className="txt2" href="#">
          Username / Password?
        </a>
      </div>

      <div className="text-center p-t-32">
        <a
          className="txt2"
          href="#login"
          onClick={() => setActive(true)}
          style={{ cursor: "pointer", fontSize: 16 }}
        >
          Create your Account
          <i className="fa fa-arrow-right m-l-8" aria-hidden="true"></i>
        </a>
      </div>
    </form>
  );
};

export default Login;
