import React, { Component } from "react";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";
class ForgetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  //   handleSubmit = async (event) => {
  //     event.preventDefault();

  //     console.log(this.state);

  //   };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="log-in">
        <h4>Forget your password?</h4>
        <p>
          Enter the email associated with your account and we’ll send you
          instructions to reset your password.
        </p>
        <FormInput
          name="email"
          type="email"
          handleChange={this.handleChange}
          value={this.state.email}
          label="Email Address"
          required
        />
        <Link to="/reset-pass" type="submit">
          Submit
        </Link>
      </div>
    );
  }
}
export default ForgetPassword;
