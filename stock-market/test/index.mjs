import assert from 'assert';
import {maxProfit} from '../index.mjs';
const testCases = [
    {
        input: [10, 7, 5, 8, 11, 9],
        expected: 6
    }, {
        input: [10, 7, 5, 8, 11, 9, 1],
        expected: 6
    }, {
        input: [6, 7, 8, 9, 10],
        expected: 4
    }, {
        input: [10, 9, 8, 7],
        expected: -1
    }
];

testCases
    .forEach(({input, expected}) => {
        const actual = maxProfit(input);
        assert.equal(actual, expected);
    });
