import assert from 'assert';
import {toBinaryString} from '../index.mjs';

const testCases = [{
    input: 1,
    expected: '1'
}, {
    input: 5,
    expected: '101'
}, {
    input: 12,
    expected: '1100'
}];

testCases
    .forEach(({input, expected}) => {
        const actual = toBinaryString(input);
        assert.equal(actual, expected);
    });
