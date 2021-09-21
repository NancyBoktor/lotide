const middle = function (array) {
  let middleArray = [];
  const length = array.length;
  if (length < 3) {
    middleArray = [];
  }
  length % 2 === 0
    ? (middleArray = [array[length / 2 - 1], array[length / 2]])
    : (middleArray = [array[(length - 1) / 2]]);
  return middleArray;
};

module.exports = middle;
