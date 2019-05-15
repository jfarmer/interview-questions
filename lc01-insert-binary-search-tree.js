/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root.val >= val) {        
        root.left = (root.left === null)
            ? new TreeNode(val)
            : insertIntoBST(root.left, val)
        return root        
    } else {
        root.right = (root.right === null) 
            ? new TreeNode(val)
            : insertIntoBST(root.right, val)
        return root        
    }     
};