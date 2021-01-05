import React from "react";
import "./Navbar.scss";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-head">
        <div>
          <h3 className="nav-head">My<span className='job-head'>Jobs</span></h3>
        </div>
        <div>
          <Link to='/login'>Login/Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
