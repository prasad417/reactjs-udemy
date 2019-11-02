import React, { Component } from 'react'

import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'

class InputChar extends Component {
    state = {
        inputText: 'test'
      };
    
      inputChange = (event) => {
        this.setState({
          inputText: event.target.value
        })
      }
      
      deleteCharHandler = (index) => {
        const text = this.state.inputText.split('')
        text.splice(index, 1)
        const updatedText = text.join('')
        this.setState({
          inputText: updatedText
        })
      }

    render() {
        const charList = this.state.inputText.split('').map(
            (ch, index) => {
              return <CharComponent key={index} character={ch} clicked={() => this.deleteCharHandler(index)}/>
          })
        return (
            <div className="user-input">
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
                <hr />
                <input type="text" placeholder="Enter text" onChange={this.inputChange} value={this.state.inputText}/>
                <p>Length of the text entered in input field is: {this.state.inputText}</p>
                <ValidationComponent inputLength = {this.state.inputText.length}/>
                <CharComponent />
                {charList}
            </div>
        )
    }
}

export default InputChar
