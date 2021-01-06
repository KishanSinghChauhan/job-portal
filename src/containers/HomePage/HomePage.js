import React from "react";
import "./HomePage.scss";
const HomePage = () => {
  return (
    <>
      <div className="home-main">
        <div className="home-head">
          <div className="head-left">
            <h1 className="welcome-head">
              Welcome to
              <br />
              <span className="welHead-my">
                My<span className="welHead-jobs">Jobs</span>
              </span>
            </h1>
            <button className="home-btn">Get Started</button>
          </div>
          <div className="head-right">
            <img
              className="home-img"
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwZGVza3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="home-img"
            />
          </div>
        </div>
      </div>
      <div className="home-second">
        <div className="home-why">
          <h4 className="why-head">Why Us</h4>
          <div className="why-menu">
            <div className="why-card">
              <h3 className="whyCard-head">Get More Visibility</h3>
              <p className="whyCard-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="why-card">
              <h3 className="whyCard-head">Organize your candidates</h3>
              <p className="whyCard-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="why-card">
              <h3 className="whyCard-head">Verify their abilities</h3>
              <p className="whyCard-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
