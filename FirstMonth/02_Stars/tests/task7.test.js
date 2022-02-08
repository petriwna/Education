const {sevenFigure, matrixToString} = require('../src/task7');

describe('sevenFigure, matrixToString', () => {
    test('get figure', () => {
        expect(matrixToString(sevenFigure())).toBe('  *                 *\n' +
            '     *           *   \n' +
            '        *     *      \n' +
            '           *         \n' +
            '        *     *      \n' +
            '     *           *   \n' +
            '  *                 *\n');
    });
});

describe('sevenFigure, matrixToString', () => {
    test('get tests matrix', () => {
        const array = [
            ['*', '*'],
            ['*', '*']
        ]
        expect(matrixToString(array)).toBe('**\n**\n')
    })
})