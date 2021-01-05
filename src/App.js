import React from 'react';
import './App.css';
import HomePage from './containers/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom'
import LogIn from './containers/LogIn/LogIn';
import SignUp from "./containers/SignUp/SignUp";
import Navbar from './components/Navbar/Navbar';
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ResetPass from "./components/ResetPassword/ResetPassword";



const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forget-pass" component={ForgetPassword} />
        <Route path="/reset-pass" component={ResetPass} />
      </Switch>
    </>
  );
}

export default App;
