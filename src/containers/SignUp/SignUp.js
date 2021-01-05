import React, { Component } from "react";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      FullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      skills: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { FullName, email, password, confirmPassword, skills } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">Signup</h2>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="FullName"
            value={FullName}
            onChange={this.handleChange}
            label="Full Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email Address"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Create Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <FormInput
            type="text"
            name="skills"
            value={skills}
            onChange={this.handleChange}
            label="Skills"
            required
          />
          <button type="submit">Signup</button>
        </form>
        <div>
          <h4>Have an account?</h4>
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
