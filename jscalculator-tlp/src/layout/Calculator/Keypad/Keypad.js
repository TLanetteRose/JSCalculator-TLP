import React from 'react';

import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';
import LargeButton from '../../../components/Button/LargeButton/LargeButton';

const keypad = (props) =>  (
        <section className="keypad"> 
            {/* row #1 */ } 
            <KeypadRow >
                <Button id="seven"
                    onButtonPress={props.onButtonPress} value="7">7</Button> 
                <Button id="eight"
                    onButtonPress = {props.onButtonPress} value="8">8</Button> 
                <Button id="nine"
                     onButtonPress={props.onButtonPress} value="9"> 9 </Button> 
                <Button id="add"
                    type="operator"
                    onButtonPress={props.onButtonPress} value="+"> + </Button> 
            </KeypadRow> 
            {/* row #2 */ } 
            <KeypadRow>
                <Button id="four"
                    onButtonPress={props.onButtonPress} value="4">4</Button> 
                <Button id="five"
                    onButtonPress={props.onButtonPress} value="5">5</Button> 
                <Button id="six"
                    onButtonPress={props.onButtonPress} value="6">6</Button> 
                <Button id="subtract" type="operator"
                    onButtonPress={props.onButtonPress}>-</Button> 
            </KeypadRow> 
            {/* row #3 */ } 
            <KeypadRow>
                <Button id="one"
                    onButtonPress={props.onButtonPress} value="1">1</Button> 
                <Button id="two"
                    onButtonPress={props.onButtonPress} value="2">2</Button> 
                <Button id="three"
                     onButtonPress={props.onButtonPress} value="3">9</Button> 
                <Button id="multiply" type="operator"
                     onButtonPress={props.onButtonPress} value="*">*</Button> 
            </KeypadRow> 
            {/* row #4 */ } 
            <KeypadRow>
                <Button id="zero"
                    onButtonPress={props.onButtonPress} value="0">0</Button> 
                <Button id="decimal"
                    onButtonPress={props.onButtonPress} value=".">.</Button> 
                <Button id="percent"
                    onButtonPress={props.onButtonPress} value="%">%</Button> 
                <Button id="divide"
                    onButtonPress={props.onButtonPress} value="/">/</Button> 
            </KeypadRow> 
            {/* row #5 */ } 
            <KeypadRow>
                <LargeButton id="clear" 
                    onButtonPress={props.onButtonPress} value="C">C</LargeButton> 
                <LargeButton id="equals"
                    onButtonPress={props.onButtonPress} value="="> = </LargeButton> 
            </KeypadRow> 
        </section>
    );
    


export default keypad;