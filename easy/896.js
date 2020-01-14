/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {

  let dec = false
  let inc = false

  for (let i = 0; i < A.length - 1; i++) {

    if (A[i] === A[i+1]) continue

    if (A[i] < A[i+1]) {
      if (inc) return false
      else if (!dec) dec = true
    }
    else {
      if (dec) return false
      else if (!inc) inc = true
    }
  }

  return true
};


// simpler version
var isMonotonic = function(A) {

  let dec = true
  let inc = true

  for (let i = 0; i < A.length - 1; ++i) {

    if (A[i] > A[i+1]) inc = false
    if (A[i] < A[i+1]) dec = false
  }

  return inc || dec
};
