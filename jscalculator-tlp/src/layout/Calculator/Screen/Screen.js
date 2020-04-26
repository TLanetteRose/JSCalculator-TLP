import React from 'react';

import ResultScreen from './ResultScreen/ResultScreen';
import FormulaScreen from './FormulaScreen/FormulaScreen';

const screen = () => (
    <section className="screen">
        <ResultScreen />
        <FormulaScreen />
    </section>
);

export default screen;