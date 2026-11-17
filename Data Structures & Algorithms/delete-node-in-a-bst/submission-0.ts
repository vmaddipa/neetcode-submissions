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
    minNode(root: TreeNode){
        let curr = root;
        while(root.left){
            curr=root.left;
            root=curr;
        }
        return curr;
    }
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root: TreeNode | null, key: number): TreeNode {
        if(!root){
            return null;
        }
        if(root.val<key){
            root.right = this.deleteNode(root.right, key);
        } else if(
            root.val>key
        ){
            root.left = this.deleteNode(root.left, key);
        } else {
            if(!root.left){
               return root.right;
            } else if (!root.right){
                return root.left;
            } else {
                let minNode = this.minNode(root.right);
                root.val = minNode.val;
                root.right = this.deleteNode(root.right, minNode.val);
            }
        }
  return root;

    }
}
