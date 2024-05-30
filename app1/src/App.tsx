import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Counter from './components/CounterAppOne';
import TextArea from './components/TextArea';

function App() {
  return (
    <div className="App">
      <h1>Hello from app1</h1>
      <Counter name="shlomo"/>
      <h1></h1>
      <TextArea/>
    </div>
  );
}

export default App;
