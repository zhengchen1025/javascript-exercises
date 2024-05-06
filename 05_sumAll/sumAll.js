const sumAll = function (startNum, endNum) {
  let sum = 0;
  if (startNum > endNum) {
    let temp = startNum;
    startNum = endNum;
    endNum = temp;
  }

  if (startNum < 0 || endNum < 0) {
    return "ERROR"
  }

  if (typeof startNum !== 'number' || typeof endNum !== 'number') {
    return 'ERROR'
  }

  for (let i = startNum; i < endNum + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
