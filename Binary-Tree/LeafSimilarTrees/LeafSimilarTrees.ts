class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

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
