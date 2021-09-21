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

module.exports = without;
