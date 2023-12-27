const dummyAPI = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

const taskArray = [dummyAPI(1000), dummyAPI(1000), dummyAPI(3000), dummyAPI(6000)];

const promiseAllPolyfill = (taskArray) => {

    return new Promise((resolve, reject) => {
        const output = [];
        taskArray.map((promise, index) => {
            promise.then((data) => {
                console.log('Data Inside Polyfill : ', data);
                output[index] = data;
                if(index == taskArray.length - 1) {
                    resolve(output);
                }
            }).catch((error) => {
                console.log('Error Inside Polyfill : ', error);
                reject(error)
            })
        })
    })

}

promiseAllPolyfill(taskArray)
.then((data) => console.log('Polyfill Promise All Output : ', data))
.catch((error) => console.log('Polyfill Promise All Error : ', error))
