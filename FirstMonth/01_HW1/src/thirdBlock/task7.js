//7.	Посчитать количество нечетных элементов массива
module.exports = numberOfOddEl;

function numberOfOddEl(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0)
            counter++;
    }
    return counter;
}