# Approach

The solution lays on repointer the list nodes to his correct node, no need to delete or create anot Linked List to resolve the problem.

1. Solve the empty or one element head case by using a if structure
2. Create three pointers that two will do the odd/even iterations, so with this two pointers you are going to make the odd nodes be linked only in odd indexes and the even in even indexes.
3. The third pointer will going to storage the head of the even nodes
4. After rearrange the nodes the odd will be in the last odd index number, so you will make the last odd node receive the even_head as your next node to link the lists putting the even indexes after the odd indexes.

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(1)

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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let odd = head,
        even = head.next,
        even_head = head.next;
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = even_head;
    return head;
}
```
