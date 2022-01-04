module.exports = {eightFigure, matrixToString};


function eightFigure() {

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

    arr[0].fill('  *');
    for (let i = 0; i < size / 2; i++) {
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
console.log(matrixToString(eightFigure()));