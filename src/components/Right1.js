import React from 'react';
import Right2 from './Right2';

const Right1 = ({ onCountAdd, onCountMinus }) => {
    return (
        <div>
            <h3>Right1</h3>
            <Right2 onCountAdd={onCountAdd} onCountMinus={onCountMinus}></Right2>
        </div>
    );
};

export default Right1;