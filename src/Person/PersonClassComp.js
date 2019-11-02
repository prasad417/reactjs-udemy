import React, { Component } from "react";
import Person from "./Person";

class PersonClassComp extends Component {
  state = {
    persons: [
      { id: "thffr45gfhhy", name: "Prasad", age: "33" },
      { id: "hgdrfswa54df", name: "Ramya", age: "27" },
      { id: "f6f9u8h54ssj", name: "Prayan", age: "3" }
    ],
    showPersons: false
  };

  changeName = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  };



  render() {
    let persons =null;
    if(this.state.showPersons) {
      persons = (
        <div className="person-class-component">
          {
            this.state.persons.map(
              (person, index) => {return <Person key = {person.id} changed = {(event) => this.changeName(event, person.id)} name = {person.name} age = {person.age}/>}
            )
          }
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default PersonClassComp;