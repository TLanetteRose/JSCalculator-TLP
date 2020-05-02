import React from 'react';
import Keypad from './Keypad/Keypad';


// Variables:
// eslint-disable-next-line
const endsWithOperator = /[*+-/]$/;
const hasOperator = /[*/+-]/;


// Components 
class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentVal: "0",
            prevVal: "0",
            equation: "",
            solved: false
        }
    }


    render () {
        return (
            <main className="calculator">
                <EquationScreen 
                equation={this.state.equation.replace(/x/g, ".")}/>
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
class EquationScreen extends React.Component {
    render() {
        return ( <div className="formula-screen">
            {this.props.formula}
        </div>
        );
    }
}


export default Calculator;