/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums: number[]): boolean {
  // 
  let currentHead = 0, nextHead, index;
  do {
    index = currentHead + nums[currentHead];

  }
};