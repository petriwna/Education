module.exports = {sevenFigure, matrixToString};

function sevenFigure() {

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

    for (let i = 0; i < size; i++) {
        arr[i][i] = '  *'
        arr[i][size - 1 - i] = '  *'
    }
    return arr;
}

function matrixToString(arr) {
    let result = '';

    arr.forEach(i => {
            i.forEach(j => {
                result = result + j
            });
            result = result + '\n';
        }
    );
    return result;
}