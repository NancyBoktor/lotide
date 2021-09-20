// import from assertArraysEqual
const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);
