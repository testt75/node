module.exports = fib

function fib(numMax) {
    for (var fibArray = [0, 1], i = 0, j = 1, k = 0; k < numMax - 1; i = j, j = x, k++) {
        x = i + j;
        fibArray.push(x);
    }
    // alert(fibArray);
    // //alert (fibArray);
    return fibArray;
}

    