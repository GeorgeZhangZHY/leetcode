/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums: number[], k: number) {
  const steps = k % nums.length;
  let tail = nums.splice(nums.length - steps);
  nums.unshift(...tail);
};