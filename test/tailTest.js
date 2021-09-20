// import assertEqual function.
const assertEqual = require("../assertEqual");
// import tail function.
const tail = require("../tail");
// test
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result[0], "Hello");
