function handleNum(num, evenCallback, oddCallback) {
    if (num % 2 === 0) {
        evenCallback(num);
    } else {
        oddCallback(num);
    }
}
function handleEven(num) {
    console.log(`number is even.`);
}
function handleOdd(num) {
    console.log(`number is odd.`);
}
handleNum(7, handleEven, handleOdd);