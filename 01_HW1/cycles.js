//1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function firstTask() {
    let sum = 0;
    let counter = 0;
    for (let num = 2; num < 100; num += 2) {
        sum += num;
        counter++;
    }
    return sum, counter;
}

//2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function secondTask(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

//3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)!!!!!!!!!!!!!!!!!!!!
function thirdTask(num) {
    if (Number.isInteger(num)) {
        console.log(`task_3 ${num}`);
    } else {
        console.log('not Iteger');
    }
}

//4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function fourthTask(n) {
    let result = 1;
    while (n) {
        result *= n--;
    }
    return result;
}

//5.	Посчитать сумму цифр заданного числа
function fifthTask(number) {
    let result = 0;

    while (number != 0) {
        result = result + number % 10;
        number = Math.floor(number / 10);
    }
}

//6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
function reverseNumber(num) {
    const revNum = num.toString().split('').reverse().join('');
}