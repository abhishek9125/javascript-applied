

const split = (string, token) => {
    const output = [];

    if(token == "") return Array.from(string);

    const splitString = (str, start) => {

        if(start >= string.length) return;

        const index = str.indexOf(token);

        if(index >= 0) {
            output.push(str.substring(0, index));
            splitString(str.substring(index + token.length, str.length), index + token.length)
        } else {
            output.push(str);
        }
    }

    splitString(string, 0)
    return output;
}

console.log(split('The quick the fox jumps the lazy dog.', 'the'))

console.log(split('The quick the fox jumps the lazy dog.', ''))

console.log(split('The quick the fox jumps the lazy dog.', ' '))