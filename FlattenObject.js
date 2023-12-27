function flattenObject(obj) {

    const result = {};

    const generateFlatObjects = (obj, parent) => {
        for(let element in obj) {
            const newParent = parent + element;
            const value = obj[element];
            if(typeof value == 'object') {
                generateFlatObjects(value, newParent + ".");
            } else {
                result[newParent] = value;
            }
        }
    }

    generateFlatObjects(obj, "");

    return result;
}

const obj = {
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
         L: 56
      },
      Q: [1, 2]
     }   
  };

console.log(flattenObject(obj))