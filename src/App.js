import React, { Component } from 'react'
import './App.css'
import PersonClass from './Person/PersonClassComp'
import PersonFunction from './Person/PersonFunctionComp'

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <PersonClass />
        
        <PersonFunction />
      </div>
    );
  }
  
}

export default App;
