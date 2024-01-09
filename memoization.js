function addNumbers(a, b, c) {
    return a + b + c;
}

const memoize = function (callBack) {
    let cache = {};
    
    return function(...args) {
        let stringOfArgs = JSON.stringify(args);
        if(cache[stringOfArgs]) {
            console.log('Getting Result from Cache')
            return cache[stringOfArgs];
        } else {
            let result = callBack.call(this, ...args);
            console.log('Getting Result for First Time')
            cache[stringOfArgs] = result;
            return result;
        }
    }
    
}

const add = memoize(addNumbers);
console.log(add(1, 2, 3));
console.log(add(1, 2, 3));
console.log(add(4, 2, 3));
