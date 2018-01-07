import assert from 'assert';
import {addToNumber} from '../index.mjs';

const testCases = [{
    input: {
        array: [1, 2, 3],
        number: 4
    },
    expected: [1, 3]
}, {
    input: {
        array: [1, 4, 2, 5],
        number: 6
    },
    expected: [4, 2]
}, {
    input: {
        array: [1, 2, 3],
        number: 20
    },
    expected: []
}];

testCases
    .forEach(({input, expected}) => {
        const actual = addToNumber(input.array, input.number);
        assert.equal(actual.length, expected.length);
        for (let i=0; i< actual.length; i++) {
            assert.equal(actual[i], expected[i]);
        }
    });
