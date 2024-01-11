const debounce = function(callBack, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callBack(...args)
        },delay)
    }
}
