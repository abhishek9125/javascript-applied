const output = []

const flattenArray = (arr) => {
    
    arr.forEach(item => {
        if(Array.isArray(item)) {
            flattenArray(item);
        } else {
            output.push(item);
        }
    })
    return output;
    // return arr.reduce((prevValue, currentValue) => {
        
    //     if(Array.isArray(currentValue)) {
    //         prevValue = prevValue.concat(flattenArray(currentValue));
    //     } else {
    //         prevValue.push(currentValue);
    //     }
        
    //     return prevValue;
    // }, [])
}

console.log(flattenArray([[[1, 1.1], 2, 3], [4, 5]]));