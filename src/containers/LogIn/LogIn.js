import React, { Component } from "react";
import FormInput from "../../components/FormInput/FormInput";
import {Link} from 'react-router-dom'
class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    // const { email, password } = this.state;

    console.log(this.state);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="log-in">
        <h4>Login</h4>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <button type="submit"> Sign in </button>
        </form>
        <div>
            <h4>New to MyJobs?</h4>
            <Link to='signup'>Create an account</Link>
        </div>
      </div>
    );
  }
}
export default LogIn;
