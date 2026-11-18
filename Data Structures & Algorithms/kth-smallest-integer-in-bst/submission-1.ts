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
    private dfs(node: TreeNode|null, arr: number[]): void{
        if(!node) return;

        this.dfs(node.left, arr);
        arr.push(node.val);
        this.dfs(node.right, arr)
        
    }
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const arr: number[] = [];
        this.dfs(root, arr);
        return arr[k-1];
    }
}
