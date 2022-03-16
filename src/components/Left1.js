import React from 'react';
import Left2 from './Left2';

const Left1 = ({ count }) => {
    return (
        <div>
            <h3>Left1</h3>
            <Left2 count={count}></Left2>
        </div>
    );
};

export default Left1;