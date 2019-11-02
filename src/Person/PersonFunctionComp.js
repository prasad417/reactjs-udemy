import React, { useState } from 'react'
import Person from './Person'

const PersonFunctionComp = () => {
    const [personState, setPersonState] = useState({
        person: [
            { name: "Prasad", age: "33" },
            { name: "Ramya", age: "27" },
            { name: "Prayan", age: "3" }
        ]
    });

    const changeName = () => {
        setPersonState({
          person: [
            { name: "Prasad", age: "32" },
            { name: "Ramya", age: "27" },
            { name: "Prayan", age: "2" }
        ]
        });
    }

    return(
        <div className="person-class-component">
            <Person name = {personState.person[0].name} age = {personState.person[0].age}>My Hobbies: Long drive</Person>
            <Person name = {personState.person[1].name} age = {personState.person[1].age} />
            <Person name = {personState.person[2].name} age = {personState.person[2].age} />
            <button onClick={changeName}>Function Switch Names</button>
        </div>
    );
}

export default PersonFunctionComp;