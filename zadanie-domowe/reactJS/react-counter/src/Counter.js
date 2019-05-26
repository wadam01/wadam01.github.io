import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import SetValuePanel from './SetValuePanel';

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


  render() {
    return (
      <div className="counter">
          Licznik: {this.state.counterValue}
          <ButtonPanel 
            changeCounterValue={this.changeValue} 
            zeroCounterValue={this.zeroValue} 
            initCounterValue={this.initialValue} />
          <SetValuePanel myCounterValue={this.myValue} />
      </div>
    );
  }
}

export default Counter;
