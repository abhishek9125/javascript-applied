Array.prototype.reduce = function(callbackFn, accumulator) {

    if(this.length == 0 && !accumulator) {
        console.log('Empty Array with no Initial Value.')
        return null;
    }

    for(let i = 0; i < this.length; i++) {
        accumulator = accumulator ? callbackFn(accumulator, this[i], i, this) : this[i];
    }

    return accumulator;
}

console.log([1, 2, 3, 4].reduce((acc, cur) => acc + cur, 10));