import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const LogIn = () => {
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
          localStorage.setItem("jwt", data.data.token);
          localStorage.setItem("data", JSON.stringify(data.data));
          console.log(data.data);
          // history.push("/candidate/jobs");
        }
        if(data.data.userRole === 0){
          history.push('/recruiter/jobs')
        }
        else{
          history.push("/candidate/jobs");
        }
      });
  };
  return (
    <div className="log-in">
      <h4>Login</h4>

      <input
        name="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        label="email"
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="password"
        required
      />
      <Link to="/forget-pass">Forget your password?</Link>
      <button onClick={() => Login()}> Sign in </button>
      <div>
        <h6>New to MyJobs?</h6>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
};
export default LogIn;
