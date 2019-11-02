import React, { Component } from 'react'

class Person extends Component {
    render() {
        return (
            <div className="person">
                <p>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

// const Person = (props) => {
//     // console.log(props)
//     return (
//         <div className="person">
//             <p>I'm {props.name} and I'm {props.age} years old.</p>
//             <p>{props.children}</p>
//             <input type="text"  onChange={props.changed} value={props.name}/>
//         </div>
//     )
// }

export default Person