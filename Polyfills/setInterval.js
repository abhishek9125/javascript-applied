import createSetTimeOut from "./setTimeout";

function createInterval() {

    var intervalId = 1;
    var intervalMap = {};
    var { mySetTimeout, myClearInterval } = createSetTimeOut()

    function mySetInterval(callback, delay, ...args) {
        var id = intervalId++;

        function triggerCallback() {
            intervalMap[id] = mySetTimeout(function() {
                callback.apply(this, args);
                if(intervalMap[id]) {
                    triggerCallback();
                }
            }, delay)
        }
        triggerCallback();
        return id;
    }

    function myClearIntervalPoly(id) {
        myClearInterval(id)
        delete intervalMap[id];
    }

    return { mySetInterval, myClearIntervalPoly };

}

var { mySetInterval, myClearIntervalPoly } = createInterval();

console.log('Start')

let counter = 0;

const intervalId = mySetInterval(function() {
    console.log('Welcome to My Polyfills')
    counter++;
    if(counter > 2) {
        myClearIntervalPoly(intervalId);
    }
}, 1000)

console.log('End')