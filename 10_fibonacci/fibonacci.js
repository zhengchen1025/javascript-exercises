const fibonacci = function(idx) {
    let fibo = [1, 1];
    if (typeof(idx) === 'string') {
        return fibonacci(parseInt(idx))
    }
    if (idx === 0 ) {
        return 0
    }
    else if (idx < 0) {
        return 'OOPS'
    }
    else {
        
    for (let i = 2; i < idx + 1; i++) {
            fibo.push(fibo[i - 2] + fibo[i - 1])
        }
    }
    console.log(fibo)
    return fibo[idx-1];
};

// Do not edit below this line
module.exports = fibonacci;
