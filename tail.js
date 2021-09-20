// import from assertEqual file.
const assertEqual = require("./assertEqual");

let tail = function (array) {
  return array.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result[0], "Hello");
