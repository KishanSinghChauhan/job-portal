import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.scss";
const SignUp = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [skills, setSkills] = useState("");

  const SignUp = () => {
    fetch("https://jobs-api.squareboat.info/api/v1/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
        skills,
        name,
        userRole: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          console.log("error");
        } else {
          localStorage.setItem("jwt", data.token);
          console.log(data);
          history.push("/all-jobs");
        }
      });
  };
  return (
    <div className="signup-main">
      <div className="sign-up">
        <h2 className="signup-title">Signup</h2>
        <div className="signup-inputs">
          <label>Full Name*</label>
          <input
            type="text"
            placeholder="Enter your full name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email address*</label>

          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <label>Create password*</label>

              <input
                type="password"
                placeholder="Enter your email"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "96%" }}
              />
            </div>
            <div>
              <label>Confirm Password*</label>

              <input
                type="password"
                placeholder="Enter your password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <label>Skills*</label>

          <input
            type="text"
            placeholder="Enter comma separated skills"
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
        <div className="signBtn-main">
          <button className="sign-btn" onClick={() => SignUp()}>
            Signup
          </button>
        </div>
        <div className="login-part">
          <h6>Have an account?</h6>
          <Link className="log" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
