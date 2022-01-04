const {nineFigure, matrixToString} = require('../src/task9');

describe('nineFigure, matrixToString', () => {
    test('get figure', () => {
        expect(matrixToString(nineFigure())).toBe('                     \n' +
            '                     \n' +
            '                     \n' +
            '           *         \n' +
            '       *     *      \n' +
            '    *           *   \n' +
            ' *  *  *  *  *  *  *\n' );
    });
});

describe('nineFigure, matrixToString', () => {
    test('get test matrix', () => {
        const array = [
            ['*', '*'],
            ['*', '*']
        ]
        expect(matrixToString(array)).toBe('**\n**\n')
    })
})