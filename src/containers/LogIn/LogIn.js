import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './LogIn.scss'
const LogIn = ({ handleLogin}) => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const Login = () => {
    fetch("https://jobs-api.squareboat.info/api/v1/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
        } else {
          handleLogin(data.data.token,data.data)
          console.log(data.data);
          localStorage.setItem("jwt", data.data.token);
          localStorage.setItem("data", JSON.stringify(data.data));
        }
        
        if (data.data.userRole === 0) {
          history.push("/recruiter/jobs");
        } else {
          history.push("/candidate/jobs");
        }
      });
  };
  return (
    <div className="login-main">
      <div className="log-in">
        <h4 className="log-head">Login</h4>
        <div className="log-inputs">
          <label>Email Address</label>
          <input
            placeholder="Enter your email"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password</label>
          <input
            name="password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link className="forget-link" to="/forget-pass">
          Forgot your password?
        </Link>
        <div className="logBtn-main">
          <button className="log-btn" onClick={() => Login()}>
            Login
          </button>
        </div>
        <div className="signUp-part">
          <h6>New to MyJobs?</h6>
          <Link className="create-acc" to="/signup">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
