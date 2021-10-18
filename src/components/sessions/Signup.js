import React, { useState } from "react";

const Signup = ({ setActive }) => {
  const [authInfo, setAuthInfo] = useState({
    first_name: "",
    last_name: "",
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
    <form className="signup login100-form validate-form" onSubmit={_submit}>
      <h1 className="form-header text-center fs-32 m-b-16">Sign Up</h1>
      <div
        className="wrap-input100 validate-input"
        data-validate="Valid email is required: ex@abc.xyz"
      >
        <input
          className="input100"
          type="text"
          name="first_name"
          placeholder="First name"
          onChange={_change}
          required
        />
        <span className="focus-input100"></span>
        <span className="symbol-input100">
          <i className="fa fa-pen" aria-hidden="true"></i>
        </span>
      </div>

      <div
        className="wrap-input100 validate-input"
        data-validate="Password is required"
      >
        <input
          className="input100"
          type="text"
          name="last_name"
          placeholder="Last name"
          onChange={_change}
          required
        />
        <span className="focus-input100"></span>
        <span className="symbol-input100">
          <i className="fa fa-pen" aria-hidden="true"></i>
        </span>
      </div>

      <div
        className="wrap-input100 validate-input"
        data-validate="Password is required"
      >
        <input
          className="input100"
          type="email"
          name="email"
          placeholder="Email"
          onChange={_change}
          required
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
          onChange={_change}
          required
        />
        <span className="focus-input100"></span>
        <span className="symbol-input100">
          <i className="fa fa-lock" aria-hidden="true"></i>
        </span>
      </div>

      <div className="container-login100-form-btn">
        <button className="login100-form-btn">Sign Up</button>
      </div>

      <div className="text-center p-t-32">
        <a
          className="txt2"
          href="#"
          onClick={() => setActive(false)}
          style={{ cursor: "pointer", fontSize: 16 }}
        >
          <i className="fa fa-arrow-left m-r-8" aria-hidden="true"></i>
          Already have an account?
        </a>
      </div>
    </form>
  );
};

export default Signup;
