/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {

  const hash = {}

  let max = Number.MIN_VALUE

  function helper (node) {

    if (!node) return

    hash[node.val] = ~~hash[node.val] + 1

    if (hash[node.val] > max) max = hash[node.val]

    helper(node.left)
    helper(node.right)
  }

  helper(root)

  return Object.keys(hash).reduce((acc, key) => {

    if (hash[key] === max) acc.push(parseInt(key))

    return acc

  }, [])
};
