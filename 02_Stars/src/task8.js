
function eightFigure() {
    arr[0].fill('  *');
    for (let i = 0; i < size / 2; i++) {
        arr[i][i] = '  *'
        arr[i][size - 1 - i] = '  *'
    }
    printMatrix(arr);
}

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
