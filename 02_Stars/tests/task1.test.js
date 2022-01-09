const oneFigure = require('../src/task1');

describe('oneFigure', () => {
    test('get one line stars', () => {
        expect(oneFigure()).toEqual('*  *  *  *  *  *  *  ');
    });
});