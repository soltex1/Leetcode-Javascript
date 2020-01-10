/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {

  if (!root) return root

  const queue = [root]

  let level = 0

  while (queue.length) {

    const n = Math.pow(2, level)

    for (let i = 0; i < n; i++) {

      let current = queue.shift()

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)

      if (i + 1 === n)  current.next = null
      else current.next = queue[0]
    }

    level++
  }

  return root
};
