//2.	Найти максимальный элемент массива
module.exports = maxArray;
function maxArray(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
}
