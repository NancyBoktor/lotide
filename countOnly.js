// import from assertEqual file
const assertEqual = require("./assertEqual");

// loop over allItems
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const countOnly = function (allItems, itemsToCount) {
  let result = {};

  for (let item of allItems) {
    if (!result[item]) {
      for (let itemCount in itemsToCount) {
        if (itemCount === item && itemsToCount[itemCount] === true) {
          !result[item] ? (result[item] = 1) : (result[item] += 1);
        }
      }
    }
  }
  return result;
};

// different solution by looping itemsToCount first
/*const countOnly = function (allItems, itemsToCount) {
  const finalObj = {};
  for (const item in itemsToCount) {
    if (itemsToCount[item]) {
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === item) {
          // finalObj[item] = finalObj[item] ? finalObj[item]+1 : 1;
          if (finalObj[item]) {
            finalObj[item]++;
          } else {
            finalObj[item] = 1;
          }
        }
      }
    }
  }
  return finalObj;
};*/

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// Test our function
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
