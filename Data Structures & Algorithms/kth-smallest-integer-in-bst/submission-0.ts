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
    private count = 0;

    private dfs(node: TreeNode | null, k: number): number {
        if (!node) return -1;
        
        const left = this.dfs(node.left, k);
        if(left !== -1) return left;

        this.count++;
        if(this.count===k){
            return node.val;
        }

        return this.dfs(node.right, k);
       
    }
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        return this.dfs(root, k);
    }
}
