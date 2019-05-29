import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import SetValuePanel from './SetValuePanel';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue
        }
    }
    
    changeValue = () => {
        this.setState((prevValue) => {
            return ({
                counterValue: prevValue.counterValue + 1
            });
        });
    }

    zeroValue = () => {
        this.setState({counterValue:0});
    }

    initialValue = () => {
        this.setState({counterValue: this.props.initValue});
    }

    myValue = (newValue) => {
        this.setState({counterValue: newValue});
    }

    myStepVal = (stepValue) => {
        this.setState({
            counterValue: this.state.counterValue + stepValue     
        });
    }


  render() {
    return (
      <div className="counter">
          Licznik: {this.state.counterValue}
          <ButtonPanel 
            changeCounterValue={this.changeValue} 
            zeroCounterValue={this.zeroValue} 
            initCounterValue={this.initialValue} />
          <SetValuePanel myCounterValue={this.myValue} />
          <Step myStepValue={this.myStepVal} />
      </div>
    );
  }
}

export default Counter;
