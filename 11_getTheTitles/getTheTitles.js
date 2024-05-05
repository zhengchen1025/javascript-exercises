const getTheTitles = function(arr) {
    let result = [];
    for (obj of arr) {
        result.push(obj.title)
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
