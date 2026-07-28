# Approach

The approach is with three pointers pointing to the previous, current and next node to rearrange the nodes

1. So the the next receive curr.next to save the next node and don't lose conection to the first linked list
2. After that the curr.next receive the previous value to set the next node of the actual to his previous
3. Previous node receive current
4. And in the end the current node receive the next

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1) - Iteration
  O(n) - Recursive

# Leetcode Rank

- Easy

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

//- ITERATION

function reverseList(head: ListNode | null): ListNode | null {
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

//RECURSION

function reverseList(head: ListNode | null): ListNode | null {
    return reverse(null, head, head);
}

function reverse(prev: ListNode, curr: ListNode, next: ListNode) {
    if (curr == null) return prev;
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    return reverse(prev, curr, next);
}
```
