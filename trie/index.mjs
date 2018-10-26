export class Trie {
    constructor(value) {
        this.value = value;
        this.children = [];
        this.count = 0;
    }

    add(word) {
        if(word.length === 1) {
            this.count++;
            return;
        }
        for(const curr of this.children) {
            if(curr.value === word[1]) {
                curr.add(word.slice(1));
            }
        }
    }

}

export class TrieArray {
    constructor() {
        this.array = [new Node()];
    }
    add(word) {
        const root = this.array[0];
        while(true) {

        }
    }
    contains(word) {
        let currLetter = 0;
        const currNode = 0;
        while(currNode !== undefined) {
            const node = this.array[currNode];
            if(word.length <= currLetter) {
                return node.count !== 0;
            }
            if(word[currLetter] === node.value) {
                currLetter++;
                currNode = node.firstChild;
            }
            else {
                currNode = node.next;
            }
        }
    }
        
}

export class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
        this.firstChild = undefined;
    }
}
