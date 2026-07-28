function reverseListIteration(head: ListNode | null): ListNode | null {
    let curr = head,
        prev = null,
        next_node;
    while (curr != null) {
        next_node = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next_node;
    }
    return prev;
}
