import React, { Component } from "react";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";
class ResetPass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: "",
      confirmNewPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

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
            name="New Password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.newPassword}
            label="New password"
            required
          />
          <FormInput
            name="Confirm New Password"
            type="password"
            value={this.state.confirmNewPassword}
            handleChange={this.handleChange}
            label="Confirm new password"
            required
          />
          <button type="submit">Reset</button>
        </form>
      </div>
    );
  }
}
export default ResetPass;
