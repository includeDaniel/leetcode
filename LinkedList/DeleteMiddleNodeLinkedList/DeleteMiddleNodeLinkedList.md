# Approach

This approach uses three pointers, the strategy to fing the middle of the linked list was basically use one pointer that's was been increased two positions and one that's was increased just one by iteration, when the faster pointer gets in the final of the linked list naturally the other it's going to be in the middle and the third pointer is used to once we find the middle he can change the pointer to the next element and with that the middle element has been deleted.

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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (head.next == null) {
        head = null;
    } else {
        let slow = head,
            fast = head,
            prev;
        while (fast != null && fast.next !== null) {
            prev = slow;
            fast = fast.next.next;
            slow = slow.next;
        }
        prev.next = prev.next.next;
    }
    return head;
}
```
