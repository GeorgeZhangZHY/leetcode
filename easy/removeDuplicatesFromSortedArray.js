/** naive way, tries to delete duplicated elements
 * @param {number[]} nums
 * @return {number} length
 */
// var removeDuplicates = function (nums) {
//   let deleteEnd, deleteCount = 0, hasDuplicates = false;
//   // delete backwards
//   for (let i = nums.length - 1; i > 0; i--) {
//     if (nums[i] === nums[i - 1]) {
//       if (!hasDuplicates) {
//         hasDuplicates = true;
//         deleteEnd = i;
//       }
//       deleteCount++
//     } else {
//       if (hasDuplicates) {
//         nums.splice(deleteEnd - deleteCount + 1, deleteCount);
//         hasDuplicates = false;
//         deleteCount = 0;
//       }
//     }
//   }
//   // edge case (length === 2)
//   if (hasDuplicates) {
//     nums.splice(deleteEnd - deleteCount + 1, deleteCount);
//     hasDuplicates = false;
//     deleteCount = 0;
//   }
//   return nums.length;
// };

/** effcient way, just rearrange key elements and throw away the others
 * @param {number[]} nums
 * @return {number} length
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }

  let lastValue = nums[0], nextPositon = 1;
  for (let i = 1; i < nums.length; i++){
    if (nums[i] !== lastValue) {
      lastValue = nums[nextPositon] = nums[i];
      nextPositon++;
    }
  }
  nums.splice(nextPositon);
  return nums.length;
};
