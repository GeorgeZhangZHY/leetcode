/**
 * @param {number} num postive integer
 * @return {boolean}
 */
var isPerfectSquare = function (num: number): boolean {
  // binary search the root of f(x)=x^2-n===0
  for (let lower = 0, upper = num; lower !== upper;) {
    const middle = Math.ceil((lower + upper) / 2);
    const result = middle * middle - num;
    if (result === 0) {
      return true;
    }
    if (result < 0) {
      lower = middle;
    } else {
      upper = middle;
    }
    if (upper - lower === 1) {
      return false;
    }
  }

  // make ts happy
  return true;
};