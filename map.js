const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};
// import
const assertArraysEqual = require("./assertArraysEqual");
const results1 = map(words, (word) => word[0]);
console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));
