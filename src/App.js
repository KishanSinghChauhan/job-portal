import React from 'react';
import './App.css';
import HomePage from './containers/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom'
import LogIn from './containers/LogIn/LogIn';
import SignUp from "./containers/SignUp/SignUp";
import Navbar from './components/Navbar/Navbar';
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ResetPass from "./components/ResetPassword/ResetPassword";
import AllJobs from "./containers/Candidate/AllJobs";
import AppliedJobs from "./containers/Candidate/AppliedJobs";
import JobPosted from './containers/Recruiter/JobPosted';
import NewJobPost from './containers/Recruiter/NewJobPost';




const App = () => {
  const token = localStorage.getItem("jwt");
  const userData = JSON.parse(localStorage.getItem("data"));
  
  return (
    <>
      <Navbar token={token} userData={userData} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forget-pass" component={ForgetPassword} />
        <Route path="/reset-pass" component={ResetPass} />
        <Route path="/candidate/jobs" exact component={AllJobs} />
        <Route path="/candidate/jobs/applied" component={AppliedJobs} />
        <Route path="/recruiter/jobs" exact component={JobPosted} />
        <Route path="/recruiter/jobs/post" component={NewJobPost} />
      </Switch>
    </>
  );
}

export default App;
