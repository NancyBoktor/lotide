const callBack = (x) => x.stars === 2;
const findKey = function (obj, callBack) {
  for (const key in obj) {
    if (callBack(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;
