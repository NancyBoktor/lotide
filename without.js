// import from assertArraysEqual file.
const assertArraysEqual = require("./assertArraysEqual");

const without = function (array1, array2) {
  const result = array1.filter(function (el) {
    let isExist = true;
    for (let i = 0; i < array2.length; i++) {
      if (el === array2[i]) {
        isExist = true;
      } else {
        isExist = false;
      }
    }
    return !isExist;
  });
  return result;
};

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
