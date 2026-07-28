function reverseListRecursive(head: ListNode | null): ListNode | null {
    return reverse(null, head, head);
}

function reverse(
    prev: ListNode | null,
    curr: ListNode | null,
    next: ListNode | null,
) {
    if (curr == null) return prev;
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    return reverse(prev, curr, next);
}
