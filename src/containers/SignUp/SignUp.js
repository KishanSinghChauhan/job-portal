import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.scss";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";


const SignUp = ({ handleSignUp }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [skills, setSkills] = useState("");
  const [userRole, setUserRole] = useState(0);

  const SignUp = () => {
    console.log(userRole);
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
        userRole: parseInt(userRole),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors);
        } else if (data.message) {
          console.log(data.message);
        } else {
          handleSignUp(data.data.token, data.data);
          console.log(data.data);
          localStorage.setItem("jwt", data.data.token);
          localStorage.setItem("data", JSON.stringify(data.data));

          console.log(data.data);
        }
        if (data.data.userRole === 0) {
          history.push("/recruiter/jobs");
        } else {
          history.push("/candidate/jobs");
        }
      });
  };
  return (
    <div className="signup-main">
      <div className="sign-up">
        <h2 className="signup-title">Signup</h2>
        <div className="signup-inputs">
          <label>I'm a*</label>
          <FormControl component="fieldset">
            <RadioGroup
              style={{ flexDirection: "row" }}
              aria-label="I'm a"
              name="userRole"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="Recruiter"
              />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Candidate"
              />
            </RadioGroup>
          </FormControl>
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
                placeholder="Enter your password"
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
