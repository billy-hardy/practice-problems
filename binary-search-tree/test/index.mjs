import assert from 'assert';
import {BST} from '../index.mjs';

function toBST(...vals) {
    const root = new BST(vals[0]);
    root.addAll(...vals.slice(1));
    return root;
}

const testCases = [{
    input: [1, 2, 3],
    expected: '123'
}, {
    input: [3, 2, 1],
    expected: '123'
}, {
    input: [3, 4, 8, 2, 1],
    expected: '12348'
}];

testCases
    .map(({input, expected}) => {
        return {
            input: toBST(...input),
            expected
        };
    })
    .forEach(({input, expected}) => {
        const actual = input.toInfix();
        assert.equal(actual, expected);
    });
