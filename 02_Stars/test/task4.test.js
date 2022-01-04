const fourFigure = require('../src/task4');

describe('fourFigure', () => {
    test('get one triangle stars', () => {
        expect(fourFigure()).toEqual('*\n' +
            '* *\n' +
            '*   *\n' +
            '*     *\n' +
            '*       *\n' +
            '*         *\n' +
            '* * * * * * * ');
    });
});