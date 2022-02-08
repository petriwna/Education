//4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;
module.exports = fourthTask;

function fourthTask(n) {
    let result = 1;
    while (n) {
        result *= n--;
    }
    return result;
}