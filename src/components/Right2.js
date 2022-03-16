import React from 'react';
import Right3 from './Right3';

const Right2 = ({ onCountAdd, onCountMinus }) => {
    return (
        <div>
            <h3>Right2</h3>
            <Right3 onCountAdd={onCountAdd} onCountMinus={onCountMinus}></Right3>
        </div>
    );
};

export default Right2;