/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

  if (!head) return true

  function helper (node, arr) {

    if (!node) return []

    arr.push(node.val)

    if (node.next) helper(node.next, arr)

    return arr
  }

  const A = helper(head, [])
  const B = [...A].reverse()

  return A.length === B.length && A.every((value, index) => value === B[index])
};
