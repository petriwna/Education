const fiveFigure = require('../src/task5');

describe('fiveFigure', () => {
    test('get one triangle stars', () => {
        expect(fiveFigure()).toEqual('            *\n' +
            '           **\n' +
            '         *  *\n' +
            '       *    *\n' +
            '     *      *\n' +
            '   *        *\n' +
            '* * * * * * * ');
    });
});