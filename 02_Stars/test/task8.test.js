const {eightFigure, matrixToString} = require('../src/task8');

describe('eightFigure, matrixToString', () => {
    test('get figure', () => {
        expect(matrixToString(eightFigure())).toBe('  *  *  *  *  *  *  *\n' +
            '     *           *   \n' +
            '        *     *      \n' +
            '           *         \n' +
            '                     \n' +
            '                     \n' +
            '                     \n' );
    });
});

describe('eightFigure, matrixToString', () => {
    test('get test matrix', () => {
        const array = [
            ['*', '*'],
            ['*', '*']
        ]
        expect(matrixToString(array)).toBe('**\n**\n')
    })
})