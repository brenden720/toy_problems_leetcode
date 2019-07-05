// 6. ZigZag Conversion
// Medium

// 1081

// 3351

// Favorite

// Share
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display 
// this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

var convert = function (s, numRows) {
  let currentIndex = 0;
  let prevIndex = 0;
  let maxIndex = numRows - 1;
  let hash = {};
  let result = '';

  if (numRows === 1) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[currentIndex] !== undefined) {
      hash[currentIndex] += s[i];
    } else {
      hash[currentIndex] = s[i];
    }

    if (prevIndex <= currentIndex && currentIndex < maxIndex) {
      prevIndex = currentIndex;
      currentIndex++
    } else if (prevIndex <= currentIndex && currentIndex === maxIndex) {
      prevIndex = currentIndex;
      currentIndex--;
    } else if (prevIndex > currentIndex && currentIndex > 0) {
      prevIndex = currentIndex;
      currentIndex--;
    } else if (prevIndex > currentIndex && currentIndex === 0) {
      prevIndex = currentIndex;
      currentIndex++
    }
  }

  for (let key in hash) {
    result += hash[key];
  }
  return result;
};