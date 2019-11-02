import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
        { name: "Prasad", age: "33" },
        { name: "Ramya", age: "27" },
        { name: "Prayan", age: "3" }
    ]
  }

  changeName = () => {
    console.log('Clicked.')
    this.setState({
      person: [
        { name: "Prasad", age: "32" },
        { name: "Ramya", age: "27" },
        { name: "Prayan", age: "2" }
    ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changeName}>Switch Names</button>
        <Person name = {this.state.person[0].name} age = {this.state.person[0].age}>My Hobbies: Long drive</Person>
        <Person name = {this.state.person[1].name} age = {this.state.person[1].age} />
        <Person name = {this.state.person[2].name} age = {this.state.person[2].age} />
      </div>
    );
  }
  
}

export default App;
