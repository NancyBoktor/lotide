// calling equallArray to compair the object's values of arrays.
//  import from eqArrays file.
const eqArrays = require("./eqArrays");

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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));
