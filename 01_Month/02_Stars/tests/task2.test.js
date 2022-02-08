const twoFigure = require('../src/task2');

describe('twoFigure', () => {
    test('get one square stars', () => {
        expect(twoFigure()).toEqual('*  *  *  *  *  *  *  \n' +
            '*                 *\n' +
            '*                 *\n' +
            '*                 *\n' +
            '*                 *\n' +
            '*                 *\n' +
            '*  *  *  *  *  *  *  ');
    });
});