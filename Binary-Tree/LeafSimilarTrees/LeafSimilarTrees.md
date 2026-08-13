# Approach

Basically you use recursion to iterate over the nodes and if a node doesn't have a left and right node it's because is a leaf, so you store the leaf in a array and then in the end you compare these two array and see if they are equal, the way to do that in TS is transform them in strings

# Complexity

- Time complexity:
  O(n + m)

- Space complexity:
  O(n + m)

# Leetcode Rank

- Easy

# Code

```ts
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let leaf1: number[] = [],
        leaf2: number[] = [];
    function getLeaf(root: TreeNode | null, result: number[]) {
        if (root?.left == null && root?.right == null) {
            result.push(root!.val);
            return;
        }
        if (root?.left) getLeaf(root?.left, result);
        if (root?.right) getLeaf(root?.right, result);
    }

    getLeaf(root1, leaf1);
    getLeaf(root2, leaf2);

    return JSON.stringify(leaf1) == JSON.stringify(leaf2);
}
```
