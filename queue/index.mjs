import {UnaryNode} from '../list/index.mjs';

export class Queue {
    constructor() {
        this.head = new UnaryNode();
        this.size = 0;
    }
    get last() {
        let curr = this.head;
        while (curr != null && curr.next != null) {
            curr = curr.next;
        }
        return curr;
    }
    enqueue(val) {
        this.last.next = new UnaryNode(val);
        this.size++;
    }
    dequeue() {
        if(this.head.next == null) {
            throw new Error("List empty");
        }
        const ret = this.head.next.value;
        this.head.next = this.head.next.next;
        this.size--;
        return ret;
    }
    peek() {
        return this.head.next && this.head.next.value;
    }
}
