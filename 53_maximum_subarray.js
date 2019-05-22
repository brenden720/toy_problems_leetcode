// Given an integer array nums, find the contiguous subarray(containing at least one number) 
// which has the largest sum and return its sum.

// Example:

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and 
// conquer approach, which is more subtle.


// brute force quick solution for small arrays. fails for larger arrays
// var maxSubArray = function (nums) {
//   let resultSum = nums[0];
  
//   for (let i = 0; i < nums.length; i++) {
//     for (let k = nums.length - 1; k >= i; k--) {
//       let currentSum = nums[k];
//       for (let j = i; j < k; j++) {
//         currentSum += nums[j];
//       }
//       if (currentSum > resultSum) {
//         resultSum = currentSum;
//       }
//     }
//   }
//   return resultSum;
// };
// 
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  nums.slice(1).forEach(num => {
    if (num > currentSum) {
      currentSum = Math.max(num, currentSum + num);
    } else {
      currentSum += num;
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  });
  return maxSum;
};
