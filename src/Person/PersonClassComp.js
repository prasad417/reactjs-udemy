import React, { Component } from 'react'
import Person from './Person'

class PersonClassComp extends Component {
    state = {
        person: [
            { name: "Prasad", age: "33" },
            { name: "Ramya", age: "27" },
            { name: "Prayan", age: "3" }
        ]
      }
    
      changeName = () => {
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
            <div className="person-class-component">
                <Person name = {this.state.person[0].name} age = {this.state.person[0].age}>My Hobbies: Long drive</Person>
                <Person name = {this.state.person[1].name} age = {this.state.person[1].age} />
                <Person name = {this.state.person[2].name} age = {this.state.person[2].age} />
                <button onClick={this.changeName}>Class Switch Names</button>
            </div>
        )
    }
}

export default PersonClassComp
