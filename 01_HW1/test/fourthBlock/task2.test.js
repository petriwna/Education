const secondTask = require('../../src/fourthBlock/task2');

describe('secondTask', () => {
    test('get distance between two points', () => {
        expect(secondTask(-8, 5, 9, 6)).toBe(17);
    });
});