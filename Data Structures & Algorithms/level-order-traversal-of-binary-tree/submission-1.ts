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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const result: number[][] = [];

        if(!root) return result;
        const q: TreeNode[] =[root];
        let head= 0;

        while(head < q.length){
            const levelSize = q.length - head;
            const curr: number[] = [];
            for(let i=0; i<levelSize;i++){
                const node = q[head++]!;
                curr.push(node.val);

                if(node.left) q.push(node.left);
                if(node.right) q.push(node.right);

            }
            result.push(curr);
           
        }
        return result;
        

    }
}
