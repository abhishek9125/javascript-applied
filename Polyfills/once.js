function addNumbers(a, b, c) {
    return a + b + c;
}

const once = function(callBack) {
    let isExecuted = false;
    
    return function(...args) {
        if(!isExecuted) {
            isExecuted = true;
            const result = callBack.call(this, ...args);
            console.log(result);
        }
        return null;
    }
}

const add = once(addNumbers);
add(1, 2, 3)
add(1, 2, 3)
add(1, 5, 3)
