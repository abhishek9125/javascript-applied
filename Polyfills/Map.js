Array.prototype.map = function (callBack) {

    const output = [];

    for (let i = 0; i < this.length; i++) {
        output.push(callBack(this[i], i));
    }

    return output;
}

console.log([1, 2, 3].map((e) => e * 10));