Array.prototype.filter = function (callBack) {
    const output = [];

    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i], i)) {
            output.push(this[i]);
        }
    }

    return output;
}

console.log([1, 2, 3, 4, 5, 6].filter((e) => e % 2 === 0));