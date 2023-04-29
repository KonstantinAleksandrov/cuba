import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List'


function App() {

  const list = [1,4,7,2,5,7,9]

  return (
    <div className="App">
      <header className="App-header">
        {logo && <img src={logo} className="App-logo" alt="logo" />}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <List list={list}/>
      </header>
    </div>
  );
}

export default App;
