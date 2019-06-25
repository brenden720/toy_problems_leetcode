// 937. Reorder Log Files
// Easy

// 146

// 440

// Favorite

// Share
// You have an array of logs.Each log is a space delimited string of words.

// For each log, the first word in each log is an alphanumeric identifier.Then, either:

// Each word after the identifier will consist only of lowercase letters, or;
// Each word after the identifier will consist only of digits.
// We will call these two varieties of logs letter - logs and digit - logs.It is guaranteed that each log has at least one word 
// after its identifier.

// Reorder the logs so that all of the letter - logs come before any digit - log.The letter - logs are ordered lexicographically 
// ignoring identifier, with the identifier used in case of ties.The digit - logs should be put in their original order.

// Return the final order of the logs.



//   Example 1:

// Input: ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"]
// Output: ["g1 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"]


// Note:

// 0 <= logs.length <= 100
// 3 <= logs[i].length <= 100
// logs[i] is guaranteed to have an identifier, and a word after the identifier.

var reorderLogFiles = function (logs) {
  const logArrs = logs.map(l => l.split(' '));
  const numbers = '1234567890'.split('');
  let letters = logArrs.filter(l => !numbers.includes(l[1][0]));
  const digits = logArrs.filter(l => numbers.includes(l[1][0]));

  letters = letters.map(l => {
    let [lead, ...others] = l;
    return [lead, others.join(' ')];
  })
    .sort((a, b) => {
      if (a[1] < b[1]) { return -1; }
      if (a[1] >= b[1]) { return 1; } //keep head order
      return 0;
    });

  return [
    ...letters.map(l => l.join(' ')),
    ...digits.map(l => l.join(' '))
  ];
};