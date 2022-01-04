//8.	Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
module.exports = reverseHalfArray;

function reverseHalfArray(array) {
    const firstHalf = Math.ceil(array.length / 2);
    const secondHalf = array.length - firstHalf;
    for (let i = 0; i < firstHalf; i++) {
        const temp = array[i];
        array[i] = array[secondHalf + i];
        array[secondHalf + i] = temp;
    }
    return array;
}
