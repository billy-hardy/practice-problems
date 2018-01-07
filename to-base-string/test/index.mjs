import assert from 'assert';
import {toBaseString} from '../index.mjs';

const testCases = [{
    input: {
        val: 9,
        base: 10,
    },
    expected: '9'
}, {
    input: {
        val: 5,
        base: 2,
    },
    expected: '101'
}, {
    input: {
        val: 144,
        base: 12,
    },
    expected: '100'
}];

testCases
    .forEach(({input, expected}) => {
        const actual = toBaseString(input.val, input.base);
        assert.equal(actual, expected);
    });
