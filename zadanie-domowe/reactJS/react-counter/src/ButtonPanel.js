import React from 'react';

const ButtonPanel = (props) => {
    return (
        <div className="button-panel">
            <button onClick={props.changeCounterValue}>Dodaj 1</button>
            <button onClick={props.zeroCounterValue}>Zeruj</button>
            <button onClick={props.initCounterValue}>Init Val</button>
        </div>
    );
}
export default ButtonPanel;
