// 1. Если а – четное посчитать а*b, иначе а+b
module.exports = firstTask;
function firstTask(a, b) {
    let result = 0;

    if (a % 2 !== 0) {
        result = a + b;
    } else {
        result = a * b;
    }

    return result;
}