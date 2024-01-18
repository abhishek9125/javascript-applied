
function curry(callBack) {
    return function curriedFunc(...args) {
        console.log(`callBack.length`, callBack.length)
        console.log(`args.length`, args.length)
        if(callBack.length <= args.length) {
            return callBack(...args);
        } else {
            return function(...nextArgs) {
                return curriedFunc(...args, ...nextArgs);
            }
        }
    }
}

const sum = (a,b,c,d) => a + b + c + d;
const totalSum = curry(sum);
console.log(totalSum(1)(2)(3)(4));