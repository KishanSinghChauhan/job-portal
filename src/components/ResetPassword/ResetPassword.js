import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './ResetPass.scss'
const ResetPass = () => {
  const history = useHistory();

  const[pass,setPass]= useState('');
  const [newPass, setNewPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/login");
  };
  return (
    <div className='reset-main'>
      <div className="reset">
        <h4 className='reset-head'>Reset your password</h4>
        <p className='reset-para'>Enter your new password below.</p>
        <div className='reset-inputs'>
          <label>New password*</label>
          <input
            name="password"
            placeholder="Enter your password"
            type="password"
            onChange={e => setPass(e.target.value)}
            value={pass}
          />
          <label>Confirm new password*</label>

          <input
            name="password"
            placeholder="Enter your password"
            type="password"
            value={newPass}
            onChange={e => setNewPass(e.target.value)}
          />
        </div>
        <div className="reset-sub-main">
          <button className="reset-sub" onClick={handleSubmit}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResetPass;
