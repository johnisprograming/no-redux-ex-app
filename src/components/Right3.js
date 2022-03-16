import React from 'react';

const Right3 = ({ onCountAdd, onCountMinus }) => {
    return (
        <div>
            <h3>Right3</h3>
            <button onClick={onCountMinus}>-</button> &nbsp;
            <button onClick={onCountAdd}>+</button>
        </div>
    );
};

export default Right3;