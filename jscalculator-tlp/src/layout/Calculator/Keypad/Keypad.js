import React from 'react';

import KeypadRow from './KeypadRow/KeypadRow';
/*import Button from '../../../components/Button/Button';
import LargeButton from '../../../components/Button/LargeButton/LargeButton';*/

class Keypad extends React.Component  {
    render(){
    return (
        <section className="keypad"> 
            {/* row #1 */ } 
            <KeypadRow >
                <button id="seven"
                className="btn"
                    onClick={this.props.numbers} value="7">7</button> 
                <button id="eight" className="btn"
                    onClick={this.props.numbers} value="8">8</button> 
                <button id="nine" className="btn"
                     onClick={this.props.numbers} value="9"> 9 </button> 
                <button id="add" className="btn"
                    type="operator"
                    onClick={this.props.operators} value="+"> + </button> 
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
                    onClick={this.props.operators}>-</button> 
            </KeypadRow> 
            {/* row #3 */ } 
            <KeypadRow>
                <button id="one" className="btn"
                    onClick={this.props.number} value="1">1</button> 
                <button id="two" className="btn"
                    onClick={this.props.numbers} value="2">2</button> 
                <button id="three" className="btn"
                     onClick={this.props.numbers} value="3">3</button> 
                <button id="multiply" className="btn" type="operator"
                     onClick={this.props.operators} value="*">*</button> 
            </KeypadRow> 
            {/* row #4 */ } 
            <KeypadRow>
                <button id="zero" className="btn"
                    onClick={this.props.number} value="0">0</button> 
                <button id="decimal" className="btn"
                    onClick={this.props.decimal} value=".">.</button> 
                <button id="percent" className="btn"
                    onClick={this.props.operators} value="%">%</button> 
                <button id="divide" className="btn"
                    onClick={this.props.operators} value="/">/</button> 
            </KeypadRow> 
            {/* row #5 */ } 
            <KeypadRow>
                <button id="clear" classname="btn btn--large"
                    onClick={this.props.initialize} value="C">C</button> 
                <button id="equals" className="btn btn--large"
                    onClick={this.props.evaluate} value="="> = </button> 
            </KeypadRow> 
        </section>

        );
    }
}
    


export default Keypad;