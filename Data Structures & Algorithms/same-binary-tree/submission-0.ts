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
    dfs(node1: TreeNode | null, node2: TreeNode|null){
        if((!node1 && node2) || (node1 && !node2)) return false;
        if(!node1 && !node2) return true;

        if(node1.val !== node2.val) return false;

        return (this.dfs(node1.left, node2.left) &&
        this.dfs(node1.right, node2.right));
    }
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        return this.dfs(p, q);

    }
}
