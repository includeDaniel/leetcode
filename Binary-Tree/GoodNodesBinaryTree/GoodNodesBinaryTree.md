# Approach

Basically you use recursion to iterate through the binary tree checking the max value, every time that the root.val is greater or equal the max value you increment the counter by 1, because it's a DFS the algorithm will check the left side first first and then the fallback of the recursion will check the right side

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Leetcode Rank

- Medium

# Code

```ts
function goodNodes(root: TreeNode | null): number {
    let counter = 0;
    function findNodes(root: TreeNode | null, max: number) {
        if (root == null) return;
        if (max <= root.val) {
            max = root.val;
            counter++;
        }

        findNodes(root.left, max);
        findNodes(root.right, max);
    }

    findNodes(root, -Infinity);
    return counter;
}
```
