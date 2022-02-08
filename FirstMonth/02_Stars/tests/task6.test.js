const sixFigure = require('../src/task6');

describe('sixFigure', () => {
    test('get one triangle stars', () => {
        expect(sixFigure()).toEqual('* * * * * * * \n' +
            ' *          *\n' +
            '   *        *\n' +
            '     *      *\n' +
            '       *    *\n' +
            '         *  *\n' +
            '            *');
    });
});