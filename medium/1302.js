/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {

  let response = 0
  let maxlevel = Number.MIN_VALUE

  function helper (node, level) {

    if (!node) return

    if (!node.left && !node.right) {

      if (level > maxlevel) {
        response = node.val
        maxlevel = level
      }
      else if (level === maxlevel) {
        response += node.val
      }
    }

    level = level + 1

    helper(node.left, level)
    helper(node.right, level)
  }

  helper(root, 0)

  return response
};
