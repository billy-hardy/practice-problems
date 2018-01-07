export class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

export class BinaryNode {
    constructor(value) {
        this.node = new Node(value);
        this.node.children = [null, null];
    }
    get value() {
        return this.node.value;
    }
    set value(value) {
        this.node.value = value;
    }
    get left() {
        return this.node.children[0];
    }
    set left(left) {
        this.node.children.splice(0, 1, left);
    }
    get right() {
        return this.node.children[1];
    }
    set right(right) {
        this.node.children.splice(1, 1, right);
    }
    toInfix() {
        let ret = '';
        if (this.left != null) {
            ret += this.left.toInfix();
        }
        if (this.value != null) {
            ret += this.value;
        }
        if (this.right != null) {
            ret += this.right.toInfix();
        }
        return ret;
    }
    toPrefix() {
        let ret = '';
        if (this.value != null) {
            ret += this.value;
        }
        if (this.left != null) {
            ret += this.left.toInfix();
        }
        if (this.right != null) {
            ret += this.right.toInfix();
        }
        return ret;
    }
    toPostfix() {
        let ret = '';
        if (this.left != null) {
            ret += this.left.toInfix();
        }
        if (this.right != null) {
            ret += this.right.toInfix();
        }
        if (this.value != null) {
            ret += this.value;
        }
        return ret;
    }
}
