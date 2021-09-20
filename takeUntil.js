// import from assertArraysEqual file.
const assertArraysEqual = require("./assertArraysEqual");
const callBack = (x) => (x === "," ? true : false);

const takeUntil = (data, callBack) => {
  let i = 0;
  let answer = [];
  let include = true;
  while (include && i < data.length) {
    include = !callBack(data[i]);
    if (include) answer.push(data[i]);
    i++;
  }
  return answer;
};

assertArraysEqual(
  takeUntil(
    ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"],
    callBack
  ),
  ["I've", "been", "to", "Hollywood"]
);
