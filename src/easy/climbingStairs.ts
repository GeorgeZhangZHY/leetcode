/**
 * @param {number} n
 * @return {number}
 */
const cache: { [k: number]: number } = {};
var climbStairs = function (n: number): number {
  // c(n) = c(n-1) + c(n-2)
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (cache[n] !== undefined) {
    return cache[n];
  }
  return cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
};