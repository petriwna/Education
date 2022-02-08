//5.	Посчитать сумму цифр заданного числа
module.exports = fifthTask;

function fifthTask(number) {
    let result = 0;

    while (number !== 0) {
        result = result + number % 10;
        number = Math.floor(number / 10);
    }
    return result;
}