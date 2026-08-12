function goodNodes(root: TreeNode | null): number {
    let counter = 0;
    function findNodes(root: TreeNode | null, max: number) {
        if (root == null) return;
        if (max <= root.val) {
            max = root.val;
            counter++;
        }

        if (root.left) findNodes(root.left, max);
        if (root.right) findNodes(root.right, max);
    }

    findNodes(root, -Number.MAX_VALUE);
    return counter;
}
