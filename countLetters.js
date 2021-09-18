
// import from the assertObjectEqual file
const assertObjectsEqual = require("./assertObjectsEqual");

const countLetters = function (sentence) {
  let result = {};

  for (let item of sentence) {
    if (!result[item]) {
      for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === item && item !== " ") {
          !result[item] ? (result[item] = 1) : (result[item] += 1);
        }
      }
    }
  }
  return result;
};
console.log(
  assertObjectsEqual(countLetters("lighthouse in the house"), {
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
  })
);
