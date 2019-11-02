import React, { Component } from 'react'

class ValidationComponent extends Component {
    render() {
        // let validationMessage = (this.props.inputLength <= 5) ?  <p>Text too short</p> : <p>Text long enough</p>
        // if (this.props.inputLength <= 5) {
        //     validationMessage =  (
        //         <div>
        //             <p>Text too short</p>
        //         </div>
        //     )
        // } else {
        //     validationMessage =  (
        //         <div>
        //             <p>Text long enough</p>
        //         </div>
        //     )
        // }
        return (
            <div>
                {this.props.inputLength <= 5 ?  <p>Text too short</p> : <p>Text long enough</p>}
            </div>
        )
    }
}

export default ValidationComponent
