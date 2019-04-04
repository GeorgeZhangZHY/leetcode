/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums: number[]): boolean {
  const values = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (values.has(nums[i])) {
      return true;
    }
    values.add(nums[i]);
  }
  return false;
};