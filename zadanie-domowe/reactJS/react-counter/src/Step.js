import React, { Component } from 'react'

class Step extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    setStepValue = () => {
        this.props.myStepValue(parseInt(this.objInput.value));
    }

    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
    }

    render() {
        return (
            <div className="step-panel">
                <input type="number" ref={input => this.objInput = input} value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}></input>
                <button onClick={() => { this.setStepValue() }}>Zwiększ o {this.state.inputValue}</button>
            </div>
        )
    }
}

export default Step;