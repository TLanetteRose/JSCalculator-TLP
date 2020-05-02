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
        };
        this.handleNumbers = this.handleNumbers.bind(this);
        this.initialize = this.initialize.bind(this);
        this.handleOperators = this.handleOperators.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.handleEqual = this.handleEqual.bind(this);
        this.handleMaxDigits = this.handleMaxDigits.bind(this);
    }

    handleMaxDigits(){
        this.setState({
            currentVal: "Limit Reached",
            prevVal: this.state.currentVal
        })
        setTimeout(() => this.setState({ currentVal: this.state.prevVal }), 1000);
    } //HandleMaxDigits

    handleEqual(e){
        const {currentVal, equation} = this.state
        let currentExp = equation
        while(endsWithOperator.test(currentExp)){
            currentExp = currentExp.slice(0, currentExp.length - 1)
        }
        // eslint-disable-next-line
        let newValue = eval(currentExp)
        this.setState({
            currentVal: newValue.toString(),
            equation: currentExp + "=" + newValue, 
            prevVal: newValue,
            solved: true
        })
        console.log(currentVal)
    } //HandleEqual

    handleNumbers(e){
        if(!this.state.currentVal.includes("Limit")){
            const val = e.target.value 
            const {currentVal, equation, solved} = this.state;
            this.setState({ solved: false });
            if(currentVal.length > 21){
                this.handleMaxDigits();
            }
            else if(solved){
                this.setState({
                    currentVal: val,
                    equation: val !== "0" ? val : ""
                })
            }
            else{
                if(currentVal === "0" || hasOperator.test(currentVal)){
                    this.setState({
                        currentVal: val,
                        equation: equation === "0" ? val : equation + val
                    })
                }
                else{
                    this.setState({
                        currentVal: currentVal + val,
                        equation: equation === "0" ? val: equation + val
                    })
                }
            }
            console.log(currentVal)
        }
    } //HandleNumbers

    handleOperators(e) {
        if(!this.state.currentVal.includes("Limit")){
            let {currentVal, equation, solved, prevVal} = this.state;
            let operate = e.target.value
            this.setState({ solved: false });
            if(currentVal === "0"){
                this.setState({
                    currentVal: operate === "+" || operate === "-" ? operate : currentVal,
                    equation: operate === "+" || operate === "-" ? operate : equation
                })
            }
            else if(solved){
                this.setState({
                    equation: prevVal + operate,
                    currentVal: operate
                })
            }
            else {
                if(currentVal.length > 21){
                    this.handleMaxDigits();
                }
                else{
                    if(!endsWithOperator.test(equation) || operate === "-"){
                        this.setState({
                            prevVal: equation,
                            equation: equation + operate,
                            currentVal: operate
                        })
                    }
                    else if(operate !== "-"){
                        while(endsWithOperator.test(prevVal)){
                            prevVal = prevVal.slice(0, prevVal.length - 1)
                        }
                        this.setState({
                            equation: prevVal + operate,
                            currentVal: operate
                        })
                    }
                }
            }
            console.log(currentVal)
        }
    } //HandleOperators

    handleDecimal(e){
        const {currentVal, equation, solved} = this.state;
        let val = e.target.value 
        if(solved){
            this.setState({
                currentVal: "0.", 
                equation: "0.",
                solved: false
            });
        }
        if(!currentVal.includes(val) && !endsWithOperator.test(equation)){
            this.setState({
                currentVal: currentVal + val,
                equation: equation + val
            })
        }
    } //HandleDecimal

    initalize(){
        this.setState({
            currentVal: "0",
            prevVal: "0", 
            equation: ""
        })
    }


    render () {
        return (
            <main className="calculator">
                <EquationScreen 
                equation={this.state.equation.replace(/x/g, ".")}/>
                <ResultScreen currentValue={this.state.currentVal} />
                <Keypad 
                    decimal={this.handleDecimal}
                    equal={this.handleEqual}
                    init={this.initialize}
                    numbers={this.handleNumbers}
                    oper={this.handleOperators}
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