export function reverse(head) {
    let prev = null;
    let curr = head;
    while(curr != null) {
        const oldNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = oldNext;
    }
    return prev;
}
