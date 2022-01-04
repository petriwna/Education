const arr = [9, 15, 1, 11, 6]
function shellSort(array) {
    for (let gap = Math.floor(array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < array.length; i += 1) {
            const temp = array[i];
            for (let j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }
            array[i] = temp;
        }
    }
    return array;
}
console.log(shellSort(arr));
