/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const values = new Set();
  for (let i = 0; i < nums.length; i++){
    if (values.has(nums[i])) {
      return true;
    }
    values.add(nums[i]);
  }
  return false;
};