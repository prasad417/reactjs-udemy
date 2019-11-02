import React, { Component } from 'react'
import './App.css'
import PersonClass from './Person/PersonClassComp'
// import PersonFunction from './Person/PersonFunctionComp'
// import UserInput from './assignments/state/UserInput'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <PersonClass />
        {/* <PersonFunction /> 
        <UserInput /> */}
        
      </div>
    );
  }
  
}

export default App;
