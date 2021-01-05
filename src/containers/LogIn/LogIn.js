import React, { Component } from "react";
import FormInput from "../../components/FormInput/FormInput";
import { withRouter,Link } from "react-router-dom";
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
    this.props.history.push("/all-jobs");
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
          <Link to='/forget-pass'>Forget your password?</Link>
          <button type="submit"> Sign in </button>
        </form>
        <div>
            <h6>New to MyJobs?</h6>
            <Link to='/signup'>Create an account</Link>
        </div>
      </div>
    );
  }
}
export default withRouter(LogIn);
