/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {

  const minBestValue = Math.round(target / arr.length)

  let bestValue = Number.MAX_VALUE
  let minAbs = Number.MAX_VALUE

  for (let i = minBestValue; i < target; i++) {

    let newArr = [...arr]

    let currentSum = 0
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] > i) currentSum += i
      else  currentSum += newArr[j]
    }

    if (Math.abs(target - currentSum) < minAbs) {
      bestValue = i
      minAbs = Math.abs(target - currentSum)
    }
    else {
      return bestValue
    }
  }

  return bestValue
};
