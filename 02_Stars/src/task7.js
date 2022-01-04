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

function sevenFigure() {
    for (let i = 0; i < size; i++) {
        arr[i][i] = '  *'
        arr[i][size - 1 - i] = '  *'
    }
    printMatrix(arr)
}

sevenFigure();
