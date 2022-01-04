const firstTask = require('../../src/secondBlock/task1');

describe('firstTask', () => {
    test('get sum even number 1...99', () => {
        expect(firstTask()).toBe('2450, 49');
    });
});