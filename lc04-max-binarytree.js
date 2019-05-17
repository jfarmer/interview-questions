/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  let maxIndex = 0
  let max = 0
  
  if (!nums.length) {
    return null
  }
  
  if (nums.length === 1) {
    return new TreeNode(nums.pop())
  }
  
  for (let i=0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
      maxIndex = i
    }
  }
  
  const root = new TreeNode(max)

  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1))
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex))
  
  return root
};