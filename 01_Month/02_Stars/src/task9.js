module.exports = {nineFigure, matrixToString};

function nineFigure() {
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

    arr[size - 1].fill('  *');
    for (let i = Math.floor(size / 2); i < size; i++) {
        arr[i][i] = '  *';
        if (i !== Math.floor(size / 2))
            arr[i][size - i - 1] = ' *';
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