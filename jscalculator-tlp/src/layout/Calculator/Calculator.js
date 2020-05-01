import React from 'react';
import Keypad from './Keypad/Keypad';

// Variables:

const isOperator = /[x/+-]/,
    endsWithOperator = /[x+-/]$/,
    //endsWithNegativeSign = /[x/+]-$/;

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
        this.handleMaxDigits = this.handleMaxDigits.bind(this);
        this.handleOperators = this.handleOperators.bind(this);
        this.handleEvaluate = this.handleEvaluate.bind(this);
        this.initialize = this.initialize.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);
    }

    handleMaxDigits() {
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

    handleOperators(e){
        if (!this.state.currentVal.includes("Limit")){
            let operate = e.target.value;
            let { currentVal, formula, prevVal, evaluated } = this.state;
            this.setState({ evaluated: false });
            if (currentVal === "0") {
                this.setState({ currentVal: operate === "+" || operate === "-" ? operate : currentVal, formula: operate === "+" || operate === "-" ? operate : formula })
            } 
            else if (evaluated){
                this.setState({
                    formula: prevVal + operate,
                    currentVal: operate
                })
            } 
            else {
                if (currentVal.length > 21){
                this.handleMaxDigits();
                } 
            else {
                if (!endsWithOperator.test(formula) || operate === "-"){
                this.setState({
                    prevVal: formula,
                    formula: formula + operate,
                    currentVal: operate
                })
                }
                else 
                    if(operate !== "-"){
                        while(endsWithOperator.test(prevVal)){
                        prevVal = prevVal.slice(0, prevVal.length - 1)
                        }
                        this.setState({
                        formula: prevVal + operate,
                        currentVal: operate
                        })
                    }

                }
            }
            console.log(currentVal)
        }
    }


    handleNumbers(e){
        if (!this.state.currentVal.includes("Limit")) {
            const { currentVal, formula, evaluated } = this.state;
            const val = e.target.value;
            this.setState({ evaluated: false });
            if (currentVal.length > 21) {
                this.handleMaxDigits();
            } 
            else if (evaluated) {
                this.setState({
                    currentVal: val,
                    formula: val !== "0" ? val : ""
                })
            }
             else {
                if (currentVal === "0" || isOperator.test(currentVal)){
                    this.setState({
                        currentVal: val,
                        formula: formula === "0" ? val : formula + val 
                    })
                }
                else{
                    this.setState({
                        currentVal: currentVal + val, 
                        formula: formula === "0" ? val : formula + val
                    })
                }
            }
            console.log(currentVal)
        }
    }

    handleDecimal() {
        if (this.state.evaluated === true) {
            this.setState({
                currentVal: "0.",
                formula: "0.", 
                evaluated: false
            });
        } else if (
            !this.state.currentVal.includes(".") && !this.state.currentVal.includes("Limit")
        ) {
            this.setState({ evaluated: false });
            if (this.state.currentVal.length > 21){
                this.maxDigitWarning();
            } else if (
                endsWithOperator.test(this.state.formula) || (this.state.currentVal === "0" && this.state.formula === "")
            ) {
                this.setState({
                    currentVal: "0.",
                    formula: this.state.formula + "0."
                });
            } else {
                this.setState({
                    currentVal: 
                    this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + ".",
                    formula: this.state.formula + "."
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
                <FormulaScreen 
                formula={this.state.formula.replace(/x/g, ".")}/>
                <ResultScreen currentValue={this.state.currentVal} />
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


class ResultScreen extends React.Component {
    render(){
        return (
            <div className="result-screen" id="display">
                {this.props.currentValue}
            </div>
        );
    }
}
class FormulaScreen extends React.Component {
    render() {
        return ( <div className="formula-screen">
            {this.props.formula}
        </div>
        );
    }
}


export default Calculator;