/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  return sumOnRange(root, L, R) 
};

const sumOnRange = function (root, L, R, acc=0) {
  if (root === null) {
    return acc
  }
  
  if (root.val >= L && root.val <= R) {
    acc += root.val
  }
  
  acc = sumOnRange(root.left, L, R, acc)
  acc = sumOnRange(root.right, L, R, acc)
  
  return acc
}