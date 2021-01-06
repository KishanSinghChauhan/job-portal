import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  const token = localStorage.getItem('jwt');
  const userData = JSON.parse(localStorage.getItem('data')).name;
  
  return (
    <div className="navbar-main">
      <div className="navbar-head">
        <div>
          <h3 className="nav-head">
            My<span className="job-head">Jobs</span>
          </h3>
        </div>
        <div>
          <Link to="/candidate/jobs/applied">Applied Jobs</Link>
          {!token && <Link to="/login">Login/Signup</Link>}
          <span>{userData}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
