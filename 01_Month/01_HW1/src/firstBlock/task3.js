//3.	Найти суммы только положительных из трех чисел
module.exports = thirdTask;
function thirdTask(a, b, c) {
    const num = [a, b, c];
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            sum += num[i];
        }
    }
    return sum;
}