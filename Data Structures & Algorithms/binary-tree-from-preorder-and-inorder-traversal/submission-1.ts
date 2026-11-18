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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        const inOrderMapValIdx = new Map<number, number>();
        for (let i = 0; i < inorder.length; i++) {
            inOrderMapValIdx.set(inorder[i], i);
        }

        let preorderIndex = 0;
        const dfs = (left: number, right: number): TreeNode | null => {
            if (left > right) {
                return null;
            }
            const rootVal = preorder[preorderIndex];
            preorderIndex++;

            const root = new TreeNode(rootVal);
            const mid = inOrderMapValIdx.get(rootVal)!;
            root.left = dfs(left, mid - 1);
            root.right = dfs(mid + 1, right);

            return root;
        };

        return dfs(0, inorder.length - 1);

    }
}
