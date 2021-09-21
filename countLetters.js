const countLetters = function (sentence) {
  let result = {};

  for (let item of sentence) {
    if (!result[item]) {
      for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === item && item !== " ") {
          !result[item] ? (result[item] = 1) : (result[item] += 1);
        }
      }
    }
  }
  return result;
};

module.exports = countLetters;
