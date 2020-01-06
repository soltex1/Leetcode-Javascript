/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {

  const prefix = [0]

  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = arr[i] ^ prefix[i]
  }

  return queries.map(([left , right]) => prefix[left] ^ prefix[right + 1])
};
