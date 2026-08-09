# Approach

Basically you use recursion to iterate through the binary tree adding 1 to the sum in every layer

# Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Leetcode Rank

- Easy

# Code

```ts
function maxDepth(root: TreeNode | null): number {
    if (root == null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
```
