export class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

export class UnaryNode {
    constructor(value) {
        this.node = new Node(value);
        this.node.children = [null];
    }
    get next() {
        return this.node.children[0];
    }
    set next(next) {
        this.node.children = [next];
    }
    get value() {
        return this.node.value;
    }
    set value(value) {
        this.node.value = value;
    }
}
