import React, { Component } from 'react'

class UserOutput extends Component {
    render() {
        return (
            <div>
                <p>Test P1</p>
                <p>UserName: {this.props.userName}</p>
                
            </div>
        )
    }
}

export default UserOutput;
