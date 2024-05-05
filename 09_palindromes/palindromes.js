const palindromes = function (str) {
    let newStr = str.toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '')
    

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] !== newStr[newStr.length - i - 1]) {
            return false;
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
