import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import {  useHistory} from "react-router-dom";



const Navbar = () => {

  const history = useHistory();
  const token = localStorage.getItem("jwt");
  const userData = JSON.parse(localStorage.getItem("data"));

  const handleCLick = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem("data");
    history.push('/')
  }

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
          <Link className="login-btn" to="/login">
            Login/Signup
          </Link>
        )}
        {userData ? (
          <>
            <Avatar className="ava-user">{userData.name[0]}</Avatar>
            <p className='log-out' onClick={handleCLick}>Logout</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
