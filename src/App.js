import React from 'react';
//logo from https://logodust.com/
import logo from './smooth.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Log in with Google, to use our Discreet Habit Tracker
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="g-signin2" data-onsuccess="onSignIn"></div>
          
          <h1>DisTrack</h1>
        </a>
      </header>
    </div>
  );
}

export default App;

