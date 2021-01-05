import React from 'react';
import './App.css';
import HomePage from './containers/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom'
import LogIn from './containers/LogIn/LogIn';
import SignUp from "./containers/SignUp/SignUp";
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
