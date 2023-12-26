// Polyfill for Memoize Function
// Bring Results from Cache for Same Arguments passed to a function instead of computing again.

function addNumbers(a, b, c) {
    return a + b + c;
}

const memoize = (fn) => {

    const cache = {};

    return (...args) => {
        const stringOfArgs = JSON.stringify(args);
        if(stringOfArgs in cache) {
            console.log('Fetching Results from Cache : ', cache[stringOfArgs]);
            return cache[stringOfArgs];
        } else {
            const result = fn.apply(this, args);
            console.log('Fetching Results after Computation : ', result)
            cache[stringOfArgs] = result;
            return result;
        }
    }

}

const add = memoize(addNumbers);

add(1, 2, 3);
add(1, 2, 3);