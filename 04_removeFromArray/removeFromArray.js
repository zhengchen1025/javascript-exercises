const removeFromArray = function (arr) {
    let result = arr;
    for (let i = 1; i < arguments.length; i++) {
        result = result.filter(item => item !== arguments[i])
    }
  
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
