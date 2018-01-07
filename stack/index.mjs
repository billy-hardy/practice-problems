import {UnaryNode} from '../list/index.mjs';

export class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new UnaryNode(val);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    pop() {
        if (this.top == null) {
            throw new Error("Stack empty");
        }
        const ret = this.top.value;
        this.top = this.top.next;
        this.size--;
        return ret;
    }
    peek() {
        return this.top.value;
    }
}
