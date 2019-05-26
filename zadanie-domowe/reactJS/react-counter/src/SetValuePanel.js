import React, { Component } from 'react';

// const SetValuePanel = (props) => {

//     let objInput = null;

//     return (
//         <div className="value-panel">
//             <input type="number" ref={input => objInput = input}></input>
//             <button onClick={() => {props.myCounterValue(parseInt(objInput.value))}}>Ustaw</button>
//         </div>
//     );

// }

class SetValuePanel extends Component {

    setNewValue = () => {
        this.props.myCounterValue(parseInt(this.objInput.value));
    }

    render() {
        return (
            <div className="value-panel">
                <div className="value-panel">
                    <input type="number" ref={input => this.objInput = input}></input>
                    <button onClick={() => {this.setNewValue()}}>Ustaw</button>
                </div>
            </div>
        );
    }
}


export default SetValuePanel;