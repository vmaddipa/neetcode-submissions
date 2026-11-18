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
    private dfs(node: TreeNode | null): number {
        if (!node) return 0;

        const left = this.dfs(node.left);
        if (left === -1) return -1;

        const right = this.dfs(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return (1 + Math.max(right, left));
    };
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {

        return this.dfs(root) !== -1;
    }
}
