const findTheOldest = function(arr) {
    
    for (let obj of arr) {
        if (!obj.yearOfDeath) {
            obj.yearOfDeath = new Date().getFullYear();
        }
        obj.age = (obj.yearOfDeath - obj.yearOfBirth)
    }
    console.log(arr)
    arr.sort((a, b) => b.age - a.age)
    console.log(arr)
        return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
