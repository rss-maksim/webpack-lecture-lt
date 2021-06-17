// import { tail } from 'lodash';
import tail from 'lodash/tail';

export const sum = (a, b) => {
    console.log('SUM function');
    return a + b;
}

export const subtract = (a, b) => {
    console.log('SUBTRACT function');
    return a - b;
}

export const getTail = arr => tail(arr);
