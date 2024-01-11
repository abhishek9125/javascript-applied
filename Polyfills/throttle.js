
const throttle = function(callback, delay) {

    let shouldExecute = true;

    return function(...args) {
        shouldExecute && callback(...args);
        shouldExecute = false;
        setTimeout(() => {
            shouldExecute = true;
        }, delay)
    }
}