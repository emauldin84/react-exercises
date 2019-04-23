import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetLower from './GreetLower'
import GreetLeet from './GreetLeet'
import BouncingCounter from './BouncingCounter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GreetLower name='Eric'/>
        <GreetLeet name='Caitie'/>
        <BouncingCounter />
        
      </header>
    </div>
  );
}

export default App;
