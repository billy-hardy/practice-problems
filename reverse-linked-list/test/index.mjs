import assert from 'assert';
import {NodeUtils} from "../../linked-list/index.mjs";
import {reverse} from "../index.mjs";

describe(() => {
    const testCases = [
        [1, 2, 3],
        [1, 2, 3, 4],
        [1],
    ]
    .map((values) => {
        return {
            input: NodeUtils.asLinkedList(...values),
            expected: [...values].reverse()
        };
    });

    testCases
        .forEach(({input, expected}) => {
            it("should be reversed", () => {
                const actual = reverse(input);
                const actualArray = NodeUtils.asArray(actual);
                assert.equal(actualArray.length, expected.length);
                for (let i=0; i<actualArray.length; i++) {
                    assert.equal(actualArray[i], expected[i]);
                }
            });
        });
});
