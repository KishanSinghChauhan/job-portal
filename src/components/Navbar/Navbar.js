import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { DropdownButton,Dropdown } from "react-bootstrap";
const Navbar = ({ handleToken,token,userRole,userData }) => {

  const token2 = localStorage.getItem('jwt');
  return (
    <div className="navbar-main">
      <div className="navbar-head">
        <div>
          <h3 className="nav-head">
            My<span className="job-head">Jobs</span>
          </h3>
        </div>
        <div className="nav-right">
          {token || token2 ? (
            <div>
              {userRole === 1 ? (
                <Link className="user-link" to="/candidate/jobs/applied">
                  Applied Jobs
                </Link>
              ) : (
                <Link className="user-link" to="/recruiter/jobs/post">
                  Post a Job
                </Link>
              )}
            </div>
          ) : (
            <Link className="login-btn" to="/login">
              Login/Signup
            </Link>
          )}
          {userData || token2 ? (
            <>
              <Avatar className="ava-user">{userData[0]}</Avatar>
              <DropdownButton
                id="dropdown-basic-button"
                className='drop-btn'
                title=""
              >
                <Dropdown.Item onClick={handleToken}>Logout</Dropdown.Item>
              </DropdownButton>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
