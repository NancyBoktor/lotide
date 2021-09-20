// import assertArraysEqual function.
const assertArraysEqual = require("../assertArraysEqual");
// import middle function.
const middle = require("../middle");
// test
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
