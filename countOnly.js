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

module.exports = countOnly;
