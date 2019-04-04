/**
 * a xor b === 0 iff a===b,  a xor 0 === a
 * xor satisfies commutative law
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums: number[]): number {
  return nums.reduce((a, b) => a ^ b);
};