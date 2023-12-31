export default function createSetTimeOut() {

    var timerId = 1;
    var timerMap = {};
    
    function mySetTimeout(callback, delay, ...args) {
        let id = timerId++;
        timerMap[id] = true;

        const start = Date.now();

        function triggerCallback() {
            if(!timerMap[id]) return;
            if(Date.now() > start + delay) {
                callback.apply(this, args);
            } else {
                requestIdleCallback(triggerCallback);
            }
        }
        requestIdleCallback(triggerCallback);
        return id;
    }

    function myClearInterval(id) {
        delete timerMap[id];
    }

    return { mySetTimeout, myClearInterval }
}

var { mySetTimeout, myClearInterval } = createSetTimeOut();

console.log('Start');

const myTimeout = mySetTimeout(function(name) {
    console.log('This is Set Timeout Polyfill');
    console.log('My Name is ', name);
}, 1, "Abhishek")

myClearInterval(myTimeout)

console.log('End');