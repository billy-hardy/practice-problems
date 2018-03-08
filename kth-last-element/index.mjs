export function kthToLast(head, k) {
    let queue = [];
    while (head != null) {
        queue.push(head.val);
        head = head.next;
        if(queue.length > k) {
            queue = queue.slice(queue.length - k);
        }
    }
    return queue[0];
};
export function kthToLastSmart(head, k) {
    let left = head;
    let right = head;
    for(let i=0; i<k-1; i++) {
        right = right.next;
    }
    while (right.next) {
        left = left.next;
        right = right.next;
    }
    return left.val;
};
