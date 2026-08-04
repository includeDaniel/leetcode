# Approach

This approach it's about to split the linked list in the middle and reverse the second part of the linked list and after that you just need to iterate again adding the two heads and checking if are the max value until this iteration.

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

# Leetcode Rank

- Medium

# Code

```typescript []
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function pairSum(head: ListNode | null): number {
    let fast = head,
        slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let prev = null,
        next = slow;
    while (next) {
        next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    let max = 0;
    while (prev) {
        let current = prev.val + head.val;
        if (current > max) max = current;
        prev = prev.next;
        head = head.next;
    }
    return max;
}
```
