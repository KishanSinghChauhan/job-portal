import React, { Component } from "react";
import FormInput from "../../components/FormInput/FormInput";
import { withRouter } from "react-router-dom";
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
    this.props.history.push("/login");
    // console.log(this.state);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="log-in">
        <h4>Reset your password</h4>
        <p>Enter your new password below.</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.newPassword}
            label="New password"
            // required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.confirmNewPassword}
            handleChange={this.handleChange}
            label="Confirm new password"
            // required
          />
          <button type="submit">Reset</button>
        </form>
      </div>
    );
  }
}
export default withRouter(ResetPass);
