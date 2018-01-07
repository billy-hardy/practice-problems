import {Queue} from '../queue/index.mjs';

export class StackBadPushPerf {
    constructor() {
        this.queues = [new Queue(), new Queue()];
        this.queueWithData = 0;
    }
    get queueToAddTo() {
        return this.queues[(this.queueWithData + 1) % 2];
    }
    get queueHoldingData() {
        return this.queues[this.queueWithData];
    }
    get size() {
        return this.queueHoldingData.size;
    }
    push(val) {
        const toAddTo = this.queueToAddTo;
        toAddTo.enqueue(val);
        const toRemoveFrom = this.queueHoldingData;
        while (toRemoveFrom.peek() != null) {
            toAddTo.enqueue(toRemoveFrom.dequeue());
        }
        this.queueWithData = (this.queueWithData + 1) % 2;
    }
    pop() {
        return this.queueHoldingData.dequeue();
    }
}

export class StackBadPopPerf {
    constructor() {
        this.queues = [new Queue(), new Queue()];
        this.queueWithData = 0;
    }
    get queueToAddTo() {
        return this.queues[(this.queueWithData + 1) % 2];
    }
    get queueHoldingData() {
        return this.queues[this.queueWithData];
    }
    get size() {
        return this.queueHoldingData.size;
    }
    push(val) {
        this.queueToAddTo.enqueue(val);
    }
    pop() {
        const toRemoveFrom = this.queueToAddTo;
        const toAddTo = this.queueHoldingData;
        let curr;
        while (toRemoveFrom.size > 1) {
            toAddTo.enqueue(toRemoveFrom.dequeue());
        }
        this.queueWithData = (this.queueWithData + 1) % 2;
        return toRemoveFrom.dequeue();
    }
}
