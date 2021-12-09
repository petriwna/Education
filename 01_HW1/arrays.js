const arr = [11, 21, 22, 7, 36, 98, 55, 43];

//1.	Найти минимальный элемент массива
function minArray(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}

//2.	Найти максимальный элемент массива
function maxArray(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
}

//3.	Найти индекс минимального элемента массива
function indexMinArray(array) {
    let min = array[0];
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            minIndex = i;
        }
    }
    return minIndex;
}

//4.	Найти индекс максимального элемента массива 
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

//5.	Посчитать сумму элементов массива с нечетными индексами
function sumArray(array) {
    let sum = 0;
    for (let index = 1; index < array.length; index += 2) {
        sum += array[index];
    }
    return sum;
}

//6.	Сделать реверс массива (массив в обратном направлении)
function reverseArray(array) {
    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp
    }
    return array
}

//7.	Посчитать количество нечетных элементов массива
function numberOfOddEl(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0)
            counter++;
    }
    return counter;
}

//8.	Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
function reverseHalfArray(array) {
    const firstHalf = array.length / 2;
    const secondHalf = array.length - firstHalf;
    for (let i = 0; i < firstHalf; i++) {
        const temp = array[i];
        array[i] = array[secondHalf + i];
        array[secondHalf + i] = temp;
    }
    return array;
}

//9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

function selectSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        const temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

function insertSort(array) {
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        let j = i - 1;
        while ((j > -1) && (num < array[j])) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = num;
    }
    return array;
}

//10.	Отсортировать массив (Quick, Merge, Shell, Heap)
function quickSort(array) {
    if (array.length < 2) return array;
    const pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

function shellSort(array) {
    for (let gap = Math.floor(array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < array.length; i += 1) {
            const temp = array[i];
            for (let j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }
            array[j] = temp;
        }
    }
    return array;
}
