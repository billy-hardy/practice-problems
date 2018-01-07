import {BinaryNode} from '../tree/index.mjs';

export class BST extends BinaryNode {
    constructor(value) {
        super(value);
        this.parent = null;
    }

    find(val) {
        if (val == this.value) {
            return this;
        }
        if (val < this.value) {
            return this.left && this.left.find(val);
        }
        if (val > this.value) {
            return this.right && this.right.find(val);
        }
    }
    
    add(val) {
        if (val < this.value) {
            if (this.left == null) {
                this.left = new BST(val);
                this.left.parent = this;
            }
            else {
                this.left.add(val);
            }
        }
        if(val > this.value) {
            if (this.right == null) {
                this.right = new BST(val);
                this.right.parent = this;
            }
            else {
                this.right.add(val);
            }
        }
    }

    addAll(...vals) {
        vals.forEach((val) => this.add(val));
    }

    min() {
        return (this.left && this.left.min()) || this;
    }

    max() {
        return (this.right && this.right.min()) || this;
    }

    remove(val) {
        const node = this.find(val);
        if (node.left != null) {
            const eligible = node.left.max();
            if (eligible != null && eligible.value != null) {
                node.value = eligible.value;
                eligible.parent.right = eligible.left;
            }
        }
        else if (node.right != null) {
            const eligible = node.right.min();
            if (eligible != null && eligible.value != null) {
                node.value = eligible.value;
                eligible.parent.left = eligible.right;
            }
        }
        else {
            if (node.parent.left == node) {
                node.parent.left = null;
            }
            else {
                node.parent.right = null;
            }
        }
    }
}




