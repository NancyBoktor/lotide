// calling equallArray to compair the object's values of arrays.

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// calling eqObjects function
const eqObjects = function (object1, object2) {
  let result = true;

  const obj1 = Object.keys(object1);

  const obj2 = Object.keys(object2);

  if (obj1.length !== obj2.length) {
    return false;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      result = eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(
      `✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

//Testing for the code before exports
//const cd = { c: "1", d: ["2", 3] };
//const dc = { d: ["2", 3], c: "1" };

//assertObjectsEqual(cd, dc);
module.exports = assertObjectsEqual;
