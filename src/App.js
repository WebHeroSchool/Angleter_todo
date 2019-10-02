import React from 'react';
import logo from './logo.svg';
import './App.css';
import { count, length } from './number';
const user = "Вася";
const admin = true;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
            fontSize: 45,
            color: "green",
        }}>
          new text
          </p>
          <div>{25}</div>
          <div>{user}</div>
          <div>{2+2}</div>
          <div> {admin && "user is admin"}</div>
          <div>{admin ? "user is true admin" : "this is just user"}</div>
          <div>
          {null}
          {undefined}
          {true}
          {false}
          </div>
          <div>count*length={count*length}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
