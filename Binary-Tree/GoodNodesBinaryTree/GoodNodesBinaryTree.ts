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
