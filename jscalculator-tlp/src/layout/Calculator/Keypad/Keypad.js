import React from 'react';

import KeypadRow from './KeypadRow/KeypadRow';
import LargeButton from '../../../components/Button/LargeButton/LargeButton';

class Keypad extends React.Component  {
    render(){
    return (
        <section className="keypad"> 
            {/* row #1 */ } 
            <KeypadRow>
                <button id="seven"
                className="btn"
                    onClick={this.props.numbers} value="7">7</button> 
                <button id="eight" className="btn"
                    onClick={this.props.numbers} value="8">8</button> 
                <button id="nine" className="btn"
                     onClick={this.props.numbers} value="9"> 9 </button> 
                <button id="add" className="btn"
                    type="operator"
                    onClick={this.props.oper} value="+"> + </button> 
            </KeypadRow> 
            {/* row #2 */ } 
            <KeypadRow>
                <button id="four" className="btn"
                    onClick={this.props.numbers} value="4">4</button> 
                <button id="five" className="btn"
                    onClick={this.props.numbers} value="5">5</button> 
                <button id="six" className="btn"
                    onClick={this.props.numbers} value="6">6</button> 
                <button id="subtract" className="btn" type="operator"
                    onClick={this.props.oper} value="-"> - </button> 
            </KeypadRow> 
            {/* row #3 */ } 
            <KeypadRow>
                <button id="one" className="btn"
                    onClick={this.props.numbers} value="1">1</button> 
                <button id="two" className="btn"
                    onClick={this.props.numbers} value="2">2</button> 
                <button id="three" className="btn"
                     onClick={this.props.numbers} value="3">3</button> 
                <button id="multiply" className="btn" type="operator"
                     onClick={this.props.oper} value="*">*</button> 
            </KeypadRow> 
            {/* row #4 */ } 
            <KeypadRow>
                <button id="zero" className="btn"
                    onClick={this.props.numbers} value="0">0</button> 
                <button id="decimal" className="btn"
                    onClick={this.props.decimal} value=".">.</button> 
                <button id="equals" className="btn"
                    onClick={this.props.equal} value="=">=</button> 
                <button id="divide" className="btn"
                    onClick={this.props.oper} value="/">/</button> 
            </KeypadRow> 
            {/* row #5 */ } 
            <KeypadRow>
                <LargeButton id="clear" className="btn--large"
                    onClick={this.props.init} value="C">C 
                    </LargeButton> 
            </KeypadRow> 
        </section>

        );
    }
}
    


export default Keypad;