import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

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
          console.log(data);
          history.push("/all-jobs");
        }
      });
  };
  return (
    <div className="sign-up">
      <h2 className="title">Signup</h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        type="text"
        name="skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />
      <button onClick={() => SignUp()}>Signup</button>
      <div>
        <h4>Have an account?</h4>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
