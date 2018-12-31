// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length - 1; i++) {
//       for (let q = i + 1; q < nums.length; q++){
//         if (nums[i] + nums[q] === target) {
//           return [i, q];
//         }
//       }
//     }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const reverseMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (reverseMap[complement] !== undefined) {
      return [reverseMap[complement], i];
    }
    reverseMap[nums[i]] = i;
  }
};
