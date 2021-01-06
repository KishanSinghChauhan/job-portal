import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = ({token,userData}) => {
  
  return (
    <div className="navbar-main">
      <div className="navbar-head">
        <div>
          <h3 className="nav-head">
            My<span className="job-head">Jobs</span>
          </h3>
        </div>
        <div>
          {userData.userRole === 1 ? (
            <Link to="/candidate/jobs/applied">Applied Jobs</Link>
          ) : (
            <Link to="/recruiter/jobs/post">Post a Job</Link>
          )}
          <Link to="/login">Login/Signup</Link>
          <span>{userData.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
