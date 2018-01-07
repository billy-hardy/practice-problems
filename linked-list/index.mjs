export class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

export class NodeUtils {
    static asLinkedList(...vals) {
        const nodes = vals.map((val) => new Node(val));
        for (let i=0; i<nodes.length-1; i++) {
            nodes[i].next = nodes[i+1];
        }
        return nodes[0];
    }

    static asArray(head) {
        const ret = [];
        while(head != null) {
            ret.push(head.val);
            head = head.next;
        }
        return ret;
    }

    static toString(head) {
        return asArray(head).join('');
    }
}
