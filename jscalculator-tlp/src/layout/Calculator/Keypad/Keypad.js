import React from 'react';

import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';
import LargeButton from '../../../components/Button/LargeButton/LargeButton';

class Keypad extends React.Component {
    render () {
        return (
            <section className="keypad"> 
                {/* row #1 */ } 
                <KeypadRow >
                    <Button id="seven"
                        onClick={this.props.numbers} value="7">7</Button> 
                    <Button id="eight"
                        onClick = {this.props.numbers} value="8">8</Button> 
                    <Button id="nine"
                        onClick={this.props.numbers} value="9"> 9 </Button> 
                    <Button id="add"
                        type="operator"
                        onClick={this.props.operators} value="+"> + </Button> 
                </KeypadRow> 
                {/* row #2 */ } 
                <KeypadRow>
                    <Button id="four"
                        onClick={this.props.numbers} value="4">4</Button> 
                    <Button id="five"
                        onClick={this.props.numbers} value="5">5</Button> 
                    <Button id="six"
                        onClick={this.props.numbers} value="6">6</Button> 
                    <Button id="subtract" type="operator"
                        onClick={this.props.operators}>-</Button> 
                </KeypadRow> 
                {/* row #3 */ } 
                <KeypadRow>
                    <Button id="one"
                        onClick={this.props.numbers} value="1">1</Button> 
                    <Button id="two"
                        onClick={this.props.numbers} value="2">2</Button> 
                    <Button id="three"
                        onClick={this.props.numbers} value="3">9</Button> 
                    <Button id="multiply" type="operator"
                        onClick={this.props.operators} value="*">*</Button> 
                </KeypadRow> 
                {/* row #4 */ } 
                <KeypadRow>
                    <Button id="zero"
                        onClick={this.props.numbers} value="0">0</Button> 
                    <Button id="decimal"
                        onClick={this.props.decimal} value=".">.</Button> 
                    <Button id="percent"
                        onClick={this.props.operator} value="%">%</Button> 
                    <Button id="divide"
                        onClick={this.props.operator} value="/">/</Button> 
                </KeypadRow> 
                {/* row #5 */ } 
                <KeypadRow>
                    <LargeButton id="clear" 
                        onClick={this.props.initialize} value="C">C</LargeButton> 
                    <LargeButton id="equals"
                        onClick={this.props.evaluate} value="="> = </LargeButton> 
                </KeypadRow> 
            </section>
        );
    }
}

export default Keypad;