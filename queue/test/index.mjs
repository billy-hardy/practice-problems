import assert from 'assert';
import {Queue} from '../index.mjs';

const testCases = [{
    input: [1, 2, 3],
    expected: [1, 2, 3],
}, {
    input: [3, 6, 1, 0],
    expected: [3, 6, 1, 0],
}]
.map(({input, expected}) => {
    const queue = new Queue();
    input.forEach((val) => queue.enqueue(val));
    return {
        input: queue,
        expected
    };
});


testCases
    .forEach(({input, expected}) => {
        const queue = input;
        let i = 0;
        while (queue.size > 0) {
            const actual = queue.dequeue();
            assert.equal(actual, expected[i]);
            i++;
        }
    });
