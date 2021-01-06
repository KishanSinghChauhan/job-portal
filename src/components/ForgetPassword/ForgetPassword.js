import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
const ForgetPassword =() => {
  // const history = useHistory();
  const [email,setEmail] = useState('')

  const resetToken = () => {
    fetch(
      `https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=${email}`
    ).then(res => res.json())
    .then(data => {
      console.log(data);
    });
  }

  const handleToken = () => {
    resetToken();
  }
  return (
      <div className="log-in">
        <h4>Forget your password?</h4>
        <p>
          Enter the email associated with your account and we’ll send you
          instructions to reset your password.
        </p>
        <input
          name="email"
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        />
        <button onClick={handleToken}>
          Submit
        </button>
      </div>
    );
  }
export default ForgetPassword;
