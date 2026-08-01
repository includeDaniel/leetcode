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
    let newList = head,
        n = 0,
        map = new Map(),
        i = -1,
        sumArray = [];
    while (newList != null) {
        n++;
        newList = newList.next;
    }
    newList = head;
    while (newList != null) {
        i++;
        map.set(i, newList.val);

        if (map.has(n - 1 - i)) {
            sumArray.push(map.get(n - 1 - i) + newList.val);
        }

        newList = newList.next;
    }
    return Math.max(...sumArray);
}
