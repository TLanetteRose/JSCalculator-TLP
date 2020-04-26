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

    maxDigitWarning() {
        this.setState({
            currentVal: "Too many digits",
            prevVal: this.state.currentVal
        });
        setTimeout(() => this.setState({
             currentVal: this.state.prevVal
        }), 1000);
    }

    handleEvaluate() {
        if (!this.state.currentVal.includes("Limit")) {
            let expression = this.state.formula;
            while (endsWithOperator.test(expression)) {
                expression = expression.slice(0, -1);
            }
            expression = expression.replace(/x/g, "*").replace(/-/g, "-");
            // eslint-disable-next-line 
            let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
            this.setState({
                currentVal: answer.toString(),
                formula: expression.replace(/\*/g, ".").replace(/-/g, "-") + "=" + answer,
                prevVal: answer,
                evaluated: true
            });
        }
    }

    handleOperators(e) {
        if (!this.state.currentVal.includes("Limit")) {
            const value = e.target.value;
            const { formula, prevVal, evaluated } = this.state;
            this.setState({ currentVal: value, evaluated: false });
            if (evaluated) {
                this.setState({ formula: prevVal + value });
            } else if (!endsWithOperator.test(formula)) {
                this.setState({
                    prevVal: formula,
                    formula: formula + value
                });
            } else if (!endsWithNegativeSign.test(formula)) {
                this.setState({
                   formula: (endsWithNegativeSign.test(formula + value) ? formula : prevVal) + value
                });
            } else if (value !== "-") {
                this.setState({
                    formula: prevVal + value
                });
            }
        }
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