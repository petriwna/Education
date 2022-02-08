//6.	Сделать реверс массива (массив в обратном направлении)
module.exports = reverseArray;

function reverseArray(array) {
    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp
    }
    return array
}