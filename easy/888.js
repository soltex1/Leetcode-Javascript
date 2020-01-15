/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {

  let sumA = A.reduce((acc, val) => acc + val, 0)
  let sumB = B.reduce((acc, val) => acc + val, 0)

  for (let i = 0; i < A.length; i++) {

    for (let j = 0; j < B.length; j++) {
      let copySumA = sumA
      let copySumB = sumB

      copySumA = copySumA - A[i] + B[j]
      copySumB = copySumB - B[j] + A[i]

      if (copySumA === copySumB) return [A[i] , B[j]]
    }
  }
};


// another version much faster using map

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {

  let sumA = A.reduce((acc, val) => acc + val, 0)
  let sumB = B.reduce((acc, val) => acc + val, 0)

  let setB = new Set()

  const diff = (sumB - sumA) / 2

  for (let j = 0; j < B.length; j++) {
    setB.add(B[j])
  }


  for (let i = 0; i < A.length; i++) {
      if (setB.has(A[i] + diff)) return [A[i], A[i] + diff]
  }
};
