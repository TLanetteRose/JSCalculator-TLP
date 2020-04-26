import React from 'react';

import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

// Variables:

const isOperator = /[x/+-]/,
    endsWithOperator = /[x+-/]$/,
    endsWithNegativeSign = /[x/+]-$/;

// Components 
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVal: "0",
            prevVal: "0",
            formula: "",
            currentSign: "pos",
            lastClicked: ""
        };
        this.maxDigitWarning = this.maxDigitWarning.bind(this);
        this.handleOperators = this.handleOperators.bind(this);
        this.handleEvaluate = this.handleEvaluate.bind(this);
        this.initialize = this.initialize.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);
    }

    initialize() {
        this.setState({
            currentVal: "0",
            prevVal: "0",
            formula: "",
            currentSign: "pos",
            lastClicked: "",
            evaluated: false
        });
    }

    render () {
        return (
            <main className="calculator">
                <Screen formula={this.state.formula.replace(/x/g, ".")}  currentVal={this.state.currentVal} />
                <Keypad 
                    decimal={this.handleDecimal}
                    evaluate={this.handleEvaluate}
                    initialize={this.initialize}
                    numbers={this.handleNumbers}
                    operators={this.handleOperators}
                />
            </main>
        );
    }
}


export default Calculator;