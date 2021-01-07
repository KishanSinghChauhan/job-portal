import React, {useState } from "react";
import "./App.css";
import HomePage from "./containers/HomePage/HomePage";
import { Route, Switch, useHistory } from "react-router-dom";
import LogIn from "./containers/LogIn/LogIn";
import SignUp from "./containers/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ResetPass from "./components/ResetPassword/ResetPassword";
import AllJobs from "./containers/Candidate/AllJobs";
import AppliedJobs from "./containers/Candidate/AppliedJobs";
import JobPosted from "./containers/Recruiter/JobPosted";
import NewJobPost from "./containers/Recruiter/NewJobPost";
import JobApplicants from "./containers/Recruiter/JobApplicants";

const App = () => {
  const history = useHistory();

  const [token, setToken] = useState("");
  const [userData, setUserData] = useState("");
  const [userRole, setUserRole] = useState("");

  const handleToken = () => {
    setToken(localStorage.removeItem("jwt"));
    setUserData(localStorage.removeItem("data"));
    history.push("/");
  };

  const handleLogin =(token,data) => {
    setToken(token);
    if (data) {
      setUserData(data.name);
      setUserRole(data.userRole);
    }
  }

  return (
    <>
      <Navbar
        handleToken={handleToken}
        token={token}
        userData={userData}
        userRole={userRole}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" render={() => <LogIn handleLogin={handleLogin}/>} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forget-pass" component={ForgetPassword} />
        <Route path="/reset-pass" component={ResetPass} />
        <Route path="/candidate/jobs" exact component={AllJobs} />
        <Route path="/candidate/jobs/applied" component={AppliedJobs} />
        <Route path="/recruiter/jobs" exact component={JobPosted} />
        <Route path="/recruiter/jobs/post" component={NewJobPost} />
        <Route path="/job/:id/applicants" component={JobApplicants} />
      </Switch>
    </>
  );
};

export default App;
