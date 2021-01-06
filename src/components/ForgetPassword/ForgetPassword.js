import React, { useState } from "react";
import './ForgetPassword.scss'
import { useHistory } from "react-router-dom";
const ForgetPassword =() => {
  const history = useHistory();
  const [email,setEmail] = useState('')

  // const resetToken = () => {
  //   fetch(
  //     `https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=${email}`
  //   ).then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //   });
  // }

  const handleToken = () => {
    history.push('/reset-pass')
  }
  return (
    <div className="forget-main">
      <div className="forget">
        <h4 className="forget-head">Forgot your password?</h4>
        <p className="forget-para">
          Enter the email associated with your account and we’ll send you
          instructions to reset your password.
        </p>
        <div className='forget-input'>
        <label>Email address*</label>
          <input
            name="email"
            placeholder='Enter your email address'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="forget-sub-main">
          <button className="forget-sub" onClick={handleToken}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
  }
export default ForgetPassword;
