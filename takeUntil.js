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
module.exports = takeUntil;
