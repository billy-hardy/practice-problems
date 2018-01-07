import assert from 'assert';
import '../../flatMap/index.mjs';
import {Stack} from '../index.mjs';
import {StackBadPushPerf} from '../by-queue.mjs';
import {StackBadPopPerf} from '../by-queue.mjs';

const testCases = [{
    input: [1, 2, 3],
    expected: [3, 2, 1]
}, {
    input: [3, 6, 1, 0],
    expected: [0, 1, 6, 3]
}]
    .flatMap(({input, expected}) => {
        return [
            new Stack(),
            new StackBadPushPerf(),
            new StackBadPopPerf()
        ]
            .map((stack) => {
                input.forEach((val) => stack.push(val));
                return {
                    input: stack,
                    expected
                };
            });
    });


testCases
    .forEach(({input, expected}) => {
        const stack = input;
        let i = 0;
        while (stack.size > 0) {
            const actual = stack.pop();
            assert.equal(actual, expected[i]);
            i++;
        }
    });
