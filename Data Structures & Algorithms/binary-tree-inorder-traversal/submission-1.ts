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
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root: TreeNode | null): number[] {
        const nums = [];
        const dfs = (root: TreeNode | null)=> {
        if(!root) return null;

        dfs(root.left);
        nums.push(root.val);
        dfs(root.right);
        }

        dfs(root);
        return nums;
    }
}
