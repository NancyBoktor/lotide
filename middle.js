// Implement assertArraysEqual which will take in
// two arrays and console.log an appropriate message to the console.

// import from assertArraysEqual file.
const assertArraysEqual = require("./assertArraysEqual");

const middle = function (array) {
  let middleArray = [];
  const length = array.length;
  if (length < 3) {
    middleArray = [];
  }
  length % 2 === 0
    ? (middleArray = [array[length / 2 - 1], array[length / 2]])
    : (middleArray = [array[(length - 1) / 2]]);
  return middleArray;
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
