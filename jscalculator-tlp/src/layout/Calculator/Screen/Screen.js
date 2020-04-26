import React from 'react';

import ResultScreen from './ResultScreen/ResultScreen';
import FormulaScreen from './FormulaScreen/FormulaScreen';

const screen = (props) => (
    <section className="screen">
        <ResultScreen>{props.currentVal}</ResultScreen>
        <FormulaScreen>{props.formula}</FormulaScreen> 
    </section>
);

export default screen;