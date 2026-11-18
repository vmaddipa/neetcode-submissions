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
    diameter = 0;
    dfs(node: TreeNode|null): number{
        if(!node) return 0;

        const left = this.dfs(node.left);
        const right = this.dfs(node.right);
        this.diameter = Math.max(left+right, this.diameter);

        return 1+Math.max(left, right);
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        this.dfs(root);

        return this.diameter;
    }
}
