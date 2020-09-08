import React from 'react';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  // const test = 'Welcome to React';
  return (
    <div className="App">
      <h1 style={{fontSize:'20pt',fontStyle:'bold',marginTop: "1.4em"}}>Covid 19 Dashboard</h1>
      <br/><br/>
      <Dashboard/>
    </div>
  );
}

export default App;
