import assert from 'assert';
import {Node, NodeUtils} from '../../linked-list/index.mjs';
import {kthToLast, kthToLastSmart} from '../index.mjs';
const testCases = [
    {
        input: {
            array: [1, 2, 3, 4],
            k: 1
        },
        expected: 4
    }, {
        input: {
            array: [1, 2, 3, 4],
            k: 3
        },
        expected: 2
    }
];

[kthToLast, kthToLastSmart]
    .forEach((kthToLast) => {
        testCases
            .forEach(({input, expected}) => {
                const actual = kthToLast(NodeUtils.asLinkedList(...input.array), input.k);
                assert.equal(actual, expected);
            });
    });
