import React from 'react';
import './App.css';
import logo from'./logo.jpg';
function App() {
  return (
    <div id="App">
      <div id="heading">
        <img className="item" id="logo" src={logo} alt="cmpy-logo"></img>
        <h1 className="item title">Dr. Time</h1>
        <div id="timer">
        <div id="a"></div>
          <p className="ss">Starting soon</p>
        </div>
      </div>
      <div className ="main">
        <div id="img-container">
          <img id="big-logo"src={logo} alt="big-logo"></img>
        </div>
        <p className="com">Coming in 2021</p>
        <h2 className="title med">Medicine Reimagined</h2>
        <div className="t1">
        
          <p className="line">On your wrist, at your desk, in your pocket</p>
          <div id="social">
            <p className="st">
            Follow us on Twitter <span className="b">@DrTimeApp</span>,<br/> Instagram <span className="b">@dr.timeapp</span> and <br/>Facebook <span className="b">@DrTimeApp</span>
            </p>
            
        </div>
      </div>
    </div>
    <p className="footer">
    Copyright 2020 Dr. Time, Inc
  </p>
  </div>

  );
}

export default App;
