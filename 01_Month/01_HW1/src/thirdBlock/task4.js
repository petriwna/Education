//4.	Найти индекс максимального элемента массива
module.exports = indexMaxArray;

function indexMaxArray(array) {
    let max = array[0];
    let maxIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}