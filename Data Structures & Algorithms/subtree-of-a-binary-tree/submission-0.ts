/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
     isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // Both empty: they match
    if (!p && !q) return true;

    // One empty, or values differ: they don't match
    if (!p || !q || p.val !== q.val) return false;

    // Compare left and right subtrees
    return (
        this.isSameTree(p.left, q.left) &&
        this.isSameTree(p.right, q.right)
    );
}
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if(!subRoot) return true;

        if(!root) return false;
        if (this.isSameTree(root, subRoot)) return true;

        return (
        this.isSubtree(root.left, subRoot) ||
        this.isSubtree(root.right, subRoot)
    );

    }
}
