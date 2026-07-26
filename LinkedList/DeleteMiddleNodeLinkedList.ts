class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (head!.next == null) {
        head = null;
    } else {
        let slow = head,
            fast = head,
            prev;
        while (fast != null && fast.next !== null) {
            prev = slow;
            fast = fast.next.next;
            slow = slow!.next;
        }
        prev!.next = prev!.next!.next;
    }
    return head;
}
