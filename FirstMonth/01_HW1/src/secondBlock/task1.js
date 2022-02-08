//1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
module.exports = firstTask;
function firstTask() {
    let sum = 0;
    let counter = 0;
    for (let num = 2; num < 100; num += 2) {
        sum = sum+num;
        counter++;
    }
    return (`${sum}, ${counter}`);
}
