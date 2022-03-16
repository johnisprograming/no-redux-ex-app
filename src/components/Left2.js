import React from 'react';
import Left3 from './Left3';

const Left2 = ({ count }) => {
    return (
        <div>
            <h3>Left2</h3>
            <Left3 count={count}></Left3>
        </div>
    );
};

export default Left2;