import {Stack} from '../stack/index.mjs';

export class Queue {
    constructor() {
        this.data = new Stack();
        this.tempStack = new Stack();
    }
    get size() {
        return this.data.size;
    }
    enqueue(val) {
        while (this.data.size > 0) {
            this.tempStack.push(this.data.pop());
        }
        this.data.push(val);
        while (this.tempStack.size > 0) {
            this.data.push(this.tempStack.pop());
        }
    }
    dequeue() {
        return this.data.pop();
    }
}
