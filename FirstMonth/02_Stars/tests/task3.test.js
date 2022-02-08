const treeFigure = require('../src/task3');

describe('twoFigure', () => {
    test('get one triangle stars', () => {
        expect(treeFigure()).toEqual(' *  *  *  *  *  *  * \n' +
            ' *               *\n' +
            ' *            *\n' +
            ' *         *\n' +
            ' *      *\n' +
            ' *   *\n' +
            ' *');
    });
});