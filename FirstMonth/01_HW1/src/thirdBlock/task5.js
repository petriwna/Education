//5.	Посчитать сумму элементов массива с нечетными индексами
module.exports = sumArray;

function sumArray(array) {
    let sum = 0;
    for (let index = 1; index < array.length; index += 2) {
        sum += array[index];
    }
    return sum;
}