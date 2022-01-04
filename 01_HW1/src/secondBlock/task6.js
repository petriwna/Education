//6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
module.exports = reverseNumber;

function reverseNumber(num) {
    return Number(num.toString().split('').reverse().join(''));
}