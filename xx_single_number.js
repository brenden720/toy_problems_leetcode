// Given a non - empty array of integers, every element appears twice except for one.Find that single one.

//   Note:

// Your algorithm should have a linear runtime complexity.Could you implement it without using extra memory ?

//   Example 1:

// Input: [2, 2, 1]
// Output: 1
// Example 2:

// Input: [4, 1, 2, 1, 2]
// Output: 4

var singleNumber = function (nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }

  for (let key in hash) {
    if (hash[key] === 1) {
      return parseInt(key);
    }
  }
};