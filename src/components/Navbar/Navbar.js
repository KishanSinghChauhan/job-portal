import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  const token = localStorage.getItem("jwt");
  const userData = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="navbar-main">
      <div className="navbar-head">
        <div>
          <h3 className="nav-head">
            My<span className="job-head">Jobs</span>
          </h3>
        </div>
        {token ? (
          <div>
            {userData.userRole === 1 ? (
              <Link to="/candidate/jobs/applied">Applied Jobs</Link>
            ) : (
              <Link to="/recruiter/jobs/post">Post a Job</Link>
            )}
          </div>
        ) : (
          <Link className='login-btn' to="/login">Login/Signup</Link>
        )}
        {userData ? (<span>{userData.name}</span>) : null}
      </div>
    </div>
  );
};

export default Navbar;
