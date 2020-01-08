/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

  const response = []

  function helper(node, path) {

    if (!node) return

    if (path === "") path = node.val.toString()
    else path += "->" + node.val.toString()

    if (!node.left && !node.right) {
      response.push(path)
    }
    else {
      helper(node.left, path)
      helper(node.right, path)
    }

  }

  helper(root, "")

  return response
};
