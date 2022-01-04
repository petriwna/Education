const arr =
    [
        ['   ', '   ', '   ', '   ', '   ', '   ', '   '],
        ['   ', '   ', '   ', '   ', '   ', '   ', '   '],
        ['   ', '   ', '   ', '   ', '   ', '   ', '   '],
        ['   ', '   ', '   ', '   ', '   ', '   ', '   '],
        ['   ', '   ', '   ', '   ', '   ', '   ', '   '],
        ['   ', '   ', '   ', '   ', '   ', '   ', '   '],
        ['   ', '   ', '   ', '   ', '   ', '   ', '   ']
    ];

const size = 7;

function printMatrix(arr) {
    arr.forEach(i => {
            let str = '';
            i.forEach(j => {
                str = str + j
            })
            console.log(str);
        }
    )
}

function nineFigure() {
    arr[size - 1].fill('  *');
    for (let i = Math.floor(size / 2); i < size; i++) {
        arr[i][i] = '  *';
        if (i !== Math.floor(size / 2))
            arr[i][size - i - 1] = ' *';
    }
    printMatrix(arr);
}