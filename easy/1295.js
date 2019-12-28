/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {

  if (!nums) return 0

  const hash = {}

  let total = 0

  for (let i = 0; i < nums.length; i++) {

    const n = nums[i].toString().length

    if (hash[n]) {
      total +=1
    }
    else if (n % 2 === 0) {
      hash[n] = true
      total +=1
    }
  }

  return total
};
