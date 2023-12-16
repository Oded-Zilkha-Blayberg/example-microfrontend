import React from 'react';
// import logo from './logo.svg';
// import './App.css';

const CounterAppOne = React.lazy(() => import('app1/CounterAppOne'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Edit <code>src/App.tsx</code> and save to reload.
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CounterAppOne name='oded' />
      </header>
    </div>
  );
}

export default App;
